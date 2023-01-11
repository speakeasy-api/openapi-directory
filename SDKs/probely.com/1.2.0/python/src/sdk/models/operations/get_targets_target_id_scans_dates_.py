import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class GetTargetsTargetIDScansDatesPathParams:
    target_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'target_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetTargetsTargetIDScansDates401ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTargetsTargetIDScansDates404ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclasses.dataclass
class GetTargetsTargetIDScansDatesRequest:
    path_params: GetTargetsTargetIDScansDatesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTargetsTargetIDScansDatesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_targets_target_id_scans_dates_200_application_json_date_strings: Optional[list[date]] = dataclasses.field(default=None)
    get_targets_target_id_scans_dates_401_application_json_object: Optional[GetTargetsTargetIDScansDates401ApplicationJSON] = dataclasses.field(default=None)
    get_targets_target_id_scans_dates_404_application_json_object: Optional[GetTargetsTargetIDScansDates404ApplicationJSON] = dataclasses.field(default=None)
    
