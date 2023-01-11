import dataclasses
from typing import Optional
from ..shared import siteresponse as shared_siteresponse


@dataclasses.dataclass
class GetVVersionSitesSiteIdsPathParams:
    site_ids: str = dataclasses.field(metadata={'path_param': { 'field_name': 'site_Ids', 'style': 'simple', 'explode': False }})
    version: str = dataclasses.field(metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetVVersionSitesSiteIdsRequest:
    path_params: GetVVersionSitesSiteIdsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetVVersionSitesSiteIdsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    site_response: Optional[shared_siteresponse.SiteResponse] = dataclasses.field(default=None)
    
