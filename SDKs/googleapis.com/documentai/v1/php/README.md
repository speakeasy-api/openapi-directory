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
use \OpenAPI\OpenAPI\Models\Operations\DocumentaiProjectsLocationsFetchProcessorTypesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DocumentaiProjectsLocationsFetchProcessorTypesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DocumentaiProjectsLocationsFetchProcessorTypesRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quibusdam';
    $request->fields = 'unde';
    $request->key = 'nulla';
    $request->oauthToken = 'corrupti';
    $request->parent = 'illum';
    $request->prettyPrint = false;
    $request->quotaUser = 'vel';
    $request->uploadType = 'error';
    $request->uploadProtocol = 'deserunt';

    $requestSecurity = new DocumentaiProjectsLocationsFetchProcessorTypesSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->documentaiProjectsLocationsFetchProcessorTypes($request, $requestSecurity);

    if ($response->googleCloudDocumentaiV1FetchProcessorTypesResponse !== null) {
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

* [documentaiProjectsLocationsFetchProcessorTypes](docs/projects/README.md#documentaiprojectslocationsfetchprocessortypes) - Fetches processor types. Note that we don't use ListProcessorTypes here, because it isn't paginated.
* [documentaiProjectsLocationsList](docs/projects/README.md#documentaiprojectslocationslist) - Lists information about the supported locations for this service.
* [documentaiProjectsLocationsOperationsCancel](docs/projects/README.md#documentaiprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [documentaiProjectsLocationsProcessorTypesList](docs/projects/README.md#documentaiprojectslocationsprocessortypeslist) - Lists the processor types that exist.
* [documentaiProjectsLocationsProcessorsCreate](docs/projects/README.md#documentaiprojectslocationsprocessorscreate) - Creates a processor from the ProcessorType provided. The processor will be at `ENABLED` state by default after its creation.
* [documentaiProjectsLocationsProcessorsDisable](docs/projects/README.md#documentaiprojectslocationsprocessorsdisable) - Disables a processor
* [documentaiProjectsLocationsProcessorsEnable](docs/projects/README.md#documentaiprojectslocationsprocessorsenable) - Enables a processor
* [documentaiProjectsLocationsProcessorsHumanReviewConfigReviewDocument](docs/projects/README.md#documentaiprojectslocationsprocessorshumanreviewconfigreviewdocument) - Send a document for Human Review. The input document should be processed by the specified processor.
* [documentaiProjectsLocationsProcessorsList](docs/projects/README.md#documentaiprojectslocationsprocessorslist) - Lists all processors which belong to this project.
* [documentaiProjectsLocationsProcessorsProcessorVersionsBatchProcess](docs/projects/README.md#documentaiprojectslocationsprocessorsprocessorversionsbatchprocess) - LRO endpoint to batch process many documents. The output is written to Cloud Storage as JSON in the [Document] format.
* [documentaiProjectsLocationsProcessorsProcessorVersionsDelete](docs/projects/README.md#documentaiprojectslocationsprocessorsprocessorversionsdelete) - Deletes the processor version, all artifacts under the processor version will be deleted.
* [documentaiProjectsLocationsProcessorsProcessorVersionsDeploy](docs/projects/README.md#documentaiprojectslocationsprocessorsprocessorversionsdeploy) - Deploys the processor version.
* [documentaiProjectsLocationsProcessorsProcessorVersionsEvaluateProcessorVersion](docs/projects/README.md#documentaiprojectslocationsprocessorsprocessorversionsevaluateprocessorversion) - Evaluates a ProcessorVersion against annotated documents, producing an Evaluation.
* [documentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsList](docs/projects/README.md#documentaiprojectslocationsprocessorsprocessorversionsevaluationslist) - Retrieves a set of evaluations for a given processor version.
* [documentaiProjectsLocationsProcessorsProcessorVersionsList](docs/projects/README.md#documentaiprojectslocationsprocessorsprocessorversionslist) - Lists all versions of a processor.
* [documentaiProjectsLocationsProcessorsProcessorVersionsProcess](docs/projects/README.md#documentaiprojectslocationsprocessorsprocessorversionsprocess) - Processes a single document.
* [documentaiProjectsLocationsProcessorsProcessorVersionsTrain](docs/projects/README.md#documentaiprojectslocationsprocessorsprocessorversionstrain) - Trains a new processor version. Operation metadata is returned as TrainProcessorVersionMetadata.
* [documentaiProjectsLocationsProcessorsProcessorVersionsUndeploy](docs/projects/README.md#documentaiprojectslocationsprocessorsprocessorversionsundeploy) - Undeploys the processor version.
* [documentaiProjectsLocationsProcessorsSetDefaultProcessorVersion](docs/projects/README.md#documentaiprojectslocationsprocessorssetdefaultprocessorversion) - Set the default (active) version of a Processor that will be used in ProcessDocument and BatchProcessDocuments.
* [documentaiProjectsOperationsGet](docs/projects/README.md#documentaiprojectsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
