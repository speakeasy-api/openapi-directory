import dataclasses
from typing import Optional
from ..shared import accountsettingsrequest as shared_accountsettingsrequest
from ..shared import accountsettings as shared_accountsettings


CHANGE_ACCOUNT_SETTINGS_SERVERS = [
	"https://rest.nexmo.com",
]


@dataclasses.dataclass
class ChangeAccountSettingsQueryParams:
    api_key: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    api_secret: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api_secret', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ChangeAccountSettingsRequest:
    query_params: ChangeAccountSettingsQueryParams = dataclasses.field()
    request: Optional[shared_accountsettingsrequest.AccountSettingsRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ChangeAccountSettingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    account_settings: Optional[shared_accountsettings.AccountSettings] = dataclasses.field(default=None)
    
