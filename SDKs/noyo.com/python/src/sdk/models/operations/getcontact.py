import dataclasses
from typing import Optional
from ..shared import contactresult as shared_contactresult


@dataclasses.dataclass
class GetContactPathParams:
    contact_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'contact_id', 'style': 'simple', 'explode': False }})
    group_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'group_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetContactRequest:
    path_params: GetContactPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetContactResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    contact_result: Optional[shared_contactresult.ContactResult] = dataclasses.field(default=None)
    
