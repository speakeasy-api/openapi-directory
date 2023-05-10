# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
    $request->fields = 'provident';
    $request->key = 'distinctio';
    $request->oauthToken = 'quibusdam';
    $request->prettyPrint = false;
    $request->quotaUser = 'unde';
    $request->userIp = 'nulla';

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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [activities](docs/activities/README.md)

* [plusActivitiesGet](docs/activities/README.md#plusactivitiesget) - Shut down. See https://developers.google.com/+/api-shutdown for more details.
* [plusActivitiesList](docs/activities/README.md#plusactivitieslist) - Shut down. See https://developers.google.com/+/api-shutdown for more details.
* [plusActivitiesSearch](docs/activities/README.md#plusactivitiessearch) - Shut down. See https://developers.google.com/+/api-shutdown for more details.

### [comments](docs/comments/README.md)

* [plusCommentsGet](docs/comments/README.md#pluscommentsget) - Shut down. See https://developers.google.com/+/api-shutdown for more details.
* [plusCommentsList](docs/comments/README.md#pluscommentslist) - Shut down. See https://developers.google.com/+/api-shutdown for more details.

### [people](docs/people/README.md)

* [plusPeopleGet](docs/people/README.md#pluspeopleget) - Get a person's profile. If your app uses scope https://www.googleapis.com/auth/plus.login, this method is guaranteed to return ageRange and language.
* [plusPeopleList](docs/people/README.md#pluspeoplelist) - List all of the people in the specified collection.
* [plusPeopleListByActivity](docs/people/README.md#pluspeoplelistbyactivity) - Shut down. See https://developers.google.com/+/api-shutdown for more details.
* [plusPeopleSearch](docs/people/README.md#pluspeoplesearch) - Shut down. See https://developers.google.com/+/api-shutdown for more details.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
