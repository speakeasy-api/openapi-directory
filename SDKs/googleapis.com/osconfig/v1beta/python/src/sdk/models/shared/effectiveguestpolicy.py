import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import effectiveguestpolicysourcedpackagerepository as shared_effectiveguestpolicysourcedpackagerepository
from ..shared import effectiveguestpolicysourcedpackage as shared_effectiveguestpolicysourcedpackage
from ..shared import effectiveguestpolicysourcedsoftwarerecipe as shared_effectiveguestpolicysourcedsoftwarerecipe


@dataclass_json
@dataclasses.dataclass
class EffectiveGuestPolicy:
    r"""EffectiveGuestPolicy
    The effective guest policy that applies to a VM instance.
    """
    
    package_repositories: Optional[list[shared_effectiveguestpolicysourcedpackagerepository.EffectiveGuestPolicySourcedPackageRepository]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packageRepositories') }})
    packages: Optional[list[shared_effectiveguestpolicysourcedpackage.EffectiveGuestPolicySourcedPackage]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packages') }})
    software_recipes: Optional[list[shared_effectiveguestpolicysourcedsoftwarerecipe.EffectiveGuestPolicySourcedSoftwareRecipe]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('softwareRecipes') }})
    
