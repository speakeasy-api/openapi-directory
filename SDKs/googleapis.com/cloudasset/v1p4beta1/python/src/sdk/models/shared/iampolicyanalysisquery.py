import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accessselector as shared_accessselector
from ..shared import identityselector as shared_identityselector
from ..shared import resourceselector as shared_resourceselector


@dataclass_json
@dataclasses.dataclass
class IamPolicyAnalysisQuery:
    r"""IamPolicyAnalysisQuery
    IAM policy analysis query message.
    """
    
    access_selector: Optional[shared_accessselector.AccessSelector] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessSelector') }})
    identity_selector: Optional[shared_identityselector.IdentitySelector] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identitySelector') }})
    parent: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent') }})
    resource_selector: Optional[shared_resourceselector.ResourceSelector] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceSelector') }})
    
