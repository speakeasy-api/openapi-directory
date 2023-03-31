# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/documentai/v1beta3/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.DocumentaiProjectsLocationsFetchProcessorTypesRequest{
        DollarXgafv: "2",
        AccessToken: "provident",
        Alt: "proto",
        Callback: "quibusdam",
        Fields: "unde",
        Key: "nulla",
        OauthToken: "corrupti",
        Parent: "illum",
        PrettyPrint: false,
        QuotaUser: "vel",
        UploadType: "error",
        UploadProtocol: "deserunt",
    }

    ctx := context.Background()
    res, err := s.Projects.DocumentaiProjectsLocationsFetchProcessorTypes(ctx, req, operations.DocumentaiProjectsLocationsFetchProcessorTypesSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDocumentaiV1beta3FetchProcessorTypesResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Projects

* `DocumentaiProjectsLocationsFetchProcessorTypes` - Fetches processor types. Note that we do not use ListProcessorTypes here because it is not paginated.
* `DocumentaiProjectsLocationsList` - Lists information about the supported locations for this service.
* `DocumentaiProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `DocumentaiProjectsLocationsProcessorTypesGet` - Gets a processor type detail.
* `DocumentaiProjectsLocationsProcessorTypesList` - Lists the processor types that exist.
* `DocumentaiProjectsLocationsProcessorsCreate` - Creates a processor from the type processor that the user chose. The processor will be at "ENABLED" state by default after its creation.
* `DocumentaiProjectsLocationsProcessorsDisable` - Disables a processor
* `DocumentaiProjectsLocationsProcessorsEnable` - Enables a processor
* `DocumentaiProjectsLocationsProcessorsHumanReviewConfigReviewDocument` - Send a document for Human Review. The input document should be processed by the specified processor.
* `DocumentaiProjectsLocationsProcessorsList` - Lists all processors which belong to this project.
* `DocumentaiProjectsLocationsProcessorsProcessorVersionsBatchProcess` - LRO endpoint to batch process many documents. The output is written to Cloud Storage as JSON in the [Document] format.
* `DocumentaiProjectsLocationsProcessorsProcessorVersionsDelete` - Deletes the processor version, all artifacts under the processor version will be deleted.
* `DocumentaiProjectsLocationsProcessorsProcessorVersionsDeploy` - Deploys the processor version.
* `DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluateProcessorVersion` - Evaluates a ProcessorVersion against annotated documents, producing an Evaluation.
* `DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsList` - Retrieves a set of evaluations for a given processor version.
* `DocumentaiProjectsLocationsProcessorsProcessorVersionsImportProcessorVersion` - Imports a processor version from source processor version.
* `DocumentaiProjectsLocationsProcessorsProcessorVersionsList` - Lists all versions of a processor.
* `DocumentaiProjectsLocationsProcessorsProcessorVersionsProcess` - Processes a single document.
* `DocumentaiProjectsLocationsProcessorsProcessorVersionsTrain` - Trains a new processor version. Operation metadata is returned as cloud_documentai_core.TrainProcessorVersionMetadata.
* `DocumentaiProjectsLocationsProcessorsProcessorVersionsUndeploy` - Undeploys the processor version.
* `DocumentaiProjectsLocationsProcessorsSetDefaultProcessorVersion` - Set the default (active) version of a Processor that will be used in ProcessDocument and BatchProcessDocuments.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
