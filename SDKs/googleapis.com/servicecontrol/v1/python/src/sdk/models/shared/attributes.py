import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import attributevalue as shared_attributevalue


@dataclass_json
@dataclasses.dataclass
class Attributes:
    r"""Attributes
    A set of attributes, each in the format `[KEY]:[VALUE]`.
    """
    
    attribute_map: Optional[dict[str, shared_attributevalue.AttributeValue]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributeMap') }})
    dropped_attributes_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('droppedAttributesCount') }})
    
