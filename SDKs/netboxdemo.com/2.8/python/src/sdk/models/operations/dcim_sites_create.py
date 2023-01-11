import dataclasses
from typing import Optional
from ..shared import writablesite as shared_writablesite
from ..shared import site as shared_site


@dataclasses.dataclass
class DcimSitesCreateRequest:
    request: shared_writablesite.WritableSiteInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DcimSitesCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    site: Optional[shared_site.Site] = dataclasses.field(default=None)
    
