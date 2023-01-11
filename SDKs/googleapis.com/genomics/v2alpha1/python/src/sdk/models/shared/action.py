import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import secret as shared_secret
from ..shared import mount as shared_mount

class ActionFlagsEnum(str, Enum):
    FLAG_UNSPECIFIED = "FLAG_UNSPECIFIED"
    IGNORE_EXIT_STATUS = "IGNORE_EXIT_STATUS"
    RUN_IN_BACKGROUND = "RUN_IN_BACKGROUND"
    ALWAYS_RUN = "ALWAYS_RUN"
    ENABLE_FUSE = "ENABLE_FUSE"
    PUBLISH_EXPOSED_PORTS = "PUBLISH_EXPOSED_PORTS"
    DISABLE_IMAGE_PREFETCH = "DISABLE_IMAGE_PREFETCH"
    DISABLE_STANDARD_ERROR_CAPTURE = "DISABLE_STANDARD_ERROR_CAPTURE"
    BLOCK_EXTERNAL_NETWORK = "BLOCK_EXTERNAL_NETWORK"


@dataclass_json
@dataclasses.dataclass
class Action:
    r"""Action
    Specifies a single action that runs a Docker container.
    """
    
    commands: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commands') }})
    credentials: Optional[shared_secret.Secret] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('credentials') }})
    encrypted_environment: Optional[shared_secret.Secret] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptedEnvironment') }})
    entrypoint: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entrypoint') }})
    environment: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    flags: Optional[list[ActionFlagsEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flags') }})
    image_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageUri') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    mounts: Optional[list[shared_mount.Mount]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mounts') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    pid_namespace: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pidNamespace') }})
    port_mappings: Optional[dict[str, int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('portMappings') }})
    timeout: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeout') }})
    
