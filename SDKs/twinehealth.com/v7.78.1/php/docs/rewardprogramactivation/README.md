# rewardProgramActivation

## Overview

A reward program activation is the activation of a reward program for a specific patient.

### Available Operations

* [createRewardProgramActivation](#createrewardprogramactivation) - Create a reward program activation
* [fetchRewardProgramActivation](#fetchrewardprogramactivation) - Get a reward program activation
* [fetchRewardProgramActivations](#fetchrewardprogramactivations) - List reward program activations

## createRewardProgramActivation

Create a reward program activation for a patient. There can only be one activation for a patient for a given reward program.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CreateRewardProgramActivationRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\RewardProgramActivationResourceInput;
use \OpenAPI\OpenAPI\Models\Shared\RewardProgramActivationResourceAttributesInput;
use \OpenAPI\OpenAPI\Models\Shared\RewardProgramActivationResourceRelationships;
use \OpenAPI\OpenAPI\Models\Shared\RewardProgramActivationResourceRelationshipsPatient;
use \OpenAPI\OpenAPI\Models\Shared\RewardProgramActivationResourceRelationshipsPatientData;
use \OpenAPI\OpenAPI\Models\Shared\RewardProgramActivationResourceRelationshipsRewardProgram;
use \OpenAPI\OpenAPI\Models\Shared\RewardProgramActivationResourceRelationshipsRewardProgramData;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateRewardProgramActivationRequestInput();
    $request->data = new RewardProgramActivationResourceInput();
    $request->data->attributes = new RewardProgramActivationResourceAttributesInput();
    $request->data->attributes->activatedAt = 'et';
    $request->data->attributes->active = false;
    $request->data->attributes->deactivatedAt = 'facilis';
    $request->data->id = '36a08088-d100-4efa-9a20-0ef0422eb216';
    $request->data->relationships = new RewardProgramActivationResourceRelationships();
    $request->data->relationships->patient = new RewardProgramActivationResourceRelationshipsPatient();
    $request->data->relationships->patient->data = new RewardProgramActivationResourceRelationshipsPatientData();
    $request->data->relationships->patient->data->id = '4cf9ab83-66c7-423f-bda9-e06bee4825c1';
    $request->data->relationships->patient->data->type = 'voluptatibus';
    $request->data->relationships->rewardProgram = new RewardProgramActivationResourceRelationshipsRewardProgram();
    $request->data->relationships->rewardProgram->data = new RewardProgramActivationResourceRelationshipsRewardProgramData();
    $request->data->relationships->rewardProgram->data->id = 'c0e115c8-0bff-4918-944e-c42defcce8f1';
    $request->data->relationships->rewardProgram->data->type = 'sint';
    $request->data->type = 'nihil';

    $response = $sdk->rewardProgramActivation->createRewardProgramActivation($request);

    if ($response->createRewardProgramActivationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchRewardProgramActivation

Get a reward program activationrecord by id.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchRewardProgramActivationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchRewardProgramActivationRequest();
    $request->id = '7773e635-62a7-4b40-8f05-e3d48fdaf313';

    $response = $sdk->rewardProgramActivation->fetchRewardProgramActivation($request);

    if ($response->fetchRewardProgramActivationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchRewardProgramActivations

Get a list of reward program activations matching the specified filters.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchRewardProgramActivationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchRewardProgramActivationsRequest();
    $request->filterGroups = 'similique';
    $request->filterOrganization = 'illo';
    $request->filterPatient = 'repellat';

    $response = $sdk->rewardProgramActivation->fetchRewardProgramActivations($request);

    if ($response->fetchRewardProgramActivationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
