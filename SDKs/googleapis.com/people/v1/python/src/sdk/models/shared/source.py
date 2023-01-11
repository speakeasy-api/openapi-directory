import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import profilemetadata as shared_profilemetadata

class SourceTypeEnum(str, Enum):
    SOURCE_TYPE_UNSPECIFIED = "SOURCE_TYPE_UNSPECIFIED"
    ACCOUNT = "ACCOUNT"
    PROFILE = "PROFILE"
    DOMAIN_PROFILE = "DOMAIN_PROFILE"
    CONTACT = "CONTACT"
    OTHER_CONTACT = "OTHER_CONTACT"
    DOMAIN_CONTACT = "DOMAIN_CONTACT"


@dataclass_json
@dataclasses.dataclass
class Source:
    r"""Source
    The source of a field.
    """
    
    etag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    profile_metadata: Optional[shared_profilemetadata.ProfileMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profileMetadata') }})
    type: Optional[SourceTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    update_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    

@dataclass_json
@dataclasses.dataclass
class SourceInput:
    r"""SourceInput
    The source of a field.
    """
    
    etag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: Optional[SourceTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
