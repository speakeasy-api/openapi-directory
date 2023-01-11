import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ospolicyresourcerepositoryresourceaptrepository as shared_ospolicyresourcerepositoryresourceaptrepository
from ..shared import ospolicyresourcerepositoryresourcegoorepository as shared_ospolicyresourcerepositoryresourcegoorepository
from ..shared import ospolicyresourcerepositoryresourceyumrepository as shared_ospolicyresourcerepositoryresourceyumrepository
from ..shared import ospolicyresourcerepositoryresourcezypperrepository as shared_ospolicyresourcerepositoryresourcezypperrepository


@dataclass_json
@dataclasses.dataclass
class OsPolicyResourceRepositoryResource:
    r"""OsPolicyResourceRepositoryResource
    A resource that manages a package repository.
    """
    
    apt: Optional[shared_ospolicyresourcerepositoryresourceaptrepository.OsPolicyResourceRepositoryResourceAptRepository] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apt') }})
    goo: Optional[shared_ospolicyresourcerepositoryresourcegoorepository.OsPolicyResourceRepositoryResourceGooRepository] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('goo') }})
    yum: Optional[shared_ospolicyresourcerepositoryresourceyumrepository.OsPolicyResourceRepositoryResourceYumRepository] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('yum') }})
    zypper: Optional[shared_ospolicyresourcerepositoryresourcezypperrepository.OsPolicyResourceRepositoryResourceZypperRepository] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zypper') }})
    
