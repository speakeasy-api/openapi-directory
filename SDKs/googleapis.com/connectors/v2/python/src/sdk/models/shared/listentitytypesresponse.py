import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import entitytype as shared_entitytype


@dataclass_json
@dataclasses.dataclass
class ListEntityTypesResponse:
    r"""ListEntityTypesResponse
    Response message for EntityService.ListEntityTypes
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    types: Optional[list[shared_entitytype.EntityType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('types') }})
    unsupported_type_names: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unsupportedTypeNames') }})
    
