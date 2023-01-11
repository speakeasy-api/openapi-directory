import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import analyticsinfo as shared_analyticsinfo
from ..shared import androidinfo as shared_androidinfo
from ..shared import desktopinfo as shared_desktopinfo
from ..shared import iosinfo as shared_iosinfo
from ..shared import navigationinfo as shared_navigationinfo
from ..shared import socialmetataginfo as shared_socialmetataginfo


@dataclass_json
@dataclasses.dataclass
class DynamicLinkInfo:
    r"""DynamicLinkInfo
    Information about a Dynamic Link.
    """
    
    analytics_info: Optional[shared_analyticsinfo.AnalyticsInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('analyticsInfo') }})
    android_info: Optional[shared_androidinfo.AndroidInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('androidInfo') }})
    desktop_info: Optional[shared_desktopinfo.DesktopInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desktopInfo') }})
    domain_uri_prefix: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainUriPrefix') }})
    dynamic_link_domain: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dynamicLinkDomain') }})
    ios_info: Optional[shared_iosinfo.IosInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iosInfo') }})
    link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    navigation_info: Optional[shared_navigationinfo.NavigationInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('navigationInfo') }})
    social_meta_tag_info: Optional[shared_socialmetataginfo.SocialMetaTagInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('socialMetaTagInfo') }})
    
