import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import variantoptiondefinition as shared_variantoptiondefinition


@dataclass_json
@dataclasses.dataclass
class VariantOptionDefinitions:
    definitions: list[shared_variantoptiondefinition.VariantOptionDefinition] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('definitions') }})
    
