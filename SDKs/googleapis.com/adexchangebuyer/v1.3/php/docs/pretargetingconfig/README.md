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
    $request->accountId = 'in';
    $request->alt = AltEnum::JSON;
    $request->configId = 'architecto';
    $request->fields = 'architecto';
    $request->key = 'repudiandae';
    $request->oauthToken = 'ullam';
    $request->prettyPrint = false;
    $request->quotaUser = 'expedita';
    $request->userIp = 'nihil';

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
    $request->accountId = 'repellat';
    $request->alt = AltEnum::JSON;
    $request->configId = 'quibusdam';
    $request->fields = 'sed';
    $request->key = 'saepe';
    $request->oauthToken = 'pariatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'accusantium';
    $request->userIp = 'consequuntur';

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
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerPretargetingConfigInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdexchangebuyerPretargetingConfigInsertRequest();
    $request->pretargetingConfig = new PretargetingConfig();
    $request->pretargetingConfig->billingId = 'praesentium';
    $request->pretargetingConfig->configId = 'natus';
    $request->pretargetingConfig->configName = 'magni';
    $request->pretargetingConfig->creativeType = [
        'quo',
    ];
    $request->pretargetingConfig->dimensions = [
        new PretargetingConfigDimensions(),
        new PretargetingConfigDimensions(),
        new PretargetingConfigDimensions(),
        new PretargetingConfigDimensions(),
    ];
    $request->pretargetingConfig->excludedContentLabels = [
        'maxime',
        'ea',
        'excepturi',
        'odit',
    ];
    $request->pretargetingConfig->excludedGeoCriteriaIds = [
        'accusantium',
        'ab',
    ];
    $request->pretargetingConfig->excludedPlacements = [
        new PretargetingConfigExcludedPlacements(),
        new PretargetingConfigExcludedPlacements(),
        new PretargetingConfigExcludedPlacements(),
        new PretargetingConfigExcludedPlacements(),
    ];
    $request->pretargetingConfig->excludedUserLists = [
        'ipsam',
        'voluptate',
        'autem',
    ];
    $request->pretargetingConfig->excludedVerticals = [
        'eaque',
        'pariatur',
        'nemo',
    ];
    $request->pretargetingConfig->geoCriteriaIds = [
        'perferendis',
        'fugiat',
        'amet',
        'aut',
    ];
    $request->pretargetingConfig->isActive = false;
    $request->pretargetingConfig->kind = 'cumque';
    $request->pretargetingConfig->languages = [
        'hic',
        'libero',
    ];
    $request->pretargetingConfig->maximumQps = 'nobis';
    $request->pretargetingConfig->mobileCarriers = [
        'quis',
    ];
    $request->pretargetingConfig->mobileDevices = [
        'dignissimos',
        'eaque',
        'quis',
    ];
    $request->pretargetingConfig->mobileOperatingSystemVersions = [
        'eos',
    ];
    $request->pretargetingConfig->placements = [
        new PretargetingConfigPlacements(),
    ];
    $request->pretargetingConfig->platforms = [
        'minus',
    ];
    $request->pretargetingConfig->supportedCreativeAttributes = [
        'dolor',
        'vero',
    ];
    $request->pretargetingConfig->userLists = [
        'hic',
        'recusandae',
    ];
    $request->pretargetingConfig->vendorTypes = [
        'facilis',
        'perspiciatis',
        'voluptatem',
    ];
    $request->pretargetingConfig->verticals = [
        'consequuntur',
        'blanditiis',
        'error',
        'eaque',
    ];
    $request->accountId = 'occaecati';
    $request->alt = AltEnum::JSON;
    $request->fields = 'rerum';
    $request->key = 'adipisci';
    $request->oauthToken = 'asperiores';
    $request->prettyPrint = false;
    $request->quotaUser = 'earum';
    $request->userIp = 'modi';

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
    $request->accountId = 'iste';
    $request->alt = AltEnum::JSON;
    $request->fields = 'dolorum';
    $request->key = 'deleniti';
    $request->oauthToken = 'pariatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'provident';
    $request->userIp = 'nobis';

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
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerPretargetingConfigPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdexchangebuyerPretargetingConfigPatchRequest();
    $request->pretargetingConfig = new PretargetingConfig();
    $request->pretargetingConfig->billingId = 'libero';
    $request->pretargetingConfig->configId = 'delectus';
    $request->pretargetingConfig->configName = 'quaerat';
    $request->pretargetingConfig->creativeType = [
        'aliquid',
        'dolorem',
        'dolorem',
    ];
    $request->pretargetingConfig->dimensions = [
        new PretargetingConfigDimensions(),
    ];
    $request->pretargetingConfig->excludedContentLabels = [
        'ipsum',
    ];
    $request->pretargetingConfig->excludedGeoCriteriaIds = [
        'excepturi',
        'cum',
        'voluptate',
        'dignissimos',
    ];
    $request->pretargetingConfig->excludedPlacements = [
        new PretargetingConfigExcludedPlacements(),
        new PretargetingConfigExcludedPlacements(),
        new PretargetingConfigExcludedPlacements(),
        new PretargetingConfigExcludedPlacements(),
    ];
    $request->pretargetingConfig->excludedUserLists = [
        'dolorum',
    ];
    $request->pretargetingConfig->excludedVerticals = [
        'veritatis',
        'ipsa',
    ];
    $request->pretargetingConfig->geoCriteriaIds = [
        'iure',
    ];
    $request->pretargetingConfig->isActive = false;
    $request->pretargetingConfig->kind = 'odio';
    $request->pretargetingConfig->languages = [
        'accusamus',
        'quidem',
    ];
    $request->pretargetingConfig->maximumQps = 'voluptatibus';
    $request->pretargetingConfig->mobileCarriers = [
        'natus',
        'eos',
    ];
    $request->pretargetingConfig->mobileDevices = [
        'sit',
        'fugiat',
        'ab',
    ];
    $request->pretargetingConfig->mobileOperatingSystemVersions = [
        'dolorum',
        'iusto',
        'voluptate',
    ];
    $request->pretargetingConfig->placements = [
        new PretargetingConfigPlacements(),
        new PretargetingConfigPlacements(),
        new PretargetingConfigPlacements(),
    ];
    $request->pretargetingConfig->platforms = [
        'omnis',
        'necessitatibus',
        'distinctio',
    ];
    $request->pretargetingConfig->supportedCreativeAttributes = [
        'nihil',
        'ipsum',
        'voluptate',
        'id',
    ];
    $request->pretargetingConfig->userLists = [
        'eius',
        'aspernatur',
        'perferendis',
        'amet',
    ];
    $request->pretargetingConfig->vendorTypes = [
        'accusamus',
        'ad',
        'saepe',
        'suscipit',
    ];
    $request->pretargetingConfig->verticals = [
        'provident',
        'minima',
        'repellendus',
    ];
    $request->accountId = 'totam';
    $request->alt = AltEnum::JSON;
    $request->configId = 'similique';
    $request->fields = 'alias';
    $request->key = 'at';
    $request->oauthToken = 'quaerat';
    $request->prettyPrint = false;
    $request->quotaUser = 'tempora';
    $request->userIp = 'vel';

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
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerPretargetingConfigUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdexchangebuyerPretargetingConfigUpdateRequest();
    $request->pretargetingConfig = new PretargetingConfig();
    $request->pretargetingConfig->billingId = 'quod';
    $request->pretargetingConfig->configId = 'officiis';
    $request->pretargetingConfig->configName = 'qui';
    $request->pretargetingConfig->creativeType = [
        'a',
        'esse',
        'harum',
    ];
    $request->pretargetingConfig->dimensions = [
        new PretargetingConfigDimensions(),
        new PretargetingConfigDimensions(),
    ];
    $request->pretargetingConfig->excludedContentLabels = [
        'quisquam',
    ];
    $request->pretargetingConfig->excludedGeoCriteriaIds = [
        'amet',
        'tempore',
        'accusamus',
        'numquam',
    ];
    $request->pretargetingConfig->excludedPlacements = [
        new PretargetingConfigExcludedPlacements(),
        new PretargetingConfigExcludedPlacements(),
    ];
    $request->pretargetingConfig->excludedUserLists = [
        'sapiente',
    ];
    $request->pretargetingConfig->excludedVerticals = [
        'nihil',
        'sit',
        'expedita',
    ];
    $request->pretargetingConfig->geoCriteriaIds = [
        'sed',
    ];
    $request->pretargetingConfig->isActive = false;
    $request->pretargetingConfig->kind = 'vel';
    $request->pretargetingConfig->languages = [
        'voluptas',
        'deserunt',
        'quam',
    ];
    $request->pretargetingConfig->maximumQps = 'ipsum';
    $request->pretargetingConfig->mobileCarriers = [
        'qui',
        'cupiditate',
    ];
    $request->pretargetingConfig->mobileDevices = [
        'pariatur',
        'soluta',
        'dicta',
        'laborum',
    ];
    $request->pretargetingConfig->mobileOperatingSystemVersions = [
        'incidunt',
        'aspernatur',
        'dolores',
    ];
    $request->pretargetingConfig->placements = [
        new PretargetingConfigPlacements(),
        new PretargetingConfigPlacements(),
        new PretargetingConfigPlacements(),
    ];
    $request->pretargetingConfig->platforms = [
        'aliquid',
        'quam',
        'molestias',
    ];
    $request->pretargetingConfig->supportedCreativeAttributes = [
        'qui',
        'neque',
        'fugit',
        'magni',
    ];
    $request->pretargetingConfig->userLists = [
        'sunt',
        'ullam',
    ];
    $request->pretargetingConfig->vendorTypes = [
        'hic',
        'voluptatem',
        'cumque',
    ];
    $request->pretargetingConfig->verticals = [
        'nobis',
        'et',
        'saepe',
    ];
    $request->accountId = 'ipsum';
    $request->alt = AltEnum::JSON;
    $request->configId = 'veritatis';
    $request->fields = 'nobis';
    $request->key = 'quos';
    $request->oauthToken = 'tempore';
    $request->prettyPrint = false;
    $request->quotaUser = 'cupiditate';
    $request->userIp = 'aperiam';

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
