import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2regex as shared_googleprivacydlpv2regex
from ..shared import googleprivacydlpv2proximity as shared_googleprivacydlpv2proximity


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2ExcludeByHotword:
    r"""GooglePrivacyDlpV2ExcludeByHotword
    The rule to exclude findings based on a hotword. For record inspection of tables, column names are considered hotwords. An example of this is to exclude a finding if it belongs to a BigQuery column that matches a specific pattern.
    """
    
    hotword_regex: Optional[shared_googleprivacydlpv2regex.GooglePrivacyDlpV2Regex] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hotwordRegex') }})
    proximity: Optional[shared_googleprivacydlpv2proximity.GooglePrivacyDlpV2Proximity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('proximity') }})
    
