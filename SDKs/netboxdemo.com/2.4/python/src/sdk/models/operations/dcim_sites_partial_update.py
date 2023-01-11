import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import writablesite as shared_writablesite
from ..shared import site as shared_site


@dataclasses.dataclass
class DcimSitesPartialUpdatePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimSitesPartialUpdateRequest:
    path_params: DcimSitesPartialUpdatePathParams = dataclasses.field()
    request: shared_writablesite.WritableSiteInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DcimSitesPartialUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    site: Optional[shared_site.Site] = dataclasses.field(default=None)
    
