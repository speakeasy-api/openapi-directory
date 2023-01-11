import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import variantoptionproperties as shared_variantoptionproperties


@dataclass_json
@dataclasses.dataclass
class VariantOptionDefinition:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    properties: list[shared_variantoptionproperties.VariantOptionProperties] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    
