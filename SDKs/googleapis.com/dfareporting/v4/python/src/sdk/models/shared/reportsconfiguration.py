import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import lookbackconfiguration as shared_lookbackconfiguration


@dataclass_json
@dataclasses.dataclass
class ReportsConfiguration:
    r"""ReportsConfiguration
    Reporting Configuration
    """
    
    exposure_to_conversion_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exposureToConversionEnabled') }})
    lookback_configuration: Optional[shared_lookbackconfiguration.LookbackConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lookbackConfiguration') }})
    report_generation_time_zone_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportGenerationTimeZoneId') }})
    
