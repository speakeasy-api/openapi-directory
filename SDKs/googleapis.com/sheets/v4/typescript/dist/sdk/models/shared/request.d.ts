import { SpeakeasyBase } from "../../../internal/utils";
import { AddBandingRequest } from "./addbandingrequest";
import { AddChartRequest } from "./addchartrequest";
import { AddConditionalFormatRuleRequest } from "./addconditionalformatrulerequest";
import { AddDataSourceRequest } from "./adddatasourcerequest";
import { AddDimensionGroupRequest } from "./adddimensiongrouprequest";
import { AddFilterViewRequest } from "./addfilterviewrequest";
import { AddNamedRangeRequest } from "./addnamedrangerequest";
import { AddProtectedRangeRequest } from "./addprotectedrangerequest";
import { AddSheetRequest } from "./addsheetrequest";
import { AddSlicerRequest } from "./addslicerrequest";
import { AppendCellsRequest } from "./appendcellsrequest";
import { AppendDimensionRequest } from "./appenddimensionrequest";
import { AutoFillRequest } from "./autofillrequest";
import { AutoResizeDimensionsRequest } from "./autoresizedimensionsrequest";
import { ClearBasicFilterRequest } from "./clearbasicfilterrequest";
import { CopyPasteRequest } from "./copypasterequest";
import { CreateDeveloperMetadataRequest } from "./createdevelopermetadatarequest";
import { CutPasteRequest } from "./cutpasterequest";
import { DeleteBandingRequest } from "./deletebandingrequest";
import { DeleteConditionalFormatRuleRequest } from "./deleteconditionalformatrulerequest";
import { DeleteDataSourceRequest } from "./deletedatasourcerequest";
import { DeleteDeveloperMetadataRequest } from "./deletedevelopermetadatarequest";
import { DeleteDimensionGroupRequest } from "./deletedimensiongrouprequest";
import { DeleteDimensionRequest } from "./deletedimensionrequest";
import { DeleteDuplicatesRequest } from "./deleteduplicatesrequest";
import { DeleteEmbeddedObjectRequest } from "./deleteembeddedobjectrequest";
import { DeleteFilterViewRequest } from "./deletefilterviewrequest";
import { DeleteNamedRangeRequest } from "./deletenamedrangerequest";
import { DeleteProtectedRangeRequest } from "./deleteprotectedrangerequest";
import { DeleteRangeRequest } from "./deleterangerequest";
import { DeleteSheetRequest } from "./deletesheetrequest";
import { DuplicateFilterViewRequest } from "./duplicatefilterviewrequest";
import { DuplicateSheetRequest } from "./duplicatesheetrequest";
import { FindReplaceRequest } from "./findreplacerequest";
import { InsertDimensionRequest } from "./insertdimensionrequest";
import { InsertRangeRequest } from "./insertrangerequest";
import { MergeCellsRequest } from "./mergecellsrequest";
import { MoveDimensionRequest } from "./movedimensionrequest";
import { PasteDataRequest } from "./pastedatarequest";
import { RandomizeRangeRequest } from "./randomizerangerequest";
import { RefreshDataSourceRequest } from "./refreshdatasourcerequest";
import { RepeatCellRequest } from "./repeatcellrequest";
import { SetBasicFilterRequest } from "./setbasicfilterrequest";
import { SetDataValidationRequest } from "./setdatavalidationrequest";
import { SortRangeRequest } from "./sortrangerequest";
import { TextToColumnsRequest } from "./texttocolumnsrequest";
import { TrimWhitespaceRequest } from "./trimwhitespacerequest";
import { UnmergeCellsRequest } from "./unmergecellsrequest";
import { UpdateBandingRequest } from "./updatebandingrequest";
import { UpdateBordersRequest } from "./updatebordersrequest";
import { UpdateCellsRequest } from "./updatecellsrequest";
import { UpdateChartSpecRequest } from "./updatechartspecrequest";
import { UpdateConditionalFormatRuleRequest } from "./updateconditionalformatrulerequest";
import { UpdateDataSourceRequest } from "./updatedatasourcerequest";
import { UpdateDeveloperMetadataRequest } from "./updatedevelopermetadatarequest";
import { UpdateDimensionGroupRequest } from "./updatedimensiongrouprequest";
import { UpdateDimensionPropertiesRequest } from "./updatedimensionpropertiesrequest";
import { UpdateEmbeddedObjectBorderRequest } from "./updateembeddedobjectborderrequest";
import { UpdateEmbeddedObjectPositionRequest } from "./updateembeddedobjectpositionrequest";
import { UpdateFilterViewRequest } from "./updatefilterviewrequest";
import { UpdateNamedRangeRequest } from "./updatenamedrangerequest";
import { UpdateProtectedRangeRequest } from "./updateprotectedrangerequest";
import { UpdateSheetPropertiesRequest } from "./updatesheetpropertiesrequest";
import { UpdateSlicerSpecRequest } from "./updateslicerspecrequest";
import { UpdateSpreadsheetPropertiesRequest } from "./updatespreadsheetpropertiesrequest";
/**
 * A single kind of update to apply to a spreadsheet.
 */
