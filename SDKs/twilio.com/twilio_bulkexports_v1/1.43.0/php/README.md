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
use \OpenAPI\OpenAPI\Models\Operations\CreateExportCustomJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateExportCustomJobCreateExportCustomJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateExportCustomJobSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateExportCustomJobRequest();
    $request->requestBody = new CreateExportCustomJobCreateExportCustomJobRequest();
    $request->requestBody->email = 'Larue_Rau85@yahoo.com';
    $request->requestBody->endDay = 'corrupti';
    $request->requestBody->friendlyName = 'illum';
    $request->requestBody->startDay = 'vel';
    $request->requestBody->webhookMethod = 'error';
    $request->requestBody->webhookUrl = 'deserunt';
    $request->resourceType = 'suscipit';

    $requestSecurity = new CreateExportCustomJobSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->createExportCustomJob($request, $requestSecurity);

    if ($response->bulkexportsV1ExportExportCustomJob !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [createExportCustomJob](docs/sdk/README.md#createexportcustomjob)
* [deleteJob](docs/sdk/README.md#deletejob)
* [fetchDay](docs/sdk/README.md#fetchday) - Fetch a specific Day.
* [fetchExport](docs/sdk/README.md#fetchexport) - Fetch a specific Export.
* [fetchExportConfiguration](docs/sdk/README.md#fetchexportconfiguration) - Fetch a specific Export Configuration.
* [fetchJob](docs/sdk/README.md#fetchjob)
* [listDay](docs/sdk/README.md#listday) - Retrieve a list of all Days for a resource.
* [listExportCustomJob](docs/sdk/README.md#listexportcustomjob)
* [updateExportConfiguration](docs/sdk/README.md#updateexportconfiguration) - Update a specific Export Configuration.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
