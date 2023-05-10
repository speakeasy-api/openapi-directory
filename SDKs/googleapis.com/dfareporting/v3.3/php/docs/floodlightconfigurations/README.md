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
    $request->accessToken = 'libero';
    $request->alt = AltEnum::JSON;
    $request->callback = 'blanditiis';
    $request->fields = 'aliquam';
    $request->id = 'da99257d-04f4-4084-ba74-2d84496cbdee';
    $request->key = 'impedit';
    $request->oauthToken = 'reiciendis';
    $request->prettyPrint = false;
    $request->profileId = 'ex';
    $request->quotaUser = 'tempore';
    $request->uploadType = 'provident';
    $request->uploadProtocol = 'provident';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'maxime';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'consectetur';
    $request->fields = 'corporis';
    $request->ids = [
        'aspernatur',
        'eveniet',
    ];
    $request->key = 'tempore';
    $request->oauthToken = 'asperiores';
    $request->prettyPrint = false;
    $request->profileId = 'temporibus';
    $request->quotaUser = 'delectus';
    $request->uploadType = 'enim';
    $request->uploadProtocol = 'ipsam';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->floodlightConfiguration = new FloodlightConfiguration();
    $request->floodlightConfiguration->accountId = 'dolores';
    $request->floodlightConfiguration->advertiserId = 'iste';
    $request->floodlightConfiguration->advertiserIdDimensionValue = new DimensionValue();
    $request->floodlightConfiguration->advertiserIdDimensionValue->dimensionName = 'labore';
    $request->floodlightConfiguration->advertiserIdDimensionValue->etag = 'porro';
    $request->floodlightConfiguration->advertiserIdDimensionValue->id = '060b06a1-2877-464e-af6d-0c6d6ed9c73d';
    $request->floodlightConfiguration->advertiserIdDimensionValue->kind = 'temporibus';
    $request->floodlightConfiguration->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->floodlightConfiguration->advertiserIdDimensionValue->value = 'non';
    $request->floodlightConfiguration->analyticsDataSharingEnabled = false;
    $request->floodlightConfiguration->customViewabilityMetric = new CustomViewabilityMetric();
    $request->floodlightConfiguration->customViewabilityMetric->configuration = new CustomViewabilityMetricConfiguration();
    $request->floodlightConfiguration->customViewabilityMetric->configuration->audible = false;
    $request->floodlightConfiguration->customViewabilityMetric->configuration->timeMillis = 285544;
    $request->floodlightConfiguration->customViewabilityMetric->configuration->timePercent = 341934;
    $request->floodlightConfiguration->customViewabilityMetric->configuration->viewabilityPercent = 492227;
    $request->floodlightConfiguration->customViewabilityMetric->id = 'illo';
    $request->floodlightConfiguration->customViewabilityMetric->name = 'Cynthia McClure';
    $request->floodlightConfiguration->exposureToConversionEnabled = false;
    $request->floodlightConfiguration->firstDayOfWeek = FloodlightConfigurationFirstDayOfWeekEnum::SUNDAY;
    $request->floodlightConfiguration->id = 'deleniti';
    $request->floodlightConfiguration->idDimensionValue = new DimensionValue();
    $request->floodlightConfiguration->idDimensionValue->dimensionName = 'dignissimos';
    $request->floodlightConfiguration->idDimensionValue->etag = 'doloremque';
    $request->floodlightConfiguration->idDimensionValue->id = 'd3c5a1f9-c242-4c7b-a6a1-f30c73df5b67';
    $request->floodlightConfiguration->idDimensionValue->kind = 'vitae';
    $request->floodlightConfiguration->idDimensionValue->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->floodlightConfiguration->idDimensionValue->value = 'voluptatum';
    $request->floodlightConfiguration->inAppAttributionTrackingEnabled = false;
    $request->floodlightConfiguration->kind = 'iste';
    $request->floodlightConfiguration->lookbackConfiguration = new LookbackConfiguration();
    $request->floodlightConfiguration->lookbackConfiguration->clickDuration = 50903;
    $request->floodlightConfiguration->lookbackConfiguration->postImpressionActivitiesDuration = 968945;
    $request->floodlightConfiguration->naturalSearchConversionAttributionOption = FloodlightConfigurationNaturalSearchConversionAttributionOptionEnum::EXCLUDE_NATURAL_SEARCH_CONVERSION_ATTRIBUTION;
    $request->floodlightConfiguration->omnitureSettings = new OmnitureSettings();
    $request->floodlightConfiguration->omnitureSettings->omnitureCostDataEnabled = false;
    $request->floodlightConfiguration->omnitureSettings->omnitureIntegrationEnabled = false;
    $request->floodlightConfiguration->subaccountId = 'consequuntur';
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
        new UserDefinedVariableConfiguration(),
    ];
    $request->accessToken = 'nobis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'modi';
    $request->fields = 'adipisci';
    $request->id = '8d85b260-591d-4745-a3c2-059c9c3f567e';
    $request->key = 'aperiam';
    $request->oauthToken = 'itaque';
    $request->prettyPrint = false;
    $request->profileId = 'sed';
    $request->quotaUser = 'corporis';
    $request->uploadType = 'consequuntur';
    $request->uploadProtocol = 'odio';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->floodlightConfiguration = new FloodlightConfiguration();
    $request->floodlightConfiguration->accountId = 'quis';
    $request->floodlightConfiguration->advertiserId = 'nobis';
    $request->floodlightConfiguration->advertiserIdDimensionValue = new DimensionValue();
    $request->floodlightConfiguration->advertiserIdDimensionValue->dimensionName = 'beatae';
    $request->floodlightConfiguration->advertiserIdDimensionValue->etag = 'repellendus';
    $request->floodlightConfiguration->advertiserIdDimensionValue->id = '62fcdace-1f01-4216-8e22-39e8f25cd0d1';
    $request->floodlightConfiguration->advertiserIdDimensionValue->kind = 'omnis';
    $request->floodlightConfiguration->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->floodlightConfiguration->advertiserIdDimensionValue->value = 'excepturi';
    $request->floodlightConfiguration->analyticsDataSharingEnabled = false;
    $request->floodlightConfiguration->customViewabilityMetric = new CustomViewabilityMetric();
    $request->floodlightConfiguration->customViewabilityMetric->configuration = new CustomViewabilityMetricConfiguration();
    $request->floodlightConfiguration->customViewabilityMetric->configuration->audible = false;
    $request->floodlightConfiguration->customViewabilityMetric->configuration->timeMillis = 346081;
    $request->floodlightConfiguration->customViewabilityMetric->configuration->timePercent = 575838;
    $request->floodlightConfiguration->customViewabilityMetric->configuration->viewabilityPercent = 984080;
    $request->floodlightConfiguration->customViewabilityMetric->id = 'magnam';
    $request->floodlightConfiguration->customViewabilityMetric->name = 'Ada Tromp';
    $request->floodlightConfiguration->exposureToConversionEnabled = false;
    $request->floodlightConfiguration->firstDayOfWeek = FloodlightConfigurationFirstDayOfWeekEnum::MONDAY;
    $request->floodlightConfiguration->id = 'nisi';
    $request->floodlightConfiguration->idDimensionValue = new DimensionValue();
    $request->floodlightConfiguration->idDimensionValue->dimensionName = 'commodi';
    $request->floodlightConfiguration->idDimensionValue->etag = 'impedit';
    $request->floodlightConfiguration->idDimensionValue->id = 'bd95f7aa-2b24-4113-a95d-1e6698fcc459';
    $request->floodlightConfiguration->idDimensionValue->kind = 'commodi';
    $request->floodlightConfiguration->idDimensionValue->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->floodlightConfiguration->idDimensionValue->value = 'dicta';
    $request->floodlightConfiguration->inAppAttributionTrackingEnabled = false;
    $request->floodlightConfiguration->kind = 'molestiae';
    $request->floodlightConfiguration->lookbackConfiguration = new LookbackConfiguration();
    $request->floodlightConfiguration->lookbackConfiguration->clickDuration = 804685;
    $request->floodlightConfiguration->lookbackConfiguration->postImpressionActivitiesDuration = 173072;
    $request->floodlightConfiguration->naturalSearchConversionAttributionOption = FloodlightConfigurationNaturalSearchConversionAttributionOptionEnum::INCLUDE_NATURAL_SEARCH_CONVERSION_ATTRIBUTION;
    $request->floodlightConfiguration->omnitureSettings = new OmnitureSettings();
    $request->floodlightConfiguration->omnitureSettings->omnitureCostDataEnabled = false;
    $request->floodlightConfiguration->omnitureSettings->omnitureIntegrationEnabled = false;
    $request->floodlightConfiguration->subaccountId = 'quam';
    $request->floodlightConfiguration->tagSettings = new TagSettings();
    $request->floodlightConfiguration->tagSettings->dynamicTagEnabled = false;
    $request->floodlightConfiguration->tagSettings->imageTagEnabled = false;
    $request->floodlightConfiguration->thirdPartyAuthenticationTokens = [
        new ThirdPartyAuthenticationToken(),
        new ThirdPartyAuthenticationToken(),
    ];
    $request->floodlightConfiguration->userDefinedVariableConfigurations = [
        new UserDefinedVariableConfiguration(),
        new UserDefinedVariableConfiguration(),
    ];
    $request->accessToken = 'voluptate';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'consectetur';
    $request->fields = 'velit';
    $request->key = 'tempora';
    $request->oauthToken = 'aspernatur';
    $request->prettyPrint = false;
    $request->profileId = 'ad';
    $request->quotaUser = 'incidunt';
    $request->uploadType = 'alias';
    $request->uploadProtocol = 'adipisci';

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
