# layers

### Available Operations

* [booksLayersAnnotationDataGet](#bookslayersannotationdataget) - Gets the annotation data.
* [booksLayersAnnotationDataList](#bookslayersannotationdatalist) - Gets the annotation data for a volume and layer.
* [booksLayersGet](#bookslayersget) - Gets the layer summary for a volume.
* [booksLayersList](#bookslayerslist) - List the layer summaries for a volume.
* [booksLayersVolumeAnnotationsGet](#bookslayersvolumeannotationsget) - Gets the volume annotation.
* [booksLayersVolumeAnnotationsList](#bookslayersvolumeannotationslist) - Gets the volume annotations for a volume and layer.

## booksLayersAnnotationDataGet

Gets the annotation data.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BooksLayersAnnotationDataGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BooksLayersAnnotationDataGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BooksLayersAnnotationDataGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ipsa';
    $request->allowWebDefinitions = false;
    $request->alt = AltEnum::MEDIA;
    $request->annotationDataId = 'voluptate';
    $request->callback = 'cum';
    $request->contentVersion = 'perferendis';
    $request->fields = 'doloremque';
    $request->h = 441711;
    $request->key = 'ut';
    $request->layerId = 'maiores';
    $request->locale = 'dicta';
    $request->oauthToken = 'corporis';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolore';
    $request->scale = 480894;
    $request->source = 'dicta';
    $request->uploadType = 'harum';
    $request->uploadProtocol = 'enim';
    $request->volumeId = 'accusamus';
    $request->w = 414263;

    $requestSecurity = new BooksLayersAnnotationDataGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->layers->booksLayersAnnotationDataGet($request, $requestSecurity);

    if ($response->dictionaryAnnotationdata !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## booksLayersAnnotationDataList

Gets the annotation data for a volume and layer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BooksLayersAnnotationDataListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BooksLayersAnnotationDataListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BooksLayersAnnotationDataListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quae';
    $request->alt = AltEnum::JSON;
    $request->annotationDataId = [
        'molestias',
        'excepturi',
        'pariatur',
    ];
    $request->callback = 'modi';
    $request->contentVersion = 'praesentium';
    $request->fields = 'rem';
    $request->h = 916723;
    $request->key = 'quasi';
    $request->layerId = 'repudiandae';
    $request->locale = 'sint';
    $request->maxResults = 83112;
    $request->oauthToken = 'itaque';
    $request->pageToken = 'incidunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'enim';
    $request->scale = 9356;
    $request->source = 'est';
    $request->updatedMax = 'quibusdam';
    $request->updatedMin = 'explicabo';
    $request->uploadType = 'deserunt';
    $request->uploadProtocol = 'distinctio';
    $request->volumeId = 'quibusdam';
    $request->w = 289406;

    $requestSecurity = new BooksLayersAnnotationDataListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->layers->booksLayersAnnotationDataList($request, $requestSecurity);

    if ($response->annotationsdata !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## booksLayersGet

Gets the layer summary for a volume.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BooksLayersGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BooksLayersGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BooksLayersGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'qui';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'cupiditate';
    $request->contentVersion = 'quos';
    $request->fields = 'perferendis';
    $request->key = 'magni';
    $request->oauthToken = 'assumenda';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsam';
    $request->source = 'alias';
    $request->summaryId = 'fugit';
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'excepturi';
    $request->volumeId = 'tempora';

    $requestSecurity = new BooksLayersGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->layers->booksLayersGet($request, $requestSecurity);

    if ($response->layersummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## booksLayersList

List the layer summaries for a volume.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BooksLayersListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BooksLayersListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BooksLayersListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'tempore';
    $request->alt = AltEnum::JSON;
    $request->callback = 'delectus';
    $request->contentVersion = 'eum';
    $request->fields = 'non';
    $request->key = 'eligendi';
    $request->maxResults = 576157;
    $request->oauthToken = 'aliquid';
    $request->pageToken = 'provident';
    $request->prettyPrint = false;
    $request->quotaUser = 'necessitatibus';
    $request->source = 'sint';
    $request->uploadType = 'officia';
    $request->uploadProtocol = 'dolor';
    $request->volumeId = 'debitis';

    $requestSecurity = new BooksLayersListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->layers->booksLayersList($request, $requestSecurity);

    if ($response->layersummaries !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## booksLayersVolumeAnnotationsGet

Gets the volume annotation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BooksLayersVolumeAnnotationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BooksLayersVolumeAnnotationsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BooksLayersVolumeAnnotationsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'dolorum';
    $request->alt = AltEnum::MEDIA;
    $request->annotationId = 'in';
    $request->callback = 'illum';
    $request->fields = 'maiores';
    $request->key = 'rerum';
    $request->layerId = 'dicta';
    $request->locale = 'magnam';
    $request->oauthToken = 'cumque';
    $request->prettyPrint = false;
    $request->quotaUser = 'facere';
    $request->source = 'ea';
    $request->uploadType = 'aliquid';
    $request->uploadProtocol = 'laborum';
    $request->volumeId = 'accusamus';

    $requestSecurity = new BooksLayersVolumeAnnotationsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->layers->booksLayersVolumeAnnotationsGet($request, $requestSecurity);

    if ($response->volumeannotation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## booksLayersVolumeAnnotationsList

Gets the volume annotations for a volume and layer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BooksLayersVolumeAnnotationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BooksLayersVolumeAnnotationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BooksLayersVolumeAnnotationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'occaecati';
    $request->alt = AltEnum::JSON;
    $request->callback = 'accusamus';
    $request->contentVersion = 'delectus';
    $request->endOffset = 'quidem';
    $request->endPosition = 'provident';
    $request->fields = 'nam';
    $request->key = 'id';
    $request->layerId = 'blanditiis';
    $request->locale = 'deleniti';
    $request->maxResults = 956084;
    $request->oauthToken = 'amet';
    $request->pageToken = 'deserunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'nisi';
    $request->showDeleted = false;
    $request->source = 'vel';
    $request->startOffset = 'natus';
    $request->startPosition = 'omnis';
    $request->updatedMax = 'molestiae';
    $request->updatedMin = 'perferendis';
    $request->uploadType = 'nihil';
    $request->uploadProtocol = 'magnam';
    $request->volumeAnnotationsVersion = 'distinctio';
    $request->volumeId = 'id';

    $requestSecurity = new BooksLayersVolumeAnnotationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->layers->booksLayersVolumeAnnotationsList($request, $requestSecurity);

    if ($response->volumeannotations !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
