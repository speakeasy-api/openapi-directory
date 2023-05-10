# courseMetadata

### Available Operations

* [putCoursesContentIdMetadataCategory](#putcoursescontentidmetadatacategory) - Update course category
* [putCoursesContentIdMetadataLevel](#putcoursescontentidmetadatalevel) - Update course level
* [putCoursesContentIdMetadataTags](#putcoursescontentidmetadatatags) - Update course tags
* [putCoursesContentIdMetadataTopic](#putcoursescontentidmetadatatopic) - Update course topic

## putCoursesContentIdMetadataCategory

Add or update course category in the metadata of a course.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutCoursesContentIdMetadataCategoryRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutCoursesContentIdMetadataCategoryRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutCoursesContentIdMetadataCategoryRequest();
    $request->requestBody = new PutCoursesContentIdMetadataCategoryRequestBody();
    $request->requestBody->category = 'molestiae';
    $request->contentId = 'velit';

    $response = $sdk->courseMetadata->putCoursesContentIdMetadataCategory($request);

    if ($response->courseMetaResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putCoursesContentIdMetadataLevel

Add or update the course level in the metadata of a course.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutCoursesContentIdMetadataLevelRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutCoursesContentIdMetadataLevelRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutCoursesContentIdMetadataLevelRequest();
    $request->requestBody = new PutCoursesContentIdMetadataLevelRequestBody();
    $request->requestBody->level = 'error';
    $request->contentId = 'quia';

    $response = $sdk->courseMetadata->putCoursesContentIdMetadataLevel($request);

    if ($response->courseMetaResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putCoursesContentIdMetadataTags

Add or update course tags in the metadata of a course.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutCoursesContentIdMetadataTagsRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutCoursesContentIdMetadataTagsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutCoursesContentIdMetadataTagsRequest();
    $request->requestBody = new PutCoursesContentIdMetadataTagsRequestBody();
    $request->requestBody->tags = [
        'vitae',
        'laborum',
    ];
    $request->contentId = 'animi';

    $response = $sdk->courseMetadata->putCoursesContentIdMetadataTags($request);

    if ($response->courseMetaResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putCoursesContentIdMetadataTopic

Add or update the course topic in the metadata of a course.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutCoursesContentIdMetadataTopicRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutCoursesContentIdMetadataTopicRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutCoursesContentIdMetadataTopicRequest();
    $request->requestBody = new PutCoursesContentIdMetadataTopicRequestBody();
    $request->requestBody->topic = 'enim';
    $request->contentId = 'odit';

    $response = $sdk->courseMetadata->putCoursesContentIdMetadataTopic($request);

    if ($response->courseMetaResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
