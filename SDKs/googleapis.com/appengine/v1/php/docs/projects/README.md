# projects

### Available Operations

* [appengineProjectsLocationsApplicationsCreate](#appengineprojectslocationsapplicationscreate) - Creates an App Engine application for a Google Cloud Platform project. Required fields: id - The ID of the target Cloud Platform project. location - The region (https://cloud.google.com/appengine/docs/locations) where you want the App Engine application located.For more information about App Engine applications, see Managing Projects, Applications, and Billing (https://cloud.google.com/appengine/docs/standard/python/console/).
* [appengineProjectsLocationsApplicationsGet](#appengineprojectslocationsapplicationsget) - Gets information about an application.

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