export declare class Request extends SpeakeasyBase {
    /**
     * Adds a new banded range to the spreadsheet.
     */
    addBanding?: AddBandingRequest;
    /**
     * Adds a chart to a sheet in the spreadsheet.
     */
    addChart?: AddChartRequest;
    /**
     * Adds a new conditional format rule at the given index. All subsequent rules' indexes are incremented.
     */
    addConditionalFormatRule?: AddConditionalFormatRuleRequest;
    /**
     * Adds a data source. After the data source is added successfully, an associated DATA_SOURCE sheet is created and an execution is triggered to refresh the sheet to read data from the data source. The request requires an additional `bigquery.readonly` OAuth scope.
     */
    addDataSource?: AddDataSourceRequest;
    /**
     * Creates a group over the specified range. If the requested range is a superset of the range of an existing group G, then the depth of G is incremented and this new group G' has the depth of that group. For example, a group [C:D, depth 1] + [B:E] results in groups [B:E, depth 1] and [C:D, depth 2]. If the requested range is a subset of the range of an existing group G, then the depth of the new group G' becomes one greater than the depth of G. For example, a group [B:E, depth 1] + [C:D] results in groups [B:E, depth 1] and [C:D, depth 2]. If the requested range starts before and ends within, or starts within and ends after, the range of an existing group G, then the range of the existing group G becomes the union of the ranges, and the new group G' has depth one greater than the depth of G and range as the intersection of the ranges. For example, a group [B:D, depth 1] + [C:E] results in groups [B:E, depth 1] and [C:D, depth 2].
     */
    addDimensionGroup?: AddDimensionGroupRequest;
    /**
     * Adds a filter view.
     */
    addFilterView?: AddFilterViewRequest;
    /**
     * Adds a named range to the spreadsheet.
     */
    addNamedRange?: AddNamedRangeRequest;
    /**
     * Adds a new protected range.
     */
    addProtectedRange?: AddProtectedRangeRequest;
    /**
     * Adds a new sheet. When a sheet is added at a given index, all subsequent sheets' indexes are incremented. To add an object sheet, use AddChartRequest instead and specify EmbeddedObjectPosition.sheetId or EmbeddedObjectPosition.newSheet.
     */
    addSheet?: AddSheetRequest;
    /**
     * Adds a slicer to a sheet in the spreadsheet.
     */
    addSlicer?: AddSlicerRequest;
    /**
     * Adds new cells after the last row with data in a sheet, inserting new rows into the sheet if necessary.
     */
    appendCells?: AppendCellsRequest;
    /**
     * Appends rows or columns to the end of a sheet.
     */
    appendDimension?: AppendDimensionRequest;
    /**
     * Fills in more data based on existing data.
     */
    autoFill?: AutoFillRequest;
    /**
     * Automatically resizes one or more dimensions based on the contents of the cells in that dimension.
     */
    autoResizeDimensions?: AutoResizeDimensionsRequest;
    /**
     * Clears the basic filter, if any exists on the sheet.
     */
    clearBasicFilter?: ClearBasicFilterRequest;
    /**
     * Copies data from the source to the destination.
     */
    copyPaste?: CopyPasteRequest;
    /**
     * A request to create developer metadata.
     */
    createDeveloperMetadata?: CreateDeveloperMetadataRequest;
    /**
     * Moves data from the source to the destination.
     */
    cutPaste?: CutPasteRequest;
    /**
     * Removes the banded range with the given ID from the spreadsheet.
     */
    deleteBanding?: DeleteBandingRequest;
    /**
     * Deletes a conditional format rule at the given index. All subsequent rules' indexes are decremented.
     */
    deleteConditionalFormatRule?: DeleteConditionalFormatRuleRequest;
    /**
     * Deletes a data source. The request also deletes the associated data source sheet, and unlinks all associated data source objects.
     */
    deleteDataSource?: DeleteDataSourceRequest;
    /**
     * A request to delete developer metadata.
     */
    deleteDeveloperMetadata?: DeleteDeveloperMetadataRequest;
    /**
     * Deletes the dimensions from the sheet.
     */
    deleteDimension?: DeleteDimensionRequest;
    /**
     * Deletes a group over the specified range by decrementing the depth of the dimensions in the range. For example, assume the sheet has a depth-1 group over B:E and a depth-2 group over C:D. Deleting a group over D:E leaves the sheet with a depth-1 group over B:D and a depth-2 group over C:C.
     */
    deleteDimensionGroup?: DeleteDimensionGroupRequest;
    /**
     * Removes rows within this range that contain values in the specified columns that are duplicates of values in any previous row. Rows with identical values but different letter cases, formatting, or formulas are considered to be duplicates. This request also removes duplicate rows hidden from view (for example, due to a filter). When removing duplicates, the first instance of each duplicate row scanning from the top downwards is kept in the resulting range. Content outside of the specified range isn't removed, and rows considered duplicates do not have to be adjacent to each other in the range.
     */
    deleteDuplicates?: DeleteDuplicatesRequest;
    /**
     * Deletes the embedded object with the given ID.
     */
    deleteEmbeddedObject?: DeleteEmbeddedObjectRequest;
    /**
     * Deletes a particular filter view.
     */
    deleteFilterView?: DeleteFilterViewRequest;
    /**
     * Removes the named range with the given ID from the spreadsheet.
     */
    deleteNamedRange?: DeleteNamedRangeRequest;
    /**
     * Deletes the protected range with the given ID.
     */
    deleteProtectedRange?: DeleteProtectedRangeRequest;
    /**
     * Deletes a range of cells, shifting other cells into the deleted area.
     */
    deleteRange?: DeleteRangeRequest;
    /**
     * Deletes the requested sheet.
     */
    deleteSheet?: DeleteSheetRequest;
    /**
     * Duplicates a particular filter view.
     */
    duplicateFilterView?: DuplicateFilterViewRequest;
    /**
     * Duplicates the contents of a sheet.
     */
    duplicateSheet?: DuplicateSheetRequest;
    /**
     * Finds and replaces data in cells over a range, sheet, or all sheets.
     */
    findReplace?: FindReplaceRequest;
    /**
     * Inserts rows or columns in a sheet at a particular index.
     */
    insertDimension?: InsertDimensionRequest;
    /**
     * Inserts cells into a range, shifting the existing cells over or down.
     */
    insertRange?: InsertRangeRequest;
    /**
     * Merges all cells in the range.
     */
    mergeCells?: MergeCellsRequest;
    /**
     * Moves one or more rows or columns.
     */
    moveDimension?: MoveDimensionRequest;
    /**
     * Inserts data into the spreadsheet starting at the specified coordinate.
     */
    pasteData?: PasteDataRequest;
    /**
     * Randomizes the order of the rows in a range.
     */
    randomizeRange?: RandomizeRangeRequest;
    /**
     * Refreshes one or multiple data source objects in the spreadsheet by the specified references. The request requires an additional `bigquery.readonly` OAuth scope. If there are multiple refresh requests referencing the same data source objects in one batch, only the last refresh request is processed, and all those requests will have the same response accordingly.
     */
    refreshDataSource?: RefreshDataSourceRequest;
    /**
     * Updates all cells in the range to the values in the given Cell object. Only the fields listed in the fields field are updated; others are unchanged. If writing a cell with a formula, the formula's ranges will automatically increment for each field in the range. For example, if writing a cell with formula `=A1` into range B2:C4, B2 would be `=A1`, B3 would be `=A2`, B4 would be `=A3`, C2 would be `=B1`, C3 would be `=B2`, C4 would be `=B3`. To keep the formula's ranges static, use the `$` indicator. For example, use the formula `=$A$1` to prevent both the row and the column from incrementing.
     */
    repeatCell?: RepeatCellRequest;
    /**
     * Sets the basic filter associated with a sheet.
     */
    setBasicFilter?: SetBasicFilterRequest;
    /**
     * Sets a data validation rule to every cell in the range. To clear validation in a range, call this with no rule specified.
     */
    setDataValidation?: SetDataValidationRequest;
    /**
     * Sorts data in rows based on a sort order per column.
     */
    sortRange?: SortRangeRequest;
    /**
     * Splits a column of text into multiple columns, based on a delimiter in each cell.
     */
    textToColumns?: TextToColumnsRequest;
    /**
     * Trims the whitespace (such as spaces, tabs, or new lines) in every cell in the specified range. This request removes all whitespace from the start and end of each cell's text, and reduces any subsequence of remaining whitespace characters to a single space. If the resulting trimmed text starts with a '+' or '=' character, the text remains as a string value and isn't interpreted as a formula.
     */
    trimWhitespace?: TrimWhitespaceRequest;
    /**
     * Unmerges cells in the given range.
     */
    unmergeCells?: UnmergeCellsRequest;
    /**
     * Updates properties of the supplied banded range.
     */
    updateBanding?: UpdateBandingRequest;
    /**
     * Updates the borders of a range. If a field is not set in the request, that means the border remains as-is. For example, with two subsequent UpdateBordersRequest: 1. range: A1:A5 `{ top: RED, bottom: WHITE }` 2. range: A1:A5 `{ left: BLUE }` That would result in A1:A5 having a borders of `{ top: RED, bottom: WHITE, left: BLUE }`. If you want to clear a border, explicitly set the style to NONE.
     */
    updateBorders?: UpdateBordersRequest;
    /**
     * Updates all cells in a range with new data.
     */
    updateCells?: UpdateCellsRequest;
    /**
     * Updates a chart's specifications. (This does not move or resize a chart. To move or resize a chart, use UpdateEmbeddedObjectPositionRequest.)
     */
    updateChartSpec?: UpdateChartSpecRequest;
    /**
     * Updates a conditional format rule at the given index, or moves a conditional format rule to another index.
     */
    updateConditionalFormatRule?: UpdateConditionalFormatRuleRequest;
    /**
     * Updates a data source. After the data source is updated successfully, an execution is triggered to refresh the associated DATA_SOURCE sheet to read data from the updated data source. The request requires an additional `bigquery.readonly` OAuth scope.
     */
    updateDataSource?: UpdateDataSourceRequest;
    /**
     * A request to update properties of developer metadata. Updates the properties of the developer metadata selected by the filters to the values provided in the DeveloperMetadata resource. Callers must specify the properties they wish to update in the fields parameter, as well as specify at least one DataFilter matching the metadata they wish to update.
     */
    updateDeveloperMetadata?: UpdateDeveloperMetadataRequest;
    /**
     * Updates the state of the specified group.
     */
    updateDimensionGroup?: UpdateDimensionGroupRequest;
    /**
     * Updates properties of dimensions within the specified range.
     */
    updateDimensionProperties?: UpdateDimensionPropertiesRequest;
    /**
     * Updates an embedded object's border property.
     */
    updateEmbeddedObjectBorder?: UpdateEmbeddedObjectBorderRequest;
    /**
     * Update an embedded object's position (such as a moving or resizing a chart or image).
     */
    updateEmbeddedObjectPosition?: UpdateEmbeddedObjectPositionRequest;
    /**
     * Updates properties of the filter view.
     */
    updateFilterView?: UpdateFilterViewRequest;
    /**
     * Updates properties of the named range with the specified namedRangeId.
     */
    updateNamedRange?: UpdateNamedRangeRequest;
    /**
     * Updates an existing protected range with the specified protectedRangeId.
     */
    updateProtectedRange?: UpdateProtectedRangeRequest;
    /**
     * Updates properties of the sheet with the specified sheetId.
     */
    updateSheetProperties?: UpdateSheetPropertiesRequest;
    /**
     * Updates a slicer's specifications. (This does not move or resize a slicer. To move or resize a slicer use UpdateEmbeddedObjectPositionRequest.
     */
    updateSlicerSpec?: UpdateSlicerSpecRequest;
    /**
     * Updates properties of a spreadsheet.
     */
    updateSpreadsheetProperties?: UpdateSpreadsheetPropertiesRequest;
}
