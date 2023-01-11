import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2bytecontentitem as shared_googleprivacydlpv2bytecontentitem
from ..shared import googleprivacydlpv2imageredactionconfig as shared_googleprivacydlpv2imageredactionconfig
from ..shared import googleprivacydlpv2inspectconfig as shared_googleprivacydlpv2inspectconfig


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2RedactImageRequest:
    r"""GooglePrivacyDlpV2RedactImageRequest
    Request to search for potentially sensitive info in an image and redact it by covering it with a colored rectangle.
    """
    
    byte_item: Optional[shared_googleprivacydlpv2bytecontentitem.GooglePrivacyDlpV2ByteContentItem] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('byteItem') }})
    image_redaction_configs: Optional[list[shared_googleprivacydlpv2imageredactionconfig.GooglePrivacyDlpV2ImageRedactionConfig]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageRedactionConfigs') }})
    include_findings: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeFindings') }})
    inspect_config: Optional[shared_googleprivacydlpv2inspectconfig.GooglePrivacyDlpV2InspectConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inspectConfig') }})
    location_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationId') }})
    
