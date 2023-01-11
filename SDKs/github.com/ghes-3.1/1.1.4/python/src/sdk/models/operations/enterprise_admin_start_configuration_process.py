import dataclasses



@dataclasses.dataclass
class EnterpriseAdminStartConfigurationProcessResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
