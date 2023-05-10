# properties

### Available Operations

* [analyticsadminPropertiesAcknowledgeUserDataCollection](#analyticsadminpropertiesacknowledgeuserdatacollection) - Acknowledges the terms of user data collection for the specified property. This acknowledgement must be completed (either in the Google Analytics UI or through this API) before MeasurementProtocolSecret resources may be created.
* [analyticsadminPropertiesConversionEventsCreate](#analyticsadminpropertiesconversioneventscreate) - Creates a conversion event with the specified attributes.
* [analyticsadminPropertiesConversionEventsList](#analyticsadminpropertiesconversioneventslist) - Returns a list of conversion events in the specified parent property. Returns an empty list if no conversion events are found.
* [analyticsadminPropertiesCreate](#analyticsadminpropertiescreate) - Creates an "GA4" property with the specified location and attributes.
* [analyticsadminPropertiesCustomDimensionsCreate](#analyticsadminpropertiescustomdimensionscreate) - Creates a CustomDimension.
* [analyticsadminPropertiesCustomDimensionsList](#analyticsadminpropertiescustomdimensionslist) - Lists CustomDimensions on a property.
* [analyticsadminPropertiesCustomMetricsArchive](#analyticsadminpropertiescustommetricsarchive) - Archives a CustomMetric on a property.
* [analyticsadminPropertiesCustomMetricsCreate](#analyticsadminpropertiescustommetricscreate) - Creates a CustomMetric.
* [analyticsadminPropertiesCustomMetricsList](#analyticsadminpropertiescustommetricslist) - Lists CustomMetrics on a property.
* [analyticsadminPropertiesDataStreamsCreate](#analyticsadminpropertiesdatastreamscreate) - Creates a DataStream.
* [analyticsadminPropertiesDataStreamsList](#analyticsadminpropertiesdatastreamslist) - Lists DataStreams on a property.
* [analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreate](#analyticsadminpropertiesdatastreamsmeasurementprotocolsecretscreate) - Creates a measurement protocol secret.
* [analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGet](#analyticsadminpropertiesdatastreamsmeasurementprotocolsecretsget) - Lookup for a single "GA4" MeasurementProtocolSecret.
* [analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsList](#analyticsadminpropertiesdatastreamsmeasurementprotocolsecretslist) - Returns child MeasurementProtocolSecrets under the specified parent Property.
* [analyticsadminPropertiesFirebaseLinksCreate](#analyticsadminpropertiesfirebaselinkscreate) - Creates a FirebaseLink. Properties can have at most one FirebaseLink.
* [analyticsadminPropertiesFirebaseLinksList](#analyticsadminpropertiesfirebaselinkslist) - Lists FirebaseLinks on a property. Properties can have at most one FirebaseLink.
* [analyticsadminPropertiesGoogleAdsLinksCreate](#analyticsadminpropertiesgoogleadslinkscreate) - Creates a GoogleAdsLink.
* [analyticsadminPropertiesGoogleAdsLinksDelete](#analyticsadminpropertiesgoogleadslinksdelete) - Deletes a GoogleAdsLink on a property
* [analyticsadminPropertiesGoogleAdsLinksList](#analyticsadminpropertiesgoogleadslinkslist) - Lists GoogleAdsLinks on a property.
* [analyticsadminPropertiesGoogleAdsLinksPatch](#analyticsadminpropertiesgoogleadslinkspatch) - Updates a GoogleAdsLink on a property
* [analyticsadminPropertiesList](#analyticsadminpropertieslist) - Returns child Properties under the specified parent Account. Only "GA4" properties will be returned. Properties will be excluded if the caller does not have access. Soft-deleted (ie: "trashed") properties are excluded by default. Returns an empty list if no relevant properties are found.
* [analyticsadminPropertiesRunAccessReport](#analyticsadminpropertiesrunaccessreport) - Returns a customized report of data access records. The report provides records of each time a user reads Google Analytics reporting data. Access records are retained for up to 2 years. Data Access Reports can be requested for a property. The property must be in Google Analytics 360. This method is only available to Administrators. These data access records include GA4 UI Reporting, GA4 UI Explorations, GA4 Data API, and other products like Firebase & Admob that can retrieve data from Google Analytics through a linkage. These records don't include property configuration changes like adding a stream or changing a property's time zone. For configuration change history, see [searchChangeHistoryEvents](https://developers.google.com/analytics/devguides/config/admin/v1/rest/v1alpha/accounts/searchChangeHistoryEvents).

## analyticsadminPropertiesAcknowledgeUserDataCollection

Acknowledges the terms of user data collection for the specified property. This acknowledgement must be completed (either in the Google Analytics UI or through this API) before MeasurementProtocolSecret resources may be created.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesAcknowledgeUserDataCollectionRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1betaAcknowledgeUserDataCollectionRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesAcknowledgeUserDataCollectionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsadminPropertiesAcknowledgeUserDataCollectionRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleAnalyticsAdminV1betaAcknowledgeUserDataCollectionRequest = new GoogleAnalyticsAdminV1betaAcknowledgeUserDataCollectionRequest();
    $request->googleAnalyticsAdminV1betaAcknowledgeUserDataCollectionRequest->acknowledgement = 'fuga';
    $request->accessToken = 'in';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'iste';
    $request->fields = 'iure';
    $request->key = 'saepe';
    $request->oauthToken = 'quidem';
    $request->prettyPrint = false;
    $request->property = 'architecto';
    $request->quotaUser = 'ipsa';
    $request->uploadType = 'reiciendis';
    $request->uploadProtocol = 'est';

    $requestSecurity = new AnalyticsadminPropertiesAcknowledgeUserDataCollectionSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->analyticsadminPropertiesAcknowledgeUserDataCollection($request, $requestSecurity);

    if ($response->googleAnalyticsAdminV1betaAcknowledgeUserDataCollectionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsadminPropertiesConversionEventsCreate

Creates a conversion event with the specified attributes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesConversionEventsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1betaConversionEventInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesConversionEventsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsadminPropertiesConversionEventsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleAnalyticsAdminV1betaConversionEventInput = new GoogleAnalyticsAdminV1betaConversionEventInput();
    $request->googleAnalyticsAdminV1betaConversionEventInput->eventName = 'laborum';
    $request->accessToken = 'dolores';
    $request->alt = AltEnum::JSON;
    $request->callback = 'corporis';
    $request->fields = 'explicabo';
    $request->key = 'nobis';
    $request->oauthToken = 'enim';
    $request->parent = 'omnis';
    $request->prettyPrint = false;
    $request->quotaUser = 'nemo';
    $request->uploadType = 'minima';
    $request->uploadProtocol = 'excepturi';

    $requestSecurity = new AnalyticsadminPropertiesConversionEventsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->analyticsadminPropertiesConversionEventsCreate($request, $requestSecurity);

    if ($response->googleAnalyticsAdminV1betaConversionEvent !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsadminPropertiesConversionEventsList

Returns a list of conversion events in the specified parent property. Returns an empty list if no conversion events are found.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesConversionEventsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesConversionEventsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesConversionEventsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesConversionEventsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsadminPropertiesConversionEventsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'iure';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'doloribus';
    $request->fields = 'sapiente';
    $request->key = 'architecto';
    $request->oauthToken = 'mollitia';
    $request->pageSize = 208876;
    $request->pageToken = 'culpa';
    $request->parent = 'consequuntur';
    $request->prettyPrint = false;
    $request->quotaUser = 'repellat';
    $request->uploadType = 'mollitia';
    $request->uploadProtocol = 'occaecati';

    $requestSecurity = new AnalyticsadminPropertiesConversionEventsListSecurity();
    $requestSecurity->option1 = new AnalyticsadminPropertiesConversionEventsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->analyticsadminPropertiesConversionEventsList($request, $requestSecurity);

    if ($response->googleAnalyticsAdminV1betaListConversionEventsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsadminPropertiesCreate

Creates an "GA4" property with the specified location and attributes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1betaPropertyInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1betaPropertyIndustryCategoryEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1betaPropertyPropertyTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsadminPropertiesCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleAnalyticsAdminV1betaPropertyInput = new GoogleAnalyticsAdminV1betaPropertyInput();
    $request->googleAnalyticsAdminV1betaPropertyInput->account = 'commodi';
    $request->googleAnalyticsAdminV1betaPropertyInput->currencyCode = 'quam';
    $request->googleAnalyticsAdminV1betaPropertyInput->displayName = 'molestiae';
    $request->googleAnalyticsAdminV1betaPropertyInput->industryCategory = GoogleAnalyticsAdminV1betaPropertyIndustryCategoryEnum::TRAVEL;
    $request->googleAnalyticsAdminV1betaPropertyInput->parent = 'error';
    $request->googleAnalyticsAdminV1betaPropertyInput->propertyType = GoogleAnalyticsAdminV1betaPropertyPropertyTypeEnum::PROPERTY_TYPE_UNSPECIFIED;
    $request->googleAnalyticsAdminV1betaPropertyInput->timeZone = 'quis';
    $request->accessToken = 'vitae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'animi';
    $request->fields = 'enim';
    $request->key = 'odit';
    $request->oauthToken = 'quo';
    $request->prettyPrint = false;
    $request->quotaUser = 'sequi';
    $request->uploadType = 'tenetur';
    $request->uploadProtocol = 'ipsam';

    $requestSecurity = new AnalyticsadminPropertiesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->analyticsadminPropertiesCreate($request, $requestSecurity);

    if ($response->googleAnalyticsAdminV1betaProperty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsadminPropertiesCustomDimensionsCreate

Creates a CustomDimension.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesCustomDimensionsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1betaCustomDimensionInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1betaCustomDimensionScopeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesCustomDimensionsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsadminPropertiesCustomDimensionsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleAnalyticsAdminV1betaCustomDimensionInput = new GoogleAnalyticsAdminV1betaCustomDimensionInput();
    $request->googleAnalyticsAdminV1betaCustomDimensionInput->description = 'possimus';
    $request->googleAnalyticsAdminV1betaCustomDimensionInput->disallowAdsPersonalization = false;
    $request->googleAnalyticsAdminV1betaCustomDimensionInput->displayName = 'aut';
    $request->googleAnalyticsAdminV1betaCustomDimensionInput->parameterName = 'quasi';
    $request->googleAnalyticsAdminV1betaCustomDimensionInput->scope = GoogleAnalyticsAdminV1betaCustomDimensionScopeEnum::USER;
    $request->accessToken = 'temporibus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quasi';
    $request->fields = 'reiciendis';
    $request->key = 'voluptatibus';
    $request->oauthToken = 'vero';
    $request->parent = 'nihil';
    $request->prettyPrint = false;
    $request->quotaUser = 'praesentium';
    $request->uploadType = 'voluptatibus';
    $request->uploadProtocol = 'ipsa';

    $requestSecurity = new AnalyticsadminPropertiesCustomDimensionsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->analyticsadminPropertiesCustomDimensionsCreate($request, $requestSecurity);

    if ($response->googleAnalyticsAdminV1betaCustomDimension !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsadminPropertiesCustomDimensionsList

Lists CustomDimensions on a property.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesCustomDimensionsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesCustomDimensionsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesCustomDimensionsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesCustomDimensionsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsadminPropertiesCustomDimensionsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'voluptate';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'perferendis';
    $request->fields = 'doloremque';
    $request->key = 'reprehenderit';
    $request->oauthToken = 'ut';
    $request->pageSize = 979587;
    $request->pageToken = 'dicta';
    $request->parent = 'corporis';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolore';
    $request->uploadType = 'iusto';
    $request->uploadProtocol = 'dicta';

    $requestSecurity = new AnalyticsadminPropertiesCustomDimensionsListSecurity();
    $requestSecurity->option1 = new AnalyticsadminPropertiesCustomDimensionsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->analyticsadminPropertiesCustomDimensionsList($request, $requestSecurity);

    if ($response->googleAnalyticsAdminV1betaListCustomDimensionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsadminPropertiesCustomMetricsArchive

Archives a CustomMetric on a property.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesCustomMetricsArchiveRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesCustomMetricsArchiveSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsadminPropertiesCustomMetricsArchiveRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'accusamus' => 'commodi',
        'repudiandae' => 'quae',
    ];
    $request->accessToken = 'ipsum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'molestias';
    $request->fields = 'excepturi';
    $request->key = 'pariatur';
    $request->name = 'Irma Ledner DVM';
    $request->oauthToken = 'sint';
    $request->prettyPrint = false;
    $request->quotaUser = 'veritatis';
    $request->uploadType = 'itaque';
    $request->uploadProtocol = 'incidunt';

    $requestSecurity = new AnalyticsadminPropertiesCustomMetricsArchiveSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->analyticsadminPropertiesCustomMetricsArchive($request, $requestSecurity);

    if ($response->googleProtobufEmpty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsadminPropertiesCustomMetricsCreate

Creates a CustomMetric.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesCustomMetricsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1betaCustomMetricInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1betaCustomMetricMeasurementUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1betaCustomMetricRestrictedMetricTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1betaCustomMetricScopeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesCustomMetricsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsadminPropertiesCustomMetricsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleAnalyticsAdminV1betaCustomMetricInput = new GoogleAnalyticsAdminV1betaCustomMetricInput();
    $request->googleAnalyticsAdminV1betaCustomMetricInput->description = 'consequatur';
    $request->googleAnalyticsAdminV1betaCustomMetricInput->displayName = 'est';
    $request->googleAnalyticsAdminV1betaCustomMetricInput->measurementUnit = GoogleAnalyticsAdminV1betaCustomMetricMeasurementUnitEnum::MINUTES;
    $request->googleAnalyticsAdminV1betaCustomMetricInput->parameterName = 'explicabo';
    $request->googleAnalyticsAdminV1betaCustomMetricInput->restrictedMetricType = [
        GoogleAnalyticsAdminV1betaCustomMetricRestrictedMetricTypeEnum::REVENUE_DATA,
        GoogleAnalyticsAdminV1betaCustomMetricRestrictedMetricTypeEnum::REVENUE_DATA,
        GoogleAnalyticsAdminV1betaCustomMetricRestrictedMetricTypeEnum::RESTRICTED_METRIC_TYPE_UNSPECIFIED,
    ];
    $request->googleAnalyticsAdminV1betaCustomMetricInput->scope = GoogleAnalyticsAdminV1betaCustomMetricScopeEnum::METRIC_SCOPE_UNSPECIFIED;
    $request->accessToken = 'qui';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'cupiditate';
    $request->fields = 'quos';
    $request->key = 'perferendis';
    $request->oauthToken = 'magni';
    $request->parent = 'assumenda';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsam';
    $request->uploadType = 'alias';
    $request->uploadProtocol = 'fugit';

    $requestSecurity = new AnalyticsadminPropertiesCustomMetricsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->analyticsadminPropertiesCustomMetricsCreate($request, $requestSecurity);

    if ($response->googleAnalyticsAdminV1betaCustomMetric !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsadminPropertiesCustomMetricsList

Lists CustomMetrics on a property.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesCustomMetricsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesCustomMetricsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesCustomMetricsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesCustomMetricsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsadminPropertiesCustomMetricsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'facilis';
    $request->fields = 'tempore';
    $request->key = 'labore';
    $request->oauthToken = 'delectus';
    $request->pageSize = 433288;
    $request->pageToken = 'non';
    $request->parent = 'eligendi';
    $request->prettyPrint = false;
    $request->quotaUser = 'sint';
    $request->uploadType = 'aliquid';
    $request->uploadProtocol = 'provident';

    $requestSecurity = new AnalyticsadminPropertiesCustomMetricsListSecurity();
    $requestSecurity->option1 = new AnalyticsadminPropertiesCustomMetricsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->analyticsadminPropertiesCustomMetricsList($request, $requestSecurity);

    if ($response->googleAnalyticsAdminV1betaListCustomMetricsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsadminPropertiesDataStreamsCreate

Creates a DataStream.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesDataStreamsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1betaDataStreamInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1betaDataStreamAndroidAppStreamDataInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1betaDataStreamIosAppStreamDataInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1betaDataStreamTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1betaDataStreamWebStreamDataInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesDataStreamsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsadminPropertiesDataStreamsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleAnalyticsAdminV1betaDataStreamInput = new GoogleAnalyticsAdminV1betaDataStreamInput();
    $request->googleAnalyticsAdminV1betaDataStreamInput->androidAppStreamData = new GoogleAnalyticsAdminV1betaDataStreamAndroidAppStreamDataInput();
    $request->googleAnalyticsAdminV1betaDataStreamInput->androidAppStreamData->packageName = 'sint';
    $request->googleAnalyticsAdminV1betaDataStreamInput->displayName = 'officia';
    $request->googleAnalyticsAdminV1betaDataStreamInput->iosAppStreamData = new GoogleAnalyticsAdminV1betaDataStreamIosAppStreamDataInput();
    $request->googleAnalyticsAdminV1betaDataStreamInput->iosAppStreamData->bundleId = 'dolor';
    $request->googleAnalyticsAdminV1betaDataStreamInput->type = GoogleAnalyticsAdminV1betaDataStreamTypeEnum::IOS_APP_DATA_STREAM;
    $request->googleAnalyticsAdminV1betaDataStreamInput->webStreamData = new GoogleAnalyticsAdminV1betaDataStreamWebStreamDataInput();
    $request->googleAnalyticsAdminV1betaDataStreamInput->webStreamData->defaultUri = 'a';
    $request->accessToken = 'dolorum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'in';
    $request->fields = 'illum';
    $request->key = 'maiores';
    $request->oauthToken = 'rerum';
    $request->parent = 'dicta';
    $request->prettyPrint = false;
    $request->quotaUser = 'magnam';
    $request->uploadType = 'cumque';
    $request->uploadProtocol = 'facere';

    $requestSecurity = new AnalyticsadminPropertiesDataStreamsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->analyticsadminPropertiesDataStreamsCreate($request, $requestSecurity);

    if ($response->googleAnalyticsAdminV1betaDataStream !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsadminPropertiesDataStreamsList

Lists DataStreams on a property.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesDataStreamsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesDataStreamsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesDataStreamsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesDataStreamsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsadminPropertiesDataStreamsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'aliquid';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'accusamus';
    $request->fields = 'non';
    $request->key = 'occaecati';
    $request->oauthToken = 'enim';
    $request->pageSize = 881736;
    $request->pageToken = 'delectus';
    $request->parent = 'quidem';
    $request->prettyPrint = false;
    $request->quotaUser = 'provident';
    $request->uploadType = 'nam';
    $request->uploadProtocol = 'id';

    $requestSecurity = new AnalyticsadminPropertiesDataStreamsListSecurity();
    $requestSecurity->option1 = new AnalyticsadminPropertiesDataStreamsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->analyticsadminPropertiesDataStreamsList($request, $requestSecurity);

    if ($response->googleAnalyticsAdminV1betaListDataStreamsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreate

Creates a measurement protocol secret.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1betaMeasurementProtocolSecretInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleAnalyticsAdminV1betaMeasurementProtocolSecretInput = new GoogleAnalyticsAdminV1betaMeasurementProtocolSecretInput();
    $request->googleAnalyticsAdminV1betaMeasurementProtocolSecretInput->displayName = 'deleniti';
    $request->accessToken = 'sapiente';
    $request->alt = AltEnum::JSON;
    $request->callback = 'deserunt';
    $request->fields = 'nisi';
    $request->key = 'vel';
    $request->oauthToken = 'natus';
    $request->parent = 'omnis';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestiae';
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'nihil';

    $requestSecurity = new AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreate($request, $requestSecurity);

    if ($response->googleAnalyticsAdminV1betaMeasurementProtocolSecret !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGet

Lookup for a single "GA4" MeasurementProtocolSecret.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'distinctio';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'labore';
    $request->fields = 'labore';
    $request->key = 'suscipit';
    $request->name = 'Robin Keebler';
    $request->oauthToken = 'architecto';
    $request->prettyPrint = false;
    $request->quotaUser = 'magnam';
    $request->uploadType = 'et';
    $request->uploadProtocol = 'excepturi';

    $requestSecurity = new AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetSecurity();
    $requestSecurity->option1 = new AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGet($request, $requestSecurity);

    if ($response->googleAnalyticsAdminV1betaMeasurementProtocolSecret !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsList

Returns child MeasurementProtocolSecrets under the specified parent Property.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'sint';
    $request->fields = 'accusantium';
    $request->key = 'mollitia';
    $request->oauthToken = 'reiciendis';
    $request->pageSize = 652103;
    $request->pageToken = 'ad';
    $request->parent = 'eum';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolor';
    $request->uploadType = 'necessitatibus';
    $request->uploadProtocol = 'odit';

    $requestSecurity = new AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListSecurity();
    $requestSecurity->option1 = new AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsList($request, $requestSecurity);

    if ($response->googleAnalyticsAdminV1betaListMeasurementProtocolSecretsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsadminPropertiesFirebaseLinksCreate

Creates a FirebaseLink. Properties can have at most one FirebaseLink.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesFirebaseLinksCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1betaFirebaseLinkInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesFirebaseLinksCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsadminPropertiesFirebaseLinksCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleAnalyticsAdminV1betaFirebaseLinkInput = new GoogleAnalyticsAdminV1betaFirebaseLinkInput();
    $request->googleAnalyticsAdminV1betaFirebaseLinkInput->project = 'quasi';
    $request->accessToken = 'iure';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'debitis';
    $request->fields = 'eius';
    $request->key = 'maxime';
    $request->oauthToken = 'deleniti';
    $request->parent = 'facilis';
    $request->prettyPrint = false;
    $request->quotaUser = 'in';
    $request->uploadType = 'architecto';
    $request->uploadProtocol = 'architecto';

    $requestSecurity = new AnalyticsadminPropertiesFirebaseLinksCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->analyticsadminPropertiesFirebaseLinksCreate($request, $requestSecurity);

    if ($response->googleAnalyticsAdminV1betaFirebaseLink !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsadminPropertiesFirebaseLinksList

Lists FirebaseLinks on a property. Properties can have at most one FirebaseLink.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesFirebaseLinksListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesFirebaseLinksListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesFirebaseLinksListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesFirebaseLinksListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsadminPropertiesFirebaseLinksListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ullam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nihil';
    $request->fields = 'repellat';
    $request->key = 'quibusdam';
    $request->oauthToken = 'sed';
    $request->pageSize = 904648;
    $request->pageToken = 'pariatur';
    $request->parent = 'accusantium';
    $request->prettyPrint = false;
    $request->quotaUser = 'consequuntur';
    $request->uploadType = 'praesentium';
    $request->uploadProtocol = 'natus';

    $requestSecurity = new AnalyticsadminPropertiesFirebaseLinksListSecurity();
    $requestSecurity->option1 = new AnalyticsadminPropertiesFirebaseLinksListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->analyticsadminPropertiesFirebaseLinksList($request, $requestSecurity);

    if ($response->googleAnalyticsAdminV1betaListFirebaseLinksResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsadminPropertiesGoogleAdsLinksCreate

Creates a GoogleAdsLink.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesGoogleAdsLinksCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1betaGoogleAdsLinkInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesGoogleAdsLinksCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsadminPropertiesGoogleAdsLinksCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleAnalyticsAdminV1betaGoogleAdsLinkInput = new GoogleAnalyticsAdminV1betaGoogleAdsLinkInput();
    $request->googleAnalyticsAdminV1betaGoogleAdsLinkInput->adsPersonalizationEnabled = false;
    $request->googleAnalyticsAdminV1betaGoogleAdsLinkInput->customerId = 'sunt';
    $request->accessToken = 'quo';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'pariatur';
    $request->fields = 'maxime';
    $request->key = 'ea';
    $request->oauthToken = 'excepturi';
    $request->parent = 'odit';
    $request->prettyPrint = false;
    $request->quotaUser = 'ea';
    $request->uploadType = 'accusantium';
    $request->uploadProtocol = 'ab';

    $requestSecurity = new AnalyticsadminPropertiesGoogleAdsLinksCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->analyticsadminPropertiesGoogleAdsLinksCreate($request, $requestSecurity);

    if ($response->googleAnalyticsAdminV1betaGoogleAdsLink !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsadminPropertiesGoogleAdsLinksDelete

Deletes a GoogleAdsLink on a property

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesGoogleAdsLinksDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesGoogleAdsLinksDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsadminPropertiesGoogleAdsLinksDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quidem';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptate';
    $request->fields = 'autem';
    $request->key = 'nam';
    $request->name = 'Meredith Hickle PhD';
    $request->oauthToken = 'amet';
    $request->prettyPrint = false;
    $request->quotaUser = 'aut';
    $request->uploadType = 'cumque';
    $request->uploadProtocol = 'corporis';

    $requestSecurity = new AnalyticsadminPropertiesGoogleAdsLinksDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->analyticsadminPropertiesGoogleAdsLinksDelete($request, $requestSecurity);

    if ($response->googleProtobufEmpty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsadminPropertiesGoogleAdsLinksList

Lists GoogleAdsLinks on a property.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesGoogleAdsLinksListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesGoogleAdsLinksListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesGoogleAdsLinksListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesGoogleAdsLinksListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsadminPropertiesGoogleAdsLinksListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'libero';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dolores';
    $request->fields = 'quis';
    $request->key = 'totam';
    $request->oauthToken = 'dignissimos';
    $request->pageSize = 54338;
    $request->pageToken = 'quis';
    $request->parent = 'nesciunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'eos';
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'dolores';

    $requestSecurity = new AnalyticsadminPropertiesGoogleAdsLinksListSecurity();
    $requestSecurity->option1 = new AnalyticsadminPropertiesGoogleAdsLinksListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->analyticsadminPropertiesGoogleAdsLinksList($request, $requestSecurity);

    if ($response->googleAnalyticsAdminV1betaListGoogleAdsLinksResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsadminPropertiesGoogleAdsLinksPatch

Updates a GoogleAdsLink on a property

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesGoogleAdsLinksPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1betaGoogleAdsLinkInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesGoogleAdsLinksPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsadminPropertiesGoogleAdsLinksPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleAnalyticsAdminV1betaGoogleAdsLinkInput = new GoogleAnalyticsAdminV1betaGoogleAdsLinkInput();
    $request->googleAnalyticsAdminV1betaGoogleAdsLinkInput->adsPersonalizationEnabled = false;
    $request->googleAnalyticsAdminV1betaGoogleAdsLinkInput->customerId = 'quam';
    $request->accessToken = 'dolor';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nostrum';
    $request->fields = 'hic';
    $request->key = 'recusandae';
    $request->name = 'Miss Cesar Metz';
    $request->oauthToken = 'blanditiis';
    $request->prettyPrint = false;
    $request->quotaUser = 'error';
    $request->updateMask = 'eaque';
    $request->uploadType = 'occaecati';
    $request->uploadProtocol = 'rerum';

    $requestSecurity = new AnalyticsadminPropertiesGoogleAdsLinksPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->analyticsadminPropertiesGoogleAdsLinksPatch($request, $requestSecurity);

    if ($response->googleAnalyticsAdminV1betaGoogleAdsLink !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsadminPropertiesList

Returns child Properties under the specified parent Account. Only "GA4" properties will be returned. Properties will be excluded if the caller does not have access. Soft-deleted (ie: "trashed") properties are excluded by default. Returns an empty list if no relevant properties are found.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsadminPropertiesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'asperiores';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'modi';
    $request->fields = 'iste';
    $request->filter = 'dolorum';
    $request->key = 'deleniti';
    $request->oauthToken = 'pariatur';
    $request->pageSize = 589910;
    $request->pageToken = 'nobis';
    $request->prettyPrint = false;
    $request->quotaUser = 'libero';
    $request->showDeleted = false;
    $request->uploadType = 'delectus';
    $request->uploadProtocol = 'quaerat';

    $requestSecurity = new AnalyticsadminPropertiesListSecurity();
    $requestSecurity->option1 = new AnalyticsadminPropertiesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->analyticsadminPropertiesList($request, $requestSecurity);

    if ($response->googleAnalyticsAdminV1betaListPropertiesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsadminPropertiesRunAccessReport

Returns a customized report of data access records. The report provides records of each time a user reads Google Analytics reporting data. Access records are retained for up to 2 years. Data Access Reports can be requested for a property. The property must be in Google Analytics 360. This method is only available to Administrators. These data access records include GA4 UI Reporting, GA4 UI Explorations, GA4 Data API, and other products like Firebase & Admob that can retrieve data from Google Analytics through a linkage. These records don't include property configuration changes like adding a stream or changing a property's time zone. For configuration change history, see [searchChangeHistoryEvents](https://developers.google.com/analytics/devguides/config/admin/v1/rest/v1alpha/accounts/searchChangeHistoryEvents).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesRunAccessReportRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1betaRunAccessReportRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1betaAccessDateRange;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1betaAccessFilterExpression;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1betaAccessFilter;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1betaAccessBetweenFilter;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1betaNumericValue;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1betaAccessInListFilter;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1betaAccessNumericFilter;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1betaAccessNumericFilterOperationEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1betaAccessStringFilter;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1betaAccessStringFilterMatchTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1betaAccessFilterExpressionList;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1betaAccessDimension;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1betaAccessMetric;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1betaAccessOrderBy;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1betaAccessOrderByDimensionOrderBy;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1betaAccessOrderByDimensionOrderByOrderTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1betaAccessOrderByMetricOrderBy;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesRunAccessReportSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesRunAccessReportSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesRunAccessReportSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsadminPropertiesRunAccessReportRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleAnalyticsAdminV1betaRunAccessReportRequest = new GoogleAnalyticsAdminV1betaRunAccessReportRequest();
    $request->googleAnalyticsAdminV1betaRunAccessReportRequest->dateRanges = [
        new GoogleAnalyticsAdminV1betaAccessDateRange(),
        new GoogleAnalyticsAdminV1betaAccessDateRange(),
    ];
    $request->googleAnalyticsAdminV1betaRunAccessReportRequest->dimensionFilter = new GoogleAnalyticsAdminV1betaAccessFilterExpression();
    $request->googleAnalyticsAdminV1betaRunAccessReportRequest->dimensionFilter->accessFilter = new GoogleAnalyticsAdminV1betaAccessFilter();
    $request->googleAnalyticsAdminV1betaRunAccessReportRequest->dimensionFilter->accessFilter->betweenFilter = new GoogleAnalyticsAdminV1betaAccessBetweenFilter();
    $request->googleAnalyticsAdminV1betaRunAccessReportRequest->dimensionFilter->accessFilter->betweenFilter->fromValue = new GoogleAnalyticsAdminV1betaNumericValue();
    $request->googleAnalyticsAdminV1betaRunAccessReportRequest->dimensionFilter->accessFilter->betweenFilter->fromValue->doubleValue = 2123.9;
    $request->googleAnalyticsAdminV1betaRunAccessReportRequest->dimensionFilter->accessFilter->betweenFilter->fromValue->int64Value = 'dolorem';
    $request->googleAnalyticsAdminV1betaRunAccessReportRequest->dimensionFilter->accessFilter->betweenFilter->toValue = new GoogleAnalyticsAdminV1betaNumericValue();
    $request->googleAnalyticsAdminV1betaRunAccessReportRequest->dimensionFilter->accessFilter->betweenFilter->toValue->doubleValue = 2224.43;
    $request->googleAnalyticsAdminV1betaRunAccessReportRequest->dimensionFilter->accessFilter->betweenFilter->toValue->int64Value = 'qui';
    $request->googleAnalyticsAdminV1betaRunAccessReportRequest->dimensionFilter->accessFilter->fieldName = 'ipsum';
    $request->googleAnalyticsAdminV1betaRunAccessReportRequest->dimensionFilter->accessFilter->inListFilter = new GoogleAnalyticsAdminV1betaAccessInListFilter();
    $request->googleAnalyticsAdminV1betaRunAccessReportRequest->dimensionFilter->accessFilter->inListFilter->caseSensitive = false;
    $request->googleAnalyticsAdminV1betaRunAccessReportRequest->dimensionFilter->accessFilter->inListFilter->values = [
        'excepturi',
        'cum',
        'voluptate',
        'dignissimos',
    ];
    $request->googleAnalyticsAdminV1betaRunAccessReportRequest->dimensionFilter->accessFilter->numericFilter = new GoogleAnalyticsAdminV1betaAccessNumericFilter();
    $request->googleAnalyticsAdminV1betaRunAccessReportRequest->dimensionFilter->accessFilter->numericFilter->operation = GoogleAnalyticsAdminV1betaAccessNumericFilterOperationEnum::GREATER_THAN_OR_EQUAL;
    $request->googleAnalyticsAdminV1betaRunAccessReportRequest->dimensionFilter->accessFilter->numericFilter->value = new GoogleAnalyticsAdminV1betaNumericValue();
    $request->googleAnalyticsAdminV1betaRunAccessReportRequest->dimensionFilter->accessFilter->numericFilter->value->doubleValue = 2274.14;
    $request->googleAnalyticsAdminV1betaRunAccessReportRequest->dimensionFilter->accessFilter->numericFilter->value->int64Value = 'dolorum';
    $request->googleAnalyticsAdminV1betaRunAccessReportRequest->dimensionFilter->accessFilter->stringFilter = new GoogleAnalyticsAdminV1betaAccessStringFilter();
    $request->googleAnalyticsAdminV1betaRunAccessReportRequest->dimensionFilter->accessFilter->stringFilter->caseSensitive = false;
    $request->googleAnalyticsAdminV1betaRunAccessReportRequest->dimensionFilter->accessFilter->stringFilter->matchType = GoogleAnalyticsAdminV1betaAccessStringFilterMatchTypeEnum::EXACT;
    $request->googleAnalyticsAdminV1betaRunAccessReportRequest->dimensionFilter->accessFilter->stringFilter->value = 'veritatis';
    $request->googleAnalyticsAdminV1betaRunAccessReportRequest->dimensionFilter->andGroup = new GoogleAnalyticsAdminV1betaAccessFilterExpressionList();
    $request->googleAnalyticsAdminV1betaRunAccessReportRequest->dimensionFilter->andGroup->expressions = [
        new GoogleAnalyticsAdminV1betaAccessFilterExpression(),
    ];
    $request->googleAnalyticsAdminV1betaRunAccessReportRequest->dimensionFilter->notExpression = new GoogleAnalyticsAdminV1betaAccessFilterExpression();
    $request->googleAnalyticsAdminV1betaRunAccessReportRequest->dimensionFilter->orGroup = new GoogleAnalyticsAdminV1betaAccessFilterExpressionList();
    $request->googleAnalyticsAdminV1betaRunAccessReportRequest->dimensionFilter->orGroup->expressions = [
        new GoogleAnalyticsAdminV1betaAccessFilterExpression(),
    ];
    $request->googleAnalyticsAdminV1betaRunAccessReportRequest->dimensions = [
        new GoogleAnalyticsAdminV1betaAccessDimension(),
        new GoogleAnalyticsAdminV1betaAccessDimension(),
    ];
    $request->googleAnalyticsAdminV1betaRunAccessReportRequest->limit = 'odio';
    $request->googleAnalyticsAdminV1betaRunAccessReportRequest->metricFilter = new GoogleAnalyticsAdminV1betaAccessFilterExpression();
    $request->googleAnalyticsAdminV1betaRunAccessReportRequest->metricFilter->accessFilter = new GoogleAnalyticsAdminV1betaAccessFilter();
    $request->googleAnalyticsAdminV1betaRunAccessReportRequest->metricFilter->accessFilter->betweenFilter = new GoogleAnalyticsAdminV1betaAccessBetweenFilter();
    $request->googleAnalyticsAdminV1betaRunAccessReportRequest->metricFilter->accessFilter->betweenFilter->fromValue = new GoogleAnalyticsAdminV1betaNumericValue();
    $request->googleAnalyticsAdminV1betaRunAccessReportRequest->metricFilter->accessFilter->betweenFilter->fromValue->doubleValue = 3117.96;
    $request->googleAnalyticsAdminV1betaRunAccessReportRequest->metricFilter->accessFilter->betweenFilter->fromValue->int64Value = 'accusamus';
    $request->googleAnalyticsAdminV1betaRunAccessReportRequest->metricFilter->accessFilter->betweenFilter->toValue = new GoogleAnalyticsAdminV1betaNumericValue();
    $request->googleAnalyticsAdminV1betaRunAccessReportRequest->metricFilter->accessFilter->betweenFilter->toValue->doubleValue = 6963.44;
    $request->googleAnalyticsAdminV1betaRunAccessReportRequest->metricFilter->accessFilter->betweenFilter->toValue->int64Value = 'voluptatibus';
    $request->googleAnalyticsAdminV1betaRunAccessReportRequest->metricFilter->accessFilter->fieldName = 'voluptas';
    $request->googleAnalyticsAdminV1betaRunAccessReportRequest->metricFilter->accessFilter->inListFilter = new GoogleAnalyticsAdminV1betaAccessInListFilter();
    $request->googleAnalyticsAdminV1betaRunAccessReportRequest->metricFilter->accessFilter->inListFilter->caseSensitive = false;
    $request->googleAnalyticsAdminV1betaRunAccessReportRequest->metricFilter->accessFilter->inListFilter->values = [
        'eos',
        'atque',
        'sit',
    ];
    $request->googleAnalyticsAdminV1betaRunAccessReportRequest->metricFilter->accessFilter->numericFilter = new GoogleAnalyticsAdminV1betaAccessNumericFilter();
    $request->googleAnalyticsAdminV1betaRunAccessReportRequest->metricFilter->accessFilter->numericFilter->operation = GoogleAnalyticsAdminV1betaAccessNumericFilterOperationEnum::GREATER_THAN_OR_EQUAL;
    $request->googleAnalyticsAdminV1betaRunAccessReportRequest->metricFilter->accessFilter->numericFilter->value = new GoogleAnalyticsAdminV1betaNumericValue();
    $request->googleAnalyticsAdminV1betaRunAccessReportRequest->metricFilter->accessFilter->numericFilter->value->doubleValue = 672.49;
    $request->googleAnalyticsAdminV1betaRunAccessReportRequest->metricFilter->accessFilter->numericFilter->value->int64Value = 'soluta';
    $request->googleAnalyticsAdminV1betaRunAccessReportRequest->metricFilter->accessFilter->stringFilter = new GoogleAnalyticsAdminV1betaAccessStringFilter();
    $request->googleAnalyticsAdminV1betaRunAccessReportRequest->metricFilter->accessFilter->stringFilter->caseSensitive = false;
    $request->googleAnalyticsAdminV1betaRunAccessReportRequest->metricFilter->accessFilter->stringFilter->matchType = GoogleAnalyticsAdminV1betaAccessStringFilterMatchTypeEnum::CONTAINS;
    $request->googleAnalyticsAdminV1betaRunAccessReportRequest->metricFilter->accessFilter->stringFilter->value = 'iusto';
    $request->googleAnalyticsAdminV1betaRunAccessReportRequest->metricFilter->andGroup = new GoogleAnalyticsAdminV1betaAccessFilterExpressionList();
    $request->googleAnalyticsAdminV1betaRunAccessReportRequest->metricFilter->andGroup->expressions = [
        new GoogleAnalyticsAdminV1betaAccessFilterExpression(),
        new GoogleAnalyticsAdminV1betaAccessFilterExpression(),
    ];
    $request->googleAnalyticsAdminV1betaRunAccessReportRequest->metricFilter->notExpression = new GoogleAnalyticsAdminV1betaAccessFilterExpression();
    $request->googleAnalyticsAdminV1betaRunAccessReportRequest->metricFilter->orGroup = new GoogleAnalyticsAdminV1betaAccessFilterExpressionList();
    $request->googleAnalyticsAdminV1betaRunAccessReportRequest->metricFilter->orGroup->expressions = [
        new GoogleAnalyticsAdminV1betaAccessFilterExpression(),
        new GoogleAnalyticsAdminV1betaAccessFilterExpression(),
        new GoogleAnalyticsAdminV1betaAccessFilterExpression(),
    ];
    $request->googleAnalyticsAdminV1betaRunAccessReportRequest->metrics = [
        new GoogleAnalyticsAdminV1betaAccessMetric(),
        new GoogleAnalyticsAdminV1betaAccessMetric(),
        new GoogleAnalyticsAdminV1betaAccessMetric(),
    ];
    $request->googleAnalyticsAdminV1betaRunAccessReportRequest->offset = 'omnis';
    $request->googleAnalyticsAdminV1betaRunAccessReportRequest->orderBys = [
        new GoogleAnalyticsAdminV1betaAccessOrderBy(),
        new GoogleAnalyticsAdminV1betaAccessOrderBy(),
        new GoogleAnalyticsAdminV1betaAccessOrderBy(),
        new GoogleAnalyticsAdminV1betaAccessOrderBy(),
    ];
    $request->googleAnalyticsAdminV1betaRunAccessReportRequest->returnEntityQuota = false;
    $request->googleAnalyticsAdminV1betaRunAccessReportRequest->timeZone = 'distinctio';
    $request->accessToken = 'asperiores';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ipsum';
    $request->entity = 'voluptate';
    $request->fields = 'id';
    $request->key = 'saepe';
    $request->oauthToken = 'eius';
    $request->prettyPrint = false;
    $request->quotaUser = 'aspernatur';
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'amet';

    $requestSecurity = new AnalyticsadminPropertiesRunAccessReportSecurity();
    $requestSecurity->option1 = new AnalyticsadminPropertiesRunAccessReportSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->analyticsadminPropertiesRunAccessReport($request, $requestSecurity);

    if ($response->googleAnalyticsAdminV1betaRunAccessReportResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
