import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import glossary as shared_glossary
from ..shared import pagingmeta as shared_pagingmeta


@dataclass_json
@dataclasses.dataclass
class GlossaryList:
    glossaries: Optional[list[shared_glossary.Glossary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('glossaries') }})
    meta: Optional[shared_pagingmeta.PagingMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    
