import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import agent_key as shared_agent_key
from ..shared import os as shared_os
from ..shared import timezone as shared_timezone

class NodeAddMachineTypeEnum(str, Enum):
    VMWARE = "vmware"
    PHYSICAL = "physical"
    VM = "vm"
    SOLARISZONE = "solariszone"
    QEMU = "qemu"
    XEN = "xen"
    AIXLPAR = "aixlpar"
    HYPERV = "hyperv"
    BSDJAIL = "bsdjail"

class NodeAddPolicyModeEnum(str, Enum):
    ENFORCE = "enforce"
    AUDIT = "audit"

class NodeAddPropertiesTagsEnum(str, Enum):
    SOME = "some"
    TAGS = "tags"


@dataclass_json
@dataclasses.dataclass
class NodeAddPropertiesVars:
    var1: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('var1') }})
    vars2: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vars2') }})
    

@dataclass_json
@dataclasses.dataclass
class NodeAddProperties:
    r"""NodeAddProperties
    Node properties in \"key\":\"value\" format, where \"key\" is a string, and \"value\" is either a string, a json array, or a json object. The following example shows you three example of &#58; &#173; a json array on the example of \"tags\":[ \"some\", \"tags\" ] &#173; a simple string on the example of \"env\":\"prod\" &#173; a complex json object on the example of \"vars\":{ \"var1\":\"value1\", \"var2\":\"value2\" } They are optional and can be used in any combination as long the keys are unique within the properties object.
    """
    
    env: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('env') }})
    tags: Optional[list[NodeAddPropertiesTagsEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    vars: Optional[NodeAddPropertiesVars] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vars') }})
    
class NodeAddStateEnum(str, Enum):
    ENABLE = "enable"
    IGNORED = "ignored"
    EMPTY_POLICIES = "empty-policies"
    INITIALIZING = "initializing"
    PREPARING_EOL = "preparing-eol"

class NodeAddStatusEnum(str, Enum):
    ACCEPTED = "accepted"
    PENDING = "pending"


@dataclass_json
@dataclasses.dataclass
class NodeAdd:
    hostname: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hostname') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    ip_addresses: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipAddresses') }})
    machine_type: NodeAddMachineTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('machineType') }})
    os: shared_os.Os = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('os') }})
    properties: NodeAddProperties = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    status: NodeAddStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    agent_key: Optional[shared_agent_key.AgentKey] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('agentKey') }})
    policy_mode: Optional[NodeAddPolicyModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policyMode') }})
    policy_server_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policyServerId') }})
    state: Optional[NodeAddStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    timezone: Optional[shared_timezone.Timezone] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timezone') }})
    
