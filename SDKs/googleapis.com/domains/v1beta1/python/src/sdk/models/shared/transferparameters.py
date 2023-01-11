import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import money as shared_money

class TransferParametersSupportedPrivacyEnum(str, Enum):
    CONTACT_PRIVACY_UNSPECIFIED = "CONTACT_PRIVACY_UNSPECIFIED"
    PUBLIC_CONTACT_DATA = "PUBLIC_CONTACT_DATA"
    PRIVATE_CONTACT_DATA = "PRIVATE_CONTACT_DATA"
    REDACTED_CONTACT_DATA = "REDACTED_CONTACT_DATA"

class TransferParametersTransferLockStateEnum(str, Enum):
    TRANSFER_LOCK_STATE_UNSPECIFIED = "TRANSFER_LOCK_STATE_UNSPECIFIED"
    UNLOCKED = "UNLOCKED"
    LOCKED = "LOCKED"


@dataclass_json
@dataclasses.dataclass
class TransferParameters:
    r"""TransferParameters
    Parameters required to transfer a domain from another registrar.
    """
    
    current_registrar: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentRegistrar') }})
    current_registrar_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentRegistrarUri') }})
    domain_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainName') }})
    name_servers: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nameServers') }})
    supported_privacy: Optional[list[TransferParametersSupportedPrivacyEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportedPrivacy') }})
    transfer_lock_state: Optional[TransferParametersTransferLockStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transferLockState') }})
    yearly_price: Optional[shared_money.Money] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('yearlyPrice') }})
    
