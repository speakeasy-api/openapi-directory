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
use \OpenAPI\OpenAPI\Models\Operations\CreateEsimProfileCreateEsimProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateEsimProfileCreateEsimProfileRequestCallbackMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateEsimProfileSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateEsimProfileCreateEsimProfileRequest();
    $request->callbackMethod = CreateEsimProfileCreateEsimProfileRequestCallbackMethodEnum::PATCH;
    $request->callbackUrl = 'provident';
    $request->eid = 'distinctio';
    $request->generateMatchingId = false;

    $requestSecurity = new CreateEsimProfileSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->createEsimProfile($request, $requestSecurity);

    if ($response->supersimV1EsimProfile !== null) {
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

* [createEsimProfile](docs/sdk/README.md#createesimprofile) - Order an eSIM Profile.
* [createFleet](docs/sdk/README.md#createfleet) - Create a Fleet
* [createIpCommand](docs/sdk/README.md#createipcommand) - Send an IP Command to a Super SIM.
* [createNetworkAccessProfile](docs/sdk/README.md#createnetworkaccessprofile) - Create a new Network Access Profile
* [createNetworkAccessProfileNetwork](docs/sdk/README.md#createnetworkaccessprofilenetwork) - Add a Network resource to the Network Access Profile resource.
* [createSim](docs/sdk/README.md#createsim) - Register a Super SIM to your Account
* [createSmsCommand](docs/sdk/README.md#createsmscommand) - Send SMS Command to a Sim.
* [deleteNetworkAccessProfileNetwork](docs/sdk/README.md#deletenetworkaccessprofilenetwork) - Remove a Network resource from the Network Access Profile resource's.
* [fetchEsimProfile](docs/sdk/README.md#fetchesimprofile) - Fetch an eSIM Profile.
* [fetchFleet](docs/sdk/README.md#fetchfleet) - Fetch a Fleet instance from your account.
* [fetchIpCommand](docs/sdk/README.md#fetchipcommand) - Fetch IP Command instance from your account.
* [fetchNetwork](docs/sdk/README.md#fetchnetwork) - Fetch a Network resource.
* [fetchNetworkAccessProfile](docs/sdk/README.md#fetchnetworkaccessprofile) - Fetch a Network Access Profile instance from your account.
* [fetchNetworkAccessProfileNetwork](docs/sdk/README.md#fetchnetworkaccessprofilenetwork) - Fetch a Network Access Profile resource's Network resource.
* [fetchSim](docs/sdk/README.md#fetchsim) - Fetch a Super SIM instance from your account.
* [fetchSmsCommand](docs/sdk/README.md#fetchsmscommand) - Fetch SMS Command instance from your account.
* [listBillingPeriod](docs/sdk/README.md#listbillingperiod) - Retrieve a list of Billing Periods for a Super SIM.
* [listEsimProfile](docs/sdk/README.md#listesimprofile) - Retrieve a list of eSIM Profiles.
* [listFleet](docs/sdk/README.md#listfleet) - Retrieve a list of Fleets from your account.
* [listIpCommand](docs/sdk/README.md#listipcommand) - Retrieve a list of IP Commands from your account.
* [listNetwork](docs/sdk/README.md#listnetwork) - Retrieve a list of Network resources.
* [listNetworkAccessProfile](docs/sdk/README.md#listnetworkaccessprofile) - Retrieve a list of Network Access Profiles from your account.
* [listNetworkAccessProfileNetwork](docs/sdk/README.md#listnetworkaccessprofilenetwork) - Retrieve a list of Network Access Profile resource's Network resource.
* [listSettingsUpdate](docs/sdk/README.md#listsettingsupdate) - Retrieve a list of Settings Updates.
* [listSim](docs/sdk/README.md#listsim) - Retrieve a list of Super SIMs from your account.
* [listSimIpAddress](docs/sdk/README.md#listsimipaddress) - Retrieve a list of IP Addresses for the given Super SIM.
* [listSmsCommand](docs/sdk/README.md#listsmscommand) - Retrieve a list of SMS Commands from your account.
* [listUsageRecord](docs/sdk/README.md#listusagerecord) - List UsageRecords
* [updateFleet](docs/sdk/README.md#updatefleet) - Updates the given properties of a Super SIM Fleet instance from your account.
* [updateNetworkAccessProfile](docs/sdk/README.md#updatenetworkaccessprofile) - Updates the given properties of a Network Access Profile in your account.
* [updateSim](docs/sdk/README.md#updatesim) - Updates the given properties of a Super SIM instance from your account.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
