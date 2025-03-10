"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import googlecloudbaremetalsolutionv2logicalinterface as shared_googlecloudbaremetalsolutionv2logicalinterface
from ..shared import lun as shared_lun
from ..shared import network as shared_network
from ..shared import volume as shared_volume
from dataclasses_json import Undefined, dataclass_json
from enum import Enum
from sdk import utils
from typing import Optional

class InstanceStateEnum(str, Enum):
    r"""Output only. The state of the server."""
    STATE_UNSPECIFIED = 'STATE_UNSPECIFIED'
    PROVISIONING = 'PROVISIONING'
    RUNNING = 'RUNNING'
    DELETED = 'DELETED'
    UPDATING = 'UPDATING'
    STARTING = 'STARTING'
    STOPPING = 'STOPPING'
    SHUTDOWN = 'SHUTDOWN'

class InstanceWorkloadProfileEnum(str, Enum):
    r"""The workload profile for the instance."""
    WORKLOAD_PROFILE_UNSPECIFIED = 'WORKLOAD_PROFILE_UNSPECIFIED'
    WORKLOAD_PROFILE_GENERIC = 'WORKLOAD_PROFILE_GENERIC'
    WORKLOAD_PROFILE_HANA = 'WORKLOAD_PROFILE_HANA'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class Instance:
    r"""A server."""
    
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('createTime'), 'exclude': lambda f: f is None }})
    r"""Output only. Create a time stamp."""  
    firmware_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('firmwareVersion'), 'exclude': lambda f: f is None }})
    r"""Output only. The firmware version for the instance."""  
    hyperthreading_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('hyperthreadingEnabled'), 'exclude': lambda f: f is None }})
    r"""True if you enable hyperthreading for the server, otherwise false. The default value is false."""  
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('id'), 'exclude': lambda f: f is None }})
    r"""Output only. An identifier for the `Instance`, generated by the backend."""  
    interactive_serial_console_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('interactiveSerialConsoleEnabled'), 'exclude': lambda f: f is None }})
    r"""Output only. True if the interactive serial console feature is enabled for the instance, false otherwise. The default value is false."""  
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('labels'), 'exclude': lambda f: f is None }})
    r"""Labels as key value pairs."""  
    logical_interfaces: Optional[list[shared_googlecloudbaremetalsolutionv2logicalinterface.GoogleCloudBaremetalsolutionV2LogicalInterface]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('logicalInterfaces'), 'exclude': lambda f: f is None }})
    r"""List of logical interfaces for the instance. The number of logical interfaces will be the same as number of hardware bond/nic on the chosen network template. For the non-multivlan configurations (for eg, existing servers) that use existing default network template (bondaa-bondaa), both the Instance.networks field and the Instance.logical_interfaces fields will be filled to ensure backward compatibility. For the others, only Instance.logical_interfaces will be filled."""  
    login_info: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('loginInfo'), 'exclude': lambda f: f is None }})
    r"""Output only. Text field about info for logging in."""  
    luns: Optional[list[shared_lun.Lun]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('luns'), 'exclude': lambda f: f is None }})
    r"""Immutable. List of LUNs associated with this server."""  
    machine_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('machineType'), 'exclude': lambda f: f is None }})
    r"""Immutable. The server type. [Available server types](https://cloud.google.com/bare-metal/docs/bms-planning#server_configurations)"""  
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('name'), 'exclude': lambda f: f is None }})
    r"""Immutable. The resource name of this `Instance`. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. Format: `projects/{project}/locations/{location}/instances/{instance}`"""  
    networks: Optional[list[shared_network.Network]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('networks'), 'exclude': lambda f: f is None }})
    r"""Output only. List of networks associated with this server."""  
    network_template: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('networkTemplate'), 'exclude': lambda f: f is None }})
    r"""Instance network template name. For eg, bondaa-bondaa, bondab-nic, etc. Generally, the template name follows the syntax of \\"bond\\" or \\"nic\\"."""  
    os_image: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('osImage'), 'exclude': lambda f: f is None }})
    r"""The OS image currently installed on the server."""  
    pod: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('pod'), 'exclude': lambda f: f is None }})
    r"""Immutable. Pod name. Pod is an independent part of infrastructure. Instance can be connected to the assets (networks, volumes) allocated in the same pod only."""  
    state: Optional[InstanceStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('state'), 'exclude': lambda f: f is None }})
    r"""Output only. The state of the server."""  
    update_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('updateTime'), 'exclude': lambda f: f is None }})
    r"""Output only. Update a time stamp."""  
    volumes: Optional[list[shared_volume.Volume]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('volumes'), 'exclude': lambda f: f is None }})
    r"""Input only. List of Volumes to attach to this Instance on creation. This field won't be populated in Get/List responses."""  
    workload_profile: Optional[InstanceWorkloadProfileEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('workloadProfile'), 'exclude': lambda f: f is None }})
    r"""The workload profile for the instance."""  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class InstanceInput:
    r"""A server."""
    
    hyperthreading_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('hyperthreadingEnabled'), 'exclude': lambda f: f is None }})
    r"""True if you enable hyperthreading for the server, otherwise false. The default value is false."""  
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('labels'), 'exclude': lambda f: f is None }})
    r"""Labels as key value pairs."""  
    logical_interfaces: Optional[list[shared_googlecloudbaremetalsolutionv2logicalinterface.GoogleCloudBaremetalsolutionV2LogicalInterface]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('logicalInterfaces'), 'exclude': lambda f: f is None }})
    r"""List of logical interfaces for the instance. The number of logical interfaces will be the same as number of hardware bond/nic on the chosen network template. For the non-multivlan configurations (for eg, existing servers) that use existing default network template (bondaa-bondaa), both the Instance.networks field and the Instance.logical_interfaces fields will be filled to ensure backward compatibility. For the others, only Instance.logical_interfaces will be filled."""  
    luns: Optional[list[shared_lun.LunInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('luns'), 'exclude': lambda f: f is None }})
    r"""Immutable. List of LUNs associated with this server."""  
    machine_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('machineType'), 'exclude': lambda f: f is None }})
    r"""Immutable. The server type. [Available server types](https://cloud.google.com/bare-metal/docs/bms-planning#server_configurations)"""  
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('name'), 'exclude': lambda f: f is None }})
    r"""Immutable. The resource name of this `Instance`. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. Format: `projects/{project}/locations/{location}/instances/{instance}`"""  
    network_template: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('networkTemplate'), 'exclude': lambda f: f is None }})
    r"""Instance network template name. For eg, bondaa-bondaa, bondab-nic, etc. Generally, the template name follows the syntax of \\"bond\\" or \\"nic\\"."""  
    os_image: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('osImage'), 'exclude': lambda f: f is None }})
    r"""The OS image currently installed on the server."""  
    pod: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('pod'), 'exclude': lambda f: f is None }})
    r"""Immutable. Pod name. Pod is an independent part of infrastructure. Instance can be connected to the assets (networks, volumes) allocated in the same pod only."""  
    volumes: Optional[list[shared_volume.VolumeInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('volumes'), 'exclude': lambda f: f is None }})
    r"""Input only. List of Volumes to attach to this Instance on creation. This field won't be populated in Get/List responses."""  
    workload_profile: Optional[InstanceWorkloadProfileEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('workloadProfile'), 'exclude': lambda f: f is None }})
    r"""The workload profile for the instance."""  
    