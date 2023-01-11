import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class GetTargetsTargetIDScansRetrievePagePathParams:
    target_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'target_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTargetsTargetIDScansRetrievePageQueryParams:
    date_: date = dataclasses.field(metadata={'query_param': { 'field_name': 'date', 'style': 'form', 'explode': True }})
    length: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'length', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetTargetsTargetIDScansRetrievePage200ApplicationJSON:
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTargetsTargetIDScansRetrievePage400ApplicationJSON:
    error: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTargetsTargetIDScansRetrievePage401ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTargetsTargetIDScansRetrievePage404ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclasses.dataclass
class GetTargetsTargetIDScansRetrievePageRequest:
    path_params: GetTargetsTargetIDScansRetrievePagePathParams = dataclasses.field()
    query_params: GetTargetsTargetIDScansRetrievePageQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTargetsTargetIDScansRetrievePageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_targets_target_id_scans_retrieve_page_200_application_json_object: Optional[GetTargetsTargetIDScansRetrievePage200ApplicationJSON] = dataclasses.field(default=None)
    get_targets_target_id_scans_retrieve_page_400_application_json_object: Optional[GetTargetsTargetIDScansRetrievePage400ApplicationJSON] = dataclasses.field(default=None)
    get_targets_target_id_scans_retrieve_page_401_application_json_object: Optional[GetTargetsTargetIDScansRetrievePage401ApplicationJSON] = dataclasses.field(default=None)
    get_targets_target_id_scans_retrieve_page_404_application_json_object: Optional[GetTargetsTargetIDScansRetrievePage404ApplicationJSON] = dataclasses.field(default=None)
    
