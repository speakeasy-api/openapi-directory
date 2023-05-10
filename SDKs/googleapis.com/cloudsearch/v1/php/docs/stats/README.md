# stats

### Available Operations

* [cloudsearchStatsGetIndex](#cloudsearchstatsgetindex) - Gets indexed item statistics aggreggated across all data sources. This API only returns statistics for previous dates; it doesn't return statistics for the current day. **Note:** This API requires a standard end user account to execute.
* [cloudsearchStatsGetQuery](#cloudsearchstatsgetquery) - Get the query statistics for customer. **Note:** This API requires a standard end user account to execute.
* [cloudsearchStatsGetSearchapplication](#cloudsearchstatsgetsearchapplication) - Get search application stats for customer. **Note:** This API requires a standard end user account to execute.
* [cloudsearchStatsGetSession](#cloudsearchstatsgetsession) - Get the # of search sessions, % of successful sessions with a click query statistics for customer. **Note:** This API requires a standard end user account to execute.
* [cloudsearchStatsGetUser](#cloudsearchstatsgetuser) - Get the users statistics for customer. **Note:** This API requires a standard end user account to execute.
* [cloudsearchStatsIndexDatasourcesGet](#cloudsearchstatsindexdatasourcesget) - Gets indexed item statistics for a single data source. **Note:** This API requires a standard end user account to execute.
* [cloudsearchStatsQuerySearchapplicationsGet](#cloudsearchstatsquerysearchapplicationsget) - Get the query statistics for search application. **Note:** This API requires a standard end user account to execute.
* [cloudsearchStatsSessionSearchapplicationsGet](#cloudsearchstatssessionsearchapplicationsget) - Get the # of search sessions, % of successful sessions with a click query statistics for search application. **Note:** This API requires a standard end user account to execute.
* [cloudsearchStatsUserSearchapplicationsGet](#cloudsearchstatsusersearchapplicationsget) - Get the users statistics for search application. **Note:** This API requires a standard end user account to execute.

## cloudsearchStatsGetIndex

Gets indexed item statistics aggreggated across all data sources. This API only returns statistics for previous dates; it doesn't return statistics for the current day. **Note:** This API requires a standard end user account to execute.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchStatsGetIndexRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchStatsGetIndexSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchStatsGetIndexSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchStatsGetIndexSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchStatsGetIndexSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudsearchStatsGetIndexRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'assumenda';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'voluptas';
    $request->fields = 'libero';
    $request->fromDateDay = 96549;
    $request->fromDateMonth = 270328;
    $request->fromDateYear = 256139;
    $request->key = 'explicabo';
    $request->oauthToken = 'provident';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsa';
    $request->toDateDay = 476477;
    $request->toDateMonth = 301598;
    $request->toDateYear = 487935;
    $request->uploadType = 'eius';
    $request->uploadProtocol = 'esse';

    $requestSecurity = new CloudsearchStatsGetIndexSecurity();
    $requestSecurity->option1 = new CloudsearchStatsGetIndexSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->stats->cloudsearchStatsGetIndex($request, $requestSecurity);

    if ($response->getCustomerIndexStatsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudsearchStatsGetQuery

Get the query statistics for customer. **Note:** This API requires a standard end user account to execute.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchStatsGetQueryRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchStatsGetQuerySecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchStatsGetQuerySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchStatsGetQuerySecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchStatsGetQuerySecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudsearchStatsGetQueryRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'rem';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'reprehenderit';
    $request->fields = 'quidem';
    $request->fromDateDay = 852635;
    $request->fromDateMonth = 283519;
    $request->fromDateYear = 433439;
    $request->key = 'suscipit';
    $request->oauthToken = 'assumenda';
    $request->prettyPrint = false;
    $request->quotaUser = 'eos';
    $request->toDateDay = 509342;
    $request->toDateMonth = 788546;
    $request->toDateYear = 86377;
    $request->uploadType = 'ipsa';
    $request->uploadProtocol = 'id';

    $requestSecurity = new CloudsearchStatsGetQuerySecurity();
    $requestSecurity->option1 = new CloudsearchStatsGetQuerySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->stats->cloudsearchStatsGetQuery($request, $requestSecurity);

    if ($response->getCustomerQueryStatsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudsearchStatsGetSearchapplication

Get search application stats for customer. **Note:** This API requires a standard end user account to execute.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchStatsGetSearchapplicationRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchStatsGetSearchapplicationSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchStatsGetSearchapplicationSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchStatsGetSearchapplicationSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchStatsGetSearchapplicationSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudsearchStatsGetSearchapplicationRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'neque';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'illum';
    $request->endDateDay = 777408;
    $request->endDateMonth = 681359;
    $request->endDateYear = 259422;
    $request->fields = 'eos';
    $request->key = 'voluptas';
    $request->oauthToken = 'ab';
    $request->prettyPrint = false;
    $request->quotaUser = 'cupiditate';
    $request->startDateDay = 9688;
    $request->startDateMonth = 272822;
    $request->startDateYear = 892050;
    $request->uploadType = 'ipsam';
    $request->uploadProtocol = 'aspernatur';

    $requestSecurity = new CloudsearchStatsGetSearchapplicationSecurity();
    $requestSecurity->option1 = new CloudsearchStatsGetSearchapplicationSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->stats->cloudsearchStatsGetSearchapplication($request, $requestSecurity);

    if ($response->getCustomerSearchApplicationStatsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudsearchStatsGetSession

Get the # of search sessions, % of successful sessions with a click query statistics for customer. **Note:** This API requires a standard end user account to execute.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchStatsGetSessionRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchStatsGetSessionSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchStatsGetSessionSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchStatsGetSessionSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchStatsGetSessionSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudsearchStatsGetSessionRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quo';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'recusandae';
    $request->fields = 'aperiam';
    $request->fromDateDay = 715179;
    $request->fromDateMonth = 799796;
    $request->fromDateYear = 490819;
    $request->key = 'inventore';
    $request->oauthToken = 'nihil';
    $request->prettyPrint = false;
    $request->quotaUser = 'totam';
    $request->toDateDay = 882710;
    $request->toDateMonth = 306810;
    $request->toDateYear = 488410;
    $request->uploadType = 'occaecati';
    $request->uploadProtocol = 'commodi';

    $requestSecurity = new CloudsearchStatsGetSessionSecurity();
    $requestSecurity->option1 = new CloudsearchStatsGetSessionSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->stats->cloudsearchStatsGetSession($request, $requestSecurity);

    if ($response->getCustomerSessionStatsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudsearchStatsGetUser

Get the users statistics for customer. **Note:** This API requires a standard end user account to execute.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchStatsGetUserRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchStatsGetUserSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchStatsGetUserSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchStatsGetUserSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchStatsGetUserSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudsearchStatsGetUserRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'dolores';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'molestiae';
    $request->fields = 'accusantium';
    $request->fromDateDay = 783648;
    $request->fromDateMonth = 430402;
    $request->fromDateYear = 556429;
    $request->key = 'praesentium';
    $request->oauthToken = 'consequuntur';
    $request->prettyPrint = false;
    $request->quotaUser = 'deleniti';
    $request->toDateDay = 143829;
    $request->toDateMonth = 681393;
    $request->toDateYear = 649463;
    $request->uploadType = 'incidunt';
    $request->uploadProtocol = 'atque';

    $requestSecurity = new CloudsearchStatsGetUserSecurity();
    $requestSecurity->option1 = new CloudsearchStatsGetUserSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->stats->cloudsearchStatsGetUser($request, $requestSecurity);

    if ($response->getCustomerUserStatsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudsearchStatsIndexDatasourcesGet

Gets indexed item statistics for a single data source. **Note:** This API requires a standard end user account to execute.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchStatsIndexDatasourcesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchStatsIndexDatasourcesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchStatsIndexDatasourcesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchStatsIndexDatasourcesGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchStatsIndexDatasourcesGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudsearchStatsIndexDatasourcesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'minima';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'fugit';
    $request->fields = 'sapiente';
    $request->fromDateDay = 159870;
    $request->fromDateMonth = 187131;
    $request->fromDateYear = 129412;
    $request->key = 'saepe';
    $request->name = 'Ivan Bosco';
    $request->oauthToken = 'accusamus';
    $request->prettyPrint = false;
    $request->quotaUser = 'veritatis';
    $request->toDateDay = 458604;
    $request->toDateMonth = 800379;
    $request->toDateYear = 724168;
    $request->uploadType = 'vero';
    $request->uploadProtocol = 'aliquid';

    $requestSecurity = new CloudsearchStatsIndexDatasourcesGetSecurity();
    $requestSecurity->option1 = new CloudsearchStatsIndexDatasourcesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->stats->cloudsearchStatsIndexDatasourcesGet($request, $requestSecurity);

    if ($response->getDataSourceIndexStatsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudsearchStatsQuerySearchapplicationsGet

Get the query statistics for search application. **Note:** This API requires a standard end user account to execute.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchStatsQuerySearchapplicationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchStatsQuerySearchapplicationsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchStatsQuerySearchapplicationsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchStatsQuerySearchapplicationsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchStatsQuerySearchapplicationsGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudsearchStatsQuerySearchapplicationsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'saepe';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'harum';
    $request->fields = 'molestiae';
    $request->fromDateDay = 699622;
    $request->fromDateMonth = 580197;
    $request->fromDateYear = 327720;
    $request->key = 'distinctio';
    $request->name = 'Mark Nicolas';
    $request->oauthToken = 'cumque';
    $request->prettyPrint = false;
    $request->quotaUser = 'consequuntur';
    $request->toDateDay = 9766;
    $request->toDateMonth = 796392;
    $request->toDateYear = 308286;
    $request->uploadType = 'sapiente';
    $request->uploadProtocol = 'consectetur';

    $requestSecurity = new CloudsearchStatsQuerySearchapplicationsGetSecurity();
    $requestSecurity->option1 = new CloudsearchStatsQuerySearchapplicationsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->stats->cloudsearchStatsQuerySearchapplicationsGet($request, $requestSecurity);

    if ($response->getSearchApplicationQueryStatsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudsearchStatsSessionSearchapplicationsGet

Get the # of search sessions, % of successful sessions with a click query statistics for search application. **Note:** This API requires a standard end user account to execute.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchStatsSessionSearchapplicationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchStatsSessionSearchapplicationsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchStatsSessionSearchapplicationsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchStatsSessionSearchapplicationsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchStatsSessionSearchapplicationsGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudsearchStatsSessionSearchapplicationsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'blanditiis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'a';
    $request->fields = 'nulla';
    $request->fromDateDay = 557811;
    $request->fromDateMonth = 457223;
    $request->fromDateYear = 97468;
    $request->key = 'a';
    $request->name = 'Kirk Stracke';
    $request->oauthToken = 'eveniet';
    $request->prettyPrint = false;
    $request->quotaUser = 'asperiores';
    $request->toDateDay = 815524;
    $request->toDateMonth = 85001;
    $request->toDateYear = 159414;
    $request->uploadType = 'quasi';
    $request->uploadProtocol = 'similique';

    $requestSecurity = new CloudsearchStatsSessionSearchapplicationsGetSecurity();
    $requestSecurity->option1 = new CloudsearchStatsSessionSearchapplicationsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->stats->cloudsearchStatsSessionSearchapplicationsGet($request, $requestSecurity);

    if ($response->getSearchApplicationSessionStatsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudsearchStatsUserSearchapplicationsGet

Get the users statistics for search application. **Note:** This API requires a standard end user account to execute.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchStatsUserSearchapplicationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchStatsUserSearchapplicationsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchStatsUserSearchapplicationsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchStatsUserSearchapplicationsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchStatsUserSearchapplicationsGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudsearchStatsUserSearchapplicationsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'aliquid';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quae';
    $request->fields = 'earum';
    $request->fromDateDay = 424032;
    $request->fromDateMonth = 447378;
    $request->fromDateYear = 258684;
    $request->key = 'libero';
    $request->name = 'Gerardo Bartoletti';
    $request->oauthToken = 'dicta';
    $request->prettyPrint = false;
    $request->quotaUser = 'ullam';
    $request->toDateDay = 443879;
    $request->toDateMonth = 356707;
    $request->toDateYear = 391774;
    $request->uploadType = 'aut';
    $request->uploadProtocol = 'voluptatum';

    $requestSecurity = new CloudsearchStatsUserSearchapplicationsGetSecurity();
    $requestSecurity->option1 = new CloudsearchStatsUserSearchapplicationsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->stats->cloudsearchStatsUserSearchapplicationsGet($request, $requestSecurity);

    if ($response->getSearchApplicationUserStatsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
