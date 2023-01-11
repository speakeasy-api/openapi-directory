import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import pagingmeta as shared_pagingmeta
from ..shared import activewidget as shared_activewidget


@dataclass_json
@dataclasses.dataclass
class ActiveWidgetList:
    meta: Optional[shared_pagingmeta.PagingMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    widgets: Optional[list[shared_activewidget.ActiveWidget]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('widgets') }})
    
