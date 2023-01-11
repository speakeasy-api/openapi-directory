import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import assignment as shared_assignment
from ..shared import packagerepository as shared_packagerepository
from ..shared import package as shared_package
from ..shared import softwarerecipe as shared_softwarerecipe


@dataclass_json
@dataclasses.dataclass
class GuestPolicy:
    r"""GuestPolicy
    An OS Config resource representing a guest configuration policy. These policies represent the desired state for VM instance guest environments including packages to install or remove, package repository configurations, and software to install.
    """
    
    assignment: Optional[shared_assignment.Assignment] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assignment') }})
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    etag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    package_repositories: Optional[list[shared_packagerepository.PackageRepository]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packageRepositories') }})
    packages: Optional[list[shared_package.Package]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packages') }})
    recipes: Optional[list[shared_softwarerecipe.SoftwareRecipe]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recipes') }})
    update_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    

@dataclass_json
@dataclasses.dataclass
class GuestPolicyInput:
    r"""GuestPolicyInput
    An OS Config resource representing a guest configuration policy. These policies represent the desired state for VM instance guest environments including packages to install or remove, package repository configurations, and software to install.
    """
    
    assignment: Optional[shared_assignment.Assignment] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assignment') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    etag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    package_repositories: Optional[list[shared_packagerepository.PackageRepository]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packageRepositories') }})
    packages: Optional[list[shared_package.Package]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packages') }})
    recipes: Optional[list[shared_softwarerecipe.SoftwareRecipe]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recipes') }})
    
