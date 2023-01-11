import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dnskeyspec as shared_dnskeyspec

class ManagedZoneDNSSecConfigNonExistenceEnum(str, Enum):
    NSEC = "nsec"
    NSEC3 = "nsec3"

class ManagedZoneDNSSecConfigStateEnum(str, Enum):
    OFF = "off"
    ON = "on"
    TRANSFER = "transfer"


@dataclass_json
@dataclasses.dataclass
class ManagedZoneDNSSecConfig:
    default_key_specs: Optional[list[shared_dnskeyspec.DNSKeySpec]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultKeySpecs') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    non_existence: Optional[ManagedZoneDNSSecConfigNonExistenceEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nonExistence') }})
    state: Optional[ManagedZoneDNSSecConfigStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
