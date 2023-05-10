# mylibrary

### Available Operations

* [booksMylibraryAnnotationsDelete](#booksmylibraryannotationsdelete) - Deletes an annotation.
* [booksMylibraryAnnotationsInsert](#booksmylibraryannotationsinsert) - Inserts a new annotation.
* [booksMylibraryAnnotationsList](#booksmylibraryannotationslist) - Retrieves a list of annotations, possibly filtered.
* [booksMylibraryAnnotationsSummary](#booksmylibraryannotationssummary) - Gets the summary of specified layers.
* [booksMylibraryAnnotationsUpdate](#booksmylibraryannotationsupdate) - Updates an existing annotation.
* [booksMylibraryBookshelvesAddVolume](#booksmylibrarybookshelvesaddvolume) - Adds a volume to a bookshelf.
* [booksMylibraryBookshelvesClearVolumes](#booksmylibrarybookshelvesclearvolumes) - Clears all volumes from a bookshelf.
* [booksMylibraryBookshelvesGet](#booksmylibrarybookshelvesget) - Retrieves metadata for a specific bookshelf belonging to the authenticated user.
* [booksMylibraryBookshelvesList](#booksmylibrarybookshelveslist) - Retrieves a list of bookshelves belonging to the authenticated user.
* [booksMylibraryBookshelvesMoveVolume](#booksmylibrarybookshelvesmovevolume) - Moves a volume within a bookshelf.
* [booksMylibraryBookshelvesRemoveVolume](#booksmylibrarybookshelvesremovevolume) - Removes a volume from a bookshelf.
* [booksMylibraryBookshelvesVolumesList](#booksmylibrarybookshelvesvolumeslist) - Gets volume information for volumes on a bookshelf.
* [booksMylibraryReadingpositionsGet](#booksmylibraryreadingpositionsget) - Retrieves my reading position information for a volume.
* [booksMylibraryReadingpositionsSetPosition](#booksmylibraryreadingpositionssetposition) - Sets my reading position information for a volume.

## booksMylibraryAnnotationsDelete

Deletes an annotation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BooksMylibraryAnnotationsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BooksMylibraryAnnotationsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BooksMylibraryAnnotationsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'hic';
    $request->alt = AltEnum::PROTO;
    $request->annotationId = 'nobis';
    $request->callback = 'dolores';
    $request->fields = 'quis';
    $request->key = 'totam';
    $request->oauthToken = 'dignissimos';
    $request->prettyPrint = false;
    $request->quotaUser = 'eaque';
    $request->source = 'quis';
    $request->uploadType = 'nesciunt';
    $request->uploadProtocol = 'eos';

    $requestSecurity = new BooksMylibraryAnnotationsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->mylibrary->booksMylibraryAnnotationsDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## booksMylibraryAnnotationsInsert

Inserts a new annotation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BooksMylibraryAnnotationsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Annotation;
use \OpenAPI\OpenAPI\Models\Shared\AnnotationClientVersionRanges;
use \OpenAPI\OpenAPI\Models\Shared\BooksAnnotationsRange;
use \OpenAPI\OpenAPI\Models\Shared\AnnotationCurrentVersionRanges;
use \OpenAPI\OpenAPI\Models\Shared\AnnotationLayerSummary;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BooksMylibraryAnnotationsInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BooksMylibraryAnnotationsInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->annotation = new Annotation();
    $request->annotation->afterSelectedText = 'dolores';
    $request->annotation->beforeSelectedText = 'minus';
    $request->annotation->clientVersionRanges = new AnnotationClientVersionRanges();
    $request->annotation->clientVersionRanges->cfiRange = new BooksAnnotationsRange();
    $request->annotation->clientVersionRanges->cfiRange->endOffset = 'quam';
    $request->annotation->clientVersionRanges->cfiRange->endPosition = 'dolor';
    $request->annotation->clientVersionRanges->cfiRange->startOffset = 'vero';
    $request->annotation->clientVersionRanges->cfiRange->startPosition = 'nostrum';
    $request->annotation->clientVersionRanges->contentVersion = 'hic';
    $request->annotation->clientVersionRanges->gbImageRange = new BooksAnnotationsRange();
    $request->annotation->clientVersionRanges->gbImageRange->endOffset = 'recusandae';
    $request->annotation->clientVersionRanges->gbImageRange->endPosition = 'omnis';
    $request->annotation->clientVersionRanges->gbImageRange->startOffset = 'facilis';
    $request->annotation->clientVersionRanges->gbImageRange->startPosition = 'perspiciatis';
    $request->annotation->clientVersionRanges->gbTextRange = new BooksAnnotationsRange();
    $request->annotation->clientVersionRanges->gbTextRange->endOffset = 'voluptatem';
    $request->annotation->clientVersionRanges->gbTextRange->endPosition = 'porro';
    $request->annotation->clientVersionRanges->gbTextRange->startOffset = 'consequuntur';
    $request->annotation->clientVersionRanges->gbTextRange->startPosition = 'blanditiis';
    $request->annotation->clientVersionRanges->imageCfiRange = new BooksAnnotationsRange();
    $request->annotation->clientVersionRanges->imageCfiRange->endOffset = 'error';
    $request->annotation->clientVersionRanges->imageCfiRange->endPosition = 'eaque';
    $request->annotation->clientVersionRanges->imageCfiRange->startOffset = 'occaecati';
    $request->annotation->clientVersionRanges->imageCfiRange->startPosition = 'rerum';
    $request->annotation->created = 'adipisci';
    $request->annotation->currentVersionRanges = new AnnotationCurrentVersionRanges();
    $request->annotation->currentVersionRanges->cfiRange = new BooksAnnotationsRange();
    $request->annotation->currentVersionRanges->cfiRange->endOffset = 'asperiores';
    $request->annotation->currentVersionRanges->cfiRange->endPosition = 'earum';
    $request->annotation->currentVersionRanges->cfiRange->startOffset = 'modi';
    $request->annotation->currentVersionRanges->cfiRange->startPosition = 'iste';
    $request->annotation->currentVersionRanges->contentVersion = 'dolorum';
    $request->annotation->currentVersionRanges->gbImageRange = new BooksAnnotationsRange();
    $request->annotation->currentVersionRanges->gbImageRange->endOffset = 'deleniti';
    $request->annotation->currentVersionRanges->gbImageRange->endPosition = 'pariatur';
    $request->annotation->currentVersionRanges->gbImageRange->startOffset = 'provident';
    $request->annotation->currentVersionRanges->gbImageRange->startPosition = 'nobis';
    $request->annotation->currentVersionRanges->gbTextRange = new BooksAnnotationsRange();
    $request->annotation->currentVersionRanges->gbTextRange->endOffset = 'libero';
    $request->annotation->currentVersionRanges->gbTextRange->endPosition = 'delectus';
    $request->annotation->currentVersionRanges->gbTextRange->startOffset = 'quaerat';
    $request->annotation->currentVersionRanges->gbTextRange->startPosition = 'quos';
    $request->annotation->currentVersionRanges->imageCfiRange = new BooksAnnotationsRange();
    $request->annotation->currentVersionRanges->imageCfiRange->endOffset = 'aliquid';
    $request->annotation->currentVersionRanges->imageCfiRange->endPosition = 'dolorem';
    $request->annotation->currentVersionRanges->imageCfiRange->startOffset = 'dolorem';
    $request->annotation->currentVersionRanges->imageCfiRange->startPosition = 'dolor';
    $request->annotation->data = 'qui';
    $request->annotation->deleted = false;
    $request->annotation->highlightStyle = 'ipsum';
    $request->annotation->id = 'f9b77f3a-4100-4674-abf6-9280d1ba77a8';
    $request->annotation->kind = 'omnis';
    $request->annotation->layerId = 'necessitatibus';
    $request->annotation->layerSummary = new AnnotationLayerSummary();
    $request->annotation->layerSummary->allowedCharacterCount = 714697;
    $request->annotation->layerSummary->limitType = 'asperiores';
    $request->annotation->layerSummary->remainingCharacterCount = 469497;
    $request->annotation->pageIds = [
        'voluptate',
    ];
    $request->annotation->selectedText = 'id';
    $request->annotation->selfLink = 'saepe';
    $request->annotation->updated = 'eius';
    $request->annotation->volumeId = 'aspernatur';
    $request->accessToken = 'perferendis';
    $request->alt = AltEnum::JSON;
    $request->annotationId = 'optio';
    $request->callback = 'accusamus';
    $request->country = 'Germany';
    $request->fields = 'saepe';
    $request->key = 'suscipit';
    $request->oauthToken = 'deserunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'provident';
    $request->showOnlySummaryInResponse = false;
    $request->source = 'minima';
    $request->uploadType = 'repellendus';
    $request->uploadProtocol = 'totam';

    $requestSecurity = new BooksMylibraryAnnotationsInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->mylibrary->booksMylibraryAnnotationsInsert($request, $requestSecurity);

    if ($response->annotation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## booksMylibraryAnnotationsList

Retrieves a list of annotations, possibly filtered.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BooksMylibraryAnnotationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BooksMylibraryAnnotationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BooksMylibraryAnnotationsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'alias';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quaerat';
    $request->contentVersion = 'tempora';
    $request->fields = 'vel';
    $request->key = 'quod';
    $request->layerId = 'officiis';
    $request->layerIds = [
        'dolorum',
    ];
    $request->maxResults = 952792;
    $request->oauthToken = 'esse';
    $request->pageToken = 'harum';
    $request->prettyPrint = false;
    $request->quotaUser = 'iusto';
    $request->showDeleted = false;
    $request->source = 'ipsum';
    $request->updatedMax = 'quisquam';
    $request->updatedMin = 'tenetur';
    $request->uploadType = 'amet';
    $request->uploadProtocol = 'tempore';
    $request->volumeId = 'accusamus';

    $requestSecurity = new BooksMylibraryAnnotationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->mylibrary->booksMylibraryAnnotationsList($request, $requestSecurity);

    if ($response->annotations !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## booksMylibraryAnnotationsSummary

Gets the summary of specified layers.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BooksMylibraryAnnotationsSummaryRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BooksMylibraryAnnotationsSummarySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BooksMylibraryAnnotationsSummaryRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'enim';
    $request->alt = AltEnum::JSON;
    $request->callback = 'sapiente';
    $request->fields = 'totam';
    $request->key = 'nihil';
    $request->layerIds = [
        'expedita',
    ];
    $request->oauthToken = 'neque';
    $request->prettyPrint = false;
    $request->quotaUser = 'sed';
    $request->uploadType = 'vel';
    $request->uploadProtocol = 'libero';
    $request->volumeId = 'voluptas';

    $requestSecurity = new BooksMylibraryAnnotationsSummarySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->mylibrary->booksMylibraryAnnotationsSummary($request, $requestSecurity);

    if ($response->annotationsSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## booksMylibraryAnnotationsUpdate

Updates an existing annotation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BooksMylibraryAnnotationsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Annotation;
use \OpenAPI\OpenAPI\Models\Shared\AnnotationClientVersionRanges;
use \OpenAPI\OpenAPI\Models\Shared\BooksAnnotationsRange;
use \OpenAPI\OpenAPI\Models\Shared\AnnotationCurrentVersionRanges;
use \OpenAPI\OpenAPI\Models\Shared\AnnotationLayerSummary;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BooksMylibraryAnnotationsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BooksMylibraryAnnotationsUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->annotation = new Annotation();
    $request->annotation->afterSelectedText = 'quam';
    $request->annotation->beforeSelectedText = 'ipsum';
    $request->annotation->clientVersionRanges = new AnnotationClientVersionRanges();
    $request->annotation->clientVersionRanges->cfiRange = new BooksAnnotationsRange();
    $request->annotation->clientVersionRanges->cfiRange->endOffset = 'incidunt';
    $request->annotation->clientVersionRanges->cfiRange->endPosition = 'qui';
    $request->annotation->clientVersionRanges->cfiRange->startOffset = 'cupiditate';
    $request->annotation->clientVersionRanges->cfiRange->startPosition = 'maxime';
    $request->annotation->clientVersionRanges->contentVersion = 'pariatur';
    $request->annotation->clientVersionRanges->gbImageRange = new BooksAnnotationsRange();
    $request->annotation->clientVersionRanges->gbImageRange->endOffset = 'soluta';
    $request->annotation->clientVersionRanges->gbImageRange->endPosition = 'dicta';
    $request->annotation->clientVersionRanges->gbImageRange->startOffset = 'laborum';
    $request->annotation->clientVersionRanges->gbImageRange->startPosition = 'totam';
    $request->annotation->clientVersionRanges->gbTextRange = new BooksAnnotationsRange();
    $request->annotation->clientVersionRanges->gbTextRange->endOffset = 'incidunt';
    $request->annotation->clientVersionRanges->gbTextRange->endPosition = 'aspernatur';
    $request->annotation->clientVersionRanges->gbTextRange->startOffset = 'dolores';
    $request->annotation->clientVersionRanges->gbTextRange->startPosition = 'distinctio';
    $request->annotation->clientVersionRanges->imageCfiRange = new BooksAnnotationsRange();
    $request->annotation->clientVersionRanges->imageCfiRange->endOffset = 'facilis';
    $request->annotation->clientVersionRanges->imageCfiRange->endPosition = 'aliquid';
    $request->annotation->clientVersionRanges->imageCfiRange->startOffset = 'quam';
    $request->annotation->clientVersionRanges->imageCfiRange->startPosition = 'molestias';
    $request->annotation->created = 'temporibus';
    $request->annotation->currentVersionRanges = new AnnotationCurrentVersionRanges();
    $request->annotation->currentVersionRanges->cfiRange = new BooksAnnotationsRange();
    $request->annotation->currentVersionRanges->cfiRange->endOffset = 'qui';
    $request->annotation->currentVersionRanges->cfiRange->endPosition = 'neque';
    $request->annotation->currentVersionRanges->cfiRange->startOffset = 'fugit';
    $request->annotation->currentVersionRanges->cfiRange->startPosition = 'magni';
    $request->annotation->currentVersionRanges->contentVersion = 'odio';
    $request->annotation->currentVersionRanges->gbImageRange = new BooksAnnotationsRange();
    $request->annotation->currentVersionRanges->gbImageRange->endOffset = 'sunt';
    $request->annotation->currentVersionRanges->gbImageRange->endPosition = 'ullam';
    $request->annotation->currentVersionRanges->gbImageRange->startOffset = 'nam';
    $request->annotation->currentVersionRanges->gbImageRange->startPosition = 'hic';
    $request->annotation->currentVersionRanges->gbTextRange = new BooksAnnotationsRange();
    $request->annotation->currentVersionRanges->gbTextRange->endOffset = 'voluptatem';
    $request->annotation->currentVersionRanges->gbTextRange->endPosition = 'cumque';
    $request->annotation->currentVersionRanges->gbTextRange->startOffset = 'soluta';
    $request->annotation->currentVersionRanges->gbTextRange->startPosition = 'nobis';
    $request->annotation->currentVersionRanges->imageCfiRange = new BooksAnnotationsRange();
    $request->annotation->currentVersionRanges->imageCfiRange->endOffset = 'et';
    $request->annotation->currentVersionRanges->imageCfiRange->endPosition = 'saepe';
    $request->annotation->currentVersionRanges->imageCfiRange->startOffset = 'ipsum';
    $request->annotation->currentVersionRanges->imageCfiRange->startPosition = 'veritatis';
    $request->annotation->data = 'nobis';
    $request->annotation->deleted = false;
    $request->annotation->highlightStyle = 'quos';
    $request->annotation->id = 'b90f3443-a110-48e0-adcf-4b921879fce9';
    $request->annotation->kind = 'quis';
    $request->annotation->layerId = 'ipsum';
    $request->annotation->layerSummary = new AnnotationLayerSummary();
    $request->annotation->layerSummary->allowedCharacterCount = 961571;
    $request->annotation->layerSummary->limitType = 'voluptate';
    $request->annotation->layerSummary->remainingCharacterCount = 231701;
    $request->annotation->pageIds = [
        'tenetur',
        'dignissimos',
        'hic',
        'distinctio',
    ];
    $request->annotation->selectedText = 'quod';
    $request->annotation->selfLink = 'odio';
    $request->annotation->updated = 'similique';
    $request->annotation->volumeId = 'facilis';
    $request->accessToken = 'vero';
    $request->alt = AltEnum::MEDIA;
    $request->annotationId = 'dolore';
    $request->callback = 'quibusdam';
    $request->fields = 'illum';
    $request->key = 'sequi';
    $request->oauthToken = 'natus';
    $request->prettyPrint = false;
    $request->quotaUser = 'impedit';
    $request->source = 'aut';
    $request->uploadType = 'voluptatibus';
    $request->uploadProtocol = 'exercitationem';

    $requestSecurity = new BooksMylibraryAnnotationsUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->mylibrary->booksMylibraryAnnotationsUpdate($request, $requestSecurity);

    if ($response->annotation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## booksMylibraryBookshelvesAddVolume

Adds a volume to a bookshelf.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BooksMylibraryBookshelvesAddVolumeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BooksMylibraryBookshelvesAddVolumeReasonEnum;
use \OpenAPI\OpenAPI\Models\Operations\BooksMylibraryBookshelvesAddVolumeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BooksMylibraryBookshelvesAddVolumeRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'fugit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'maiores';
    $request->fields = 'doloribus';
    $request->key = 'iusto';
    $request->oauthToken = 'eligendi';
    $request->prettyPrint = false;
    $request->quotaUser = 'ducimus';
    $request->reason = BooksMylibraryBookshelvesAddVolumeReasonEnum::REASON_UNDEFINED;
    $request->shelf = 'officia';
    $request->source = 'tempora';
    $request->uploadType = 'ipsam';
    $request->uploadProtocol = 'ea';
    $request->volumeId = 'aspernatur';

    $requestSecurity = new BooksMylibraryBookshelvesAddVolumeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->mylibrary->booksMylibraryBookshelvesAddVolume($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## booksMylibraryBookshelvesClearVolumes

Clears all volumes from a bookshelf.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BooksMylibraryBookshelvesClearVolumesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BooksMylibraryBookshelvesClearVolumesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BooksMylibraryBookshelvesClearVolumesRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'possimus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ratione';
    $request->fields = 'ex';
    $request->key = 'laudantium';
    $request->oauthToken = 'dicta';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolor';
    $request->shelf = 'maiores';
    $request->source = 'quasi';
    $request->uploadType = 'ex';
    $request->uploadProtocol = 'nulla';

    $requestSecurity = new BooksMylibraryBookshelvesClearVolumesSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->mylibrary->booksMylibraryBookshelvesClearVolumes($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## booksMylibraryBookshelvesGet

Retrieves metadata for a specific bookshelf belonging to the authenticated user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BooksMylibraryBookshelvesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BooksMylibraryBookshelvesGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BooksMylibraryBookshelvesGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'voluptatibus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'sapiente';
    $request->fields = 'quisquam';
    $request->key = 'saepe';
    $request->oauthToken = 'ea';
    $request->prettyPrint = false;
    $request->quotaUser = 'impedit';
    $request->shelf = 'corporis';
    $request->source = 'veniam';
    $request->uploadType = 'aliquid';
    $request->uploadProtocol = 'inventore';

    $requestSecurity = new BooksMylibraryBookshelvesGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->mylibrary->booksMylibraryBookshelvesGet($request, $requestSecurity);

    if ($response->bookshelf !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## booksMylibraryBookshelvesList

Retrieves a list of bookshelves belonging to the authenticated user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BooksMylibraryBookshelvesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BooksMylibraryBookshelvesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BooksMylibraryBookshelvesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ea';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'consectetur';
    $request->fields = 'recusandae';
    $request->key = 'aspernatur';
    $request->oauthToken = 'minima';
    $request->prettyPrint = false;
    $request->quotaUser = 'eaque';
    $request->source = 'a';
    $request->uploadType = 'libero';
    $request->uploadProtocol = 'aut';

    $requestSecurity = new BooksMylibraryBookshelvesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->mylibrary->booksMylibraryBookshelvesList($request, $requestSecurity);

    if ($response->bookshelves !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## booksMylibraryBookshelvesMoveVolume

Moves a volume within a bookshelf.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BooksMylibraryBookshelvesMoveVolumeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BooksMylibraryBookshelvesMoveVolumeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BooksMylibraryBookshelvesMoveVolumeRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'deleniti';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'aliquam';
    $request->fields = 'fugit';
    $request->key = 'accusamus';
    $request->oauthToken = 'inventore';
    $request->prettyPrint = false;
    $request->quotaUser = 'non';
    $request->shelf = 'et';
    $request->source = 'dolorum';
    $request->uploadType = 'laborum';
    $request->uploadProtocol = 'placeat';
    $request->volumeId = 'velit';
    $request->volumePosition = 432148;

    $requestSecurity = new BooksMylibraryBookshelvesMoveVolumeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->mylibrary->booksMylibraryBookshelvesMoveVolume($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## booksMylibraryBookshelvesRemoveVolume

Removes a volume from a bookshelf.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BooksMylibraryBookshelvesRemoveVolumeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BooksMylibraryBookshelvesRemoveVolumeReasonEnum;
use \OpenAPI\OpenAPI\Models\Operations\BooksMylibraryBookshelvesRemoveVolumeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BooksMylibraryBookshelvesRemoveVolumeRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'nobis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'assumenda';
    $request->fields = 'nulla';
    $request->key = 'voluptas';
    $request->oauthToken = 'libero';
    $request->prettyPrint = false;
    $request->quotaUser = 'quasi';
    $request->reason = BooksMylibraryBookshelvesRemoveVolumeReasonEnum::REASON_UNDEFINED;
    $request->shelf = 'numquam';
    $request->source = 'explicabo';
    $request->uploadType = 'provident';
    $request->uploadProtocol = 'ipsa';
    $request->volumeId = 'molestiae';

    $requestSecurity = new BooksMylibraryBookshelvesRemoveVolumeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->mylibrary->booksMylibraryBookshelvesRemoveVolume($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## booksMylibraryBookshelvesVolumesList

Gets volume information for volumes on a bookshelf.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BooksMylibraryBookshelvesVolumesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BooksMylibraryBookshelvesVolumesListProjectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\BooksMylibraryBookshelvesVolumesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BooksMylibraryBookshelvesVolumesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'odio';
    $request->alt = AltEnum::JSON;
    $request->callback = 'esse';
    $request->country = 'Kenya';
    $request->fields = 'rem';
    $request->key = 'fuga';
    $request->maxResults = 442015;
    $request->oauthToken = 'quidem';
    $request->prettyPrint = false;
    $request->projection = BooksMylibraryBookshelvesVolumesListProjectionEnum::LITE;
    $request->q = 'ut';
    $request->quotaUser = 'eum';
    $request->shelf = 'suscipit';
    $request->showPreorders = false;
    $request->source = 'assumenda';
    $request->startIndex = 181151;
    $request->uploadType = 'praesentium';
    $request->uploadProtocol = 'quisquam';

    $requestSecurity = new BooksMylibraryBookshelvesVolumesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->mylibrary->booksMylibraryBookshelvesVolumesList($request, $requestSecurity);

    if ($response->volumes !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## booksMylibraryReadingpositionsGet

Retrieves my reading position information for a volume.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BooksMylibraryReadingpositionsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BooksMylibraryReadingpositionsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BooksMylibraryReadingpositionsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ipsa';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quidem';
    $request->contentVersion = 'neque';
    $request->fields = 'quo';
    $request->key = 'illum';
    $request->oauthToken = 'quo';
    $request->prettyPrint = false;
    $request->quotaUser = 'fuga';
    $request->source = 'eius';
    $request->uploadType = 'eos';
    $request->uploadProtocol = 'voluptas';
    $request->volumeId = 'ab';

    $requestSecurity = new BooksMylibraryReadingpositionsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->mylibrary->booksMylibraryReadingpositionsGet($request, $requestSecurity);

    if ($response->readingPosition !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## booksMylibraryReadingpositionsSetPosition

Sets my reading position information for a volume.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BooksMylibraryReadingpositionsSetPositionRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Operations\BooksMylibraryReadingpositionsSetPositionActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BooksMylibraryReadingpositionsSetPositionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BooksMylibraryReadingpositionsSetPositionRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'consequatur';
    $request->action = BooksMylibraryReadingpositionsSetPositionActionEnum::BOOKMARK;
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ipsam';
    $request->contentVersion = 'aspernatur';
    $request->deviceCookie = 'sequi';
    $request->fields = 'quo';
    $request->key = 'esse';
    $request->oauthToken = 'recusandae';
    $request->position = 'aperiam';
    $request->prettyPrint = false;
    $request->quotaUser = 'distinctio';
    $request->source = 'quod';
    $request->timestamp = 'dignissimos';
    $request->uploadType = 'inventore';
    $request->uploadProtocol = 'nihil';
    $request->volumeId = 'totam';

    $requestSecurity = new BooksMylibraryReadingpositionsSetPositionSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->mylibrary->booksMylibraryReadingpositionsSetPosition($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
