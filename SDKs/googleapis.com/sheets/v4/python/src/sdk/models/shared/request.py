import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import addbandingrequest as shared_addbandingrequest
from ..shared import addchartrequest as shared_addchartrequest
from ..shared import addconditionalformatrulerequest as shared_addconditionalformatrulerequest
from ..shared import adddatasourcerequest as shared_adddatasourcerequest
from ..shared import adddimensiongrouprequest as shared_adddimensiongrouprequest
from ..shared import addfilterviewrequest as shared_addfilterviewrequest
from ..shared import addnamedrangerequest as shared_addnamedrangerequest
from ..shared import addprotectedrangerequest as shared_addprotectedrangerequest
from ..shared import addsheetrequest as shared_addsheetrequest
from ..shared import addslicerrequest as shared_addslicerrequest
from ..shared import appendcellsrequest as shared_appendcellsrequest
from ..shared import appenddimensionrequest as shared_appenddimensionrequest
from ..shared import autofillrequest as shared_autofillrequest
from ..shared import autoresizedimensionsrequest as shared_autoresizedimensionsrequest
from ..shared import clearbasicfilterrequest as shared_clearbasicfilterrequest
from ..shared import copypasterequest as shared_copypasterequest
from ..shared import createdevelopermetadatarequest as shared_createdevelopermetadatarequest
from ..shared import cutpasterequest as shared_cutpasterequest
from ..shared import deletebandingrequest as shared_deletebandingrequest
from ..shared import deleteconditionalformatrulerequest as shared_deleteconditionalformatrulerequest
from ..shared import deletedatasourcerequest as shared_deletedatasourcerequest
from ..shared import deletedevelopermetadatarequest as shared_deletedevelopermetadatarequest
from ..shared import deletedimensionrequest as shared_deletedimensionrequest
from ..shared import deletedimensiongrouprequest as shared_deletedimensiongrouprequest
from ..shared import deleteduplicatesrequest as shared_deleteduplicatesrequest
from ..shared import deleteembeddedobjectrequest as shared_deleteembeddedobjectrequest
from ..shared import deletefilterviewrequest as shared_deletefilterviewrequest
from ..shared import deletenamedrangerequest as shared_deletenamedrangerequest
from ..shared import deleteprotectedrangerequest as shared_deleteprotectedrangerequest
from ..shared import deleterangerequest as shared_deleterangerequest
from ..shared import deletesheetrequest as shared_deletesheetrequest
from ..shared import duplicatefilterviewrequest as shared_duplicatefilterviewrequest
from ..shared import duplicatesheetrequest as shared_duplicatesheetrequest
from ..shared import findreplacerequest as shared_findreplacerequest
from ..shared import insertdimensionrequest as shared_insertdimensionrequest
from ..shared import insertrangerequest as shared_insertrangerequest
from ..shared import mergecellsrequest as shared_mergecellsrequest
from ..shared import movedimensionrequest as shared_movedimensionrequest
from ..shared import pastedatarequest as shared_pastedatarequest
from ..shared import randomizerangerequest as shared_randomizerangerequest
from ..shared import refreshdatasourcerequest as shared_refreshdatasourcerequest
from ..shared import repeatcellrequest as shared_repeatcellrequest
from ..shared import setbasicfilterrequest as shared_setbasicfilterrequest
from ..shared import setdatavalidationrequest as shared_setdatavalidationrequest
from ..shared import sortrangerequest as shared_sortrangerequest
from ..shared import texttocolumnsrequest as shared_texttocolumnsrequest
from ..shared import trimwhitespacerequest as shared_trimwhitespacerequest
from ..shared import unmergecellsrequest as shared_unmergecellsrequest
from ..shared import updatebandingrequest as shared_updatebandingrequest
from ..shared import updatebordersrequest as shared_updatebordersrequest
from ..shared import updatecellsrequest as shared_updatecellsrequest
from ..shared import updatechartspecrequest as shared_updatechartspecrequest
from ..shared import updateconditionalformatrulerequest as shared_updateconditionalformatrulerequest
from ..shared import updatedatasourcerequest as shared_updatedatasourcerequest
from ..shared import updatedevelopermetadatarequest as shared_updatedevelopermetadatarequest
from ..shared import updatedimensiongrouprequest as shared_updatedimensiongrouprequest
from ..shared import updatedimensionpropertiesrequest as shared_updatedimensionpropertiesrequest
from ..shared import updateembeddedobjectborderrequest as shared_updateembeddedobjectborderrequest
from ..shared import updateembeddedobjectpositionrequest as shared_updateembeddedobjectpositionrequest
from ..shared import updatefilterviewrequest as shared_updatefilterviewrequest
from ..shared import updatenamedrangerequest as shared_updatenamedrangerequest
from ..shared import updateprotectedrangerequest as shared_updateprotectedrangerequest
from ..shared import updatesheetpropertiesrequest as shared_updatesheetpropertiesrequest
from ..shared import updateslicerspecrequest as shared_updateslicerspecrequest
from ..shared import updatespreadsheetpropertiesrequest as shared_updatespreadsheetpropertiesrequest


