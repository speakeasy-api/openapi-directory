import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import serverless_v1_service_asset as shared_serverless_v1_service_asset


UPDATE_ASSET_SERVERS = [
	"https://serverless.twilio.com",
]


@dataclasses.dataclass
class UpdateAssetPathParams:
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateAssetUpdateAssetRequest:
    friendly_name: str = dataclasses.field(metadata={'form': { 'field_name': 'FriendlyName' }})
    

@dataclasses.dataclass
class UpdateAssetSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateAssetRequest:
    path_params: UpdateAssetPathParams = dataclasses.field()
    security: UpdateAssetSecurity = dataclasses.field()
    request: Optional[UpdateAssetUpdateAssetRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateAssetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    serverless_v1_service_asset: Optional[shared_serverless_v1_service_asset.ServerlessV1ServiceAsset] = dataclasses.field(default=None)
    
