# courses

### Available Operations

* [getCourses](#getcourses) - Find courses
* [getCoursesContentId](#getcoursescontentid) - Find course by contentId
* [getCoursesContentIdActivations](#getcoursescontentidactivations) - Find activations for a contentId
* [getCoursesContentIdPermissions](#getcoursescontentidpermissions) - Find users who have access to the contentId provided
* [postCoursesRootContentIdPermissionsUserEmail](#postcoursesrootcontentidpermissionsuseremail) - Update course access

## getCourses

Responds with all courses (draft and published.)

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
    $response = $sdk->courses->getCourses();

    if ($response->courseResponses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCoursesContentId

Responds with a course matching the contentId.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCoursesContentIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCoursesContentIdRequest();
    $request->contentId = 'quo';

    $response = $sdk->courses->getCoursesContentId($request);

    if ($response->courseMetaResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCoursesContentIdActivations

Responds with all activations for the contentId provided.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCoursesContentIdActivationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCoursesContentIdActivationsRequest();
    $request->contentId = 'sequi';

    $response = $sdk->courses->getCoursesContentIdActivations($request);

    if ($response->activationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCoursesContentIdPermissions

Responds with users who have access to a specific course by contentId.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCoursesContentIdPermissionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCoursesContentIdPermissionsRequest();
    $request->contentId = 'tenetur';

    $response = $sdk->courses->getCoursesContentIdPermissions($request);

    if ($response->userPermission !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCoursesRootContentIdPermissionsUserEmail

Provide a user with access to a specific course by rootContentId.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostCoursesRootContentIdPermissionsUserEmailRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostCoursesRootContentIdPermissionsUserEmailPermissionToBeGrantedToTheUser;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostCoursesRootContentIdPermissionsUserEmailRequest();
    $request->requestBody = new PostCoursesRootContentIdPermissionsUserEmailPermissionToBeGrantedToTheUser();
    $request->requestBody->isBuilder = false;
    $request->requestBody->isReviewer = false;
    $request->rootContentId = 'ipsam';
    $request->userEmail = 'id';

    $response = $sdk->courses->postCoursesRootContentIdPermissionsUserEmail($request);

    if ($response->postCoursesRootContentIdPermissionsUserEmail201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
