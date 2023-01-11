import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GetCarrierOptionsResponseBodyCarrierAdvancedOption:
    r"""GetCarrierOptionsResponseBodyCarrierAdvancedOption
    Advanced options that are specific to the carrier
    """
    
    default_value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('default_value') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class GetCarrierOptionsResponseBody:
    r"""GetCarrierOptionsResponseBody
    A carrier list options response body
    """
    
    options: Optional[list[GetCarrierOptionsResponseBodyCarrierAdvancedOption]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    
