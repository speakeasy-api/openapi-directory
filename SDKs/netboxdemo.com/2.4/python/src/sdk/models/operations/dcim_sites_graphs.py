import dataclasses
from typing import Optional
from ..shared import site as shared_site


@dataclasses.dataclass
class DcimSitesGraphsPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimSitesGraphsRequest:
    path_params: DcimSitesGraphsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimSitesGraphsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    site: Optional[shared_site.Site] = dataclasses.field(default=None)
    
