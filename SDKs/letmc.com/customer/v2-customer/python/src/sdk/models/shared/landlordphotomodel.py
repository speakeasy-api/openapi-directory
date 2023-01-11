import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class LandlordPhotoModelPhotoTypeEnum(str, Enum):
    PHOTO = "Photo"
    MAP = "Map"
    FLOOR_PLAN = "FloorPlan"
    SITE_MAP = "SiteMap"
    AERIAL_PHOTO = "AerialPhoto"


@dataclass_json
@dataclasses.dataclass
class LandlordPhotoModel:
    r"""LandlordPhotoModel
    Stores a photo related to a property structure.
    """
    
    e_tag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ETag') }})
    file_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FileName') }})
    oid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OID') }})
    photo_type: Optional[LandlordPhotoModelPhotoTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PhotoType') }})
    
