import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlesecuritysafebrowsingv4clientinfo as shared_googlesecuritysafebrowsingv4clientinfo
from ..shared import googlesecuritysafebrowsingv4threatentry as shared_googlesecuritysafebrowsingv4threatentry
from ..shared import googlesecuritysafebrowsingv4threathitthreatsource as shared_googlesecuritysafebrowsingv4threathitthreatsource
from ..shared import googlesecuritysafebrowsingv4threathituserinfo as shared_googlesecuritysafebrowsingv4threathituserinfo

class GoogleSecuritySafebrowsingV4ThreatHitPlatformTypeEnum(str, Enum):
    PLATFORM_TYPE_UNSPECIFIED = "PLATFORM_TYPE_UNSPECIFIED"
    WINDOWS = "WINDOWS"
    LINUX = "LINUX"
    ANDROID = "ANDROID"
    OSX = "OSX"
    IOS = "IOS"
    ANY_PLATFORM = "ANY_PLATFORM"
    ALL_PLATFORMS = "ALL_PLATFORMS"
    CHROME = "CHROME"

class GoogleSecuritySafebrowsingV4ThreatHitThreatTypeEnum(str, Enum):
    THREAT_TYPE_UNSPECIFIED = "THREAT_TYPE_UNSPECIFIED"
    MALWARE = "MALWARE"
    SOCIAL_ENGINEERING = "SOCIAL_ENGINEERING"
    UNWANTED_SOFTWARE = "UNWANTED_SOFTWARE"
    POTENTIALLY_HARMFUL_APPLICATION = "POTENTIALLY_HARMFUL_APPLICATION"
    SOCIAL_ENGINEERING_INTERNAL = "SOCIAL_ENGINEERING_INTERNAL"
    API_ABUSE = "API_ABUSE"
    MALICIOUS_BINARY = "MALICIOUS_BINARY"
    CSD_WHITELIST = "CSD_WHITELIST"
    CSD_DOWNLOAD_WHITELIST = "CSD_DOWNLOAD_WHITELIST"
    CLIENT_INCIDENT = "CLIENT_INCIDENT"
    CLIENT_INCIDENT_WHITELIST = "CLIENT_INCIDENT_WHITELIST"
    APK_MALWARE_OFFLINE = "APK_MALWARE_OFFLINE"
    SUBRESOURCE_FILTER = "SUBRESOURCE_FILTER"
    SUSPICIOUS = "SUSPICIOUS"
    TRICK_TO_BILL = "TRICK_TO_BILL"
    HIGH_CONFIDENCE_ALLOWLIST = "HIGH_CONFIDENCE_ALLOWLIST"
    ACCURACY_TIPS = "ACCURACY_TIPS"
    SOCIAL_ENGINEERING_LOWER_PRECISION = "SOCIAL_ENGINEERING_LOWER_PRECISION"


@dataclass_json
@dataclasses.dataclass
class GoogleSecuritySafebrowsingV4ThreatHit:
    client_info: Optional[shared_googlesecuritysafebrowsingv4clientinfo.GoogleSecuritySafebrowsingV4ClientInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientInfo') }})
    entry: Optional[shared_googlesecuritysafebrowsingv4threatentry.GoogleSecuritySafebrowsingV4ThreatEntry] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entry') }})
    platform_type: Optional[GoogleSecuritySafebrowsingV4ThreatHitPlatformTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platformType') }})
    resources: Optional[list[shared_googlesecuritysafebrowsingv4threathitthreatsource.GoogleSecuritySafebrowsingV4ThreatHitThreatSource]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    threat_type: Optional[GoogleSecuritySafebrowsingV4ThreatHitThreatTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('threatType') }})
    user_info: Optional[shared_googlesecuritysafebrowsingv4threathituserinfo.GoogleSecuritySafebrowsingV4ThreatHitUserInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userInfo') }})
    
