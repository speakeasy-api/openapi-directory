import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import item as shared_item
from ..shared import label as shared_label

class SectionSectionTypeEnum(str, Enum):
    SECTION_TYPE_UNSPECIFIED = "SECTION_TYPE_UNSPECIFIED"
    FOOD = "FOOD"
    SERVICES = "SERVICES"


@dataclass_json
@dataclasses.dataclass
class Section:
    r"""Section
    A section of the price list containing one or more items.
    """
    
    items: Optional[list[shared_item.Item]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    labels: Optional[list[shared_label.Label]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    section_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sectionId') }})
    section_type: Optional[SectionSectionTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sectionType') }})
    
