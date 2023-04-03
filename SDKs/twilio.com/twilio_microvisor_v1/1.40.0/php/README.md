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

* `createAccountConfig` - Create a config for an Account.
* `createAccountSecret` - Create a secret for an Account.
* `createDeviceConfig` - Create a config for a Microvisor Device.
* `createDeviceSecret` - Create a secret for a Microvisor Device.
* `deleteAccountConfig` - Delete a config for an Account.
* `deleteAccountSecret` - Delete a secret for an Account.
* `deleteApp` - Delete a specific App.
* `deleteDeviceConfig` - Delete a config for a Microvisor Device.
* `deleteDeviceSecret` - Delete a secret for a Microvisor Device.
* `fetchAccountConfig` - Retrieve a Config for an Account.
* `fetchAccountSecret` - Retrieve a Secret for an Account.
* `fetchApp` - Fetch a specific App.
* `fetchAppManifest` - Retrieve the Manifest for an App.
* `fetchDevice` - Fetch a specific Device.
* `fetchDeviceConfig` - Retrieve a Config for a Device.
* `fetchDeviceSecret` - Retrieve a Secret for a Device.
* `listAccountConfig` - Retrieve a list of all Configs for an Account.
* `listAccountSecret` - Retrieve a list of all Secrets for an Account.
* `listApp` - Retrieve a list of all Apps for an Account.
* `listDevice` - Retrieve a list of all Devices registered with the Account.
* `listDeviceConfig` - Retrieve a list of all Configs for a Device.
* `listDeviceSecret` - Retrieve a list of all Secrets for a Device.
* `updateAccountConfig` - Update a config for an Account.
* `updateAccountSecret` - Update a secret for an Account.
* `updateDevice` - Update a specific Device.
* `updateDeviceConfig` - Update a config for a Microvisor Device.
* `updateDeviceSecret` - Update a secret for a Microvisor Device.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
