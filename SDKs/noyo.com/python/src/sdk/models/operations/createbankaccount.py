import dataclasses
from typing import Optional
from ..shared import bankaccountcreaterequest as shared_bankaccountcreaterequest
from ..shared import bankaccountresult as shared_bankaccountresult


@dataclasses.dataclass
class CreateBankAccountPathParams:
    application_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'application_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateBankAccountRequest:
    path_params: CreateBankAccountPathParams = dataclasses.field()
    request: shared_bankaccountcreaterequest.BankAccountCreateRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateBankAccountResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bank_account_result: Optional[shared_bankaccountresult.BankAccountResult] = dataclasses.field(default=None)
    
