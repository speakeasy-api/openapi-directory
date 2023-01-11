import dataclasses
from typing import Optional
from ..shared import enduseragreement as shared_enduseragreement


@dataclasses.dataclass
class RetrieveEuaByIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RetrieveEuaByIDRequest:
    path_params: RetrieveEuaByIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class RetrieveEuaByIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    end_user_agreement: Optional[shared_enduseragreement.EndUserAgreement] = dataclasses.field(default=None)
    
