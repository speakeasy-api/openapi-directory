import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datasourcecolumnreference as shared_datasourcecolumnreference
from ..shared import developermetadata as shared_developermetadata


@dataclass_json
@dataclasses.dataclass
class DimensionProperties:
    r"""DimensionProperties
    Properties about a dimension.
    """
    
    data_source_column_reference: Optional[shared_datasourcecolumnreference.DataSourceColumnReference] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSourceColumnReference') }})
    developer_metadata: Optional[list[shared_developermetadata.DeveloperMetadata]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('developerMetadata') }})
    hidden_by_filter: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hiddenByFilter') }})
    hidden_by_user: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hiddenByUser') }})
    pixel_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pixelSize') }})
    
