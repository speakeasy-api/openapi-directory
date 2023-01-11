import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tppmessagecategory_enum as shared_tppmessagecategory_enum
from ..shared import messagecode401_pis_enum as shared_messagecode401_pis_enum


@dataclass_json
@dataclasses.dataclass
class TppMessage401Pis:
    category: shared_tppmessagecategory_enum.TppMessageCategoryEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    code: shared_messagecode401_pis_enum.MessageCode401PisEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    text: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    
