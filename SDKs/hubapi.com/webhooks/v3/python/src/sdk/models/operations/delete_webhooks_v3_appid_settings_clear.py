import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteWebhooksV3AppIDSettingsClearPathParams:
    app_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteWebhooksV3AppIDSettingsClearSecurity:
    developer_hapikey: shared_security.SchemeDeveloperHapikey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclasses.dataclass
class DeleteWebhooksV3AppIDSettingsClearRequest:
    path_params: DeleteWebhooksV3AppIDSettingsClearPathParams = dataclasses.field()
    security: DeleteWebhooksV3AppIDSettingsClearSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteWebhooksV3AppIDSettingsClearResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
