# floodlightConfigurations

### Available Operations

* [dfareportingFloodlightConfigurationsGet](#dfareportingfloodlightconfigurationsget) - Gets one floodlight configuration by ID.
* [dfareportingFloodlightConfigurationsList](#dfareportingfloodlightconfigurationslist) - Retrieves a list of floodlight configurations, possibly filtered.
* [dfareportingFloodlightConfigurationsPatch](#dfareportingfloodlightconfigurationspatch) - Updates an existing floodlight configuration. This method supports patch semantics.
* [dfareportingFloodlightConfigurationsUpdate](#dfareportingfloodlightconfigurationsupdate) - Updates an existing floodlight configuration.

## dfareportingFloodlightConfigurationsGet

Gets one floodlight configuration by ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingFloodlightConfigurationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingFloodlightConfigurationsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingFloodlightConfigurationsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'tempore';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'provident';
    $request->fields = 'soluta';
    $request->id = 'c63562eb-fdf5-45c2-94c0-60b06a128776';
    $request->key = 'numquam';
    $request->oauthToken = 'voluptates';
    $request->prettyPrint = false;
    $request->profileId = 'debitis';
    $request->quotaUser = 'earum';
    $request->uploadType = 'suscipit';
    $request->uploadProtocol = 'assumenda';

    $requestSecurity = new DfareportingFloodlightConfigurationsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->floodlightConfigurations->dfareportingFloodlightConfigurationsGet($request, $requestSecurity);

    if ($response->floodlightConfiguration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingFloodlightConfigurationsList

Retrieves a list of floodlight configurations, possibly filtered.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingFloodlightConfigurationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingFloodlightConfigurationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingFloodlightConfigurationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'porro';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'temporibus';
    $request->fields = 'vel';
    $request->ids = [
        'nulla',
        'excepturi',
        'quod',
        'in',
    ];
    $request->key = 'nesciunt';
    $request->oauthToken = 'temporibus';
    $request->prettyPrint = false;
    $request->profileId = 'temporibus';
    $request->quotaUser = 'eum';
    $request->uploadType = 'non';
    $request->uploadProtocol = 'ut';

    $requestSecurity = new DfareportingFloodlightConfigurationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->floodlightConfigurations->dfareportingFloodlightConfigurationsList($request, $requestSecurity);

    if ($response->floodlightConfigurationsListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingFloodlightConfigurationsPatch

Updates an existing floodlight configuration. This method supports patch semantics.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingFloodlightConfigurationsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\FloodlightConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValue;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValueMatchTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CustomViewabilityMetric;
use \OpenAPI\OpenAPI\Models\Shared\CustomViewabilityMetricConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\FloodlightConfigurationFirstDayOfWeekEnum;
use \OpenAPI\OpenAPI\Models\Shared\LookbackConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\FloodlightConfigurationNaturalSearchConversionAttributionOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\OmnitureSettings;
use \OpenAPI\OpenAPI\Models\Shared\TagSettings;
use \OpenAPI\OpenAPI\Models\Shared\ThirdPartyAuthenticationToken;
use \OpenAPI\OpenAPI\Models\Shared\UserDefinedVariableConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\UserDefinedVariableConfigurationDataTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\UserDefinedVariableConfigurationVariableTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingFloodlightConfigurationsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingFloodlightConfigurationsPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->floodlightConfiguration = new FloodlightConfiguration();
    $request->floodlightConfiguration->accountId = 'dignissimos';
    $request->floodlightConfiguration->advertiserId = 'illo';
    $request->floodlightConfiguration->advertiserIdDimensionValue = new DimensionValue();
    $request->floodlightConfiguration->advertiserIdDimensionValue->dimensionName = 'corporis';
    $request->floodlightConfiguration->advertiserIdDimensionValue->etag = 'ipsa';
    $request->floodlightConfiguration->advertiserIdDimensionValue->id = '9a8e870d-3c5a-41f9-8242-c7b66a1f30c7';
    $request->floodlightConfiguration->advertiserIdDimensionValue->kind = 'non';
    $request->floodlightConfiguration->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->floodlightConfiguration->advertiserIdDimensionValue->value = 'repellat';
    $request->floodlightConfiguration->analyticsDataSharingEnabled = false;
    $request->floodlightConfiguration->customViewabilityMetric = new CustomViewabilityMetric();
    $request->floodlightConfiguration->customViewabilityMetric->configuration = new CustomViewabilityMetricConfiguration();
    $request->floodlightConfiguration->customViewabilityMetric->configuration->audible = false;
    $request->floodlightConfiguration->customViewabilityMetric->configuration->timeMillis = 348056;
    $request->floodlightConfiguration->customViewabilityMetric->configuration->timePercent = 693988;
    $request->floodlightConfiguration->customViewabilityMetric->configuration->viewabilityPercent = 408208;
    $request->floodlightConfiguration->customViewabilityMetric->id = 'molestiae';
    $request->floodlightConfiguration->customViewabilityMetric->name = 'Velma Legros DVM';
    $request->floodlightConfiguration->exposureToConversionEnabled = false;
    $request->floodlightConfiguration->firstDayOfWeek = FloodlightConfigurationFirstDayOfWeekEnum::MONDAY;
    $request->floodlightConfiguration->id = 'consequuntur';
    $request->floodlightConfiguration->idDimensionValue = new DimensionValue();
    $request->floodlightConfiguration->idDimensionValue->dimensionName = 'est';
    $request->floodlightConfiguration->idDimensionValue->etag = 'tempora';
    $request->floodlightConfiguration->idDimensionValue->id = 'bb438d85-b260-4591-9745-e3c2059c9c3f';
    $request->floodlightConfiguration->idDimensionValue->kind = 'veniam';
    $request->floodlightConfiguration->idDimensionValue->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->floodlightConfiguration->idDimensionValue->value = 'esse';
    $request->floodlightConfiguration->inAppAttributionTrackingEnabled = false;
    $request->floodlightConfiguration->kind = 'officiis';
    $request->floodlightConfiguration->lookbackConfiguration = new LookbackConfiguration();
    $request->floodlightConfiguration->lookbackConfiguration->clickDuration = 48077;
    $request->floodlightConfiguration->lookbackConfiguration->postImpressionActivitiesDuration = 933677;
    $request->floodlightConfiguration->naturalSearchConversionAttributionOption = FloodlightConfigurationNaturalSearchConversionAttributionOptionEnum::EXCLUDE_NATURAL_SEARCH_CONVERSION_ATTRIBUTION;
    $request->floodlightConfiguration->omnitureSettings = new OmnitureSettings();
    $request->floodlightConfiguration->omnitureSettings->omnitureCostDataEnabled = false;
    $request->floodlightConfiguration->omnitureSettings->omnitureIntegrationEnabled = false;
    $request->floodlightConfiguration->subaccountId = 'corporis';
    $request->floodlightConfiguration->tagSettings = new TagSettings();
    $request->floodlightConfiguration->tagSettings->dynamicTagEnabled = false;
    $request->floodlightConfiguration->tagSettings->imageTagEnabled = false;
    $request->floodlightConfiguration->thirdPartyAuthenticationTokens = [
        new ThirdPartyAuthenticationToken(),
    ];
    $request->floodlightConfiguration->userDefinedVariableConfigurations = [
        new UserDefinedVariableConfiguration(),
        new UserDefinedVariableConfiguration(),
    ];
    $request->accessToken = 'suscipit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nobis';
    $request->fields = 'beatae';
    $request->id = 'd62fcdac-e1f0-4121-ace2-239e8f25cd0d';
    $request->key = 'inventore';
    $request->oauthToken = 'omnis';
    $request->prettyPrint = false;
    $request->profileId = 'quibusdam';
    $request->quotaUser = 'excepturi';
    $request->uploadType = 'nostrum';
    $request->uploadProtocol = 'sint';

    $requestSecurity = new DfareportingFloodlightConfigurationsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->floodlightConfigurations->dfareportingFloodlightConfigurationsPatch($request, $requestSecurity);

    if ($response->floodlightConfiguration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingFloodlightConfigurationsUpdate

Updates an existing floodlight configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingFloodlightConfigurationsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\FloodlightConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValue;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValueMatchTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CustomViewabilityMetric;
use \OpenAPI\OpenAPI\Models\Shared\CustomViewabilityMetricConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\FloodlightConfigurationFirstDayOfWeekEnum;
use \OpenAPI\OpenAPI\Models\Shared\LookbackConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\FloodlightConfigurationNaturalSearchConversionAttributionOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\OmnitureSettings;
use \OpenAPI\OpenAPI\Models\Shared\TagSettings;
use \OpenAPI\OpenAPI\Models\Shared\ThirdPartyAuthenticationToken;
use \OpenAPI\OpenAPI\Models\Shared\UserDefinedVariableConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\UserDefinedVariableConfigurationDataTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\UserDefinedVariableConfigurationVariableTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingFloodlightConfigurationsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingFloodlightConfigurationsUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->floodlightConfiguration = new FloodlightConfiguration();
    $request->floodlightConfiguration->accountId = 'magnam';
    $request->floodlightConfiguration->advertiserId = 'adipisci';
    $request->floodlightConfiguration->advertiserIdDimensionValue = new DimensionValue();
    $request->floodlightConfiguration->advertiserIdDimensionValue->dimensionName = 'natus';
    $request->floodlightConfiguration->advertiserIdDimensionValue->etag = 'necessitatibus';
    $request->floodlightConfiguration->advertiserIdDimensionValue->id = '39266cbd-95f7-4aa2-b241-13695d1e6698';
    $request->floodlightConfiguration->advertiserIdDimensionValue->kind = 'repellat';
    $request->floodlightConfiguration->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->floodlightConfiguration->advertiserIdDimensionValue->value = 'eligendi';
    $request->floodlightConfiguration->analyticsDataSharingEnabled = false;
    $request->floodlightConfiguration->customViewabilityMetric = new CustomViewabilityMetric();
    $request->floodlightConfiguration->customViewabilityMetric->configuration = new CustomViewabilityMetricConfiguration();
    $request->floodlightConfiguration->customViewabilityMetric->configuration->audible = false;
    $request->floodlightConfiguration->customViewabilityMetric->configuration->timeMillis = 312070;
    $request->floodlightConfiguration->customViewabilityMetric->configuration->timePercent = 330591;
    $request->floodlightConfiguration->customViewabilityMetric->configuration->viewabilityPercent = 595669;
    $request->floodlightConfiguration->customViewabilityMetric->id = 'commodi';
    $request->floodlightConfiguration->customViewabilityMetric->name = 'Mildred Kreiger';
    $request->floodlightConfiguration->exposureToConversionEnabled = false;
    $request->floodlightConfiguration->firstDayOfWeek = FloodlightConfigurationFirstDayOfWeekEnum::SUNDAY;
    $request->floodlightConfiguration->id = 'quam';
    $request->floodlightConfiguration->idDimensionValue = new DimensionValue();
    $request->floodlightConfiguration->idDimensionValue->dimensionName = 'molestiae';
    $request->floodlightConfiguration->idDimensionValue->etag = 'aliquid';
    $request->floodlightConfiguration->idDimensionValue->id = '76334254-038b-4fb5-971e-98190557389c';
    $request->floodlightConfiguration->idDimensionValue->kind = 'itaque';
    $request->floodlightConfiguration->idDimensionValue->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->floodlightConfiguration->idDimensionValue->value = 'nam';
    $request->floodlightConfiguration->inAppAttributionTrackingEnabled = false;
    $request->floodlightConfiguration->kind = 'id';
    $request->floodlightConfiguration->lookbackConfiguration = new LookbackConfiguration();
    $request->floodlightConfiguration->lookbackConfiguration->clickDuration = 767361;
    $request->floodlightConfiguration->lookbackConfiguration->postImpressionActivitiesDuration = 449867;
    $request->floodlightConfiguration->naturalSearchConversionAttributionOption = FloodlightConfigurationNaturalSearchConversionAttributionOptionEnum::INCLUDE_NATURAL_SEARCH_TIERED_CONVERSION_ATTRIBUTION;
    $request->floodlightConfiguration->omnitureSettings = new OmnitureSettings();
    $request->floodlightConfiguration->omnitureSettings->omnitureCostDataEnabled = false;
    $request->floodlightConfiguration->omnitureSettings->omnitureIntegrationEnabled = false;
    $request->floodlightConfiguration->subaccountId = 'quibusdam';
    $request->floodlightConfiguration->tagSettings = new TagSettings();
    $request->floodlightConfiguration->tagSettings->dynamicTagEnabled = false;
    $request->floodlightConfiguration->tagSettings->imageTagEnabled = false;
    $request->floodlightConfiguration->thirdPartyAuthenticationTokens = [
        new ThirdPartyAuthenticationToken(),
        new ThirdPartyAuthenticationToken(),
        new ThirdPartyAuthenticationToken(),
    ];
    $request->floodlightConfiguration->userDefinedVariableConfigurations = [
        new UserDefinedVariableConfiguration(),
    ];
    $request->accessToken = 'occaecati';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'unde';
    $request->fields = 'labore';
    $request->key = 'pariatur';
    $request->oauthToken = 'vel';
    $request->prettyPrint = false;
    $request->profileId = 'laboriosam';
    $request->quotaUser = 'soluta';
    $request->uploadType = 'minus';
    $request->uploadProtocol = 'magni';

    $requestSecurity = new DfareportingFloodlightConfigurationsUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->floodlightConfigurations->dfareportingFloodlightConfigurationsUpdate($request, $requestSecurity);

    if ($response->floodlightConfiguration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
