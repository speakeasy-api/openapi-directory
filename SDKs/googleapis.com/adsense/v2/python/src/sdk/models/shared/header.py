import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class HeaderTypeEnum(str, Enum):
    HEADER_TYPE_UNSPECIFIED = "HEADER_TYPE_UNSPECIFIED"
    DIMENSION = "DIMENSION"
    METRIC_TALLY = "METRIC_TALLY"
    METRIC_RATIO = "METRIC_RATIO"
    METRIC_CURRENCY = "METRIC_CURRENCY"
    METRIC_MILLISECONDS = "METRIC_MILLISECONDS"
    METRIC_DECIMAL = "METRIC_DECIMAL"


@dataclass_json
@dataclasses.dataclass
class Header:
    r"""Header
    The header information of the columns requested in the report.
    """
    
    currency_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyCode') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: Optional[HeaderTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
