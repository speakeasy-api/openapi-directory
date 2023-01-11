import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import holidaysholiday as shared_holidaysholiday


@dataclass_json
@dataclasses.dataclass
class ShippingsettingsGetSupportedHolidaysResponse:
    holidays: Optional[list[shared_holidaysholiday.HolidaysHoliday]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('holidays') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
