# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
        new Request(),
    ];
    $request->batchUpdateSpreadsheetRequest->responseIncludeGridData = false;
    $request->batchUpdateSpreadsheetRequest->responseRanges = [
        'quibusdam',
        'unde',
        'nulla',
    ];
    $request->accessToken = 'corrupti';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'vel';
    $request->fields = 'error';
    $request->key = 'deserunt';
    $request->oauthToken = 'suscipit';
    $request->prettyPrint = false;
    $request->quotaUser = 'iure';
    $request->spreadsheetId = 'magnam';
    $request->uploadType = 'debitis';
    $request->uploadProtocol = 'ipsa';

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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [spreadsheets](docs/spreadsheets/README.md)

* [sheetsSpreadsheetsBatchUpdate](docs/spreadsheets/README.md#sheetsspreadsheetsbatchupdate) - Applies one or more updates to the spreadsheet. Each request is validated before being applied. If any request is not valid then the entire request will fail and nothing will be applied. Some requests have replies to give you some information about how they are applied. The replies will mirror the requests. For example, if you applied 4 updates and the 3rd one had a reply, then the response will have 2 empty replies, the actual reply, and another empty reply, in that order. Due to the collaborative nature of spreadsheets, it is not guaranteed that the spreadsheet will reflect exactly your changes after this completes, however it is guaranteed that the updates in the request will be applied together atomically. Your changes may be altered with respect to collaborator changes. If there are no collaborators, the spreadsheet should reflect your changes.
* [sheetsSpreadsheetsCreate](docs/spreadsheets/README.md#sheetsspreadsheetscreate) - Creates a spreadsheet, returning the newly created spreadsheet.
* [sheetsSpreadsheetsDeveloperMetadataGet](docs/spreadsheets/README.md#sheetsspreadsheetsdevelopermetadataget) - Returns the developer metadata with the specified ID. The caller must specify the spreadsheet ID and the developer metadata's unique metadataId.
* [sheetsSpreadsheetsDeveloperMetadataSearch](docs/spreadsheets/README.md#sheetsspreadsheetsdevelopermetadatasearch) - Returns all developer metadata matching the specified DataFilter. If the provided DataFilter represents a DeveloperMetadataLookup object, this will return all DeveloperMetadata entries selected by it. If the DataFilter represents a location in a spreadsheet, this will return all developer metadata associated with locations intersecting that region.
* [sheetsSpreadsheetsGet](docs/spreadsheets/README.md#sheetsspreadsheetsget) - Returns the spreadsheet at the given ID. The caller must specify the spreadsheet ID. By default, data within grids is not returned. You can include grid data in one of 2 ways: * Specify a [field mask](https://developers.google.com/sheets/api/guides/field-masks) listing your desired fields using the `fields` URL parameter in HTTP * Set the includeGridData URL parameter to true. If a field mask is set, the `includeGridData` parameter is ignored For large spreadsheets, as a best practice, retrieve only the specific spreadsheet fields that you want. To retrieve only subsets of spreadsheet data, use the ranges URL parameter. Ranges are specified using [A1 notation](/sheets/api/guides/concepts#cell). You can define a single cell (for example, `A1`) or multiple cells (for example, `A1:D5`). You can also get cells from other sheets within the same spreadsheet (for example, `Sheet2!A1:C4`) or retrieve multiple ranges at once (for example, `?ranges=A1:D5&ranges=Sheet2!A1:C4`). Limiting the range returns only the portions of the spreadsheet that intersect the requested ranges.
* [sheetsSpreadsheetsGetByDataFilter](docs/spreadsheets/README.md#sheetsspreadsheetsgetbydatafilter) - Returns the spreadsheet at the given ID. The caller must specify the spreadsheet ID. This method differs from GetSpreadsheet in that it allows selecting which subsets of spreadsheet data to return by specifying a dataFilters parameter. Multiple DataFilters can be specified. Specifying one or more data filters returns the portions of the spreadsheet that intersect ranges matched by any of the filters. By default, data within grids is not returned. You can include grid data one of 2 ways: * Specify a [field mask](https://developers.google.com/sheets/api/guides/field-masks) listing your desired fields using the `fields` URL parameter in HTTP * Set the includeGridData parameter to true. If a field mask is set, the `includeGridData` parameter is ignored For large spreadsheets, as a best practice, retrieve only the specific spreadsheet fields that you want.
* [sheetsSpreadsheetsSheetsCopyTo](docs/spreadsheets/README.md#sheetsspreadsheetssheetscopyto) - Copies a single sheet from a spreadsheet to another spreadsheet. Returns the properties of the newly created sheet.
* [sheetsSpreadsheetsValuesAppend](docs/spreadsheets/README.md#sheetsspreadsheetsvaluesappend) - Appends values to a spreadsheet. The input range is used to search for existing data and find a "table" within that range. Values will be appended to the next row of the table, starting with the first column of the table. See the [guide](/sheets/api/guides/values#appending_values) and [sample code](/sheets/api/samples/writing#append_values) for specific details of how tables are detected and data is appended. The caller must specify the spreadsheet ID, range, and a valueInputOption. The `valueInputOption` only controls how the input data will be added to the sheet (column-wise or row-wise), it does not influence what cell the data starts being written to.
* [sheetsSpreadsheetsValuesBatchClear](docs/spreadsheets/README.md#sheetsspreadsheetsvaluesbatchclear) - Clears one or more ranges of values from a spreadsheet. The caller must specify the spreadsheet ID and one or more ranges. Only values are cleared -- all other properties of the cell (such as formatting and data validation) are kept.
* [sheetsSpreadsheetsValuesBatchClearByDataFilter](docs/spreadsheets/README.md#sheetsspreadsheetsvaluesbatchclearbydatafilter) - Clears one or more ranges of values from a spreadsheet. The caller must specify the spreadsheet ID and one or more DataFilters. Ranges matching any of the specified data filters will be cleared. Only values are cleared -- all other properties of the cell (such as formatting, data validation, etc..) are kept.
* [sheetsSpreadsheetsValuesBatchGet](docs/spreadsheets/README.md#sheetsspreadsheetsvaluesbatchget) - Returns one or more ranges of values from a spreadsheet. The caller must specify the spreadsheet ID and one or more ranges.
* [sheetsSpreadsheetsValuesBatchGetByDataFilter](docs/spreadsheets/README.md#sheetsspreadsheetsvaluesbatchgetbydatafilter) - Returns one or more ranges of values that match the specified data filters. The caller must specify the spreadsheet ID and one or more DataFilters. Ranges that match any of the data filters in the request will be returned.
* [sheetsSpreadsheetsValuesBatchUpdate](docs/spreadsheets/README.md#sheetsspreadsheetsvaluesbatchupdate) - Sets values in one or more ranges of a spreadsheet. The caller must specify the spreadsheet ID, a valueInputOption, and one or more ValueRanges.
* [sheetsSpreadsheetsValuesBatchUpdateByDataFilter](docs/spreadsheets/README.md#sheetsspreadsheetsvaluesbatchupdatebydatafilter) - Sets values in one or more ranges of a spreadsheet. The caller must specify the spreadsheet ID, a valueInputOption, and one or more DataFilterValueRanges.
* [sheetsSpreadsheetsValuesClear](docs/spreadsheets/README.md#sheetsspreadsheetsvaluesclear) - Clears values from a spreadsheet. The caller must specify the spreadsheet ID and range. Only values are cleared -- all other properties of the cell (such as formatting, data validation, etc..) are kept.
* [sheetsSpreadsheetsValuesGet](docs/spreadsheets/README.md#sheetsspreadsheetsvaluesget) - Returns a range of values from a spreadsheet. The caller must specify the spreadsheet ID and a range.
* [sheetsSpreadsheetsValuesUpdate](docs/spreadsheets/README.md#sheetsspreadsheetsvaluesupdate) - Sets values in a range of a spreadsheet. The caller must specify the spreadsheet ID, range, and a valueInputOption.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
