import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2range as shared_googleprivacydlpv2range
from ..shared import googleprivacydlpv2container as shared_googleprivacydlpv2container
from ..shared import googleprivacydlpv2contentlocation as shared_googleprivacydlpv2contentlocation


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2Location:
    r"""GooglePrivacyDlpV2Location
    Specifies the location of the finding.
    """
    
    byte_range: Optional[shared_googleprivacydlpv2range.GooglePrivacyDlpV2Range] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('byteRange') }})
    codepoint_range: Optional[shared_googleprivacydlpv2range.GooglePrivacyDlpV2Range] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('codepointRange') }})
    container: Optional[shared_googleprivacydlpv2container.GooglePrivacyDlpV2Container] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('container') }})
    content_locations: Optional[list[shared_googleprivacydlpv2contentlocation.GooglePrivacyDlpV2ContentLocation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentLocations') }})
    
