import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import hash as shared_hash


@dataclass_json
@dataclasses.dataclass
class GoogleDevtoolsArtifactregistryV1beta2File:
    r"""GoogleDevtoolsArtifactregistryV1beta2File
    Files store content that is potentially associated with Packages or Versions.
    """
    
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    hashes: Optional[list[shared_hash.Hash]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hashes') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    owner: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('owner') }})
    size_bytes: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sizeBytes') }})
    update_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
