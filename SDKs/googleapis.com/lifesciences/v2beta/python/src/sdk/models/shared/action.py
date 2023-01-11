import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import secret as shared_secret
from ..shared import mount as shared_mount


@dataclass_json
@dataclasses.dataclass
class Action:
    r"""Action
    Specifies a single action that runs a Docker container.
    """
    
    always_run: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alwaysRun') }})
    block_external_network: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blockExternalNetwork') }})
    commands: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commands') }})
    container_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerName') }})
    credentials: Optional[shared_secret.Secret] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('credentials') }})
    disable_image_prefetch: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableImagePrefetch') }})
    disable_standard_error_capture: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableStandardErrorCapture') }})
    enable_fuse: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableFuse') }})
    encrypted_environment: Optional[shared_secret.Secret] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptedEnvironment') }})
    entrypoint: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entrypoint') }})
    environment: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    ignore_exit_status: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ignoreExitStatus') }})
    image_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageUri') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    mounts: Optional[list[shared_mount.Mount]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mounts') }})
    pid_namespace: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pidNamespace') }})
    port_mappings: Optional[dict[str, int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('portMappings') }})
    publish_exposed_ports: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publishExposedPorts') }})
    run_in_background: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runInBackground') }})
    timeout: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeout') }})
    
