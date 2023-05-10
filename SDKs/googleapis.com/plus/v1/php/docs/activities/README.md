# activities

### Available Operations

* [plusActivitiesGet](#plusactivitiesget) - Shut down. See https://developers.google.com/+/api-shutdown for more details.
* [plusActivitiesList](#plusactivitieslist) - Shut down. See https://developers.google.com/+/api-shutdown for more details.
* [plusActivitiesSearch](#plusactivitiessearch) - Shut down. See https://developers.google.com/+/api-shutdown for more details.

## plusActivitiesGet

Shut down. See https://developers.google.com/+/api-shutdown for more details.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PlusActivitiesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PlusActivitiesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\PlusActivitiesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\PlusActivitiesGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PlusActivitiesGetRequest();
    $request->activityId = 'corrupti';
    $request->alt = AltEnum::JSON;
    $request->fields = 'illum';
    $request->key = 'vel';
    $request->oauthToken = 'error';
    $request->prettyPrint = false;
    $request->quotaUser = 'deserunt';
    $request->userIp = 'suscipit';

    $requestSecurity = new PlusActivitiesGetSecurity();
    $requestSecurity->option1 = new PlusActivitiesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->activities->plusActivitiesGet($request, $requestSecurity);

    if ($response->activity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## plusActivitiesList

Shut down. See https://developers.google.com/+/api-shutdown for more details.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PlusActivitiesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PlusActivitiesListCollectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\PlusActivitiesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\PlusActivitiesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\PlusActivitiesListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PlusActivitiesListRequest();
    $request->alt = AltEnum::JSON;
    $request->collection = PlusActivitiesListCollectionEnum::PUBLIC;
    $request->fields = 'iure';
    $request->key = 'magnam';
    $request->maxResults = 891773;
    $request->oauthToken = 'ipsa';
    $request->pageToken = 'delectus';
    $request->prettyPrint = false;
    $request->quotaUser = 'tempora';
    $request->userId = 'suscipit';
    $request->userIp = 'molestiae';

    $requestSecurity = new PlusActivitiesListSecurity();
    $requestSecurity->option1 = new PlusActivitiesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->activities->plusActivitiesList($request, $requestSecurity);

    if ($response->activityFeed !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## plusActivitiesSearch

Shut down. See https://developers.google.com/+/api-shutdown for more details.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PlusActivitiesSearchRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PlusActivitiesSearchOrderByEnum;
use \OpenAPI\OpenAPI\Models\Operations\PlusActivitiesSearchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\PlusActivitiesSearchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\PlusActivitiesSearchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PlusActivitiesSearchRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'minus';
    $request->key = 'placeat';
    $request->language = 'voluptatum';
    $request->maxResults = 479977;
    $request->oauthToken = 'excepturi';
    $request->orderBy = PlusActivitiesSearchOrderByEnum::BEST;
    $request->pageToken = 'recusandae';
    $request->prettyPrint = false;
    $request->query = 'temporibus';
    $request->quotaUser = 'ab';
    $request->userIp = 'quis';

    $requestSecurity = new PlusActivitiesSearchSecurity();
    $requestSecurity->option1 = new PlusActivitiesSearchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->activities->plusActivitiesSearch($request, $requestSecurity);

    if ($response->activityFeed !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
