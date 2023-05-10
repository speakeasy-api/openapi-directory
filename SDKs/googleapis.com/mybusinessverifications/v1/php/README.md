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
use \OpenAPI\OpenAPI\Models\Operations\MybusinessverificationsLocationsFetchVerificationOptionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\FetchVerificationOptionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ServiceBusinessContext;
use \OpenAPI\OpenAPI\Models\Shared\PostalAddress;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessverificationsLocationsFetchVerificationOptionsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->fetchVerificationOptionsRequest = new FetchVerificationOptionsRequest();
    $request->fetchVerificationOptionsRequest->context = new ServiceBusinessContext();
    $request->fetchVerificationOptionsRequest->context->address = new PostalAddress();
    $request->fetchVerificationOptionsRequest->context->address->addressLines = [
        'distinctio',
        'quibusdam',
        'unde',
    ];
    $request->fetchVerificationOptionsRequest->context->address->administrativeArea = 'nulla';
    $request->fetchVerificationOptionsRequest->context->address->languageCode = 'corrupti';
    $request->fetchVerificationOptionsRequest->context->address->locality = 'illum';
    $request->fetchVerificationOptionsRequest->context->address->organization = 'vel';
    $request->fetchVerificationOptionsRequest->context->address->postalCode = '63428-0923';
    $request->fetchVerificationOptionsRequest->context->address->recipients = [
        'minus',
        'placeat',
    ];
    $request->fetchVerificationOptionsRequest->context->address->regionCode = 'voluptatum';
    $request->fetchVerificationOptionsRequest->context->address->revision = 479977;
    $request->fetchVerificationOptionsRequest->context->address->sortingCode = 'excepturi';
    $request->fetchVerificationOptionsRequest->context->address->sublocality = 'nisi';
    $request->fetchVerificationOptionsRequest->languageCode = 'recusandae';
    $request->accessToken = 'temporibus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quis';
    $request->fields = 'veritatis';
    $request->key = 'deserunt';
    $request->location = 'perferendis';
    $request->oauthToken = 'ipsam';
    $request->prettyPrint = false;
    $request->quotaUser = 'repellendus';
    $request->uploadType = 'sapiente';
    $request->uploadProtocol = 'quo';

    $response = $sdk->locations->mybusinessverificationsLocationsFetchVerificationOptions($request);

    if ($response->fetchVerificationOptionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [locations](docs/locations/README.md)

* [mybusinessverificationsLocationsFetchVerificationOptions](docs/locations/README.md#mybusinessverificationslocationsfetchverificationoptions) - Reports all eligible verification options for a location in a specific language.
* [mybusinessverificationsLocationsGetVoiceOfMerchantState](docs/locations/README.md#mybusinessverificationslocationsgetvoiceofmerchantstate) - Gets the VoiceOfMerchant state.
* [mybusinessverificationsLocationsVerificationsComplete](docs/locations/README.md#mybusinessverificationslocationsverificationscomplete) - Completes a `PENDING` verification. It is only necessary for non `AUTO` verification methods. `AUTO` verification request is instantly `VERIFIED` upon creation.
* [mybusinessverificationsLocationsVerificationsList](docs/locations/README.md#mybusinessverificationslocationsverificationslist) - List verifications of a location, ordered by create time.
* [mybusinessverificationsLocationsVerify](docs/locations/README.md#mybusinessverificationslocationsverify) - Starts the verification process for a location.

### [verificationTokens](docs/verificationtokens/README.md)

* [mybusinessverificationsVerificationTokensGenerate](docs/verificationtokens/README.md#mybusinessverificationsverificationtokensgenerate) - Generates a token for the provided location data as a vetted [partner](https://support.google.com/business/answer/7674102). Throws PERMISSION_DENIED if the caller is not a vetted partner account. Throws FAILED_PRECONDITION if the caller's VettedStatus is INVALID.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
