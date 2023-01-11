import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlesecuritysafebrowsingv4threatlistdescriptor as shared_googlesecuritysafebrowsingv4threatlistdescriptor


@dataclass_json
@dataclasses.dataclass
class GoogleSecuritySafebrowsingV4ListThreatListsResponse:
    threat_lists: Optional[list[shared_googlesecuritysafebrowsingv4threatlistdescriptor.GoogleSecuritySafebrowsingV4ThreatListDescriptor]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('threatLists') }})
    
