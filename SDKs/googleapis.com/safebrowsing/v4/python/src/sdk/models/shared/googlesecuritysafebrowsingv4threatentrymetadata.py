import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlesecuritysafebrowsingv4threatentrymetadatametadataentry as shared_googlesecuritysafebrowsingv4threatentrymetadatametadataentry


@dataclass_json
@dataclasses.dataclass
class GoogleSecuritySafebrowsingV4ThreatEntryMetadata:
    r"""GoogleSecuritySafebrowsingV4ThreatEntryMetadata
    The metadata associated with a specific threat entry. The client is expected to know the metadata key/value pairs associated with each threat type.
    """
    
    entries: Optional[list[shared_googlesecuritysafebrowsingv4threatentrymetadatametadataentry.GoogleSecuritySafebrowsingV4ThreatEntryMetadataMetadataEntry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entries') }})
    
