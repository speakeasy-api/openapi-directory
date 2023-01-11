import dataclasses



@dataclasses.dataclass
class SecretsGenerateRsaKeyPairListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
