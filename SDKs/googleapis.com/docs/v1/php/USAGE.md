<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DocsDocumentsBatchUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BatchUpdateDocumentRequest;
use \OpenAPI\OpenAPI\Models\Shared\Request;
use \OpenAPI\OpenAPI\Models\Shared\CreateFooterRequest;
use \OpenAPI\OpenAPI\Models\Shared\Location;
use \OpenAPI\OpenAPI\Models\Shared\CreateFooterRequestTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateFootnoteRequest;
use \OpenAPI\OpenAPI\Models\Shared\EndOfSegmentLocation;
use \OpenAPI\OpenAPI\Models\Shared\CreateHeaderRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateHeaderRequestTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateNamedRangeRequest;
use \OpenAPI\OpenAPI\Models\Shared\Range;
use \OpenAPI\OpenAPI\Models\Shared\CreateParagraphBulletsRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateParagraphBulletsRequestBulletPresetEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeleteContentRangeRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteFooterRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteHeaderRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteNamedRangeRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteParagraphBulletsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeletePositionedObjectRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteTableColumnRequest;
use \OpenAPI\OpenAPI\Models\Shared\TableCellLocation;
use \OpenAPI\OpenAPI\Models\Shared\DeleteTableRowRequest;
use \OpenAPI\OpenAPI\Models\Shared\InsertInlineImageRequest;
use \OpenAPI\OpenAPI\Models\Shared\Size;
use \OpenAPI\OpenAPI\Models\Shared\Dimension;
use \OpenAPI\OpenAPI\Models\Shared\DimensionUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\InsertPageBreakRequest;
use \OpenAPI\OpenAPI\Models\Shared\InsertSectionBreakRequest;
use \OpenAPI\OpenAPI\Models\Shared\InsertSectionBreakRequestSectionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InsertTableRequest;
use \OpenAPI\OpenAPI\Models\Shared\InsertTableColumnRequest;
use \OpenAPI\OpenAPI\Models\Shared\InsertTableRowRequest;
use \OpenAPI\OpenAPI\Models\Shared\InsertTextRequest;
use \OpenAPI\OpenAPI\Models\Shared\MergeTableCellsRequest;
use \OpenAPI\OpenAPI\Models\Shared\TableRange;
use \OpenAPI\OpenAPI\Models\Shared\PinTableHeaderRowsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ReplaceAllTextRequest;
use \OpenAPI\OpenAPI\Models\Shared\SubstringMatchCriteria;
use \OpenAPI\OpenAPI\Models\Shared\ReplaceImageRequest;
use \OpenAPI\OpenAPI\Models\Shared\ReplaceImageRequestImageReplaceMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReplaceNamedRangeContentRequest;
use \OpenAPI\OpenAPI\Models\Shared\UnmergeTableCellsRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateDocumentStyleRequest;
use \OpenAPI\OpenAPI\Models\Shared\DocumentStyle;
use \OpenAPI\OpenAPI\Models\Shared\Background;
use \OpenAPI\OpenAPI\Models\Shared\OptionalColor;
use \OpenAPI\OpenAPI\Models\Shared\Color;
use \OpenAPI\OpenAPI\Models\Shared\RgbColor;
use \OpenAPI\OpenAPI\Models\Shared\UpdateParagraphStyleRequest;
use \OpenAPI\OpenAPI\Models\Shared\ParagraphStyle;
use \OpenAPI\OpenAPI\Models\Shared\ParagraphStyleAlignmentEnum;
use \OpenAPI\OpenAPI\Models\Shared\ParagraphBorder;
use \OpenAPI\OpenAPI\Models\Shared\ParagraphBorderDashStyleEnum;
use \OpenAPI\OpenAPI\Models\Shared\ParagraphStyleDirectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ParagraphStyleNamedStyleTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Shading;
use \OpenAPI\OpenAPI\Models\Shared\ParagraphStyleSpacingModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TabStop;
use \OpenAPI\OpenAPI\Models\Shared\TabStopAlignmentEnum;
use \OpenAPI\OpenAPI\Models\Shared\UpdateSectionStyleRequest;
use \OpenAPI\OpenAPI\Models\Shared\SectionStyle;
use \OpenAPI\OpenAPI\Models\Shared\SectionColumnProperties;
use \OpenAPI\OpenAPI\Models\Shared\SectionStyleColumnSeparatorStyleEnum;
use \OpenAPI\OpenAPI\Models\Shared\SectionStyleContentDirectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\SectionStyleSectionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\UpdateTableCellStyleRequest;
use \OpenAPI\OpenAPI\Models\Shared\TableCellStyle;
use \OpenAPI\OpenAPI\Models\Shared\TableCellBorder;
use \OpenAPI\OpenAPI\Models\Shared\TableCellBorderDashStyleEnum;
use \OpenAPI\OpenAPI\Models\Shared\TableCellStyleContentAlignmentEnum;
use \OpenAPI\OpenAPI\Models\Shared\UpdateTableColumnPropertiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\TableColumnProperties;
use \OpenAPI\OpenAPI\Models\Shared\TableColumnPropertiesWidthTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\UpdateTableRowStyleRequest;
use \OpenAPI\OpenAPI\Models\Shared\TableRowStyle;
use \OpenAPI\OpenAPI\Models\Shared\UpdateTextStyleRequest;
use \OpenAPI\OpenAPI\Models\Shared\TextStyle;
use \OpenAPI\OpenAPI\Models\Shared\TextStyleBaselineOffsetEnum;
use \OpenAPI\OpenAPI\Models\Shared\Link;
use \OpenAPI\OpenAPI\Models\Shared\WeightedFontFamily;
use \OpenAPI\OpenAPI\Models\Shared\WriteControl;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DocsDocumentsBatchUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DocsDocumentsBatchUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DocsDocumentsBatchUpdateSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DocsDocumentsBatchUpdateSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DocsDocumentsBatchUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->batchUpdateDocumentRequest = new BatchUpdateDocumentRequest();
    $request->batchUpdateDocumentRequest->requests = [
        new Request(),
        new Request(),
        new Request(),
    ];
    $request->batchUpdateDocumentRequest->writeControl = new WriteControl();
    $request->batchUpdateDocumentRequest->writeControl->requiredRevisionId = 'distinctio';
    $request->batchUpdateDocumentRequest->writeControl->targetRevisionId = 'quibusdam';
    $request->accessToken = 'unde';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'corrupti';
    $request->documentId = 'illum';
    $request->fields = 'vel';
    $request->key = 'error';
    $request->oauthToken = 'deserunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'suscipit';
    $request->uploadType = 'iure';
    $request->uploadProtocol = 'magnam';

    $requestSecurity = new DocsDocumentsBatchUpdateSecurity();
    $requestSecurity->option1 = new DocsDocumentsBatchUpdateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->documents->docsDocumentsBatchUpdate($request, $requestSecurity);

    if ($response->batchUpdateDocumentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->