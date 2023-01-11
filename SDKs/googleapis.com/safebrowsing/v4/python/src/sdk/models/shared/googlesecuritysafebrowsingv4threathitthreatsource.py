import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleSecuritySafebrowsingV4ThreatHitThreatSourceTypeEnum(str, Enum):
    THREAT_SOURCE_TYPE_UNSPECIFIED = "THREAT_SOURCE_TYPE_UNSPECIFIED"
    MATCHING_URL = "MATCHING_URL"
    TAB_URL = "TAB_URL"
    TAB_REDIRECT = "TAB_REDIRECT"
    TAB_RESOURCE = "TAB_RESOURCE"


@dataclass_json
@dataclasses.dataclass
class GoogleSecuritySafebrowsingV4ThreatHitThreatSource:
    r"""GoogleSecuritySafebrowsingV4ThreatHitThreatSource
    A single resource related to a threat hit.
    """
    
    referrer: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('referrer') }})
    remote_ip: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remoteIp') }})
    type: Optional[GoogleSecuritySafebrowsingV4ThreatHitThreatSourceTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
