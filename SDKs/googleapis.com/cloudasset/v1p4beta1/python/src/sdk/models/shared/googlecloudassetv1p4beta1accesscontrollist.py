import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudassetv1p4beta1access as shared_googlecloudassetv1p4beta1access
from ..shared import googlecloudassetv1p4beta1edge as shared_googlecloudassetv1p4beta1edge
from ..shared import googlecloudassetv1p4beta1resource as shared_googlecloudassetv1p4beta1resource


@dataclass_json
@dataclasses.dataclass
class GoogleCloudAssetV1p4beta1AccessControlList:
    r"""GoogleCloudAssetV1p4beta1AccessControlList
    An access control list, derived from the above IAM policy binding, which contains a set of resources and accesses. May include one item from each set to compose an access control entry. NOTICE that there could be multiple access control lists for one IAM policy binding. The access control lists are created based on resource and access combinations. For example, assume we have the following cases in one IAM policy binding: - Permission P1 and P2 apply to resource R1 and R2; - Permission P3 applies to resource R2 and R3; This will result in the following access control lists: - AccessControlList 1: [R1, R2], [P1, P2] - AccessControlList 2: [R2, R3], [P3]
    """
    
    accesses: Optional[list[shared_googlecloudassetv1p4beta1access.GoogleCloudAssetV1p4beta1Access]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accesses') }})
    resource_edges: Optional[list[shared_googlecloudassetv1p4beta1edge.GoogleCloudAssetV1p4beta1Edge]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceEdges') }})
    resources: Optional[list[shared_googlecloudassetv1p4beta1resource.GoogleCloudAssetV1p4beta1Resource]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    
