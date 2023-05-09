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
import org.openapis.openapi.models.operations.GkehubProjectsLocationsGlobalMembershipsInitializeHubRequest;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsGlobalMembershipsInitializeHubResponse;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsGlobalMembershipsInitializeHubSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GkehubProjectsLocationsGlobalMembershipsInitializeHubRequest req = new GkehubProjectsLocationsGlobalMembershipsInitializeHubRequest("corrupti") {{
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

            GkehubProjectsLocationsGlobalMembershipsInitializeHubResponse res = sdk.projects.gkehubProjectsLocationsGlobalMembershipsInitializeHub(req, new GkehubProjectsLocationsGlobalMembershipsInitializeHubSecurity("suscipit", "molestiae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.initializeHubResponse != null) {
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

* [gkehubProjectsLocationsGlobalMembershipsInitializeHub](docs/projects/README.md#gkehubprojectslocationsglobalmembershipsinitializehub) - Initializes the Hub in this project, which includes creating the default Hub Service Account and the Hub Workload Identity Pool. Initialization is optional, and happens automatically when the first Membership is created. InitializeHub should be called when the first Membership cannot be registered without these resources. A common example is granting the Hub Service Account access to another project, which requires the account to exist first.
* [gkehubProjectsLocationsList](docs/projects/README.md#gkehubprojectslocationslist) - Lists information about the supported locations for this service.
* [gkehubProjectsLocationsMembershipsCreate](docs/projects/README.md#gkehubprojectslocationsmembershipscreate) - Creates a new Membership. **This is currently only supported for GKE clusters on Google Cloud**. To register other clusters, follow the instructions at https://cloud.google.com/anthos/multicluster-management/connect/registering-a-cluster.
* [gkehubProjectsLocationsMembershipsGenerateConnectManifest](docs/projects/README.md#gkehubprojectslocationsmembershipsgenerateconnectmanifest) - Generates the manifest for deployment of the GKE connect agent. **This method is used internally by Google-provided libraries.** Most clients should not need to call this method directly.
* [gkehubProjectsLocationsMembershipsGetIamPolicy](docs/projects/README.md#gkehubprojectslocationsmembershipsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [gkehubProjectsLocationsMembershipsList](docs/projects/README.md#gkehubprojectslocationsmembershipslist) - Lists Memberships in a given project and location.
* [gkehubProjectsLocationsMembershipsPatch](docs/projects/README.md#gkehubprojectslocationsmembershipspatch) - Updates an existing Membership.
* [gkehubProjectsLocationsMembershipsSetIamPolicy](docs/projects/README.md#gkehubprojectslocationsmembershipssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [gkehubProjectsLocationsMembershipsTestIamPermissions](docs/projects/README.md#gkehubprojectslocationsmembershipstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [gkehubProjectsLocationsOperationsCancel](docs/projects/README.md#gkehubprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [gkehubProjectsLocationsOperationsDelete](docs/projects/README.md#gkehubprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [gkehubProjectsLocationsOperationsGet](docs/projects/README.md#gkehubprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [gkehubProjectsLocationsOperationsList](docs/projects/README.md#gkehubprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
