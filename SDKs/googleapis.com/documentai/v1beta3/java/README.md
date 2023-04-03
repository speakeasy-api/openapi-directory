# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DocumentaiProjectsLocationsFetchProcessorTypesSecurity;
import org.openapis.openapi.models.operations.DocumentaiProjectsLocationsFetchProcessorTypesRequest;
import org.openapis.openapi.models.operations.DocumentaiProjectsLocationsFetchProcessorTypesResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DocumentaiProjectsLocationsFetchProcessorTypesRequest req = new DocumentaiProjectsLocationsFetchProcessorTypesRequest() {{
                dollarXgafv = "2";
                accessToken = "provident";
                alt = "proto";
                callback = "quibusdam";
                fields = "unde";
                key = "nulla";
                oauthToken = "corrupti";
                parent = "illum";
                prettyPrint = false;
                quotaUser = "vel";
                uploadType = "error";
                uploadProtocol = "deserunt";
            }}            

            DocumentaiProjectsLocationsFetchProcessorTypesResponse res = sdk.projects.documentaiProjectsLocationsFetchProcessorTypes(req, new DocumentaiProjectsLocationsFetchProcessorTypesSecurity() {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDocumentaiV1beta3FetchProcessorTypesResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `documentaiProjectsLocationsFetchProcessorTypes` - Fetches processor types. Note that we do not use ListProcessorTypes here because it is not paginated.
* `documentaiProjectsLocationsList` - Lists information about the supported locations for this service.
* `documentaiProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `documentaiProjectsLocationsProcessorTypesGet` - Gets a processor type detail.
* `documentaiProjectsLocationsProcessorTypesList` - Lists the processor types that exist.
* `documentaiProjectsLocationsProcessorsCreate` - Creates a processor from the type processor that the user chose. The processor will be at "ENABLED" state by default after its creation.
* `documentaiProjectsLocationsProcessorsDisable` - Disables a processor
* `documentaiProjectsLocationsProcessorsEnable` - Enables a processor
* `documentaiProjectsLocationsProcessorsHumanReviewConfigReviewDocument` - Send a document for Human Review. The input document should be processed by the specified processor.
* `documentaiProjectsLocationsProcessorsList` - Lists all processors which belong to this project.
* `documentaiProjectsLocationsProcessorsProcessorVersionsBatchProcess` - LRO endpoint to batch process many documents. The output is written to Cloud Storage as JSON in the [Document] format.
* `documentaiProjectsLocationsProcessorsProcessorVersionsDelete` - Deletes the processor version, all artifacts under the processor version will be deleted.
* `documentaiProjectsLocationsProcessorsProcessorVersionsDeploy` - Deploys the processor version.
* `documentaiProjectsLocationsProcessorsProcessorVersionsEvaluateProcessorVersion` - Evaluates a ProcessorVersion against annotated documents, producing an Evaluation.
* `documentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsList` - Retrieves a set of evaluations for a given processor version.
* `documentaiProjectsLocationsProcessorsProcessorVersionsImportProcessorVersion` - Imports a processor version from source processor version.
* `documentaiProjectsLocationsProcessorsProcessorVersionsList` - Lists all versions of a processor.
* `documentaiProjectsLocationsProcessorsProcessorVersionsProcess` - Processes a single document.
* `documentaiProjectsLocationsProcessorsProcessorVersionsTrain` - Trains a new processor version. Operation metadata is returned as cloud_documentai_core.TrainProcessorVersionMetadata.
* `documentaiProjectsLocationsProcessorsProcessorVersionsUndeploy` - Undeploys the processor version.
* `documentaiProjectsLocationsProcessorsSetDefaultProcessorVersion` - Set the default (active) version of a Processor that will be used in ProcessDocument and BatchProcessDocuments.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
