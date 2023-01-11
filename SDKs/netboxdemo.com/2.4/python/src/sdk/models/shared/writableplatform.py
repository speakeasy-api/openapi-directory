import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class WritablePlatformLegacyRPCClientEnum(str, Enum):
    JUNIPER_JUNOS = "juniper-junos"
    CISCO_IOS = "cisco-ios"
    OPENGEAR = "opengear"


@dataclass_json
@dataclasses.dataclass
class WritablePlatformInput:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    slug: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('slug') }})
    manufacturer: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('manufacturer') }})
    napalm_args: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('napalm_args') }})
    napalm_driver: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('napalm_driver') }})
    rpc_client: Optional[WritablePlatformLegacyRPCClientEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rpc_client') }})
    
