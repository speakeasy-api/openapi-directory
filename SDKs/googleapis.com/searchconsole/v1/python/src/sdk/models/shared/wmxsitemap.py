import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import wmxsitemapcontent as shared_wmxsitemapcontent

class WmxSitemapTypeEnum(str, Enum):
    NOT_SITEMAP = "NOT_SITEMAP"
    URL_LIST = "URL_LIST"
    SITEMAP = "SITEMAP"
    RSS_FEED = "RSS_FEED"
    ATOM_FEED = "ATOM_FEED"
    PATTERN_SITEMAP = "PATTERN_SITEMAP"
    OCEANFRONT = "OCEANFRONT"


@dataclass_json
@dataclasses.dataclass
class WmxSitemap:
    r"""WmxSitemap
    Contains detailed information about a specific URL submitted as a [sitemap](https://support.google.com/webmasters/answer/156184).
    """
    
    contents: Optional[list[shared_wmxsitemapcontent.WmxSitemapContent]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contents') }})
    errors: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    is_pending: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isPending') }})
    is_sitemaps_index: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isSitemapsIndex') }})
    last_downloaded: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastDownloaded') }})
    last_submitted: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastSubmitted') }})
    path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    type: Optional[WmxSitemapTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    warnings: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warnings') }})
    
