import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2inspectresult as shared_googleprivacydlpv2inspectresult


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2RedactImageResponse:
    r"""GooglePrivacyDlpV2RedactImageResponse
    Results of redacting an image.
    """
    
    extracted_text: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extractedText') }})
    inspect_result: Optional[shared_googleprivacydlpv2inspectresult.GooglePrivacyDlpV2InspectResult] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inspectResult') }})
    redacted_image: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redactedImage') }})
    
