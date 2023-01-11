import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import linkedinterconnectattachments as shared_linkedinterconnectattachments
from ..shared import linkedrouterapplianceinstances as shared_linkedrouterapplianceinstances
from ..shared import linkedvpntunnels as shared_linkedvpntunnels
from ..shared import linkedinterconnectattachments as shared_linkedinterconnectattachments
from ..shared import linkedrouterapplianceinstances as shared_linkedrouterapplianceinstances
from ..shared import linkedvpntunnels as shared_linkedvpntunnels

class SpokeStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    ACTIVE = "ACTIVE"
    DELETING = "DELETING"
    UPDATING = "UPDATING"


@dataclass_json
@dataclasses.dataclass
class Spoke:
    r"""Spoke
    A Network Connectivity Center spoke represents one or more network connectivity resources. When you create a spoke, you associate it with a hub. You must also identify a value for exactly one of the following fields: * linked_vpn_tunnels * linked_interconnect_attachments * linked_router_appliance_instances
    """
    
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    hub: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hub') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    linked_interconnect_attachments: Optional[shared_linkedinterconnectattachments.LinkedInterconnectAttachments] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkedInterconnectAttachments') }})
    linked_router_appliance_instances: Optional[shared_linkedrouterapplianceinstances.LinkedRouterApplianceInstances] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkedRouterApplianceInstances') }})
    linked_vpn_tunnels: Optional[shared_linkedvpntunnels.LinkedVpnTunnels] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkedVpnTunnels') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    state: Optional[SpokeStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    unique_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uniqueId') }})
    update_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    

@dataclass_json
@dataclasses.dataclass
class SpokeInput:
    r"""SpokeInput
    A Network Connectivity Center spoke represents one or more network connectivity resources. When you create a spoke, you associate it with a hub. You must also identify a value for exactly one of the following fields: * linked_vpn_tunnels * linked_interconnect_attachments * linked_router_appliance_instances
    """
    
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    hub: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hub') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    linked_interconnect_attachments: Optional[shared_linkedinterconnectattachments.LinkedInterconnectAttachmentsInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkedInterconnectAttachments') }})
    linked_router_appliance_instances: Optional[shared_linkedrouterapplianceinstances.LinkedRouterApplianceInstancesInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkedRouterApplianceInstances') }})
    linked_vpn_tunnels: Optional[shared_linkedvpntunnels.LinkedVpnTunnelsInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkedVpnTunnels') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
