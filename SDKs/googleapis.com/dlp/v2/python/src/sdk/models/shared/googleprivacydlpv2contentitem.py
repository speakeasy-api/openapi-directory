import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2bytecontentitem as shared_googleprivacydlpv2bytecontentitem
from ..shared import googleprivacydlpv2table as shared_googleprivacydlpv2table


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2ContentItem:
    byte_item: Optional[shared_googleprivacydlpv2bytecontentitem.GooglePrivacyDlpV2ByteContentItem] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('byteItem') }})
    table: Optional[shared_googleprivacydlpv2table.GooglePrivacyDlpV2Table] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('table') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
