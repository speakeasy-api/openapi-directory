import { SpeakeasyBase } from "../../../internal/utils";
import { AddBandingResponse } from "./addbandingresponse";
import { AddChartResponse } from "./addchartresponse";
import { AddDataSourceResponse } from "./adddatasourceresponse";
import { AddDimensionGroupResponse } from "./adddimensiongroupresponse";
import { AddFilterViewResponse } from "./addfilterviewresponse";
import { AddNamedRangeResponse } from "./addnamedrangeresponse";
import { AddProtectedRangeResponse } from "./addprotectedrangeresponse";
import { AddSheetResponse } from "./addsheetresponse";
import { AddSlicerResponse } from "./addslicerresponse";
import { CreateDeveloperMetadataResponse } from "./createdevelopermetadataresponse";
import { DeleteConditionalFormatRuleResponse } from "./deleteconditionalformatruleresponse";
import { DeleteDeveloperMetadataResponse } from "./deletedevelopermetadataresponse";
import { DeleteDimensionGroupResponse } from "./deletedimensiongroupresponse";
import { DeleteDuplicatesResponse } from "./deleteduplicatesresponse";
import { DuplicateFilterViewResponse } from "./duplicatefilterviewresponse";
import { DuplicateSheetResponse } from "./duplicatesheetresponse";
import { FindReplaceResponse } from "./findreplaceresponse";
import { RefreshDataSourceResponse } from "./refreshdatasourceresponse";
import { TrimWhitespaceResponse } from "./trimwhitespaceresponse";
import { UpdateConditionalFormatRuleResponse } from "./updateconditionalformatruleresponse";
import { UpdateDataSourceResponse } from "./updatedatasourceresponse";
import { UpdateDeveloperMetadataResponse } from "./updatedevelopermetadataresponse";
import { UpdateEmbeddedObjectPositionResponse } from "./updateembeddedobjectpositionresponse";
/**
 * A single response from an update.
 */
export declare class Response extends SpeakeasyBase {
    /**
     * The result of adding a banded range.
     */
    addBanding?: AddBandingResponse;
    /**
     * The result of adding a chart to a spreadsheet.
     */
    addChart?: AddChartResponse;
    /**
     * The result of adding a data source.
     */
    addDataSource?: AddDataSourceResponse;
    /**
     * The result of adding a group.
     */
    addDimensionGroup?: AddDimensionGroupResponse;
    /**
     * The result of adding a filter view.
     */
    addFilterView?: AddFilterViewResponse;
    /**
     * The result of adding a named range.
     */
    addNamedRange?: AddNamedRangeResponse;
    /**
     * The result of adding a new protected range.
     */
    addProtectedRange?: AddProtectedRangeResponse;
    /**
     * The result of adding a sheet.
     */
    addSheet?: AddSheetResponse;
    /**
     * The result of adding a slicer to a spreadsheet.
     */
    addSlicer?: AddSlicerResponse;
    /**
     * The response from creating developer metadata.
     */
    createDeveloperMetadata?: CreateDeveloperMetadataResponse;
    /**
     * The result of deleting a conditional format rule.
     */
    deleteConditionalFormatRule?: DeleteConditionalFormatRuleResponse;
    /**
     * The response from deleting developer metadata.
     */
    deleteDeveloperMetadata?: DeleteDeveloperMetadataResponse;
    /**
     * The result of deleting a group.
     */
    deleteDimensionGroup?: DeleteDimensionGroupResponse;
    /**
     * The result of removing duplicates in a range.
     */
    deleteDuplicates?: DeleteDuplicatesResponse;
    /**
     * The result of a filter view being duplicated.
     */
    duplicateFilterView?: DuplicateFilterViewResponse;
    /**
     * The result of duplicating a sheet.
     */
    duplicateSheet?: DuplicateSheetResponse;
    /**
     * The result of the find/replace.
     */
    findReplace?: FindReplaceResponse;
    /**
     * The response from refreshing one or multiple data source objects.
     */
    refreshDataSource?: RefreshDataSourceResponse;
    /**
     * The result of trimming whitespace in cells.
     */
    trimWhitespace?: TrimWhitespaceResponse;
    /**
     * The result of updating a conditional format rule.
     */
    updateConditionalFormatRule?: UpdateConditionalFormatRuleResponse;
    /**
     * The response from updating data source.
     */
    updateDataSource?: UpdateDataSourceResponse;
    /**
     * The response from updating developer metadata.
     */
    updateDeveloperMetadata?: UpdateDeveloperMetadataResponse;
    /**
     * The result of updating an embedded object's position.
     */
    updateEmbeddedObjectPosition?: UpdateEmbeddedObjectPositionResponse;
}
