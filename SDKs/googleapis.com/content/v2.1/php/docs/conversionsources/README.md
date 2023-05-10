# conversionsources

### Available Operations

* [contentConversionsourcesCreate](#contentconversionsourcescreate) - Creates a new conversion source.
* [contentConversionsourcesDelete](#contentconversionsourcesdelete) - Archives an existing conversion source. It will be recoverable for 30 days. This archiving behavior is not typical in the Content API and unique to this service.
* [contentConversionsourcesGet](#contentconversionsourcesget) - Fetches a conversion source.
* [contentConversionsourcesList](#contentconversionsourceslist) - Retrieves the list of conversion sources the caller has access to.
* [contentConversionsourcesPatch](#contentconversionsourcespatch) - Updates information of an existing conversion source.
* [contentConversionsourcesUndelete](#contentconversionsourcesundelete) - Re-enables an archived conversion source.

## contentConversionsourcesCreate

Creates a new conversion source.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentConversionsourcesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConversionSourceInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsLinkInput;
use \OpenAPI\OpenAPI\Models\Shared\AttributionSettingsInput;
use \OpenAPI\OpenAPI\Models\Shared\AttributionSettingsAttributionModelEnum;
use \OpenAPI\OpenAPI\Models\Shared\MerchantCenterDestinationInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentConversionsourcesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentConversionsourcesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->conversionSourceInput = new ConversionSourceInput();
    $request->conversionSourceInput->googleAnalyticsLink = new GoogleAnalyticsLinkInput();
    $request->conversionSourceInput->googleAnalyticsLink->attributionSettings = new AttributionSettingsInput();
    $request->conversionSourceInput->googleAnalyticsLink->attributionSettings->attributionLookbackWindowInDays = 756779;
    $request->conversionSourceInput->googleAnalyticsLink->attributionSettings->attributionModel = AttributionSettingsAttributionModelEnum::ATTRIBUTION_MODEL_UNSPECIFIED;
    $request->conversionSourceInput->googleAnalyticsLink->propertyId = 'culpa';
    $request->conversionSourceInput->merchantCenterDestination = new MerchantCenterDestinationInput();
    $request->conversionSourceInput->merchantCenterDestination->attributionSettings = new AttributionSettingsInput();
    $request->conversionSourceInput->merchantCenterDestination->attributionSettings->attributionLookbackWindowInDays = 731398;
    $request->conversionSourceInput->merchantCenterDestination->attributionSettings->attributionModel = AttributionSettingsAttributionModelEnum::CROSS_CHANNEL_LAST_CLICK;
    $request->conversionSourceInput->merchantCenterDestination->currencyCode = 'cumque';
    $request->conversionSourceInput->merchantCenterDestination->displayName = 'consequuntur';
    $request->accessToken = 'consequatur';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quaerat';
    $request->fields = 'sapiente';
    $request->key = 'consectetur';
    $request->merchantId = 'esse';
    $request->oauthToken = 'blanditiis';
    $request->prettyPrint = false;
    $request->quotaUser = 'provident';
    $request->uploadType = 'a';
    $request->uploadProtocol = 'nulla';

    $requestSecurity = new ContentConversionsourcesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->conversionsources->contentConversionsourcesCreate($request, $requestSecurity);

    if ($response->conversionSource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentConversionsourcesDelete

Archives an existing conversion source. It will be recoverable for 30 days. This archiving behavior is not typical in the Content API and unique to this service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentConversionsourcesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentConversionsourcesDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentConversionsourcesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'esse';
    $request->alt = AltEnum::JSON;
    $request->callback = 'a';
    $request->conversionSourceId = 'error';
    $request->fields = 'sint';
    $request->key = 'pariatur';
    $request->merchantId = 'possimus';
    $request->oauthToken = 'quia';
    $request->prettyPrint = false;
    $request->quotaUser = 'eveniet';
    $request->uploadType = 'asperiores';
    $request->uploadProtocol = 'facere';

    $requestSecurity = new ContentConversionsourcesDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->conversionsources->contentConversionsourcesDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentConversionsourcesGet

Fetches a conversion source.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentConversionsourcesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentConversionsourcesGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentConversionsourcesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'consequuntur';
    $request->alt = AltEnum::JSON;
    $request->callback = 'similique';
    $request->conversionSourceId = 'culpa';
    $request->fields = 'aliquid';
    $request->key = 'tenetur';
    $request->merchantId = 'quae';
    $request->oauthToken = 'earum';
    $request->prettyPrint = false;
    $request->quotaUser = 'vel';
    $request->uploadType = 'in';
    $request->uploadProtocol = 'eius';

    $requestSecurity = new ContentConversionsourcesGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->conversionsources->contentConversionsourcesGet($request, $requestSecurity);

    if ($response->conversionSource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentConversionsourcesList

Retrieves the list of conversion sources the caller has access to.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentConversionsourcesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentConversionsourcesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentConversionsourcesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'illum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'accusantium';
    $request->fields = 'aliquam';
    $request->key = 'sapiente';
    $request->merchantId = 'dicta';
    $request->oauthToken = 'ullam';
    $request->pageSize = 443879;
    $request->pageToken = 'ullam';
    $request->prettyPrint = false;
    $request->quotaUser = 'nisi';
    $request->showDeleted = false;
    $request->uploadType = 'aut';
    $request->uploadProtocol = 'voluptatum';

    $requestSecurity = new ContentConversionsourcesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->conversionsources->contentConversionsourcesList($request, $requestSecurity);

    if ($response->listConversionSourcesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentConversionsourcesPatch

Updates information of an existing conversion source.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentConversionsourcesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConversionSourceInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsLinkInput;
use \OpenAPI\OpenAPI\Models\Shared\AttributionSettingsInput;
use \OpenAPI\OpenAPI\Models\Shared\AttributionSettingsAttributionModelEnum;
use \OpenAPI\OpenAPI\Models\Shared\MerchantCenterDestinationInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentConversionsourcesPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentConversionsourcesPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->conversionSourceInput = new ConversionSourceInput();
    $request->conversionSourceInput->googleAnalyticsLink = new GoogleAnalyticsLinkInput();
    $request->conversionSourceInput->googleAnalyticsLink->attributionSettings = new AttributionSettingsInput();
    $request->conversionSourceInput->googleAnalyticsLink->attributionSettings->attributionLookbackWindowInDays = 845358;
    $request->conversionSourceInput->googleAnalyticsLink->attributionSettings->attributionModel = AttributionSettingsAttributionModelEnum::CROSS_CHANNEL_DATA_DRIVEN;
    $request->conversionSourceInput->googleAnalyticsLink->propertyId = 'deleniti';
    $request->conversionSourceInput->merchantCenterDestination = new MerchantCenterDestinationInput();
    $request->conversionSourceInput->merchantCenterDestination->attributionSettings = new AttributionSettingsInput();
    $request->conversionSourceInput->merchantCenterDestination->attributionSettings->attributionLookbackWindowInDays = 929292;
    $request->conversionSourceInput->merchantCenterDestination->attributionSettings->attributionModel = AttributionSettingsAttributionModelEnum::CROSS_CHANNEL_LINEAR;
    $request->conversionSourceInput->merchantCenterDestination->currencyCode = 'architecto';
    $request->conversionSourceInput->merchantCenterDestination->displayName = 'omnis';
    $request->accessToken = 'tenetur';
    $request->alt = AltEnum::JSON;
    $request->callback = 'at';
    $request->conversionSourceId = 'et';
    $request->fields = 'voluptate';
    $request->key = 'ipsa';
    $request->merchantId = 'minima';
    $request->oauthToken = 'veritatis';
    $request->prettyPrint = false;
    $request->quotaUser = 'consectetur';
    $request->updateMask = 'adipisci';
    $request->uploadType = 'iste';
    $request->uploadProtocol = 'temporibus';

    $requestSecurity = new ContentConversionsourcesPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->conversionsources->contentConversionsourcesPatch($request, $requestSecurity);

    if ($response->conversionSource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentConversionsourcesUndelete

Re-enables an archived conversion source.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentConversionsourcesUndeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentConversionsourcesUndeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentConversionsourcesUndeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'aut' => 'laudantium',
        'eum' => 'mollitia',
        'ab' => 'corrupti',
    ];
    $request->accessToken = 'non';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolor';
    $request->conversionSourceId = 'occaecati';
    $request->fields = 'numquam';
    $request->key = 'impedit';
    $request->merchantId = 'explicabo';
    $request->oauthToken = 'voluptas';
    $request->prettyPrint = false;
    $request->quotaUser = 'aut';
    $request->uploadType = 'dignissimos';
    $request->uploadProtocol = 'dicta';

    $requestSecurity = new ContentConversionsourcesUndeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->conversionsources->contentConversionsourcesUndelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
