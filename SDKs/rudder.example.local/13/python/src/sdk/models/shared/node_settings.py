import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import agent_key as shared_agent_key

class NodeSettingsPolicyModeEnum(str, Enum):
    AUDIT = "audit"
    ENFORCE = "enforce"
    DEFAULT = "default"


@dataclass_json
@dataclasses.dataclass
class NodeSettingsProperties:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    value: Any = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
class NodeSettingsStateEnum(str, Enum):
    ENABLED = "enabled"
    IGNORED = "ignored"
    EMPTY_POLICIES = "empty-policies"
    INITIALIZING = "initializing"
    PREPARING_EOL = "preparing-eol"


@dataclass_json
@dataclasses.dataclass
class NodeSettings:
    agent_key: Optional[shared_agent_key.AgentKey] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('agentKey') }})
    policy_mode: Optional[NodeSettingsPolicyModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policyMode') }})
    properties: Optional[list[NodeSettingsProperties]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    state: Optional[NodeSettingsStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
