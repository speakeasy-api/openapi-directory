import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import assetcomments as shared_assetcomments
from ..shared import asset as shared_asset


@dataclasses.dataclass
class UpdateAssetCommentsPathParams:
    asset_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'asset_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateAssetCommentsSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class UpdateAssetCommentsRequest:
    path_params: UpdateAssetCommentsPathParams = dataclasses.field()
    request: shared_assetcomments.AssetComments = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateAssetCommentsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class UpdateAssetCommentsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    asset: Optional[shared_asset.Asset] = dataclasses.field(default=None)
    
