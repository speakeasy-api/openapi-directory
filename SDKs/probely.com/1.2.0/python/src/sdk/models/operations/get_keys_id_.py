import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import apikey as shared_apikey


@dataclasses.dataclass
class GetKeysIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetKeysID401ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class GetKeysID403ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclasses.dataclass
class GetKeysIDRequest:
    path_params: GetKeysIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetKeysIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_key: Optional[shared_apikey.APIKey] = dataclasses.field(default=None)
    get_keys_id_401_application_json_object: Optional[GetKeysID401ApplicationJSON] = dataclasses.field(default=None)
    get_keys_id_403_application_json_object: Optional[GetKeysID403ApplicationJSON] = dataclasses.field(default=None)
    
