# offeringMetadata

### Available Operations

* [putOfferingsOfferingIdMetadataCategory](#putofferingsofferingidmetadatacategory) - Update offering category metadata
* [putOfferingsOfferingIdMetadataLevel](#putofferingsofferingidmetadatalevel) - Update offering level metadata
* [putOfferingsOfferingIdMetadataTags](#putofferingsofferingidmetadatatags) - Update offering tags metadata
* [putOfferingsOfferingIdMetadataTopic](#putofferingsofferingidmetadatatopic) - Update offering topic metadata

## putOfferingsOfferingIdMetadataCategory

Updates the offering category metadata.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutOfferingsOfferingIdMetadataCategoryRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutOfferingsOfferingIdMetadataCategoryRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutOfferingsOfferingIdMetadataCategoryRequest();
    $request->requestBody = new PutOfferingsOfferingIdMetadataCategoryRequestBody();
    $request->requestBody->category = 'itaque';
    $request->offeringId = 'incidunt';

    $response = $sdk->offeringMetadata->putOfferingsOfferingIdMetadataCategory($request);

    if ($response->offeringMetadataResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putOfferingsOfferingIdMetadataLevel

Updates the offering level metadata.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutOfferingsOfferingIdMetadataLevelRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutOfferingsOfferingIdMetadataLevelRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutOfferingsOfferingIdMetadataLevelRequest();
    $request->requestBody = new PutOfferingsOfferingIdMetadataLevelRequestBody();
    $request->requestBody->level = 'enim';
    $request->offeringId = 'consequatur';

    $response = $sdk->offeringMetadata->putOfferingsOfferingIdMetadataLevel($request);

    if ($response->offeringMetadataResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putOfferingsOfferingIdMetadataTags

Updates the offering tags metadata.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutOfferingsOfferingIdMetadataTagsRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutOfferingsOfferingIdMetadataTagsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutOfferingsOfferingIdMetadataTagsRequest();
    $request->requestBody = new PutOfferingsOfferingIdMetadataTagsRequestBody();
    $request->requestBody->tags = [
        'quibusdam',
        'explicabo',
        'deserunt',
    ];
    $request->offeringId = 'distinctio';

    $response = $sdk->offeringMetadata->putOfferingsOfferingIdMetadataTags($request);

    if ($response->offeringMetadataResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putOfferingsOfferingIdMetadataTopic

Updates the offering topic metadata.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutOfferingsOfferingIdMetadataTopicRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutOfferingsOfferingIdMetadataTopicRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutOfferingsOfferingIdMetadataTopicRequest();
    $request->requestBody = new PutOfferingsOfferingIdMetadataTopicRequestBody();
    $request->requestBody->topic = 'quibusdam';
    $request->offeringId = 'labore';

    $response = $sdk->offeringMetadata->putOfferingsOfferingIdMetadataTopic($request);

    if ($response->offeringMetadataResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
