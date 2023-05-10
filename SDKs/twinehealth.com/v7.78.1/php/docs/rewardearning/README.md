# rewardEarning

## Overview

A reward earning specifies the portion of a reward that was earned and at what date.

### Available Operations

* [createRewardEarning](#createrewardearning) - Create a reward earning
* [fetchRewardEarning](#fetchrewardearning) - Get a reward earning
* [fetchRewardEarnings](#fetchrewardearnings) - List reward earnings

## createRewardEarning

Create a reward earning for a reward. There can only be one earning for a reward. It is possilble to create multiple reward earnings simultaneously by providing and array of reward earnings in the data property.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CreateRewardEarningRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\RewardEarningResourceInput;
use \OpenAPI\OpenAPI\Models\Shared\RewardEarningResourceAttributesInput;
use \OpenAPI\OpenAPI\Models\Shared\RewardEarningResourceRelationshipsInput;
use \OpenAPI\OpenAPI\Models\Shared\RewardEarningResourceRelationshipsReward;
use \OpenAPI\OpenAPI\Models\Shared\RewardEarningResourceRelationshipsRewardData;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateRewardEarningRequestInput();
    $request->data = new RewardEarningResourceInput();
    $request->data->attributes = new RewardEarningResourceAttributesInput();
    $request->data->attributes->earnedAt = 'odio';
    $request->data->attributes->earnedValue = 3252.97;
    $request->data->id = '77929177-deac-4646-acb5-73409e3eb1e5';
    $request->data->relationships = new RewardEarningResourceRelationshipsInput();
    $request->data->relationships->reward = new RewardEarningResourceRelationshipsReward();
    $request->data->relationships->reward->data = new RewardEarningResourceRelationshipsRewardData();
    $request->data->relationships->reward->data->id = 'a2b12eb0-7f11-46db-9954-5fc95fa88970';
    $request->data->relationships->reward->data->type = 'saepe';
    $request->data->type = 'architecto';

    $response = $sdk->rewardEarning->createRewardEarning($request);

    if ($response->createRewardEarningResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchRewardEarning

Get a reward earning record by id.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchRewardEarningRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchRewardEarningRequest();
    $request->id = '89dbb30f-cb33-4ea0-95b1-97cd44e2f52d';

    $response = $sdk->rewardEarning->fetchRewardEarning($request);

    if ($response->fetchRewardEarningResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchRewardEarnings

Get a list of reward earnings matching the specified filters.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchRewardEarningsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchRewardEarningsRequest();
    $request->filterGroups = 'laudantium';
    $request->filterPatient = 'odit';
    $request->filterReadyForFulfillment = false;

    $response = $sdk->rewardEarning->fetchRewardEarnings($request);

    if ($response->fetchRewardEarningsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
