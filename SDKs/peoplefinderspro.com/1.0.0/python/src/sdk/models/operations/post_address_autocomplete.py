import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class PostAddressAutocompleteHeaders:
    galaxy_ap_name: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'galaxy-ap-name', 'style': 'simple', 'explode': False }})
    galaxy_ap_password: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'galaxy-ap-password', 'style': 'simple', 'explode': False }})
    galaxy_search_type: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'galaxy-search-type', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PostAddressAutocompleteRequestBody:
    input: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Input') }})
    

@dataclasses.dataclass
class PostAddressAutocompleteRequest:
    headers: PostAddressAutocompleteHeaders = dataclasses.field()
    request: Optional[PostAddressAutocompleteRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostAddressAutocompleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
