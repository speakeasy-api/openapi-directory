import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sim_ip_address_enum_ip_address_version_enum as shared_sim_ip_address_enum_ip_address_version_enum


@dataclass_json
@dataclasses.dataclass
class SupersimV1SimSimIPAddress:
    ip_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip_address') }})
    ip_address_version: Optional[shared_sim_ip_address_enum_ip_address_version_enum.SimIPAddressEnumIPAddressVersionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip_address_version') }})
    
