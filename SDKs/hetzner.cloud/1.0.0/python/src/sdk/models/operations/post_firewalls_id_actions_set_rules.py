import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class PostFirewallsIDActionsSetRulesPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class PostFirewallsIDActionsSetRulesSetRulesRequestRuleDirectionEnum(str, Enum):
    IN = "in"
    OUT = "out"

class PostFirewallsIDActionsSetRulesSetRulesRequestRuleProtocolEnum(str, Enum):
    TCP = "tcp"
    UDP = "udp"
    ICMP = "icmp"
    ESP = "esp"
    GRE = "gre"


@dataclass_json
@dataclasses.dataclass
class PostFirewallsIDActionsSetRulesSetRulesRequestRule:
    direction: PostFirewallsIDActionsSetRulesSetRulesRequestRuleDirectionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('direction') }})
    protocol: PostFirewallsIDActionsSetRulesSetRulesRequestRuleProtocolEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    destination_ips: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination_ips') }})
    port: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    source_ips: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source_ips') }})
    

@dataclass_json
@dataclasses.dataclass
class PostFirewallsIDActionsSetRulesSetRulesRequest:
    rules: list[PostFirewallsIDActionsSetRulesSetRulesRequestRule] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    

@dataclass_json
@dataclasses.dataclass
class PostFirewallsIDActionsSetRulesActionsResponseActionError:
    r"""PostFirewallsIDActionsSetRulesActionsResponseActionError
    Error message for the Action if error occurred, otherwise null
    """
    
    code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PostFirewallsIDActionsSetRulesActionsResponseActionResources:
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class PostFirewallsIDActionsSetRulesActionsResponseActionStatusEnum(str, Enum):
    SUCCESS = "success"
    RUNNING = "running"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class PostFirewallsIDActionsSetRulesActionsResponseAction:
    command: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('command') }})
    error: PostFirewallsIDActionsSetRulesActionsResponseActionError = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    finished: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('finished') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    progress: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('progress') }})
    resources: list[PostFirewallsIDActionsSetRulesActionsResponseActionResources] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    started: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('started') }})
    status: PostFirewallsIDActionsSetRulesActionsResponseActionStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class PostFirewallsIDActionsSetRulesActionsResponseMetaPagination:
    last_page: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_page') }})
    next_page: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page') }})
    page: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    per_page: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('per_page') }})
    previous_page: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page') }})
    total_entries: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_entries') }})
    

@dataclass_json
@dataclasses.dataclass
class PostFirewallsIDActionsSetRulesActionsResponseMeta:
    pagination: PostFirewallsIDActionsSetRulesActionsResponseMetaPagination = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pagination') }})
    

@dataclass_json
@dataclasses.dataclass
class PostFirewallsIDActionsSetRulesActionsResponse:
    actions: list[PostFirewallsIDActionsSetRulesActionsResponseAction] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('actions') }})
    meta: Optional[PostFirewallsIDActionsSetRulesActionsResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclasses.dataclass
class PostFirewallsIDActionsSetRulesRequest:
    path_params: PostFirewallsIDActionsSetRulesPathParams = dataclasses.field()
    request: Optional[PostFirewallsIDActionsSetRulesSetRulesRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostFirewallsIDActionsSetRulesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    actions_response: Optional[PostFirewallsIDActionsSetRulesActionsResponse] = dataclasses.field(default=None)
    
