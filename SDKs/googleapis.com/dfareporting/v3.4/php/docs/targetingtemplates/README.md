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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'voluptate';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quisquam';
    $request->fields = 'minus';
    $request->id = '5fdcea8e-7a88-4311-a62c-da6d77c1d860';
    $request->key = 'nisi';
    $request->oauthToken = 'eum';
    $request->prettyPrint = false;
    $request->profileId = 'odit';
    $request->quotaUser = 'nesciunt';
    $request->uploadType = 'esse';
    $request->uploadProtocol = 'quibusdam';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->targetingTemplate = new TargetingTemplate();
    $request->targetingTemplate->accountId = 'explicabo';
    $request->targetingTemplate->advertiserId = 'magni';
    $request->targetingTemplate->advertiserIdDimensionValue = new DimensionValue();
    $request->targetingTemplate->advertiserIdDimensionValue->dimensionName = 'molestiae';
    $request->targetingTemplate->advertiserIdDimensionValue->etag = 'blanditiis';
    $request->targetingTemplate->advertiserIdDimensionValue->id = '66db8a74-9e39-4845-91cc-75e4f0c004b5';
    $request->targetingTemplate->advertiserIdDimensionValue->kind = 'tempore';
    $request->targetingTemplate->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->targetingTemplate->advertiserIdDimensionValue->value = 'molestiae';
    $request->targetingTemplate->dayPartTargeting = new DayPartTargeting();
    $request->targetingTemplate->dayPartTargeting->daysOfWeek = [
        DayPartTargetingDaysOfWeekEnum::THURSDAY,
        DayPartTargetingDaysOfWeekEnum::SATURDAY,
    ];
    $request->targetingTemplate->dayPartTargeting->hoursOfDay = [
        587166,
        273965,
        350567,
        376576,
    ];
    $request->targetingTemplate->dayPartTargeting->userLocalTime = false;
    $request->targetingTemplate->geoTargeting = new GeoTargeting();
    $request->targetingTemplate->geoTargeting->cities = [
        new City(),
    ];
    $request->targetingTemplate->geoTargeting->countries = [
        new Country(),
        new Country(),
        new Country(),
        new Country(),
    ];
    $request->targetingTemplate->geoTargeting->excludeCountries = false;
    $request->targetingTemplate->geoTargeting->metros = [
        new Metro(),
    ];
    $request->targetingTemplate->geoTargeting->postalCodes = [
        new PostalCode(),
    ];
    $request->targetingTemplate->geoTargeting->regions = [
        new Region(),
        new Region(),
    ];
    $request->targetingTemplate->id = 'occaecati';
    $request->targetingTemplate->keyValueTargetingExpression = new KeyValueTargetingExpression();
    $request->targetingTemplate->keyValueTargetingExpression->expression = 'ea';
    $request->targetingTemplate->kind = 'rem';
    $request->targetingTemplate->languageTargeting = new LanguageTargeting();
    $request->targetingTemplate->languageTargeting->languages = [
        new Language(),
        new Language(),
    ];
    $request->targetingTemplate->listTargetingExpression = new ListTargetingExpression();
    $request->targetingTemplate->listTargetingExpression->expression = 'a';
    $request->targetingTemplate->name = 'Owen Boyer IV';
    $request->targetingTemplate->subaccountId = 'consectetur';
    $request->targetingTemplate->technologyTargeting = new TechnologyTargeting();
    $request->targetingTemplate->technologyTargeting->browsers = [
        new Browser(),
        new Browser(),
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
    ];
    $request->targetingTemplate->technologyTargeting->operatingSystemVersions = [
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
        new PlatformType(),
        new PlatformType(),
        new PlatformType(),
    ];
    $request->accessToken = 'odit';
    $request->alt = AltEnum::JSON;
    $request->callback = 'tenetur';
    $request->fields = 'explicabo';
    $request->key = 'error';
    $request->oauthToken = 'praesentium';
    $request->prettyPrint = false;
    $request->profileId = 'sequi';
    $request->quotaUser = 'magnam';
    $request->uploadType = 'mollitia';
    $request->uploadProtocol = 'doloribus';

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
    $request->accessToken = 'doloremque';
    $request->advertiserId = 'odio';
    $request->alt = AltEnum::JSON;
    $request->callback = 'corporis';
    $request->fields = 'eligendi';
    $request->ids = [
        'laboriosam',
        'magni',
        'molestias',
    ];
    $request->key = 'corporis';
    $request->maxResults = 815452;
    $request->oauthToken = 'labore';
    $request->pageToken = 'est';
    $request->prettyPrint = false;
    $request->profileId = 'odit';
    $request->quotaUser = 'unde';
    $request->searchString = 'est';
    $request->sortField = DfareportingTargetingTemplatesListSortFieldEnum::NAME;
    $request->sortOrder = DfareportingTargetingTemplatesListSortOrderEnum::DESCENDING;
    $request->uploadType = 'quae';
    $request->uploadProtocol = 'debitis';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->targetingTemplate = new TargetingTemplate();
    $request->targetingTemplate->accountId = 'voluptas';
    $request->targetingTemplate->advertiserId = 'omnis';
    $request->targetingTemplate->advertiserIdDimensionValue = new DimensionValue();
    $request->targetingTemplate->advertiserIdDimensionValue->dimensionName = 'veritatis';
    $request->targetingTemplate->advertiserIdDimensionValue->etag = 'nemo';
    $request->targetingTemplate->advertiserIdDimensionValue->id = '6f7d2ee2-0950-45bf-83a9-3e94480ca37f';
    $request->targetingTemplate->advertiserIdDimensionValue->kind = 'nam';
    $request->targetingTemplate->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->targetingTemplate->advertiserIdDimensionValue->value = 'ipsa';
    $request->targetingTemplate->dayPartTargeting = new DayPartTargeting();
    $request->targetingTemplate->dayPartTargeting->daysOfWeek = [
        DayPartTargetingDaysOfWeekEnum::THURSDAY,
        DayPartTargetingDaysOfWeekEnum::FRIDAY,
    ];
    $request->targetingTemplate->dayPartTargeting->hoursOfDay = [
        196504,
    ];
    $request->targetingTemplate->dayPartTargeting->userLocalTime = false;
    $request->targetingTemplate->geoTargeting = new GeoTargeting();
    $request->targetingTemplate->geoTargeting->cities = [
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
        new Metro(),
        new Metro(),
    ];
    $request->targetingTemplate->geoTargeting->postalCodes = [
        new PostalCode(),
    ];
    $request->targetingTemplate->geoTargeting->regions = [
        new Region(),
    ];
    $request->targetingTemplate->id = 'nesciunt';
    $request->targetingTemplate->keyValueTargetingExpression = new KeyValueTargetingExpression();
    $request->targetingTemplate->keyValueTargetingExpression->expression = 'et';
    $request->targetingTemplate->kind = 'quam';
    $request->targetingTemplate->languageTargeting = new LanguageTargeting();
    $request->targetingTemplate->languageTargeting->languages = [
        new Language(),
    ];
    $request->targetingTemplate->listTargetingExpression = new ListTargetingExpression();
    $request->targetingTemplate->listTargetingExpression->expression = 'saepe';
    $request->targetingTemplate->name = 'Angelina Sporer';
    $request->targetingTemplate->subaccountId = 'recusandae';
    $request->targetingTemplate->technologyTargeting = new TechnologyTargeting();
    $request->targetingTemplate->technologyTargeting->browsers = [
        new Browser(),
        new Browser(),
        new Browser(),
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
        new OperatingSystem(),
    ];
    $request->targetingTemplate->technologyTargeting->platformTypes = [
        new PlatformType(),
        new PlatformType(),
    ];
    $request->accessToken = 'necessitatibus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'deleniti';
    $request->fields = 'possimus';
    $request->id = 'db36fd1c-cc34-41c8-a573-474f0a740fb4';
    $request->key = 'deserunt';
    $request->oauthToken = 'distinctio';
    $request->prettyPrint = false;
    $request->profileId = 'magnam';
    $request->quotaUser = 'eius';
    $request->uploadType = 'illo';
    $request->uploadProtocol = 'impedit';

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
    $request->targetingTemplate->accountId = 'deserunt';
    $request->targetingTemplate->advertiserId = 'doloremque';
    $request->targetingTemplate->advertiserIdDimensionValue = new DimensionValue();
    $request->targetingTemplate->advertiserIdDimensionValue->dimensionName = 'sint';
    $request->targetingTemplate->advertiserIdDimensionValue->etag = 'saepe';
    $request->targetingTemplate->advertiserIdDimensionValue->id = '763995d8-08bb-4e79-8455-ebc550a1c426';
    $request->targetingTemplate->advertiserIdDimensionValue->kind = 'rerum';
    $request->targetingTemplate->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->targetingTemplate->advertiserIdDimensionValue->value = 'cupiditate';
    $request->targetingTemplate->dayPartTargeting = new DayPartTargeting();
    $request->targetingTemplate->dayPartTargeting->daysOfWeek = [
        DayPartTargetingDaysOfWeekEnum::THURSDAY,
        DayPartTargetingDaysOfWeekEnum::TUESDAY,
        DayPartTargetingDaysOfWeekEnum::WEDNESDAY,
        DayPartTargetingDaysOfWeekEnum::WEDNESDAY,
    ];
    $request->targetingTemplate->dayPartTargeting->hoursOfDay = [
        814227,
        805113,
        793438,
        103820,
    ];
    $request->targetingTemplate->dayPartTargeting->userLocalTime = false;
    $request->targetingTemplate->geoTargeting = new GeoTargeting();
    $request->targetingTemplate->geoTargeting->cities = [
        new City(),
    ];
    $request->targetingTemplate->geoTargeting->countries = [
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
        new PostalCode(),
    ];
    $request->targetingTemplate->geoTargeting->regions = [
        new Region(),
    ];
    $request->targetingTemplate->id = 'quisquam';
    $request->targetingTemplate->keyValueTargetingExpression = new KeyValueTargetingExpression();
    $request->targetingTemplate->keyValueTargetingExpression->expression = 'et';
    $request->targetingTemplate->kind = 'expedita';
    $request->targetingTemplate->languageTargeting = new LanguageTargeting();
    $request->targetingTemplate->languageTargeting->languages = [
        new Language(),
        new Language(),
        new Language(),
    ];
    $request->targetingTemplate->listTargetingExpression = new ListTargetingExpression();
    $request->targetingTemplate->listTargetingExpression->expression = 'veniam';
    $request->targetingTemplate->name = 'Eloise Langworth';
    $request->targetingTemplate->subaccountId = 'fugiat';
    $request->targetingTemplate->technologyTargeting = new TechnologyTargeting();
    $request->targetingTemplate->technologyTargeting->browsers = [
        new Browser(),
        new Browser(),
        new Browser(),
    ];
    $request->targetingTemplate->technologyTargeting->connectionTypes = [
        new ConnectionType(),
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
    ];
    $request->targetingTemplate->technologyTargeting->operatingSystems = [
        new OperatingSystem(),
    ];
    $request->targetingTemplate->technologyTargeting->platformTypes = [
        new PlatformType(),
    ];
    $request->accessToken = 'necessitatibus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'eaque';
    $request->fields = 'perferendis';
    $request->key = 'voluptatem';
    $request->oauthToken = 'culpa';
    $request->prettyPrint = false;
    $request->profileId = 'beatae';
    $request->quotaUser = 'nesciunt';
    $request->uploadType = 'deserunt';
    $request->uploadProtocol = 'nulla';

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
