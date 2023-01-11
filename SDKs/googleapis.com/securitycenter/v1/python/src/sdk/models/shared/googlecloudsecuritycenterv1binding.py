import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import role as shared_role
from ..shared import subject as shared_subject


@dataclass_json
@dataclasses.dataclass
class GoogleCloudSecuritycenterV1Binding:
    r"""GoogleCloudSecuritycenterV1Binding
    Represents a Kubernetes RoleBinding or ClusterRoleBinding.
    """
    
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    ns: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ns') }})
    role: Optional[shared_role.Role] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    subjects: Optional[list[shared_subject.Subject]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subjects') }})
    
