import dataclasses
from typing import Optional
from ..shared import contactcreaterequest as shared_contactcreaterequest
from ..shared import contactresult as shared_contactresult


@dataclasses.dataclass
class CreateContactPathParams:
    group_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'group_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateContactRequest:
    path_params: CreateContactPathParams = dataclasses.field()
    request: shared_contactcreaterequest.ContactCreateRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateContactResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    contact_result: Optional[shared_contactresult.ContactResult] = dataclasses.field(default=None)
    
