# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateRequest req = new DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateRequest() {{
                security = new DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreatePathParams() {{
                    parent = "corrupti";
                }};
                queryParams = new DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "quaerat";
                    alt = "media";
                    callback = "quibusdam";
                    documentId = "sit";
                    fields = "molestiae";
                    key = "officia";
                    oauthToken = "nobis";
                    prettyPrint = false;
                    quotaUser = "aut";
                    uploadType = "quos";
                    uploadProtocol = "et";
                }};
                request = new GoogleCloudDiscoveryengineV1betaDocument() {{
                    id = "repellat";
                    jsonData = "alias";
                    name = "rem";
                    parentDocumentId = "ducimus";
                    schemaId = "sit";
                    structData = new java.util.HashMap<String, Object>() {{
                        put("voluptatem", "dolores");
                        put("perferendis", "ad");
                    }};
                }};
            }};

            DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateResponse res = sdk.projects.discoveryengineProjectsLocationsDataStoresBranchesDocumentsCreate(req);

            if (res.googleCloudDiscoveryengineV1betaDocument.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `discoveryengineProjectsLocationsDataStoresBranchesDocumentsCreate` - Creates a Document.
* `discoveryengineProjectsLocationsDataStoresBranchesDocumentsDelete` - Deletes a Document.
* `discoveryengineProjectsLocationsDataStoresBranchesDocumentsImport` - Bulk import of multiple Documents. Request processing may be synchronous. Non-existing items will be created. Note: It is possible for a subset of the Documents to be successfully updated.
* `discoveryengineProjectsLocationsDataStoresBranchesDocumentsList` - Gets a list of Documents.
* `discoveryengineProjectsLocationsDataStoresBranchesDocumentsPatch` - Updates a Document.
* `discoveryengineProjectsLocationsDataStoresServingConfigsRecommend` - Makes a recommendation, which requires a contextual user event.
* `discoveryengineProjectsLocationsDataStoresUserEventsCollect` - Writes a single user event from the browser. This uses a GET request to due to browser restriction of POST-ing to a 3rd party domain. This method is used only by the Discovery Engine API JavaScript pixel and Google Tag Manager. Users should not call this method directly.
* `discoveryengineProjectsLocationsDataStoresUserEventsImport` - Bulk import of User events. Request processing might be synchronous. Events that already exist are skipped. Use this method for backfilling historical user events. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully inserted. Operation.metadata is of type ImportMetadata.
* `discoveryengineProjectsLocationsDataStoresUserEventsWrite` - Writes a single user event.
* `discoveryengineProjectsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `discoveryengineProjectsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
