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
import org.openapis.openapi.models.operations.DatafusionProjectsLocationsInstancesCreateRequest;
import org.openapis.openapi.models.operations.DatafusionProjectsLocationsInstancesCreateResponse;
import org.openapis.openapi.models.operations.DatafusionProjectsLocationsInstancesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CryptoKeyConfig;
import org.openapis.openapi.models.shared.EventPublishConfig;
import org.openapis.openapi.models.shared.InstanceInput;
import org.openapis.openapi.models.shared.InstanceTypeEnum;
import org.openapis.openapi.models.shared.NetworkConfig;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatafusionProjectsLocationsInstancesCreateRequest req = new DatafusionProjectsLocationsInstancesCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                instanceInput = new InstanceInput() {{
                    cryptoKeyConfig = new CryptoKeyConfig() {{
                        keyReference = "distinctio";
                    }};;
                    dataprocServiceAccount = "quibusdam";
                    description = "unde";
                    displayName = "nulla";
                    enableRbac = false;
                    enableStackdriverLogging = false;
                    enableStackdriverMonitoring = false;
                    enableZoneSeparation = false;
                    eventPublishConfig = new EventPublishConfig() {{
                        enabled = false;
                        topic = "corrupti";
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("vel", "error");
                        put("deserunt", "suscipit");
                        put("iure", "magnam");
                        put("debitis", "ipsa");
                    }};
                    networkConfig = new NetworkConfig() {{
                        ipAllocation = "delectus";
                        network = "tempora";
                    }};;
                    options = new java.util.HashMap<String, String>() {{
                        put("molestiae", "minus");
                        put("placeat", "voluptatum");
                    }};
                    privateInstance = false;
                    type = InstanceTypeEnum.BASIC;
                    version = "excepturi";
                    zone = "nisi";
                }};;
                accessToken = "recusandae";
                alt = AltEnum.PROTO;
                callback = "ab";
                fields = "quis";
                instanceId = "veritatis";
                key = "deserunt";
                oauthToken = "perferendis";
                prettyPrint = false;
                quotaUser = "ipsam";
                uploadType = "repellendus";
                uploadProtocol = "sapiente";
            }};            

            DatafusionProjectsLocationsInstancesCreateResponse res = sdk.projects.datafusionProjectsLocationsInstancesCreate(req, new DatafusionProjectsLocationsInstancesCreateSecurity("quo", "odit") {{
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

* [datafusionProjectsLocationsInstancesCreate](docs/projects/README.md#datafusionprojectslocationsinstancescreate) - Creates a new Data Fusion instance in the specified project and location.
* [datafusionProjectsLocationsInstancesDnsPeeringsCreate](docs/projects/README.md#datafusionprojectslocationsinstancesdnspeeringscreate) - Creates DNS peering on the given resource.
* [datafusionProjectsLocationsInstancesDnsPeeringsList](docs/projects/README.md#datafusionprojectslocationsinstancesdnspeeringslist) - Lists DNS peerings for a given resource.
* [datafusionProjectsLocationsInstancesList](docs/projects/README.md#datafusionprojectslocationsinstanceslist) - Lists Data Fusion instances in the specified project and location.
* [datafusionProjectsLocationsInstancesNamespacesGetIamPolicy](docs/projects/README.md#datafusionprojectslocationsinstancesnamespacesgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [datafusionProjectsLocationsInstancesNamespacesList](docs/projects/README.md#datafusionprojectslocationsinstancesnamespaceslist) - List namespaces in a given instance
* [datafusionProjectsLocationsInstancesNamespacesSetIamPolicy](docs/projects/README.md#datafusionprojectslocationsinstancesnamespacessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [datafusionProjectsLocationsInstancesNamespacesTestIamPermissions](docs/projects/README.md#datafusionprojectslocationsinstancesnamespacestestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [datafusionProjectsLocationsInstancesPatch](docs/projects/README.md#datafusionprojectslocationsinstancespatch) - Updates a single Data Fusion instance.
* [datafusionProjectsLocationsInstancesRestart](docs/projects/README.md#datafusionprojectslocationsinstancesrestart) - Restart a single Data Fusion instance. At the end of an operation instance is fully restarted.
* [datafusionProjectsLocationsInstancesUpgrade](docs/projects/README.md#datafusionprojectslocationsinstancesupgrade) - Upgrade a single Data Fusion instance. At the end of an operation instance is fully upgraded.
* [datafusionProjectsLocationsList](docs/projects/README.md#datafusionprojectslocationslist) - Lists information about the supported locations for this service.
* [datafusionProjectsLocationsOperationsCancel](docs/projects/README.md#datafusionprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [datafusionProjectsLocationsOperationsDelete](docs/projects/README.md#datafusionprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [datafusionProjectsLocationsOperationsGet](docs/projects/README.md#datafusionprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [datafusionProjectsLocationsOperationsList](docs/projects/README.md#datafusionprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [datafusionProjectsLocationsRemoveIamPolicy](docs/projects/README.md#datafusionprojectslocationsremoveiampolicy) - Remove IAM policy that is currently set on the given resource.
* [datafusionProjectsLocationsVersionsList](docs/projects/README.md#datafusionprojectslocationsversionslist) - Lists possible versions for Data Fusion instances in the specified project and location.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
