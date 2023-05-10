# comments

### Available Operations

* [plusCommentsGet](#pluscommentsget) - Shut down. See https://developers.google.com/+/api-shutdown for more details.
* [plusCommentsList](#pluscommentslist) - Shut down. See https://developers.google.com/+/api-shutdown for more details.

## plusCommentsGet

Shut down. See https://developers.google.com/+/api-shutdown for more details.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PlusCommentsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PlusCommentsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\PlusCommentsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\PlusCommentsGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PlusCommentsGetRequest();
    $request->alt = AltEnum::JSON;
    $request->commentId = 'veritatis';
    $request->fields = 'deserunt';
    $request->key = 'perferendis';
    $request->oauthToken = 'ipsam';
    $request->prettyPrint = false;
    $request->quotaUser = 'repellendus';
    $request->userIp = 'sapiente';

    $requestSecurity = new PlusCommentsGetSecurity();
    $requestSecurity->option1 = new PlusCommentsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->comments->plusCommentsGet($request, $requestSecurity);

    if ($response->comment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## plusCommentsList

Shut down. See https://developers.google.com/+/api-shutdown for more details.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PlusCommentsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PlusCommentsListSortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\PlusCommentsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\PlusCommentsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\PlusCommentsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PlusCommentsListRequest();
    $request->activityId = 'quo';
    $request->alt = AltEnum::JSON;
    $request->fields = 'odit';
    $request->key = 'at';
    $request->maxResults = 870088;
    $request->oauthToken = 'maiores';
    $request->pageToken = 'molestiae';
    $request->prettyPrint = false;
    $request->quotaUser = 'quod';
    $request->sortOrder = PlusCommentsListSortOrderEnum::DESCENDING;
    $request->userIp = 'esse';

    $requestSecurity = new PlusCommentsListSecurity();
    $requestSecurity->option1 = new PlusCommentsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->comments->plusCommentsList($request, $requestSecurity);

    if ($response->commentFeed !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
