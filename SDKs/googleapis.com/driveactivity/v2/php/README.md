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
use \OpenAPI\OpenAPI\Models\Operations\DriveactivityActivityQueryRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\QueryDriveActivityRequest;
use \OpenAPI\OpenAPI\Models\Shared\ConsolidationStrategy;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DriveactivityActivityQuerySecurity;
use \OpenAPI\OpenAPI\Models\Operations\DriveactivityActivityQuerySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DriveactivityActivityQuerySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DriveactivityActivityQueryRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->queryDriveActivityRequest = new QueryDriveActivityRequest();
    $request->queryDriveActivityRequest->ancestorName = 'provident';
    $request->queryDriveActivityRequest->consolidationStrategy = new ConsolidationStrategy();
    $request->queryDriveActivityRequest->consolidationStrategy->legacy = [
        'quibusdam' => 'unde',
        'nulla' => 'corrupti',
        'illum' => 'vel',
    ];
    $request->queryDriveActivityRequest->consolidationStrategy->none = [
        'deserunt' => 'suscipit',
        'iure' => 'magnam',
        'debitis' => 'ipsa',
    ];
    $request->queryDriveActivityRequest->filter = 'delectus';
    $request->queryDriveActivityRequest->itemName = 'tempora';
    $request->queryDriveActivityRequest->pageSize = 383441;
    $request->queryDriveActivityRequest->pageToken = 'molestiae';
    $request->accessToken = 'minus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'voluptatum';
    $request->fields = 'iusto';
    $request->key = 'excepturi';
    $request->oauthToken = 'nisi';
    $request->prettyPrint = false;
    $request->quotaUser = 'recusandae';
    $request->uploadType = 'temporibus';
    $request->uploadProtocol = 'ab';

    $requestSecurity = new DriveactivityActivityQuerySecurity();
    $requestSecurity->option1 = new DriveactivityActivityQuerySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->activity->driveactivityActivityQuery($request, $requestSecurity);

    if ($response->queryDriveActivityResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [activity](docs/activity/README.md)

* [driveactivityActivityQuery](docs/activity/README.md#driveactivityactivityquery) - Query past activity in Google Drive.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
