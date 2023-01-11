import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import pagingmeta as shared_pagingmeta
from ..shared import clientstringwithtranslations as shared_clientstringwithtranslations


@dataclass_json
@dataclasses.dataclass
class ClientStrings:
    meta: Optional[shared_pagingmeta.PagingMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    strings: Optional[list[shared_clientstringwithtranslations.ClientStringWithTranslations]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('strings') }})
    
