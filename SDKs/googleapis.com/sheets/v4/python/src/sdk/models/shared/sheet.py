import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import bandedrange as shared_bandedrange
from ..shared import basicfilter as shared_basicfilter
from ..shared import embeddedchart as shared_embeddedchart
from ..shared import dimensiongroup as shared_dimensiongroup
from ..shared import conditionalformatrule as shared_conditionalformatrule
from ..shared import griddata as shared_griddata
from ..shared import developermetadata as shared_developermetadata
from ..shared import filterview as shared_filterview
from ..shared import gridrange as shared_gridrange
from ..shared import sheetproperties as shared_sheetproperties
from ..shared import protectedrange as shared_protectedrange
from ..shared import slicer as shared_slicer


@dataclass_json
@dataclasses.dataclass
class Sheet:
    r"""Sheet
    A sheet in a spreadsheet.
    """
    
    banded_ranges: Optional[list[shared_bandedrange.BandedRange]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bandedRanges') }})
    basic_filter: Optional[shared_basicfilter.BasicFilter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('basicFilter') }})
    charts: Optional[list[shared_embeddedchart.EmbeddedChart]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('charts') }})
    column_groups: Optional[list[shared_dimensiongroup.DimensionGroup]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columnGroups') }})
    conditional_formats: Optional[list[shared_conditionalformatrule.ConditionalFormatRule]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conditionalFormats') }})
    data: Optional[list[shared_griddata.GridData]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    developer_metadata: Optional[list[shared_developermetadata.DeveloperMetadata]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('developerMetadata') }})
    filter_views: Optional[list[shared_filterview.FilterView]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filterViews') }})
    merges: Optional[list[shared_gridrange.GridRange]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merges') }})
    properties: Optional[shared_sheetproperties.SheetProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    protected_ranges: Optional[list[shared_protectedrange.ProtectedRange]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protectedRanges') }})
    row_groups: Optional[list[shared_dimensiongroup.DimensionGroup]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rowGroups') }})
    slicers: Optional[list[shared_slicer.Slicer]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slicers') }})
    
