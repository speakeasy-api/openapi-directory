# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

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
                    parent = "sit";
                }};
                queryParams = new DatafusionProjectsLocationsInstancesCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    fields = "dolor";
                    instanceId = "expedita";
                    key = "voluptas";
                    oauthToken = "fugit";
                    prettyPrint = false;
                    quotaUser = "nihil";
                    uploadType = "rerum";
                    uploadProtocol = "dicta";
                }};
                request = new InstanceInput() {{
                    accelerators = new openapisdk.models.shared.Accelerator[]() {{
                        add(new Accelerator() {{
                            acceleratorType = "ACCELERATOR_TYPE_UNSPECIFIED";
                        }}),
                    }};
                    availableVersion = new openapisdk.models.shared.Version[]() {{
                        add(new Version() {{
                            availableFeatures = new String[]() {{
                                add("dolorem"),
                                add("et"),
                                add("voluptate"),
                            }};
                            defaultVersion = true;
                            type = "TYPE_UNSPECIFIED";
                            versionNumber = "totam";
                        }}),
                    }};
                    cryptoKeyConfig = new CryptoKeyConfig() {{
                        keyReference = "dolores";
                    }};
                    dataprocServiceAccount = "illum";
                    description = "debitis";
                    displayName = "vel";
                    enableRbac = false;
                    enableStackdriverLogging = true;
                    enableStackdriverMonitoring = false;
                    eventPublishConfig = new EventPublishConfig() {{
                        enabled = true;
                        topic = "accusantium";
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("commodi", "quis");
                        put("est", "aut");
                        put("odit", "non");
                    }};
                    networkConfig = new NetworkConfig() {{
                        ipAllocation = "voluptas";
                        network = "omnis";
                    }};
                    options = new java.util.HashMap<String, String>() {{
                        put("illo", "sed");
                    }};
                    privateInstance = false;
                    type = "DEVELOPER";
                    version = "consectetur";
                    zone = "nobis";
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
* `datafusionProjectsLocationsInstancesList` - Lists Data Fusion instances in the specified project and location.
* `datafusionProjectsLocationsInstancesNamespacesGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `datafusionProjectsLocationsInstancesNamespacesList` - List namespaces in a given instance
* `datafusionProjectsLocationsInstancesNamespacesSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `datafusionProjectsLocationsInstancesNamespacesTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `datafusionProjectsLocationsInstancesPatch` - Updates a single Data Fusion instance.
* `datafusionProjectsLocationsInstancesRestart` - Restart a single Data Fusion instance. At the end of an operation instance is fully restarted.
* `datafusionProjectsLocationsInstancesUpgrade` - Upgrade a single Data Fusion instance. At the end of an operation instance is fully upgraded.
* `datafusionProjectsLocationsList` - Lists information about the supported locations for this service.
* `datafusionProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `datafusionProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `datafusionProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `datafusionProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `datafusionProjectsLocationsRemoveIamPolicy` - Remove IAM policy that is currently set on the given resource.
* `datafusionProjectsLocationsVersionsList` - Lists possible versions for Data Fusion instances in the specified project and location.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
