import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import keyvaluepair_string_string_ as shared_keyvaluepair_string_string_


@dataclass_json
@dataclasses.dataclass
class LandlordProfitLossRowModel:
    r"""LandlordProfitLossRowModel
    Class for a group of entries.
    """
    
    month_totals: Optional[list[shared_keyvaluepair_string_string_.KeyValuePairStringString]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MonthTotals') }})
    nominal_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NominalCode') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Title') }})
    total: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Total') }})
    
