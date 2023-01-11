import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlesecuritysafebrowsingv4clientinfo as shared_googlesecuritysafebrowsingv4clientinfo
from ..shared import googlesecuritysafebrowsingv4threatinfo as shared_googlesecuritysafebrowsingv4threatinfo


@dataclass_json
@dataclasses.dataclass
class GoogleSecuritySafebrowsingV4FindFullHashesRequest:
    r"""GoogleSecuritySafebrowsingV4FindFullHashesRequest
    Request to return full hashes matched by the provided hash prefixes.
    """
    
    api_client: Optional[shared_googlesecuritysafebrowsingv4clientinfo.GoogleSecuritySafebrowsingV4ClientInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiClient') }})
    client: Optional[shared_googlesecuritysafebrowsingv4clientinfo.GoogleSecuritySafebrowsingV4ClientInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client') }})
    client_states: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientStates') }})
    threat_info: Optional[shared_googlesecuritysafebrowsingv4threatinfo.GoogleSecuritySafebrowsingV4ThreatInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('threatInfo') }})
    
