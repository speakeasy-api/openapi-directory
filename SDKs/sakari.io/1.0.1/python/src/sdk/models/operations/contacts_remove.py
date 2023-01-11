import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class ContactsRemovePathParams:
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    contact_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'contactId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ContactsRemoveSecurity:
    sakari_auth: shared_security.SchemeSakariAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class ContactsRemove200ApplicationJSON:
    success: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    

@dataclasses.dataclass
class ContactsRemoveRequest:
    path_params: ContactsRemovePathParams = dataclasses.field()
    security: ContactsRemoveSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ContactsRemoveResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    contacts_remove_200_application_json_object: Optional[ContactsRemove200ApplicationJSON] = dataclasses.field(default=None)
    
