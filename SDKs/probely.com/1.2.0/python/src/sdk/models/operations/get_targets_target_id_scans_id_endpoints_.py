import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class GetTargetsTargetIDScansIDEndpointsPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    target_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'target_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetTargetsTargetIDScansIDEndpoints401ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTargetsTargetIDScansIDEndpoints404ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclasses.dataclass
class GetTargetsTargetIDScansIDEndpointsRequest:
    path_params: GetTargetsTargetIDScansIDEndpointsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTargetsTargetIDScansIDEndpointsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_targets_target_id_scans_id_endpoints_200_application_csv_binary_string: Optional[bytes] = dataclasses.field(default=None)
    get_targets_target_id_scans_id_endpoints_401_application_json_object: Optional[GetTargetsTargetIDScansIDEndpoints401ApplicationJSON] = dataclasses.field(default=None)
    get_targets_target_id_scans_id_endpoints_404_application_json_object: Optional[GetTargetsTargetIDScansIDEndpoints404ApplicationJSON] = dataclasses.field(default=None)
    
