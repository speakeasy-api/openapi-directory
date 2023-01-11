import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2storagemetadatalabel as shared_googleprivacydlpv2storagemetadatalabel

class GooglePrivacyDlpV2MetadataLocationTypeEnum(str, Enum):
    METADATATYPE_UNSPECIFIED = "METADATATYPE_UNSPECIFIED"
    STORAGE_METADATA = "STORAGE_METADATA"


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2MetadataLocation:
    r"""GooglePrivacyDlpV2MetadataLocation
    Metadata Location
    """
    
    storage_label: Optional[shared_googleprivacydlpv2storagemetadatalabel.GooglePrivacyDlpV2StorageMetadataLabel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storageLabel') }})
    type: Optional[GooglePrivacyDlpV2MetadataLocationTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
