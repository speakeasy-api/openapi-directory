import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import scanstatus_enum as shared_scanstatus_enum
from ..shared import scan as shared_scan


@dataclasses.dataclass
class GetTargetsTargetIDScansPathParams:
    target_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'target_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTargetsTargetIDScansQueryParams:
    length: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'length', 'style': 'form', 'explode': True }})
    ordering: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ordering', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    search: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    started: Optional[list[date]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'started', 'style': 'form', 'explode': True }})
    status: Optional[shared_scanstatus_enum.ScanStatusEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetTargetsTargetIDScans200ApplicationJSON:
    count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    length: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('length') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_total: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_total') }})
    results: Optional[list[shared_scan.Scan]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTargetsTargetIDScans401ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTargetsTargetIDScans404ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclasses.dataclass
class GetTargetsTargetIDScansRequest:
    path_params: GetTargetsTargetIDScansPathParams = dataclasses.field()
    query_params: GetTargetsTargetIDScansQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTargetsTargetIDScansResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_targets_target_id_scans_200_application_json_object: Optional[GetTargetsTargetIDScans200ApplicationJSON] = dataclasses.field(default=None)
    get_targets_target_id_scans_401_application_json_object: Optional[GetTargetsTargetIDScans401ApplicationJSON] = dataclasses.field(default=None)
    get_targets_target_id_scans_404_application_json_object: Optional[GetTargetsTargetIDScans404ApplicationJSON] = dataclasses.field(default=None)
    
