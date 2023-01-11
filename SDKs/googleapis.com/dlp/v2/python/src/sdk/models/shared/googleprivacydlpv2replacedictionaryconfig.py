import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2wordlist as shared_googleprivacydlpv2wordlist


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2ReplaceDictionaryConfig:
    r"""GooglePrivacyDlpV2ReplaceDictionaryConfig
    Replace each input value with a value randomly selected from the dictionary.
    """
    
    word_list: Optional[shared_googleprivacydlpv2wordlist.GooglePrivacyDlpV2WordList] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wordList') }})
    
