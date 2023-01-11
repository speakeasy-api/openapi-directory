import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import apikey as shared_apikey


@dataclasses.dataclass
class GetTargetsTargetIDKeysIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    target_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'target_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetTargetsTargetIDKeysID403ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTargetsTargetIDKeysID404ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclasses.dataclass
class GetTargetsTargetIDKeysIDRequest:
    path_params: GetTargetsTargetIDKeysIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTargetsTargetIDKeysIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_key: Optional[shared_apikey.APIKey] = dataclasses.field(default=None)
    get_targets_target_id_keys_id_403_application_json_object: Optional[GetTargetsTargetIDKeysID403ApplicationJSON] = dataclasses.field(default=None)
    get_targets_target_id_keys_id_404_application_json_object: Optional[GetTargetsTargetIDKeysID404ApplicationJSON] = dataclasses.field(default=None)
    
