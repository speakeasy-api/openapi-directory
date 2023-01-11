import dataclasses
from typing import Optional
from ..shared import announcement as shared_announcement


@dataclasses.dataclass
class EnterpriseAdminGetAnnouncementResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    announcement: Optional[shared_announcement.Announcement] = dataclasses.field(default=None)
    
