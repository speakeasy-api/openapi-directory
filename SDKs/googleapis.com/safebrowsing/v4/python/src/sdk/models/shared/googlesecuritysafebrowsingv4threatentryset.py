import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlesecuritysafebrowsingv4rawhashes as shared_googlesecuritysafebrowsingv4rawhashes
from ..shared import googlesecuritysafebrowsingv4rawindices as shared_googlesecuritysafebrowsingv4rawindices
from ..shared import googlesecuritysafebrowsingv4ricedeltaencoding as shared_googlesecuritysafebrowsingv4ricedeltaencoding

class GoogleSecuritySafebrowsingV4ThreatEntrySetCompressionTypeEnum(str, Enum):
    COMPRESSION_TYPE_UNSPECIFIED = "COMPRESSION_TYPE_UNSPECIFIED"
    RAW = "RAW"
    RICE = "RICE"


@dataclass_json
@dataclasses.dataclass
class GoogleSecuritySafebrowsingV4ThreatEntrySet:
    r"""GoogleSecuritySafebrowsingV4ThreatEntrySet
    A set of threats that should be added or removed from a client's local database.
    """
    
    compression_type: Optional[GoogleSecuritySafebrowsingV4ThreatEntrySetCompressionTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compressionType') }})
    raw_hashes: Optional[shared_googlesecuritysafebrowsingv4rawhashes.GoogleSecuritySafebrowsingV4RawHashes] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rawHashes') }})
    raw_indices: Optional[shared_googlesecuritysafebrowsingv4rawindices.GoogleSecuritySafebrowsingV4RawIndices] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rawIndices') }})
    rice_hashes: Optional[shared_googlesecuritysafebrowsingv4ricedeltaencoding.GoogleSecuritySafebrowsingV4RiceDeltaEncoding] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('riceHashes') }})
    rice_indices: Optional[shared_googlesecuritysafebrowsingv4ricedeltaencoding.GoogleSecuritySafebrowsingV4RiceDeltaEncoding] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('riceIndices') }})
    
