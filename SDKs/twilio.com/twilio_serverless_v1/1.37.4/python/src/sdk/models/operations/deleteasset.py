import dataclasses
from typing import Optional
from ..shared import security as shared_security


DELETE_ASSET_SERVERS = [
	"https://serverless.twilio.com",
]


@dataclasses.dataclass
class DeleteAssetPathParams:
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteAssetSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteAssetRequest:
    path_params: DeleteAssetPathParams = dataclasses.field()
    security: DeleteAssetSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteAssetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
