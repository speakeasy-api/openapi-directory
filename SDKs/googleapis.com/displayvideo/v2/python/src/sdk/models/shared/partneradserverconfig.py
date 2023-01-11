import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import measurementconfig as shared_measurementconfig


@dataclass_json
@dataclasses.dataclass
class PartnerAdServerConfig:
    r"""PartnerAdServerConfig
    Ad server related settings of a partner.
    """
    
    measurement_config: Optional[shared_measurementconfig.MeasurementConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('measurementConfig') }})
    
