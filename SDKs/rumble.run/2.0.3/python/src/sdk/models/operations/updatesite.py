import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import siteoptions as shared_siteoptions
from ..shared import site as shared_site


@dataclasses.dataclass
class UpdateSitePathParams:
    site_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'site_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateSiteSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class UpdateSiteRequest:
    path_params: UpdateSitePathParams = dataclasses.field()
    request: shared_siteoptions.SiteOptions = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateSiteSecurity = dataclasses.field()
    

@dataclasses.dataclass
class UpdateSiteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    site: Optional[shared_site.Site] = dataclasses.field(default=None)
    
