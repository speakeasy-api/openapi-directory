# targetingTemplates

### Available Operations

* [dfareportingTargetingTemplatesGet](#dfareportingtargetingtemplatesget) - Gets one targeting template by ID.
* [dfareportingTargetingTemplatesInsert](#dfareportingtargetingtemplatesinsert) - Inserts a new targeting template.
* [dfareportingTargetingTemplatesList](#dfareportingtargetingtemplateslist) - Retrieves a list of targeting templates, optionally filtered. This method supports paging.
* [dfareportingTargetingTemplatesPatch](#dfareportingtargetingtemplatespatch) - Updates an existing targeting template. This method supports patch semantics.
* [dfareportingTargetingTemplatesUpdate](#dfareportingtargetingtemplatesupdate) - Updates an existing targeting template.

## dfareportingTargetingTemplatesGet

Gets one targeting template by ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingTargetingTemplatesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingTargetingTemplatesGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingTargetingTemplatesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'saepe';
    $request->alt = AltEnum::JSON;
    $request->callback = 'assumenda';
    $request->fields = 'quibusdam';
    $request->id = '79ec74ba-7e88-4ddb-b6fd-1ccc341c8657';
    $request->key = 'dolor';
    $request->oauthToken = 'magnam';
    $request->prettyPrint = false;
    $request->profileId = 'iure';
    $request->quotaUser = 'eius';
    $request->uploadType = 'doloribus';
    $request->uploadProtocol = 'doloremque';

    $requestSecurity = new DfareportingTargetingTemplatesGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->targetingTemplates->dfareportingTargetingTemplatesGet($request, $requestSecurity);

    if ($response->targetingTemplate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingTargetingTemplatesInsert

Inserts a new targeting template.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingTargetingTemplatesInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TargetingTemplate;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValue;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValueMatchTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DayPartTargeting;
use \OpenAPI\OpenAPI\Models\Shared\DayPartTargetingDaysOfWeekEnum;
use \OpenAPI\OpenAPI\Models\Shared\GeoTargeting;
use \OpenAPI\OpenAPI\Models\Shared\City;
use \OpenAPI\OpenAPI\Models\Shared\Country;
use \OpenAPI\OpenAPI\Models\Shared\Metro;
use \OpenAPI\OpenAPI\Models\Shared\PostalCode;
use \OpenAPI\OpenAPI\Models\Shared\Region;
use \OpenAPI\OpenAPI\Models\Shared\KeyValueTargetingExpression;
use \OpenAPI\OpenAPI\Models\Shared\LanguageTargeting;
use \OpenAPI\OpenAPI\Models\Shared\Language;
use \OpenAPI\OpenAPI\Models\Shared\ListTargetingExpression;
use \OpenAPI\OpenAPI\Models\Shared\TechnologyTargeting;
use \OpenAPI\OpenAPI\Models\Shared\Browser;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionType;
use \OpenAPI\OpenAPI\Models\Shared\MobileCarrier;
use \OpenAPI\OpenAPI\Models\Shared\OperatingSystemVersion;
use \OpenAPI\OpenAPI\Models\Shared\OperatingSystem;
use \OpenAPI\OpenAPI\Models\Shared\PlatformType;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingTargetingTemplatesInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingTargetingTemplatesInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->targetingTemplate = new TargetingTemplate();
    $request->targetingTemplate->accountId = 'voluptate';
    $request->targetingTemplate->advertiserId = 'incidunt';
    $request->targetingTemplate->advertiserIdDimensionValue = new DimensionValue();
    $request->targetingTemplate->advertiserIdDimensionValue->dimensionName = 'eaque';
    $request->targetingTemplate->advertiserIdDimensionValue->etag = 'doloribus';
    $request->targetingTemplate->advertiserIdDimensionValue->id = 'b4ab441c-3a09-4e76-b995-d808bbe79445';
    $request->targetingTemplate->advertiserIdDimensionValue->kind = 'exercitationem';
    $request->targetingTemplate->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->targetingTemplate->advertiserIdDimensionValue->value = 'nobis';
    $request->targetingTemplate->dayPartTargeting = new DayPartTargeting();
    $request->targetingTemplate->dayPartTargeting->daysOfWeek = [
        DayPartTargetingDaysOfWeekEnum::WEDNESDAY,
        DayPartTargetingDaysOfWeekEnum::WEDNESDAY,
        DayPartTargetingDaysOfWeekEnum::MONDAY,
        DayPartTargetingDaysOfWeekEnum::FRIDAY,
    ];
    $request->targetingTemplate->dayPartTargeting->hoursOfDay = [
        769316,
    ];
    $request->targetingTemplate->dayPartTargeting->userLocalTime = false;
    $request->targetingTemplate->geoTargeting = new GeoTargeting();
    $request->targetingTemplate->geoTargeting->cities = [
        new City(),
        new City(),
    ];
    $request->targetingTemplate->geoTargeting->countries = [
        new Country(),
    ];
    $request->targetingTemplate->geoTargeting->excludeCountries = false;
    $request->targetingTemplate->geoTargeting->metros = [
        new Metro(),
        new Metro(),
    ];
    $request->targetingTemplate->geoTargeting->postalCodes = [
        new PostalCode(),
        new PostalCode(),
        new PostalCode(),
    ];
    $request->targetingTemplate->geoTargeting->regions = [
        new Region(),
        new Region(),
    ];
    $request->targetingTemplate->id = 'cupiditate';
    $request->targetingTemplate->keyValueTargetingExpression = new KeyValueTargetingExpression();
    $request->targetingTemplate->keyValueTargetingExpression->expression = 'maxime';
    $request->targetingTemplate->kind = 'voluptatum';
    $request->targetingTemplate->languageTargeting = new LanguageTargeting();
    $request->targetingTemplate->languageTargeting->languages = [
        new Language(),
    ];
    $request->targetingTemplate->listTargetingExpression = new ListTargetingExpression();
    $request->targetingTemplate->listTargetingExpression->expression = 'commodi';
    $request->targetingTemplate->name = 'Ollie Schultz';
    $request->targetingTemplate->subaccountId = 'architecto';
    $request->targetingTemplate->technologyTargeting = new TechnologyTargeting();
    $request->targetingTemplate->technologyTargeting->browsers = [
        new Browser(),
    ];
    $request->targetingTemplate->technologyTargeting->connectionTypes = [
        new ConnectionType(),
        new ConnectionType(),
    ];
    $request->targetingTemplate->technologyTargeting->mobileCarriers = [
        new MobileCarrier(),
        new MobileCarrier(),
    ];
    $request->targetingTemplate->technologyTargeting->operatingSystemVersions = [
        new OperatingSystemVersion(),
        new OperatingSystemVersion(),
        new OperatingSystemVersion(),
    ];
    $request->targetingTemplate->technologyTargeting->operatingSystems = [
        new OperatingSystem(),
    ];
    $request->targetingTemplate->technologyTargeting->platformTypes = [
        new PlatformType(),
        new PlatformType(),
        new PlatformType(),
        new PlatformType(),
    ];
    $request->accessToken = 'et';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quos';
    $request->fields = 'veniam';
    $request->key = 'ad';
    $request->oauthToken = 'accusamus';
    $request->prettyPrint = false;
    $request->profileId = 'laudantium';
    $request->quotaUser = 'atque';
    $request->uploadType = 'cupiditate';
    $request->uploadProtocol = 'fugiat';

    $requestSecurity = new DfareportingTargetingTemplatesInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->targetingTemplates->dfareportingTargetingTemplatesInsert($request, $requestSecurity);

    if ($response->targetingTemplate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingTargetingTemplatesList

Retrieves a list of targeting templates, optionally filtered. This method supports paging.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingTargetingTemplatesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingTargetingTemplatesListSortFieldEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingTargetingTemplatesListSortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingTargetingTemplatesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingTargetingTemplatesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'officiis';
    $request->advertiserId = 'hic';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'consectetur';
    $request->fields = 'fugit';
    $request->ids = [
        'omnis',
        'eaque',
        'perferendis',
        'voluptatem',
    ];
    $request->key = 'culpa';
    $request->maxResults = 108768;
    $request->oauthToken = 'nesciunt';
    $request->pageToken = 'deserunt';
    $request->prettyPrint = false;
    $request->profileId = 'nulla';
    $request->quotaUser = 'voluptatum';
    $request->searchString = 'veritatis';
    $request->sortField = DfareportingTargetingTemplatesListSortFieldEnum::ID;
    $request->sortOrder = DfareportingTargetingTemplatesListSortOrderEnum::ASCENDING;
    $request->uploadType = 'fugit';
    $request->uploadProtocol = 'alias';

    $requestSecurity = new DfareportingTargetingTemplatesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->targetingTemplates->dfareportingTargetingTemplatesList($request, $requestSecurity);

    if ($response->targetingTemplatesListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingTargetingTemplatesPatch

Updates an existing targeting template. This method supports patch semantics.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingTargetingTemplatesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TargetingTemplate;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValue;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValueMatchTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DayPartTargeting;
use \OpenAPI\OpenAPI\Models\Shared\DayPartTargetingDaysOfWeekEnum;
use \OpenAPI\OpenAPI\Models\Shared\GeoTargeting;
use \OpenAPI\OpenAPI\Models\Shared\City;
use \OpenAPI\OpenAPI\Models\Shared\Country;
use \OpenAPI\OpenAPI\Models\Shared\Metro;
use \OpenAPI\OpenAPI\Models\Shared\PostalCode;
use \OpenAPI\OpenAPI\Models\Shared\Region;
use \OpenAPI\OpenAPI\Models\Shared\KeyValueTargetingExpression;
use \OpenAPI\OpenAPI\Models\Shared\LanguageTargeting;
use \OpenAPI\OpenAPI\Models\Shared\Language;
use \OpenAPI\OpenAPI\Models\Shared\ListTargetingExpression;
use \OpenAPI\OpenAPI\Models\Shared\TechnologyTargeting;
use \OpenAPI\OpenAPI\Models\Shared\Browser;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionType;
use \OpenAPI\OpenAPI\Models\Shared\MobileCarrier;
use \OpenAPI\OpenAPI\Models\Shared\OperatingSystemVersion;
use \OpenAPI\OpenAPI\Models\Shared\OperatingSystem;
use \OpenAPI\OpenAPI\Models\Shared\PlatformType;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingTargetingTemplatesPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingTargetingTemplatesPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->targetingTemplate = new TargetingTemplate();
    $request->targetingTemplate->accountId = 'voluptates';
    $request->targetingTemplate->advertiserId = 'sapiente';
    $request->targetingTemplate->advertiserIdDimensionValue = new DimensionValue();
    $request->targetingTemplate->advertiserIdDimensionValue->dimensionName = 'at';
    $request->targetingTemplate->advertiserIdDimensionValue->etag = 'qui';
    $request->targetingTemplate->advertiserIdDimensionValue->id = '3411898e-7387-49ef-be8b-aebabb794536';
    $request->targetingTemplate->advertiserIdDimensionValue->kind = 'repudiandae';
    $request->targetingTemplate->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->targetingTemplate->advertiserIdDimensionValue->value = 'ipsa';
    $request->targetingTemplate->dayPartTargeting = new DayPartTargeting();
    $request->targetingTemplate->dayPartTargeting->daysOfWeek = [
        DayPartTargetingDaysOfWeekEnum::WEDNESDAY,
    ];
    $request->targetingTemplate->dayPartTargeting->hoursOfDay = [
        690050,
    ];
    $request->targetingTemplate->dayPartTargeting->userLocalTime = false;
    $request->targetingTemplate->geoTargeting = new GeoTargeting();
    $request->targetingTemplate->geoTargeting->cities = [
        new City(),
        new City(),
        new City(),
    ];
    $request->targetingTemplate->geoTargeting->countries = [
        new Country(),
        new Country(),
        new Country(),
    ];
    $request->targetingTemplate->geoTargeting->excludeCountries = false;
    $request->targetingTemplate->geoTargeting->metros = [
        new Metro(),
        new Metro(),
    ];
    $request->targetingTemplate->geoTargeting->postalCodes = [
        new PostalCode(),
        new PostalCode(),
    ];
    $request->targetingTemplate->geoTargeting->regions = [
        new Region(),
    ];
    $request->targetingTemplate->id = 'architecto';
    $request->targetingTemplate->keyValueTargetingExpression = new KeyValueTargetingExpression();
    $request->targetingTemplate->keyValueTargetingExpression->expression = 'iure';
    $request->targetingTemplate->kind = 'odit';
    $request->targetingTemplate->languageTargeting = new LanguageTargeting();
    $request->targetingTemplate->languageTargeting->languages = [
        new Language(),
    ];
    $request->targetingTemplate->listTargetingExpression = new ListTargetingExpression();
    $request->targetingTemplate->listTargetingExpression->expression = 'quidem';
    $request->targetingTemplate->name = 'Glenda Nicolas';
    $request->targetingTemplate->subaccountId = 'voluptas';
    $request->targetingTemplate->technologyTargeting = new TechnologyTargeting();
    $request->targetingTemplate->technologyTargeting->browsers = [
        new Browser(),
    ];
    $request->targetingTemplate->technologyTargeting->connectionTypes = [
        new ConnectionType(),
        new ConnectionType(),
    ];
    $request->targetingTemplate->technologyTargeting->mobileCarriers = [
        new MobileCarrier(),
        new MobileCarrier(),
    ];
    $request->targetingTemplate->technologyTargeting->operatingSystemVersions = [
        new OperatingSystemVersion(),
        new OperatingSystemVersion(),
        new OperatingSystemVersion(),
    ];
    $request->targetingTemplate->technologyTargeting->operatingSystems = [
        new OperatingSystem(),
        new OperatingSystem(),
    ];
    $request->targetingTemplate->technologyTargeting->platformTypes = [
        new PlatformType(),
        new PlatformType(),
        new PlatformType(),
    ];
    $request->accessToken = 'sapiente';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ipsam';
    $request->fields = 'quia';
    $request->id = '71f01c0d-361f-4ed8-9c5e-ffb453e9089e';
    $request->key = 'totam';
    $request->oauthToken = 'reprehenderit';
    $request->prettyPrint = false;
    $request->profileId = 'inventore';
    $request->quotaUser = 'asperiores';
    $request->uploadType = 'nulla';
    $request->uploadProtocol = 'soluta';

    $requestSecurity = new DfareportingTargetingTemplatesPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->targetingTemplates->dfareportingTargetingTemplatesPatch($request, $requestSecurity);

    if ($response->targetingTemplate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingTargetingTemplatesUpdate

Updates an existing targeting template.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingTargetingTemplatesUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TargetingTemplate;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValue;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValueMatchTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DayPartTargeting;
use \OpenAPI\OpenAPI\Models\Shared\DayPartTargetingDaysOfWeekEnum;
use \OpenAPI\OpenAPI\Models\Shared\GeoTargeting;
use \OpenAPI\OpenAPI\Models\Shared\City;
use \OpenAPI\OpenAPI\Models\Shared\Country;
use \OpenAPI\OpenAPI\Models\Shared\Metro;
use \OpenAPI\OpenAPI\Models\Shared\PostalCode;
use \OpenAPI\OpenAPI\Models\Shared\Region;
use \OpenAPI\OpenAPI\Models\Shared\KeyValueTargetingExpression;
use \OpenAPI\OpenAPI\Models\Shared\LanguageTargeting;
use \OpenAPI\OpenAPI\Models\Shared\Language;
use \OpenAPI\OpenAPI\Models\Shared\ListTargetingExpression;
use \OpenAPI\OpenAPI\Models\Shared\TechnologyTargeting;
use \OpenAPI\OpenAPI\Models\Shared\Browser;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionType;
use \OpenAPI\OpenAPI\Models\Shared\MobileCarrier;
use \OpenAPI\OpenAPI\Models\Shared\OperatingSystemVersion;
use \OpenAPI\OpenAPI\Models\Shared\OperatingSystem;
use \OpenAPI\OpenAPI\Models\Shared\PlatformType;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingTargetingTemplatesUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingTargetingTemplatesUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->targetingTemplate = new TargetingTemplate();
    $request->targetingTemplate->accountId = 'at';
    $request->targetingTemplate->advertiserId = 'voluptas';
    $request->targetingTemplate->advertiserIdDimensionValue = new DimensionValue();
    $request->targetingTemplate->advertiserIdDimensionValue->dimensionName = 'perspiciatis';
    $request->targetingTemplate->advertiserIdDimensionValue->etag = 'molestiae';
    $request->targetingTemplate->advertiserIdDimensionValue->id = 'bdd9c985-e437-434a-9d72-d9edd785be5e';
    $request->targetingTemplate->advertiserIdDimensionValue->kind = 'esse';
    $request->targetingTemplate->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->targetingTemplate->advertiserIdDimensionValue->value = 'hic';
    $request->targetingTemplate->dayPartTargeting = new DayPartTargeting();
    $request->targetingTemplate->dayPartTargeting->daysOfWeek = [
        DayPartTargetingDaysOfWeekEnum::WEDNESDAY,
        DayPartTargetingDaysOfWeekEnum::WEDNESDAY,
        DayPartTargetingDaysOfWeekEnum::TUESDAY,
        DayPartTargetingDaysOfWeekEnum::FRIDAY,
    ];
    $request->targetingTemplate->dayPartTargeting->hoursOfDay = [
        735256,
        652592,
    ];
    $request->targetingTemplate->dayPartTargeting->userLocalTime = false;
    $request->targetingTemplate->geoTargeting = new GeoTargeting();
    $request->targetingTemplate->geoTargeting->cities = [
        new City(),
        new City(),
    ];
    $request->targetingTemplate->geoTargeting->countries = [
        new Country(),
    ];
    $request->targetingTemplate->geoTargeting->excludeCountries = false;
    $request->targetingTemplate->geoTargeting->metros = [
        new Metro(),
        new Metro(),
        new Metro(),
    ];
    $request->targetingTemplate->geoTargeting->postalCodes = [
        new PostalCode(),
    ];
    $request->targetingTemplate->geoTargeting->regions = [
        new Region(),
        new Region(),
        new Region(),
        new Region(),
    ];
    $request->targetingTemplate->id = 'aliquam';
    $request->targetingTemplate->keyValueTargetingExpression = new KeyValueTargetingExpression();
    $request->targetingTemplate->keyValueTargetingExpression->expression = 'modi';
    $request->targetingTemplate->kind = 'eveniet';
    $request->targetingTemplate->languageTargeting = new LanguageTargeting();
    $request->targetingTemplate->languageTargeting->languages = [
        new Language(),
    ];
    $request->targetingTemplate->listTargetingExpression = new ListTargetingExpression();
    $request->targetingTemplate->listTargetingExpression->expression = 'laborum';
    $request->targetingTemplate->name = 'Carmen Feil';
    $request->targetingTemplate->subaccountId = 'id';
    $request->targetingTemplate->technologyTargeting = new TechnologyTargeting();
    $request->targetingTemplate->technologyTargeting->browsers = [
        new Browser(),
        new Browser(),
    ];
    $request->targetingTemplate->technologyTargeting->connectionTypes = [
        new ConnectionType(),
        new ConnectionType(),
        new ConnectionType(),
    ];
    $request->targetingTemplate->technologyTargeting->mobileCarriers = [
        new MobileCarrier(),
        new MobileCarrier(),
        new MobileCarrier(),
        new MobileCarrier(),
    ];
    $request->targetingTemplate->technologyTargeting->operatingSystemVersions = [
        new OperatingSystemVersion(),
        new OperatingSystemVersion(),
        new OperatingSystemVersion(),
        new OperatingSystemVersion(),
    ];
    $request->targetingTemplate->technologyTargeting->operatingSystems = [
        new OperatingSystem(),
        new OperatingSystem(),
        new OperatingSystem(),
    ];
    $request->targetingTemplate->technologyTargeting->platformTypes = [
        new PlatformType(),
    ];
    $request->accessToken = 'illum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'alias';
    $request->fields = 'delectus';
    $request->key = 'hic';
    $request->oauthToken = 'ducimus';
    $request->prettyPrint = false;
    $request->profileId = 'dolores';
    $request->quotaUser = 'illo';
    $request->uploadType = 'aliquid';
    $request->uploadProtocol = 'quaerat';

    $requestSecurity = new DfareportingTargetingTemplatesUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->targetingTemplates->dfareportingTargetingTemplatesUpdate($request, $requestSecurity);

    if ($response->targetingTemplate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
