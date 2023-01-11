import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import settingsresponse as shared_settingsresponse


@dataclasses.dataclass
class GetWebhooksV3AppIDSettingsGetAllPathParams:
    app_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetWebhooksV3AppIDSettingsGetAllSecurity:
    developer_hapikey: shared_security.SchemeDeveloperHapikey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclasses.dataclass
class GetWebhooksV3AppIDSettingsGetAllRequest:
    path_params: GetWebhooksV3AppIDSettingsGetAllPathParams = dataclasses.field()
    security: GetWebhooksV3AppIDSettingsGetAllSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetWebhooksV3AppIDSettingsGetAllResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    settings_response: Optional[shared_settingsresponse.SettingsResponse] = dataclasses.field(default=None)
    
