import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class UniversalAdIDRegistryEnum(str, Enum):
    OTHER = "OTHER"
    AD_ID_OFFICIAL = "AD_ID_OFFICIAL"
    CLEARCAST = "CLEARCAST"
    DCM = "DCM"


@dataclass_json
@dataclasses.dataclass
class UniversalAdID:
    r"""UniversalAdID
    A Universal Ad ID as per the VAST 4.0 spec. Applicable to the following creative types: INSTREAM_AUDIO, INSTREAM_VIDEO and VPAID.
    """
    
    registry: Optional[UniversalAdIDRegistryEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registry') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
