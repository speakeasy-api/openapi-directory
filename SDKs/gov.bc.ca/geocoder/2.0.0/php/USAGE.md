<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAddressesOutputFormatRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAddressesOutputFormatInterpolationEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetAddressesOutputFormatLocationDescriptorEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetAddressesOutputFormatOutputFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetAddressesOutputFormatOutputSrsEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetAddressesOutputFormatStreetDirectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetAddressesOutputFormatUnitDesignatorEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAddressesOutputFormatRequest();
    $request->addressString = 'corrupti';
    $request->autoComplete = false;
    $request->bbox = 'provident';
    $request->brief = false;
    $request->centre = 'distinctio';
    $request->civicNumber = 'quibusdam';
    $request->civicNumberSuffix = 'unde';
    $request->echo = false;
    $request->extrapolate = false;
    $request->interpolation = GetAddressesOutputFormatInterpolationEnum::NONE;
    $request->localities = 'corrupti';
    $request->localityName = 'illum';
    $request->locationDescriptor = GetAddressesOutputFormatLocationDescriptorEnum::FRONT_DOOR_POINT;
    $request->matchPrecision = 'error';
    $request->matchPrecisionNot = 'deserunt';
    $request->maxDistance = 3843.82;
    $request->maxResults = 437587;
    $request->minScore = 297534;
    $request->notLocalities = 'debitis';
    $request->outputFormat = GetAddressesOutputFormatOutputFormatEnum::JSON;
    $request->outputSRS = GetAddressesOutputFormatOutputSrsEnum::TWENTY_SIX_THOUSAND_NINE_HUNDRED_AND_ELEVEN;
    $request->parcelPoint = 'tempora';
    $request->provinceCode = 'suscipit';
    $request->setBack = 477665;
    $request->siteName = 'minus';
    $request->streetDirection = GetAddressesOutputFormatStreetDirectionEnum::SE;
    $request->streetName = 'voluptatum';
    $request->streetQualifier = 'iusto';
    $request->streetType = 'excepturi';
    $request->unitDesignator = GetAddressesOutputFormatUnitDesignatorEnum::PAD;
    $request->unitNumber = 'recusandae';
    $request->unitNumberSuffix = 'temporibus';

    $response = $sdk->intersections->getAddressesOutputFormat($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->