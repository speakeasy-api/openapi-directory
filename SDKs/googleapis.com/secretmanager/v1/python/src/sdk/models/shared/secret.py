import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import replication as shared_replication
from ..shared import rotation as shared_rotation
from ..shared import topic as shared_topic


@dataclass_json
@dataclasses.dataclass
class SecretInput:
    r"""SecretInput
    A Secret is a logical secret whose value and versions can be accessed. A Secret is made up of zero or more SecretVersions that represent the secret data.
    """
    
    annotations: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotations') }})
    etag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    expire_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expireTime') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    replication: Optional[shared_replication.Replication] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replication') }})
    rotation: Optional[shared_rotation.Rotation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rotation') }})
    topics: Optional[list[shared_topic.Topic]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topics') }})
    ttl: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ttl') }})
    version_aliases: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versionAliases') }})
    

@dataclass_json
@dataclasses.dataclass
class Secret:
    r"""Secret
    A Secret is a logical secret whose value and versions can be accessed. A Secret is made up of zero or more SecretVersions that represent the secret data.
    """
    
    annotations: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotations') }})
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    etag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    expire_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expireTime') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    replication: Optional[shared_replication.Replication] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replication') }})
    rotation: Optional[shared_rotation.Rotation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rotation') }})
    topics: Optional[list[shared_topic.Topic]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topics') }})
    ttl: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ttl') }})
    version_aliases: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versionAliases') }})
    
