import dataclasses
from typing import Optional
from ..shared import sitetyperesponse as shared_sitetyperesponse


@dataclasses.dataclass
class SiteTypesIndexPathParams:
    version: str = dataclasses.field(metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SiteTypesIndexRequest:
    path_params: SiteTypesIndexPathParams = dataclasses.field()
    

@dataclasses.dataclass
class SiteTypesIndexResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    site_type_response: Optional[shared_sitetyperesponse.SiteTypeResponse] = dataclasses.field(default=None)
    
