# people

### Available Operations

* [plusPeopleGet](#pluspeopleget) - Get a person's profile. If your app uses scope https://www.googleapis.com/auth/plus.login, this method is guaranteed to return ageRange and language.
* [plusPeopleList](#pluspeoplelist) - List all of the people in the specified collection.
* [plusPeopleListByActivity](#pluspeoplelistbyactivity) - Shut down. See https://developers.google.com/+/api-shutdown for more details.
* [plusPeopleSearch](#pluspeoplesearch) - Shut down. See https://developers.google.com/+/api-shutdown for more details.

## plusPeopleGet

Get a person's profile. If your app uses scope https://www.googleapis.com/auth/plus.login, this method is guaranteed to return ageRange and language.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PlusPeopleGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PlusPeopleGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\PlusPeopleGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\PlusPeopleGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\PlusPeopleGetSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\PlusPeopleGetSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PlusPeopleGetRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'totam';
    $request->key = 'porro';
    $request->oauthToken = 'dolorum';
    $request->prettyPrint = false;
    $request->quotaUser = 'dicta';
    $request->userId = 'nam';
    $request->userIp = 'officia';

    $requestSecurity = new PlusPeopleGetSecurity();
    $requestSecurity->option1 = new PlusPeopleGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->people->plusPeopleGet($request, $requestSecurity);

    if ($response->person !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## plusPeopleList

List all of the people in the specified collection.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PlusPeopleListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PlusPeopleListCollectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\PlusPeopleListOrderByEnum;
use \OpenAPI\OpenAPI\Models\Operations\PlusPeopleListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\PlusPeopleListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\PlusPeopleListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PlusPeopleListRequest();
    $request->alt = AltEnum::JSON;
    $request->collection = PlusPeopleListCollectionEnum::VISIBLE;
    $request->fields = 'fugit';
    $request->key = 'deleniti';
    $request->maxResults = 944669;
    $request->oauthToken = 'optio';
    $request->orderBy = PlusPeopleListOrderByEnum::BEST;
    $request->pageToken = 'beatae';
    $request->prettyPrint = false;
    $request->quotaUser = 'commodi';
    $request->userId = 'molestiae';
    $request->userIp = 'modi';

    $requestSecurity = new PlusPeopleListSecurity();
    $requestSecurity->option1 = new PlusPeopleListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->people->plusPeopleList($request, $requestSecurity);

    if ($response->peopleFeed !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## plusPeopleListByActivity

Shut down. See https://developers.google.com/+/api-shutdown for more details.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PlusPeopleListByActivityRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PlusPeopleListByActivityCollectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\PlusPeopleListByActivitySecurity;
use \OpenAPI\OpenAPI\Models\Operations\PlusPeopleListByActivitySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\PlusPeopleListByActivitySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PlusPeopleListByActivityRequest();
    $request->activityId = 'qui';
    $request->alt = AltEnum::JSON;
    $request->collection = PlusPeopleListByActivityCollectionEnum::RESHARERS;
    $request->fields = 'cum';
    $request->key = 'esse';
    $request->maxResults = 216550;
    $request->oauthToken = 'excepturi';
    $request->pageToken = 'aspernatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'perferendis';
    $request->userIp = 'ad';

    $requestSecurity = new PlusPeopleListByActivitySecurity();
    $requestSecurity->option1 = new PlusPeopleListByActivitySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->people->plusPeopleListByActivity($request, $requestSecurity);

    if ($response->peopleFeed !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## plusPeopleSearch

Shut down. See https://developers.google.com/+/api-shutdown for more details.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PlusPeopleSearchRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PlusPeopleSearchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\PlusPeopleSearchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\PlusPeopleSearchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PlusPeopleSearchRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'natus';
    $request->key = 'sed';
    $request->language = 'iste';
    $request->maxResults = 222321;
    $request->oauthToken = 'natus';
    $request->pageToken = 'laboriosam';
    $request->prettyPrint = false;
    $request->query = 'hic';
    $request->quotaUser = 'saepe';
    $request->userIp = 'fuga';

    $requestSecurity = new PlusPeopleSearchSecurity();
    $requestSecurity->option1 = new PlusPeopleSearchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->people->plusPeopleSearch($request, $requestSecurity);

    if ($response->peopleFeed !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
