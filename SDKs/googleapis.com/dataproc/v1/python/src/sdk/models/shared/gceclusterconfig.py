import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import confidentialinstanceconfig as shared_confidentialinstanceconfig
from ..shared import nodegroupaffinity as shared_nodegroupaffinity
from ..shared import reservationaffinity as shared_reservationaffinity
from ..shared import shieldedinstanceconfig as shared_shieldedinstanceconfig

class GceClusterConfigPrivateIpv6GoogleAccessEnum(str, Enum):
    PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED = "PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED"
    INHERIT_FROM_SUBNETWORK = "INHERIT_FROM_SUBNETWORK"
    OUTBOUND = "OUTBOUND"
    BIDIRECTIONAL = "BIDIRECTIONAL"


@dataclass_json
@dataclasses.dataclass
class GceClusterConfig:
    r"""GceClusterConfig
    Common config settings for resources of Compute Engine cluster instances, applicable to all instances in the cluster.
    """
    
    confidential_instance_config: Optional[shared_confidentialinstanceconfig.ConfidentialInstanceConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confidentialInstanceConfig') }})
    internal_ip_only: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('internalIpOnly') }})
    metadata: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    network_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkUri') }})
    node_group_affinity: Optional[shared_nodegroupaffinity.NodeGroupAffinity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeGroupAffinity') }})
    private_ipv6_google_access: Optional[GceClusterConfigPrivateIpv6GoogleAccessEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateIpv6GoogleAccess') }})
    reservation_affinity: Optional[shared_reservationaffinity.ReservationAffinity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reservationAffinity') }})
    service_account: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccount') }})
    service_account_scopes: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccountScopes') }})
    shielded_instance_config: Optional[shared_shieldedinstanceconfig.ShieldedInstanceConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shieldedInstanceConfig') }})
    subnetwork_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subnetworkUri') }})
    tags: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    zone_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zoneUri') }})
    
