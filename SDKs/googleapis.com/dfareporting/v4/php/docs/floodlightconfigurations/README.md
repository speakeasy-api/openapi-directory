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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'optio';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'architecto';
    $request->fields = 'reiciendis';
    $request->id = '01216ce2-239e-48f2-9cd0-d19d959f439e';
    $request->key = 'velit';
    $request->oauthToken = 'sint';
    $request->prettyPrint = false;
    $request->profileId = 'eos';
    $request->quotaUser = 'nisi';
    $request->uploadType = 'commodi';
    $request->uploadProtocol = 'impedit';

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
    $request->accessToken = 'temporibus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quaerat';
    $request->fields = 'delectus';
    $request->ids = [
        'deserunt',
        'laborum',
    ];
    $request->key = 'odit';
    $request->oauthToken = 'rerum';
    $request->prettyPrint = false;
    $request->profileId = 'consequuntur';
    $request->quotaUser = 'magnam';
    $request->uploadType = 'et';
    $request->uploadProtocol = 'et';

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
    $request->floodlightConfiguration->accountId = 'nisi';
    $request->floodlightConfiguration->advertiserId = 'perspiciatis';
    $request->floodlightConfiguration->advertiserIdDimensionValue = new DimensionValue();
    $request->floodlightConfiguration->advertiserIdDimensionValue->dimensionName = 'nostrum';
    $request->floodlightConfiguration->advertiserIdDimensionValue->etag = 'temporibus';
    $request->floodlightConfiguration->advertiserIdDimensionValue->id = '1e6698fc-c459-4621-bc29-776763342540';
    $request->floodlightConfiguration->advertiserIdDimensionValue->kind = 'adipisci';
    $request->floodlightConfiguration->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->floodlightConfiguration->advertiserIdDimensionValue->value = 'tempore';
    $request->floodlightConfiguration->analyticsDataSharingEnabled = false;
    $request->floodlightConfiguration->customViewabilityMetric = new CustomViewabilityMetric();
    $request->floodlightConfiguration->customViewabilityMetric->configuration = new CustomViewabilityMetricConfiguration();
    $request->floodlightConfiguration->customViewabilityMetric->configuration->audible = false;
    $request->floodlightConfiguration->customViewabilityMetric->configuration->timeMillis = 989913;
    $request->floodlightConfiguration->customViewabilityMetric->configuration->timePercent = 716975;
    $request->floodlightConfiguration->customViewabilityMetric->configuration->viewabilityPercent = 328217;
    $request->floodlightConfiguration->customViewabilityMetric->id = 'cupiditate';
    $request->floodlightConfiguration->customViewabilityMetric->name = 'Catherine Thompson';
    $request->floodlightConfiguration->exposureToConversionEnabled = false;
    $request->floodlightConfiguration->firstDayOfWeek = FloodlightConfigurationFirstDayOfWeekEnum::MONDAY;
    $request->floodlightConfiguration->id = 'perspiciatis';
    $request->floodlightConfiguration->idDimensionValue = new DimensionValue();
    $request->floodlightConfiguration->idDimensionValue->dimensionName = 'perferendis';
    $request->floodlightConfiguration->idDimensionValue->etag = 'corporis';
    $request->floodlightConfiguration->idDimensionValue->id = '57389ced-bac7-4fda-b959-4d66bc2ae480';
    $request->floodlightConfiguration->idDimensionValue->kind = 'autem';
    $request->floodlightConfiguration->idDimensionValue->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->floodlightConfiguration->idDimensionValue->value = 'explicabo';
    $request->floodlightConfiguration->inAppAttributionTrackingEnabled = false;
    $request->floodlightConfiguration->kind = 'rerum';
    $request->floodlightConfiguration->lookbackConfiguration = new LookbackConfiguration();
    $request->floodlightConfiguration->lookbackConfiguration->clickDuration = 613744;
    $request->floodlightConfiguration->lookbackConfiguration->postImpressionActivitiesDuration = 579690;
    $request->floodlightConfiguration->naturalSearchConversionAttributionOption = FloodlightConfigurationNaturalSearchConversionAttributionOptionEnum::EXCLUDE_NATURAL_SEARCH_CONVERSION_ATTRIBUTION;
    $request->floodlightConfiguration->omnitureSettings = new OmnitureSettings();
    $request->floodlightConfiguration->omnitureSettings->omnitureCostDataEnabled = false;
    $request->floodlightConfiguration->omnitureSettings->omnitureIntegrationEnabled = false;
    $request->floodlightConfiguration->subaccountId = 'tempora';
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
    $request->accessToken = 'voluptatibus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'qui';
    $request->fields = 'explicabo';
    $request->id = '06369828-553c-4b10-806b-ef4921ec2053';
    $request->key = 'libero';
    $request->oauthToken = 'molestiae';
    $request->prettyPrint = false;
    $request->profileId = 'eius';
    $request->quotaUser = 'perspiciatis';
    $request->uploadType = 'amet';
    $request->uploadProtocol = 'ex';

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
    $request->floodlightConfiguration->accountId = 'officia';
    $request->floodlightConfiguration->advertiserId = 'quisquam';
    $request->floodlightConfiguration->advertiserIdDimensionValue = new DimensionValue();
    $request->floodlightConfiguration->advertiserIdDimensionValue->dimensionName = 'rem';
    $request->floodlightConfiguration->advertiserIdDimensionValue->etag = 'eveniet';
    $request->floodlightConfiguration->advertiserIdDimensionValue->id = 'e0f2bf19-588d-440d-83f3-deba297be3e9';
    $request->floodlightConfiguration->advertiserIdDimensionValue->kind = 'consequatur';
    $request->floodlightConfiguration->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->floodlightConfiguration->advertiserIdDimensionValue->value = 'nobis';
    $request->floodlightConfiguration->analyticsDataSharingEnabled = false;
    $request->floodlightConfiguration->customViewabilityMetric = new CustomViewabilityMetric();
    $request->floodlightConfiguration->customViewabilityMetric->configuration = new CustomViewabilityMetricConfiguration();
    $request->floodlightConfiguration->customViewabilityMetric->configuration->audible = false;
    $request->floodlightConfiguration->customViewabilityMetric->configuration->timeMillis = 256325;
    $request->floodlightConfiguration->customViewabilityMetric->configuration->timePercent = 6237;
    $request->floodlightConfiguration->customViewabilityMetric->configuration->viewabilityPercent = 840272;
    $request->floodlightConfiguration->customViewabilityMetric->id = 'doloribus';
    $request->floodlightConfiguration->customViewabilityMetric->name = 'Edgar Kuvalis';
    $request->floodlightConfiguration->exposureToConversionEnabled = false;
    $request->floodlightConfiguration->firstDayOfWeek = FloodlightConfigurationFirstDayOfWeekEnum::MONDAY;
    $request->floodlightConfiguration->id = 'ratione';
    $request->floodlightConfiguration->idDimensionValue = new DimensionValue();
    $request->floodlightConfiguration->idDimensionValue->dimensionName = 'dolore';
    $request->floodlightConfiguration->idDimensionValue->etag = 'perferendis';
    $request->floodlightConfiguration->idDimensionValue->id = '5cb331d4-92f4-4f12-bfb0-e0bf1f821797';
    $request->floodlightConfiguration->idDimensionValue->kind = 'voluptatum';
    $request->floodlightConfiguration->idDimensionValue->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->floodlightConfiguration->idDimensionValue->value = 'consequatur';
    $request->floodlightConfiguration->inAppAttributionTrackingEnabled = false;
    $request->floodlightConfiguration->kind = 'similique';
    $request->floodlightConfiguration->lookbackConfiguration = new LookbackConfiguration();
    $request->floodlightConfiguration->lookbackConfiguration->clickDuration = 753814;
    $request->floodlightConfiguration->lookbackConfiguration->postImpressionActivitiesDuration = 774567;
    $request->floodlightConfiguration->naturalSearchConversionAttributionOption = FloodlightConfigurationNaturalSearchConversionAttributionOptionEnum::INCLUDE_NATURAL_SEARCH_CONVERSION_ATTRIBUTION;
    $request->floodlightConfiguration->omnitureSettings = new OmnitureSettings();
    $request->floodlightConfiguration->omnitureSettings->omnitureCostDataEnabled = false;
    $request->floodlightConfiguration->omnitureSettings->omnitureIntegrationEnabled = false;
    $request->floodlightConfiguration->subaccountId = 'odio';
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
        new UserDefinedVariableConfiguration(),
    ];
    $request->accessToken = 'repudiandae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'voluptate';
    $request->fields = 'cum';
    $request->key = 'esse';
    $request->oauthToken = 'alias';
    $request->prettyPrint = false;
    $request->profileId = 'consequuntur';
    $request->quotaUser = 'architecto';
    $request->uploadType = 'est';
    $request->uploadProtocol = 'nemo';

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
