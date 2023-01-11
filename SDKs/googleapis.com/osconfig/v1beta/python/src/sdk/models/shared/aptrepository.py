import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AptRepositoryArchiveTypeEnum(str, Enum):
    ARCHIVE_TYPE_UNSPECIFIED = "ARCHIVE_TYPE_UNSPECIFIED"
    DEB = "DEB"
    DEB_SRC = "DEB_SRC"


@dataclass_json
@dataclasses.dataclass
class AptRepository:
    r"""AptRepository
    Represents a single Apt package repository. This repository is added to a repo file that is stored at `/etc/apt/sources.list.d/google_osconfig.list`.
    """
    
    archive_type: Optional[AptRepositoryArchiveTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('archiveType') }})
    components: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('components') }})
    distribution: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('distribution') }})
    gpg_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gpgKey') }})
    uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    
