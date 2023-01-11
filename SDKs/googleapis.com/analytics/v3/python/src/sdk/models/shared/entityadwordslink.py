import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import webpropertyref as shared_webpropertyref
from ..shared import adwordsaccount as shared_adwordsaccount


@dataclass_json
@dataclasses.dataclass
class EntityAdWordsLinkEntity:
    r"""EntityAdWordsLinkEntity
    Web property being linked.
    """
    
    web_property_ref: Optional[shared_webpropertyref.WebPropertyRef] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webPropertyRef') }})
    

@dataclass_json
@dataclasses.dataclass
class EntityAdWordsLink:
    r"""EntityAdWordsLink
    JSON template for Analytics Entity Google Ads Link.
    """
    
    ad_words_accounts: Optional[list[shared_adwordsaccount.AdWordsAccount]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adWordsAccounts') }})
    entity: Optional[EntityAdWordsLinkEntity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entity') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    profile_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profileIds') }})
    self_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selfLink') }})
    
