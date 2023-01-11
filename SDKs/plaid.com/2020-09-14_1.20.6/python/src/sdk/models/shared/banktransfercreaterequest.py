import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import achclass_enum as shared_achclass_enum
from ..shared import banktransfernetwork_enum as shared_banktransfernetwork_enum
from ..shared import banktransfertype_enum as shared_banktransfertype_enum


@dataclass_json
@dataclasses.dataclass
class BankTransferCreateRequest:
    r"""BankTransferCreateRequest
    BankTransferCreateRequest defines the request schema for `/bank_transfer/create`
    """
    
    access_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('access_token') }})
    account_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_id') }})
    amount: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    idempotency_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('idempotency_key') }})
    iso_currency_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('iso_currency_code') }})
    network: shared_banktransfernetwork_enum.BankTransferNetworkEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('network') }})
    type: shared_banktransfertype_enum.BankTransferTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    user: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    ach_class: Optional[shared_achclass_enum.AchClassEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ach_class') }})
    client_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_id') }})
    custom_tag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_tag') }})
    metadata: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    origination_account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('origination_account_id') }})
    secret: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    
