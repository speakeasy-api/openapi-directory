import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ProductDetail:
    r"""ProductDetail
    A product detail of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#productdetail.
    """
    
    attribute_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributeName') }})
    attribute_value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributeValue') }})
    section_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sectionName') }})
    
