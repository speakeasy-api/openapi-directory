import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import href as shared_href


@dataclass_json
@dataclasses.dataclass
class BlogArticleLinks:
    android: Optional[shared_href.Href] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('android') }})
    header_image: Optional[shared_href.Href] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('header_image') }})
    ios: Optional[shared_href.Href] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ios') }})
    self: Optional[shared_href.Href] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    web: Optional[shared_href.Href] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('web') }})
    
