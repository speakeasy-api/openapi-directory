import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import policyalternativenameserverconfigtargetnameserver as shared_policyalternativenameserverconfigtargetnameserver


@dataclass_json
@dataclasses.dataclass
class PolicyAlternativeNameServerConfig:
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    target_name_servers: Optional[list[shared_policyalternativenameserverconfigtargetnameserver.PolicyAlternativeNameServerConfigTargetNameServer]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetNameServers') }})
    
