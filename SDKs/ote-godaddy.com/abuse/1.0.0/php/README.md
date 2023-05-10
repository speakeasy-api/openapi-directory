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
use \OpenAPI\OpenAPI\Models\Shared\AbuseTicketCreate;
use \OpenAPI\OpenAPI\Models\Shared\AbuseTicketCreateTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AbuseTicketCreate();
    $request->info = 'corrupti';
    $request->infoUrl = 'provident';
    $request->intentional = false;
    $request->proxy = 'distinctio';
    $request->source = 'quibusdam';
    $request->target = 'unde';
    $request->type = AbuseTicketCreateTypeEnum::PHISHING;

    $response = $sdk->v1->createTicket($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [v1](docs/v1/README.md)

* [createTicket](docs/v1/README.md#createticket) - Create a new abuse ticket
* [getTicketInfo](docs/v1/README.md#getticketinfo) - Return the abuse ticket data for a given ticket id
* [getTickets](docs/v1/README.md#gettickets) - List all abuse tickets ids that match user provided filters
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
