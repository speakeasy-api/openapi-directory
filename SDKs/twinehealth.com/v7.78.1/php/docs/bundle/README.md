# bundle

## Overview

A bundle is a collection of actions (an action plan) in a patient's plan summary.

### Available Operations

* [createBundle](#createbundle) - Create bundle
* [fetchBundle](#fetchbundle) - Get a bundle
* [updateBundle](#updatebundle) - Update a bundle

## createBundle

Create a bundle in a patient's plan

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CreateBundleRequest;
use \OpenAPI\OpenAPI\Models\Shared\BundleResource;
use \OpenAPI\OpenAPI\Models\Shared\BundleResourceAttributes;
use \OpenAPI\OpenAPI\Models\Shared\BundleResourceRelationships;
use \OpenAPI\OpenAPI\Models\Shared\BundleResourceRelationshipsActions;
use \OpenAPI\OpenAPI\Models\Shared\BundleResourceRelationshipsActionsData;
use \OpenAPI\OpenAPI\Models\Shared\BundleResourceRelationshipsPlan;
use \OpenAPI\OpenAPI\Models\Shared\BundleResourceRelationshipsPlanData;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateBundleRequest();
    $request->data = new BundleResource();
    $request->data->attributes = new BundleResourceAttributes();
    $request->data->attributes->thread = 'quis';
    $request->data->attributes->effectiveFrom = 'nesciunt';
    $request->data->attributes->effectiveTo = 'eos';
    $request->data->attributes->title = 'Mr.';
    $request->data->attributes->type = 'dolores';
    $request->data->id = 'c73d5fe9-b90c-4289-89b3-fe49a8d9cbf4';
    $request->data->relationships = new BundleResourceRelationships();
    $request->data->relationships->actions = new BundleResourceRelationshipsActions();
    $request->data->relationships->actions->data = new BundleResourceRelationshipsActionsData();
    $request->data->relationships->actions->data->id = '8633323f-9b77-4f3a-8100-674ebf69280d';
    $request->data->relationships->actions->data->type = 'ab';
    $request->data->relationships->actions->links = [
        'dolorum' => 'iusto',
        'voluptate' => 'dolorum',
        'deleniti' => 'omnis',
    ];
    $request->data->relationships->plan = new BundleResourceRelationshipsPlan();
    $request->data->relationships->plan->data = new BundleResourceRelationshipsPlanData();
    $request->data->relationships->plan->data->id = 'ebf737ae-4203-4ce5-a6a9-5d8a0d446ce2';
    $request->data->relationships->plan->data->type = 'dolorum';
    $request->data->relationships->plan->links = [
        'esse' => 'harum',
        'iusto' => 'ipsum',
        'quisquam' => 'tenetur',
        'amet' => 'tempore',
    ];
    $request->data->type = 'accusamus';

    $response = $sdk->bundle->createBundle($request);

    if ($response->createBundleResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchBundle

Get a bundle from a patient's plan.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchBundleRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchBundleRequest();
    $request->id = '453f870b-326b-45a7-b429-cdb1a8422bb6';

    $response = $sdk->bundle->fetchBundle($request);

    if ($response->fetchBundleResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateBundle

Updte a bundle from a patient's plan.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBundleRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateBundleRequest;
use \OpenAPI\OpenAPI\Models\Shared\BundleResource;
use \OpenAPI\OpenAPI\Models\Shared\BundleResourceAttributes;
use \OpenAPI\OpenAPI\Models\Shared\BundleResourceRelationships;
use \OpenAPI\OpenAPI\Models\Shared\BundleResourceRelationshipsActions;
use \OpenAPI\OpenAPI\Models\Shared\BundleResourceRelationshipsActionsData;
use \OpenAPI\OpenAPI\Models\Shared\BundleResourceRelationshipsPlan;
use \OpenAPI\OpenAPI\Models\Shared\BundleResourceRelationshipsPlanData;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateBundleRequest();
    $request->updateBundleRequest = new UpdateBundleRequest();
    $request->updateBundleRequest->data = new BundleResource();
    $request->updateBundleRequest->data->attributes = new BundleResourceAttributes();
    $request->updateBundleRequest->data->attributes->thread = 'quam';
    $request->updateBundleRequest->data->attributes->effectiveFrom = 'molestias';
    $request->updateBundleRequest->data->attributes->effectiveTo = 'temporibus';
    $request->updateBundleRequest->data->attributes->title = 'Mr.';
    $request->updateBundleRequest->data->attributes->type = 'neque';
    $request->updateBundleRequest->data->id = '22715bf0-cbb1-4e31-b8b9-0f3443a1108e';
    $request->updateBundleRequest->data->relationships = new BundleResourceRelationships();
    $request->updateBundleRequest->data->relationships->actions = new BundleResourceRelationshipsActions();
    $request->updateBundleRequest->data->relationships->actions->data = new BundleResourceRelationshipsActionsData();
    $request->updateBundleRequest->data->relationships->actions->data->id = '0adcf4b9-2187-49fc-a953-f73ef7fbc7ab';
    $request->updateBundleRequest->data->relationships->actions->data->type = 'vero';
    $request->updateBundleRequest->data->relationships->actions->links = [
        'dolore' => 'quibusdam',
        'illum' => 'sequi',
    ];
    $request->updateBundleRequest->data->relationships->plan = new BundleResourceRelationshipsPlan();
    $request->updateBundleRequest->data->relationships->plan->data = new BundleResourceRelationshipsPlanData();
    $request->updateBundleRequest->data->relationships->plan->data->id = '9c0f5d2c-ff7c-470a-8562-6d436813f16d';
    $request->updateBundleRequest->data->relationships->plan->data->type = 'excepturi';
    $request->updateBundleRequest->data->relationships->plan->links = [
        'nostrum' => 'sapiente',
        'quisquam' => 'saepe',
        'ea' => 'impedit',
        'corporis' => 'veniam',
    ];
    $request->updateBundleRequest->data->type = 'aliquid';
    $request->id = '146c3e25-0fb0-408c-82e1-41aac366c8dd';

    $response = $sdk->bundle->updateBundle($request);

    if ($response->updateBundleResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
