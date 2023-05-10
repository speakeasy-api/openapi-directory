# courseMappings

### Available Operations

* [deleteCourseMappingsOfferingIdExternalCourseId](#deletecoursemappingsofferingidexternalcourseid) - Remove course mapping
* [getCourseMappings](#getcoursemappings) - Find course mappings
* [getCourseMappingsExternalcourseExternalCourseId](#getcoursemappingsexternalcourseexternalcourseid) - Find course mappings by externalCourseId
* [getCourseMappingsOfferingId](#getcoursemappingsofferingid) - Find course mappings by offeringId
* [putCourseMappingsOfferingIdExternalCourseId](#putcoursemappingsofferingidexternalcourseid) - Add course mapping

## deleteCourseMappingsOfferingIdExternalCourseId

Removes the course mapping between the offering and the externalCourseId.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCourseMappingsOfferingIdExternalCourseIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCourseMappingsOfferingIdExternalCourseIdRequest();
    $request->externalCourseId = 'repellat';
    $request->offeringId = 'mollitia';

    $response = $sdk->courseMappings->deleteCourseMappingsOfferingIdExternalCourseId($request);

    if ($response->deleteCourseMappingsOfferingIdExternalCourseId200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCourseMappings

Returns all course mappings for course offerings.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->courseMappings->getCourseMappings();

    if ($response->courseMappings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCourseMappingsExternalcourseExternalCourseId

Responds with course mapping details by externalCourseId.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCourseMappingsExternalcourseExternalCourseIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCourseMappingsExternalcourseExternalCourseIdRequest();
    $request->externalCourseId = 'occaecati';

    $response = $sdk->courseMappings->getCourseMappingsExternalcourseExternalCourseId($request);

    if ($response->getCourseMappingsExternalcourseExternalCourseId200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCourseMappingsOfferingId

Responds with course mapping details by offeringId.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCourseMappingsOfferingIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCourseMappingsOfferingIdRequest();
    $request->offeringId = 'numquam';

    $response = $sdk->courseMappings->getCourseMappingsOfferingId($request);

    if ($response->getCourseMappingsOfferingId200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putCourseMappingsOfferingIdExternalCourseId

Creates a mapping between the offering and the externalCourseId.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutCourseMappingsOfferingIdExternalCourseIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutCourseMappingsOfferingIdExternalCourseIdRequest();
    $request->externalCourseId = 'commodi';
    $request->offeringId = 'quam';

    $response = $sdk->courseMappings->putCourseMappingsOfferingIdExternalCourseId($request);

    if ($response->putCourseMappingsOfferingIdExternalCourseId200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
