import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetAssetContributorsPathParams:
    asset_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'assetId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAssetContributorsQueryParams:
    aliases: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'aliases', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAssetContributorsSecurity:
    apikey: shared_security.SchemeApikey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetAssetContributorsRequest:
    path_params: GetAssetContributorsPathParams = dataclasses.field()
    query_params: GetAssetContributorsQueryParams = dataclasses.field()
    security: GetAssetContributorsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetAssetContributorsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_asset_contributors_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
