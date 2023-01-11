import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resourceaccesscontrol as shared_resourceaccesscontrol
from ..shared import credential as shared_credential
from ..shared import resourceupdate as shared_resourceupdate

class ResourceRuntimePoliciesEnum(str, Enum):
    CREATE = "CREATE"
    DELETE = "DELETE"
    UPDATE_ON_CHANGE = "UPDATE_ON_CHANGE"
    UPDATE_ALWAYS = "UPDATE_ALWAYS"

class ResourceWarningsCodeEnum(str, Enum):
    DEPRECATED_RESOURCE_USED = "DEPRECATED_RESOURCE_USED"
    NO_RESULTS_ON_PAGE = "NO_RESULTS_ON_PAGE"
    UNREACHABLE = "UNREACHABLE"
    NEXT_HOP_ADDRESS_NOT_ASSIGNED = "NEXT_HOP_ADDRESS_NOT_ASSIGNED"
    NEXT_HOP_INSTANCE_NOT_FOUND = "NEXT_HOP_INSTANCE_NOT_FOUND"
    NEXT_HOP_INSTANCE_NOT_ON_NETWORK = "NEXT_HOP_INSTANCE_NOT_ON_NETWORK"
    NEXT_HOP_CANNOT_IP_FORWARD = "NEXT_HOP_CANNOT_IP_FORWARD"
    NEXT_HOP_NOT_RUNNING = "NEXT_HOP_NOT_RUNNING"
    INJECTED_KERNELS_DEPRECATED = "INJECTED_KERNELS_DEPRECATED"
    REQUIRED_TOS_AGREEMENT = "REQUIRED_TOS_AGREEMENT"
    DISK_SIZE_LARGER_THAN_IMAGE_SIZE = "DISK_SIZE_LARGER_THAN_IMAGE_SIZE"
    RESOURCE_NOT_DELETED = "RESOURCE_NOT_DELETED"
    SINGLE_INSTANCE_PROPERTY_TEMPLATE = "SINGLE_INSTANCE_PROPERTY_TEMPLATE"
    NOT_CRITICAL_ERROR = "NOT_CRITICAL_ERROR"
    CLEANUP_FAILED = "CLEANUP_FAILED"
    FIELD_VALUE_OVERRIDEN = "FIELD_VALUE_OVERRIDEN"
    RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING = "RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING"
    MISSING_TYPE_DEPENDENCY = "MISSING_TYPE_DEPENDENCY"
    EXTERNAL_API_WARNING = "EXTERNAL_API_WARNING"
    SCHEMA_VALIDATION_IGNORED = "SCHEMA_VALIDATION_IGNORED"
    UNDECLARED_PROPERTIES = "UNDECLARED_PROPERTIES"
    EXPERIMENTAL_TYPE_USED = "EXPERIMENTAL_TYPE_USED"
    DEPRECATED_TYPE_USED = "DEPRECATED_TYPE_USED"
    PARTIAL_SUCCESS = "PARTIAL_SUCCESS"
    LARGE_DEPLOYMENT_WARNING = "LARGE_DEPLOYMENT_WARNING"
    NEXT_HOP_INSTANCE_HAS_NO_IPV6_INTERFACE = "NEXT_HOP_INSTANCE_HAS_NO_IPV6_INTERFACE"
    INVALID_HEALTH_CHECK_FOR_DYNAMIC_WIEGHTED_LB = "INVALID_HEALTH_CHECK_FOR_DYNAMIC_WIEGHTED_LB"


@dataclass_json
@dataclasses.dataclass
class ResourceWarningsData:
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class ResourceWarnings:
    code: Optional[ResourceWarningsCodeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[list[ResourceWarningsData]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class Resource:
    access_control: Optional[shared_resourceaccesscontrol.ResourceAccessControl] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessControl') }})
    final_properties: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('finalProperties') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    insert_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insertTime') }})
    last_used_credential: Optional[shared_credential.Credential] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUsedCredential') }})
    manifest: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('manifest') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    properties: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    runtime_policies: Optional[list[ResourceRuntimePoliciesEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runtimePolicies') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    update: Optional[shared_resourceupdate.ResourceUpdate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('update') }})
    update_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    warnings: Optional[list[ResourceWarnings]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warnings') }})
    
