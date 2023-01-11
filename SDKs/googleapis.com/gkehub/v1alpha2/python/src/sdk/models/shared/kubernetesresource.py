import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resourceoptions as shared_resourceoptions
from ..shared import resourcemanifest as shared_resourcemanifest


@dataclass_json
@dataclasses.dataclass
class KubernetesResourceInput:
    r"""KubernetesResourceInput
    KubernetesResource contains the YAML manifests and configuration for Membership Kubernetes resources in the cluster. After CreateMembership or UpdateMembership, these resources should be re-applied in the cluster.
    """
    
    membership_cr_manifest: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('membershipCrManifest') }})
    resource_options: Optional[shared_resourceoptions.ResourceOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceOptions') }})
    

@dataclass_json
@dataclasses.dataclass
class KubernetesResource:
    r"""KubernetesResource
    KubernetesResource contains the YAML manifests and configuration for Membership Kubernetes resources in the cluster. After CreateMembership or UpdateMembership, these resources should be re-applied in the cluster.
    """
    
    connect_resources: Optional[list[shared_resourcemanifest.ResourceManifest]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectResources') }})
    membership_cr_manifest: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('membershipCrManifest') }})
    membership_resources: Optional[list[shared_resourcemanifest.ResourceManifest]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('membershipResources') }})
    resource_options: Optional[shared_resourceoptions.ResourceOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceOptions') }})
    
