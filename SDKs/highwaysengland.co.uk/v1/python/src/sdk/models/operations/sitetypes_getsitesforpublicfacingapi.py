import dataclasses
from typing import Optional
from ..shared import sitetypelayer as shared_sitetypelayer


@dataclasses.dataclass
class SiteTypesGetSitesForPublicFacingAPIPathParams:
    site_type_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'siteType_Id', 'style': 'simple', 'explode': False }})
    version: str = dataclasses.field(metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SiteTypesGetSitesForPublicFacingAPIRequest:
    path_params: SiteTypesGetSitesForPublicFacingAPIPathParams = dataclasses.field()
    

@dataclasses.dataclass
class SiteTypesGetSitesForPublicFacingAPIResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    site_type_layer: Optional[shared_sitetypelayer.SiteTypeLayer] = dataclasses.field(default=None)
    
