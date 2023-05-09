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
import org.openapis.openapi.models.operations.NetworkconnectivityProjectsLocationsGlobalHubsCreateRequest;
import org.openapis.openapi.models.operations.NetworkconnectivityProjectsLocationsGlobalHubsCreateResponse;
import org.openapis.openapi.models.operations.NetworkconnectivityProjectsLocationsGlobalHubsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.HubInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworkconnectivityProjectsLocationsGlobalHubsCreateRequest req = new NetworkconnectivityProjectsLocationsGlobalHubsCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                hubInput = new HubInput() {{
                    createTime = "distinctio";
                    description = "quibusdam";
                    labels = new java.util.HashMap<String, String>() {{
                        put("nulla", "corrupti");
                        put("illum", "vel");
                        put("error", "deserunt");
                    }};
                    name = "Willie Gulgowski DVM";
                    updateTime = "tempora";
                }};;
                accessToken = "suscipit";
                alt = AltEnum.MEDIA;
                callback = "minus";
                fields = "placeat";
                hubId = "voluptatum";
                key = "iusto";
                oauthToken = "excepturi";
                prettyPrint = false;
                quotaUser = "nisi";
                requestId = "recusandae";
                uploadType = "temporibus";
                uploadProtocol = "ab";
            }};            

            NetworkconnectivityProjectsLocationsGlobalHubsCreateResponse res = sdk.projects.networkconnectivityProjectsLocationsGlobalHubsCreate(req, new NetworkconnectivityProjectsLocationsGlobalHubsCreateSecurity("quis", "veritatis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
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

* [networkconnectivityProjectsLocationsGlobalHubsCreate](docs/projects/README.md#networkconnectivityprojectslocationsglobalhubscreate) - Creates a new Network Connectivity Center hub in the specified project.
* [networkconnectivityProjectsLocationsGlobalHubsList](docs/projects/README.md#networkconnectivityprojectslocationsglobalhubslist) - Lists the Network Connectivity Center hubs associated with a given project.
* [networkconnectivityProjectsLocationsInternalRangesCreate](docs/projects/README.md#networkconnectivityprojectslocationsinternalrangescreate) - Creates a new internal range in a given project and location.
* [networkconnectivityProjectsLocationsInternalRangesList](docs/projects/README.md#networkconnectivityprojectslocationsinternalrangeslist) - Lists internal ranges in a given project and location.
* [networkconnectivityProjectsLocationsList](docs/projects/README.md#networkconnectivityprojectslocationslist) - Lists information about the supported locations for this service.
* [networkconnectivityProjectsLocationsOperationsCancel](docs/projects/README.md#networkconnectivityprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [networkconnectivityProjectsLocationsOperationsList](docs/projects/README.md#networkconnectivityprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [networkconnectivityProjectsLocationsSpokesCreate](docs/projects/README.md#networkconnectivityprojectslocationsspokescreate) - Creates a Network Connectivity Center spoke.
* [networkconnectivityProjectsLocationsSpokesDelete](docs/projects/README.md#networkconnectivityprojectslocationsspokesdelete) - Deletes a Network Connectivity Center spoke.
* [networkconnectivityProjectsLocationsSpokesGet](docs/projects/README.md#networkconnectivityprojectslocationsspokesget) - Gets details about a Network Connectivity Center spoke.
* [networkconnectivityProjectsLocationsSpokesGetIamPolicy](docs/projects/README.md#networkconnectivityprojectslocationsspokesgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [networkconnectivityProjectsLocationsSpokesList](docs/projects/README.md#networkconnectivityprojectslocationsspokeslist) - Lists the Network Connectivity Center spokes in a specified project and location.
* [networkconnectivityProjectsLocationsSpokesPatch](docs/projects/README.md#networkconnectivityprojectslocationsspokespatch) - Updates the parameters of a Network Connectivity Center spoke.
* [networkconnectivityProjectsLocationsSpokesSetIamPolicy](docs/projects/README.md#networkconnectivityprojectslocationsspokessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [networkconnectivityProjectsLocationsSpokesTestIamPermissions](docs/projects/README.md#networkconnectivityprojectslocationsspokestestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
