import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datasourceformula as shared_datasourceformula
from ..shared import datasourcetable as shared_datasourcetable
from ..shared import datavalidationrule as shared_datavalidationrule
from ..shared import cellformat as shared_cellformat
from ..shared import extendedvalue as shared_extendedvalue
from ..shared import pivottable as shared_pivottable
from ..shared import textformatrun as shared_textformatrun


@dataclass_json
@dataclasses.dataclass
class CellData:
    r"""CellData
    Data about a specific cell.
    """
    
    data_source_formula: Optional[shared_datasourceformula.DataSourceFormula] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSourceFormula') }})
    data_source_table: Optional[shared_datasourcetable.DataSourceTable] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSourceTable') }})
    data_validation: Optional[shared_datavalidationrule.DataValidationRule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataValidation') }})
    effective_format: Optional[shared_cellformat.CellFormat] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('effectiveFormat') }})
    effective_value: Optional[shared_extendedvalue.ExtendedValue] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('effectiveValue') }})
    formatted_value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('formattedValue') }})
    hyperlink: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hyperlink') }})
    note: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('note') }})
    pivot_table: Optional[shared_pivottable.PivotTable] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pivotTable') }})
    text_format_runs: Optional[list[shared_textformatrun.TextFormatRun]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textFormatRuns') }})
    user_entered_format: Optional[shared_cellformat.CellFormat] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userEnteredFormat') }})
    user_entered_value: Optional[shared_extendedvalue.ExtendedValue] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userEnteredValue') }})
    
