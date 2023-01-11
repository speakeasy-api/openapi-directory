import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cellformat as shared_cellformat
from ..shared import iterativecalculationsettings as shared_iterativecalculationsettings
from ..shared import spreadsheettheme as shared_spreadsheettheme

class SpreadsheetPropertiesAutoRecalcEnum(str, Enum):
    RECALCULATION_INTERVAL_UNSPECIFIED = "RECALCULATION_INTERVAL_UNSPECIFIED"
    ON_CHANGE = "ON_CHANGE"
    MINUTE = "MINUTE"
    HOUR = "HOUR"


@dataclass_json
@dataclasses.dataclass
class SpreadsheetProperties:
    r"""SpreadsheetProperties
    Properties of a spreadsheet.
    """
    
    auto_recalc: Optional[SpreadsheetPropertiesAutoRecalcEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoRecalc') }})
    default_format: Optional[shared_cellformat.CellFormat] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultFormat') }})
    iterative_calculation_settings: Optional[shared_iterativecalculationsettings.IterativeCalculationSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iterativeCalculationSettings') }})
    locale: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locale') }})
    spreadsheet_theme: Optional[shared_spreadsheettheme.SpreadsheetTheme] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spreadsheetTheme') }})
    time_zone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeZone') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
