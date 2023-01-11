import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datasourcesheetdimensionrange as shared_datasourcesheetdimensionrange
from ..shared import dimensionproperties as shared_dimensionproperties
from ..shared import dimensionrange as shared_dimensionrange


@dataclass_json
@dataclasses.dataclass
class UpdateDimensionPropertiesRequest:
    r"""UpdateDimensionPropertiesRequest
    Updates properties of dimensions within the specified range.
    """
    
    data_source_sheet_range: Optional[shared_datasourcesheetdimensionrange.DataSourceSheetDimensionRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSourceSheetRange') }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    properties: Optional[shared_dimensionproperties.DimensionProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    range: Optional[shared_dimensionrange.DimensionRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('range') }})
    
