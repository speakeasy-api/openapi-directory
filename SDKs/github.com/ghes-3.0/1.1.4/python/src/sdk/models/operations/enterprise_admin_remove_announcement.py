import dataclasses



@dataclasses.dataclass
class EnterpriseAdminRemoveAnnouncementResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
