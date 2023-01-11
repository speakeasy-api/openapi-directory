import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import typeinfo as shared_typeinfo


@dataclass_json
@dataclasses.dataclass
class TypeProvidersListTypesResponse:
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    types: Optional[list[shared_typeinfo.TypeInfo]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('types') }})
    
