import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import conversion as shared_conversion


@dataclass_json
@dataclasses.dataclass
class ConversionList:
    r"""ConversionList
    A list of conversions.
    """
    
    conversion: Optional[list[shared_conversion.Conversion]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conversion') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
