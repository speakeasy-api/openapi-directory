import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import floodlightactivitydynamictag as shared_floodlightactivitydynamictag
from ..shared import dimensionvalue as shared_dimensionvalue


@dataclass_json
@dataclasses.dataclass
class FloodlightActivityPublisherDynamicTag:
    r"""FloodlightActivityPublisherDynamicTag
    Publisher Dynamic Tag
    """
    
    click_through: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clickThrough') }})
    directory_site_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('directorySiteId') }})
    dynamic_tag: Optional[shared_floodlightactivitydynamictag.FloodlightActivityDynamicTag] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dynamicTag') }})
    site_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('siteId') }})
    site_id_dimension_value: Optional[shared_dimensionvalue.DimensionValue] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('siteIdDimensionValue') }})
    view_through: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('viewThrough') }})
    
