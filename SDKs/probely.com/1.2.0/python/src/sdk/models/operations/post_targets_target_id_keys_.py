import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import apikey as shared_apikey
from ..shared import apikey as shared_apikey


@dataclasses.dataclass
class PostTargetsTargetIDKeysPathParams:
    target_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'target_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PostTargetsTargetIDKeys400ApplicationJSON:
    less_than_field_name_greater_than_: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('<field name>') }})
    non_field_errors: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('non_field_errors') }})
    

@dataclass_json
@dataclasses.dataclass
class PostTargetsTargetIDKeys401ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class PostTargetsTargetIDKeys403ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class PostTargetsTargetIDKeys404ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclasses.dataclass
class PostTargetsTargetIDKeysRequest:
    path_params: PostTargetsTargetIDKeysPathParams = dataclasses.field()
    request: shared_apikey.APIKeyInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostTargetsTargetIDKeysResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_key: Optional[shared_apikey.APIKey] = dataclasses.field(default=None)
    post_targets_target_id_keys_400_application_json_object: Optional[PostTargetsTargetIDKeys400ApplicationJSON] = dataclasses.field(default=None)
    post_targets_target_id_keys_401_application_json_object: Optional[PostTargetsTargetIDKeys401ApplicationJSON] = dataclasses.field(default=None)
    post_targets_target_id_keys_403_application_json_object: Optional[PostTargetsTargetIDKeys403ApplicationJSON] = dataclasses.field(default=None)
    post_targets_target_id_keys_404_application_json_object: Optional[PostTargetsTargetIDKeys404ApplicationJSON] = dataclasses.field(default=None)
    
