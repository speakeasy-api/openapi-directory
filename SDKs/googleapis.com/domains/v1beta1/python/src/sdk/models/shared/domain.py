import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import money as shared_money

class DomainResourceStateEnum(str, Enum):
    RESOURCE_STATE_UNSPECIFIED = "RESOURCE_STATE_UNSPECIFIED"
    IMPORTABLE = "IMPORTABLE"
    UNSUPPORTED = "UNSUPPORTED"
    SUSPENDED = "SUSPENDED"
    EXPIRED = "EXPIRED"
    DELETED = "DELETED"


@dataclass_json
@dataclasses.dataclass
class Domain:
    r"""Domain
    A domain that the calling user manages in Google Domains.
    """
    
    domain_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainName') }})
    resource_state: Optional[DomainResourceStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceState') }})
    yearly_price: Optional[shared_money.Money] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('yearlyPrice') }})
    
