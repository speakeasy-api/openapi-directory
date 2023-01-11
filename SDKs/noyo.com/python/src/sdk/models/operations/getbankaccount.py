import dataclasses
from typing import Optional
from ..shared import bankaccountresult as shared_bankaccountresult


@dataclasses.dataclass
class GetBankAccountPathParams:
    application_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'application_id', 'style': 'simple', 'explode': False }})
    bank_account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'bank_account_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetBankAccountRequest:
    path_params: GetBankAccountPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetBankAccountResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bank_account_result: Optional[shared_bankaccountresult.BankAccountResult] = dataclasses.field(default=None)
    
