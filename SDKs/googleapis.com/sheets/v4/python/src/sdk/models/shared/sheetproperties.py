import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datasourcesheetproperties as shared_datasourcesheetproperties
from ..shared import gridproperties as shared_gridproperties
from ..shared import color as shared_color
from ..shared import colorstyle as shared_colorstyle

class SheetPropertiesSheetTypeEnum(str, Enum):
    SHEET_TYPE_UNSPECIFIED = "SHEET_TYPE_UNSPECIFIED"
    GRID = "GRID"
    OBJECT = "OBJECT"
    DATA_SOURCE = "DATA_SOURCE"


@dataclass_json
@dataclasses.dataclass
class SheetProperties:
    r"""SheetProperties
    Properties of a sheet.
    """
    
    data_source_sheet_properties: Optional[shared_datasourcesheetproperties.DataSourceSheetProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSourceSheetProperties') }})
    grid_properties: Optional[shared_gridproperties.GridProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gridProperties') }})
    hidden: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hidden') }})
    index: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('index') }})
    right_to_left: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rightToLeft') }})
    sheet_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sheetId') }})
    sheet_type: Optional[SheetPropertiesSheetTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sheetType') }})
    tab_color: Optional[shared_color.Color] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tabColor') }})
    tab_color_style: Optional[shared_colorstyle.ColorStyle] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tabColorStyle') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
