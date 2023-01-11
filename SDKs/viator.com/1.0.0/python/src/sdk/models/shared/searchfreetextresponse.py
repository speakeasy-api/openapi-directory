import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class SearchFreetextResponseSearchTypeEnum(str, Enum):
    PRODUCT = "PRODUCT"
    DESTINATION = "DESTINATION"
    ATTRACTION = "ATTRACTION"
    RECOMMENDATION = "RECOMMENDATION"


@dataclass_json
@dataclasses.dataclass
class SearchFreetextResponse:
    search_type: Optional[SearchFreetextResponseSearchTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('searchType') }})
    sort_order: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sortOrder') }})
    
