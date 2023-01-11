import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import packagerepository as shared_packagerepository


@dataclass_json
@dataclasses.dataclass
class EffectiveGuestPolicySourcedPackageRepository:
    r"""EffectiveGuestPolicySourcedPackageRepository
    A guest policy package repository including its source.
    """
    
    package_repository: Optional[shared_packagerepository.PackageRepository] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packageRepository') }})
    source: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    
