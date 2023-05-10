# conversion

### Available Operations

* [doubleclicksearchConversionGet](#doubleclicksearchconversionget) - Retrieves a list of conversions from a DoubleClick Search engine account.
* [doubleclicksearchConversionGetByCustomerId](#doubleclicksearchconversiongetbycustomerid) - Retrieves a list of conversions from a DoubleClick Search engine account.
* [doubleclicksearchConversionInsert](#doubleclicksearchconversioninsert) - Inserts a batch of new conversions into DoubleClick Search.
* [doubleclicksearchConversionUpdate](#doubleclicksearchconversionupdate) - Updates a batch of conversions in DoubleClick Search.
* [doubleclicksearchConversionUpdateAvailability](#doubleclicksearchconversionupdateavailability) - Updates the availabilities of a batch of floodlight activities in DoubleClick Search.

## doubleclicksearchConversionGet

Retrieves a list of conversions from a DoubleClick Search engine account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DoubleclicksearchConversionGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DoubleclicksearchConversionGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DoubleclicksearchConversionGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'iusto';
    $request->adGroupId = 'excepturi';
    $request->adId = 'nisi';
    $request->advertiserId = 'recusandae';
    $request->agencyId = 'temporibus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quis';
    $request->campaignId = 'veritatis';
    $request->criterionId = 'deserunt';
    $request->customerId = 'perferendis';
    $request->endDate = 368241;
    $request->engineAccountId = 'repellendus';
    $request->fields = 'sapiente';
    $request->key = 'quo';
    $request->oauthToken = 'odit';
    $request->prettyPrint = false;
    $request->quotaUser = 'at';
    $request->rowCount = 870088;
    $request->startDate = 978619;
    $request->startRow = 473608;
    $request->uploadType = 'quod';
    $request->uploadProtocol = 'quod';

    $requestSecurity = new DoubleclicksearchConversionGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->conversion->doubleclicksearchConversionGet($request, $requestSecurity);

    if ($response->conversionList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## doubleclicksearchConversionGetByCustomerId

Retrieves a list of conversions from a DoubleClick Search engine account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DoubleclicksearchConversionGetByCustomerIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DoubleclicksearchConversionGetByCustomerIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DoubleclicksearchConversionGetByCustomerIdRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'totam';
    $request->adGroupId = 'porro';
    $request->adId = 'dolorum';
    $request->advertiserId = 'dicta';
    $request->agencyId = 'nam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'occaecati';
    $request->campaignId = 'fugit';
    $request->criterionId = 'deleniti';
    $request->customerId = 'hic';
    $request->endDate = 758616;
    $request->engineAccountId = 'totam';
    $request->fields = 'beatae';
    $request->key = 'commodi';
    $request->oauthToken = 'molestiae';
    $request->prettyPrint = false;
    $request->quotaUser = 'modi';
    $request->rowCount = 186332;
    $request->startDate = 774234;
    $request->startRow = 736918;
    $request->uploadType = 'esse';
    $request->uploadProtocol = 'ipsum';

    $requestSecurity = new DoubleclicksearchConversionGetByCustomerIdSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->conversion->doubleclicksearchConversionGetByCustomerId($request, $requestSecurity);

    if ($response->conversionList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## doubleclicksearchConversionInsert

Inserts a batch of new conversions into DoubleClick Search.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DoubleclicksearchConversionInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConversionList;
use \OpenAPI\OpenAPI\Models\Shared\Conversion;
use \OpenAPI\OpenAPI\Models\Shared\CustomDimension;
use \OpenAPI\OpenAPI\Models\Shared\CustomMetric;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DoubleclicksearchConversionInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DoubleclicksearchConversionInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->conversionList = new ConversionList();
    $request->conversionList->conversion = [
        new Conversion(),
    ];
    $request->conversionList->kind = 'perferendis';
    $request->accessToken = 'ad';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'sed';
    $request->fields = 'iste';
    $request->key = 'dolor';
    $request->oauthToken = 'natus';
    $request->prettyPrint = false;
    $request->quotaUser = 'laboriosam';
    $request->uploadType = 'hic';
    $request->uploadProtocol = 'saepe';

    $requestSecurity = new DoubleclicksearchConversionInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->conversion->doubleclicksearchConversionInsert($request, $requestSecurity);

    if ($response->conversionList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## doubleclicksearchConversionUpdate

Updates a batch of conversions in DoubleClick Search.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DoubleclicksearchConversionUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConversionList;
use \OpenAPI\OpenAPI\Models\Shared\Conversion;
use \OpenAPI\OpenAPI\Models\Shared\CustomDimension;
use \OpenAPI\OpenAPI\Models\Shared\CustomMetric;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DoubleclicksearchConversionUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DoubleclicksearchConversionUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->conversionList = new ConversionList();
    $request->conversionList->conversion = [
        new Conversion(),
        new Conversion(),
    ];
    $request->conversionList->kind = 'corporis';
    $request->accessToken = 'iste';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'saepe';
    $request->fields = 'quidem';
    $request->key = 'architecto';
    $request->oauthToken = 'ipsa';
    $request->prettyPrint = false;
    $request->quotaUser = 'reiciendis';
    $request->uploadType = 'est';
    $request->uploadProtocol = 'mollitia';

    $requestSecurity = new DoubleclicksearchConversionUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->conversion->doubleclicksearchConversionUpdate($request, $requestSecurity);

    if ($response->conversionList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## doubleclicksearchConversionUpdateAvailability

Updates the availabilities of a batch of floodlight activities in DoubleClick Search.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DoubleclicksearchConversionUpdateAvailabilityRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\UpdateAvailabilityRequest;
use \OpenAPI\OpenAPI\Models\Shared\Availability;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DoubleclicksearchConversionUpdateAvailabilitySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DoubleclicksearchConversionUpdateAvailabilityRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->updateAvailabilityRequest = new UpdateAvailabilityRequest();
    $request->updateAvailabilityRequest->availabilities = [
        new Availability(),
    ];
    $request->accessToken = 'dolorem';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'explicabo';
    $request->fields = 'nobis';
    $request->key = 'enim';
    $request->oauthToken = 'omnis';
    $request->prettyPrint = false;
    $request->quotaUser = 'nemo';
    $request->uploadType = 'minima';
    $request->uploadProtocol = 'excepturi';

    $requestSecurity = new DoubleclicksearchConversionUpdateAvailabilitySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->conversion->doubleclicksearchConversionUpdateAvailability($request, $requestSecurity);

    if ($response->updateAvailabilityResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
