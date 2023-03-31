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

import org.openapis.openapi.models.operations.DatalineageProjectsLocationsBatchSearchLinkProcessesSecurity;
import org.openapis.openapi.models.operations.DatalineageProjectsLocationsBatchSearchLinkProcessesPathParams;
import org.openapis.openapi.models.operations.DatalineageProjectsLocationsBatchSearchLinkProcessesQueryParams;
import org.openapis.openapi.models.operations.DatalineageProjectsLocationsBatchSearchLinkProcessesRequest;
import org.openapis.openapi.models.operations.DatalineageProjectsLocationsBatchSearchLinkProcessesResponse;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesRequest;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatalineageProjectsLocationsBatchSearchLinkProcessesRequest req = new DatalineageProjectsLocationsBatchSearchLinkProcessesRequest() {{
                security = new DatalineageProjectsLocationsBatchSearchLinkProcessesSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new DatalineageProjectsLocationsBatchSearchLinkProcessesPathParams() {{
                    parent = "corrupti";
                }};
                queryParams = new DatalineageProjectsLocationsBatchSearchLinkProcessesQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
                }};
                request = new GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesRequest() {{
                    links = new String[]{{
                        add("iure"),
                        add("magnam"),
                    }};
                    pageSize = 891773;
                    pageToken = "ipsa";
                }};
            }};            

            DatalineageProjectsLocationsBatchSearchLinkProcessesResponse res = sdk.projects.datalineageProjectsLocationsBatchSearchLinkProcesses(req);

            if (res.googleCloudDatacatalogLineageV1BatchSearchLinkProcessesResponse.isPresent()) {
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

* `datalineageProjectsLocationsBatchSearchLinkProcesses` - Retrieve information about LineageProcesses associated with specific links. LineageProcesses are transformation pipelines that result in data flowing from **source** to **target** assets. Links between assets represent this operation. If you have specific link names, you can use this method to verify which LineageProcesses contribute to creating those links. See the SearchLinks method for more information on how to retrieve link name. You can retrieve the LineageProcess information in every project where you have the `datalineage.events.get` permission. The project provided in the URL is used for Billing and Quota.
* `datalineageProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `datalineageProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* `datalineageProjectsLocationsProcessesCreate` - Creates a new process.
* `datalineageProjectsLocationsProcessesList` - List processes in the given project and location. List order is descending by insertion time.
* `datalineageProjectsLocationsProcessesRunsCreate` - Creates a new run.
* `datalineageProjectsLocationsProcessesRunsLineageEventsCreate` - Creates a new lineage event.
* `datalineageProjectsLocationsProcessesRunsLineageEventsDelete` - Deletes the lineage event with the specified name.
* `datalineageProjectsLocationsProcessesRunsLineageEventsGet` - Gets details of a specified lineage event.
* `datalineageProjectsLocationsProcessesRunsLineageEventsList` - Lists lineage events in the given project and location. The list order is not defined.
* `datalineageProjectsLocationsProcessesRunsList` - Lists runs in the given project and location. List order is descending by `start_time`.
* `datalineageProjectsLocationsProcessesRunsPatch` - Updates a run.
* `datalineageProjectsLocationsSearchLinks` - Retrieve a list of links connected to a specific asset. Links represent the data flow between **source** (upstream) and **target** (downstream) assets in transformation pipelines. Links are stored in the same project as the Lineage Events that create them. You can retrieve links in every project where you have the `datalineage.events.get` permission. The project provided in the URL is used for Billing and Quota.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
