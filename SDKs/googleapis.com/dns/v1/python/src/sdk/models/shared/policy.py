import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import policyalternativenameserverconfig as shared_policyalternativenameserverconfig
from ..shared import policynetwork as shared_policynetwork


@dataclass_json
@dataclasses.dataclass
class Policy:
    r"""Policy
    A policy is a collection of DNS rules applied to one or more Virtual Private Cloud resources.
    """
    
    alternative_name_server_config: Optional[shared_policyalternativenameserverconfig.PolicyAlternativeNameServerConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alternativeNameServerConfig') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    enable_inbound_forwarding: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableInboundForwarding') }})
    enable_logging: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableLogging') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    networks: Optional[list[shared_policynetwork.PolicyNetwork]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networks') }})
    
