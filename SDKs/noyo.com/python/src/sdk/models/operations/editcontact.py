import dataclasses
from typing import Optional
from ..shared import contacteditrequest as shared_contacteditrequest
from ..shared import contactresult as shared_contactresult


@dataclasses.dataclass
class EditContactPathParams:
    contact_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'contact_id', 'style': 'simple', 'explode': False }})
    group_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'group_id', 'style': 'simple', 'explode': False }})
    version: str = dataclasses.field(metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EditContactRequest:
    path_params: EditContactPathParams = dataclasses.field()
    request: shared_contacteditrequest.ContactEditRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class EditContactResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    contact_result: Optional[shared_contactresult.ContactResult] = dataclasses.field(default=None)
    
