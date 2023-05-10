<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataplexProjectsLocationsDataAttributeBindingsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1DataAttributeBindingInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDataplexV1DataAttributeBindingPath;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataplexProjectsLocationsDataAttributeBindingsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataplexProjectsLocationsDataAttributeBindingsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDataplexV1DataAttributeBindingInput = new GoogleCloudDataplexV1DataAttributeBindingInput();
    $request->googleCloudDataplexV1DataAttributeBindingInput->attributes = [
        'distinctio',
        'quibusdam',
        'unde',
    ];
    $request->googleCloudDataplexV1DataAttributeBindingInput->description = 'nulla';
    $request->googleCloudDataplexV1DataAttributeBindingInput->displayName = 'corrupti';
    $request->googleCloudDataplexV1DataAttributeBindingInput->etag = 'illum';
    $request->googleCloudDataplexV1DataAttributeBindingInput->labels = [
        'error' => 'deserunt',
        'suscipit' => 'iure',
    ];
    $request->googleCloudDataplexV1DataAttributeBindingInput->paths = [
        new GoogleCloudDataplexV1DataAttributeBindingPath(),
        new GoogleCloudDataplexV1DataAttributeBindingPath(),
    ];
    $request->googleCloudDataplexV1DataAttributeBindingInput->resource = 'debitis';
    $request->accessToken = 'ipsa';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'tempora';
    $request->dataAttributeBindingId = 'suscipit';
    $request->fields = 'molestiae';
    $request->key = 'minus';
    $request->oauthToken = 'placeat';
    $request->parent = 'voluptatum';
    $request->prettyPrint = false;
    $request->quotaUser = 'iusto';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'nisi';
    $request->validateOnly = false;

    $requestSecurity = new DataplexProjectsLocationsDataAttributeBindingsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dataplexProjectsLocationsDataAttributeBindingsCreate($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->