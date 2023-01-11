import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class WmxSitemapContentTypeEnum(str, Enum):
    WEB = "WEB"
    IMAGE = "IMAGE"
    VIDEO = "VIDEO"
    NEWS = "NEWS"
    MOBILE = "MOBILE"
    ANDROID_APP = "ANDROID_APP"
    PATTERN = "PATTERN"
    IOS_APP = "IOS_APP"
    DATA_FEED_ELEMENT = "DATA_FEED_ELEMENT"


@dataclass_json
@dataclasses.dataclass
class WmxSitemapContent:
    r"""WmxSitemapContent
    Information about the various content types in the sitemap.
    """
    
    indexed: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('indexed') }})
    submitted: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('submitted') }})
    type: Optional[WmxSitemapContentTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
