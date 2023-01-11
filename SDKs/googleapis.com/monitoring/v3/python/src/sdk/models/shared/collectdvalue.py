import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import typedvalue as shared_typedvalue

class CollectdValueDataSourceTypeEnum(str, Enum):
    UNSPECIFIED_DATA_SOURCE_TYPE = "UNSPECIFIED_DATA_SOURCE_TYPE"
    GAUGE = "GAUGE"
    COUNTER = "COUNTER"
    DERIVE = "DERIVE"
    ABSOLUTE = "ABSOLUTE"


@dataclass_json
@dataclasses.dataclass
class CollectdValue:
    r"""CollectdValue
    A single data point from a collectd-based plugin.
    """
    
    data_source_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSourceName') }})
    data_source_type: Optional[CollectdValueDataSourceTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSourceType') }})
    value: Optional[shared_typedvalue.TypedValue] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
