import dataclasses
from typing import Optional
from ..shared import enduseragreement as shared_enduseragreement
from ..shared import enduseragreement as shared_enduseragreement


@dataclasses.dataclass
class CreateEuaRequestsInput:
    end_user_agreement: Optional[shared_enduseragreement.EndUserAgreementInput] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    end_user_agreement1: Optional[shared_enduseragreement.EndUserAgreementInput] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    end_user_agreement2: Optional[shared_enduseragreement.EndUserAgreementInput] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class CreateEuaRequest:
    request: CreateEuaRequestsInput = dataclasses.field()
    

@dataclasses.dataclass
class CreateEuaResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    end_user_agreement: Optional[shared_enduseragreement.EndUserAgreement] = dataclasses.field(default=None)
    
