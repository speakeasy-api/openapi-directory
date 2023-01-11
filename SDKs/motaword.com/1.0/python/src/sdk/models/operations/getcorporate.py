import dataclasses
from typing import Optional
from ..shared import corporateaccount as shared_corporateaccount


@dataclasses.dataclass
class GetCorporateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    corporate_account: Optional[shared_corporateaccount.CorporateAccount] = dataclasses.field(default=None)
    
