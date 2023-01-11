import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2documentlocation as shared_googleprivacydlpv2documentlocation
from ..shared import googleprivacydlpv2imagelocation as shared_googleprivacydlpv2imagelocation
from ..shared import googleprivacydlpv2metadatalocation as shared_googleprivacydlpv2metadatalocation
from ..shared import googleprivacydlpv2recordlocation as shared_googleprivacydlpv2recordlocation


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2ContentLocation:
    r"""GooglePrivacyDlpV2ContentLocation
    Precise location of the finding within a document, record, image, or metadata container.
    """
    
    container_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerName') }})
    container_timestamp: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerTimestamp') }})
    container_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerVersion') }})
    document_location: Optional[shared_googleprivacydlpv2documentlocation.GooglePrivacyDlpV2DocumentLocation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentLocation') }})
    image_location: Optional[shared_googleprivacydlpv2imagelocation.GooglePrivacyDlpV2ImageLocation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageLocation') }})
    metadata_location: Optional[shared_googleprivacydlpv2metadatalocation.GooglePrivacyDlpV2MetadataLocation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadataLocation') }})
    record_location: Optional[shared_googleprivacydlpv2recordlocation.GooglePrivacyDlpV2RecordLocation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recordLocation') }})
    
