# reward

## Overview

A reward allocates a portion of the budget from the reward program activation for achieving a particular goal and sets a target date.

### Available Operations

* [createReward](#createreward) - Create a reward
* [fetchReward](#fetchreward) - Get a reward
* [fetchRewards](#fetchrewards) - List rewards

## createReward

Create a reward for a patient.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CreateRewardRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\RewardResourceInput;
use \OpenAPI\OpenAPI\Models\Shared\RewardResourceAttributesInput;
use \OpenAPI\OpenAPI\Models\Shared\RewardResourceRelationshipsInput;
use \OpenAPI\OpenAPI\Models\Shared\RewardResourceRelationshipsRewardProgramActivation;
use \OpenAPI\OpenAPI\Models\Shared\RewardResourceRelationshipsRewardProgramActivationData;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateRewardRequestInput();
    $request->data = new RewardResourceInput();
    $request->data->attributes = new RewardResourceAttributesInput();
    $request->data->attributes->thread = 'eligendi';
    $request->data->attributes->allocatedAt = 'distinctio';
    $request->data->attributes->allocatedValue = 322.73;
    $request->data->attributes->description = 'autem';
    $request->data->attributes->targetAt = 'esse';
    $request->data->id = '2d1ad879-eeb9-4665-b85e-fbd02bae0be2';
    $request->data->relationships = new RewardResourceRelationshipsInput();
    $request->data->relationships->rewardProgramActivation = new RewardResourceRelationshipsRewardProgramActivation();
    $request->data->relationships->rewardProgramActivation->data = new RewardResourceRelationshipsRewardProgramActivationData();
    $request->data->relationships->rewardProgramActivation->data->id = 'd782259e-3ea4-4b51-97f9-2443da7ce52b';
    $request->data->relationships->rewardProgramActivation->data->type = 'voluptatum';
    $request->data->type = 'cupiditate';

    $response = $sdk->reward->createReward($request);

    if ($response->createRewardResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchReward

Get a reward record by id.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchRewardRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchRewardRequest();
    $request->id = '5c537c64-54ef-4b0b-b489-6c3ca5acfbe2';

    $response = $sdk->reward->fetchReward($request);

    if ($response->fetchRewardResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchRewards

Get a list of rewards matching the specified filters.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchRewardsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchRewardsRequest();
    $request->filterGroups = 'repellat';
    $request->filterOrganization = 'pariatur';
    $request->filterPatient = 'nemo';
    $request->filterRewardProgramActivation = 'reprehenderit';
    $request->filterThread = 'aperiam';

    $response = $sdk->reward->fetchRewards($request);

    if ($response->fetchRewardsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
