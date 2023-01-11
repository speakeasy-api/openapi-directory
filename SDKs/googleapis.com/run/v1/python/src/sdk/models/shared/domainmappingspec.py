import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class DomainMappingSpecCertificateModeEnum(str, Enum):
    CERTIFICATE_MODE_UNSPECIFIED = "CERTIFICATE_MODE_UNSPECIFIED"
    NONE = "NONE"
    AUTOMATIC = "AUTOMATIC"


@dataclass_json
@dataclasses.dataclass
class DomainMappingSpec:
    r"""DomainMappingSpec
    The desired state of the Domain Mapping.
    """
    
    certificate_mode: Optional[DomainMappingSpecCertificateModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateMode') }})
    force_override: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('forceOverride') }})
    route_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('routeName') }})
    
