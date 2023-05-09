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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DocumentaiProjectsLocationsFetchProcessorTypes(ctx, operations.DocumentaiProjectsLocationsFetchProcessorTypesRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quibusdam"),
        Fields: sdk.String("unde"),
        Key: sdk.String("nulla"),
        OauthToken: sdk.String("corrupti"),
        Parent: "illum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vel"),
        UploadType: sdk.String("error"),
        UploadProtocol: sdk.String("deserunt"),
    }, operations.DocumentaiProjectsLocationsFetchProcessorTypesSecurity{
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


### [Projects](docs/projects/README.md)

* [DocumentaiProjectsLocationsFetchProcessorTypes](docs/projects/README.md#documentaiprojectslocationsfetchprocessortypes) - Fetches processor types. Note that we don't use ListProcessorTypes here, because it isn't paginated.
* [DocumentaiProjectsLocationsList](docs/projects/README.md#documentaiprojectslocationslist) - Lists information about the supported locations for this service.
* [DocumentaiProjectsLocationsOperationsCancel](docs/projects/README.md#documentaiprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [DocumentaiProjectsLocationsProcessorTypesGet](docs/projects/README.md#documentaiprojectslocationsprocessortypesget) - Gets a processor type detail.
* [DocumentaiProjectsLocationsProcessorTypesList](docs/projects/README.md#documentaiprojectslocationsprocessortypeslist) - Lists the processor types that exist.
* [DocumentaiProjectsLocationsProcessorsCreate](docs/projects/README.md#documentaiprojectslocationsprocessorscreate) - Creates a processor from the ProcessorType provided. The processor will be at `ENABLED` state by default after its creation.
* [DocumentaiProjectsLocationsProcessorsDisable](docs/projects/README.md#documentaiprojectslocationsprocessorsdisable) - Disables a processor
* [DocumentaiProjectsLocationsProcessorsEnable](docs/projects/README.md#documentaiprojectslocationsprocessorsenable) - Enables a processor
* [DocumentaiProjectsLocationsProcessorsHumanReviewConfigReviewDocument](docs/projects/README.md#documentaiprojectslocationsprocessorshumanreviewconfigreviewdocument) - Send a document for Human Review. The input document should be processed by the specified processor.
* [DocumentaiProjectsLocationsProcessorsList](docs/projects/README.md#documentaiprojectslocationsprocessorslist) - Lists all processors which belong to this project.
* [DocumentaiProjectsLocationsProcessorsProcessorVersionsBatchProcess](docs/projects/README.md#documentaiprojectslocationsprocessorsprocessorversionsbatchprocess) - LRO endpoint to batch process many documents. The output is written to Cloud Storage as JSON in the [Document] format.
* [DocumentaiProjectsLocationsProcessorsProcessorVersionsDelete](docs/projects/README.md#documentaiprojectslocationsprocessorsprocessorversionsdelete) - Deletes the processor version, all artifacts under the processor version will be deleted.
* [DocumentaiProjectsLocationsProcessorsProcessorVersionsDeploy](docs/projects/README.md#documentaiprojectslocationsprocessorsprocessorversionsdeploy) - Deploys the processor version.
* [DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluateProcessorVersion](docs/projects/README.md#documentaiprojectslocationsprocessorsprocessorversionsevaluateprocessorversion) - Evaluates a ProcessorVersion against annotated documents, producing an Evaluation.
* [DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsList](docs/projects/README.md#documentaiprojectslocationsprocessorsprocessorversionsevaluationslist) - Retrieves a set of evaluations for a given processor version.
* [DocumentaiProjectsLocationsProcessorsProcessorVersionsImportProcessorVersion](docs/projects/README.md#documentaiprojectslocationsprocessorsprocessorversionsimportprocessorversion) - Imports a processor version from source processor version.
* [DocumentaiProjectsLocationsProcessorsProcessorVersionsList](docs/projects/README.md#documentaiprojectslocationsprocessorsprocessorversionslist) - Lists all versions of a processor.
* [DocumentaiProjectsLocationsProcessorsProcessorVersionsProcess](docs/projects/README.md#documentaiprojectslocationsprocessorsprocessorversionsprocess) - Processes a single document.
* [DocumentaiProjectsLocationsProcessorsProcessorVersionsTrain](docs/projects/README.md#documentaiprojectslocationsprocessorsprocessorversionstrain) - Trains a new processor version. Operation metadata is returned as TrainProcessorVersionMetadata.
* [DocumentaiProjectsLocationsProcessorsProcessorVersionsUndeploy](docs/projects/README.md#documentaiprojectslocationsprocessorsprocessorversionsundeploy) - Undeploys the processor version.
* [DocumentaiProjectsLocationsProcessorsSetDefaultProcessorVersion](docs/projects/README.md#documentaiprojectslocationsprocessorssetdefaultprocessorversion) - Set the default (active) version of a Processor that will be used in ProcessDocument and BatchProcessDocuments.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
