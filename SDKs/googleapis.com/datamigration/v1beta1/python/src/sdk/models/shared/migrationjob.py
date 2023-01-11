import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import databasetype as shared_databasetype
from ..shared import status as shared_status
from ..shared import reversesshconnectivity as shared_reversesshconnectivity
from ..shared import vpcpeeringconnectivity as shared_vpcpeeringconnectivity

class MigrationJobStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    MAINTENANCE = "MAINTENANCE"
    DRAFT = "DRAFT"
    CREATING = "CREATING"
    NOT_STARTED = "NOT_STARTED"
    RUNNING = "RUNNING"
    FAILED = "FAILED"
    COMPLETED = "COMPLETED"
    DELETING = "DELETING"
    STOPPING = "STOPPING"
    STOPPED = "STOPPED"
    DELETED = "DELETED"
    UPDATING = "UPDATING"
    STARTING = "STARTING"
    RESTARTING = "RESTARTING"
    RESUMING = "RESUMING"

class MigrationJobTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    ONE_TIME = "ONE_TIME"
    CONTINUOUS = "CONTINUOUS"

class MigrationJobPhaseEnum(str, Enum):
    PHASE_UNSPECIFIED = "PHASE_UNSPECIFIED"
    FULL_DUMP = "FULL_DUMP"
    CDC = "CDC"
    PROMOTE_IN_PROGRESS = "PROMOTE_IN_PROGRESS"
    WAITING_FOR_SOURCE_WRITES_TO_STOP = "WAITING_FOR_SOURCE_WRITES_TO_STOP"
    PREPARING_THE_DUMP = "PREPARING_THE_DUMP"


@dataclass_json
@dataclasses.dataclass
class MigrationJobInput:
    r"""MigrationJobInput
    Represents a Database Migration Service migration job object.
    """
    
    destination: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    destination_database: Optional[shared_databasetype.DatabaseType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationDatabase') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    dump_path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dumpPath') }})
    error: Optional[shared_status.Status] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    reverse_ssh_connectivity: Optional[shared_reversesshconnectivity.ReverseSSHConnectivity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reverseSshConnectivity') }})
    source: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    source_database: Optional[shared_databasetype.DatabaseType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceDatabase') }})
    state: Optional[MigrationJobStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    static_ip_connectivity: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('staticIpConnectivity') }})
    type: Optional[MigrationJobTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    vpc_peering_connectivity: Optional[shared_vpcpeeringconnectivity.VpcPeeringConnectivity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpcPeeringConnectivity') }})
    

@dataclass_json
@dataclasses.dataclass
class MigrationJob:
    r"""MigrationJob
    Represents a Database Migration Service migration job object.
    """
    
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    destination: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    destination_database: Optional[shared_databasetype.DatabaseType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationDatabase') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    dump_path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dumpPath') }})
    duration: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    end_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime') }})
    error: Optional[shared_status.Status] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    phase: Optional[MigrationJobPhaseEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phase') }})
    reverse_ssh_connectivity: Optional[shared_reversesshconnectivity.ReverseSSHConnectivity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reverseSshConnectivity') }})
    source: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    source_database: Optional[shared_databasetype.DatabaseType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceDatabase') }})
    state: Optional[MigrationJobStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    static_ip_connectivity: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('staticIpConnectivity') }})
    type: Optional[MigrationJobTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    update_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    vpc_peering_connectivity: Optional[shared_vpcpeeringconnectivity.VpcPeeringConnectivity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpcPeeringConnectivity') }})
    
