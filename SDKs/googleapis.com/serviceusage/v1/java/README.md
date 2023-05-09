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
import org.openapis.openapi.models.operations.ServiceusageOperationsCancelRequest;
import org.openapis.openapi.models.operations.ServiceusageOperationsCancelResponse;
import org.openapis.openapi.models.operations.ServiceusageOperationsCancelSecurity;
import org.openapis.openapi.models.operations.ServiceusageOperationsCancelSecurityOption1;
import org.openapis.openapi.models.operations.ServiceusageOperationsCancelSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServiceusageOperationsCancelRequest req = new ServiceusageOperationsCancelRequest("corrupti") {{
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

            ServiceusageOperationsCancelResponse res = sdk.operations.serviceusageOperationsCancel(req, new ServiceusageOperationsCancelSecurity() {{
                option1 = new ServiceusageOperationsCancelSecurityOption1("suscipit", "molestiae") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.empty != null) {
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


### [operations](docs/operations/README.md)

* [serviceusageOperationsCancel](docs/operations/README.md#serviceusageoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [serviceusageOperationsDelete](docs/operations/README.md#serviceusageoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [serviceusageOperationsList](docs/operations/README.md#serviceusageoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### [services](docs/services/README.md)

* [serviceusageServicesBatchEnable](docs/services/README.md#serviceusageservicesbatchenable) - Enable multiple services on a project. The operation is atomic: if enabling any service fails, then the entire batch fails, and no state changes occur. To enable a single service, use the `EnableService` method instead.
* [serviceusageServicesBatchGet](docs/services/README.md#serviceusageservicesbatchget) - Returns the service configurations and enabled states for a given list of services.
* [serviceusageServicesDisable](docs/services/README.md#serviceusageservicesdisable) - Disable a service so that it can no longer be used with a project. This prevents unintended usage that may cause unexpected billing charges or security leaks. It is not valid to call the disable method on a service that is not currently enabled. Callers will receive a `FAILED_PRECONDITION` status if the target service is not currently enabled.
* [serviceusageServicesEnable](docs/services/README.md#serviceusageservicesenable) - Enable a service so that it can be used with a project.
* [serviceusageServicesGet](docs/services/README.md#serviceusageservicesget) - Returns the service configuration and enabled state for a given service.
* [serviceusageServicesList](docs/services/README.md#serviceusageserviceslist) - List all services available to the specified project, and the current state of those services with respect to the project. The list includes all public services, all services for which the calling user has the `servicemanagement.services.bind` permission, and all services that have already been enabled on the project. The list can be filtered to only include services in a specific state, for example to only include services enabled on the project. WARNING: If you need to query enabled services frequently or across an organization, you should use [Cloud Asset Inventory API](https://cloud.google.com/asset-inventory/docs/apis), which provides higher throughput and richer filtering capability.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
