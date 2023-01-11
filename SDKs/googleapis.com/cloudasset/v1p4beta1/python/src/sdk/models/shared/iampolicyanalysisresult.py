import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudassetv1p4beta1accesscontrollist as shared_googlecloudassetv1p4beta1accesscontrollist
from ..shared import binding as shared_binding
from ..shared import googlecloudassetv1p4beta1identitylist as shared_googlecloudassetv1p4beta1identitylist


@dataclass_json
@dataclasses.dataclass
class IamPolicyAnalysisResult:
    r"""IamPolicyAnalysisResult
    IAM Policy analysis result, consisting of one IAM policy binding and derived access control lists.
    """
    
    access_control_lists: Optional[list[shared_googlecloudassetv1p4beta1accesscontrollist.GoogleCloudAssetV1p4beta1AccessControlList]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessControlLists') }})
    attached_resource_full_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attachedResourceFullName') }})
    fully_explored: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fullyExplored') }})
    iam_binding: Optional[shared_binding.Binding] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iamBinding') }})
    identity_list: Optional[shared_googlecloudassetv1p4beta1identitylist.GoogleCloudAssetV1p4beta1IdentityList] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identityList') }})
    
