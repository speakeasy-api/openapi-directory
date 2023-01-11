import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import attribute as shared_attribute
from ..shared import attribute as shared_attribute


@dataclass_json
@dataclasses.dataclass
class Attributes:
    r"""Attributes
    A container for all the attributes for a given location.
    """
    
    attributes: Optional[list[shared_attribute.Attribute]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class AttributesInput:
    r"""AttributesInput
    A container for all the attributes for a given location.
    """
    
    attributes: Optional[list[shared_attribute.AttributeInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
