# submissions

### Available Operations

* [getSubmissionsSubmissionId](#getsubmissionssubmissionid) - /submissions/{submission_id}
* [postSubmissions](#postsubmissions) - /submissions

## getSubmissionsSubmissionId

### Get a submission

Get the latest details for a specific [submission](https://www.heraldapi.com/docs/submission).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSubmissionsSubmissionIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSubmissionsSubmissionIdRequest();
    $request->submissionId = '66ae395e-fb9b-4a88-b3a6-6997074ba446';

    $response = $sdk->submissions->getSubmissionsSubmissionId($request);

    if ($response->getSubmissionsSubmissionId200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSubmissions

### Create a submission

A [submission](https://www.heraldapi.com/docs/submission) creates quotes by sending an application to the institutions associated with a list of desired products. A submission can be for a single product or multiple products.

> The `application` object of the request can either be a full application (with all `risk_values` and `coverage_values`), or the `id` of a completed application created via [`/applications`](../reference/HeraldAPI.v1.yaml/paths/~1applications/post). See the 'examples' dropdown to the right for example requests and responses.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostSubmissionsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostSubmissionsRequestBody();
    $request->application = new ApplicationIDV1();
    $request->application->id = '1c2f58c6-65a3-4ced-9bdd-ec97c6148221';
    $request->producerId = 'nobis';

    $response = $sdk->submissions->postSubmissions($request);

    if ($response->postSubmissions200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
