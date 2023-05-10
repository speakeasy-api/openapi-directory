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
use \OpenAPI\OpenAPI\Models\Operations\FirebasestorageProjectsBucketsAddFirebaseRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebasestorageProjectsBucketsAddFirebaseSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebasestorageProjectsBucketsAddFirebaseSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebasestorageProjectsBucketsAddFirebaseSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebasestorageProjectsBucketsAddFirebaseRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'distinctio' => 'quibusdam',
        'unde' => 'nulla',
        'corrupti' => 'illum',
    ];
    $request->accessToken = 'vel';
    $request->alt = AltEnum::MEDIA;
    $request->bucket = 'deserunt';
    $request->callback = 'suscipit';
    $request->fields = 'iure';
    $request->key = 'magnam';
    $request->oauthToken = 'debitis';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsa';
    $request->uploadType = 'delectus';
    $request->uploadProtocol = 'tempora';

    $requestSecurity = new FirebasestorageProjectsBucketsAddFirebaseSecurity();
    $requestSecurity->option1 = new FirebasestorageProjectsBucketsAddFirebaseSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebasestorageProjectsBucketsAddFirebase($request, $requestSecurity);

    if ($response->bucket !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [projects](docs/projects/README.md)

* [firebasestorageProjectsBucketsAddFirebase](docs/projects/README.md#firebasestorageprojectsbucketsaddfirebase) - Links a Google Cloud Storage bucket to a Firebase project.
* [firebasestorageProjectsBucketsGet](docs/projects/README.md#firebasestorageprojectsbucketsget) - Gets a single linked storage bucket.
* [firebasestorageProjectsBucketsList](docs/projects/README.md#firebasestorageprojectsbucketslist) - Lists the linked storage buckets for a project.
* [firebasestorageProjectsBucketsRemoveFirebase](docs/projects/README.md#firebasestorageprojectsbucketsremovefirebase) - Unlinks a linked Google Cloud Storage bucket from a Firebase project.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
