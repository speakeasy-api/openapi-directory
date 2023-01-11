import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import format as shared_format
from ..shared import presentationparams as shared_presentationparams
from ..shared import remixinfo as shared_remixinfo
from ..shared import file as shared_file

class AssetLicenseEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    CREATIVE_COMMONS_BY = "CREATIVE_COMMONS_BY"
    ALL_RIGHTS_RESERVED = "ALL_RIGHTS_RESERVED"

class AssetVisibilityEnum(str, Enum):
    VISIBILITY_UNSPECIFIED = "VISIBILITY_UNSPECIFIED"
    PRIVATE = "PRIVATE"
    UNLISTED = "UNLISTED"
    PUBLIC = "PUBLIC"


@dataclass_json
@dataclasses.dataclass
class Asset:
    r"""Asset
    Represents and describes an asset in the Poly library. An asset is a 3D model or scene created using [Tilt Brush](//www.tiltbrush.com), [Blocks](//vr.google.com/blocks/), or any 3D program that produces a file that can be upload to Poly.
    """
    
    author_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorName') }})
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    formats: Optional[list[shared_format.Format]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('formats') }})
    is_curated: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isCurated') }})
    license: Optional[AssetLicenseEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('license') }})
    metadata: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    presentation_params: Optional[shared_presentationparams.PresentationParams] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('presentationParams') }})
    remix_info: Optional[shared_remixinfo.RemixInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remixInfo') }})
    thumbnail: Optional[shared_file.File] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumbnail') }})
    update_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    visibility: Optional[AssetVisibilityEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('visibility') }})
    
