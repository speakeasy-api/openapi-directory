import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import addbandingresponse as shared_addbandingresponse
from ..shared import addchartresponse as shared_addchartresponse
from ..shared import adddatasourceresponse as shared_adddatasourceresponse
from ..shared import adddimensiongroupresponse as shared_adddimensiongroupresponse
from ..shared import addfilterviewresponse as shared_addfilterviewresponse
from ..shared import addnamedrangeresponse as shared_addnamedrangeresponse
from ..shared import addprotectedrangeresponse as shared_addprotectedrangeresponse
from ..shared import addsheetresponse as shared_addsheetresponse
from ..shared import addslicerresponse as shared_addslicerresponse
from ..shared import createdevelopermetadataresponse as shared_createdevelopermetadataresponse
from ..shared import deleteconditionalformatruleresponse as shared_deleteconditionalformatruleresponse
from ..shared import deletedevelopermetadataresponse as shared_deletedevelopermetadataresponse
from ..shared import deletedimensiongroupresponse as shared_deletedimensiongroupresponse
from ..shared import deleteduplicatesresponse as shared_deleteduplicatesresponse
from ..shared import duplicatefilterviewresponse as shared_duplicatefilterviewresponse
from ..shared import duplicatesheetresponse as shared_duplicatesheetresponse
from ..shared import findreplaceresponse as shared_findreplaceresponse
from ..shared import refreshdatasourceresponse as shared_refreshdatasourceresponse
from ..shared import trimwhitespaceresponse as shared_trimwhitespaceresponse
from ..shared import updateconditionalformatruleresponse as shared_updateconditionalformatruleresponse
from ..shared import updatedatasourceresponse as shared_updatedatasourceresponse
from ..shared import updatedevelopermetadataresponse as shared_updatedevelopermetadataresponse
from ..shared import updateembeddedobjectpositionresponse as shared_updateembeddedobjectpositionresponse


@dataclass_json
@dataclasses.dataclass
class Response:
    r"""Response
    A single response from an update.
    """
    
    add_banding: Optional[shared_addbandingresponse.AddBandingResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addBanding') }})
    add_chart: Optional[shared_addchartresponse.AddChartResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addChart') }})
    add_data_source: Optional[shared_adddatasourceresponse.AddDataSourceResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addDataSource') }})
    add_dimension_group: Optional[shared_adddimensiongroupresponse.AddDimensionGroupResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addDimensionGroup') }})
    add_filter_view: Optional[shared_addfilterviewresponse.AddFilterViewResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addFilterView') }})
    add_named_range: Optional[shared_addnamedrangeresponse.AddNamedRangeResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addNamedRange') }})
    add_protected_range: Optional[shared_addprotectedrangeresponse.AddProtectedRangeResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addProtectedRange') }})
    add_sheet: Optional[shared_addsheetresponse.AddSheetResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addSheet') }})
    add_slicer: Optional[shared_addslicerresponse.AddSlicerResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addSlicer') }})
    create_developer_metadata: Optional[shared_createdevelopermetadataresponse.CreateDeveloperMetadataResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createDeveloperMetadata') }})
    delete_conditional_format_rule: Optional[shared_deleteconditionalformatruleresponse.DeleteConditionalFormatRuleResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteConditionalFormatRule') }})
    delete_developer_metadata: Optional[shared_deletedevelopermetadataresponse.DeleteDeveloperMetadataResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteDeveloperMetadata') }})
    delete_dimension_group: Optional[shared_deletedimensiongroupresponse.DeleteDimensionGroupResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteDimensionGroup') }})
    delete_duplicates: Optional[shared_deleteduplicatesresponse.DeleteDuplicatesResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteDuplicates') }})
    duplicate_filter_view: Optional[shared_duplicatefilterviewresponse.DuplicateFilterViewResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duplicateFilterView') }})
    duplicate_sheet: Optional[shared_duplicatesheetresponse.DuplicateSheetResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duplicateSheet') }})
    find_replace: Optional[shared_findreplaceresponse.FindReplaceResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('findReplace') }})
    refresh_data_source: Optional[shared_refreshdatasourceresponse.RefreshDataSourceResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refreshDataSource') }})
    trim_whitespace: Optional[shared_trimwhitespaceresponse.TrimWhitespaceResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trimWhitespace') }})
    update_conditional_format_rule: Optional[shared_updateconditionalformatruleresponse.UpdateConditionalFormatRuleResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateConditionalFormatRule') }})
    update_data_source: Optional[shared_updatedatasourceresponse.UpdateDataSourceResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateDataSource') }})
    update_developer_metadata: Optional[shared_updatedevelopermetadataresponse.UpdateDeveloperMetadataResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateDeveloperMetadata') }})
    update_embedded_object_position: Optional[shared_updateembeddedobjectpositionresponse.UpdateEmbeddedObjectPositionResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateEmbeddedObjectPosition') }})
    