@dataclass_json
@dataclasses.dataclass
class Request:
    r"""Request
    A single kind of update to apply to a spreadsheet.
    """
    
    add_banding: Optional[shared_addbandingrequest.AddBandingRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addBanding') }})
    add_chart: Optional[shared_addchartrequest.AddChartRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addChart') }})
    add_conditional_format_rule: Optional[shared_addconditionalformatrulerequest.AddConditionalFormatRuleRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addConditionalFormatRule') }})
    add_data_source: Optional[shared_adddatasourcerequest.AddDataSourceRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addDataSource') }})
    add_dimension_group: Optional[shared_adddimensiongrouprequest.AddDimensionGroupRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addDimensionGroup') }})
    add_filter_view: Optional[shared_addfilterviewrequest.AddFilterViewRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addFilterView') }})
    add_named_range: Optional[shared_addnamedrangerequest.AddNamedRangeRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addNamedRange') }})
    add_protected_range: Optional[shared_addprotectedrangerequest.AddProtectedRangeRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addProtectedRange') }})
    add_sheet: Optional[shared_addsheetrequest.AddSheetRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addSheet') }})
    add_slicer: Optional[shared_addslicerrequest.AddSlicerRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addSlicer') }})
    append_cells: Optional[shared_appendcellsrequest.AppendCellsRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appendCells') }})
    append_dimension: Optional[shared_appenddimensionrequest.AppendDimensionRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appendDimension') }})
    auto_fill: Optional[shared_autofillrequest.AutoFillRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoFill') }})
    auto_resize_dimensions: Optional[shared_autoresizedimensionsrequest.AutoResizeDimensionsRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoResizeDimensions') }})
    clear_basic_filter: Optional[shared_clearbasicfilterrequest.ClearBasicFilterRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clearBasicFilter') }})
    copy_paste: Optional[shared_copypasterequest.CopyPasteRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('copyPaste') }})
    create_developer_metadata: Optional[shared_createdevelopermetadatarequest.CreateDeveloperMetadataRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createDeveloperMetadata') }})
    cut_paste: Optional[shared_cutpasterequest.CutPasteRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cutPaste') }})
    delete_banding: Optional[shared_deletebandingrequest.DeleteBandingRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteBanding') }})
    delete_conditional_format_rule: Optional[shared_deleteconditionalformatrulerequest.DeleteConditionalFormatRuleRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteConditionalFormatRule') }})
    delete_data_source: Optional[shared_deletedatasourcerequest.DeleteDataSourceRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteDataSource') }})
    delete_developer_metadata: Optional[shared_deletedevelopermetadatarequest.DeleteDeveloperMetadataRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteDeveloperMetadata') }})
    delete_dimension: Optional[shared_deletedimensionrequest.DeleteDimensionRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteDimension') }})
    delete_dimension_group: Optional[shared_deletedimensiongrouprequest.DeleteDimensionGroupRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteDimensionGroup') }})
    delete_duplicates: Optional[shared_deleteduplicatesrequest.DeleteDuplicatesRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteDuplicates') }})
    delete_embedded_object: Optional[shared_deleteembeddedobjectrequest.DeleteEmbeddedObjectRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteEmbeddedObject') }})
    delete_filter_view: Optional[shared_deletefilterviewrequest.DeleteFilterViewRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteFilterView') }})
    delete_named_range: Optional[shared_deletenamedrangerequest.DeleteNamedRangeRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteNamedRange') }})
    delete_protected_range: Optional[shared_deleteprotectedrangerequest.DeleteProtectedRangeRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteProtectedRange') }})
    delete_range: Optional[shared_deleterangerequest.DeleteRangeRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteRange') }})
    delete_sheet: Optional[shared_deletesheetrequest.DeleteSheetRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteSheet') }})
    duplicate_filter_view: Optional[shared_duplicatefilterviewrequest.DuplicateFilterViewRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duplicateFilterView') }})
    duplicate_sheet: Optional[shared_duplicatesheetrequest.DuplicateSheetRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duplicateSheet') }})
    find_replace: Optional[shared_findreplacerequest.FindReplaceRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('findReplace') }})
    insert_dimension: Optional[shared_insertdimensionrequest.InsertDimensionRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insertDimension') }})
    insert_range: Optional[shared_insertrangerequest.InsertRangeRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insertRange') }})
    merge_cells: Optional[shared_mergecellsrequest.MergeCellsRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mergeCells') }})
    move_dimension: Optional[shared_movedimensionrequest.MoveDimensionRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('moveDimension') }})
    paste_data: Optional[shared_pastedatarequest.PasteDataRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pasteData') }})
    randomize_range: Optional[shared_randomizerangerequest.RandomizeRangeRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('randomizeRange') }})
    refresh_data_source: Optional[shared_refreshdatasourcerequest.RefreshDataSourceRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refreshDataSource') }})
    repeat_cell: Optional[shared_repeatcellrequest.RepeatCellRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repeatCell') }})
    set_basic_filter: Optional[shared_setbasicfilterrequest.SetBasicFilterRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('setBasicFilter') }})
    set_data_validation: Optional[shared_setdatavalidationrequest.SetDataValidationRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('setDataValidation') }})
    sort_range: Optional[shared_sortrangerequest.SortRangeRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sortRange') }})
    text_to_columns: Optional[shared_texttocolumnsrequest.TextToColumnsRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textToColumns') }})
    trim_whitespace: Optional[shared_trimwhitespacerequest.TrimWhitespaceRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trimWhitespace') }})
    unmerge_cells: Optional[shared_unmergecellsrequest.UnmergeCellsRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unmergeCells') }})
    update_banding: Optional[shared_updatebandingrequest.UpdateBandingRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateBanding') }})
    update_borders: Optional[shared_updatebordersrequest.UpdateBordersRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateBorders') }})
    update_cells: Optional[shared_updatecellsrequest.UpdateCellsRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateCells') }})
    update_chart_spec: Optional[shared_updatechartspecrequest.UpdateChartSpecRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateChartSpec') }})
    update_conditional_format_rule: Optional[shared_updateconditionalformatrulerequest.UpdateConditionalFormatRuleRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateConditionalFormatRule') }})
    update_data_source: Optional[shared_updatedatasourcerequest.UpdateDataSourceRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateDataSource') }})
    update_developer_metadata: Optional[shared_updatedevelopermetadatarequest.UpdateDeveloperMetadataRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateDeveloperMetadata') }})
    update_dimension_group: Optional[shared_updatedimensiongrouprequest.UpdateDimensionGroupRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateDimensionGroup') }})
    update_dimension_properties: Optional[shared_updatedimensionpropertiesrequest.UpdateDimensionPropertiesRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateDimensionProperties') }})
    update_embedded_object_border: Optional[shared_updateembeddedobjectborderrequest.UpdateEmbeddedObjectBorderRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateEmbeddedObjectBorder') }})
    update_embedded_object_position: Optional[shared_updateembeddedobjectpositionrequest.UpdateEmbeddedObjectPositionRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateEmbeddedObjectPosition') }})
    update_filter_view: Optional[shared_updatefilterviewrequest.UpdateFilterViewRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateFilterView') }})
    update_named_range: Optional[shared_updatenamedrangerequest.UpdateNamedRangeRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateNamedRange') }})
    update_protected_range: Optional[shared_updateprotectedrangerequest.UpdateProtectedRangeRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateProtectedRange') }})
    update_sheet_properties: Optional[shared_updatesheetpropertiesrequest.UpdateSheetPropertiesRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateSheetProperties') }})
    update_slicer_spec: Optional[shared_updateslicerspecrequest.UpdateSlicerSpecRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateSlicerSpec') }})
    update_spreadsheet_properties: Optional[shared_updatespreadsheetpropertiesrequest.UpdateSpreadsheetPropertiesRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateSpreadsheetProperties') }})
    
