import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2dictionary as shared_googleprivacydlpv2dictionary
from ..shared import googleprivacydlpv2largecustomdictionaryconfig as shared_googleprivacydlpv2largecustomdictionaryconfig
from ..shared import googleprivacydlpv2regex as shared_googleprivacydlpv2regex


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2StoredInfoTypeConfig:
    r"""GooglePrivacyDlpV2StoredInfoTypeConfig
    Configuration for stored infoTypes. All fields and subfield are provided by the user. For more information, see https://cloud.google.com/dlp/docs/creating-custom-infotypes.
    """
    
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    dictionary: Optional[shared_googleprivacydlpv2dictionary.GooglePrivacyDlpV2Dictionary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dictionary') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    large_custom_dictionary: Optional[shared_googleprivacydlpv2largecustomdictionaryconfig.GooglePrivacyDlpV2LargeCustomDictionaryConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('largeCustomDictionary') }})
    regex: Optional[shared_googleprivacydlpv2regex.GooglePrivacyDlpV2Regex] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regex') }})
    
