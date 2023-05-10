# documents

### Available Operations

* [docsDocumentsBatchUpdate](#docsdocumentsbatchupdate) - Applies one or more updates to the document. Each request is validated before being applied. If any request is not valid, then the entire request will fail and nothing will be applied. Some requests have replies to give you some information about how they are applied. Other requests do not need to return information; these each return an empty reply. The order of replies matches that of the requests. For example, suppose you call batchUpdate with four updates, and only the third one returns information. The response would have two empty replies, the reply to the third request, and another empty reply, in that order. Because other users may be editing the document, the document might not exactly reflect your changes: your changes may be altered with respect to collaborator changes. If there are no collaborators, the document should reflect your changes. In any case, the updates in your request are guaranteed to be applied together atomically.
* [docsDocumentsCreate](#docsdocumentscreate) - Creates a blank document using the title given in the request. Other fields in the request, including any provided content, are ignored. Returns the created document.
* [docsDocumentsGet](#docsdocumentsget) - Gets the latest version of the specified document.

## docsDocumentsBatchUpdate

Applies one or more updates to the document. Each request is validated before being applied. If any request is not valid, then the entire request will fail and nothing will be applied. Some requests have replies to give you some information about how they are applied. Other requests do not need to return information; these each return an empty reply. The order of replies matches that of the requests. For example, suppose you call batchUpdate with four updates, and only the third one returns information. The response would have two empty replies, the reply to the third request, and another empty reply, in that order. Because other users may be editing the document, the document might not exactly reflect your changes: your changes may be altered with respect to collaborator changes. If there are no collaborators, the document should reflect your changes. In any case, the updates in your request are guaranteed to be applied together atomically.

### Example Usage

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
    ];
    $request->batchUpdateDocumentRequest->writeControl = new WriteControl();
    $request->batchUpdateDocumentRequest->writeControl->requiredRevisionId = 'delectus';
    $request->batchUpdateDocumentRequest->writeControl->targetRevisionId = 'tempora';
    $request->accessToken = 'suscipit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'minus';
    $request->documentId = 'placeat';
    $request->fields = 'voluptatum';
    $request->key = 'iusto';
    $request->oauthToken = 'excepturi';
    $request->prettyPrint = false;
    $request->quotaUser = 'nisi';
    $request->uploadType = 'recusandae';
    $request->uploadProtocol = 'temporibus';

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

## docsDocumentsCreate

Creates a blank document using the title given in the request. Other fields in the request, including any provided content, are ignored. Returns the created document.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DocsDocumentsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\DocumentInput;
use \OpenAPI\OpenAPI\Models\Shared\BodyInput;
use \OpenAPI\OpenAPI\Models\Shared\StructuralElementInput;
use \OpenAPI\OpenAPI\Models\Shared\ParagraphInput;
use \OpenAPI\OpenAPI\Models\Shared\Bullet;
use \OpenAPI\OpenAPI\Models\Shared\TextStyle;
use \OpenAPI\OpenAPI\Models\Shared\OptionalColor;
use \OpenAPI\OpenAPI\Models\Shared\Color;
use \OpenAPI\OpenAPI\Models\Shared\RgbColor;
use \OpenAPI\OpenAPI\Models\Shared\TextStyleBaselineOffsetEnum;
use \OpenAPI\OpenAPI\Models\Shared\Dimension;
use \OpenAPI\OpenAPI\Models\Shared\DimensionUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\Link;
use \OpenAPI\OpenAPI\Models\Shared\WeightedFontFamily;
use \OpenAPI\OpenAPI\Models\Shared\ParagraphElementInput;
use \OpenAPI\OpenAPI\Models\Shared\AutoText;
use \OpenAPI\OpenAPI\Models\Shared\SuggestedTextStyle;
use \OpenAPI\OpenAPI\Models\Shared\TextStyleSuggestionState;
use \OpenAPI\OpenAPI\Models\Shared\AutoTextTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ColumnBreak;
use \OpenAPI\OpenAPI\Models\Shared\Equation;
use \OpenAPI\OpenAPI\Models\Shared\FootnoteReference;
use \OpenAPI\OpenAPI\Models\Shared\HorizontalRule;
use \OpenAPI\OpenAPI\Models\Shared\InlineObjectElement;
use \OpenAPI\OpenAPI\Models\Shared\PageBreak;
use \OpenAPI\OpenAPI\Models\Shared\PersonInput;
use \OpenAPI\OpenAPI\Models\Shared\RichLinkInput;
use \OpenAPI\OpenAPI\Models\Shared\TextRun;
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
use \OpenAPI\OpenAPI\Models\Shared\SuggestedBullet;
use \OpenAPI\OpenAPI\Models\Shared\BulletSuggestionState;
use \OpenAPI\OpenAPI\Models\Shared\SuggestedParagraphStyle;
use \OpenAPI\OpenAPI\Models\Shared\ParagraphStyleSuggestionState;
use \OpenAPI\OpenAPI\Models\Shared\ShadingSuggestionState;
use \OpenAPI\OpenAPI\Models\Shared\ObjectReferences;
use \OpenAPI\OpenAPI\Models\Shared\SectionBreak;
use \OpenAPI\OpenAPI\Models\Shared\SectionStyle;
use \OpenAPI\OpenAPI\Models\Shared\SectionColumnProperties;
use \OpenAPI\OpenAPI\Models\Shared\SectionStyleColumnSeparatorStyleEnum;
use \OpenAPI\OpenAPI\Models\Shared\SectionStyleContentDirectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\SectionStyleSectionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Table;
use \OpenAPI\OpenAPI\Models\Shared\TableRow;
use \OpenAPI\OpenAPI\Models\Shared\SuggestedTableRowStyle;
use \OpenAPI\OpenAPI\Models\Shared\TableRowStyle;
use \OpenAPI\OpenAPI\Models\Shared\TableRowStyleSuggestionState;
use \OpenAPI\OpenAPI\Models\Shared\TableCell;
use \OpenAPI\OpenAPI\Models\Shared\StructuralElement;
use \OpenAPI\OpenAPI\Models\Shared\SuggestedTableCellStyle;
use \OpenAPI\OpenAPI\Models\Shared\TableCellStyle;
use \OpenAPI\OpenAPI\Models\Shared\TableCellBorder;
use \OpenAPI\OpenAPI\Models\Shared\TableCellBorderDashStyleEnum;
use \OpenAPI\OpenAPI\Models\Shared\TableCellStyleContentAlignmentEnum;
use \OpenAPI\OpenAPI\Models\Shared\TableCellStyleSuggestionState;
use \OpenAPI\OpenAPI\Models\Shared\TableStyle;
use \OpenAPI\OpenAPI\Models\Shared\TableColumnProperties;
use \OpenAPI\OpenAPI\Models\Shared\TableColumnPropertiesWidthTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TableOfContents;
use \OpenAPI\OpenAPI\Models\Shared\DocumentStyle;
use \OpenAPI\OpenAPI\Models\Shared\Background;
use \OpenAPI\OpenAPI\Models\Shared\Size;
use \OpenAPI\OpenAPI\Models\Shared\FooterInput;
use \OpenAPI\OpenAPI\Models\Shared\FootnoteInput;
use \OpenAPI\OpenAPI\Models\Shared\HeaderInput;
use \OpenAPI\OpenAPI\Models\Shared\InlineObject;
use \OpenAPI\OpenAPI\Models\Shared\InlineObjectProperties;
use \OpenAPI\OpenAPI\Models\Shared\EmbeddedObject;
use \OpenAPI\OpenAPI\Models\Shared\EmbeddedObjectBorder;
use \OpenAPI\OpenAPI\Models\Shared\EmbeddedObjectBorderDashStyleEnum;
use \OpenAPI\OpenAPI\Models\Shared\EmbeddedObjectBorderPropertyStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\ImageProperties;
use \OpenAPI\OpenAPI\Models\Shared\CropProperties;
use \OpenAPI\OpenAPI\Models\Shared\LinkedContentReference;
use \OpenAPI\OpenAPI\Models\Shared\SheetsChartReference;
use \OpenAPI\OpenAPI\Models\Shared\SuggestedInlineObjectProperties;
use \OpenAPI\OpenAPI\Models\Shared\InlineObjectPropertiesSuggestionState;
use \OpenAPI\OpenAPI\Models\Shared\EmbeddedObjectSuggestionState;
use \OpenAPI\OpenAPI\Models\Shared\EmbeddedObjectBorderSuggestionState;
use \OpenAPI\OpenAPI\Models\Shared\ImagePropertiesSuggestionState;
use \OpenAPI\OpenAPI\Models\Shared\CropPropertiesSuggestionState;
use \OpenAPI\OpenAPI\Models\Shared\LinkedContentReferenceSuggestionState;
use \OpenAPI\OpenAPI\Models\Shared\SheetsChartReferenceSuggestionState;
use \OpenAPI\OpenAPI\Models\Shared\SizeSuggestionState;
use \OpenAPI\OpenAPI\Models\Shared\ListT;
use \OpenAPI\OpenAPI\Models\Shared\ListProperties;
use \OpenAPI\OpenAPI\Models\Shared\NestingLevel;
use \OpenAPI\OpenAPI\Models\Shared\NestingLevelBulletAlignmentEnum;
use \OpenAPI\OpenAPI\Models\Shared\NestingLevelGlyphTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SuggestedListProperties;
use \OpenAPI\OpenAPI\Models\Shared\ListPropertiesSuggestionState;
use \OpenAPI\OpenAPI\Models\Shared\NestingLevelSuggestionState;
use \OpenAPI\OpenAPI\Models\Shared\NamedRanges;
use \OpenAPI\OpenAPI\Models\Shared\NamedRange;
use \OpenAPI\OpenAPI\Models\Shared\Range;
use \OpenAPI\OpenAPI\Models\Shared\NamedStyles;
use \OpenAPI\OpenAPI\Models\Shared\NamedStyle;
use \OpenAPI\OpenAPI\Models\Shared\NamedStyleNamedStyleTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PositionedObject;
use \OpenAPI\OpenAPI\Models\Shared\PositionedObjectProperties;
use \OpenAPI\OpenAPI\Models\Shared\PositionedObjectPositioning;
use \OpenAPI\OpenAPI\Models\Shared\PositionedObjectPositioningLayoutEnum;
use \OpenAPI\OpenAPI\Models\Shared\SuggestedPositionedObjectProperties;
use \OpenAPI\OpenAPI\Models\Shared\PositionedObjectPropertiesSuggestionState;
use \OpenAPI\OpenAPI\Models\Shared\PositionedObjectPositioningSuggestionState;
use \OpenAPI\OpenAPI\Models\Shared\SuggestedDocumentStyle;
use \OpenAPI\OpenAPI\Models\Shared\DocumentStyleSuggestionState;
use \OpenAPI\OpenAPI\Models\Shared\BackgroundSuggestionState;
use \OpenAPI\OpenAPI\Models\Shared\SuggestedNamedStyles;
use \OpenAPI\OpenAPI\Models\Shared\NamedStylesSuggestionState;
use \OpenAPI\OpenAPI\Models\Shared\NamedStyleSuggestionState;
use \OpenAPI\OpenAPI\Models\Shared\NamedStyleSuggestionStateNamedStyleTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DocumentSuggestionsViewModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DocsDocumentsCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DocsDocumentsCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DocsDocumentsCreateSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DocsDocumentsCreateSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DocsDocumentsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->documentInput = new DocumentInput();
    $request->documentInput->body = new BodyInput();
    $request->documentInput->body->content = [
        new StructuralElementInput(),
        new StructuralElementInput(),
    ];
    $request->documentInput->documentId = 'veritatis';
    $request->documentInput->documentStyle = new DocumentStyle();
    $request->documentInput->documentStyle->background = new Background();
    $request->documentInput->documentStyle->background->color = new OptionalColor();
    $request->documentInput->documentStyle->background->color->color = new Color();
    $request->documentInput->documentStyle->background->color->color->rgbColor = new RgbColor();
    $request->documentInput->documentStyle->background->color->color->rgbColor->blue = 6481.72;
    $request->documentInput->documentStyle->background->color->color->rgbColor->green = 202.18;
    $request->documentInput->documentStyle->background->color->color->rgbColor->red = 3682.41;
    $request->documentInput->documentStyle->defaultFooterId = 'repellendus';
    $request->documentInput->documentStyle->defaultHeaderId = 'sapiente';
    $request->documentInput->documentStyle->evenPageFooterId = 'quo';
    $request->documentInput->documentStyle->evenPageHeaderId = 'odit';
    $request->documentInput->documentStyle->firstPageFooterId = 'at';
    $request->documentInput->documentStyle->firstPageHeaderId = 'at';
    $request->documentInput->documentStyle->marginBottom = new Dimension();
    $request->documentInput->documentStyle->marginBottom->magnitude = 9786.19;
    $request->documentInput->documentStyle->marginBottom->unit = DimensionUnitEnum::UNIT_UNSPECIFIED;
    $request->documentInput->documentStyle->marginFooter = new Dimension();
    $request->documentInput->documentStyle->marginFooter->magnitude = 7991.59;
    $request->documentInput->documentStyle->marginFooter->unit = DimensionUnitEnum::PT;
    $request->documentInput->documentStyle->marginHeader = new Dimension();
    $request->documentInput->documentStyle->marginHeader->magnitude = 4614.79;
    $request->documentInput->documentStyle->marginHeader->unit = DimensionUnitEnum::PT;
    $request->documentInput->documentStyle->marginLeft = new Dimension();
    $request->documentInput->documentStyle->marginLeft->magnitude = 7805.29;
    $request->documentInput->documentStyle->marginLeft->unit = DimensionUnitEnum::PT;
    $request->documentInput->documentStyle->marginRight = new Dimension();
    $request->documentInput->documentStyle->marginRight->magnitude = 1182.74;
    $request->documentInput->documentStyle->marginRight->unit = DimensionUnitEnum::PT;
    $request->documentInput->documentStyle->marginTop = new Dimension();
    $request->documentInput->documentStyle->marginTop->magnitude = 6399.21;
    $request->documentInput->documentStyle->marginTop->unit = DimensionUnitEnum::PT;
    $request->documentInput->documentStyle->pageNumberStart = 143353;
    $request->documentInput->documentStyle->pageSize = new Size();
    $request->documentInput->documentStyle->pageSize->height = new Dimension();
    $request->documentInput->documentStyle->pageSize->height->magnitude = 5373.73;
    $request->documentInput->documentStyle->pageSize->height->unit = DimensionUnitEnum::PT;
    $request->documentInput->documentStyle->pageSize->width = new Dimension();
    $request->documentInput->documentStyle->pageSize->width->magnitude = 7586.16;
    $request->documentInput->documentStyle->pageSize->width->unit = DimensionUnitEnum::PT;
    $request->documentInput->documentStyle->useCustomHeaderFooterMargins = false;
    $request->documentInput->documentStyle->useEvenPageHeaderFooter = false;
    $request->documentInput->documentStyle->useFirstPageHeaderFooter = false;
    $request->documentInput->footers = [
        'commodi' => new FooterInput(),
    ];
    $request->documentInput->footnotes = [
        'modi' => new FootnoteInput(),
        'qui' => new FootnoteInput(),
    ];
    $request->documentInput->headers = [
        'cum' => new HeaderInput(),
        'esse' => new HeaderInput(),
        'ipsum' => new HeaderInput(),
        'excepturi' => new HeaderInput(),
    ];
    $request->documentInput->inlineObjects = [
        'perferendis' => new InlineObject(),
    ];
    $request->documentInput->lists = [
        'natus' => new ListT(),
        'sed' => new ListT(),
    ];
    $request->documentInput->namedRanges = [
        'dolor' => new NamedRanges(),
        'natus' => new NamedRanges(),
        'laboriosam' => new NamedRanges(),
    ];
    $request->documentInput->namedStyles = new NamedStyles();
    $request->documentInput->namedStyles->styles = [
        new NamedStyle(),
        new NamedStyle(),
        new NamedStyle(),
        new NamedStyle(),
    ];
    $request->documentInput->positionedObjects = [
        'fuga' => new PositionedObject(),
        'in' => new PositionedObject(),
        'corporis' => new PositionedObject(),
        'iste' => new PositionedObject(),
    ];
    $request->documentInput->revisionId = 'iure';
    $request->documentInput->suggestedDocumentStyleChanges = [
        'quidem' => new SuggestedDocumentStyle(),
        'architecto' => new SuggestedDocumentStyle(),
        'ipsa' => new SuggestedDocumentStyle(),
        'reiciendis' => new SuggestedDocumentStyle(),
    ];
    $request->documentInput->suggestedNamedStylesChanges = [
        'mollitia' => new SuggestedNamedStyles(),
        'laborum' => new SuggestedNamedStyles(),
        'dolores' => new SuggestedNamedStyles(),
    ];
    $request->documentInput->suggestionsViewMode = DocumentSuggestionsViewModeEnum::DEFAULT_FOR_CURRENT_ACCESS;
    $request->documentInput->title = 'Mrs.';
    $request->accessToken = 'explicabo';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'enim';
    $request->fields = 'omnis';
    $request->key = 'nemo';
    $request->oauthToken = 'minima';
    $request->prettyPrint = false;
    $request->quotaUser = 'excepturi';
    $request->uploadType = 'accusantium';
    $request->uploadProtocol = 'iure';

    $requestSecurity = new DocsDocumentsCreateSecurity();
    $requestSecurity->option1 = new DocsDocumentsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->documents->docsDocumentsCreate($request, $requestSecurity);

    if ($response->document !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## docsDocumentsGet

Gets the latest version of the specified document.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DocsDocumentsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DocsDocumentsGetSuggestionsViewModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DocsDocumentsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DocsDocumentsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DocsDocumentsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DocsDocumentsGetSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DocsDocumentsGetSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\DocsDocumentsGetSecurityOption5;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DocsDocumentsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'doloribus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'architecto';
    $request->documentId = 'mollitia';
    $request->fields = 'dolorem';
    $request->key = 'culpa';
    $request->oauthToken = 'consequuntur';
    $request->prettyPrint = false;
    $request->quotaUser = 'repellat';
    $request->suggestionsViewMode = DocsDocumentsGetSuggestionsViewModeEnum::PREVIEW_SUGGESTIONS_ACCEPTED;
    $request->uploadType = 'occaecati';
    $request->uploadProtocol = 'numquam';

    $requestSecurity = new DocsDocumentsGetSecurity();
    $requestSecurity->option1 = new DocsDocumentsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->documents->docsDocumentsGet($request, $requestSecurity);

    if ($response->document !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
