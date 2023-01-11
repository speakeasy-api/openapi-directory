import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlesecuritysafebrowsingv4clientinfo as shared_googlesecuritysafebrowsingv4clientinfo
from ..shared import googlesecuritysafebrowsingv4threatinfo as shared_googlesecuritysafebrowsingv4threatinfo


@dataclass_json
@dataclasses.dataclass
class GoogleSecuritySafebrowsingV4FindThreatMatchesRequest:
    r"""GoogleSecuritySafebrowsingV4FindThreatMatchesRequest
    Request to check entries against lists.
    """
    
    client: Optional[shared_googlesecuritysafebrowsingv4clientinfo.GoogleSecuritySafebrowsingV4ClientInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client') }})
    threat_info: Optional[shared_googlesecuritysafebrowsingv4threatinfo.GoogleSecuritySafebrowsingV4ThreatInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('threatInfo') }})
    
