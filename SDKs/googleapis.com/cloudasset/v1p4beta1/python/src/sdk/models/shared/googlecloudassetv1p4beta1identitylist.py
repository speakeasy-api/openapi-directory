import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudassetv1p4beta1edge as shared_googlecloudassetv1p4beta1edge
from ..shared import googlecloudassetv1p4beta1identity as shared_googlecloudassetv1p4beta1identity


@dataclass_json
@dataclasses.dataclass
class GoogleCloudAssetV1p4beta1IdentityList:
    group_edges: Optional[list[shared_googlecloudassetv1p4beta1edge.GoogleCloudAssetV1p4beta1Edge]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupEdges') }})
    identities: Optional[list[shared_googlecloudassetv1p4beta1identity.GoogleCloudAssetV1p4beta1Identity]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identities') }})
    
