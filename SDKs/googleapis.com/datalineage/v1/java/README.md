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
import org.openapis.openapi.models.operations.DatalineageProjectsLocationsBatchSearchLinkProcessesRequest;
import org.openapis.openapi.models.operations.DatalineageProjectsLocationsBatchSearchLinkProcessesResponse;
import org.openapis.openapi.models.operations.DatalineageProjectsLocationsBatchSearchLinkProcessesSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatalineageProjectsLocationsBatchSearchLinkProcessesRequest req = new DatalineageProjectsLocationsBatchSearchLinkProcessesRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudDatacatalogLineageV1BatchSearchLinkProcessesRequest = new GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesRequest() {{
                    links = new String[]{{
                        add("quibusdam"),
                        add("unde"),
                        add("nulla"),
                    }};
                    pageSize = 544883;
                    pageToken = "illum";
                }};;
                accessToken = "vel";
                alt = AltEnum.MEDIA;
                callback = "deserunt";
                fields = "suscipit";
                key = "iure";
                oauthToken = "magnam";
                prettyPrint = false;
                quotaUser = "debitis";
                uploadType = "ipsa";
                uploadProtocol = "delectus";
            }};            

            DatalineageProjectsLocationsBatchSearchLinkProcessesResponse res = sdk.projects.datalineageProjectsLocationsBatchSearchLinkProcesses(req, new DatalineageProjectsLocationsBatchSearchLinkProcessesSecurity("tempora", "suscipit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDatacatalogLineageV1BatchSearchLinkProcessesResponse != null) {
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

* [datalineageProjectsLocationsBatchSearchLinkProcesses](docs/projects/README.md#datalineageprojectslocationsbatchsearchlinkprocesses) - Retrieve information about LineageProcesses associated with specific links. LineageProcesses are transformation pipelines that result in data flowing from **source** to **target** assets. Links between assets represent this operation. If you have specific link names, you can use this method to verify which LineageProcesses contribute to creating those links. See the SearchLinks method for more information on how to retrieve link name. You can retrieve the LineageProcess information in every project where you have the `datalineage.events.get` permission. The project provided in the URL is used for Billing and Quota.
* [datalineageProjectsLocationsOperationsCancel](docs/projects/README.md#datalineageprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [datalineageProjectsLocationsOperationsList](docs/projects/README.md#datalineageprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [datalineageProjectsLocationsProcessesCreate](docs/projects/README.md#datalineageprojectslocationsprocessescreate) - Creates a new process.
* [datalineageProjectsLocationsProcessesList](docs/projects/README.md#datalineageprojectslocationsprocesseslist) - List processes in the given project and location. List order is descending by insertion time.
* [datalineageProjectsLocationsProcessesRunsCreate](docs/projects/README.md#datalineageprojectslocationsprocessesrunscreate) - Creates a new run.
* [datalineageProjectsLocationsProcessesRunsLineageEventsCreate](docs/projects/README.md#datalineageprojectslocationsprocessesrunslineageeventscreate) - Creates a new lineage event.
* [datalineageProjectsLocationsProcessesRunsLineageEventsDelete](docs/projects/README.md#datalineageprojectslocationsprocessesrunslineageeventsdelete) - Deletes the lineage event with the specified name.
* [datalineageProjectsLocationsProcessesRunsLineageEventsGet](docs/projects/README.md#datalineageprojectslocationsprocessesrunslineageeventsget) - Gets details of a specified lineage event.
* [datalineageProjectsLocationsProcessesRunsLineageEventsList](docs/projects/README.md#datalineageprojectslocationsprocessesrunslineageeventslist) - Lists lineage events in the given project and location. The list order is not defined.
* [datalineageProjectsLocationsProcessesRunsList](docs/projects/README.md#datalineageprojectslocationsprocessesrunslist) - Lists runs in the given project and location. List order is descending by `start_time`.
* [datalineageProjectsLocationsProcessesRunsPatch](docs/projects/README.md#datalineageprojectslocationsprocessesrunspatch) - Updates a run.
* [datalineageProjectsLocationsSearchLinks](docs/projects/README.md#datalineageprojectslocationssearchlinks) - Retrieve a list of links connected to a specific asset. Links represent the data flow between **source** (upstream) and **target** (downstream) assets in transformation pipelines. Links are stored in the same project as the Lineage Events that create them. You can retrieve links in every project where you have the `datalineage.events.get` permission. The project provided in the URL is used for Billing and Quota.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
