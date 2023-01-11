import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class ProvisionNetworkClientsPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class ProvisionNetworkClientsRequestBodyClients:
    mac: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mac') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
class ProvisionNetworkClientsRequestBodyDevicePolicyEnum(str, Enum):
    GROUP_POLICY = "Group policy"
    ALLOWED = "Allowed"
    BLOCKED = "Blocked"
    PER_CONNECTION = "Per connection"
    NORMAL = "Normal"

class ProvisionNetworkClientsRequestBodyPoliciesBySecurityApplianceDevicePolicyEnum(str, Enum):
    ALLOWED = "Allowed"
    BLOCKED = "Blocked"
    NORMAL = "Normal"


@dataclass_json
@dataclasses.dataclass
class ProvisionNetworkClientsRequestBodyPoliciesBySecurityAppliance:
    r"""ProvisionNetworkClientsRequestBodyPoliciesBySecurityAppliance
    An object, describing what the policy-connection association is for the security appliance. (Only relevant if the security appliance is actually within the network)
    """
    
    device_policy: Optional[ProvisionNetworkClientsRequestBodyPoliciesBySecurityApplianceDevicePolicyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('devicePolicy') }})
    
class ProvisionNetworkClientsRequestBodyPoliciesBySsid0DevicePolicyEnum(str, Enum):
    ALLOWED = "Allowed"
    BLOCKED = "Blocked"
    NORMAL = "Normal"
    GROUP_POLICY = "Group policy"


@dataclass_json
@dataclasses.dataclass
class ProvisionNetworkClientsRequestBodyPoliciesBySsid0:
    r"""ProvisionNetworkClientsRequestBodyPoliciesBySsid0
    The number for the SSID
    """
    
    device_policy: ProvisionNetworkClientsRequestBodyPoliciesBySsid0DevicePolicyEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('devicePolicy') }})
    group_policy_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupPolicyId') }})
    
class ProvisionNetworkClientsRequestBodyPoliciesBySsid1DevicePolicyEnum(str, Enum):
    ALLOWED = "Allowed"
    BLOCKED = "Blocked"
    NORMAL = "Normal"
    GROUP_POLICY = "Group policy"


@dataclass_json
@dataclasses.dataclass
class ProvisionNetworkClientsRequestBodyPoliciesBySsid1:
    r"""ProvisionNetworkClientsRequestBodyPoliciesBySsid1
    The number for the SSID
    """
    
    device_policy: ProvisionNetworkClientsRequestBodyPoliciesBySsid1DevicePolicyEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('devicePolicy') }})
    group_policy_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupPolicyId') }})
    
class ProvisionNetworkClientsRequestBodyPoliciesBySsid10DevicePolicyEnum(str, Enum):
    ALLOWED = "Allowed"
    BLOCKED = "Blocked"
    NORMAL = "Normal"
    GROUP_POLICY = "Group policy"


@dataclass_json
@dataclasses.dataclass
class ProvisionNetworkClientsRequestBodyPoliciesBySsid10:
    r"""ProvisionNetworkClientsRequestBodyPoliciesBySsid10
    The number for the SSID
    """
    
    device_policy: ProvisionNetworkClientsRequestBodyPoliciesBySsid10DevicePolicyEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('devicePolicy') }})
    group_policy_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupPolicyId') }})
    
class ProvisionNetworkClientsRequestBodyPoliciesBySsid11DevicePolicyEnum(str, Enum):
    ALLOWED = "Allowed"
    BLOCKED = "Blocked"
    NORMAL = "Normal"
    GROUP_POLICY = "Group policy"


@dataclass_json
@dataclasses.dataclass
class ProvisionNetworkClientsRequestBodyPoliciesBySsid11:
    r"""ProvisionNetworkClientsRequestBodyPoliciesBySsid11
    The number for the SSID
    """
    
    device_policy: ProvisionNetworkClientsRequestBodyPoliciesBySsid11DevicePolicyEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('devicePolicy') }})
    group_policy_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupPolicyId') }})
    
class ProvisionNetworkClientsRequestBodyPoliciesBySsid12DevicePolicyEnum(str, Enum):
    ALLOWED = "Allowed"
    BLOCKED = "Blocked"
    NORMAL = "Normal"
    GROUP_POLICY = "Group policy"


@dataclass_json
@dataclasses.dataclass
class ProvisionNetworkClientsRequestBodyPoliciesBySsid12:
    r"""ProvisionNetworkClientsRequestBodyPoliciesBySsid12
    The number for the SSID
    """
    
    device_policy: ProvisionNetworkClientsRequestBodyPoliciesBySsid12DevicePolicyEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('devicePolicy') }})
    group_policy_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupPolicyId') }})
    
class ProvisionNetworkClientsRequestBodyPoliciesBySsid13DevicePolicyEnum(str, Enum):
    ALLOWED = "Allowed"
    BLOCKED = "Blocked"
    NORMAL = "Normal"
    GROUP_POLICY = "Group policy"


