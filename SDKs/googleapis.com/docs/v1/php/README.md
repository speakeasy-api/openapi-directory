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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [documents](docs/documents/README.md)

* [docsDocumentsBatchUpdate](docs/documents/README.md#docsdocumentsbatchupdate) - Applies one or more updates to the document. Each request is validated before being applied. If any request is not valid, then the entire request will fail and nothing will be applied. Some requests have replies to give you some information about how they are applied. Other requests do not need to return information; these each return an empty reply. The order of replies matches that of the requests. For example, suppose you call batchUpdate with four updates, and only the third one returns information. The response would have two empty replies, the reply to the third request, and another empty reply, in that order. Because other users may be editing the document, the document might not exactly reflect your changes: your changes may be altered with respect to collaborator changes. If there are no collaborators, the document should reflect your changes. In any case, the updates in your request are guaranteed to be applied together atomically.
* [docsDocumentsCreate](docs/documents/README.md#docsdocumentscreate) - Creates a blank document using the title given in the request. Other fields in the request, including any provided content, are ignored. Returns the created document.
* [docsDocumentsGet](docs/documents/README.md#docsdocumentsget) - Gets the latest version of the specified document.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
