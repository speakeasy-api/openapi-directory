# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateEngagementRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateEngagementCreateEngagementRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateEngagementSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateEngagementRequest();
    $request->flowSid = 'corrupti';
    $request->requestBody = new CreateEngagementCreateEngagementRequest();
    $request->requestBody->from = 'provident';
    $request->requestBody->parameters = 'distinctio';
    $request->requestBody->to = 'quibusdam';

    $requestSecurity = new CreateEngagementSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->createEngagement($request, $requestSecurity);

    if ($response->studioV1FlowEngagement !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [createEngagement](docs/sdk/README.md#createengagement) - Triggers a new Engagement for the Flow
* [createExecution](docs/sdk/README.md#createexecution) - Triggers a new Execution for the Flow
* [deleteEngagement](docs/sdk/README.md#deleteengagement) - Delete this Engagement and all Steps relating to it.
* [deleteExecution](docs/sdk/README.md#deleteexecution) - Delete the Execution and all Steps relating to it.
* [deleteFlow](docs/sdk/README.md#deleteflow) - Delete a specific Flow.
* [fetchEngagement](docs/sdk/README.md#fetchengagement) - Retrieve an Engagement
* [fetchEngagementContext](docs/sdk/README.md#fetchengagementcontext) - Retrieve the most recent context for an Engagement.
* [fetchExecution](docs/sdk/README.md#fetchexecution) - Retrieve an Execution
* [fetchExecutionContext](docs/sdk/README.md#fetchexecutioncontext) - Retrieve the most recent context for an Execution.
* [fetchExecutionStep](docs/sdk/README.md#fetchexecutionstep) - Retrieve a Step.
* [fetchExecutionStepContext](docs/sdk/README.md#fetchexecutionstepcontext) - Retrieve the context for an Execution Step.
* [fetchFlow](docs/sdk/README.md#fetchflow) - Retrieve a specific Flow.
* [fetchStep](docs/sdk/README.md#fetchstep) - Retrieve a Step.
* [fetchStepContext](docs/sdk/README.md#fetchstepcontext) - Retrieve the context for an Engagement Step.
* [listEngagement](docs/sdk/README.md#listengagement) - Retrieve a list of all Engagements for the Flow.
* [listExecution](docs/sdk/README.md#listexecution) - Retrieve a list of all Executions for the Flow.
* [listExecutionStep](docs/sdk/README.md#listexecutionstep) - Retrieve a list of all Steps for an Execution.
* [listFlow](docs/sdk/README.md#listflow) - Retrieve a list of all Flows.
* [listStep](docs/sdk/README.md#liststep) - Retrieve a list of all Steps for an Engagement.
* [updateExecution](docs/sdk/README.md#updateexecution) - Update the status of an Execution to `ended`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
