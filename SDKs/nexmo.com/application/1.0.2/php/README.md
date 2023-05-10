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
use \OpenAPI\OpenAPI\Models\Operations\CreateApplicationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateApplicationRequestBodyTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateApplicationRequestBody();
    $request->answerMethod = 'GET';
    $request->answerUrl = 'https://example.com/webhooks/answer';
    $request->apiKey = 'ap1k3y';
    $request->apiSecret = '230e6cf0709417176df1b4fc1e083adc';
    $request->eventMethod = 'POST';
    $request->eventUrl = 'https://example.com/webhooks/event';
    $request->inboundMethod = 'POST';
    $request->inboundUrl = 'https://example.com/webhooks/inbound';
    $request->name = 'My Application';
    $request->statusMethod = 'POST';
    $request->statusUrl = 'https://example.com/webhooks/status';
    $request->type = CreateApplicationRequestBodyTypeEnum::VOICE;

    $response = $sdk->createApplication($request);

    if ($response->applicationCreated !== null) {
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

* [createApplication](docs/sdk/README.md#createapplication) - Create Application
* [deleteApplication](docs/sdk/README.md#deleteapplication) - Destroy Application
* [retrieveApplication](docs/sdk/README.md#retrieveapplication) - Retrieve Application
* [retrieveApplications](docs/sdk/README.md#retrieveapplications) - Retrieve all Applications
* [updateApplication](docs/sdk/README.md#updateapplication) - Update Application
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
