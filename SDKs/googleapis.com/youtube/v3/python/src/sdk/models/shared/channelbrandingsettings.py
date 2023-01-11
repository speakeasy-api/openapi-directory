import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import channelsettings as shared_channelsettings
from ..shared import propertyvalue as shared_propertyvalue
from ..shared import imagesettings as shared_imagesettings
from ..shared import watchsettings as shared_watchsettings


@dataclass_json
@dataclasses.dataclass
class ChannelBrandingSettings:
    r"""ChannelBrandingSettings
    Branding properties of a YouTube channel.
    """
    
    channel: Optional[shared_channelsettings.ChannelSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel') }})
    hints: Optional[list[shared_propertyvalue.PropertyValue]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hints') }})
    image: Optional[shared_imagesettings.ImageSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    watch: Optional[shared_watchsettings.WatchSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('watch') }})
    
