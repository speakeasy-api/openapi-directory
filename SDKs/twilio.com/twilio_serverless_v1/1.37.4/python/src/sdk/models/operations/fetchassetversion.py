import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import serverless_v1_service_asset_asset_version as shared_serverless_v1_service_asset_asset_version


FETCH_ASSET_VERSION_SERVERS = [
	"https://serverless.twilio.com",
]


@dataclasses.dataclass
class FetchAssetVersionPathParams:
    asset_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AssetSid', 'style': 'simple', 'explode': False }})
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchAssetVersionSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchAssetVersionRequest:
    path_params: FetchAssetVersionPathParams = dataclasses.field()
    security: FetchAssetVersionSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchAssetVersionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    serverless_v1_service_asset_asset_version: Optional[shared_serverless_v1_service_asset_asset_version.ServerlessV1ServiceAssetAssetVersion] = dataclasses.field(default=None)
    
