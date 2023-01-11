import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import settingschangerequest as shared_settingschangerequest
from ..shared import settingsresponse as shared_settingsresponse


@dataclasses.dataclass
class PutWebhooksV3AppIDSettingsConfigurePathParams:
    app_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutWebhooksV3AppIDSettingsConfigureSecurity:
    developer_hapikey: shared_security.SchemeDeveloperHapikey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclasses.dataclass
class PutWebhooksV3AppIDSettingsConfigureRequest:
    path_params: PutWebhooksV3AppIDSettingsConfigurePathParams = dataclasses.field()
    request: shared_settingschangerequest.SettingsChangeRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: PutWebhooksV3AppIDSettingsConfigureSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PutWebhooksV3AppIDSettingsConfigureResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    settings_response: Optional[shared_settingsresponse.SettingsResponse] = dataclasses.field(default=None)
    
