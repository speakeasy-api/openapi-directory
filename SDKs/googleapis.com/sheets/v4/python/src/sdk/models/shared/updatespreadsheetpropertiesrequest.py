import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import spreadsheetproperties as shared_spreadsheetproperties


@dataclass_json
@dataclasses.dataclass
class UpdateSpreadsheetPropertiesRequest:
    r"""UpdateSpreadsheetPropertiesRequest
    Updates properties of a spreadsheet.
    """
    
    fields: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    properties: Optional[shared_spreadsheetproperties.SpreadsheetProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    
