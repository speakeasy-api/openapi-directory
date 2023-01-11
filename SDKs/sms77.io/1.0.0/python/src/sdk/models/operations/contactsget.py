import dataclasses
from typing import Optional
from enum import Enum

class ContactsGetActionEnum(str, Enum):
    READ = "read"


@dataclasses.dataclass
class ContactsGetQueryParams:
    action: ContactsGetActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'action', 'style': 'form', 'explode': True }})
    json: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'json', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ContactsGetRequest:
    query_params: ContactsGetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ContactsGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    contacts_get_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    contacts_get_200_text_csv_string: Optional[str] = dataclasses.field(default=None)
    
