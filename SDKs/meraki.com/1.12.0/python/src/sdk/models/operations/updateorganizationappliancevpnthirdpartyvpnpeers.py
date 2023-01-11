import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateOrganizationApplianceVpnThirdPartyVpnPeersPathParams:
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    
class UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIkeVersionEnum(str, Enum):
    ONE = "1"
    TWO = "2"

class UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum(str, Enum):
    PRFSHA256 = "prfsha256"
    PRFSHA1 = "prfsha1"
    PRFMD5 = "prfmd5"
    DEFAULT = "default"


@dataclass_json
@dataclasses.dataclass
class UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIpsecPolicies:
    r"""UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIpsecPolicies
    Custom IPSec policies for the VPN peer. If not included and a preset has not been chosen, the default preset for IPSec policies will be used.
    """
    
    child_auth_algo: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('childAuthAlgo') }})
    child_cipher_algo: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('childCipherAlgo') }})
    child_lifetime: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('childLifetime') }})
    child_pfs_group: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('childPfsGroup') }})
    ike_auth_algo: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ikeAuthAlgo') }})
    ike_cipher_algo: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ikeCipherAlgo') }})
    ike_diffie_hellman_group: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ikeDiffieHellmanGroup') }})
    ike_lifetime: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ikeLifetime') }})
    ike_prf_algo: Optional[list[UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ikePrfAlgo') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeers:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    private_subnets: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateSubnets') }})
    public_ip: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicIp') }})
    secret: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    ike_version: Optional[UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIkeVersionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ikeVersion') }})
    ipsec_policies: Optional[UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIpsecPolicies] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipsecPolicies') }})
    ipsec_policies_preset: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipsecPoliciesPreset') }})
    network_tags: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkTags') }})
    remote_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remoteId') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBody:
    peers: list[UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeers] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('peers') }})
    

@dataclasses.dataclass
class UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequest:
    path_params: UpdateOrganizationApplianceVpnThirdPartyVpnPeersPathParams = dataclasses.field()
    request: UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateOrganizationApplianceVpnThirdPartyVpnPeersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_organization_appliance_vpn_third_party_vpn_peers_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
