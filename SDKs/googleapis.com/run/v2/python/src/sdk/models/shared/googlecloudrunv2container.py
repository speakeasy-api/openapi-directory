import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudrunv2envvar as shared_googlecloudrunv2envvar
from ..shared import googlecloudrunv2probe as shared_googlecloudrunv2probe
from ..shared import googlecloudrunv2containerport as shared_googlecloudrunv2containerport
from ..shared import googlecloudrunv2resourcerequirements as shared_googlecloudrunv2resourcerequirements
from ..shared import googlecloudrunv2volumemount as shared_googlecloudrunv2volumemount


@dataclass_json
@dataclasses.dataclass
class GoogleCloudRunV2Container:
    r"""GoogleCloudRunV2Container
    A single application container. This specifies both the container to run, the command to run in the container and the arguments to supply to it. Note that additional arguments may be supplied by the system to the container at runtime.
    """
    
    args: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('args') }})
    command: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('command') }})
    env: Optional[list[shared_googlecloudrunv2envvar.GoogleCloudRunV2EnvVar]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('env') }})
    image: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    liveness_probe: Optional[shared_googlecloudrunv2probe.GoogleCloudRunV2Probe] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('livenessProbe') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    ports: Optional[list[shared_googlecloudrunv2containerport.GoogleCloudRunV2ContainerPort]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ports') }})
    resources: Optional[shared_googlecloudrunv2resourcerequirements.GoogleCloudRunV2ResourceRequirements] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    startup_probe: Optional[shared_googlecloudrunv2probe.GoogleCloudRunV2Probe] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startupProbe') }})
    volume_mounts: Optional[list[shared_googlecloudrunv2volumemount.GoogleCloudRunV2VolumeMount]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumeMounts') }})
    working_dir: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workingDir') }})
    
