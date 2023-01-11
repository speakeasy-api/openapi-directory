import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import instanceconfig as shared_instanceconfig
from ..shared import networkconfig as shared_networkconfig
from ..shared import volumeconfig as shared_volumeconfig
from ..shared import instanceconfig as shared_instanceconfig
from ..shared import networkconfig as shared_networkconfig
from ..shared import volumeconfig as shared_volumeconfig

class ProvisioningConfigStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    DRAFT = "DRAFT"
    SUBMITTED = "SUBMITTED"
    PROVISIONING = "PROVISIONING"
    PROVISIONED = "PROVISIONED"
    VALIDATED = "VALIDATED"
    CANCELLED = "CANCELLED"
    FAILED = "FAILED"


@dataclass_json
@dataclasses.dataclass
class ProvisioningConfigInput:
    r"""ProvisioningConfigInput
    A provisioning configuration.
    """
    
    custom_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customId') }})
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    handover_service_account: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('handoverServiceAccount') }})
    instances: Optional[list[shared_instanceconfig.InstanceConfigInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instances') }})
    location: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    networks: Optional[list[shared_networkconfig.NetworkConfigInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networks') }})
    status_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusMessage') }})
    ticket_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ticketId') }})
    volumes: Optional[list[shared_volumeconfig.VolumeConfigInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumes') }})
    vpc_sc_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpcScEnabled') }})
    

@dataclass_json
@dataclasses.dataclass
class ProvisioningConfig:
    r"""ProvisioningConfig
    A provisioning configuration.
    """
    
    cloud_console_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudConsoleUri') }})
    custom_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customId') }})
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    handover_service_account: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('handoverServiceAccount') }})
    instances: Optional[list[shared_instanceconfig.InstanceConfig]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instances') }})
    location: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    networks: Optional[list[shared_networkconfig.NetworkConfig]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networks') }})
    state: Optional[ProvisioningConfigStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    status_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusMessage') }})
    ticket_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ticketId') }})
    update_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    volumes: Optional[list[shared_volumeconfig.VolumeConfig]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumes') }})
    vpc_sc_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpcScEnabled') }})
    
