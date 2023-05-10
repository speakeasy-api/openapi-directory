# spreadsheets

### Available Operations

* [sheetsSpreadsheetsBatchUpdate](#sheetsspreadsheetsbatchupdate) - Applies one or more updates to the spreadsheet. Each request is validated before being applied. If any request is not valid then the entire request will fail and nothing will be applied. Some requests have replies to give you some information about how they are applied. The replies will mirror the requests. For example, if you applied 4 updates and the 3rd one had a reply, then the response will have 2 empty replies, the actual reply, and another empty reply, in that order. Due to the collaborative nature of spreadsheets, it is not guaranteed that the spreadsheet will reflect exactly your changes after this completes, however it is guaranteed that the updates in the request will be applied together atomically. Your changes may be altered with respect to collaborator changes. If there are no collaborators, the spreadsheet should reflect your changes.
* [sheetsSpreadsheetsCreate](#sheetsspreadsheetscreate) - Creates a spreadsheet, returning the newly created spreadsheet.
* [sheetsSpreadsheetsDeveloperMetadataGet](#sheetsspreadsheetsdevelopermetadataget) - Returns the developer metadata with the specified ID. The caller must specify the spreadsheet ID and the developer metadata's unique metadataId.
* [sheetsSpreadsheetsDeveloperMetadataSearch](#sheetsspreadsheetsdevelopermetadatasearch) - Returns all developer metadata matching the specified DataFilter. If the provided DataFilter represents a DeveloperMetadataLookup object, this will return all DeveloperMetadata entries selected by it. If the DataFilter represents a location in a spreadsheet, this will return all developer metadata associated with locations intersecting that region.
* [sheetsSpreadsheetsGet](#sheetsspreadsheetsget) - Returns the spreadsheet at the given ID. The caller must specify the spreadsheet ID. By default, data within grids is not returned. You can include grid data in one of 2 ways: * Specify a [field mask](https://developers.google.com/sheets/api/guides/field-masks) listing your desired fields using the `fields` URL parameter in HTTP * Set the includeGridData URL parameter to true. If a field mask is set, the `includeGridData` parameter is ignored For large spreadsheets, as a best practice, retrieve only the specific spreadsheet fields that you want. To retrieve only subsets of spreadsheet data, use the ranges URL parameter. Ranges are specified using [A1 notation](/sheets/api/guides/concepts#cell). You can define a single cell (for example, `A1`) or multiple cells (for example, `A1:D5`). You can also get cells from other sheets within the same spreadsheet (for example, `Sheet2!A1:C4`) or retrieve multiple ranges at once (for example, `?ranges=A1:D5&ranges=Sheet2!A1:C4`). Limiting the range returns only the portions of the spreadsheet that intersect the requested ranges.
* [sheetsSpreadsheetsGetByDataFilter](#sheetsspreadsheetsgetbydatafilter) - Returns the spreadsheet at the given ID. The caller must specify the spreadsheet ID. This method differs from GetSpreadsheet in that it allows selecting which subsets of spreadsheet data to return by specifying a dataFilters parameter. Multiple DataFilters can be specified. Specifying one or more data filters returns the portions of the spreadsheet that intersect ranges matched by any of the filters. By default, data within grids is not returned. You can include grid data one of 2 ways: * Specify a [field mask](https://developers.google.com/sheets/api/guides/field-masks) listing your desired fields using the `fields` URL parameter in HTTP * Set the includeGridData parameter to true. If a field mask is set, the `includeGridData` parameter is ignored For large spreadsheets, as a best practice, retrieve only the specific spreadsheet fields that you want.
* [sheetsSpreadsheetsSheetsCopyTo](#sheetsspreadsheetssheetscopyto) - Copies a single sheet from a spreadsheet to another spreadsheet. Returns the properties of the newly created sheet.
* [sheetsSpreadsheetsValuesAppend](#sheetsspreadsheetsvaluesappend) - Appends values to a spreadsheet. The input range is used to search for existing data and find a "table" within that range. Values will be appended to the next row of the table, starting with the first column of the table. See the [guide](/sheets/api/guides/values#appending_values) and [sample code](/sheets/api/samples/writing#append_values) for specific details of how tables are detected and data is appended. The caller must specify the spreadsheet ID, range, and a valueInputOption. The `valueInputOption` only controls how the input data will be added to the sheet (column-wise or row-wise), it does not influence what cell the data starts being written to.
* [sheetsSpreadsheetsValuesBatchClear](#sheetsspreadsheetsvaluesbatchclear) - Clears one or more ranges of values from a spreadsheet. The caller must specify the spreadsheet ID and one or more ranges. Only values are cleared -- all other properties of the cell (such as formatting and data validation) are kept.
* [sheetsSpreadsheetsValuesBatchClearByDataFilter](#sheetsspreadsheetsvaluesbatchclearbydatafilter) - Clears one or more ranges of values from a spreadsheet. The caller must specify the spreadsheet ID and one or more DataFilters. Ranges matching any of the specified data filters will be cleared. Only values are cleared -- all other properties of the cell (such as formatting, data validation, etc..) are kept.
* [sheetsSpreadsheetsValuesBatchGet](#sheetsspreadsheetsvaluesbatchget) - Returns one or more ranges of values from a spreadsheet. The caller must specify the spreadsheet ID and one or more ranges.
* [sheetsSpreadsheetsValuesBatchGetByDataFilter](#sheetsspreadsheetsvaluesbatchgetbydatafilter) - Returns one or more ranges of values that match the specified data filters. The caller must specify the spreadsheet ID and one or more DataFilters. Ranges that match any of the data filters in the request will be returned.
* [sheetsSpreadsheetsValuesBatchUpdate](#sheetsspreadsheetsvaluesbatchupdate) - Sets values in one or more ranges of a spreadsheet. The caller must specify the spreadsheet ID, a valueInputOption, and one or more ValueRanges.
* [sheetsSpreadsheetsValuesBatchUpdateByDataFilter](#sheetsspreadsheetsvaluesbatchupdatebydatafilter) - Sets values in one or more ranges of a spreadsheet. The caller must specify the spreadsheet ID, a valueInputOption, and one or more DataFilterValueRanges.
* [sheetsSpreadsheetsValuesClear](#sheetsspreadsheetsvaluesclear) - Clears values from a spreadsheet. The caller must specify the spreadsheet ID and range. Only values are cleared -- all other properties of the cell (such as formatting, data validation, etc..) are kept.
* [sheetsSpreadsheetsValuesGet](#sheetsspreadsheetsvaluesget) - Returns a range of values from a spreadsheet. The caller must specify the spreadsheet ID and a range.
* [sheetsSpreadsheetsValuesUpdate](#sheetsspreadsheetsvaluesupdate) - Sets values in a range of a spreadsheet. The caller must specify the spreadsheet ID, range, and a valueInputOption.

## sheetsSpreadsheetsBatchUpdate

Applies one or more updates to the spreadsheet. Each request is validated before being applied. If any request is not valid then the entire request will fail and nothing will be applied. Some requests have replies to give you some information about how they are applied. The replies will mirror the requests. For example, if you applied 4 updates and the 3rd one had a reply, then the response will have 2 empty replies, the actual reply, and another empty reply, in that order. Due to the collaborative nature of spreadsheets, it is not guaranteed that the spreadsheet will reflect exactly your changes after this completes, however it is guaranteed that the updates in the request will be applied together atomically. Your changes may be altered with respect to collaborator changes. If there are no collaborators, the spreadsheet should reflect your changes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsBatchUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BatchUpdateSpreadsheetRequest;
use \OpenAPI\OpenAPI\Models\Shared\Request;
use \OpenAPI\OpenAPI\Models\Shared\AddBandingRequest;
use \OpenAPI\OpenAPI\Models\Shared\BandedRange;
use \OpenAPI\OpenAPI\Models\Shared\BandingProperties;
use \OpenAPI\OpenAPI\Models\Shared\Color;
use \OpenAPI\OpenAPI\Models\Shared\ColorStyle;
use \OpenAPI\OpenAPI\Models\Shared\ColorStyleThemeColorEnum;
use \OpenAPI\OpenAPI\Models\Shared\GridRange;
use \OpenAPI\OpenAPI\Models\Shared\AddChartRequest;
use \OpenAPI\OpenAPI\Models\Shared\EmbeddedChart;
use \OpenAPI\OpenAPI\Models\Shared\EmbeddedObjectBorder;
use \OpenAPI\OpenAPI\Models\Shared\EmbeddedObjectPosition;
use \OpenAPI\OpenAPI\Models\Shared\OverlayPosition;
use \OpenAPI\OpenAPI\Models\Shared\GridCoordinate;
use \OpenAPI\OpenAPI\Models\Shared\ChartSpec;
use \OpenAPI\OpenAPI\Models\Shared\BasicChartSpec;
use \OpenAPI\OpenAPI\Models\Shared\BasicChartAxis;
use \OpenAPI\OpenAPI\Models\Shared\TextFormat;
use \OpenAPI\OpenAPI\Models\Shared\Link;
use \OpenAPI\OpenAPI\Models\Shared\BasicChartAxisPositionEnum;
use \OpenAPI\OpenAPI\Models\Shared\TextPosition;
use \OpenAPI\OpenAPI\Models\Shared\TextPositionHorizontalAlignmentEnum;
use \OpenAPI\OpenAPI\Models\Shared\ChartAxisViewWindowOptions;
use \OpenAPI\OpenAPI\Models\Shared\ChartAxisViewWindowOptionsViewWindowModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BasicChartSpecChartTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BasicChartSpecCompareModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BasicChartDomain;
use \OpenAPI\OpenAPI\Models\Shared\ChartData;
use \OpenAPI\OpenAPI\Models\Shared\ChartDataAggregateTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DataSourceColumnReference;
use \OpenAPI\OpenAPI\Models\Shared\ChartGroupRule;
use \OpenAPI\OpenAPI\Models\Shared\ChartDateTimeRule;
use \OpenAPI\OpenAPI\Models\Shared\ChartDateTimeRuleTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ChartHistogramRule;
use \OpenAPI\OpenAPI\Models\Shared\ChartSourceRange;
use \OpenAPI\OpenAPI\Models\Shared\BasicChartSpecLegendPositionEnum;
use \OpenAPI\OpenAPI\Models\Shared\BasicChartSeries;
use \OpenAPI\OpenAPI\Models\Shared\DataLabel;
use \OpenAPI\OpenAPI\Models\Shared\DataLabelPlacementEnum;
use \OpenAPI\OpenAPI\Models\Shared\DataLabelTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LineStyle;
use \OpenAPI\OpenAPI\Models\Shared\LineStyleTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PointStyle;
use \OpenAPI\OpenAPI\Models\Shared\PointStyleShapeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BasicSeriesDataPointStyleOverride;
use \OpenAPI\OpenAPI\Models\Shared\BasicChartSeriesTargetAxisEnum;
use \OpenAPI\OpenAPI\Models\Shared\BasicChartSeriesTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BasicChartSpecStackedTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BubbleChartSpec;
use \OpenAPI\OpenAPI\Models\Shared\BubbleChartSpecLegendPositionEnum;
use \OpenAPI\OpenAPI\Models\Shared\CandlestickChartSpec;
use \OpenAPI\OpenAPI\Models\Shared\CandlestickData;
use \OpenAPI\OpenAPI\Models\Shared\CandlestickSeries;
use \OpenAPI\OpenAPI\Models\Shared\CandlestickDomain;
use \OpenAPI\OpenAPI\Models\Shared\DataSourceChartProperties;
use \OpenAPI\OpenAPI\Models\Shared\DataExecutionStatus;
use \OpenAPI\OpenAPI\Models\Shared\DataExecutionStatusErrorCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DataExecutionStatusStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\FilterSpec;
use \OpenAPI\OpenAPI\Models\Shared\FilterCriteria;
use \OpenAPI\OpenAPI\Models\Shared\BooleanCondition;
use \OpenAPI\OpenAPI\Models\Shared\BooleanConditionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConditionValue;
use \OpenAPI\OpenAPI\Models\Shared\ConditionValueRelativeDateEnum;
use \OpenAPI\OpenAPI\Models\Shared\ChartSpecHiddenDimensionStrategyEnum;
use \OpenAPI\OpenAPI\Models\Shared\HistogramChartSpec;
use \OpenAPI\OpenAPI\Models\Shared\HistogramChartSpecLegendPositionEnum;
use \OpenAPI\OpenAPI\Models\Shared\HistogramSeries;
use \OpenAPI\OpenAPI\Models\Shared\OrgChartSpec;
use \OpenAPI\OpenAPI\Models\Shared\OrgChartSpecNodeSizeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PieChartSpec;
use \OpenAPI\OpenAPI\Models\Shared\PieChartSpecLegendPositionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ScorecardChartSpec;
use \OpenAPI\OpenAPI\Models\Shared\ScorecardChartSpecAggregateTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BaselineValueFormat;
use \OpenAPI\OpenAPI\Models\Shared\BaselineValueFormatComparisonTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ChartCustomNumberFormatOptions;
use \OpenAPI\OpenAPI\Models\Shared\KeyValueFormat;
use \OpenAPI\OpenAPI\Models\Shared\ScorecardChartSpecNumberFormatSourceEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortSpec;
use \OpenAPI\OpenAPI\Models\Shared\SortSpecSortOrderEnum;
use \OpenAPI\OpenAPI\Models\Shared\TreemapChartSpec;
use \OpenAPI\OpenAPI\Models\Shared\TreemapChartColorScale;
use \OpenAPI\OpenAPI\Models\Shared\WaterfallChartSpec;
use \OpenAPI\OpenAPI\Models\Shared\WaterfallChartDomain;
use \OpenAPI\OpenAPI\Models\Shared\WaterfallChartSeries;
use \OpenAPI\OpenAPI\Models\Shared\WaterfallChartCustomSubtotal;
use \OpenAPI\OpenAPI\Models\Shared\WaterfallChartColumnStyle;
use \OpenAPI\OpenAPI\Models\Shared\WaterfallChartSpecStackedTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AddConditionalFormatRuleRequest;
use \OpenAPI\OpenAPI\Models\Shared\ConditionalFormatRule;
use \OpenAPI\OpenAPI\Models\Shared\BooleanRule;
use \OpenAPI\OpenAPI\Models\Shared\CellFormat;
use \OpenAPI\OpenAPI\Models\Shared\Borders;
use \OpenAPI\OpenAPI\Models\Shared\Border;
use \OpenAPI\OpenAPI\Models\Shared\BorderStyleEnum;
use \OpenAPI\OpenAPI\Models\Shared\CellFormatHorizontalAlignmentEnum;
use \OpenAPI\OpenAPI\Models\Shared\CellFormatHyperlinkDisplayTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\NumberFormat;
use \OpenAPI\OpenAPI\Models\Shared\NumberFormatTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Padding;
use \OpenAPI\OpenAPI\Models\Shared\CellFormatTextDirectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\TextRotation;
use \OpenAPI\OpenAPI\Models\Shared\CellFormatVerticalAlignmentEnum;
use \OpenAPI\OpenAPI\Models\Shared\CellFormatWrapStrategyEnum;
use \OpenAPI\OpenAPI\Models\Shared\GradientRule;
use \OpenAPI\OpenAPI\Models\Shared\InterpolationPoint;
use \OpenAPI\OpenAPI\Models\Shared\InterpolationPointTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AddDataSourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\DataSource;
use \OpenAPI\OpenAPI\Models\Shared\DataSourceColumn;
use \OpenAPI\OpenAPI\Models\Shared\DataSourceSpec;
use \OpenAPI\OpenAPI\Models\Shared\BigQueryDataSourceSpec;
use \OpenAPI\OpenAPI\Models\Shared\BigQueryQuerySpec;
use \OpenAPI\OpenAPI\Models\Shared\BigQueryTableSpec;
use \OpenAPI\OpenAPI\Models\Shared\DataSourceParameter;
use \OpenAPI\OpenAPI\Models\Shared\AddDimensionGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\DimensionRange;
use \OpenAPI\OpenAPI\Models\Shared\DimensionRangeDimensionEnum;
use \OpenAPI\OpenAPI\Models\Shared\AddFilterViewRequest;
use \OpenAPI\OpenAPI\Models\Shared\FilterView;
use \OpenAPI\OpenAPI\Models\Shared\AddNamedRangeRequest;
use \OpenAPI\OpenAPI\Models\Shared\NamedRange;
use \OpenAPI\OpenAPI\Models\Shared\AddProtectedRangeRequest;
use \OpenAPI\OpenAPI\Models\Shared\ProtectedRange;
use \OpenAPI\OpenAPI\Models\Shared\Editors;
use \OpenAPI\OpenAPI\Models\Shared\AddSheetRequest;
use \OpenAPI\OpenAPI\Models\Shared\SheetProperties;
use \OpenAPI\OpenAPI\Models\Shared\DataSourceSheetProperties;
use \OpenAPI\OpenAPI\Models\Shared\GridProperties;
use \OpenAPI\OpenAPI\Models\Shared\SheetPropertiesSheetTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AddSlicerRequest;
use \OpenAPI\OpenAPI\Models\Shared\Slicer;
use \OpenAPI\OpenAPI\Models\Shared\SlicerSpec;
use \OpenAPI\OpenAPI\Models\Shared\SlicerSpecHorizontalAlignmentEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppendCellsRequest;
use \OpenAPI\OpenAPI\Models\Shared\RowData;
use \OpenAPI\OpenAPI\Models\Shared\CellData;
use \OpenAPI\OpenAPI\Models\Shared\DataSourceFormula;
use \OpenAPI\OpenAPI\Models\Shared\DataSourceTable;
use \OpenAPI\OpenAPI\Models\Shared\DataSourceTableColumnSelectionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DataValidationRule;
use \OpenAPI\OpenAPI\Models\Shared\ExtendedValue;
use \OpenAPI\OpenAPI\Models\Shared\ErrorValue;
use \OpenAPI\OpenAPI\Models\Shared\ErrorValueTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PivotTable;
use \OpenAPI\OpenAPI\Models\Shared\PivotGroup;
use \OpenAPI\OpenAPI\Models\Shared\PivotGroupLimit;
use \OpenAPI\OpenAPI\Models\Shared\PivotGroupRule;
use \OpenAPI\OpenAPI\Models\Shared\DateTimeRule;
use \OpenAPI\OpenAPI\Models\Shared\DateTimeRuleTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\HistogramRule;
use \OpenAPI\OpenAPI\Models\Shared\ManualRule;
use \OpenAPI\OpenAPI\Models\Shared\ManualRuleGroup;
use \OpenAPI\OpenAPI\Models\Shared\PivotGroupSortOrderEnum;
use \OpenAPI\OpenAPI\Models\Shared\PivotGroupSortValueBucket;
use \OpenAPI\OpenAPI\Models\Shared\PivotGroupValueMetadata;
use \OpenAPI\OpenAPI\Models\Shared\PivotFilterCriteria;
use \OpenAPI\OpenAPI\Models\Shared\PivotFilterSpec;
use \OpenAPI\OpenAPI\Models\Shared\PivotTableValueLayoutEnum;
use \OpenAPI\OpenAPI\Models\Shared\PivotValue;
use \OpenAPI\OpenAPI\Models\Shared\PivotValueCalculatedDisplayTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PivotValueSummarizeFunctionEnum;
use \OpenAPI\OpenAPI\Models\Shared\TextFormatRun;
use \OpenAPI\OpenAPI\Models\Shared\AppendDimensionRequest;
use \OpenAPI\OpenAPI\Models\Shared\AppendDimensionRequestDimensionEnum;
use \OpenAPI\OpenAPI\Models\Shared\AutoFillRequest;
use \OpenAPI\OpenAPI\Models\Shared\SourceAndDestination;
use \OpenAPI\OpenAPI\Models\Shared\SourceAndDestinationDimensionEnum;
use \OpenAPI\OpenAPI\Models\Shared\AutoResizeDimensionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DataSourceSheetDimensionRange;
use \OpenAPI\OpenAPI\Models\Shared\ClearBasicFilterRequest;
use \OpenAPI\OpenAPI\Models\Shared\CopyPasteRequest;
use \OpenAPI\OpenAPI\Models\Shared\CopyPasteRequestPasteOrientationEnum;
use \OpenAPI\OpenAPI\Models\Shared\CopyPasteRequestPasteTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateDeveloperMetadataRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeveloperMetadata;
use \OpenAPI\OpenAPI\Models\Shared\DeveloperMetadataLocation;
use \OpenAPI\OpenAPI\Models\Shared\DeveloperMetadataLocationLocationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeveloperMetadataVisibilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\CutPasteRequest;
use \OpenAPI\OpenAPI\Models\Shared\CutPasteRequestPasteTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeleteBandingRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteConditionalFormatRuleRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteDataSourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteDeveloperMetadataRequest;
use \OpenAPI\OpenAPI\Models\Shared\DataFilter;
use \OpenAPI\OpenAPI\Models\Shared\DeveloperMetadataLookup;
use \OpenAPI\OpenAPI\Models\Shared\DeveloperMetadataLookupLocationMatchingStrategyEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeveloperMetadataLookupLocationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeveloperMetadataLookupVisibilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeleteDimensionRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteDimensionGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteDuplicatesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteEmbeddedObjectRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteFilterViewRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteNamedRangeRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteProtectedRangeRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteRangeRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteRangeRequestShiftDimensionEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeleteSheetRequest;
use \OpenAPI\OpenAPI\Models\Shared\DuplicateFilterViewRequest;
use \OpenAPI\OpenAPI\Models\Shared\DuplicateSheetRequest;
use \OpenAPI\OpenAPI\Models\Shared\FindReplaceRequest;
use \OpenAPI\OpenAPI\Models\Shared\InsertDimensionRequest;
use \OpenAPI\OpenAPI\Models\Shared\InsertRangeRequest;
use \OpenAPI\OpenAPI\Models\Shared\InsertRangeRequestShiftDimensionEnum;
use \OpenAPI\OpenAPI\Models\Shared\MergeCellsRequest;
use \OpenAPI\OpenAPI\Models\Shared\MergeCellsRequestMergeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\MoveDimensionRequest;
use \OpenAPI\OpenAPI\Models\Shared\PasteDataRequest;
use \OpenAPI\OpenAPI\Models\Shared\PasteDataRequestTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RandomizeRangeRequest;
use \OpenAPI\OpenAPI\Models\Shared\RefreshDataSourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\DataSourceObjectReferences;
use \OpenAPI\OpenAPI\Models\Shared\DataSourceObjectReference;
use \OpenAPI\OpenAPI\Models\Shared\RepeatCellRequest;
use \OpenAPI\OpenAPI\Models\Shared\SetBasicFilterRequest;
use \OpenAPI\OpenAPI\Models\Shared\BasicFilter;
use \OpenAPI\OpenAPI\Models\Shared\SetDataValidationRequest;
use \OpenAPI\OpenAPI\Models\Shared\SortRangeRequest;
use \OpenAPI\OpenAPI\Models\Shared\TextToColumnsRequest;
use \OpenAPI\OpenAPI\Models\Shared\TextToColumnsRequestDelimiterTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TrimWhitespaceRequest;
use \OpenAPI\OpenAPI\Models\Shared\UnmergeCellsRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateBandingRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateBordersRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateCellsRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateChartSpecRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateConditionalFormatRuleRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateDataSourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateDeveloperMetadataRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateDimensionGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\DimensionGroup;
use \OpenAPI\OpenAPI\Models\Shared\UpdateDimensionPropertiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DimensionProperties;
use \OpenAPI\OpenAPI\Models\Shared\UpdateEmbeddedObjectBorderRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateEmbeddedObjectPositionRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateFilterViewRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateNamedRangeRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateProtectedRangeRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateSheetPropertiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateSlicerSpecRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateSpreadsheetPropertiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\SpreadsheetProperties;
use \OpenAPI\OpenAPI\Models\Shared\SpreadsheetPropertiesAutoRecalcEnum;
use \OpenAPI\OpenAPI\Models\Shared\IterativeCalculationSettings;
use \OpenAPI\OpenAPI\Models\Shared\SpreadsheetTheme;
use \OpenAPI\OpenAPI\Models\Shared\ThemeColorPair;
use \OpenAPI\OpenAPI\Models\Shared\ThemeColorPairColorTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsBatchUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsBatchUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsBatchUpdateSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsBatchUpdateSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SheetsSpreadsheetsBatchUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->batchUpdateSpreadsheetRequest = new BatchUpdateSpreadsheetRequest();
    $request->batchUpdateSpreadsheetRequest->includeSpreadsheetInResponse = false;
    $request->batchUpdateSpreadsheetRequest->requests = [
        new Request(),
        new Request(),
    ];
    $request->batchUpdateSpreadsheetRequest->responseIncludeGridData = false;
    $request->batchUpdateSpreadsheetRequest->responseRanges = [
        'molestiae',
        'minus',
    ];
    $request->accessToken = 'placeat';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'iusto';
    $request->fields = 'excepturi';
    $request->key = 'nisi';
    $request->oauthToken = 'recusandae';
    $request->prettyPrint = false;
    $request->quotaUser = 'temporibus';
    $request->spreadsheetId = 'ab';
    $request->uploadType = 'quis';
    $request->uploadProtocol = 'veritatis';

    $requestSecurity = new SheetsSpreadsheetsBatchUpdateSecurity();
    $requestSecurity->option1 = new SheetsSpreadsheetsBatchUpdateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->spreadsheets->sheetsSpreadsheetsBatchUpdate($request, $requestSecurity);

    if ($response->batchUpdateSpreadsheetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sheetsSpreadsheetsCreate

Creates a spreadsheet, returning the newly created spreadsheet.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SpreadsheetInput;
use \OpenAPI\OpenAPI\Models\Shared\DataSource;
use \OpenAPI\OpenAPI\Models\Shared\DataSourceColumn;
use \OpenAPI\OpenAPI\Models\Shared\DataSourceColumnReference;
use \OpenAPI\OpenAPI\Models\Shared\DataSourceSpec;
use \OpenAPI\OpenAPI\Models\Shared\BigQueryDataSourceSpec;
use \OpenAPI\OpenAPI\Models\Shared\BigQueryQuerySpec;
use \OpenAPI\OpenAPI\Models\Shared\BigQueryTableSpec;
use \OpenAPI\OpenAPI\Models\Shared\DataSourceParameter;
use \OpenAPI\OpenAPI\Models\Shared\GridRange;
use \OpenAPI\OpenAPI\Models\Shared\DeveloperMetadata;
use \OpenAPI\OpenAPI\Models\Shared\DeveloperMetadataLocation;
use \OpenAPI\OpenAPI\Models\Shared\DimensionRange;
use \OpenAPI\OpenAPI\Models\Shared\DimensionRangeDimensionEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeveloperMetadataLocationLocationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeveloperMetadataVisibilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\NamedRange;
use \OpenAPI\OpenAPI\Models\Shared\SpreadsheetProperties;
use \OpenAPI\OpenAPI\Models\Shared\SpreadsheetPropertiesAutoRecalcEnum;
use \OpenAPI\OpenAPI\Models\Shared\CellFormat;
use \OpenAPI\OpenAPI\Models\Shared\Color;
use \OpenAPI\OpenAPI\Models\Shared\ColorStyle;
use \OpenAPI\OpenAPI\Models\Shared\ColorStyleThemeColorEnum;
use \OpenAPI\OpenAPI\Models\Shared\Borders;
use \OpenAPI\OpenAPI\Models\Shared\Border;
use \OpenAPI\OpenAPI\Models\Shared\BorderStyleEnum;
use \OpenAPI\OpenAPI\Models\Shared\CellFormatHorizontalAlignmentEnum;
use \OpenAPI\OpenAPI\Models\Shared\CellFormatHyperlinkDisplayTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\NumberFormat;
use \OpenAPI\OpenAPI\Models\Shared\NumberFormatTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Padding;
use \OpenAPI\OpenAPI\Models\Shared\CellFormatTextDirectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\TextFormat;
use \OpenAPI\OpenAPI\Models\Shared\Link;
use \OpenAPI\OpenAPI\Models\Shared\TextRotation;
use \OpenAPI\OpenAPI\Models\Shared\CellFormatVerticalAlignmentEnum;
use \OpenAPI\OpenAPI\Models\Shared\CellFormatWrapStrategyEnum;
use \OpenAPI\OpenAPI\Models\Shared\IterativeCalculationSettings;
use \OpenAPI\OpenAPI\Models\Shared\SpreadsheetTheme;
use \OpenAPI\OpenAPI\Models\Shared\ThemeColorPair;
use \OpenAPI\OpenAPI\Models\Shared\ThemeColorPairColorTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Sheet;
use \OpenAPI\OpenAPI\Models\Shared\BandedRange;
use \OpenAPI\OpenAPI\Models\Shared\BandingProperties;
use \OpenAPI\OpenAPI\Models\Shared\BasicFilter;
use \OpenAPI\OpenAPI\Models\Shared\FilterCriteria;
use \OpenAPI\OpenAPI\Models\Shared\BooleanCondition;
use \OpenAPI\OpenAPI\Models\Shared\BooleanConditionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConditionValue;
use \OpenAPI\OpenAPI\Models\Shared\ConditionValueRelativeDateEnum;
use \OpenAPI\OpenAPI\Models\Shared\FilterSpec;
use \OpenAPI\OpenAPI\Models\Shared\SortSpec;
use \OpenAPI\OpenAPI\Models\Shared\SortSpecSortOrderEnum;
use \OpenAPI\OpenAPI\Models\Shared\EmbeddedChart;
use \OpenAPI\OpenAPI\Models\Shared\EmbeddedObjectBorder;
use \OpenAPI\OpenAPI\Models\Shared\EmbeddedObjectPosition;
use \OpenAPI\OpenAPI\Models\Shared\OverlayPosition;
use \OpenAPI\OpenAPI\Models\Shared\GridCoordinate;
use \OpenAPI\OpenAPI\Models\Shared\ChartSpec;
use \OpenAPI\OpenAPI\Models\Shared\BasicChartSpec;
use \OpenAPI\OpenAPI\Models\Shared\BasicChartAxis;
use \OpenAPI\OpenAPI\Models\Shared\BasicChartAxisPositionEnum;
use \OpenAPI\OpenAPI\Models\Shared\TextPosition;
use \OpenAPI\OpenAPI\Models\Shared\TextPositionHorizontalAlignmentEnum;
use \OpenAPI\OpenAPI\Models\Shared\ChartAxisViewWindowOptions;
use \OpenAPI\OpenAPI\Models\Shared\ChartAxisViewWindowOptionsViewWindowModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BasicChartSpecChartTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BasicChartSpecCompareModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BasicChartDomain;
use \OpenAPI\OpenAPI\Models\Shared\ChartData;
use \OpenAPI\OpenAPI\Models\Shared\ChartDataAggregateTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ChartGroupRule;
use \OpenAPI\OpenAPI\Models\Shared\ChartDateTimeRule;
use \OpenAPI\OpenAPI\Models\Shared\ChartDateTimeRuleTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ChartHistogramRule;
use \OpenAPI\OpenAPI\Models\Shared\ChartSourceRange;
use \OpenAPI\OpenAPI\Models\Shared\BasicChartSpecLegendPositionEnum;
use \OpenAPI\OpenAPI\Models\Shared\BasicChartSeries;
use \OpenAPI\OpenAPI\Models\Shared\DataLabel;
use \OpenAPI\OpenAPI\Models\Shared\DataLabelPlacementEnum;
use \OpenAPI\OpenAPI\Models\Shared\DataLabelTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LineStyle;
use \OpenAPI\OpenAPI\Models\Shared\LineStyleTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PointStyle;
use \OpenAPI\OpenAPI\Models\Shared\PointStyleShapeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BasicSeriesDataPointStyleOverride;
use \OpenAPI\OpenAPI\Models\Shared\BasicChartSeriesTargetAxisEnum;
use \OpenAPI\OpenAPI\Models\Shared\BasicChartSeriesTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BasicChartSpecStackedTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BubbleChartSpec;
use \OpenAPI\OpenAPI\Models\Shared\BubbleChartSpecLegendPositionEnum;
use \OpenAPI\OpenAPI\Models\Shared\CandlestickChartSpec;
use \OpenAPI\OpenAPI\Models\Shared\CandlestickData;
use \OpenAPI\OpenAPI\Models\Shared\CandlestickSeries;
use \OpenAPI\OpenAPI\Models\Shared\CandlestickDomain;
use \OpenAPI\OpenAPI\Models\Shared\DataSourceChartProperties;
use \OpenAPI\OpenAPI\Models\Shared\DataExecutionStatus;
use \OpenAPI\OpenAPI\Models\Shared\DataExecutionStatusErrorCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DataExecutionStatusStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\ChartSpecHiddenDimensionStrategyEnum;
use \OpenAPI\OpenAPI\Models\Shared\HistogramChartSpec;
use \OpenAPI\OpenAPI\Models\Shared\HistogramChartSpecLegendPositionEnum;
use \OpenAPI\OpenAPI\Models\Shared\HistogramSeries;
use \OpenAPI\OpenAPI\Models\Shared\OrgChartSpec;
use \OpenAPI\OpenAPI\Models\Shared\OrgChartSpecNodeSizeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PieChartSpec;
use \OpenAPI\OpenAPI\Models\Shared\PieChartSpecLegendPositionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ScorecardChartSpec;
use \OpenAPI\OpenAPI\Models\Shared\ScorecardChartSpecAggregateTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BaselineValueFormat;
use \OpenAPI\OpenAPI\Models\Shared\BaselineValueFormatComparisonTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ChartCustomNumberFormatOptions;
use \OpenAPI\OpenAPI\Models\Shared\KeyValueFormat;
use \OpenAPI\OpenAPI\Models\Shared\ScorecardChartSpecNumberFormatSourceEnum;
use \OpenAPI\OpenAPI\Models\Shared\TreemapChartSpec;
use \OpenAPI\OpenAPI\Models\Shared\TreemapChartColorScale;
use \OpenAPI\OpenAPI\Models\Shared\WaterfallChartSpec;
use \OpenAPI\OpenAPI\Models\Shared\WaterfallChartDomain;
use \OpenAPI\OpenAPI\Models\Shared\WaterfallChartSeries;
use \OpenAPI\OpenAPI\Models\Shared\WaterfallChartCustomSubtotal;
use \OpenAPI\OpenAPI\Models\Shared\WaterfallChartColumnStyle;
use \OpenAPI\OpenAPI\Models\Shared\WaterfallChartSpecStackedTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DimensionGroup;
use \OpenAPI\OpenAPI\Models\Shared\ConditionalFormatRule;
use \OpenAPI\OpenAPI\Models\Shared\BooleanRule;
use \OpenAPI\OpenAPI\Models\Shared\GradientRule;
use \OpenAPI\OpenAPI\Models\Shared\InterpolationPoint;
use \OpenAPI\OpenAPI\Models\Shared\InterpolationPointTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GridData;
use \OpenAPI\OpenAPI\Models\Shared\DimensionProperties;
use \OpenAPI\OpenAPI\Models\Shared\RowData;
use \OpenAPI\OpenAPI\Models\Shared\CellData;
use \OpenAPI\OpenAPI\Models\Shared\DataSourceFormula;
use \OpenAPI\OpenAPI\Models\Shared\DataSourceTable;
use \OpenAPI\OpenAPI\Models\Shared\DataSourceTableColumnSelectionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DataValidationRule;
use \OpenAPI\OpenAPI\Models\Shared\ExtendedValue;
use \OpenAPI\OpenAPI\Models\Shared\ErrorValue;
use \OpenAPI\OpenAPI\Models\Shared\ErrorValueTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PivotTable;
use \OpenAPI\OpenAPI\Models\Shared\PivotGroup;
use \OpenAPI\OpenAPI\Models\Shared\PivotGroupLimit;
use \OpenAPI\OpenAPI\Models\Shared\PivotGroupRule;
use \OpenAPI\OpenAPI\Models\Shared\DateTimeRule;
use \OpenAPI\OpenAPI\Models\Shared\DateTimeRuleTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\HistogramRule;
use \OpenAPI\OpenAPI\Models\Shared\ManualRule;
use \OpenAPI\OpenAPI\Models\Shared\ManualRuleGroup;
use \OpenAPI\OpenAPI\Models\Shared\PivotGroupSortOrderEnum;
use \OpenAPI\OpenAPI\Models\Shared\PivotGroupSortValueBucket;
use \OpenAPI\OpenAPI\Models\Shared\PivotGroupValueMetadata;
use \OpenAPI\OpenAPI\Models\Shared\PivotFilterCriteria;
use \OpenAPI\OpenAPI\Models\Shared\PivotFilterSpec;
use \OpenAPI\OpenAPI\Models\Shared\PivotTableValueLayoutEnum;
use \OpenAPI\OpenAPI\Models\Shared\PivotValue;
use \OpenAPI\OpenAPI\Models\Shared\PivotValueCalculatedDisplayTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PivotValueSummarizeFunctionEnum;
use \OpenAPI\OpenAPI\Models\Shared\TextFormatRun;
use \OpenAPI\OpenAPI\Models\Shared\FilterView;
use \OpenAPI\OpenAPI\Models\Shared\SheetProperties;
use \OpenAPI\OpenAPI\Models\Shared\DataSourceSheetProperties;
use \OpenAPI\OpenAPI\Models\Shared\GridProperties;
use \OpenAPI\OpenAPI\Models\Shared\SheetPropertiesSheetTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProtectedRange;
use \OpenAPI\OpenAPI\Models\Shared\Editors;
use \OpenAPI\OpenAPI\Models\Shared\Slicer;
use \OpenAPI\OpenAPI\Models\Shared\SlicerSpec;
use \OpenAPI\OpenAPI\Models\Shared\SlicerSpecHorizontalAlignmentEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsCreateSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsCreateSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SheetsSpreadsheetsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->spreadsheetInput = new SpreadsheetInput();
    $request->spreadsheetInput->dataSources = [
        new DataSource(),
    ];
    $request->spreadsheetInput->developerMetadata = [
        new DeveloperMetadata(),
        new DeveloperMetadata(),
    ];
    $request->spreadsheetInput->namedRanges = [
        new NamedRange(),
        new NamedRange(),
        new NamedRange(),
        new NamedRange(),
    ];
    $request->spreadsheetInput->properties = new SpreadsheetProperties();
    $request->spreadsheetInput->properties->autoRecalc = SpreadsheetPropertiesAutoRecalcEnum::HOUR;
    $request->spreadsheetInput->properties->defaultFormat = new CellFormat();
    $request->spreadsheetInput->properties->defaultFormat->backgroundColor = new Color();
    $request->spreadsheetInput->properties->defaultFormat->backgroundColor->alpha = 7781.57;
    $request->spreadsheetInput->properties->defaultFormat->backgroundColor->blue = 1403.5;
    $request->spreadsheetInput->properties->defaultFormat->backgroundColor->green = 8700.13;
    $request->spreadsheetInput->properties->defaultFormat->backgroundColor->red = 8700.88;
    $request->spreadsheetInput->properties->defaultFormat->backgroundColorStyle = new ColorStyle();
    $request->spreadsheetInput->properties->defaultFormat->backgroundColorStyle->rgbColor = new Color();
    $request->spreadsheetInput->properties->defaultFormat->backgroundColorStyle->rgbColor->alpha = 9786.19;
    $request->spreadsheetInput->properties->defaultFormat->backgroundColorStyle->rgbColor->blue = 4736.08;
    $request->spreadsheetInput->properties->defaultFormat->backgroundColorStyle->rgbColor->green = 7991.59;
    $request->spreadsheetInput->properties->defaultFormat->backgroundColorStyle->rgbColor->red = 8009.11;
    $request->spreadsheetInput->properties->defaultFormat->backgroundColorStyle->themeColor = ColorStyleThemeColorEnum::ACCENT2;
    $request->spreadsheetInput->properties->defaultFormat->borders = new Borders();
    $request->spreadsheetInput->properties->defaultFormat->borders->bottom = new Border();
    $request->spreadsheetInput->properties->defaultFormat->borders->bottom->color = new Color();
    $request->spreadsheetInput->properties->defaultFormat->borders->bottom->color->alpha = 5204.78;
    $request->spreadsheetInput->properties->defaultFormat->borders->bottom->color->blue = 7805.29;
    $request->spreadsheetInput->properties->defaultFormat->borders->bottom->color->green = 6788.8;
    $request->spreadsheetInput->properties->defaultFormat->borders->bottom->color->red = 1182.74;
    $request->spreadsheetInput->properties->defaultFormat->borders->bottom->colorStyle = new ColorStyle();
    $request->spreadsheetInput->properties->defaultFormat->borders->bottom->colorStyle->rgbColor = new Color();
    $request->spreadsheetInput->properties->defaultFormat->borders->bottom->colorStyle->rgbColor->alpha = 7206.33;
    $request->spreadsheetInput->properties->defaultFormat->borders->bottom->colorStyle->rgbColor->blue = 6399.21;
    $request->spreadsheetInput->properties->defaultFormat->borders->bottom->colorStyle->rgbColor->green = 5820.2;
    $request->spreadsheetInput->properties->defaultFormat->borders->bottom->colorStyle->rgbColor->red = 1433.53;
    $request->spreadsheetInput->properties->defaultFormat->borders->bottom->colorStyle->themeColor = ColorStyleThemeColorEnum::ACCENT3;
    $request->spreadsheetInput->properties->defaultFormat->borders->bottom->style = BorderStyleEnum::DOUBLE;
    $request->spreadsheetInput->properties->defaultFormat->borders->bottom->width = 758616;
    $request->spreadsheetInput->properties->defaultFormat->borders->left = new Border();
    $request->spreadsheetInput->properties->defaultFormat->borders->left->color = new Color();
    $request->spreadsheetInput->properties->defaultFormat->borders->left->color->alpha = 5218.48;
    $request->spreadsheetInput->properties->defaultFormat->borders->left->color->blue = 1059.07;
    $request->spreadsheetInput->properties->defaultFormat->borders->left->color->green = 4146.62;
    $request->spreadsheetInput->properties->defaultFormat->borders->left->color->red = 4736;
    $request->spreadsheetInput->properties->defaultFormat->borders->left->colorStyle = new ColorStyle();
    $request->spreadsheetInput->properties->defaultFormat->borders->left->colorStyle->rgbColor = new Color();
    $request->spreadsheetInput->properties->defaultFormat->borders->left->colorStyle->rgbColor->alpha = 2645.55;
    $request->spreadsheetInput->properties->defaultFormat->borders->left->colorStyle->rgbColor->blue = 1863.32;
    $request->spreadsheetInput->properties->defaultFormat->borders->left->colorStyle->rgbColor->green = 7742.34;
    $request->spreadsheetInput->properties->defaultFormat->borders->left->colorStyle->rgbColor->red = 7369.18;
    $request->spreadsheetInput->properties->defaultFormat->borders->left->colorStyle->themeColor = ColorStyleThemeColorEnum::ACCENT2;
    $request->spreadsheetInput->properties->defaultFormat->borders->left->style = BorderStyleEnum::DOTTED;
    $request->spreadsheetInput->properties->defaultFormat->borders->left->width = 568434;
    $request->spreadsheetInput->properties->defaultFormat->borders->right = new Border();
    $request->spreadsheetInput->properties->defaultFormat->borders->right->color = new Color();
    $request->spreadsheetInput->properties->defaultFormat->borders->right->color->alpha = 1352.18;
    $request->spreadsheetInput->properties->defaultFormat->borders->right->color->blue = 187.89;
    $request->spreadsheetInput->properties->defaultFormat->borders->right->color->green = 3241.41;
    $request->spreadsheetInput->properties->defaultFormat->borders->right->color->red = 6176.36;
    $request->spreadsheetInput->properties->defaultFormat->borders->right->colorStyle = new ColorStyle();
    $request->spreadsheetInput->properties->defaultFormat->borders->right->colorStyle->rgbColor = new Color();
    $request->spreadsheetInput->properties->defaultFormat->borders->right->colorStyle->rgbColor->alpha = 1496.75;
    $request->spreadsheetInput->properties->defaultFormat->borders->right->colorStyle->rgbColor->blue = 6120.96;
    $request->spreadsheetInput->properties->defaultFormat->borders->right->colorStyle->rgbColor->green = 2223.21;
    $request->spreadsheetInput->properties->defaultFormat->borders->right->colorStyle->rgbColor->red = 6169.34;
    $request->spreadsheetInput->properties->defaultFormat->borders->right->colorStyle->themeColor = ColorStyleThemeColorEnum::ACCENT1;
    $request->spreadsheetInput->properties->defaultFormat->borders->right->style = BorderStyleEnum::DOUBLE;
    $request->spreadsheetInput->properties->defaultFormat->borders->right->width = 902599;
    $request->spreadsheetInput->properties->defaultFormat->borders->top = new Border();
    $request->spreadsheetInput->properties->defaultFormat->borders->top->color = new Color();
    $request->spreadsheetInput->properties->defaultFormat->borders->top->color->alpha = 6818.2;
    $request->spreadsheetInput->properties->defaultFormat->borders->top->color->blue = 4499.5;
    $request->spreadsheetInput->properties->defaultFormat->borders->top->color->green = 3595.08;
    $request->spreadsheetInput->properties->defaultFormat->borders->top->color->red = 6130.64;
    $request->spreadsheetInput->properties->defaultFormat->borders->top->colorStyle = new ColorStyle();
    $request->spreadsheetInput->properties->defaultFormat->borders->top->colorStyle->rgbColor = new Color();
    $request->spreadsheetInput->properties->defaultFormat->borders->top->colorStyle->rgbColor->alpha = 4370.32;
    $request->spreadsheetInput->properties->defaultFormat->borders->top->colorStyle->rgbColor->blue = 9023.49;
    $request->spreadsheetInput->properties->defaultFormat->borders->top->colorStyle->rgbColor->green = 6976.31;
    $request->spreadsheetInput->properties->defaultFormat->borders->top->colorStyle->rgbColor->red = 992.8;
    $request->spreadsheetInput->properties->defaultFormat->borders->top->colorStyle->themeColor = ColorStyleThemeColorEnum::THEME_COLOR_TYPE_UNSPECIFIED;
    $request->spreadsheetInput->properties->defaultFormat->borders->top->style = BorderStyleEnum::DOUBLE;
    $request->spreadsheetInput->properties->defaultFormat->borders->top->width = 666767;
    $request->spreadsheetInput->properties->defaultFormat->horizontalAlignment = CellFormatHorizontalAlignmentEnum::CENTER;
    $request->spreadsheetInput->properties->defaultFormat->hyperlinkDisplayType = CellFormatHyperlinkDisplayTypeEnum::PLAIN_TEXT;
    $request->spreadsheetInput->properties->defaultFormat->numberFormat = new NumberFormat();
    $request->spreadsheetInput->properties->defaultFormat->numberFormat->pattern = 'dolores';
    $request->spreadsheetInput->properties->defaultFormat->numberFormat->type = NumberFormatTypeEnum::TEXT;
    $request->spreadsheetInput->properties->defaultFormat->padding = new Padding();
    $request->spreadsheetInput->properties->defaultFormat->padding->bottom = 358152;
    $request->spreadsheetInput->properties->defaultFormat->padding->left = 128926;
    $request->spreadsheetInput->properties->defaultFormat->padding->right = 750686;
    $request->spreadsheetInput->properties->defaultFormat->padding->top = 315428;
    $request->spreadsheetInput->properties->defaultFormat->textDirection = CellFormatTextDirectionEnum::LEFT_TO_RIGHT;
    $request->spreadsheetInput->properties->defaultFormat->textFormat = new TextFormat();
    $request->spreadsheetInput->properties->defaultFormat->textFormat->bold = false;
    $request->spreadsheetInput->properties->defaultFormat->textFormat->fontFamily = 'nemo';
    $request->spreadsheetInput->properties->defaultFormat->textFormat->fontSize = 325047;
    $request->spreadsheetInput->properties->defaultFormat->textFormat->foregroundColor = new Color();
    $request->spreadsheetInput->properties->defaultFormat->textFormat->foregroundColor->alpha = 5701.97;
    $request->spreadsheetInput->properties->defaultFormat->textFormat->foregroundColor->blue = 384.25;
    $request->spreadsheetInput->properties->defaultFormat->textFormat->foregroundColor->green = 4386.01;
    $request->spreadsheetInput->properties->defaultFormat->textFormat->foregroundColor->red = 6342.74;
    $request->spreadsheetInput->properties->defaultFormat->textFormat->foregroundColorStyle = new ColorStyle();
    $request->spreadsheetInput->properties->defaultFormat->textFormat->foregroundColorStyle->rgbColor = new Color();
    $request->spreadsheetInput->properties->defaultFormat->textFormat->foregroundColorStyle->rgbColor->alpha = 9883.74;
    $request->spreadsheetInput->properties->defaultFormat->textFormat->foregroundColorStyle->rgbColor->blue = 9589.5;
    $request->spreadsheetInput->properties->defaultFormat->textFormat->foregroundColorStyle->rgbColor->green = 1020.44;
    $request->spreadsheetInput->properties->defaultFormat->textFormat->foregroundColorStyle->rgbColor->red = 6527.9;
    $request->spreadsheetInput->properties->defaultFormat->textFormat->foregroundColorStyle->themeColor = ColorStyleThemeColorEnum::BACKGROUND;
    $request->spreadsheetInput->properties->defaultFormat->textFormat->italic = false;
    $request->spreadsheetInput->properties->defaultFormat->textFormat->link = new Link();
    $request->spreadsheetInput->properties->defaultFormat->textFormat->link->uri = 'https://curly-yellow.name';
    $request->spreadsheetInput->properties->defaultFormat->textFormat->strikethrough = false;
    $request->spreadsheetInput->properties->defaultFormat->textFormat->underline = false;
    $request->spreadsheetInput->properties->defaultFormat->textRotation = new TextRotation();
    $request->spreadsheetInput->properties->defaultFormat->textRotation->angle = 581850;
    $request->spreadsheetInput->properties->defaultFormat->textRotation->vertical = false;
    $request->spreadsheetInput->properties->defaultFormat->verticalAlignment = CellFormatVerticalAlignmentEnum::TOP;
    $request->spreadsheetInput->properties->defaultFormat->wrapStrategy = CellFormatWrapStrategyEnum::LEGACY_WRAP;
    $request->spreadsheetInput->properties->iterativeCalculationSettings = new IterativeCalculationSettings();
    $request->spreadsheetInput->properties->iterativeCalculationSettings->convergenceThreshold = 4663.11;
    $request->spreadsheetInput->properties->iterativeCalculationSettings->maxIterations = 474697;
    $request->spreadsheetInput->properties->locale = 'velit';
    $request->spreadsheetInput->properties->spreadsheetTheme = new SpreadsheetTheme();
    $request->spreadsheetInput->properties->spreadsheetTheme->primaryFontFamily = 'error';
    $request->spreadsheetInput->properties->spreadsheetTheme->themeColors = [
        new ThemeColorPair(),
    ];
    $request->spreadsheetInput->properties->timeZone = 'quis';
    $request->spreadsheetInput->properties->title = 'Mr.';
    $request->spreadsheetInput->sheets = [
        new Sheet(),
        new Sheet(),
        new Sheet(),
    ];
    $request->spreadsheetInput->spreadsheetId = 'animi';
    $request->spreadsheetInput->spreadsheetUrl = 'enim';
    $request->accessToken = 'odit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sequi';
    $request->fields = 'tenetur';
    $request->key = 'ipsam';
    $request->oauthToken = 'id';
    $request->prettyPrint = false;
    $request->quotaUser = 'possimus';
    $request->uploadType = 'aut';
    $request->uploadProtocol = 'quasi';

    $requestSecurity = new SheetsSpreadsheetsCreateSecurity();
    $requestSecurity->option1 = new SheetsSpreadsheetsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->spreadsheets->sheetsSpreadsheetsCreate($request, $requestSecurity);

    if ($response->spreadsheet !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sheetsSpreadsheetsDeveloperMetadataGet

Returns the developer metadata with the specified ID. The caller must specify the spreadsheet ID and the developer metadata's unique metadataId.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsDeveloperMetadataGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsDeveloperMetadataGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsDeveloperMetadataGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsDeveloperMetadataGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsDeveloperMetadataGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SheetsSpreadsheetsDeveloperMetadataGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'temporibus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quasi';
    $request->fields = 'reiciendis';
    $request->key = 'voluptatibus';
    $request->metadataId = 878194;
    $request->oauthToken = 'nihil';
    $request->prettyPrint = false;
    $request->quotaUser = 'praesentium';
    $request->spreadsheetId = 'voluptatibus';
    $request->uploadType = 'ipsa';
    $request->uploadProtocol = 'omnis';

    $requestSecurity = new SheetsSpreadsheetsDeveloperMetadataGetSecurity();
    $requestSecurity->option1 = new SheetsSpreadsheetsDeveloperMetadataGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->spreadsheets->sheetsSpreadsheetsDeveloperMetadataGet($request, $requestSecurity);

    if ($response->developerMetadata !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sheetsSpreadsheetsDeveloperMetadataSearch

Returns all developer metadata matching the specified DataFilter. If the provided DataFilter represents a DeveloperMetadataLookup object, this will return all DeveloperMetadata entries selected by it. If the DataFilter represents a location in a spreadsheet, this will return all developer metadata associated with locations intersecting that region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsDeveloperMetadataSearchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SearchDeveloperMetadataRequest;
use \OpenAPI\OpenAPI\Models\Shared\DataFilter;
use \OpenAPI\OpenAPI\Models\Shared\DeveloperMetadataLookup;
use \OpenAPI\OpenAPI\Models\Shared\DeveloperMetadataLookupLocationMatchingStrategyEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeveloperMetadataLookupLocationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeveloperMetadataLocation;
use \OpenAPI\OpenAPI\Models\Shared\DimensionRange;
use \OpenAPI\OpenAPI\Models\Shared\DimensionRangeDimensionEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeveloperMetadataLocationLocationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeveloperMetadataLookupVisibilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\GridRange;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsDeveloperMetadataSearchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsDeveloperMetadataSearchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsDeveloperMetadataSearchSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsDeveloperMetadataSearchSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SheetsSpreadsheetsDeveloperMetadataSearchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->searchDeveloperMetadataRequest = new SearchDeveloperMetadataRequest();
    $request->searchDeveloperMetadataRequest->dataFilters = [
        new DataFilter(),
        new DataFilter(),
        new DataFilter(),
    ];
    $request->accessToken = 'perferendis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'reprehenderit';
    $request->fields = 'ut';
    $request->key = 'maiores';
    $request->oauthToken = 'dicta';
    $request->prettyPrint = false;
    $request->quotaUser = 'corporis';
    $request->spreadsheetId = 'dolore';
    $request->uploadType = 'iusto';
    $request->uploadProtocol = 'dicta';

    $requestSecurity = new SheetsSpreadsheetsDeveloperMetadataSearchSecurity();
    $requestSecurity->option1 = new SheetsSpreadsheetsDeveloperMetadataSearchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->spreadsheets->sheetsSpreadsheetsDeveloperMetadataSearch($request, $requestSecurity);

    if ($response->searchDeveloperMetadataResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sheetsSpreadsheetsGet

Returns the spreadsheet at the given ID. The caller must specify the spreadsheet ID. By default, data within grids is not returned. You can include grid data in one of 2 ways: * Specify a [field mask](https://developers.google.com/sheets/api/guides/field-masks) listing your desired fields using the `fields` URL parameter in HTTP * Set the includeGridData URL parameter to true. If a field mask is set, the `includeGridData` parameter is ignored For large spreadsheets, as a best practice, retrieve only the specific spreadsheet fields that you want. To retrieve only subsets of spreadsheet data, use the ranges URL parameter. Ranges are specified using [A1 notation](/sheets/api/guides/concepts#cell). You can define a single cell (for example, `A1`) or multiple cells (for example, `A1:D5`). You can also get cells from other sheets within the same spreadsheet (for example, `Sheet2!A1:C4`) or retrieve multiple ranges at once (for example, `?ranges=A1:D5&ranges=Sheet2!A1:C4`). Limiting the range returns only the portions of the spreadsheet that intersect the requested ranges.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsGetSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsGetSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsGetSecurityOption5;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SheetsSpreadsheetsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'enim';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'commodi';
    $request->fields = 'repudiandae';
    $request->includeGridData = false;
    $request->key = 'quae';
    $request->oauthToken = 'ipsum';
    $request->prettyPrint = false;
    $request->quotaUser = 'quidem';
    $request->ranges = [
        'excepturi',
        'pariatur',
        'modi',
    ];
    $request->spreadsheetId = 'praesentium';
    $request->uploadType = 'rem';
    $request->uploadProtocol = 'voluptates';

    $requestSecurity = new SheetsSpreadsheetsGetSecurity();
    $requestSecurity->option1 = new SheetsSpreadsheetsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->spreadsheets->sheetsSpreadsheetsGet($request, $requestSecurity);

    if ($response->spreadsheet !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sheetsSpreadsheetsGetByDataFilter

Returns the spreadsheet at the given ID. The caller must specify the spreadsheet ID. This method differs from GetSpreadsheet in that it allows selecting which subsets of spreadsheet data to return by specifying a dataFilters parameter. Multiple DataFilters can be specified. Specifying one or more data filters returns the portions of the spreadsheet that intersect ranges matched by any of the filters. By default, data within grids is not returned. You can include grid data one of 2 ways: * Specify a [field mask](https://developers.google.com/sheets/api/guides/field-masks) listing your desired fields using the `fields` URL parameter in HTTP * Set the includeGridData parameter to true. If a field mask is set, the `includeGridData` parameter is ignored For large spreadsheets, as a best practice, retrieve only the specific spreadsheet fields that you want.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsGetByDataFilterRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GetSpreadsheetByDataFilterRequest;
use \OpenAPI\OpenAPI\Models\Shared\DataFilter;
use \OpenAPI\OpenAPI\Models\Shared\DeveloperMetadataLookup;
use \OpenAPI\OpenAPI\Models\Shared\DeveloperMetadataLookupLocationMatchingStrategyEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeveloperMetadataLookupLocationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeveloperMetadataLocation;
use \OpenAPI\OpenAPI\Models\Shared\DimensionRange;
use \OpenAPI\OpenAPI\Models\Shared\DimensionRangeDimensionEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeveloperMetadataLocationLocationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeveloperMetadataLookupVisibilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\GridRange;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsGetByDataFilterSecurity;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsGetByDataFilterSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsGetByDataFilterSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsGetByDataFilterSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SheetsSpreadsheetsGetByDataFilterRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->getSpreadsheetByDataFilterRequest = new GetSpreadsheetByDataFilterRequest();
    $request->getSpreadsheetByDataFilterRequest->dataFilters = [
        new DataFilter(),
        new DataFilter(),
        new DataFilter(),
        new DataFilter(),
    ];
    $request->getSpreadsheetByDataFilterRequest->includeGridData = false;
    $request->accessToken = 'sint';
    $request->alt = AltEnum::JSON;
    $request->callback = 'itaque';
    $request->fields = 'incidunt';
    $request->key = 'enim';
    $request->oauthToken = 'consequatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'est';
    $request->spreadsheetId = 'quibusdam';
    $request->uploadType = 'explicabo';
    $request->uploadProtocol = 'deserunt';

    $requestSecurity = new SheetsSpreadsheetsGetByDataFilterSecurity();
    $requestSecurity->option1 = new SheetsSpreadsheetsGetByDataFilterSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->spreadsheets->sheetsSpreadsheetsGetByDataFilter($request, $requestSecurity);

    if ($response->spreadsheet !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sheetsSpreadsheetsSheetsCopyTo

Copies a single sheet from a spreadsheet to another spreadsheet. Returns the properties of the newly created sheet.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsSheetsCopyToRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CopySheetToAnotherSpreadsheetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsSheetsCopyToSecurity;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsSheetsCopyToSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsSheetsCopyToSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsSheetsCopyToSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SheetsSpreadsheetsSheetsCopyToRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->copySheetToAnotherSpreadsheetRequest = new CopySheetToAnotherSpreadsheetRequest();
    $request->copySheetToAnotherSpreadsheetRequest->destinationSpreadsheetId = 'quibusdam';
    $request->accessToken = 'labore';
    $request->alt = AltEnum::JSON;
    $request->callback = 'qui';
    $request->fields = 'aliquid';
    $request->key = 'cupiditate';
    $request->oauthToken = 'quos';
    $request->prettyPrint = false;
    $request->quotaUser = 'perferendis';
    $request->sheetId = 164940;
    $request->spreadsheetId = 'assumenda';
    $request->uploadType = 'ipsam';
    $request->uploadProtocol = 'alias';

    $requestSecurity = new SheetsSpreadsheetsSheetsCopyToSecurity();
    $requestSecurity->option1 = new SheetsSpreadsheetsSheetsCopyToSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->spreadsheets->sheetsSpreadsheetsSheetsCopyTo($request, $requestSecurity);

    if ($response->sheetProperties !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sheetsSpreadsheetsValuesAppend

Appends values to a spreadsheet. The input range is used to search for existing data and find a "table" within that range. Values will be appended to the next row of the table, starting with the first column of the table. See the [guide](/sheets/api/guides/values#appending_values) and [sample code](/sheets/api/samples/writing#append_values) for specific details of how tables are detected and data is appended. The caller must specify the spreadsheet ID, range, and a valueInputOption. The `valueInputOption` only controls how the input data will be added to the sheet (column-wise or row-wise), it does not influence what cell the data starts being written to.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsValuesAppendRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ValueRange;
use \OpenAPI\OpenAPI\Models\Shared\ValueRangeMajorDimensionEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsValuesAppendInsertDataOptionEnum;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsValuesAppendResponseDateTimeRenderOptionEnum;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsValuesAppendResponseValueRenderOptionEnum;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsValuesAppendValueInputOptionEnum;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsValuesAppendSecurity;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsValuesAppendSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsValuesAppendSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsValuesAppendSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SheetsSpreadsheetsValuesAppendRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->valueRange = new ValueRange();
    $request->valueRange->majorDimension = ValueRangeMajorDimensionEnum::COLUMNS;
    $request->valueRange->range = 'excepturi';
    $request->valueRange->values = [
        [
            'tempore',
            'labore',
            'delectus',
        ],
        [
            'non',
            'eligendi',
        ],
    ];
    $request->accessToken = 'sint';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'provident';
    $request->fields = 'necessitatibus';
    $request->includeValuesInResponse = false;
    $request->insertDataOption = SheetsSpreadsheetsValuesAppendInsertDataOptionEnum::INSERT_ROWS;
    $request->key = 'officia';
    $request->oauthToken = 'dolor';
    $request->prettyPrint = false;
    $request->quotaUser = 'debitis';
    $request->range = 'a';
    $request->responseDateTimeRenderOption = SheetsSpreadsheetsValuesAppendResponseDateTimeRenderOptionEnum::FORMATTED_STRING;
    $request->responseValueRenderOption = SheetsSpreadsheetsValuesAppendResponseValueRenderOptionEnum::UNFORMATTED_VALUE;
    $request->spreadsheetId = 'in';
    $request->uploadType = 'illum';
    $request->uploadProtocol = 'maiores';
    $request->valueInputOption = SheetsSpreadsheetsValuesAppendValueInputOptionEnum::USER_ENTERED;

    $requestSecurity = new SheetsSpreadsheetsValuesAppendSecurity();
    $requestSecurity->option1 = new SheetsSpreadsheetsValuesAppendSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->spreadsheets->sheetsSpreadsheetsValuesAppend($request, $requestSecurity);

    if ($response->appendValuesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sheetsSpreadsheetsValuesBatchClear

Clears one or more ranges of values from a spreadsheet. The caller must specify the spreadsheet ID and one or more ranges. Only values are cleared -- all other properties of the cell (such as formatting and data validation) are kept.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsValuesBatchClearRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BatchClearValuesRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsValuesBatchClearSecurity;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsValuesBatchClearSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsValuesBatchClearSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsValuesBatchClearSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SheetsSpreadsheetsValuesBatchClearRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->batchClearValuesRequest = new BatchClearValuesRequest();
    $request->batchClearValuesRequest->ranges = [
        'cumque',
        'facere',
    ];
    $request->accessToken = 'ea';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'laborum';
    $request->fields = 'accusamus';
    $request->key = 'non';
    $request->oauthToken = 'occaecati';
    $request->prettyPrint = false;
    $request->quotaUser = 'enim';
    $request->spreadsheetId = 'accusamus';
    $request->uploadType = 'delectus';
    $request->uploadProtocol = 'quidem';

    $requestSecurity = new SheetsSpreadsheetsValuesBatchClearSecurity();
    $requestSecurity->option1 = new SheetsSpreadsheetsValuesBatchClearSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->spreadsheets->sheetsSpreadsheetsValuesBatchClear($request, $requestSecurity);

    if ($response->batchClearValuesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sheetsSpreadsheetsValuesBatchClearByDataFilter

Clears one or more ranges of values from a spreadsheet. The caller must specify the spreadsheet ID and one or more DataFilters. Ranges matching any of the specified data filters will be cleared. Only values are cleared -- all other properties of the cell (such as formatting, data validation, etc..) are kept.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsValuesBatchClearByDataFilterRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BatchClearValuesByDataFilterRequest;
use \OpenAPI\OpenAPI\Models\Shared\DataFilter;
use \OpenAPI\OpenAPI\Models\Shared\DeveloperMetadataLookup;
use \OpenAPI\OpenAPI\Models\Shared\DeveloperMetadataLookupLocationMatchingStrategyEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeveloperMetadataLookupLocationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeveloperMetadataLocation;
use \OpenAPI\OpenAPI\Models\Shared\DimensionRange;
use \OpenAPI\OpenAPI\Models\Shared\DimensionRangeDimensionEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeveloperMetadataLocationLocationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeveloperMetadataLookupVisibilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\GridRange;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsValuesBatchClearByDataFilterSecurity;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsValuesBatchClearByDataFilterSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsValuesBatchClearByDataFilterSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsValuesBatchClearByDataFilterSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SheetsSpreadsheetsValuesBatchClearByDataFilterRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->batchClearValuesByDataFilterRequest = new BatchClearValuesByDataFilterRequest();
    $request->batchClearValuesByDataFilterRequest->dataFilters = [
        new DataFilter(),
        new DataFilter(),
        new DataFilter(),
    ];
    $request->accessToken = 'id';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'deleniti';
    $request->fields = 'sapiente';
    $request->key = 'amet';
    $request->oauthToken = 'deserunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'nisi';
    $request->spreadsheetId = 'vel';
    $request->uploadType = 'natus';
    $request->uploadProtocol = 'omnis';

    $requestSecurity = new SheetsSpreadsheetsValuesBatchClearByDataFilterSecurity();
    $requestSecurity->option1 = new SheetsSpreadsheetsValuesBatchClearByDataFilterSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->spreadsheets->sheetsSpreadsheetsValuesBatchClearByDataFilter($request, $requestSecurity);

    if ($response->batchClearValuesByDataFilterResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sheetsSpreadsheetsValuesBatchGet

Returns one or more ranges of values from a spreadsheet. The caller must specify the spreadsheet ID and one or more ranges.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsValuesBatchGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsValuesBatchGetDateTimeRenderOptionEnum;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsValuesBatchGetMajorDimensionEnum;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsValuesBatchGetValueRenderOptionEnum;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsValuesBatchGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsValuesBatchGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsValuesBatchGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsValuesBatchGetSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsValuesBatchGetSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsValuesBatchGetSecurityOption5;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SheetsSpreadsheetsValuesBatchGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'perferendis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'magnam';
    $request->dateTimeRenderOption = SheetsSpreadsheetsValuesBatchGetDateTimeRenderOptionEnum::FORMATTED_STRING;
    $request->fields = 'id';
    $request->key = 'labore';
    $request->majorDimension = SheetsSpreadsheetsValuesBatchGetMajorDimensionEnum::DIMENSION_UNSPECIFIED;
    $request->oauthToken = 'suscipit';
    $request->prettyPrint = false;
    $request->quotaUser = 'natus';
    $request->ranges = [
        'eum',
        'vero',
        'aspernatur',
    ];
    $request->spreadsheetId = 'architecto';
    $request->uploadType = 'magnam';
    $request->uploadProtocol = 'et';
    $request->valueRenderOption = SheetsSpreadsheetsValuesBatchGetValueRenderOptionEnum::UNFORMATTED_VALUE;

    $requestSecurity = new SheetsSpreadsheetsValuesBatchGetSecurity();
    $requestSecurity->option1 = new SheetsSpreadsheetsValuesBatchGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->spreadsheets->sheetsSpreadsheetsValuesBatchGet($request, $requestSecurity);

    if ($response->batchGetValuesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sheetsSpreadsheetsValuesBatchGetByDataFilter

Returns one or more ranges of values that match the specified data filters. The caller must specify the spreadsheet ID and one or more DataFilters. Ranges that match any of the data filters in the request will be returned.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsValuesBatchGetByDataFilterRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BatchGetValuesByDataFilterRequest;
use \OpenAPI\OpenAPI\Models\Shared\DataFilter;
use \OpenAPI\OpenAPI\Models\Shared\DeveloperMetadataLookup;
use \OpenAPI\OpenAPI\Models\Shared\DeveloperMetadataLookupLocationMatchingStrategyEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeveloperMetadataLookupLocationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeveloperMetadataLocation;
use \OpenAPI\OpenAPI\Models\Shared\DimensionRange;
use \OpenAPI\OpenAPI\Models\Shared\DimensionRangeDimensionEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeveloperMetadataLocationLocationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeveloperMetadataLookupVisibilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\GridRange;
use \OpenAPI\OpenAPI\Models\Shared\BatchGetValuesByDataFilterRequestDateTimeRenderOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\BatchGetValuesByDataFilterRequestMajorDimensionEnum;
use \OpenAPI\OpenAPI\Models\Shared\BatchGetValuesByDataFilterRequestValueRenderOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsValuesBatchGetByDataFilterSecurity;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsValuesBatchGetByDataFilterSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsValuesBatchGetByDataFilterSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsValuesBatchGetByDataFilterSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SheetsSpreadsheetsValuesBatchGetByDataFilterRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->batchGetValuesByDataFilterRequest = new BatchGetValuesByDataFilterRequest();
    $request->batchGetValuesByDataFilterRequest->dataFilters = [
        new DataFilter(),
        new DataFilter(),
        new DataFilter(),
    ];
    $request->batchGetValuesByDataFilterRequest->dateTimeRenderOption = BatchGetValuesByDataFilterRequestDateTimeRenderOptionEnum::FORMATTED_STRING;
    $request->batchGetValuesByDataFilterRequest->majorDimension = BatchGetValuesByDataFilterRequestMajorDimensionEnum::ROWS;
    $request->batchGetValuesByDataFilterRequest->valueRenderOption = BatchGetValuesByDataFilterRequestValueRenderOptionEnum::FORMATTED_VALUE;
    $request->accessToken = 'mollitia';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'mollitia';
    $request->fields = 'ad';
    $request->key = 'eum';
    $request->oauthToken = 'dolor';
    $request->prettyPrint = false;
    $request->quotaUser = 'necessitatibus';
    $request->spreadsheetId = 'odit';
    $request->uploadType = 'nemo';
    $request->uploadProtocol = 'quasi';

    $requestSecurity = new SheetsSpreadsheetsValuesBatchGetByDataFilterSecurity();
    $requestSecurity->option1 = new SheetsSpreadsheetsValuesBatchGetByDataFilterSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->spreadsheets->sheetsSpreadsheetsValuesBatchGetByDataFilter($request, $requestSecurity);

    if ($response->batchGetValuesByDataFilterResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sheetsSpreadsheetsValuesBatchUpdate

Sets values in one or more ranges of a spreadsheet. The caller must specify the spreadsheet ID, a valueInputOption, and one or more ValueRanges.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsValuesBatchUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BatchUpdateValuesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ValueRange;
use \OpenAPI\OpenAPI\Models\Shared\ValueRangeMajorDimensionEnum;
use \OpenAPI\OpenAPI\Models\Shared\BatchUpdateValuesRequestResponseDateTimeRenderOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\BatchUpdateValuesRequestResponseValueRenderOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\BatchUpdateValuesRequestValueInputOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsValuesBatchUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsValuesBatchUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsValuesBatchUpdateSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsValuesBatchUpdateSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SheetsSpreadsheetsValuesBatchUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->batchUpdateValuesRequest = new BatchUpdateValuesRequest();
    $request->batchUpdateValuesRequest->data = [
        new ValueRange(),
        new ValueRange(),
        new ValueRange(),
        new ValueRange(),
    ];
    $request->batchUpdateValuesRequest->includeValuesInResponse = false;
    $request->batchUpdateValuesRequest->responseDateTimeRenderOption = BatchUpdateValuesRequestResponseDateTimeRenderOptionEnum::FORMATTED_STRING;
    $request->batchUpdateValuesRequest->responseValueRenderOption = BatchUpdateValuesRequestResponseValueRenderOptionEnum::FORMATTED_VALUE;
    $request->batchUpdateValuesRequest->valueInputOption = BatchUpdateValuesRequestValueInputOptionEnum::USER_ENTERED;
    $request->accessToken = 'deleniti';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'in';
    $request->fields = 'architecto';
    $request->key = 'architecto';
    $request->oauthToken = 'repudiandae';
    $request->prettyPrint = false;
    $request->quotaUser = 'ullam';
    $request->spreadsheetId = 'expedita';
    $request->uploadType = 'nihil';
    $request->uploadProtocol = 'repellat';

    $requestSecurity = new SheetsSpreadsheetsValuesBatchUpdateSecurity();
    $requestSecurity->option1 = new SheetsSpreadsheetsValuesBatchUpdateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->spreadsheets->sheetsSpreadsheetsValuesBatchUpdate($request, $requestSecurity);

    if ($response->batchUpdateValuesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sheetsSpreadsheetsValuesBatchUpdateByDataFilter

Sets values in one or more ranges of a spreadsheet. The caller must specify the spreadsheet ID, a valueInputOption, and one or more DataFilterValueRanges.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsValuesBatchUpdateByDataFilterRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BatchUpdateValuesByDataFilterRequest;
use \OpenAPI\OpenAPI\Models\Shared\DataFilterValueRange;
use \OpenAPI\OpenAPI\Models\Shared\DataFilter;
use \OpenAPI\OpenAPI\Models\Shared\DeveloperMetadataLookup;
use \OpenAPI\OpenAPI\Models\Shared\DeveloperMetadataLookupLocationMatchingStrategyEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeveloperMetadataLookupLocationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeveloperMetadataLocation;
use \OpenAPI\OpenAPI\Models\Shared\DimensionRange;
use \OpenAPI\OpenAPI\Models\Shared\DimensionRangeDimensionEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeveloperMetadataLocationLocationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeveloperMetadataLookupVisibilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\GridRange;
use \OpenAPI\OpenAPI\Models\Shared\DataFilterValueRangeMajorDimensionEnum;
use \OpenAPI\OpenAPI\Models\Shared\BatchUpdateValuesByDataFilterRequestResponseDateTimeRenderOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\BatchUpdateValuesByDataFilterRequestResponseValueRenderOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\BatchUpdateValuesByDataFilterRequestValueInputOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurity;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SheetsSpreadsheetsValuesBatchUpdateByDataFilterRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->batchUpdateValuesByDataFilterRequest = new BatchUpdateValuesByDataFilterRequest();
    $request->batchUpdateValuesByDataFilterRequest->data = [
        new DataFilterValueRange(),
    ];
    $request->batchUpdateValuesByDataFilterRequest->includeValuesInResponse = false;
    $request->batchUpdateValuesByDataFilterRequest->responseDateTimeRenderOption = BatchUpdateValuesByDataFilterRequestResponseDateTimeRenderOptionEnum::FORMATTED_STRING;
    $request->batchUpdateValuesByDataFilterRequest->responseValueRenderOption = BatchUpdateValuesByDataFilterRequestResponseValueRenderOptionEnum::FORMULA;
    $request->batchUpdateValuesByDataFilterRequest->valueInputOption = BatchUpdateValuesByDataFilterRequestValueInputOptionEnum::INPUT_VALUE_OPTION_UNSPECIFIED;
    $request->accessToken = 'consequuntur';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'natus';
    $request->fields = 'magni';
    $request->key = 'sunt';
    $request->oauthToken = 'quo';
    $request->prettyPrint = false;
    $request->quotaUser = 'illum';
    $request->spreadsheetId = 'pariatur';
    $request->uploadType = 'maxime';
    $request->uploadProtocol = 'ea';

    $requestSecurity = new SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurity();
    $requestSecurity->option1 = new SheetsSpreadsheetsValuesBatchUpdateByDataFilterSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->spreadsheets->sheetsSpreadsheetsValuesBatchUpdateByDataFilter($request, $requestSecurity);

    if ($response->batchUpdateValuesByDataFilterResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sheetsSpreadsheetsValuesClear

Clears values from a spreadsheet. The caller must specify the spreadsheet ID and range. Only values are cleared -- all other properties of the cell (such as formatting, data validation, etc..) are kept.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsValuesClearRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsValuesClearSecurity;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsValuesClearSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsValuesClearSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsValuesClearSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SheetsSpreadsheetsValuesClearRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'ea' => 'accusantium',
    ];
    $request->accessToken = 'ab';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quidem';
    $request->fields = 'ipsam';
    $request->key = 'voluptate';
    $request->oauthToken = 'autem';
    $request->prettyPrint = false;
    $request->quotaUser = 'nam';
    $request->range = 'eaque';
    $request->spreadsheetId = 'pariatur';
    $request->uploadType = 'nemo';
    $request->uploadProtocol = 'voluptatibus';

    $requestSecurity = new SheetsSpreadsheetsValuesClearSecurity();
    $requestSecurity->option1 = new SheetsSpreadsheetsValuesClearSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->spreadsheets->sheetsSpreadsheetsValuesClear($request, $requestSecurity);

    if ($response->clearValuesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sheetsSpreadsheetsValuesGet

Returns a range of values from a spreadsheet. The caller must specify the spreadsheet ID and a range.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsValuesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsValuesGetDateTimeRenderOptionEnum;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsValuesGetMajorDimensionEnum;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsValuesGetValueRenderOptionEnum;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsValuesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsValuesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsValuesGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsValuesGetSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsValuesGetSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsValuesGetSecurityOption5;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SheetsSpreadsheetsValuesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'fugiat';
    $request->alt = AltEnum::JSON;
    $request->callback = 'aut';
    $request->dateTimeRenderOption = SheetsSpreadsheetsValuesGetDateTimeRenderOptionEnum::FORMATTED_STRING;
    $request->fields = 'corporis';
    $request->key = 'hic';
    $request->majorDimension = SheetsSpreadsheetsValuesGetMajorDimensionEnum::COLUMNS;
    $request->oauthToken = 'nobis';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolores';
    $request->range = 'quis';
    $request->spreadsheetId = 'totam';
    $request->uploadType = 'dignissimos';
    $request->uploadProtocol = 'eaque';
    $request->valueRenderOption = SheetsSpreadsheetsValuesGetValueRenderOptionEnum::UNFORMATTED_VALUE;

    $requestSecurity = new SheetsSpreadsheetsValuesGetSecurity();
    $requestSecurity->option1 = new SheetsSpreadsheetsValuesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->spreadsheets->sheetsSpreadsheetsValuesGet($request, $requestSecurity);

    if ($response->valueRange !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sheetsSpreadsheetsValuesUpdate

Sets values in a range of a spreadsheet. The caller must specify the spreadsheet ID, range, and a valueInputOption.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsValuesUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ValueRange;
use \OpenAPI\OpenAPI\Models\Shared\ValueRangeMajorDimensionEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsValuesUpdateResponseDateTimeRenderOptionEnum;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsValuesUpdateResponseValueRenderOptionEnum;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsValuesUpdateValueInputOptionEnum;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsValuesUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsValuesUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsValuesUpdateSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\SheetsSpreadsheetsValuesUpdateSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SheetsSpreadsheetsValuesUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->valueRange = new ValueRange();
    $request->valueRange->majorDimension = ValueRangeMajorDimensionEnum::DIMENSION_UNSPECIFIED;
    $request->valueRange->range = 'perferendis';
    $request->valueRange->values = [
        [
            'quam',
            'dolor',
            'vero',
            'nostrum',
        ],
    ];
    $request->accessToken = 'hic';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'omnis';
    $request->fields = 'facilis';
    $request->includeValuesInResponse = false;
    $request->key = 'perspiciatis';
    $request->oauthToken = 'voluptatem';
    $request->prettyPrint = false;
    $request->quotaUser = 'porro';
    $request->range = 'consequuntur';
    $request->responseDateTimeRenderOption = SheetsSpreadsheetsValuesUpdateResponseDateTimeRenderOptionEnum::FORMATTED_STRING;
    $request->responseValueRenderOption = SheetsSpreadsheetsValuesUpdateResponseValueRenderOptionEnum::UNFORMATTED_VALUE;
    $request->spreadsheetId = 'eaque';
    $request->uploadType = 'occaecati';
    $request->uploadProtocol = 'rerum';
    $request->valueInputOption = SheetsSpreadsheetsValuesUpdateValueInputOptionEnum::INPUT_VALUE_OPTION_UNSPECIFIED;

    $requestSecurity = new SheetsSpreadsheetsValuesUpdateSecurity();
    $requestSecurity->option1 = new SheetsSpreadsheetsValuesUpdateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->spreadsheets->sheetsSpreadsheetsValuesUpdate($request, $requestSecurity);

    if ($response->updateValuesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
