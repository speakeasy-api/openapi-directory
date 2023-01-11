import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class IFrameActionBodyTypeEnum(str, Enum):
    IFRAME = "IFRAME"


@dataclass_json
@dataclasses.dataclass
class IFrameActionBody:
    height: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('height') }})
    property_names_included: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('propertyNamesIncluded') }})
    type: IFrameActionBodyTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    width: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    label: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    
