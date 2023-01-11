import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import serverless_v1_service_asset as shared_serverless_v1_service_asset


FETCH_ASSET_SERVERS = [
	"https://serverless.twilio.com",
]


@dataclasses.dataclass
class FetchAssetPathParams:
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchAssetSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchAssetRequest:
    path_params: FetchAssetPathParams = dataclasses.field()
    security: FetchAssetSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchAssetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    serverless_v1_service_asset: Optional[shared_serverless_v1_service_asset.ServerlessV1ServiceAsset] = dataclasses.field(default=None)
    
