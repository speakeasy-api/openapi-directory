import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import apikey as shared_apikey
from ..shared import apikey as shared_apikey


@dataclass_json
@dataclasses.dataclass
class PostKeys401ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class PostKeys403ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclasses.dataclass
class PostKeysRequest:
    request: shared_apikey.APIKeyInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostKeysResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_key: Optional[shared_apikey.APIKey] = dataclasses.field(default=None)
    post_keys_401_application_json_object: Optional[PostKeys401ApplicationJSON] = dataclasses.field(default=None)
    post_keys_403_application_json_object: Optional[PostKeys403ApplicationJSON] = dataclasses.field(default=None)
    
