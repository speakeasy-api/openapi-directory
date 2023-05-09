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
import org.openapis.openapi.models.operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateRequest;
import org.openapis.openapi.models.operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateResponse;
import org.openapis.openapi.models.operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDiscoveryengineV1alphaDocument;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateRequest req = new DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudDiscoveryengineV1alphaDocument = new GoogleCloudDiscoveryengineV1alphaDocument() {{
                    id = "bd9d8d69-a674-4e0f-867c-c8796ed151a0";
                    jsonData = "ipsam";
                    name = "Timmy Satterfield";
                    parentDocumentId = "at";
                    schemaId = "maiores";
                    structData = new java.util.HashMap<String, Object>() {{
                        put("quod", "quod");
                        put("esse", "totam");
                    }};
                }};;
                accessToken = "porro";
                alt = AltEnum.PROTO;
                callback = "dicta";
                documentId = "nam";
                fields = "officia";
                key = "occaecati";
                oauthToken = "fugit";
                prettyPrint = false;
                quotaUser = "deleniti";
                uploadType = "hic";
                uploadProtocol = "optio";
            }};            

            DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateResponse res = sdk.projects.discoveryengineProjectsLocationsDataStoresBranchesDocumentsCreate(req, new DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateSecurity("totam", "beatae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDiscoveryengineV1alphaDocument != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [projects](docs/projects/README.md)

* [discoveryengineProjectsLocationsDataStoresBranchesDocumentsCreate](docs/projects/README.md#discoveryengineprojectslocationsdatastoresbranchesdocumentscreate) - Creates a Document.
* [discoveryengineProjectsLocationsDataStoresBranchesDocumentsDelete](docs/projects/README.md#discoveryengineprojectslocationsdatastoresbranchesdocumentsdelete) - Deletes a Document.
* [discoveryengineProjectsLocationsDataStoresBranchesDocumentsImport](docs/projects/README.md#discoveryengineprojectslocationsdatastoresbranchesdocumentsimport) - Bulk import of multiple Documents. Request processing may be synchronous. Non-existing items will be created. Note: It is possible for a subset of the Documents to be successfully updated.
* [discoveryengineProjectsLocationsDataStoresBranchesDocumentsList](docs/projects/README.md#discoveryengineprojectslocationsdatastoresbranchesdocumentslist) - Gets a list of Documents.
* [discoveryengineProjectsLocationsDataStoresBranchesDocumentsPatch](docs/projects/README.md#discoveryengineprojectslocationsdatastoresbranchesdocumentspatch) - Updates a Document.
* [discoveryengineProjectsLocationsDataStoresBranchesDocumentsPurge](docs/projects/README.md#discoveryengineprojectslocationsdatastoresbranchesdocumentspurge) - Permanently deletes all selected Documents under a branch. This process is asynchronous. If the request is valid, the removal will be enquired and processed offlines. Depending on the number of Documents, this operation could take hours to complete. Before the operation completes, some Documents may still be returned by DocumentService.GetDocument or DocumentService.ListDocuments. To get a sample of Documents that would be deleted, set PurgeDocumentsRequest.force to false.
* [discoveryengineProjectsLocationsDataStoresServingConfigsRecommend](docs/projects/README.md#discoveryengineprojectslocationsdatastoresservingconfigsrecommend) - Makes a recommendation, which requires a contextual user event.
* [discoveryengineProjectsLocationsDataStoresUserEventsCollect](docs/projects/README.md#discoveryengineprojectslocationsdatastoresusereventscollect) - Writes a single user event from the browser. This uses a GET request to due to browser restriction of POST-ing to a 3rd party domain. This method is used only by the Discovery Engine API JavaScript pixel and Google Tag Manager. Users should not call this method directly.
* [discoveryengineProjectsLocationsDataStoresUserEventsImport](docs/projects/README.md#discoveryengineprojectslocationsdatastoresusereventsimport) - Bulk import of User events. Request processing might be synchronous. Events that already exist are skipped. Use this method for backfilling historical user events. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully inserted. Operation.metadata is of type ImportMetadata.
* [discoveryengineProjectsLocationsDataStoresUserEventsWrite](docs/projects/README.md#discoveryengineprojectslocationsdatastoresusereventswrite) - Writes a single user event.
* [discoveryengineProjectsOperationsGet](docs/projects/README.md#discoveryengineprojectsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [discoveryengineProjectsOperationsList](docs/projects/README.md#discoveryengineprojectsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
