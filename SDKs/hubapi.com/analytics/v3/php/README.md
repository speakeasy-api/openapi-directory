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
use \OpenAPI\OpenAPI\Models\Shared\BehavioralEventHttpCompletionRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostEventsV3SendSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BehavioralEventHttpCompletionRequest();
    $request->email = 'Larue_Rau85@yahoo.com';
    $request->eventName = 'corrupti';
    $request->objectId = 'illum';
    $request->occurredAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-18T09:34:54.894Z');
    $request->properties = [
        'suscipit' => 'iure',
        'magnam' => 'debitis',
        'ipsa' => 'delectus',
    ];
    $request->utk = 'tempora';

    $requestSecurity = new PostEventsV3SendSecurity();
    $requestSecurity->hapikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->behavioralEventsTracking->postEventsV3Send($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [behavioralEventsTracking](docs/behavioraleventstracking/README.md)

* [postEventsV3Send](docs/behavioraleventstracking/README.md#posteventsv3send) - Sends Custom Behavioral Event
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
