import dataclasses



@dataclasses.dataclass
class AppsRevokeInstallationAccessTokenResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
