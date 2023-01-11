import dataclasses
from typing import Any,Optional
from enum import Enum
from ..shared import accountid_enum as shared_accountid_enum
from ..shared import contactrequest as shared_contactrequest
from ..shared import security as shared_security
from ..shared import contactsresponse as shared_contactsresponse
from ..shared import contactuploadresponse as shared_contactuploadresponse


@dataclasses.dataclass
class ContactsCreatePathParams:
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ContactsCreateQueryParams:
    merge_strategy: Optional[shared_accountid_enum.AccountIDEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'mergeStrategy', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ContactsCreateRequests:
    contact_request: Optional[shared_contactrequest.ContactRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    string: Optional[str] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/csv' }})
    

@dataclasses.dataclass
class ContactsCreateSecurity:
    sakari_auth: shared_security.SchemeSakariAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class ContactsCreateRequest:
    path_params: ContactsCreatePathParams = dataclasses.field()
    query_params: ContactsCreateQueryParams = dataclasses.field()
    security: ContactsCreateSecurity = dataclasses.field()
    request: Optional[ContactsCreateRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ContactsCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    contacts_create_201_application_json_one_of: Optional[Any] = dataclasses.field(default=None)
    
