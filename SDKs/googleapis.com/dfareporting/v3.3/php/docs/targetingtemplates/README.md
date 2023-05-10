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
    $request->accessToken = 'libero';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolore';
    $request->fields = 'nisi';
    $request->id = '0addfde4-10c3-47da-a918-2a49d9625d3c';
    $request->key = 'laborum';
    $request->oauthToken = 'delectus';
    $request->prettyPrint = false;
    $request->profileId = 'reiciendis';
    $request->quotaUser = 'minus';
    $request->uploadType = 'inventore';
    $request->uploadProtocol = 'cupiditate';

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
    $request->targetingTemplate->accountId = 'voluptates';
    $request->targetingTemplate->advertiserId = 'saepe';
    $request->targetingTemplate->advertiserIdDimensionValue = new DimensionValue();
    $request->targetingTemplate->advertiserIdDimensionValue->dimensionName = 'animi';
    $request->targetingTemplate->advertiserIdDimensionValue->etag = 'modi';
    $request->targetingTemplate->advertiserIdDimensionValue->id = '452792bc-d440-4ea9-8bec-ce0486de0d56';
    $request->targetingTemplate->advertiserIdDimensionValue->kind = 'repellendus';
    $request->targetingTemplate->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->targetingTemplate->advertiserIdDimensionValue->value = 'non';
    $request->targetingTemplate->dayPartTargeting = new DayPartTargeting();
    $request->targetingTemplate->dayPartTargeting->daysOfWeek = [
        DayPartTargetingDaysOfWeekEnum::MONDAY,
        DayPartTargetingDaysOfWeekEnum::MONDAY,
        DayPartTargetingDaysOfWeekEnum::WEDNESDAY,
    ];
    $request->targetingTemplate->dayPartTargeting->hoursOfDay = [
        34589,
        206230,
    ];
    $request->targetingTemplate->dayPartTargeting->userLocalTime = false;
    $request->targetingTemplate->geoTargeting = new GeoTargeting();
    $request->targetingTemplate->geoTargeting->cities = [
        new City(),
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
        new Region(),
    ];
    $request->targetingTemplate->id = 'explicabo';
    $request->targetingTemplate->keyValueTargetingExpression = new KeyValueTargetingExpression();
    $request->targetingTemplate->keyValueTargetingExpression->expression = 'ea';
    $request->targetingTemplate->kind = 'doloribus';
    $request->targetingTemplate->languageTargeting = new LanguageTargeting();
    $request->targetingTemplate->languageTargeting->languages = [
        new Language(),
        new Language(),
        new Language(),
        new Language(),
    ];
    $request->targetingTemplate->listTargetingExpression = new ListTargetingExpression();
    $request->targetingTemplate->listTargetingExpression->expression = 'nihil';
    $request->targetingTemplate->name = 'Pat Kertzmann';
    $request->targetingTemplate->subaccountId = 'odio';
    $request->targetingTemplate->technologyTargeting = new TechnologyTargeting();
    $request->targetingTemplate->technologyTargeting->browsers = [
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
    ];
    $request->accessToken = 'recusandae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'vero';
    $request->fields = 'eius';
    $request->key = 'optio';
    $request->oauthToken = 'sapiente';
    $request->prettyPrint = false;
    $request->profileId = 'porro';
    $request->quotaUser = 'impedit';
    $request->uploadType = 'vel';
    $request->uploadProtocol = 'dolorum';

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
    $request->accessToken = 'ab';
    $request->advertiserId = 'necessitatibus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'veniam';
    $request->fields = 'qui';
    $request->ids = [
        'sed',
        'modi',
    ];
    $request->key = 'at';
    $request->maxResults = 44938;
    $request->oauthToken = 'alias';
    $request->pageToken = 'aut';
    $request->prettyPrint = false;
    $request->profileId = 'quae';
    $request->quotaUser = 'tempora';
    $request->searchString = 'repudiandae';
    $request->sortField = DfareportingTargetingTemplatesListSortFieldEnum::NAME;
    $request->sortOrder = DfareportingTargetingTemplatesListSortOrderEnum::ASCENDING;
    $request->uploadType = 'minima';
    $request->uploadProtocol = 'impedit';

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
    $request->targetingTemplate->accountId = 'animi';
    $request->targetingTemplate->advertiserId = 'dicta';
    $request->targetingTemplate->advertiserIdDimensionValue = new DimensionValue();
    $request->targetingTemplate->advertiserIdDimensionValue->dimensionName = 'vitae';
    $request->targetingTemplate->advertiserIdDimensionValue->etag = 'laborum';
    $request->targetingTemplate->advertiserIdDimensionValue->id = 'c53ebb65-87f3-4404-94c5-b9acee400ae9';
    $request->targetingTemplate->advertiserIdDimensionValue->kind = 'doloribus';
    $request->targetingTemplate->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->targetingTemplate->advertiserIdDimensionValue->value = 'magni';
    $request->targetingTemplate->dayPartTargeting = new DayPartTargeting();
    $request->targetingTemplate->dayPartTargeting->daysOfWeek = [
        DayPartTargetingDaysOfWeekEnum::FRIDAY,
        DayPartTargetingDaysOfWeekEnum::SUNDAY,
        DayPartTargetingDaysOfWeekEnum::MONDAY,
        DayPartTargetingDaysOfWeekEnum::SATURDAY,
    ];
    $request->targetingTemplate->dayPartTargeting->hoursOfDay = [
        171624,
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
    $request->targetingTemplate->id = 'magnam';
    $request->targetingTemplate->keyValueTargetingExpression = new KeyValueTargetingExpression();
    $request->targetingTemplate->keyValueTargetingExpression->expression = 'dignissimos';
    $request->targetingTemplate->kind = 'sunt';
    $request->targetingTemplate->languageTargeting = new LanguageTargeting();
    $request->targetingTemplate->languageTargeting->languages = [
        new Language(),
        new Language(),
        new Language(),
    ];
    $request->targetingTemplate->listTargetingExpression = new ListTargetingExpression();
    $request->targetingTemplate->listTargetingExpression->expression = 'maxime';
    $request->targetingTemplate->name = 'Dr. Tami O'Reilly';
    $request->targetingTemplate->subaccountId = 'quibusdam';
    $request->targetingTemplate->technologyTargeting = new TechnologyTargeting();
    $request->targetingTemplate->technologyTargeting->browsers = [
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
    ];
    $request->targetingTemplate->technologyTargeting->operatingSystemVersions = [
        new OperatingSystemVersion(),
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
    ];
    $request->accessToken = 'facere';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'exercitationem';
    $request->fields = 'quaerat';
    $request->id = '72cdd14f-c43b-470b-8a88-fa70c43351c3';
    $request->key = 'at';
    $request->oauthToken = 'nulla';
    $request->prettyPrint = false;
    $request->profileId = 'beatae';
    $request->quotaUser = 'necessitatibus';
    $request->uploadType = 'harum';
    $request->uploadProtocol = 'deleniti';

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
    $request->targetingTemplate->accountId = 'odio';
    $request->targetingTemplate->advertiserId = 'tenetur';
    $request->targetingTemplate->advertiserIdDimensionValue = new DimensionValue();
    $request->targetingTemplate->advertiserIdDimensionValue->dimensionName = 'quam';
    $request->targetingTemplate->advertiserIdDimensionValue->etag = 'nemo';
    $request->targetingTemplate->advertiserIdDimensionValue->id = 'f4f23f1c-0a58-46c3-ae7d-7b67feef5e14';
    $request->targetingTemplate->advertiserIdDimensionValue->kind = 'quia';
    $request->targetingTemplate->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->targetingTemplate->advertiserIdDimensionValue->value = 'perspiciatis';
    $request->targetingTemplate->dayPartTargeting = new DayPartTargeting();
    $request->targetingTemplate->dayPartTargeting->daysOfWeek = [
        DayPartTargetingDaysOfWeekEnum::SATURDAY,
        DayPartTargetingDaysOfWeekEnum::MONDAY,
    ];
    $request->targetingTemplate->dayPartTargeting->hoursOfDay = [
        743623,
        909717,
        808885,
        934820,
    ];
    $request->targetingTemplate->dayPartTargeting->userLocalTime = false;
    $request->targetingTemplate->geoTargeting = new GeoTargeting();
    $request->targetingTemplate->geoTargeting->cities = [
        new City(),
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
    ];
    $request->targetingTemplate->geoTargeting->postalCodes = [
        new PostalCode(),
        new PostalCode(),
        new PostalCode(),
        new PostalCode(),
    ];
    $request->targetingTemplate->geoTargeting->regions = [
        new Region(),
        new Region(),
    ];
    $request->targetingTemplate->id = 'tempore';
    $request->targetingTemplate->keyValueTargetingExpression = new KeyValueTargetingExpression();
    $request->targetingTemplate->keyValueTargetingExpression->expression = 'quae';
    $request->targetingTemplate->kind = 'quis';
    $request->targetingTemplate->languageTargeting = new LanguageTargeting();
    $request->targetingTemplate->languageTargeting->languages = [
        new Language(),
        new Language(),
    ];
    $request->targetingTemplate->listTargetingExpression = new ListTargetingExpression();
    $request->targetingTemplate->listTargetingExpression->expression = 'itaque';
    $request->targetingTemplate->name = 'Adam Kunze';
    $request->targetingTemplate->subaccountId = 'voluptate';
    $request->targetingTemplate->technologyTargeting = new TechnologyTargeting();
    $request->targetingTemplate->technologyTargeting->browsers = [
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
        new OperatingSystem(),
    ];
    $request->targetingTemplate->technologyTargeting->platformTypes = [
        new PlatformType(),
        new PlatformType(),
    ];
    $request->accessToken = 'laudantium';
    $request->alt = AltEnum::JSON;
    $request->callback = 'nihil';
    $request->fields = 'labore';
    $request->key = 'laboriosam';
    $request->oauthToken = 'praesentium';
    $request->prettyPrint = false;
    $request->profileId = 'quae';
    $request->quotaUser = 'nisi';
    $request->uploadType = 'amet';
    $request->uploadProtocol = 'tenetur';

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
