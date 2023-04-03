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

import org.openapis.openapi.models.operations.DataplexProjectsLocationsDataAttributeBindingsCreateSecurity;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsDataAttributeBindingsCreateRequest;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsDataAttributeBindingsCreateResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1DataAttributeBindingInput;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1DataAttributeBindingPath;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataplexProjectsLocationsDataAttributeBindingsCreateRequest req = new DataplexProjectsLocationsDataAttributeBindingsCreateRequest() {{
                dollarXgafv = "2";
                googleCloudDataplexV1DataAttributeBindingInput = new GoogleCloudDataplexV1DataAttributeBindingInput() {{
                    attributes = new String[]{{
                        add("distinctio"),
                        add("quibusdam"),
                        add("unde"),
                    }};
                    description = "nulla";
                    displayName = "corrupti";
                    etag = "illum";
                    labels = new java.util.HashMap<String, String>() {{
                        put("error", "deserunt");
                        put("suscipit", "iure");
                    }};
                    paths = new org.openapis.openapi.models.shared.GoogleCloudDataplexV1DataAttributeBindingPath[]{{
                        add(new GoogleCloudDataplexV1DataAttributeBindingPath() {{
                            attributes = new String[]{{
                                add("ipsa"),
                                add("delectus"),
                                add("tempora"),
                                add("suscipit"),
                            }};
                            name = "molestiae";
                        }}),
                        add(new GoogleCloudDataplexV1DataAttributeBindingPath() {{
                            attributes = new String[]{{
                                add("placeat"),
                                add("voluptatum"),
                                add("iusto"),
                                add("excepturi"),
                            }};
                            name = "nisi";
                        }}),
                    }};
                    resource = "recusandae";
                }};
                accessToken = "temporibus";
                alt = "json";
                callback = "quis";
                dataAttributeBindingId = "veritatis";
                fields = "deserunt";
                key = "perferendis";
                oauthToken = "ipsam";
                parent = "repellendus";
                prettyPrint = false;
                quotaUser = "sapiente";
                uploadType = "quo";
                uploadProtocol = "odit";
                validateOnly = false;
            }}            

            DataplexProjectsLocationsDataAttributeBindingsCreateResponse res = sdk.projects.dataplexProjectsLocationsDataAttributeBindingsCreate(req, new DataplexProjectsLocationsDataAttributeBindingsCreateSecurity() {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation.isPresent()) {
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

* `dataplexProjectsLocationsDataAttributeBindingsCreate` - Create a DataAttributeBinding resource.
* `dataplexProjectsLocationsDataAttributeBindingsList` - Lists DataAttributeBinding resources in a project and location.
* `dataplexProjectsLocationsDataScansCreate` - Creates a DataScan resource.
* `dataplexProjectsLocationsDataScansList` - Lists DataScans.
* `dataplexProjectsLocationsDataTaxonomiesAttributesCreate` - Create a DataAttribute resource.
* `dataplexProjectsLocationsDataTaxonomiesAttributesList` - Lists Data Attribute resources in a DataTaxonomy.
* `dataplexProjectsLocationsDataTaxonomiesCreate` - Create a DataTaxonomy resource.
* `dataplexProjectsLocationsDataTaxonomiesList` - Lists DataTaxonomy resources in a project and location.
* `dataplexProjectsLocationsLakesContentCreate` - Create a content.
* `dataplexProjectsLocationsLakesContentList` - List content.
* `dataplexProjectsLocationsLakesContentitemsCreate` - Create a content.
* `dataplexProjectsLocationsLakesContentitemsList` - List content.
* `dataplexProjectsLocationsLakesCreate` - Creates a lake resource.
* `dataplexProjectsLocationsLakesEnvironmentsCreate` - Create an environment resource.
* `dataplexProjectsLocationsLakesEnvironmentsList` - Lists environments under the given lake.
* `dataplexProjectsLocationsLakesEnvironmentsSessionsList` - Lists session resources in an environment.
* `dataplexProjectsLocationsLakesList` - Lists lake resources in a project and location.
* `dataplexProjectsLocationsLakesTasksCreate` - Creates a task resource within a lake.
* `dataplexProjectsLocationsLakesTasksJobsList` - Lists Jobs under the given task.
* `dataplexProjectsLocationsLakesTasksList` - Lists tasks under the given lake.
* `dataplexProjectsLocationsLakesTasksRun` - Run an on demand execution of a Task.
* `dataplexProjectsLocationsLakesZonesAssetsActionsList` - Lists action resources in an asset.
* `dataplexProjectsLocationsLakesZonesAssetsCreate` - Creates an asset resource.
* `dataplexProjectsLocationsLakesZonesAssetsGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `dataplexProjectsLocationsLakesZonesAssetsList` - Lists asset resources in a zone.
* `dataplexProjectsLocationsLakesZonesAssetsPatch` - Updates an asset resource.
* `dataplexProjectsLocationsLakesZonesAssetsSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
* `dataplexProjectsLocationsLakesZonesAssetsTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `dataplexProjectsLocationsLakesZonesCreate` - Creates a zone resource within a lake.
* `dataplexProjectsLocationsLakesZonesEntitiesCreate` - Create a metadata entity.
* `dataplexProjectsLocationsLakesZonesEntitiesList` - List metadata entities in a zone.
* `dataplexProjectsLocationsLakesZonesEntitiesPartitionsCreate` - Create a metadata partition.
* `dataplexProjectsLocationsLakesZonesEntitiesPartitionsList` - List metadata partitions of an entity.
* `dataplexProjectsLocationsLakesZonesEntitiesUpdate` - Update a metadata entity. Only supports full resource update.
* `dataplexProjectsLocationsLakesZonesList` - Lists zone resources in a lake.
* `dataplexProjectsLocationsList` - Lists information about the supported locations for this service.
* `dataplexProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.
* `dataplexProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED.
* `dataplexProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `dataplexProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
