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
use \OpenAPI\OpenAPI\Models\Operations\GetEventsV3EventsGetPageRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetEventsV3EventsGetPageSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEventsV3EventsGetPageRequest();
    $request->after = 'corrupti';
    $request->before = 'provident';
    $request->eventType = 'distinctio';
    $request->limit = 844266;
    $request->objectId = 602763;
    $request->objectType = 'nulla';
    $request->occurredAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-04-22T12:08:58.275Z');
    $request->occurredBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-18T09:34:54.894Z');
    $request->sort = [
        'suscipit',
        'iure',
        'magnam',
    ];

    $requestSecurity = new GetEventsV3EventsGetPageSecurity();
    $requestSecurity->hapikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->events->getEventsV3EventsGetPage($request, $requestSecurity);

    if ($response->collectionResponseExternalUnifiedEvent !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [events](docs/events/README.md)

* [getEventsV3EventsGetPage](docs/events/README.md#geteventsv3eventsgetpage) - Returns a collection of events matching a query.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
