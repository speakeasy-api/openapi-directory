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
import org.openapis.openapi.models.operations.EventarcProjectsLocationsListRequest;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsListResponse;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EventarcProjectsLocationsListRequest req = new EventarcProjectsLocationsListRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "distinctio";
                alt = AltEnum.PROTO;
                callback = "unde";
                fields = "nulla";
                filter = "corrupti";
                key = "illum";
                oauthToken = "vel";
                pageSize = 623564L;
                pageToken = "deserunt";
                prettyPrint = false;
                quotaUser = "suscipit";
                uploadType = "iure";
                uploadProtocol = "magnam";
            }};            

            EventarcProjectsLocationsListResponse res = sdk.projects.eventarcProjectsLocationsList(req, new EventarcProjectsLocationsListSecurity("debitis", "ipsa") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listLocationsResponse != null) {
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

* [eventarcProjectsLocationsList](docs/projects/README.md#eventarcprojectslocationslist) - Lists information about the supported locations for this service.
* [eventarcProjectsLocationsOperationsCancel](docs/projects/README.md#eventarcprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [eventarcProjectsLocationsOperationsList](docs/projects/README.md#eventarcprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [eventarcProjectsLocationsTriggersCreate](docs/projects/README.md#eventarcprojectslocationstriggerscreate) - Create a new trigger in a particular project and location.
* [eventarcProjectsLocationsTriggersDelete](docs/projects/README.md#eventarcprojectslocationstriggersdelete) - Delete a single trigger.
* [eventarcProjectsLocationsTriggersGet](docs/projects/README.md#eventarcprojectslocationstriggersget) - Get a single trigger.
* [eventarcProjectsLocationsTriggersGetIamPolicy](docs/projects/README.md#eventarcprojectslocationstriggersgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [eventarcProjectsLocationsTriggersList](docs/projects/README.md#eventarcprojectslocationstriggerslist) - List triggers.
* [eventarcProjectsLocationsTriggersPatch](docs/projects/README.md#eventarcprojectslocationstriggerspatch) - Update a single trigger.
* [eventarcProjectsLocationsTriggersSetIamPolicy](docs/projects/README.md#eventarcprojectslocationstriggerssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [eventarcProjectsLocationsTriggersTestIamPermissions](docs/projects/README.md#eventarcprojectslocationstriggerstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
