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

import org.openapis.openapi.models.operations.WorkstationsProjectsLocationsOperationsCancelSecurity;
import org.openapis.openapi.models.operations.WorkstationsProjectsLocationsOperationsCancelPathParams;
import org.openapis.openapi.models.operations.WorkstationsProjectsLocationsOperationsCancelQueryParams;
import org.openapis.openapi.models.operations.WorkstationsProjectsLocationsOperationsCancelRequest;
import org.openapis.openapi.models.operations.WorkstationsProjectsLocationsOperationsCancelResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WorkstationsProjectsLocationsOperationsCancelRequest req = new WorkstationsProjectsLocationsOperationsCancelRequest() {{
                security = new WorkstationsProjectsLocationsOperationsCancelSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new WorkstationsProjectsLocationsOperationsCancelPathParams() {{
                    name = "corrupti";
                }};
                queryParams = new WorkstationsProjectsLocationsOperationsCancelQueryParams() {{
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
                request = new java.util.HashMap<String, Object>() {{
                    put("iure", "magnam");
                    put("debitis", "ipsa");
                }};
            }};            

            WorkstationsProjectsLocationsOperationsCancelResponse res = sdk.projects.workstationsProjectsLocationsOperationsCancel(req);

            if (res.googleProtobufEmpty.isPresent()) {
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

* `workstationsProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `workstationsProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* `workstationsProjectsLocationsWorkstationClustersCreate` - Creates a new workstation cluster.
* `workstationsProjectsLocationsWorkstationClustersList` - Returns all workstation clusters in the specified location.
* `workstationsProjectsLocationsWorkstationClustersWorkstationConfigsCreate` - Creates a new workstation configuration.
* `workstationsProjectsLocationsWorkstationClustersWorkstationConfigsList` - Returns all workstation configurations in the specified cluster.
* `workstationsProjectsLocationsWorkstationClustersWorkstationConfigsListUsable` - Returns all workstation configurations in the specified cluster on which the caller has the "workstations.workstation.create" permission.
* `workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsCreate` - Creates a new workstation.
* `workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsDelete` - Deletes the specified workstation.
* `workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGenerateAccessToken` - Returns a short-lived credential that can be used to send authenticated and authorized traffic to a workstation.
* `workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGet` - Returns the requested workstation.
* `workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsList` - Returns all Workstations using the specified config.
* `workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsListUsable` - Returns all Workstations using the specified config on which the caller has the "workstations.workstations.use" permission.
* `workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsPatch` - Updates an existing workstation.
* `workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsStart` - Starts running a workstation so that users can connect to it.
* `workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsStop` - Stops running a workstation, reducing costs.
* `workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