@dataclass_json
@dataclasses.dataclass
class ProvisionNetworkClientsRequestBodyPoliciesBySsid13:
    r"""ProvisionNetworkClientsRequestBodyPoliciesBySsid13
    The number for the SSID
    """
    
    device_policy: ProvisionNetworkClientsRequestBodyPoliciesBySsid13DevicePolicyEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('devicePolicy') }})
    group_policy_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupPolicyId') }})
    
class ProvisionNetworkClientsRequestBodyPoliciesBySsid14DevicePolicyEnum(str, Enum):
    ALLOWED = "Allowed"
    BLOCKED = "Blocked"
    NORMAL = "Normal"
    GROUP_POLICY = "Group policy"


@dataclass_json
@dataclasses.dataclass
class ProvisionNetworkClientsRequestBodyPoliciesBySsid14:
    r"""ProvisionNetworkClientsRequestBodyPoliciesBySsid14
    The number for the SSID
    """
    
    device_policy: ProvisionNetworkClientsRequestBodyPoliciesBySsid14DevicePolicyEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('devicePolicy') }})
    group_policy_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupPolicyId') }})
    
class ProvisionNetworkClientsRequestBodyPoliciesBySsid2DevicePolicyEnum(str, Enum):
    ALLOWED = "Allowed"
    BLOCKED = "Blocked"
    NORMAL = "Normal"
    GROUP_POLICY = "Group policy"


@dataclass_json
@dataclasses.dataclass
class ProvisionNetworkClientsRequestBodyPoliciesBySsid2:
    r"""ProvisionNetworkClientsRequestBodyPoliciesBySsid2
    The number for the SSID
    """
    
    device_policy: ProvisionNetworkClientsRequestBodyPoliciesBySsid2DevicePolicyEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('devicePolicy') }})
    group_policy_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupPolicyId') }})
    
class ProvisionNetworkClientsRequestBodyPoliciesBySsid3DevicePolicyEnum(str, Enum):
    ALLOWED = "Allowed"
    BLOCKED = "Blocked"
    NORMAL = "Normal"
    GROUP_POLICY = "Group policy"


@dataclass_json
@dataclasses.dataclass
class ProvisionNetworkClientsRequestBodyPoliciesBySsid3:
    r"""ProvisionNetworkClientsRequestBodyPoliciesBySsid3
    The number for the SSID
    """
    
    device_policy: ProvisionNetworkClientsRequestBodyPoliciesBySsid3DevicePolicyEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('devicePolicy') }})
    group_policy_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupPolicyId') }})
    
class ProvisionNetworkClientsRequestBodyPoliciesBySsid4DevicePolicyEnum(str, Enum):
    ALLOWED = "Allowed"
    BLOCKED = "Blocked"
    NORMAL = "Normal"
    GROUP_POLICY = "Group policy"


@dataclass_json
@dataclasses.dataclass
class ProvisionNetworkClientsRequestBodyPoliciesBySsid4:
    r"""ProvisionNetworkClientsRequestBodyPoliciesBySsid4
    The number for the SSID
    """
    
    device_policy: ProvisionNetworkClientsRequestBodyPoliciesBySsid4DevicePolicyEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('devicePolicy') }})
    group_policy_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupPolicyId') }})
    
class ProvisionNetworkClientsRequestBodyPoliciesBySsid5DevicePolicyEnum(str, Enum):
    ALLOWED = "Allowed"
    BLOCKED = "Blocked"
    NORMAL = "Normal"
    GROUP_POLICY = "Group policy"


@dataclass_json
@dataclasses.dataclass
class ProvisionNetworkClientsRequestBodyPoliciesBySsid5:
    r"""ProvisionNetworkClientsRequestBodyPoliciesBySsid5
    The number for the SSID
    """
    
    device_policy: ProvisionNetworkClientsRequestBodyPoliciesBySsid5DevicePolicyEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('devicePolicy') }})
    group_policy_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupPolicyId') }})
    
class ProvisionNetworkClientsRequestBodyPoliciesBySsid6DevicePolicyEnum(str, Enum):
    ALLOWED = "Allowed"
    BLOCKED = "Blocked"
    NORMAL = "Normal"
    GROUP_POLICY = "Group policy"


@dataclass_json
@dataclasses.dataclass
class ProvisionNetworkClientsRequestBodyPoliciesBySsid6:
    r"""ProvisionNetworkClientsRequestBodyPoliciesBySsid6
    The number for the SSID
    """
    
    device_policy: ProvisionNetworkClientsRequestBodyPoliciesBySsid6DevicePolicyEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('devicePolicy') }})
    group_policy_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupPolicyId') }})
    
class ProvisionNetworkClientsRequestBodyPoliciesBySsid7DevicePolicyEnum(str, Enum):
    ALLOWED = "Allowed"
    BLOCKED = "Blocked"
    NORMAL = "Normal"
    GROUP_POLICY = "Group policy"


