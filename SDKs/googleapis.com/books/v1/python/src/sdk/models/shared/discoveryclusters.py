import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import volume as shared_volume


@dataclass_json
@dataclasses.dataclass
class DiscoveryclustersClustersBannerWithContentContainer:
    fill_color_argb: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fillColorArgb') }})
    image_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageUrl') }})
    mask_color_argb: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maskColorArgb') }})
    more_button_text: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('moreButtonText') }})
    more_button_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('moreButtonUrl') }})
    text_color_argb: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textColorArgb') }})
    

@dataclass_json
@dataclasses.dataclass
class DiscoveryclustersClusters:
    banner_with_content_container: Optional[DiscoveryclustersClustersBannerWithContentContainer] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('banner_with_content_container') }})
    sub_title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subTitle') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    total_volumes: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalVolumes') }})
    uid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uid') }})
    volumes: Optional[list[shared_volume.Volume]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumes') }})
    

@dataclass_json
@dataclasses.dataclass
class Discoveryclusters:
    clusters: Optional[list[DiscoveryclustersClusters]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusters') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    total_clusters: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalClusters') }})
    
