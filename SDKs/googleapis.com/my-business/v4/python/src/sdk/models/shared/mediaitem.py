import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import attribution as shared_attribution
from ..shared import mediaitemdataref as shared_mediaitemdataref
from ..shared import dimensions as shared_dimensions
from ..shared import mediainsights as shared_mediainsights
from ..shared import locationassociation as shared_locationassociation

class MediaItemMediaFormatEnum(str, Enum):
    MEDIA_FORMAT_UNSPECIFIED = "MEDIA_FORMAT_UNSPECIFIED"
    PHOTO = "PHOTO"
    VIDEO = "VIDEO"


@dataclass_json
@dataclasses.dataclass
class MediaItem:
    r"""MediaItem
    A single media item.
    """
    
    attribution: Optional[shared_attribution.Attribution] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attribution') }})
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    data_ref: Optional[shared_mediaitemdataref.MediaItemDataRef] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataRef') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    dimensions: Optional[shared_dimensions.Dimensions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensions') }})
    google_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('googleUrl') }})
    insights: Optional[shared_mediainsights.MediaInsights] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insights') }})
    location_association: Optional[shared_locationassociation.LocationAssociation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationAssociation') }})
    media_format: Optional[MediaItemMediaFormatEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mediaFormat') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    source_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceUrl') }})
    thumbnail_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumbnailUrl') }})
    
