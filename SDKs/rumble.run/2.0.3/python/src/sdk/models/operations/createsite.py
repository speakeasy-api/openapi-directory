import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import siteoptions as shared_siteoptions
from ..shared import site as shared_site


@dataclasses.dataclass
class CreateSiteSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class CreateSiteRequest:
    request: shared_siteoptions.SiteOptions = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateSiteSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CreateSiteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    site: Optional[shared_site.Site] = dataclasses.field(default=None)
    
