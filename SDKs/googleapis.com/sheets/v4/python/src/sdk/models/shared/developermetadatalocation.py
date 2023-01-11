import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dimensionrange as shared_dimensionrange

class DeveloperMetadataLocationLocationTypeEnum(str, Enum):
    DEVELOPER_METADATA_LOCATION_TYPE_UNSPECIFIED = "DEVELOPER_METADATA_LOCATION_TYPE_UNSPECIFIED"
    ROW = "ROW"
    COLUMN = "COLUMN"
    SHEET = "SHEET"
    SPREADSHEET = "SPREADSHEET"


@dataclass_json
@dataclasses.dataclass
class DeveloperMetadataLocation:
    r"""DeveloperMetadataLocation
    A location where metadata may be associated in a spreadsheet.
    """
    
    dimension_range: Optional[shared_dimensionrange.DimensionRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensionRange') }})
    location_type: Optional[DeveloperMetadataLocationLocationTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationType') }})
    sheet_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sheetId') }})
    spreadsheet: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spreadsheet') }})
    
