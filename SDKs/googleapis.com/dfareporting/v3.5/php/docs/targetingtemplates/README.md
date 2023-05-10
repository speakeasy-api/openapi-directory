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
    $request->accessToken = 'blanditiis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aliquid';
    $request->fields = 'quibusdam';
    $request->id = 'b8a749e3-9845-411c-875e-4f0c004b5bb7';
    $request->key = 'ipsam';
    $request->oauthToken = 'quos';
    $request->prettyPrint = false;
    $request->profileId = 'minus';
    $request->quotaUser = 'nobis';
    $request->uploadType = 'cupiditate';
    $request->uploadProtocol = 'tempora';

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
    $request->targetingTemplate->accountId = 'voluptas';
    $request->targetingTemplate->advertiserId = 'quia';
    $request->targetingTemplate->advertiserIdDimensionValue = new DimensionValue();
    $request->targetingTemplate->advertiserIdDimensionValue->dimensionName = 'delectus';
    $request->targetingTemplate->advertiserIdDimensionValue->etag = 'alias';
    $request->targetingTemplate->advertiserIdDimensionValue->id = '069685fc-d1a1-473d-84bb-e24f29834afb';
    $request->targetingTemplate->advertiserIdDimensionValue->kind = 'doloremque';
    $request->targetingTemplate->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->targetingTemplate->advertiserIdDimensionValue->value = 'ratione';
    $request->targetingTemplate->dayPartTargeting = new DayPartTargeting();
    $request->targetingTemplate->dayPartTargeting->daysOfWeek = [
        DayPartTargetingDaysOfWeekEnum::SATURDAY,
        DayPartTargetingDaysOfWeekEnum::FRIDAY,
    ];
    $request->targetingTemplate->dayPartTargeting->hoursOfDay = [
        169991,
        562238,
    ];
    $request->targetingTemplate->dayPartTargeting->userLocalTime = false;
    $request->targetingTemplate->geoTargeting = new GeoTargeting();
    $request->targetingTemplate->geoTargeting->cities = [
        new City(),
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
    $request->targetingTemplate->id = 'unde';
    $request->targetingTemplate->keyValueTargetingExpression = new KeyValueTargetingExpression();
    $request->targetingTemplate->keyValueTargetingExpression->expression = 'est';
    $request->targetingTemplate->kind = 'fuga';
    $request->targetingTemplate->languageTargeting = new LanguageTargeting();
    $request->targetingTemplate->languageTargeting->languages = [
        new Language(),
        new Language(),
        new Language(),
    ];
    $request->targetingTemplate->listTargetingExpression = new ListTargetingExpression();
    $request->targetingTemplate->listTargetingExpression->expression = 'quae';
    $request->targetingTemplate->name = 'Ryan Hoeger III';
    $request->targetingTemplate->subaccountId = 'nisi';
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
        new MobileCarrier(),
        new MobileCarrier(),
    ];
    $request->targetingTemplate->technologyTargeting->operatingSystemVersions = [
        new OperatingSystemVersion(),
    ];
    $request->targetingTemplate->technologyTargeting->operatingSystems = [
        new OperatingSystem(),
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
    $request->accessToken = 'eos';
    $request->alt = AltEnum::JSON;
    $request->callback = 'error';
    $request->fields = 'ullam';
    $request->key = 'voluptatem';
    $request->oauthToken = 'corporis';
    $request->prettyPrint = false;
    $request->profileId = 'tempore';
    $request->quotaUser = 'maiores';
    $request->uploadType = 'doloremque';
    $request->uploadProtocol = 'consectetur';

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
    $request->accessToken = 'occaecati';
    $request->advertiserId = 'dolorem';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'provident';
    $request->fields = 'incidunt';
    $request->ids = [
        'rem',
        'sit',
    ];
    $request->key = 'cumque';
    $request->maxResults = 685537;
    $request->oauthToken = 'ratione';
    $request->pageToken = 'in';
    $request->prettyPrint = false;
    $request->profileId = 'voluptatibus';
    $request->quotaUser = 'nam';
    $request->searchString = 'ab';
    $request->sortField = DfareportingTargetingTemplatesListSortFieldEnum::ID;
    $request->sortOrder = DfareportingTargetingTemplatesListSortOrderEnum::ASCENDING;
    $request->uploadType = 'voluptatum';
    $request->uploadProtocol = 'natus';

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
    $request->targetingTemplate->accountId = 'sequi';
    $request->targetingTemplate->advertiserId = 'fugit';
    $request->targetingTemplate->advertiserIdDimensionValue = new DimensionValue();
    $request->targetingTemplate->advertiserIdDimensionValue->dimensionName = 'deserunt';
    $request->targetingTemplate->advertiserIdDimensionValue->etag = 'porro';
    $request->targetingTemplate->advertiserIdDimensionValue->id = '333172e2-dd79-4ec7-8ba7-e88ddb36fd1c';
    $request->targetingTemplate->advertiserIdDimensionValue->kind = 'optio';
    $request->targetingTemplate->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->targetingTemplate->advertiserIdDimensionValue->value = 'nesciunt';
    $request->targetingTemplate->dayPartTargeting = new DayPartTargeting();
    $request->targetingTemplate->dayPartTargeting->daysOfWeek = [
        DayPartTargetingDaysOfWeekEnum::MONDAY,
        DayPartTargetingDaysOfWeekEnum::SATURDAY,
    ];
    $request->targetingTemplate->dayPartTargeting->hoursOfDay = [
        420355,
        317022,
        495843,
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
    ];
    $request->targetingTemplate->geoTargeting->regions = [
        new Region(),
        new Region(),
        new Region(),
        new Region(),
    ];
    $request->targetingTemplate->id = 'doloremque';
    $request->targetingTemplate->keyValueTargetingExpression = new KeyValueTargetingExpression();
    $request->targetingTemplate->keyValueTargetingExpression->expression = 'culpa';
    $request->targetingTemplate->kind = 'voluptate';
    $request->targetingTemplate->languageTargeting = new LanguageTargeting();
    $request->targetingTemplate->languageTargeting->languages = [
        new Language(),
        new Language(),
    ];
    $request->targetingTemplate->listTargetingExpression = new ListTargetingExpression();
    $request->targetingTemplate->listTargetingExpression->expression = 'eaque';
    $request->targetingTemplate->name = 'Bennie Goyette';
    $request->targetingTemplate->subaccountId = 'magnam';
    $request->targetingTemplate->technologyTargeting = new TechnologyTargeting();
    $request->targetingTemplate->technologyTargeting->browsers = [
        new Browser(),
        new Browser(),
    ];
    $request->targetingTemplate->technologyTargeting->connectionTypes = [
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
    ];
    $request->targetingTemplate->technologyTargeting->operatingSystems = [
        new OperatingSystem(),
        new OperatingSystem(),
        new OperatingSystem(),
    ];
    $request->targetingTemplate->technologyTargeting->platformTypes = [
        new PlatformType(),
    ];
    $request->accessToken = 'sint';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'esse';
    $request->fields = 'commodi';
    $request->id = '3995d808-bbe7-4944-95eb-c550a1c426b5';
    $request->key = 'cupiditate';
    $request->oauthToken = 'maxime';
    $request->prettyPrint = false;
    $request->profileId = 'voluptatum';
    $request->quotaUser = 'dolor';
    $request->uploadType = 'commodi';
    $request->uploadProtocol = 'ea';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->targetingTemplate = new TargetingTemplate();
    $request->targetingTemplate->accountId = 'facere';
    $request->targetingTemplate->advertiserId = 'maxime';
    $request->targetingTemplate->advertiserIdDimensionValue = new DimensionValue();
    $request->targetingTemplate->advertiserIdDimensionValue->dimensionName = 'minus';
    $request->targetingTemplate->advertiserIdDimensionValue->etag = 'architecto';
    $request->targetingTemplate->advertiserIdDimensionValue->id = '35582c1b-855e-4889-99ef-932e9000a13a';
    $request->targetingTemplate->advertiserIdDimensionValue->kind = 'nulla';
    $request->targetingTemplate->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->targetingTemplate->advertiserIdDimensionValue->value = 'veritatis';
    $request->targetingTemplate->dayPartTargeting = new DayPartTargeting();
    $request->targetingTemplate->dayPartTargeting->daysOfWeek = [
        DayPartTargetingDaysOfWeekEnum::WEDNESDAY,
    ];
    $request->targetingTemplate->dayPartTargeting->hoursOfDay = [
        2841,
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
        new PostalCode(),
        new PostalCode(),
        new PostalCode(),
    ];
    $request->targetingTemplate->geoTargeting->regions = [
        new Region(),
    ];
    $request->targetingTemplate->id = 'consectetur';
    $request->targetingTemplate->keyValueTargetingExpression = new KeyValueTargetingExpression();
    $request->targetingTemplate->keyValueTargetingExpression->expression = 'eius';
    $request->targetingTemplate->kind = 'dicta';
    $request->targetingTemplate->languageTargeting = new LanguageTargeting();
    $request->targetingTemplate->languageTargeting->languages = [
        new Language(),
    ];
    $request->targetingTemplate->listTargetingExpression = new ListTargetingExpression();
    $request->targetingTemplate->listTargetingExpression->expression = 'deleniti';
    $request->targetingTemplate->name = 'Jordan Walter';
    $request->targetingTemplate->subaccountId = 'praesentium';
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
        new PlatformType(),
        new PlatformType(),
        new PlatformType(),
    ];
    $request->accessToken = 'voluptatum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'officia';
    $request->fields = 'saepe';
    $request->key = 'tempore';
    $request->oauthToken = 'mollitia';
    $request->prettyPrint = false;
    $request->profileId = 'libero';
    $request->quotaUser = 'tempore';
    $request->uploadType = 'odio';
    $request->uploadProtocol = 'iste';

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
