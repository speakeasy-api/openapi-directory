import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import softwarerecipe as shared_softwarerecipe


@dataclass_json
@dataclasses.dataclass
class EffectiveGuestPolicySourcedSoftwareRecipe:
    r"""EffectiveGuestPolicySourcedSoftwareRecipe
    A guest policy recipe including its source.
    """
    
    software_recipe: Optional[shared_softwarerecipe.SoftwareRecipe] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('softwareRecipe') }})
    source: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    
