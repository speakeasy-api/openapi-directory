import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import contactresponse as shared_contactresponse


@dataclasses.dataclass
class ContactsUpdatePathParams:
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    contact_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'contactId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ContactsUpdateSecurity:
    sakari_auth: shared_security.SchemeSakariAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class ContactsUpdateRequest:
    path_params: ContactsUpdatePathParams = dataclasses.field()
    security: ContactsUpdateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ContactsUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    contact_response: Optional[shared_contactresponse.ContactResponse] = dataclasses.field(default=None)
    
