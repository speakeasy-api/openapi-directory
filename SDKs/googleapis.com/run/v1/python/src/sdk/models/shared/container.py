import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import envvar as shared_envvar
from ..shared import envfromsource as shared_envfromsource
from ..shared import probe as shared_probe
from ..shared import containerport as shared_containerport
from ..shared import resourcerequirements as shared_resourcerequirements
from ..shared import securitycontext as shared_securitycontext
from ..shared import volumemount as shared_volumemount


@dataclass_json
@dataclasses.dataclass
class Container:
    r"""Container
    A single application container. This specifies both the container to run, the command to run in the container and the arguments to supply to it. Note that additional arguments may be supplied by the system to the container at runtime.
    """
    
    args: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('args') }})
    command: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('command') }})
    env: Optional[list[shared_envvar.EnvVar]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('env') }})
    env_from: Optional[list[shared_envfromsource.EnvFromSource]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('envFrom') }})
    image: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    image_pull_policy: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imagePullPolicy') }})
    liveness_probe: Optional[shared_probe.Probe] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('livenessProbe') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    ports: Optional[list[shared_containerport.ContainerPort]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ports') }})
    readiness_probe: Optional[shared_probe.Probe] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readinessProbe') }})
    resources: Optional[shared_resourcerequirements.ResourceRequirements] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    security_context: Optional[shared_securitycontext.SecurityContext] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityContext') }})
    startup_probe: Optional[shared_probe.Probe] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startupProbe') }})
    termination_message_path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('terminationMessagePath') }})
    termination_message_policy: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('terminationMessagePolicy') }})
    volume_mounts: Optional[list[shared_volumemount.VolumeMount]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumeMounts') }})
    working_dir: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workingDir') }})
    
