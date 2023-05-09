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
import org.openapis.openapi.models.operations.WorkstationsProjectsLocationsOperationsCancelRequest;
import org.openapis.openapi.models.operations.WorkstationsProjectsLocationsOperationsCancelResponse;
import org.openapis.openapi.models.operations.WorkstationsProjectsLocationsOperationsCancelSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WorkstationsProjectsLocationsOperationsCancelRequest req = new WorkstationsProjectsLocationsOperationsCancelRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("quibusdam", "unde");
                    put("nulla", "corrupti");
                    put("illum", "vel");
                }};
                accessToken = "error";
                alt = AltEnum.MEDIA;
                callback = "suscipit";
                fields = "iure";
                key = "magnam";
                oauthToken = "debitis";
                prettyPrint = false;
                quotaUser = "ipsa";
                uploadType = "delectus";
                uploadProtocol = "tempora";
            }};            

            WorkstationsProjectsLocationsOperationsCancelResponse res = sdk.projects.workstationsProjectsLocationsOperationsCancel(req, new WorkstationsProjectsLocationsOperationsCancelSecurity("suscipit", "molestiae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleProtobufEmpty != null) {
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

* [workstationsProjectsLocationsOperationsCancel](docs/projects/README.md#workstationsprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [workstationsProjectsLocationsOperationsList](docs/projects/README.md#workstationsprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [workstationsProjectsLocationsWorkstationClustersCreate](docs/projects/README.md#workstationsprojectslocationsworkstationclusterscreate) - Creates a new workstation cluster.
* [workstationsProjectsLocationsWorkstationClustersList](docs/projects/README.md#workstationsprojectslocationsworkstationclusterslist) - Returns all workstation clusters in the specified location.
* [workstationsProjectsLocationsWorkstationClustersWorkstationConfigsCreate](docs/projects/README.md#workstationsprojectslocationsworkstationclustersworkstationconfigscreate) - Creates a new workstation configuration.
* [workstationsProjectsLocationsWorkstationClustersWorkstationConfigsList](docs/projects/README.md#workstationsprojectslocationsworkstationclustersworkstationconfigslist) - Returns all workstation configurations in the specified cluster.
* [workstationsProjectsLocationsWorkstationClustersWorkstationConfigsListUsable](docs/projects/README.md#workstationsprojectslocationsworkstationclustersworkstationconfigslistusable) - Returns all workstation configurations in the specified cluster on which the caller has the "workstations.workstation.create" permission.
* [workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsCreate](docs/projects/README.md#workstationsprojectslocationsworkstationclustersworkstationconfigsworkstationscreate) - Creates a new workstation.
* [workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsDelete](docs/projects/README.md#workstationsprojectslocationsworkstationclustersworkstationconfigsworkstationsdelete) - Deletes the specified workstation.
* [workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGenerateAccessToken](docs/projects/README.md#workstationsprojectslocationsworkstationclustersworkstationconfigsworkstationsgenerateaccesstoken) - Returns a short-lived credential that can be used to send authenticated and authorized traffic to a workstation.
* [workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGet](docs/projects/README.md#workstationsprojectslocationsworkstationclustersworkstationconfigsworkstationsget) - Returns the requested workstation.
* [workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGetIamPolicy](docs/projects/README.md#workstationsprojectslocationsworkstationclustersworkstationconfigsworkstationsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsList](docs/projects/README.md#workstationsprojectslocationsworkstationclustersworkstationconfigsworkstationslist) - Returns all Workstations using the specified workstation configuration.
* [workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsListUsable](docs/projects/README.md#workstationsprojectslocationsworkstationclustersworkstationconfigsworkstationslistusable) - Returns all workstations using the specified workstation configuration on which the caller has the "workstations.workstations.use" permission.
* [workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsPatch](docs/projects/README.md#workstationsprojectslocationsworkstationclustersworkstationconfigsworkstationspatch) - Updates an existing workstation.
* [workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsSetIamPolicy](docs/projects/README.md#workstationsprojectslocationsworkstationclustersworkstationconfigsworkstationssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsStart](docs/projects/README.md#workstationsprojectslocationsworkstationclustersworkstationconfigsworkstationsstart) - Starts running a workstation so that users can connect to it.
* [workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsStop](docs/projects/README.md#workstationsprojectslocationsworkstationclustersworkstationconfigsworkstationsstop) - Stops running a workstation, reducing costs.
* [workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsTestIamPermissions](docs/projects/README.md#workstationsprojectslocationsworkstationclustersworkstationconfigsworkstationstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
