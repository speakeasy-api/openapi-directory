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
use \OpenAPI\OpenAPI\Models\Operations\AppsactivityActivitiesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppsactivityActivitiesListGroupingStrategyEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppsactivityActivitiesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppsactivityActivitiesListRequest();
    $request->alt = AltEnum::JSON;
    $request->driveAncestorId = 'corrupti';
    $request->driveFileId = 'provident';
    $request->fields = 'distinctio';
    $request->groupingStrategy = AppsactivityActivitiesListGroupingStrategyEnum::NONE;
    $request->key = 'unde';
    $request->oauthToken = 'nulla';
    $request->pageSize = 544883;
    $request->pageToken = 'illum';
    $request->prettyPrint = false;
    $request->quotaUser = 'vel';
    $request->source = 'error';
    $request->userId = 'deserunt';
    $request->userIp = 'suscipit';

    $requestSecurity = new AppsactivityActivitiesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->activities->appsactivityActivitiesList($request, $requestSecurity);

    if ($response->listActivitiesResponse !== null) {
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

* [appsactivityActivitiesList](docs/activities/README.md#appsactivityactivitieslist) - Returns a list of activities visible to the current logged in user. Visible activities are determined by the visibility settings of the object that was acted on, e.g. Drive files a user can see. An activity is a record of past events. Multiple events may be merged if they are similar. A request is scoped to activities from a given Google service using the source parameter.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
