import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tppmessagecategory_enum as shared_tppmessagecategory_enum
from ..shared import messagecode405_sbs_enum as shared_messagecode405_sbs_enum


@dataclass_json
@dataclasses.dataclass
class TppMessage405Sbs:
    category: shared_tppmessagecategory_enum.TppMessageCategoryEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    code: shared_messagecode405_sbs_enum.MessageCode405SbsEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    text: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    
