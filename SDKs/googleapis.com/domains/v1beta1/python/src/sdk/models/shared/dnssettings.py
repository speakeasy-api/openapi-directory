import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import customdns as shared_customdns
from ..shared import gluerecord as shared_gluerecord
from ..shared import googledomainsdns as shared_googledomainsdns
from ..shared import googledomainsdns as shared_googledomainsdns


@dataclass_json
@dataclasses.dataclass
class DNSSettings:
    r"""DNSSettings
    Defines the DNS configuration of a `Registration`, including name servers, DNSSEC, and glue records.
    """
    
    custom_dns: Optional[shared_customdns.CustomDNS] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customDns') }})
    glue_records: Optional[list[shared_gluerecord.GlueRecord]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('glueRecords') }})
    google_domains_dns: Optional[shared_googledomainsdns.GoogleDomainsDNS] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('googleDomainsDns') }})
    

@dataclass_json
@dataclasses.dataclass
class DNSSettingsInput:
    r"""DNSSettingsInput
    Defines the DNS configuration of a `Registration`, including name servers, DNSSEC, and glue records.
    """
    
    custom_dns: Optional[shared_customdns.CustomDNS] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customDns') }})
    glue_records: Optional[list[shared_gluerecord.GlueRecord]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('glueRecords') }})
    google_domains_dns: Optional[shared_googledomainsdns.GoogleDomainsDNSInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('googleDomainsDns') }})
    
