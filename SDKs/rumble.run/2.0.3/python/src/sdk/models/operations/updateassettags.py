import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import assettags as shared_assettags
from ..shared import asset as shared_asset


@dataclasses.dataclass
class UpdateAssetTagsPathParams:
    asset_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'asset_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateAssetTagsSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class UpdateAssetTagsRequest:
    path_params: UpdateAssetTagsPathParams = dataclasses.field()
    request: shared_assettags.AssetTags = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateAssetTagsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class UpdateAssetTagsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    asset: Optional[shared_asset.Asset] = dataclasses.field(default=None)
    
