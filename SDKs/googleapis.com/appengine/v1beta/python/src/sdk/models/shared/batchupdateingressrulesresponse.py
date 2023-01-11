import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import firewallrule as shared_firewallrule


@dataclass_json
@dataclasses.dataclass
class BatchUpdateIngressRulesResponse:
    r"""BatchUpdateIngressRulesResponse
    Response message for Firewall.UpdateAllIngressRules.
    """
    
    ingress_rules: Optional[list[shared_firewallrule.FirewallRule]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ingressRules') }})
    
