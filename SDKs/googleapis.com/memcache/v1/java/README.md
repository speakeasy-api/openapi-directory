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

import org.openapis.openapi.models.operations.MemcacheProjectsLocationsInstancesApplyParametersSecurity;
import org.openapis.openapi.models.operations.MemcacheProjectsLocationsInstancesApplyParametersPathParams;
import org.openapis.openapi.models.operations.MemcacheProjectsLocationsInstancesApplyParametersQueryParams;
import org.openapis.openapi.models.operations.MemcacheProjectsLocationsInstancesApplyParametersRequest;
import org.openapis.openapi.models.operations.MemcacheProjectsLocationsInstancesApplyParametersResponse;
import org.openapis.openapi.models.shared.ApplyParametersRequest;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MemcacheProjectsLocationsInstancesApplyParametersRequest req = new MemcacheProjectsLocationsInstancesApplyParametersRequest() {{
                security = new MemcacheProjectsLocationsInstancesApplyParametersSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new MemcacheProjectsLocationsInstancesApplyParametersPathParams() {{
                    name = "corrupti";
                }};
                queryParams = new MemcacheProjectsLocationsInstancesApplyParametersQueryParams() {{
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
                request = new ApplyParametersRequest() {{
                    applyAll = false;
                    nodeIds = new String[]{{
                        add("iure"),
                        add("magnam"),
                    }};
                }};
            }};            

            MemcacheProjectsLocationsInstancesApplyParametersResponse res = sdk.projects.memcacheProjectsLocationsInstancesApplyParameters(req);

            if (res.operation.isPresent()) {
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

* `memcacheProjectsLocationsInstancesApplyParameters` - `ApplyParameters` restarts the set of specified nodes in order to update them to the current set of parameters for the Memcached Instance.
* `memcacheProjectsLocationsInstancesCreate` - Creates a new Instance in a given location.
* `memcacheProjectsLocationsInstancesList` - Lists Instances in a given location.
* `memcacheProjectsLocationsInstancesPatch` - Updates an existing Instance in a given project and location.
* `memcacheProjectsLocationsInstancesRescheduleMaintenance` - Reschedules upcoming maintenance event.
* `memcacheProjectsLocationsInstancesUpdateParameters` - Updates the defined Memcached parameters for an existing instance. This method only stages the parameters, it must be followed by `ApplyParameters` to apply the parameters to nodes of the Memcached instance.
* `memcacheProjectsLocationsList` - Lists information about the supported locations for this service.
* `memcacheProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `memcacheProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `memcacheProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `memcacheProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
