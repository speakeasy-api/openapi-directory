import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SocialMetaTagInfo:
    r"""SocialMetaTagInfo
    Parameters for social meta tag params. Used to set meta tag data for link previews on social sites.
    """
    
    social_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('socialDescription') }})
    social_image_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('socialImageLink') }})
    social_title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('socialTitle') }})
    
