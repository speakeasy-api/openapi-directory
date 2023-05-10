# projects

### Available Operations

* [appengineProjectsLocationsApplicationsCreate](#appengineprojectslocationsapplicationscreate) - Creates an App Engine application for a Google Cloud Platform project. Required fields: id - The ID of the target Cloud Platform project. location - The region (https://cloud.google.com/appengine/docs/locations) where you want the App Engine application located.For more information about App Engine applications, see Managing Projects, Applications, and Billing (https://cloud.google.com/appengine/docs/standard/python/console/).
* [appengineProjectsLocationsApplicationsGet](#appengineprojectslocationsapplicationsget) - Gets information about an application.
* [appengineProjectsLocationsApplicationsRepair](#appengineprojectslocationsapplicationsrepair) - Recreates the required App Engine features for the specified App Engine application, for example a Cloud Storage bucket or App Engine service account. Use this method if you receive an error message about a missing feature, for example, Error retrieving the App Engine service account. If you have deleted your App Engine service account, this will not be able to recreate it. Instead, you should attempt to use the IAM undelete API if possible at https://cloud.google.com/iam/reference/rest/v1/projects.serviceAccounts/undelete?apix_params=%7B"name"%3A"projects%2F-%2FserviceAccounts%2Funique_id"%2C"resource"%3A%7B%7D%7D . If the deletion was recent, the numeric ID can be found in the Cloud Console Activity Log.
* [appengineProjectsLocationsGet](#appengineprojectslocationsget) - Gets information about a location.
* [appengineProjectsLocationsList](#appengineprojectslocationslist) - Lists information about the supported locations for this service.
* [appengineProjectsLocationsOperationsGet](#appengineprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [appengineProjectsLocationsOperationsList](#appengineprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.

## appengineProjectsLocationsApplicationsCreate

Creates an App Engine application for a Google Cloud Platform project. Required fields: id - The ID of the target Cloud Platform project. location - The region (https://cloud.google.com/appengine/docs/locations) where you want the App Engine application located.For more information about App Engine applications, see Managing Projects, Applications, and Billing (https://cloud.google.com/appengine/docs/standard/python/console/).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppengineProjectsLocationsApplicationsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ApplicationInput;
use \OpenAPI\OpenAPI\Models\Shared\ApplicationDatabaseTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\UrlDispatchRule;
use \OpenAPI\OpenAPI\Models\Shared\FeatureSettings;
use \OpenAPI\OpenAPI\Models\Shared\IdentityAwareProxyInput;
use \OpenAPI\OpenAPI\Models\Shared\ApplicationServingStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppengineProjectsLocationsApplicationsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppengineProjectsLocationsApplicationsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->applicationInput = new ApplicationInput();
    $request->applicationInput->authDomain = 'culpa';
    $request->applicationInput->databaseType = ApplicationDatabaseTypeEnum::DATABASE_TYPE_UNSPECIFIED;
    $request->applicationInput->defaultCookieExpiration = 'debitis';
    $request->applicationInput->dispatchRules = [
        new UrlDispatchRule(),
        new UrlDispatchRule(),
        new UrlDispatchRule(),
    ];
    $request->applicationInput->featureSettings = new FeatureSettings();
    $request->applicationInput->featureSettings->splitHealthChecks = false;
    $request->applicationInput->featureSettings->useContainerOptimizedOs = false;
    $request->applicationInput->iap = new IdentityAwareProxyInput();
    $request->applicationInput->iap->enabled = false;
    $request->applicationInput->iap->oauth2ClientId = 'eum';
    $request->applicationInput->iap->oauth2ClientSecret = 'nemo';
    $request->applicationInput->id = 'e7956f92-51a5-4a9d-a660-ff57bfaad4f9';
    $request->applicationInput->locationId = 'officiis';
    $request->applicationInput->serviceAccount = 'sapiente';
    $request->applicationInput->servingStatus = ApplicationServingStatusEnum::SYSTEM_DISABLED;
    $request->accessToken = 'vitae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'tempora';
    $request->fields = 'quis';
    $request->key = 'inventore';
    $request->locationsId = 'fugit';
    $request->oauthToken = 'cumque';
    $request->prettyPrint = false;
    $request->projectsId = 'quae';
    $request->quotaUser = 'perferendis';
    $request->uploadType = 'velit';
    $request->uploadProtocol = 'aspernatur';

    $requestSecurity = new AppengineProjectsLocationsApplicationsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->appengineProjectsLocationsApplicationsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appengineProjectsLocationsApplicationsGet

Gets information about an application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppengineProjectsLocationsApplicationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppengineProjectsLocationsApplicationsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AppengineProjectsLocationsApplicationsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AppengineProjectsLocationsApplicationsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\AppengineProjectsLocationsApplicationsGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppengineProjectsLocationsApplicationsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'eius';
    $request->alt = AltEnum::MEDIA;
    $request->applicationsId = 'at';
    $request->callback = 'impedit';
    $request->fields = 'eos';
    $request->key = 'sapiente';
    $request->locationsId = 'eum';
    $request->oauthToken = 'dicta';
    $request->prettyPrint = false;
    $request->projectsId = 'minima';
    $request->quotaUser = 'beatae';
    $request->uploadType = 'cupiditate';
    $request->uploadProtocol = 'provident';

    $requestSecurity = new AppengineProjectsLocationsApplicationsGetSecurity();
    $requestSecurity->option1 = new AppengineProjectsLocationsApplicationsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->appengineProjectsLocationsApplicationsGet($request, $requestSecurity);

    if ($response->application !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appengineProjectsLocationsApplicationsRepair

Recreates the required App Engine features for the specified App Engine application, for example a Cloud Storage bucket or App Engine service account. Use this method if you receive an error message about a missing feature, for example, Error retrieving the App Engine service account. If you have deleted your App Engine service account, this will not be able to recreate it. Instead, you should attempt to use the IAM undelete API if possible at https://cloud.google.com/iam/reference/rest/v1/projects.serviceAccounts/undelete?apix_params=%7B"name"%3A"projects%2F-%2FserviceAccounts%2Funique_id"%2C"resource"%3A%7B%7D%7D . If the deletion was recent, the numeric ID can be found in the Cloud Console Activity Log.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppengineProjectsLocationsApplicationsRepairRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppengineProjectsLocationsApplicationsRepairSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppengineProjectsLocationsApplicationsRepairRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'hic' => 'illum',
        'eaque' => 'earum',
        'perspiciatis' => 'maiores',
    ];
    $request->accessToken = 'debitis';
    $request->alt = AltEnum::MEDIA;
    $request->applicationsId = 'porro';
    $request->callback = 'suscipit';
    $request->fields = 'dolorem';
    $request->key = 'fugit';
    $request->locationsId = 'cumque';
    $request->oauthToken = 'fuga';
    $request->prettyPrint = false;
    $request->projectsId = 'ratione';
    $request->quotaUser = 'animi';
    $request->uploadType = 'necessitatibus';
    $request->uploadProtocol = 'nulla';

    $requestSecurity = new AppengineProjectsLocationsApplicationsRepairSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->appengineProjectsLocationsApplicationsRepair($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appengineProjectsLocationsGet

Gets information about a location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppengineProjectsLocationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppengineProjectsLocationsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AppengineProjectsLocationsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AppengineProjectsLocationsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\AppengineProjectsLocationsGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppengineProjectsLocationsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quasi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ducimus';
    $request->fields = 'natus';
    $request->key = 'occaecati';
    $request->locationsId = 'suscipit';
    $request->oauthToken = 'adipisci';
    $request->prettyPrint = false;
    $request->projectsId = 'quasi';
    $request->quotaUser = 'magni';
    $request->uploadType = 'doloribus';
    $request->uploadProtocol = 'nulla';

    $requestSecurity = new AppengineProjectsLocationsGetSecurity();
    $requestSecurity->option1 = new AppengineProjectsLocationsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->appengineProjectsLocationsGet($request, $requestSecurity);

    if ($response->location !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appengineProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppengineProjectsLocationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppengineProjectsLocationsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AppengineProjectsLocationsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AppengineProjectsLocationsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\AppengineProjectsLocationsListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppengineProjectsLocationsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ipsa';
    $request->alt = AltEnum::JSON;
    $request->callback = 'nihil';
    $request->fields = 'molestiae';
    $request->filter = 'dicta';
    $request->key = 'iusto';
    $request->oauthToken = 'esse';
    $request->pageSize = 508390;
    $request->pageToken = 'maiores';
    $request->prettyPrint = false;
    $request->projectsId = 'reiciendis';
    $request->quotaUser = 'vel';
    $request->uploadType = 'architecto';
    $request->uploadProtocol = 'fugiat';

    $requestSecurity = new AppengineProjectsLocationsListSecurity();
    $requestSecurity->option1 = new AppengineProjectsLocationsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->appengineProjectsLocationsList($request, $requestSecurity);

    if ($response->listLocationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appengineProjectsLocationsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppengineProjectsLocationsOperationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppengineProjectsLocationsOperationsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AppengineProjectsLocationsOperationsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AppengineProjectsLocationsOperationsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\AppengineProjectsLocationsOperationsGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppengineProjectsLocationsOperationsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'dicta';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'tempora';
    $request->fields = 'esse';
    $request->key = 'ex';
    $request->locationsId = 'consectetur';
    $request->oauthToken = 'aliquid';
    $request->operationsId = 'ipsa';
    $request->prettyPrint = false;
    $request->projectsId = 'laborum';
    $request->quotaUser = 'sunt';
    $request->uploadType = 'nostrum';
    $request->uploadProtocol = 'fugiat';

    $requestSecurity = new AppengineProjectsLocationsOperationsGetSecurity();
    $requestSecurity->option1 = new AppengineProjectsLocationsOperationsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->appengineProjectsLocationsOperationsGet($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appengineProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppengineProjectsLocationsOperationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppengineProjectsLocationsOperationsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AppengineProjectsLocationsOperationsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AppengineProjectsLocationsOperationsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\AppengineProjectsLocationsOperationsListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppengineProjectsLocationsOperationsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'aliquid';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'suscipit';
    $request->fields = 'aliquid';
    $request->filter = 'perferendis';
    $request->key = 'eum';
    $request->locationsId = 'voluptas';
    $request->oauthToken = 'iste';
    $request->pageSize = 661607;
    $request->pageToken = 'ab';
    $request->prettyPrint = false;
    $request->projectsId = 'error';
    $request->quotaUser = 'possimus';
    $request->uploadType = 'voluptates';
    $request->uploadProtocol = 'mollitia';

    $requestSecurity = new AppengineProjectsLocationsOperationsListSecurity();
    $requestSecurity->option1 = new AppengineProjectsLocationsOperationsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->appengineProjectsLocationsOperationsList($request, $requestSecurity);

    if ($response->listOperationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
