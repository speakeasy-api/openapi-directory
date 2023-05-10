# rewardProgram

## Overview

A reward program provides the details for a rewards program for a group. Different rewards programs can be created for different periods of time specified by the start_at and end_at dates. A reward program can activated for a patient any time between these dates. An activated reward program for a patient is called a reward program activation.

### Available Operations

* [createRewardProgram](#createrewardprogram) - Create a reward program
* [fetchRewardProgram](#fetchrewardprogram) - Get a reward program
* [fetchRewardProgramGroup](#fetchrewardprogramgroup) - Get group for a reward program
* [fetchRewardPrograms](#fetchrewardprograms) - List reward programs

## createRewardProgram

Create a reward program for a group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CreateRewardProgramRequest;
use \OpenAPI\OpenAPI\Models\Shared\RewardProgramResource;
use \OpenAPI\OpenAPI\Models\Shared\RewardProgramResourceAttributes;
use \OpenAPI\OpenAPI\Models\Shared\RewardProgramResourceAttributesBudgetUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\RewardProgramResourceRelationships;
use \OpenAPI\OpenAPI\Models\Shared\RewardProgramResourceRelationshipsGroup;
use \OpenAPI\OpenAPI\Models\Shared\RewardProgramResourceRelationshipsGroupData;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateRewardProgramRequest();
    $request->data = new RewardProgramResource();
    $request->data->attributes = new RewardProgramResourceAttributes();
    $request->data->attributes->budgetUnit = RewardProgramResourceAttributesBudgetUnitEnum::POINT;
    $request->data->attributes->budgetValue = 121.71;
    $request->data->attributes->description = 'voluptatem';
    $request->data->attributes->durationActive = 3228.29;
    $request->data->attributes->endAt = 'quae';
    $request->data->attributes->frozen = false;
    $request->data->attributes->fulfillAsEarned = false;
    $request->data->attributes->name = 'Desiree Lakin';
    $request->data->attributes->startAt = 'amet';
    $request->data->attributes->tagline = 'quasi';
    $request->data->id = '180f739a-e9e0-457e-b809-e2810331f398';
    $request->data->relationships = new RewardProgramResourceRelationships();
    $request->data->relationships->group = new RewardProgramResourceRelationshipsGroup();
    $request->data->relationships->group->data = new RewardProgramResourceRelationshipsGroupData();
    $request->data->relationships->group->data->id = '1d4c700b-607f-43c9-bc73-b9da3f2ceda7';
    $request->data->relationships->group->data->type = 'vero';
    $request->data->type = 'qui';

    $response = $sdk->rewardProgram->createRewardProgram($request);

    if ($response->createRewardProgramResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchRewardProgram

Get a reward program record by id.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchRewardProgramRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchRewardProgramRequest();
    $request->id = '3f225741-1faf-44b7-944e-472e802857a5';

    $response = $sdk->rewardProgram->fetchRewardProgram($request);

    if ($response->fetchRewardProgramResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchRewardProgramGroup

Get the group related to a reward program.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchRewardProgramGroupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchRewardProgramGroupRequest();
    $request->id = 'b40463a7-d575-4f14-80e7-64ad7334ec1b';

    $response = $sdk->rewardProgram->fetchRewardProgramGroup($request);

    if ($response->fetchGroupsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchRewardPrograms

Get a list of reward programs matching the specified filters.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchRewardProgramsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchRewardProgramsRequest();
    $request->filterGroups = 'iusto';
    $request->filterOrganization = 'quas';

    $response = $sdk->rewardProgram->fetchRewardPrograms($request);

    if ($response->fetchRewardProgramsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