@dataclass_json
@dataclasses.dataclass
class ProvisionNetworkClientsRequestBodyPoliciesBySsid7:
    r"""ProvisionNetworkClientsRequestBodyPoliciesBySsid7
    The number for the SSID
    """
    
    device_policy: ProvisionNetworkClientsRequestBodyPoliciesBySsid7DevicePolicyEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('devicePolicy') }})
    group_policy_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupPolicyId') }})
    
class ProvisionNetworkClientsRequestBodyPoliciesBySsid8DevicePolicyEnum(str, Enum):
    ALLOWED = "Allowed"
    BLOCKED = "Blocked"
    NORMAL = "Normal"
    GROUP_POLICY = "Group policy"


@dataclass_json
@dataclasses.dataclass
class ProvisionNetworkClientsRequestBodyPoliciesBySsid8:
    r"""ProvisionNetworkClientsRequestBodyPoliciesBySsid8
    The number for the SSID
    """
    
    device_policy: ProvisionNetworkClientsRequestBodyPoliciesBySsid8DevicePolicyEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('devicePolicy') }})
    group_policy_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupPolicyId') }})
    
class ProvisionNetworkClientsRequestBodyPoliciesBySsid9DevicePolicyEnum(str, Enum):
    ALLOWED = "Allowed"
    BLOCKED = "Blocked"
    NORMAL = "Normal"
    GROUP_POLICY = "Group policy"


@dataclass_json
@dataclasses.dataclass
class ProvisionNetworkClientsRequestBodyPoliciesBySsid9:
    r"""ProvisionNetworkClientsRequestBodyPoliciesBySsid9
    The number for the SSID
    """
    
    device_policy: ProvisionNetworkClientsRequestBodyPoliciesBySsid9DevicePolicyEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('devicePolicy') }})
    group_policy_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupPolicyId') }})
    

@dataclass_json
@dataclasses.dataclass
class ProvisionNetworkClientsRequestBodyPoliciesBySsid:
    r"""ProvisionNetworkClientsRequestBodyPoliciesBySsid
    An object, describing the policy-connection associations for each active SSID within the network. Keys should be the number of enabled SSIDs, mapping to an object describing the client's policy
    """
    
    zero: Optional[ProvisionNetworkClientsRequestBodyPoliciesBySsid0] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('0') }})
    one: Optional[ProvisionNetworkClientsRequestBodyPoliciesBySsid1] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('1') }})
    ten: Optional[ProvisionNetworkClientsRequestBodyPoliciesBySsid10] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('10') }})
    eleven: Optional[ProvisionNetworkClientsRequestBodyPoliciesBySsid11] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('11') }})
    twelve: Optional[ProvisionNetworkClientsRequestBodyPoliciesBySsid12] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('12') }})
    thirteen: Optional[ProvisionNetworkClientsRequestBodyPoliciesBySsid13] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('13') }})
    fourteen: Optional[ProvisionNetworkClientsRequestBodyPoliciesBySsid14] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('14') }})
    two: Optional[ProvisionNetworkClientsRequestBodyPoliciesBySsid2] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('2') }})
    three: Optional[ProvisionNetworkClientsRequestBodyPoliciesBySsid3] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('3') }})
    four: Optional[ProvisionNetworkClientsRequestBodyPoliciesBySsid4] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('4') }})
    five: Optional[ProvisionNetworkClientsRequestBodyPoliciesBySsid5] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('5') }})
    six: Optional[ProvisionNetworkClientsRequestBodyPoliciesBySsid6] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('6') }})
    seven: Optional[ProvisionNetworkClientsRequestBodyPoliciesBySsid7] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('7') }})
    eight: Optional[ProvisionNetworkClientsRequestBodyPoliciesBySsid8] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('8') }})
    nine: Optional[ProvisionNetworkClientsRequestBodyPoliciesBySsid9] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('9') }})
    

@dataclass_json
@dataclasses.dataclass
class ProvisionNetworkClientsRequestBody:
    clients: list[ProvisionNetworkClientsRequestBodyClients] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clients') }})
    device_policy: ProvisionNetworkClientsRequestBodyDevicePolicyEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('devicePolicy') }})
    group_policy_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupPolicyId') }})
    policies_by_security_appliance: Optional[ProvisionNetworkClientsRequestBodyPoliciesBySecurityAppliance] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policiesBySecurityAppliance') }})
    policies_by_ssid: Optional[ProvisionNetworkClientsRequestBodyPoliciesBySsid] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policiesBySsid') }})
    

@dataclasses.dataclass
class ProvisionNetworkClientsRequest:
    path_params: ProvisionNetworkClientsPathParams = dataclasses.field()
    request: ProvisionNetworkClientsRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ProvisionNetworkClientsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    provision_network_clients_201_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
