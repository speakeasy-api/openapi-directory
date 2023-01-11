import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import gamesnumberaffixconfiguration as shared_gamesnumberaffixconfiguration

class GamesNumberFormatConfigurationNumberFormatTypeEnum(str, Enum):
    NUMBER_FORMAT_TYPE_UNSPECIFIED = "NUMBER_FORMAT_TYPE_UNSPECIFIED"
    NUMERIC = "NUMERIC"
    TIME_DURATION = "TIME_DURATION"
    CURRENCY = "CURRENCY"


@dataclass_json
@dataclasses.dataclass
class GamesNumberFormatConfiguration:
    r"""GamesNumberFormatConfiguration
    A number format resource.
    """
    
    currency_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyCode') }})
    num_decimal_places: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numDecimalPlaces') }})
    number_format_type: Optional[GamesNumberFormatConfigurationNumberFormatTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numberFormatType') }})
    suffix: Optional[shared_gamesnumberaffixconfiguration.GamesNumberAffixConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suffix') }})
    
