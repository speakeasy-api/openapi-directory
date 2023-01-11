import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class MavenRepositoryConfigVersionPolicyEnum(str, Enum):
    VERSION_POLICY_UNSPECIFIED = "VERSION_POLICY_UNSPECIFIED"
    RELEASE = "RELEASE"
    SNAPSHOT = "SNAPSHOT"


@dataclass_json
@dataclasses.dataclass
class MavenRepositoryConfig:
    r"""MavenRepositoryConfig
    MavenRepositoryConfig is maven related repository details. Provides additional configuration details for repositories of the maven format type.
    """
    
    allow_snapshot_overwrites: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowSnapshotOverwrites') }})
    version_policy: Optional[MavenRepositoryConfigVersionPolicyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versionPolicy') }})
    
