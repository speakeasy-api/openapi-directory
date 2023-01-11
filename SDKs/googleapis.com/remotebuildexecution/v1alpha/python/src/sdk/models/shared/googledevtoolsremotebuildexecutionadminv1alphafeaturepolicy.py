import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googledevtoolsremotebuildexecutionadminv1alphafeaturepolicyfeature as shared_googledevtoolsremotebuildexecutionadminv1alphafeaturepolicyfeature

class GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyActionHermeticityEnum(str, Enum):
    ACTION_HERMETICITY_UNSPECIFIED = "ACTION_HERMETICITY_UNSPECIFIED"
    ACTION_HERMETICITY_OFF = "ACTION_HERMETICITY_OFF"
    ACTION_HERMETICITY_ENFORCED = "ACTION_HERMETICITY_ENFORCED"
    ACTION_HERMETICITY_BEST_EFFORT = "ACTION_HERMETICITY_BEST_EFFORT"

class GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyActionIsolationEnum(str, Enum):
    ACTION_ISOLATION_UNSPECIFIED = "ACTION_ISOLATION_UNSPECIFIED"
    ACTION_ISOLATION_OFF = "ACTION_ISOLATION_OFF"
    ACTION_ISOLATION_ENFORCED = "ACTION_ISOLATION_ENFORCED"

class GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxExecutionEnum(str, Enum):
    LINUX_EXECUTION_UNSPECIFIED = "LINUX_EXECUTION_UNSPECIFIED"
    LINUX_EXECUTION_FORBIDDEN = "LINUX_EXECUTION_FORBIDDEN"
    LINUX_EXECUTION_UNRESTRICTED = "LINUX_EXECUTION_UNRESTRICTED"
    LINUX_EXECUTION_HARDENED_GVISOR = "LINUX_EXECUTION_HARDENED_GVISOR"
    LINUX_EXECUTION_HARDENED_GVISOR_OR_TERMINAL = "LINUX_EXECUTION_HARDENED_GVISOR_OR_TERMINAL"

class GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxIsolationEnum(str, Enum):
    LINUX_ISOLATION_UNSPECIFIED = "LINUX_ISOLATION_UNSPECIFIED"
    GVISOR = "GVISOR"
    OFF = "OFF"

class GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyMacExecutionEnum(str, Enum):
    MAC_EXECUTION_UNSPECIFIED = "MAC_EXECUTION_UNSPECIFIED"
    MAC_EXECUTION_FORBIDDEN = "MAC_EXECUTION_FORBIDDEN"

class GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyVMVerificationEnum(str, Enum):
    VM_VERIFICATION_UNSPECIFIED = "VM_VERIFICATION_UNSPECIFIED"
    VM_VERIFICATION_GCP_TOKEN = "VM_VERIFICATION_GCP_TOKEN"
    VM_VERIFICATION_OFF = "VM_VERIFICATION_OFF"

class GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyWindowsExecutionEnum(str, Enum):
    WINDOWS_EXECUTION_UNSPECIFIED = "WINDOWS_EXECUTION_UNSPECIFIED"
    WINDOWS_EXECUTION_FORBIDDEN = "WINDOWS_EXECUTION_FORBIDDEN"
    WINDOWS_EXECUTION_UNRESTRICTED = "WINDOWS_EXECUTION_UNRESTRICTED"
    WINDOWS_EXECUTION_TERMINAL = "WINDOWS_EXECUTION_TERMINAL"


@dataclass_json
@dataclasses.dataclass
class GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy:
    r"""GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy
    FeaturePolicy defines features allowed to be used on RBE instances, as well as instance-wide behavior changes that take effect without opt-in or opt-out at usage time.
    """
    
    action_hermeticity: Optional[GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyActionHermeticityEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionHermeticity') }})
    action_isolation: Optional[GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyActionIsolationEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionIsolation') }})
    container_image_sources: Optional[shared_googledevtoolsremotebuildexecutionadminv1alphafeaturepolicyfeature.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerImageSources') }})
    docker_add_capabilities: Optional[shared_googledevtoolsremotebuildexecutionadminv1alphafeaturepolicyfeature.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dockerAddCapabilities') }})
    docker_chroot_path: Optional[shared_googledevtoolsremotebuildexecutionadminv1alphafeaturepolicyfeature.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dockerChrootPath') }})
    docker_network: Optional[shared_googledevtoolsremotebuildexecutionadminv1alphafeaturepolicyfeature.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dockerNetwork') }})
    docker_privileged: Optional[shared_googledevtoolsremotebuildexecutionadminv1alphafeaturepolicyfeature.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dockerPrivileged') }})
    docker_run_as_container_provided_user: Optional[shared_googledevtoolsremotebuildexecutionadminv1alphafeaturepolicyfeature.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dockerRunAsContainerProvidedUser') }})
    docker_run_as_root: Optional[shared_googledevtoolsremotebuildexecutionadminv1alphafeaturepolicyfeature.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dockerRunAsRoot') }})
    docker_runtime: Optional[shared_googledevtoolsremotebuildexecutionadminv1alphafeaturepolicyfeature.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dockerRuntime') }})
    docker_sibling_containers: Optional[shared_googledevtoolsremotebuildexecutionadminv1alphafeaturepolicyfeature.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dockerSiblingContainers') }})
    linux_execution: Optional[GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxExecutionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linuxExecution') }})
    linux_isolation: Optional[GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxIsolationEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linuxIsolation') }})
    mac_execution: Optional[GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyMacExecutionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('macExecution') }})
    vm_verification: Optional[GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyVMVerificationEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vmVerification') }})
    windows_execution: Optional[GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyWindowsExecutionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('windowsExecution') }})
    
