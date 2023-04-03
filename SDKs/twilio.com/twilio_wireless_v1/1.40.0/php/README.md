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

<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `createCommand` - Send a Command to a Sim.
* `createRatePlan`
* `deleteCommand` - Delete a Command instance from your account.
* `deleteRatePlan`
* `deleteSim` - Delete a Sim resource on your Account.
* `fetchCommand` - Fetch a Command instance from your account.
* `fetchRatePlan`
* `fetchSim` - Fetch a Sim resource on your Account.
* `listAccountUsageRecord`
* `listCommand` - Retrieve a list of Commands from your account.
* `listDataSession`
* `listRatePlan`
* `listSim` - Retrieve a list of Sim resources on your Account.
* `listUsageRecord`
* `updateRatePlan`
* `updateSim` - Updates the given properties of a Sim resource on your Account.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
