import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import certdnschallenge as shared_certdnschallenge
from ..shared import certhttpchallenge as shared_certhttpchallenge

class DomainProvisioningCertStatusEnum(str, Enum):
    CERT_STATUS_UNSPECIFIED = "CERT_STATUS_UNSPECIFIED"
    CERT_PENDING = "CERT_PENDING"
    CERT_MISSING = "CERT_MISSING"
    CERT_PROCESSING = "CERT_PROCESSING"
    CERT_PROPAGATING = "CERT_PROPAGATING"
    CERT_ACTIVE = "CERT_ACTIVE"
    CERT_ERROR = "CERT_ERROR"

class DomainProvisioningDNSStatusEnum(str, Enum):
    DNS_STATUS_UNSPECIFIED = "DNS_STATUS_UNSPECIFIED"
    DNS_PENDING = "DNS_PENDING"
    DNS_MISSING = "DNS_MISSING"
    DNS_PARTIAL_MATCH = "DNS_PARTIAL_MATCH"
    DNS_MATCH = "DNS_MATCH"
    DNS_EXTRANEOUS_MATCH = "DNS_EXTRANEOUS_MATCH"


@dataclass_json
@dataclasses.dataclass
class DomainProvisioning:
    r"""DomainProvisioning
    The current certificate provisioning status information for a domain.
    """
    
    cert_challenge_discovered_txt: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certChallengeDiscoveredTxt') }})
    cert_challenge_dns: Optional[shared_certdnschallenge.CertDNSChallenge] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certChallengeDns') }})
    cert_challenge_http: Optional[shared_certhttpchallenge.CertHTTPChallenge] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certChallengeHttp') }})
    cert_status: Optional[DomainProvisioningCertStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certStatus') }})
    discovered_ips: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discoveredIps') }})
    dns_fetch_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dnsFetchTime') }})
    dns_status: Optional[DomainProvisioningDNSStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dnsStatus') }})
    expected_ips: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expectedIps') }})
    
