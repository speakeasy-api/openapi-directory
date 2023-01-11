import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class MultiClusterIngressFeatureSpecBillingEnum(str, Enum):
    BILLING_UNSPECIFIED = "BILLING_UNSPECIFIED"
    PAY_AS_YOU_GO = "PAY_AS_YOU_GO"
    ANTHOS_LICENSE = "ANTHOS_LICENSE"


@dataclass_json
@dataclasses.dataclass
class MultiClusterIngressFeatureSpec:
    r"""MultiClusterIngressFeatureSpec
    **Multi-cluster Ingress**: The configuration for the MultiClusterIngress feature.
    """
    
    billing: Optional[MultiClusterIngressFeatureSpecBillingEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billing') }})
    config_membership: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configMembership') }})
    
