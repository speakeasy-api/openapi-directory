# management

### Available Operations

* [analyticsManagementAccountsList](#analyticsmanagementaccountslist) - Lists all accounts to which the user has access.
* [analyticsManagementGoalsList](#analyticsmanagementgoalslist) - Lists goals to which the user has access.
* [analyticsManagementProfilesList](#analyticsmanagementprofileslist) - Lists views (profiles) to which the user has access.
* [analyticsManagementSegmentsList](#analyticsmanagementsegmentslist) - Lists advanced segments to which the user has access.
* [analyticsManagementWebpropertiesList](#analyticsmanagementwebpropertieslist) - Lists web properties to which the user has access.

## analyticsManagementAccountsList

Lists all accounts to which the user has access.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsManagementAccountsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsManagementAccountsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsManagementAccountsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsManagementAccountsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsManagementAccountsListRequest();
    $request->alt = AltEnum::ATOM;
    $request->fields = 'veritatis';
    $request->key = 'deserunt';
    $request->maxResults = 20218;
    $request->oauthToken = 'ipsam';
    $request->prettyPrint = false;
    $request->quotaUser = 'repellendus';
    $request->startIndex = 957156;
    $request->userIp = 'quo';

    $requestSecurity = new AnalyticsManagementAccountsListSecurity();
    $requestSecurity->option1 = new AnalyticsManagementAccountsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->management->analyticsManagementAccountsList($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsManagementGoalsList

Lists goals to which the user has access.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsManagementGoalsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsManagementGoalsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsManagementGoalsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsManagementGoalsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsManagementGoalsListRequest();
    $request->accountId = 'odit';
    $request->alt = AltEnum::ATOM;
    $request->fields = 'at';
    $request->key = 'at';
    $request->maxResults = 978619;
    $request->oauthToken = 'molestiae';
    $request->prettyPrint = false;
    $request->profileId = 'quod';
    $request->quotaUser = 'quod';
    $request->startIndex = 461479;
    $request->userIp = 'totam';
    $request->webPropertyId = 'porro';

    $requestSecurity = new AnalyticsManagementGoalsListSecurity();
    $requestSecurity->option1 = new AnalyticsManagementGoalsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->management->analyticsManagementGoalsList($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsManagementProfilesList

Lists views (profiles) to which the user has access.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsManagementProfilesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsManagementProfilesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsManagementProfilesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsManagementProfilesListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsManagementProfilesListRequest();
    $request->accountId = 'dolorum';
    $request->alt = AltEnum::ATOM;
    $request->fields = 'dicta';
    $request->key = 'nam';
    $request->maxResults = 639921;
    $request->oauthToken = 'occaecati';
    $request->prettyPrint = false;
    $request->quotaUser = 'fugit';
    $request->startIndex = 537373;
    $request->userIp = 'hic';
    $request->webPropertyId = 'optio';

    $requestSecurity = new AnalyticsManagementProfilesListSecurity();
    $requestSecurity->option1 = new AnalyticsManagementProfilesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->management->analyticsManagementProfilesList($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsManagementSegmentsList

Lists advanced segments to which the user has access.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsManagementSegmentsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsManagementSegmentsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsManagementSegmentsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsManagementSegmentsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsManagementSegmentsListRequest();
    $request->alt = AltEnum::ATOM;
    $request->fields = 'totam';
    $request->key = 'beatae';
    $request->maxResults = 414662;
    $request->oauthToken = 'molestiae';
    $request->prettyPrint = false;
    $request->quotaUser = 'modi';
    $request->startIndex = 186332;
    $request->userIp = 'impedit';

    $requestSecurity = new AnalyticsManagementSegmentsListSecurity();
    $requestSecurity->option1 = new AnalyticsManagementSegmentsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->management->analyticsManagementSegmentsList($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsManagementWebpropertiesList

Lists web properties to which the user has access.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsManagementWebpropertiesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsManagementWebpropertiesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsManagementWebpropertiesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsManagementWebpropertiesListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsManagementWebpropertiesListRequest();
    $request->accountId = 'cum';
    $request->alt = AltEnum::ATOM;
    $request->fields = 'esse';
    $request->key = 'ipsum';
    $request->maxResults = 568434;
    $request->oauthToken = 'aspernatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'perferendis';
    $request->startIndex = 324141;
    $request->userIp = 'natus';

    $requestSecurity = new AnalyticsManagementWebpropertiesListSecurity();
    $requestSecurity->option1 = new AnalyticsManagementWebpropertiesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->management->analyticsManagementWebpropertiesList($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
