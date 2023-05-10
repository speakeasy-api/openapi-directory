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