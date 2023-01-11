import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class PostEmailEnrichHeaders:
    galaxy_ap_name: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'galaxy-ap-name', 'style': 'simple', 'explode': False }})
    galaxy_ap_password: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'galaxy-ap-password', 'style': 'simple', 'explode': False }})
    galaxy_search_type: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'galaxy-search-type', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PostEmailEnrichRequestBody:
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Email') }})
    

@dataclasses.dataclass
class PostEmailEnrichRequest:
    headers: PostEmailEnrichHeaders = dataclasses.field()
    request: Optional[PostEmailEnrichRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostEmailEnrichResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
