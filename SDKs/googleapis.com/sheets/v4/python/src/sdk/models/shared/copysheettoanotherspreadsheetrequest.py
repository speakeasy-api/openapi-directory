import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CopySheetToAnotherSpreadsheetRequest:
    r"""CopySheetToAnotherSpreadsheetRequest
    The request to copy a sheet across spreadsheets.
    """
    
    destination_spreadsheet_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationSpreadsheetId') }})
    
