import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import label as shared_label
from ..shared import section as shared_section


@dataclass_json
@dataclasses.dataclass
class PriceList:
    r"""PriceList
    A list of item price information. Price lists are structured as one or more price lists, each containing one or more sections with one or more items. For example, food price lists may represent breakfast/lunch/dinner menus, with sections for burgers/steak/seafood.
    """
    
    labels: Optional[list[shared_label.Label]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    price_list_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceListId') }})
    sections: Optional[list[shared_section.Section]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sections') }})
    source_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceUrl') }})
    
