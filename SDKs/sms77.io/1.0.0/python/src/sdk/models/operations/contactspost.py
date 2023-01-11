import dataclasses
from typing import Optional
from enum import Enum

class ContactsPostActionEnum(str, Enum):
    DEL = "del"
    WRITE = "write"


@dataclasses.dataclass
class ContactsPostQueryParams:
    action: ContactsPostActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'action', 'style': 'form', 'explode': True }})
    email: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'email', 'style': 'form', 'explode': True }})
    empfaenger: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'empfaenger', 'style': 'form', 'explode': True }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    json: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'json', 'style': 'form', 'explode': True }})
    nick: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'nick', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ContactsPostRequest:
    query_params: ContactsPostQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ContactsPostResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    contacts_post_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    contacts_post_200_text_plain_string: Optional[str] = dataclasses.field(default=None)
    
