# pretargetingConfig

### Available Operations

* [adexchangebuyerPretargetingConfigDelete](#adexchangebuyerpretargetingconfigdelete) - Deletes an existing pretargeting config.
* [adexchangebuyerPretargetingConfigGet](#adexchangebuyerpretargetingconfigget) - Gets a specific pretargeting configuration
* [adexchangebuyerPretargetingConfigInsert](#adexchangebuyerpretargetingconfiginsert) - Inserts a new pretargeting configuration.
* [adexchangebuyerPretargetingConfigList](#adexchangebuyerpretargetingconfiglist) - Retrieves a list of the authenticated user's pretargeting configurations.
* [adexchangebuyerPretargetingConfigPatch](#adexchangebuyerpretargetingconfigpatch) - Updates an existing pretargeting config. This method supports patch semantics.
* [adexchangebuyerPretargetingConfigUpdate](#adexchangebuyerpretargetingconfigupdate) - Updates an existing pretargeting config.

## adexchangebuyerPretargetingConfigDelete

Deletes an existing pretargeting config.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerPretargetingConfigDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerPretargetingConfigDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdexchangebuyerPretargetingConfigDeleteRequest();
    $request->accountId = 'numquam';
    $request->alt = AltEnum::JSON;
    $request->configId = 'veritatis';
    $request->fields = 'ipsa';
    $request->key = 'ipsa';
    $request->oauthToken = 'iure';
    $request->prettyPrint = false;
    $request->quotaUser = 'odio';
    $request->userIp = 'quaerat';

    $requestSecurity = new AdexchangebuyerPretargetingConfigDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->pretargetingConfig->adexchangebuyerPretargetingConfigDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adexchangebuyerPretargetingConfigGet

Gets a specific pretargeting configuration

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerPretargetingConfigGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerPretargetingConfigGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdexchangebuyerPretargetingConfigGetRequest();
    $request->accountId = 'accusamus';
    $request->alt = AltEnum::JSON;
    $request->configId = 'quidem';
    $request->fields = 'voluptatibus';
    $request->key = 'voluptas';
    $request->oauthToken = 'natus';
    $request->prettyPrint = false;
    $request->quotaUser = 'eos';
    $request->userIp = 'atque';

    $requestSecurity = new AdexchangebuyerPretargetingConfigGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->pretargetingConfig->adexchangebuyerPretargetingConfigGet($request, $requestSecurity);

    if ($response->pretargetingConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adexchangebuyerPretargetingConfigInsert

Inserts a new pretargeting configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerPretargetingConfigInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\PretargetingConfig;
use \OpenAPI\OpenAPI\Models\Shared\PretargetingConfigDimensions;
use \OpenAPI\OpenAPI\Models\Shared\PretargetingConfigExcludedPlacements;
use \OpenAPI\OpenAPI\Models\Shared\PretargetingConfigPlacements;
use \OpenAPI\OpenAPI\Models\Shared\PretargetingConfigVideoPlayerSizes;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerPretargetingConfigInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdexchangebuyerPretargetingConfigInsertRequest();
    $request->pretargetingConfig = new PretargetingConfig();
    $request->pretargetingConfig->billingId = 'sit';
    $request->pretargetingConfig->configId = 'fugiat';
    $request->pretargetingConfig->configName = 'ab';
    $request->pretargetingConfig->creativeType = [
        'dolorum',
        'iusto',
        'voluptate',
    ];
    $request->pretargetingConfig->dimensions = [
        new PretargetingConfigDimensions(),
        new PretargetingConfigDimensions(),
        new PretargetingConfigDimensions(),
    ];
    $request->pretargetingConfig->excludedContentLabels = [
        'omnis',
        'necessitatibus',
        'distinctio',
    ];
    $request->pretargetingConfig->excludedGeoCriteriaIds = [
        'nihil',
        'ipsum',
        'voluptate',
        'id',
    ];
    $request->pretargetingConfig->excludedPlacements = [
        new PretargetingConfigExcludedPlacements(),
        new PretargetingConfigExcludedPlacements(),
        new PretargetingConfigExcludedPlacements(),
        new PretargetingConfigExcludedPlacements(),
    ];
    $request->pretargetingConfig->excludedUserLists = [
        'aspernatur',
        'perferendis',
    ];
    $request->pretargetingConfig->excludedVerticals = [
        'optio',
    ];
    $request->pretargetingConfig->geoCriteriaIds = [
        'ad',
        'saepe',
        'suscipit',
        'deserunt',
    ];
    $request->pretargetingConfig->isActive = false;
    $request->pretargetingConfig->kind = 'provident';
    $request->pretargetingConfig->languages = [
        'repellendus',
        'totam',
    ];
    $request->pretargetingConfig->maximumQps = 'similique';
    $request->pretargetingConfig->minimumViewabilityDecile = 55;
    $request->pretargetingConfig->mobileCarriers = [
        'quaerat',
        'tempora',
        'vel',
        'quod',
    ];
    $request->pretargetingConfig->mobileDevices = [
        'qui',
        'dolorum',
        'a',
        'esse',
    ];
    $request->pretargetingConfig->mobileOperatingSystemVersions = [
        'iusto',
        'ipsum',
        'quisquam',
    ];
    $request->pretargetingConfig->placements = [
        new PretargetingConfigPlacements(),
        new PretargetingConfigPlacements(),
        new PretargetingConfigPlacements(),
        new PretargetingConfigPlacements(),
    ];
    $request->pretargetingConfig->platforms = [
        'tempore',
    ];
    $request->pretargetingConfig->supportedCreativeAttributes = [
        'numquam',
        'enim',
        'dolorem',
        'sapiente',
    ];
    $request->pretargetingConfig->userIdentifierDataRequired = [
        'nihil',
        'sit',
        'expedita',
    ];
    $request->pretargetingConfig->userLists = [
        'sed',
    ];
    $request->pretargetingConfig->vendorTypes = [
        'libero',
        'voluptas',
    ];
    $request->pretargetingConfig->verticals = [
        'quam',
        'ipsum',
        'incidunt',
    ];
    $request->pretargetingConfig->videoPlayerSizes = [
        new PretargetingConfigVideoPlayerSizes(),
    ];
    $request->accountId = 'cupiditate';
    $request->alt = AltEnum::JSON;
    $request->fields = 'maxime';
    $request->key = 'pariatur';
    $request->oauthToken = 'soluta';
    $request->prettyPrint = false;
    $request->quotaUser = 'dicta';
    $request->userIp = 'laborum';

    $requestSecurity = new AdexchangebuyerPretargetingConfigInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->pretargetingConfig->adexchangebuyerPretargetingConfigInsert($request, $requestSecurity);

    if ($response->pretargetingConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adexchangebuyerPretargetingConfigList

Retrieves a list of the authenticated user's pretargeting configurations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerPretargetingConfigListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerPretargetingConfigListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdexchangebuyerPretargetingConfigListRequest();
    $request->accountId = 'totam';
    $request->alt = AltEnum::JSON;
    $request->fields = 'incidunt';
    $request->key = 'aspernatur';
    $request->oauthToken = 'dolores';
    $request->prettyPrint = false;
    $request->quotaUser = 'distinctio';
    $request->userIp = 'facilis';

    $requestSecurity = new AdexchangebuyerPretargetingConfigListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->pretargetingConfig->adexchangebuyerPretargetingConfigList($request, $requestSecurity);

    if ($response->pretargetingConfigList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adexchangebuyerPretargetingConfigPatch

Updates an existing pretargeting config. This method supports patch semantics.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerPretargetingConfigPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\PretargetingConfig;
use \OpenAPI\OpenAPI\Models\Shared\PretargetingConfigDimensions;
use \OpenAPI\OpenAPI\Models\Shared\PretargetingConfigExcludedPlacements;
use \OpenAPI\OpenAPI\Models\Shared\PretargetingConfigPlacements;
use \OpenAPI\OpenAPI\Models\Shared\PretargetingConfigVideoPlayerSizes;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerPretargetingConfigPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdexchangebuyerPretargetingConfigPatchRequest();
    $request->pretargetingConfig = new PretargetingConfig();
    $request->pretargetingConfig->billingId = 'aliquid';
    $request->pretargetingConfig->configId = 'quam';
    $request->pretargetingConfig->configName = 'molestias';
    $request->pretargetingConfig->creativeType = [
        'qui',
        'neque',
        'fugit',
        'magni',
    ];
    $request->pretargetingConfig->dimensions = [
        new PretargetingConfigDimensions(),
        new PretargetingConfigDimensions(),
    ];
    $request->pretargetingConfig->excludedContentLabels = [
        'ullam',
    ];
    $request->pretargetingConfig->excludedGeoCriteriaIds = [
        'hic',
        'voluptatem',
        'cumque',
    ];
    $request->pretargetingConfig->excludedPlacements = [
        new PretargetingConfigExcludedPlacements(),
        new PretargetingConfigExcludedPlacements(),
        new PretargetingConfigExcludedPlacements(),
    ];
    $request->pretargetingConfig->excludedUserLists = [
        'et',
        'saepe',
        'ipsum',
    ];
    $request->pretargetingConfig->excludedVerticals = [
        'nobis',
    ];
    $request->pretargetingConfig->geoCriteriaIds = [
        'tempore',
        'cupiditate',
        'aperiam',
    ];
    $request->pretargetingConfig->isActive = false;
    $request->pretargetingConfig->kind = 'delectus';
    $request->pretargetingConfig->languages = [
        'dolore',
    ];
    $request->pretargetingConfig->maximumQps = 'labore';
    $request->pretargetingConfig->minimumViewabilityDecile = 240829;
    $request->pretargetingConfig->mobileCarriers = [
        'architecto',
        'quae',
        'aut',
    ];
    $request->pretargetingConfig->mobileDevices = [
        'itaque',
        'consequatur',
        'est',
    ];
    $request->pretargetingConfig->mobileOperatingSystemVersions = [
        'porro',
        'doloribus',
        'ut',
        'facilis',
    ];
    $request->pretargetingConfig->placements = [
        new PretargetingConfigPlacements(),
        new PretargetingConfigPlacements(),
        new PretargetingConfigPlacements(),
    ];
    $request->pretargetingConfig->platforms = [
        'quae',
    ];
    $request->pretargetingConfig->supportedCreativeAttributes = [
        'odio',
        'occaecati',
        'voluptatibus',
    ];
    $request->pretargetingConfig->userIdentifierDataRequired = [
        'vero',
        'omnis',
        'quis',
        'ipsum',
    ];
    $request->pretargetingConfig->userLists = [
        'voluptate',
        'consectetur',
        'vero',
        'tenetur',
    ];
    $request->pretargetingConfig->vendorTypes = [
        'hic',
        'distinctio',
    ];
    $request->pretargetingConfig->verticals = [
        'odio',
        'similique',
        'facilis',
        'vero',
    ];
    $request->pretargetingConfig->videoPlayerSizes = [
        new PretargetingConfigVideoPlayerSizes(),
        new PretargetingConfigVideoPlayerSizes(),
    ];
    $request->accountId = 'dolore';
    $request->alt = AltEnum::JSON;
    $request->configId = 'quibusdam';
    $request->fields = 'illum';
    $request->key = 'sequi';
    $request->oauthToken = 'natus';
    $request->prettyPrint = false;
    $request->quotaUser = 'impedit';
    $request->userIp = 'aut';

    $requestSecurity = new AdexchangebuyerPretargetingConfigPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->pretargetingConfig->adexchangebuyerPretargetingConfigPatch($request, $requestSecurity);

    if ($response->pretargetingConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adexchangebuyerPretargetingConfigUpdate

Updates an existing pretargeting config.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerPretargetingConfigUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\PretargetingConfig;
use \OpenAPI\OpenAPI\Models\Shared\PretargetingConfigDimensions;
use \OpenAPI\OpenAPI\Models\Shared\PretargetingConfigExcludedPlacements;
use \OpenAPI\OpenAPI\Models\Shared\PretargetingConfigPlacements;
use \OpenAPI\OpenAPI\Models\Shared\PretargetingConfigVideoPlayerSizes;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerPretargetingConfigUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdexchangebuyerPretargetingConfigUpdateRequest();
    $request->pretargetingConfig = new PretargetingConfig();
    $request->pretargetingConfig->billingId = 'voluptatibus';
    $request->pretargetingConfig->configId = 'exercitationem';
    $request->pretargetingConfig->configName = 'nulla';
    $request->pretargetingConfig->creativeType = [
        'porro',
    ];
    $request->pretargetingConfig->dimensions = [
        new PretargetingConfigDimensions(),
        new PretargetingConfigDimensions(),
        new PretargetingConfigDimensions(),
        new PretargetingConfigDimensions(),
    ];
    $request->pretargetingConfig->excludedContentLabels = [
        'iusto',
        'eligendi',
        'ducimus',
        'alias',
    ];
    $request->pretargetingConfig->excludedGeoCriteriaIds = [
        'tempora',
        'ipsam',
        'ea',
    ];
    $request->pretargetingConfig->excludedPlacements = [
        new PretargetingConfigExcludedPlacements(),
    ];
    $request->pretargetingConfig->excludedUserLists = [
        'possimus',
        'magnam',
    ];
    $request->pretargetingConfig->excludedVerticals = [
        'ex',
    ];
    $request->pretargetingConfig->geoCriteriaIds = [
        'dicta',
        'dolor',
        'maiores',
    ];
    $request->pretargetingConfig->isActive = false;
    $request->pretargetingConfig->kind = 'quasi';
    $request->pretargetingConfig->languages = [
        'nulla',
        'excepturi',
    ];
    $request->pretargetingConfig->maximumQps = 'voluptatibus';
    $request->pretargetingConfig->minimumViewabilityDecile = 343605;
    $request->pretargetingConfig->mobileCarriers = [
        'quisquam',
        'saepe',
        'ea',
        'impedit',
    ];
    $request->pretargetingConfig->mobileDevices = [
        'veniam',
        'aliquid',
    ];
    $request->pretargetingConfig->mobileOperatingSystemVersions = [
        'magnam',
    ];
    $request->pretargetingConfig->placements = [
        new PretargetingConfigPlacements(),
        new PretargetingConfigPlacements(),
    ];
    $request->pretargetingConfig->platforms = [
        'consectetur',
        'recusandae',
        'aspernatur',
        'minima',
    ];
    $request->pretargetingConfig->supportedCreativeAttributes = [
        'a',
    ];
    $request->pretargetingConfig->userIdentifierDataRequired = [
        'aut',
        'aut',
        'deleniti',
    ];
    $request->pretargetingConfig->userLists = [
        'aliquam',
        'fugit',
        'accusamus',
        'inventore',
    ];
    $request->pretargetingConfig->vendorTypes = [
        'et',
        'dolorum',
    ];
    $request->pretargetingConfig->verticals = [
        'placeat',
        'velit',
        'eum',
    ];
    $request->pretargetingConfig->videoPlayerSizes = [
        new PretargetingConfigVideoPlayerSizes(),
        new PretargetingConfigVideoPlayerSizes(),
    ];
    $request->accountId = 'nobis';
    $request->alt = AltEnum::JSON;
    $request->configId = 'quas';
    $request->fields = 'assumenda';
    $request->key = 'nulla';
    $request->oauthToken = 'voluptas';
    $request->prettyPrint = false;
    $request->quotaUser = 'libero';
    $request->userIp = 'quasi';

    $requestSecurity = new AdexchangebuyerPretargetingConfigUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->pretargetingConfig->adexchangebuyerPretargetingConfigUpdate($request, $requestSecurity);

    if ($response->pretargetingConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
