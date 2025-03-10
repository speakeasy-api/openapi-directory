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
import org.openapis.openapi.models.operations.MemcacheProjectsLocationsInstancesApplyParametersRequest;
import org.openapis.openapi.models.operations.MemcacheProjectsLocationsInstancesApplyParametersResponse;
import org.openapis.openapi.models.operations.MemcacheProjectsLocationsInstancesApplyParametersSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ApplyParametersRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MemcacheProjectsLocationsInstancesApplyParametersRequest req = new MemcacheProjectsLocationsInstancesApplyParametersRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                applyParametersRequest = new ApplyParametersRequest() {{
                    applyAll = false;
                    nodeIds = new String[]{{
                        add("quibusdam"),
                        add("unde"),
                        add("nulla"),
                    }};
                }};;
                accessToken = "corrupti";
                alt = AltEnum.PROTO;
                callback = "vel";
                fields = "error";
                key = "deserunt";
                oauthToken = "suscipit";
                prettyPrint = false;
                quotaUser = "iure";
                uploadType = "magnam";
                uploadProtocol = "debitis";
            }};            

            MemcacheProjectsLocationsInstancesApplyParametersResponse res = sdk.projects.memcacheProjectsLocationsInstancesApplyParameters(req, new MemcacheProjectsLocationsInstancesApplyParametersSecurity("ipsa", "delectus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
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

* [memcacheProjectsLocationsInstancesApplyParameters](docs/projects/README.md#memcacheprojectslocationsinstancesapplyparameters) - `ApplyParameters` restarts the set of specified nodes in order to update them to the current set of parameters for the Memcached Instance.
* [memcacheProjectsLocationsInstancesCreate](docs/projects/README.md#memcacheprojectslocationsinstancescreate) - Creates a new Instance in a given location.
* [memcacheProjectsLocationsInstancesList](docs/projects/README.md#memcacheprojectslocationsinstanceslist) - Lists Instances in a given location.
* [memcacheProjectsLocationsInstancesPatch](docs/projects/README.md#memcacheprojectslocationsinstancespatch) - Updates an existing Instance in a given project and location.
* [memcacheProjectsLocationsInstancesRescheduleMaintenance](docs/projects/README.md#memcacheprojectslocationsinstancesreschedulemaintenance) - Reschedules upcoming maintenance event.
* [memcacheProjectsLocationsInstancesUpdateParameters](docs/projects/README.md#memcacheprojectslocationsinstancesupdateparameters) - Updates the defined Memcached parameters for an existing instance. This method only stages the parameters, it must be followed by `ApplyParameters` to apply the parameters to nodes of the Memcached instance.
* [memcacheProjectsLocationsList](docs/projects/README.md#memcacheprojectslocationslist) - Lists information about the supported locations for this service.
* [memcacheProjectsLocationsOperationsCancel](docs/projects/README.md#memcacheprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [memcacheProjectsLocationsOperationsDelete](docs/projects/README.md#memcacheprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [memcacheProjectsLocationsOperationsGet](docs/projects/README.md#memcacheprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [memcacheProjectsLocationsOperationsList](docs/projects/README.md#memcacheprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
