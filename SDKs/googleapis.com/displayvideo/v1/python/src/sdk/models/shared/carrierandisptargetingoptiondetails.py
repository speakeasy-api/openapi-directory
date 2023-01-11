import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class CarrierAndIspTargetingOptionDetailsTypeEnum(str, Enum):
    CARRIER_AND_ISP_TYPE_UNSPECIFIED = "CARRIER_AND_ISP_TYPE_UNSPECIFIED"
    CARRIER_AND_ISP_TYPE_ISP = "CARRIER_AND_ISP_TYPE_ISP"
    CARRIER_AND_ISP_TYPE_CARRIER = "CARRIER_AND_ISP_TYPE_CARRIER"


@dataclass_json
@dataclasses.dataclass
class CarrierAndIspTargetingOptionDetails:
    r"""CarrierAndIspTargetingOptionDetails
    Represents a targetable carrier or ISP. This will be populated in the carrier_and_isp_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_CARRIER_AND_ISP`.
    """
    
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    type: Optional[CarrierAndIspTargetingOptionDetailsTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
