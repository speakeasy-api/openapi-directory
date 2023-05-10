# locationrules

## Overview

Location rules are directives for the localization engine that may be useful for certain solutions.


### Available Operations

* [addLocationRule](#addlocationrule) - Create location rule
* [deleteLocationRule](#deletelocationrule) - Delete location rule
* [getLocationRuleById](#getlocationrulebyid) - Get location rule
* [getLocationRules](#getlocationrules) - Get all location rules
* [updateLocationRule](#updatelocationrule) - Update existing location rule

## addLocationRule

Create location rule

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\LocationRuleUpdate;
use \OpenAPI\OpenAPI\Models\Shared\LocationRuleUpdateConditions;
use \OpenAPI\OpenAPI\Models\Shared\LocationRuleTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LocationRuleUpdate();
    $request->conditions = new LocationRuleUpdateConditions();
    $request->conditions->fromLocation = '5b7d6cbd7503c445552a1664';
    $request->conditions->toLocation = '5b7d6cbd7503c445552a1664';
    $request->enabled = true;
    $request->label = 'Foo Bar';
    $request->parameters = [
        'distinctio' => 'quod',
        'odio' => 'similique',
        'facilis' => 'vero',
        'ducimus' => 'dolore',
    ];
    $request->type = LocationRuleTypeEnum::DEBOUNCE;

    $response = $sdk->locationrules->addLocationRule($request);

    if ($response->responseDefaultResource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteLocationRule

Delete location rule

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteLocationRuleRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteLocationRuleRequest();
    $request->id = 'd39c0f5d-2cff-47c7-8a45-626d436813f1';

    $response = $sdk->locationrules->deleteLocationRule($request);

    if ($response->responseDefaultResource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLocationRuleById

Get location rule

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetLocationRuleByIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLocationRuleByIdRequest();
    $request->id = '6d9f5fce-6c55-4614-ac3e-250fb008c42e';

    $response = $sdk->locationrules->getLocationRuleById($request);

    if ($response->locationRule !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLocationRules

Get all location rules

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetLocationRulesRequest;
use \OpenAPI\OpenAPI\Models\Shared\LocationRuleTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLocationRulesRequest();
    $request->after = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-01T12:32:41.161Z');
    $request->afterId = 'et';
    $request->before = 'dolorum';
    $request->beforeId = 'laborum';
    $request->enabled = true;
    $request->from = 'placeat';
    $request->fromId = 'velit';
    $request->id = '5b7d6cbd7503c445552a1664';
    $request->idOnly = false;
    $request->label = 'Foo Bar';
    $request->limit = 432148;
    $request->populate = 'autem';
    $request->resultsOnly = false;
    $request->select = 'nobis';
    $request->sort = 'quas';
    $request->timeCreated = '2018-08-30T09:51:59.737Z';
    $request->timeUpdated = '2018-08-30T09:51:59.737Z';
    $request->timeoutS = 8296.03;
    $request->type = LocationRuleTypeEnum::DEBOUNCE;
    $request->until = 'voluptas';
    $request->untilId = 'libero';

    $response = $sdk->locationrules->getLocationRules($request);

    if ($response->getLocationRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateLocationRule

Update existing location rule

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLocationRuleRequest;
use \OpenAPI\OpenAPI\Models\Shared\LocationRuleUpdate;
use \OpenAPI\OpenAPI\Models\Shared\LocationRuleUpdateConditions;
use \OpenAPI\OpenAPI\Models\Shared\LocationRuleTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateLocationRuleRequest();
    $request->locationRuleUpdate = new LocationRuleUpdate();
    $request->locationRuleUpdate->conditions = new LocationRuleUpdateConditions();
    $request->locationRuleUpdate->conditions->fromLocation = '5b7d6cbd7503c445552a1664';
    $request->locationRuleUpdate->conditions->toLocation = '5b7d6cbd7503c445552a1664';
    $request->locationRuleUpdate->enabled = true;
    $request->locationRuleUpdate->label = 'Foo Bar';
    $request->locationRuleUpdate->parameters = [
        'tempora' => 'numquam',
    ];
    $request->locationRuleUpdate->type = LocationRuleTypeEnum::ALLOW;
    $request->id = '90747477-8a7b-4d46-ad28-c10ab3cdca42';

    $response = $sdk->locationrules->updateLocationRule($request);

    if ($response->responseDefaultResource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
