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

import org.openapis.openapi.models.operations.DatafusionProjectsLocationsInstancesCreateSecurity;
import org.openapis.openapi.models.operations.DatafusionProjectsLocationsInstancesCreatePathParams;
import org.openapis.openapi.models.operations.DatafusionProjectsLocationsInstancesCreateQueryParams;
import org.openapis.openapi.models.operations.DatafusionProjectsLocationsInstancesCreateRequest;
import org.openapis.openapi.models.operations.DatafusionProjectsLocationsInstancesCreateResponse;
import org.openapis.openapi.models.shared.InstanceTypeEnum;
import org.openapis.openapi.models.shared.InstanceInput;
import org.openapis.openapi.models.shared.NetworkConfig;
import org.openapis.openapi.models.shared.EventPublishConfig;
import org.openapis.openapi.models.shared.CryptoKeyConfig;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatafusionProjectsLocationsInstancesCreateRequest req = new DatafusionProjectsLocationsInstancesCreateRequest() {{
                security = new DatafusionProjectsLocationsInstancesCreateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new DatafusionProjectsLocationsInstancesCreatePathParams() {{
                    parent = "corrupti";
                }};
                queryParams = new DatafusionProjectsLocationsInstancesCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    instanceId = "corrupti";
                    key = "illum";
                    oauthToken = "vel";
                    prettyPrint = false;
                    quotaUser = "error";
                    uploadType = "deserunt";
                    uploadProtocol = "suscipit";
                }};
                request = new InstanceInput() {{
                    cryptoKeyConfig = new CryptoKeyConfig() {{
                        keyReference = "iure";
                    }};
                    dataprocServiceAccount = "magnam";
                    description = "debitis";
                    displayName = "ipsa";
                    enableRbac = false;
                    enableStackdriverLogging = false;
                    enableStackdriverMonitoring = false;
                    enableZoneSeparation = false;
                    eventPublishConfig = new EventPublishConfig() {{
                        enabled = false;
                        topic = "delectus";
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("suscipit", "molestiae");
                        put("minus", "placeat");
                    }};
                    networkConfig = new NetworkConfig() {{
                        ipAllocation = "voluptatum";
                        network = "iusto";
                    }};
                    options = new java.util.HashMap<String, String>() {{
                        put("nisi", "recusandae");
                        put("temporibus", "ab");
                        put("quis", "veritatis");
                    }};
                    privateInstance = false;
                    type = "ENTERPRISE";
                    version = "perferendis";
                    zone = "ipsam";
                }};
            }};            

            DatafusionProjectsLocationsInstancesCreateResponse res = sdk.projects.datafusionProjectsLocationsInstancesCreate(req);

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

* `datafusionProjectsLocationsInstancesCreate` - Creates a new Data Fusion instance in the specified project and location.
* `datafusionProjectsLocationsInstancesDnsPeeringsCreate` - Creates DNS peering on the given resource.
* `datafusionProjectsLocationsInstancesDnsPeeringsList` - Lists DNS peerings for a given resource.
* `datafusionProjectsLocationsInstancesGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `datafusionProjectsLocationsInstancesList` - Lists Data Fusion instances in the specified project and location.
* `datafusionProjectsLocationsInstancesPatch` - Updates a single Data Fusion instance.
* `datafusionProjectsLocationsInstancesRestart` - Restart a single Data Fusion instance. At the end of an operation instance is fully restarted.
* `datafusionProjectsLocationsInstancesSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `datafusionProjectsLocationsInstancesTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `datafusionProjectsLocationsList` - Lists information about the supported locations for this service.
* `datafusionProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `datafusionProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `datafusionProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `datafusionProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* `datafusionProjectsLocationsVersionsList` - Lists possible versions for Data Fusion instances in the specified project and location.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
