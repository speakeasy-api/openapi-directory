import dataclasses
from typing import Optional
from ..shared import siteresponse as shared_siteresponse


@dataclasses.dataclass
class SitesIndexPathParams:
    version: str = dataclasses.field(metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SitesIndexRequest:
    path_params: SitesIndexPathParams = dataclasses.field()
    

@dataclasses.dataclass
class SitesIndexResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    site_response: Optional[shared_siteresponse.SiteResponse] = dataclasses.field(default=None)
    
