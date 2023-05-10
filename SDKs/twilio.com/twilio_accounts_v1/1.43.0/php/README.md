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
use \OpenAPI\OpenAPI\Models\Operations\CreateCredentialAwsCreateCredentialAwsRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateCredentialAwsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateCredentialAwsCreateCredentialAwsRequest();
    $request->accountSid = 'corrupti';
    $request->credentials = 'provident';
    $request->friendlyName = 'distinctio';

    $requestSecurity = new CreateCredentialAwsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->createCredentialAws($request, $requestSecurity);

    if ($response->accountsV1CredentialCredentialAws !== null) {
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

* [createCredentialAws](docs/sdk/README.md#createcredentialaws) - Create a new AWS Credential
* [createCredentialPublicKey](docs/sdk/README.md#createcredentialpublickey) - Create a new Public Key Credential
* [createSecondaryAuthToken](docs/sdk/README.md#createsecondaryauthtoken) - Create a new secondary Auth Token
* [deleteCredentialAws](docs/sdk/README.md#deletecredentialaws) - Delete a Credential from your account
* [deleteCredentialPublicKey](docs/sdk/README.md#deletecredentialpublickey) - Delete a Credential from your account
* [deleteSecondaryAuthToken](docs/sdk/README.md#deletesecondaryauthtoken) - Delete the secondary Auth Token from your account
* [fetchCredentialAws](docs/sdk/README.md#fetchcredentialaws) - Fetch the AWS credentials specified by the provided Credential Sid
* [fetchCredentialPublicKey](docs/sdk/README.md#fetchcredentialpublickey) - Fetch the public key specified by the provided Credential Sid
* [listCredentialAws](docs/sdk/README.md#listcredentialaws) - Retrieves a collection of AWS Credentials belonging to the account used to make the request
* [listCredentialPublicKey](docs/sdk/README.md#listcredentialpublickey) - Retrieves a collection of Public Key Credentials belonging to the account used to make the request
* [updateAuthTokenPromotion](docs/sdk/README.md#updateauthtokenpromotion) - Promote the secondary Auth Token to primary. After promoting the new token, all requests to Twilio using your old primary Auth Token will result in an error.
* [updateCredentialAws](docs/sdk/README.md#updatecredentialaws) - Modify the properties of a given Account
* [updateCredentialPublicKey](docs/sdk/README.md#updatecredentialpublickey) - Modify the properties of a given Account
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
