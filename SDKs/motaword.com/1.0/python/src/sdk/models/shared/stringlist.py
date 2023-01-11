import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import pagingmeta as shared_pagingmeta
from ..shared import stringwithtranslations as shared_stringwithtranslations


@dataclass_json
@dataclasses.dataclass
class StringList:
    meta: Optional[shared_pagingmeta.PagingMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    translations: Optional[list[shared_stringwithtranslations.StringWithTranslations]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('translations') }})
    
