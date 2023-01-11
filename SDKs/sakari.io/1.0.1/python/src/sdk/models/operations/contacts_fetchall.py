import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import contactsresponse as shared_contactsresponse
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class ContactsFetchAllPathParams:
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ContactsFetchAllQueryParams:
    email: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'email', 'style': 'form', 'explode': True }})
    first_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'firstName', 'style': 'form', 'explode': True }})
    last_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'lastName', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    mobile: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'mobile', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    tags: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tags', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ContactsFetchAllSecurity:
    sakari_auth: shared_security.SchemeSakariAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class ContactsFetchAllRequest:
    path_params: ContactsFetchAllPathParams = dataclasses.field()
    query_params: ContactsFetchAllQueryParams = dataclasses.field()
    security: ContactsFetchAllSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ContactsFetchAllResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    contacts_response: Optional[shared_contactsresponse.ContactsResponse] = dataclasses.field(default=None)
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    
