import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ospolicyresourceexecresource as shared_ospolicyresourceexecresource
from ..shared import ospolicyresourcefileresource as shared_ospolicyresourcefileresource
from ..shared import ospolicyresourcepackageresource as shared_ospolicyresourcepackageresource
from ..shared import ospolicyresourcerepositoryresource as shared_ospolicyresourcerepositoryresource


@dataclass_json
@dataclasses.dataclass
class OsPolicyResource:
    r"""OsPolicyResource
    An OS policy resource is used to define the desired state configuration and provides a specific functionality like installing/removing packages, executing a script etc. The system ensures that resources are always in their desired state by taking necessary actions if they have drifted from their desired state.
    """
    
    exec: Optional[shared_ospolicyresourceexecresource.OsPolicyResourceExecResource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exec') }})
    file: Optional[shared_ospolicyresourcefileresource.OsPolicyResourceFileResource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('file') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    pkg: Optional[shared_ospolicyresourcepackageresource.OsPolicyResourcePackageResource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pkg') }})
    repository: Optional[shared_ospolicyresourcerepositoryresource.OsPolicyResourceRepositoryResource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repository') }})
    
