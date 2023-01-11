import dataclasses
from typing import Optional
from ..shared import announcement as shared_announcement


@dataclasses.dataclass
class EnterpriseAdminSetAnnouncementRequest:
    request: Optional[shared_announcement.Announcement] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class EnterpriseAdminSetAnnouncementResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    announcement: Optional[shared_announcement.Announcement] = dataclasses.field(default=None)
    
