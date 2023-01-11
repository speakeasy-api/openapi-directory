import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import blogarticle as shared_blogarticle
from ..shared import pagingmeta as shared_pagingmeta


@dataclass_json
@dataclasses.dataclass
class BlogArticleList:
    articles: Optional[list[shared_blogarticle.BlogArticle]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('articles') }})
    meta: Optional[shared_pagingmeta.PagingMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    
