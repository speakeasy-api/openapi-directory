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
use \OpenAPI\OpenAPI\Models\Operations\RunProjectsLocationsJobsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2JobInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2BinaryAuthorization;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2ExecutionReference;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2JobLaunchStageEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2ExecutionTemplate;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2TaskTemplate;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2Container;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2EnvVar;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2EnvVarSource;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2SecretKeySelector;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2Probe;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2GRPCAction;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2HTTPGetAction;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2HTTPHeader;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2TCPSocketAction;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2ContainerPort;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2ResourceRequirements;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2VolumeMount;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2TaskTemplateExecutionEnvironmentEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2Volume;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2CloudSqlInstance;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2EmptyDirVolumeSource;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2EmptyDirVolumeSourceMediumEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2SecretVolumeSource;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2VersionToPath;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2VpcAccess;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2VpcAccessEgressEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2Condition;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2ConditionExecutionReasonEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2ConditionReasonEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2ConditionRevisionReasonEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2ConditionSeverityEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRunV2ConditionStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RunProjectsLocationsJobsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RunProjectsLocationsJobsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudRunV2JobInput = new GoogleCloudRunV2JobInput();
    $request->googleCloudRunV2JobInput->annotations = [
        'distinctio' => 'quibusdam',
        'unde' => 'nulla',
        'corrupti' => 'illum',
    ];
    $request->googleCloudRunV2JobInput->binaryAuthorization = new GoogleCloudRunV2BinaryAuthorization();
    $request->googleCloudRunV2JobInput->binaryAuthorization->breakglassJustification = 'vel';
    $request->googleCloudRunV2JobInput->binaryAuthorization->useDefault = false;
    $request->googleCloudRunV2JobInput->client = 'error';
    $request->googleCloudRunV2JobInput->clientVersion = 'deserunt';
    $request->googleCloudRunV2JobInput->labels = [
        'iure' => 'magnam',
        'debitis' => 'ipsa',
    ];
    $request->googleCloudRunV2JobInput->latestCreatedExecution = new GoogleCloudRunV2ExecutionReference();
    $request->googleCloudRunV2JobInput->latestCreatedExecution->completionTime = 'delectus';
    $request->googleCloudRunV2JobInput->latestCreatedExecution->createTime = 'tempora';
    $request->googleCloudRunV2JobInput->latestCreatedExecution->name = 'Minnie Schiller';
    $request->googleCloudRunV2JobInput->launchStage = GoogleCloudRunV2JobLaunchStageEnum::EARLY_ACCESS;
    $request->googleCloudRunV2JobInput->name = 'Charlie Walsh II';
    $request->googleCloudRunV2JobInput->template = new GoogleCloudRunV2ExecutionTemplate();
    $request->googleCloudRunV2JobInput->template->annotations = [
        'deserunt' => 'perferendis',
    ];
    $request->googleCloudRunV2JobInput->template->labels = [
        'repellendus' => 'sapiente',
        'quo' => 'odit',
    ];
    $request->googleCloudRunV2JobInput->template->parallelism = 870013;
    $request->googleCloudRunV2JobInput->template->taskCount = 870088;
    $request->googleCloudRunV2JobInput->template->template = new GoogleCloudRunV2TaskTemplate();
    $request->googleCloudRunV2JobInput->template->template->containers = [
        new GoogleCloudRunV2Container(),
        new GoogleCloudRunV2Container(),
        new GoogleCloudRunV2Container(),
        new GoogleCloudRunV2Container(),
    ];
    $request->googleCloudRunV2JobInput->template->template->encryptionKey = 'molestiae';
    $request->googleCloudRunV2JobInput->template->template->executionEnvironment = GoogleCloudRunV2TaskTemplateExecutionEnvironmentEnum::EXECUTION_ENVIRONMENT_GEN2;
    $request->googleCloudRunV2JobInput->template->template->maxRetries = 800911;
    $request->googleCloudRunV2JobInput->template->template->serviceAccount = 'esse';
    $request->googleCloudRunV2JobInput->template->template->timeout = 'totam';
    $request->googleCloudRunV2JobInput->template->template->volumes = [
        new GoogleCloudRunV2Volume(),
        new GoogleCloudRunV2Volume(),
        new GoogleCloudRunV2Volume(),
        new GoogleCloudRunV2Volume(),
    ];
    $request->googleCloudRunV2JobInput->template->template->vpcAccess = new GoogleCloudRunV2VpcAccess();
    $request->googleCloudRunV2JobInput->template->template->vpcAccess->connector = 'dolorum';
    $request->googleCloudRunV2JobInput->template->template->vpcAccess->egress = GoogleCloudRunV2VpcAccessEgressEnum::VPC_EGRESS_UNSPECIFIED;
    $request->googleCloudRunV2JobInput->terminalCondition = new GoogleCloudRunV2Condition();
    $request->googleCloudRunV2JobInput->terminalCondition->executionReason = GoogleCloudRunV2ConditionExecutionReasonEnum::CANCELLED;
    $request->googleCloudRunV2JobInput->terminalCondition->lastTransitionTime = 'officia';
    $request->googleCloudRunV2JobInput->terminalCondition->message = 'occaecati';
    $request->googleCloudRunV2JobInput->terminalCondition->reason = GoogleCloudRunV2ConditionReasonEnum::REVISION_FAILED;
    $request->googleCloudRunV2JobInput->terminalCondition->revisionReason = GoogleCloudRunV2ConditionRevisionReasonEnum::HEALTH_CHECK_CONTAINER_ERROR;
    $request->googleCloudRunV2JobInput->terminalCondition->severity = GoogleCloudRunV2ConditionSeverityEnum::INFO;
    $request->googleCloudRunV2JobInput->terminalCondition->state = GoogleCloudRunV2ConditionStateEnum::CONDITION_FAILED;
    $request->googleCloudRunV2JobInput->terminalCondition->type = 'totam';
    $request->accessToken = 'beatae';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'molestiae';
    $request->fields = 'modi';
    $request->jobId = 'qui';
    $request->key = 'impedit';
    $request->oauthToken = 'cum';
    $request->parent = 'esse';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsum';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'aspernatur';
    $request->validateOnly = false;

    $requestSecurity = new RunProjectsLocationsJobsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->runProjectsLocationsJobsCreate($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [projects](docs/projects/README.md)

* [runProjectsLocationsJobsCreate](docs/projects/README.md#runprojectslocationsjobscreate) - Creates a Job.
* [runProjectsLocationsJobsExecutionsList](docs/projects/README.md#runprojectslocationsjobsexecutionslist) - Lists Executions from a Job.
* [runProjectsLocationsJobsExecutionsTasksList](docs/projects/README.md#runprojectslocationsjobsexecutionstaskslist) - Lists Tasks from an Execution of a Job.
* [runProjectsLocationsJobsList](docs/projects/README.md#runprojectslocationsjobslist) - Lists Jobs.
* [runProjectsLocationsJobsRun](docs/projects/README.md#runprojectslocationsjobsrun) - Triggers creation of a new Execution of this Job.
* [runProjectsLocationsOperationsList](docs/projects/README.md#runprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [runProjectsLocationsOperationsWait](docs/projects/README.md#runprojectslocationsoperationswait) - Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
* [runProjectsLocationsServicesCreate](docs/projects/README.md#runprojectslocationsservicescreate) - Creates a new Service in a given project and location.
* [runProjectsLocationsServicesGetIamPolicy](docs/projects/README.md#runprojectslocationsservicesgetiampolicy) - Gets the IAM Access Control policy currently in effect for the given Cloud Run Service. This result does not include any inherited policies.
* [runProjectsLocationsServicesList](docs/projects/README.md#runprojectslocationsserviceslist) - Lists Services.
* [runProjectsLocationsServicesPatch](docs/projects/README.md#runprojectslocationsservicespatch) - Updates a Service.
* [runProjectsLocationsServicesRevisionsDelete](docs/projects/README.md#runprojectslocationsservicesrevisionsdelete) - Deletes a Revision.
* [runProjectsLocationsServicesRevisionsGet](docs/projects/README.md#runprojectslocationsservicesrevisionsget) - Gets information about a Revision.
* [runProjectsLocationsServicesRevisionsList](docs/projects/README.md#runprojectslocationsservicesrevisionslist) - Lists Revisions from a given Service, or from a given location.
* [runProjectsLocationsServicesSetIamPolicy](docs/projects/README.md#runprojectslocationsservicessetiampolicy) - Sets the IAM Access control policy for the specified Service. Overwrites any existing policy.
* [runProjectsLocationsServicesTestIamPermissions](docs/projects/README.md#runprojectslocationsservicestestiampermissions) - Returns permissions that a caller has on the specified Project. There are no permissions required for making this API call.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
