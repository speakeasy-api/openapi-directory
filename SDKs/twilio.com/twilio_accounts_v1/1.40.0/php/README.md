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

* `createCredentialAws` - Create a new AWS Credential
* `createCredentialPublicKey` - Create a new Public Key Credential
* `createSecondaryAuthToken` - Create a new secondary Auth Token
* `deleteCredentialAws` - Delete a Credential from your account
* `deleteCredentialPublicKey` - Delete a Credential from your account
* `deleteSecondaryAuthToken` - Delete the secondary Auth Token from your account
* `fetchCredentialAws` - Fetch the AWS credentials specified by the provided Credential Sid
* `fetchCredentialPublicKey` - Fetch the public key specified by the provided Credential Sid
* `listCredentialAws` - Retrieves a collection of AWS Credentials belonging to the account used to make the request
* `listCredentialPublicKey` - Retrieves a collection of Public Key Credentials belonging to the account used to make the request
* `updateAuthTokenPromotion` - Promote the secondary Auth Token to primary. After promoting the new token, all requests to Twilio using your old primary Auth Token will result in an error.
* `updateCredentialAws` - Modify the properties of a given Account
* `updateCredentialPublicKey` - Modify the properties of a given Account
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
