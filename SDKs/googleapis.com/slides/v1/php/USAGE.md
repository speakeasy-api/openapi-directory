<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SlidesPresentationsBatchUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BatchUpdatePresentationRequest;
use \OpenAPI\OpenAPI\Models\Shared\Request;
use \OpenAPI\OpenAPI\Models\Shared\CreateImageRequest;
use \OpenAPI\OpenAPI\Models\Shared\PageElementProperties;
use \OpenAPI\OpenAPI\Models\Shared\Size;
use \OpenAPI\OpenAPI\Models\Shared\Dimension;
use \OpenAPI\OpenAPI\Models\Shared\DimensionUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\AffineTransform;
use \OpenAPI\OpenAPI\Models\Shared\AffineTransformUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateLineRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateLineRequestCategoryEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateLineRequestLineCategoryEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateParagraphBulletsRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateParagraphBulletsRequestBulletPresetEnum;
use \OpenAPI\OpenAPI\Models\Shared\TableCellLocation;
use \OpenAPI\OpenAPI\Models\Shared\Range;
use \OpenAPI\OpenAPI\Models\Shared\RangeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateShapeRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateShapeRequestShapeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateSheetsChartRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateSheetsChartRequestLinkingModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateSlideRequest;
use \OpenAPI\OpenAPI\Models\Shared\LayoutPlaceholderIdMapping;
use \OpenAPI\OpenAPI\Models\Shared\Placeholder;
use \OpenAPI\OpenAPI\Models\Shared\PlaceholderTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LayoutReference;
use \OpenAPI\OpenAPI\Models\Shared\LayoutReferencePredefinedLayoutEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateTableRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateVideoRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateVideoRequestSourceEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeleteObjectRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteParagraphBulletsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteTableColumnRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteTableRowRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteTextRequest;
use \OpenAPI\OpenAPI\Models\Shared\DuplicateObjectRequest;
use \OpenAPI\OpenAPI\Models\Shared\GroupObjectsRequest;
use \OpenAPI\OpenAPI\Models\Shared\InsertTableColumnsRequest;
use \OpenAPI\OpenAPI\Models\Shared\InsertTableRowsRequest;
use \OpenAPI\OpenAPI\Models\Shared\InsertTextRequest;
use \OpenAPI\OpenAPI\Models\Shared\MergeTableCellsRequest;
use \OpenAPI\OpenAPI\Models\Shared\TableRange;
use \OpenAPI\OpenAPI\Models\Shared\RefreshSheetsChartRequest;
use \OpenAPI\OpenAPI\Models\Shared\ReplaceAllShapesWithImageRequest;
use \OpenAPI\OpenAPI\Models\Shared\SubstringMatchCriteria;
use \OpenAPI\OpenAPI\Models\Shared\ReplaceAllShapesWithImageRequestImageReplaceMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReplaceAllShapesWithImageRequestReplaceMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReplaceAllShapesWithSheetsChartRequest;
use \OpenAPI\OpenAPI\Models\Shared\ReplaceAllShapesWithSheetsChartRequestLinkingModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReplaceAllTextRequest;
use \OpenAPI\OpenAPI\Models\Shared\ReplaceImageRequest;
use \OpenAPI\OpenAPI\Models\Shared\ReplaceImageRequestImageReplaceMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\RerouteLineRequest;
use \OpenAPI\OpenAPI\Models\Shared\UngroupObjectsRequest;
use \OpenAPI\OpenAPI\Models\Shared\UnmergeTableCellsRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateImagePropertiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImageProperties;
use \OpenAPI\OpenAPI\Models\Shared\CropProperties;
use \OpenAPI\OpenAPI\Models\Shared\Link;
use \OpenAPI\OpenAPI\Models\Shared\LinkRelativeLinkEnum;
use \OpenAPI\OpenAPI\Models\Shared\Outline;
use \OpenAPI\OpenAPI\Models\Shared\OutlineDashStyleEnum;
use \OpenAPI\OpenAPI\Models\Shared\OutlineFill;
use \OpenAPI\OpenAPI\Models\Shared\SolidFill;
use \OpenAPI\OpenAPI\Models\Shared\OpaqueColor;
use \OpenAPI\OpenAPI\Models\Shared\RgbColor;
use \OpenAPI\OpenAPI\Models\Shared\OpaqueColorThemeColorEnum;
use \OpenAPI\OpenAPI\Models\Shared\OutlinePropertyStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\Recolor;
use \OpenAPI\OpenAPI\Models\Shared\RecolorNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\ColorStop;
use \OpenAPI\OpenAPI\Models\Shared\Shadow;
use \OpenAPI\OpenAPI\Models\Shared\ShadowAlignmentEnum;
use \OpenAPI\OpenAPI\Models\Shared\ShadowPropertyStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\ShadowTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\UpdateLineCategoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateLineCategoryRequestLineCategoryEnum;
use \OpenAPI\OpenAPI\Models\Shared\UpdateLinePropertiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\LineProperties;
use \OpenAPI\OpenAPI\Models\Shared\LinePropertiesDashStyleEnum;
use \OpenAPI\OpenAPI\Models\Shared\LinePropertiesEndArrowEnum;
use \OpenAPI\OpenAPI\Models\Shared\LineConnection;
use \OpenAPI\OpenAPI\Models\Shared\LineFill;
use \OpenAPI\OpenAPI\Models\Shared\LinePropertiesStartArrowEnum;
use \OpenAPI\OpenAPI\Models\Shared\UpdatePageElementAltTextRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdatePageElementTransformRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdatePageElementTransformRequestApplyModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\UpdatePageElementsZOrderRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdatePageElementsZOrderRequestOperationEnum;
use \OpenAPI\OpenAPI\Models\Shared\UpdatePagePropertiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\PageProperties;
use \OpenAPI\OpenAPI\Models\Shared\ColorScheme;
use \OpenAPI\OpenAPI\Models\Shared\ThemeColorPair;
use \OpenAPI\OpenAPI\Models\Shared\ThemeColorPairTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PageBackgroundFill;
use \OpenAPI\OpenAPI\Models\Shared\PageBackgroundFillPropertyStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\StretchedPictureFill;
use \OpenAPI\OpenAPI\Models\Shared\UpdateParagraphStyleRequest;
use \OpenAPI\OpenAPI\Models\Shared\ParagraphStyle;
use \OpenAPI\OpenAPI\Models\Shared\ParagraphStyleAlignmentEnum;
use \OpenAPI\OpenAPI\Models\Shared\ParagraphStyleDirectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ParagraphStyleSpacingModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\UpdateShapePropertiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ShapeProperties;
use \OpenAPI\OpenAPI\Models\Shared\Autofit;
use \OpenAPI\OpenAPI\Models\Shared\AutofitAutofitTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ShapePropertiesContentAlignmentEnum;
use \OpenAPI\OpenAPI\Models\Shared\ShapeBackgroundFill;
use \OpenAPI\OpenAPI\Models\Shared\ShapeBackgroundFillPropertyStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\UpdateSlidePropertiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\SlideProperties;
use \OpenAPI\OpenAPI\Models\Shared\Page;
use \OpenAPI\OpenAPI\Models\Shared\LayoutProperties;
use \OpenAPI\OpenAPI\Models\Shared\MasterProperties;
use \OpenAPI\OpenAPI\Models\Shared\NotesProperties;
use \OpenAPI\OpenAPI\Models\Shared\PageElement;
use \OpenAPI\OpenAPI\Models\Shared\Group;
use \OpenAPI\OpenAPI\Models\Shared\Image;
use \OpenAPI\OpenAPI\Models\Shared\Line;
use \OpenAPI\OpenAPI\Models\Shared\LineLineCategoryEnum;
use \OpenAPI\OpenAPI\Models\Shared\LineLineTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Shape;
use \OpenAPI\OpenAPI\Models\Shared\ShapeShapeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TextContent;
use \OpenAPI\OpenAPI\Models\Shared\ListT;
use \OpenAPI\OpenAPI\Models\Shared\NestingLevel;
use \OpenAPI\OpenAPI\Models\Shared\TextStyle;
use \OpenAPI\OpenAPI\Models\Shared\OptionalColor;
use \OpenAPI\OpenAPI\Models\Shared\TextStyleBaselineOffsetEnum;
use \OpenAPI\OpenAPI\Models\Shared\WeightedFontFamily;
use \OpenAPI\OpenAPI\Models\Shared\TextElement;
use \OpenAPI\OpenAPI\Models\Shared\AutoText;
use \OpenAPI\OpenAPI\Models\Shared\AutoTextTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ParagraphMarker;
use \OpenAPI\OpenAPI\Models\Shared\Bullet;
use \OpenAPI\OpenAPI\Models\Shared\TextRun;
use \OpenAPI\OpenAPI\Models\Shared\SheetsChart;
use \OpenAPI\OpenAPI\Models\Shared\SheetsChartProperties;
use \OpenAPI\OpenAPI\Models\Shared\Table;
use \OpenAPI\OpenAPI\Models\Shared\TableBorderRow;
use \OpenAPI\OpenAPI\Models\Shared\TableBorderCell;
use \OpenAPI\OpenAPI\Models\Shared\TableBorderProperties;
use \OpenAPI\OpenAPI\Models\Shared\TableBorderPropertiesDashStyleEnum;
use \OpenAPI\OpenAPI\Models\Shared\TableBorderFill;
use \OpenAPI\OpenAPI\Models\Shared\TableColumnProperties;
use \OpenAPI\OpenAPI\Models\Shared\TableRow;
use \OpenAPI\OpenAPI\Models\Shared\TableCell;
use \OpenAPI\OpenAPI\Models\Shared\TableCellProperties;
use \OpenAPI\OpenAPI\Models\Shared\TableCellPropertiesContentAlignmentEnum;
use \OpenAPI\OpenAPI\Models\Shared\TableCellBackgroundFill;
use \OpenAPI\OpenAPI\Models\Shared\TableCellBackgroundFillPropertyStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\TableRowProperties;
use \OpenAPI\OpenAPI\Models\Shared\Video;
use \OpenAPI\OpenAPI\Models\Shared\VideoSourceEnum;
use \OpenAPI\OpenAPI\Models\Shared\VideoProperties;
use \OpenAPI\OpenAPI\Models\Shared\WordArt;
use \OpenAPI\OpenAPI\Models\Shared\PagePageTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\UpdateSlidesPositionRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateTableBorderPropertiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateTableBorderPropertiesRequestBorderPositionEnum;
use \OpenAPI\OpenAPI\Models\Shared\UpdateTableCellPropertiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateTableColumnPropertiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateTableRowPropertiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateTextStyleRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateVideoPropertiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\WriteControl;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SlidesPresentationsBatchUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\SlidesPresentationsBatchUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\SlidesPresentationsBatchUpdateSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\SlidesPresentationsBatchUpdateSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\SlidesPresentationsBatchUpdateSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\SlidesPresentationsBatchUpdateSecurityOption5;
use \OpenAPI\OpenAPI\Models\Operations\SlidesPresentationsBatchUpdateSecurityOption6;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SlidesPresentationsBatchUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->batchUpdatePresentationRequest = new BatchUpdatePresentationRequest();
    $request->batchUpdatePresentationRequest->requests = [
        new Request(),
        new Request(),
        new Request(),
    ];
    $request->batchUpdatePresentationRequest->writeControl = new WriteControl();
    $request->batchUpdatePresentationRequest->writeControl->requiredRevisionId = 'distinctio';
    $request->accessToken = 'quibusdam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nulla';
    $request->fields = 'corrupti';
    $request->key = 'illum';
    $request->oauthToken = 'vel';
    $request->presentationId = 'error';
    $request->prettyPrint = false;
    $request->quotaUser = 'deserunt';
    $request->uploadType = 'suscipit';
    $request->uploadProtocol = 'iure';

    $requestSecurity = new SlidesPresentationsBatchUpdateSecurity();
    $requestSecurity->option1 = new SlidesPresentationsBatchUpdateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->presentations->slidesPresentationsBatchUpdate($request, $requestSecurity);

    if ($response->batchUpdatePresentationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->