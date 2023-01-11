import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import slsabuilder as shared_slsabuilder
from ..shared import material as shared_material
from ..shared import slsametadata as shared_slsametadata
from ..shared import slsarecipe as shared_slsarecipe


@dataclass_json
@dataclasses.dataclass
class SlsaProvenance:
    builder: Optional[shared_slsabuilder.SlsaBuilder] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('builder') }})
    materials: Optional[list[shared_material.Material]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('materials') }})
    metadata: Optional[shared_slsametadata.SlsaMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    recipe: Optional[shared_slsarecipe.SlsaRecipe] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recipe') }})
    
