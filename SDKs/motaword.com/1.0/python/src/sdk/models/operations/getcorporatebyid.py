import dataclasses
from typing import Optional
from ..shared import corporateaccount as shared_corporateaccount


@dataclasses.dataclass
class GetCorporateByIDPathParams:
    corporate_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'corporateId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCorporateByIDRequest:
    path_params: GetCorporateByIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCorporateByIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    corporate_account: Optional[shared_corporateaccount.CorporateAccount] = dataclasses.field(default=None)
    
