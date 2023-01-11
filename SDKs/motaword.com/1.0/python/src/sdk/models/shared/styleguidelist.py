import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import pagingmeta as shared_pagingmeta
from ..shared import styleguide as shared_styleguide


@dataclass_json
@dataclasses.dataclass
class StyleGuideList:
    meta: Optional[shared_pagingmeta.PagingMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    styleguides: Optional[list[shared_styleguide.StyleGuide]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('styleguides') }})
    
