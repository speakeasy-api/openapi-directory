import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accessreview as shared_accessreview
from ..shared import googlecloudsecuritycenterv1binding as shared_googlecloudsecuritycenterv1binding
from ..shared import nodepool as shared_nodepool
from ..shared import node as shared_node
from ..shared import pod as shared_pod
from ..shared import role as shared_role


@dataclass_json
@dataclasses.dataclass
class Kubernetes:
    r"""Kubernetes
    Kubernetes related attributes.
    """
    
    access_reviews: Optional[list[shared_accessreview.AccessReview]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessReviews') }})
    bindings: Optional[list[shared_googlecloudsecuritycenterv1binding.GoogleCloudSecuritycenterV1Binding]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bindings') }})
    node_pools: Optional[list[shared_nodepool.NodePool]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodePools') }})
    nodes: Optional[list[shared_node.Node]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodes') }})
    pods: Optional[list[shared_pod.Pod]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pods') }})
    roles: Optional[list[shared_role.Role]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roles') }})
    
