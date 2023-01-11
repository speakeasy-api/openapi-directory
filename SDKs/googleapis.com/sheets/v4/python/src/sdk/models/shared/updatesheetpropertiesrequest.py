import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sheetproperties as shared_sheetproperties


@dataclass_json
@dataclasses.dataclass
class UpdateSheetPropertiesRequest:
    r"""UpdateSheetPropertiesRequest
    Updates properties of the sheet with the specified sheetId.
    """
    
    fields: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    properties: Optional[shared_sheetproperties.SheetProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    
