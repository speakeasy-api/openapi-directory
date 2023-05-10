# estimate

### Available Operations

* [getEstimate](#getestimate) - Get a specific estimate of project
* [getEstimateList](#getestimatelist) - List the Estimates
* [postEstimateJson](#postestimatejson) - Create a Estimate
* [postEstimateRaw](#postestimateraw) - Create a Estimate

## getEstimate

Get a specific estimate of project

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEstimateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEstimateRequest();
    $request->estimateId = 'corrupti';
    $request->projectId = 'illum';
    $request->workgroupId = 'vel';

    $response = $sdk->estimate->getEstimate($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEstimateList

List the Estimates

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEstimateListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEstimateListRequest();
    $request->projectId = 'error';
    $request->workgroupId = 'deserunt';

    $response = $sdk->estimate->getEstimateList($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postEstimateJson

Create a Estimate

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostEstimateJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\EstimatePO;
use \OpenAPI\OpenAPI\Models\Shared\EstimateItemPO;
use \OpenAPI\OpenAPI\Models\Shared\PaperItemPO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostEstimateJsonRequest();
    $request->estimatePO = new EstimatePO();
    $request->estimatePO->comments = 'sample comments';
    $request->estimatePO->description = 'sample description';
    $request->estimatePO->estimateItems = [
        new EstimateItemPO(),
        new EstimateItemPO(),
    ];
    $request->estimatePO->estimateTitle = 'sample estimate_title';
    $request->estimatePO->expirationDate = DateTime::createFromFormat('Y-m-d', '2022-09-14');
    $request->estimatePO->ownerReference = 'sample owner_reference';
    $request->estimatePO->rfeId = 1;
    $request->projectId = 'debitis';
    $request->workgroupId = 'ipsa';

    $response = $sdk->estimate->postEstimateJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postEstimateRaw

Create a Estimate

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostEstimateRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostEstimateRawRequest();
    $request->requestBody = 'delectus';
    $request->projectId = 'tempora';
    $request->workgroupId = 'suscipit';

    $response = $sdk->estimate->postEstimateRaw($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
