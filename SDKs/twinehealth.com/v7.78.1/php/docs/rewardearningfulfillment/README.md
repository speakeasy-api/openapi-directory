# rewardEarningFulfillment

## Overview

A reward earning fulfillment specifies the portion of a reward earning that was fulfilled and at what date.

### Available Operations

* [createRewardEarningFulfillment](#createrewardearningfulfillment) - Create a reward earning fulfillment
* [fetchRewardEarningFulfillment](#fetchrewardearningfulfillment) - Get a reward earning fulfillment
* [fetchRewardEarningFulfillments](#fetchrewardearningfulfillments) - List reward earning fulfillments

## createRewardEarningFulfillment

Create a reward earning fulfillment for a reward earning. There can only be one fulfillment for each earning.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CreateRewardEarningFulfillmentRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\RewardEarningFulfillmentResourceInput;
use \OpenAPI\OpenAPI\Models\Shared\RewardEarningFulfillmentResourceAttributesInput;
use \OpenAPI\OpenAPI\Models\Shared\RewardEarningFulfillmentResourceRelationshipsInput;
use \OpenAPI\OpenAPI\Models\Shared\RewardEarningFulfillmentResourceRelationshipsRewardEarning;
use \OpenAPI\OpenAPI\Models\Shared\RewardEarningFulfillmentResourceRelationshipsRewardEarningData;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateRewardEarningFulfillmentRequestInput();
    $request->data = new RewardEarningFulfillmentResourceInput();
    $request->data->attributes = new RewardEarningFulfillmentResourceAttributesInput();
    $request->data->attributes->fulfilledAt = 'pariatur';
    $request->data->attributes->fulfilledValue = 2273.62;
    $request->data->id = '513bb6f4-8b65-46bc-9b35-ff2e4b27537a';
    $request->data->relationships = new RewardEarningFulfillmentResourceRelationshipsInput();
    $request->data->relationships->rewardEarning = new RewardEarningFulfillmentResourceRelationshipsRewardEarning();
    $request->data->relationships->rewardEarning->data = new RewardEarningFulfillmentResourceRelationshipsRewardEarningData();
    $request->data->relationships->rewardEarning->data->id = '8cd9e731-9c17-47d5-a5f7-7b114eeb52ff';
    $request->data->relationships->rewardEarning->data->type = 'reprehenderit';
    $request->data->type = 'praesentium';

    $response = $sdk->rewardEarningFulfillment->createRewardEarningFulfillment($request);

    if ($response->createRewardEarningFulfillmentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchRewardEarningFulfillment

Get a reward earning fulfillment record by id.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchRewardEarningFulfillmentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchRewardEarningFulfillmentRequest();
    $request->id = '5fc37814-d4c9-48e0-82bb-89eb75dad636';

    $response = $sdk->rewardEarningFulfillment->fetchRewardEarningFulfillment($request);

    if ($response->fetchRewardEarningFulfillmentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchRewardEarningFulfillments

Get a list of reward earning fulfillments matching the specified filters.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchRewardEarningFulfillmentsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchRewardEarningFulfillmentsRequest();
    $request->filterPatient = 'impedit';

    $response = $sdk->rewardEarningFulfillment->fetchRewardEarningFulfillments($request);

    if ($response->fetchRewardEarningFulfillmentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
