import dataclasses
from typing import Any,Optional
from ..shared import banktransfermigrateaccountrequest as shared_banktransfermigrateaccountrequest


@dataclasses.dataclass
class BankTransferMigrateAccountRequest:
    request: shared_banktransfermigrateaccountrequest.BankTransferMigrateAccountRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class BankTransferMigrateAccountResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bank_transfer_migrate_account_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
