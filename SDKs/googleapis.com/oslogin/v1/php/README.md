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


### users

* `osloginUsersGetLoginProfile` - Retrieves the profile information used for logging in to a virtual machine on Google Compute Engine.
* `osloginUsersImportSshPublicKey` - Adds an SSH public key and returns the profile information. Default POSIX account information is set when no username and UID exist as part of the login profile.
* `osloginUsersSshPublicKeysCreate` - Create an SSH public key
* `osloginUsersSshPublicKeysDelete` - Deletes an SSH public key.
* `osloginUsersSshPublicKeysGet` - Retrieves an SSH public key.
* `osloginUsersSshPublicKeysPatch` - Updates an SSH public key and returns the profile information. This method supports patch semantics.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
