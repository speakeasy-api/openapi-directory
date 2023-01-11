import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import documentinsearch as shared_documentinsearch
from ..shared import projectinsearch as shared_projectinsearch
from ..shared import stringinsearch as shared_stringinsearch
from ..shared import pagingmeta as shared_pagingmeta


@dataclass_json
@dataclasses.dataclass
class SearchEverywhereResultResult:
    documents: Optional[list[shared_documentinsearch.DocumentInSearch]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documents') }})
    projects: Optional[list[shared_projectinsearch.ProjectInSearch]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projects') }})
    strings: Optional[list[shared_stringinsearch.StringInSearch]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('strings') }})
    

@dataclass_json
@dataclasses.dataclass
class SearchEverywhereResult:
    meta: Optional[shared_pagingmeta.PagingMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    result: Optional[SearchEverywhereResultResult] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    
