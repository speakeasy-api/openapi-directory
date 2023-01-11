import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2largecustomdictionarystats as shared_googleprivacydlpv2largecustomdictionarystats


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2StoredInfoTypeStats:
    r"""GooglePrivacyDlpV2StoredInfoTypeStats
    Statistics for a StoredInfoType.
    """
    
    large_custom_dictionary: Optional[shared_googleprivacydlpv2largecustomdictionarystats.GooglePrivacyDlpV2LargeCustomDictionaryStats] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('largeCustomDictionary') }})
    
