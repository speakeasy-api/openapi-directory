import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import managedzoneservicedirectoryconfignamespace as shared_managedzoneservicedirectoryconfignamespace


@dataclass_json
@dataclasses.dataclass
class ManagedZoneServiceDirectoryConfig:
    r"""ManagedZoneServiceDirectoryConfig
    Contains information about Service Directory-backed zones.
    """
    
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    namespace: Optional[shared_managedzoneservicedirectoryconfignamespace.ManagedZoneServiceDirectoryConfigNamespace] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namespace') }})
    
