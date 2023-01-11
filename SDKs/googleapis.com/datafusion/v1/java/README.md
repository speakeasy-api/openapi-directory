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
                    parent = "quis";
                }};
                queryParams = new DatafusionProjectsLocationsInstancesCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "debitis";
                    alt = "json";
                    callback = "veniam";
                    fields = "quae";
                    instanceId = "nisi";
                    key = "voluptatem";
                    oauthToken = "in";
                    prettyPrint = true;
                    quotaUser = "est";
                    uploadType = "vero";
                    uploadProtocol = "autem";
                }};
                request = new InstanceInput() {{
                    accelerators = new openapisdk.models.shared.Accelerator[]() {{
                        add(new Accelerator() {{
                            acceleratorType = "ACCELERATOR_TYPE_UNSPECIFIED";
                            state = "UNKNOWN";
                        }}),
                        add(new Accelerator() {{
                            acceleratorType = "CCAI_INSIGHTS";
                            state = "ENABLED";
                        }}),
                        add(new Accelerator() {{
                            acceleratorType = "CDC";
                            state = "ENABLED";
                        }}),
                    }};
                    availableVersion = new openapisdk.models.shared.Version[]() {{
                        add(new Version() {{
                            availableFeatures = new String[]() {{
                                add("quam"),
                                add("ipsa"),
                                add("delectus"),
                            }};
                            defaultVersion = true;
                            type = "TYPE_GENERAL_AVAILABILITY";
                            versionNumber = "eum";
                        }}),
                        add(new Version() {{
                            availableFeatures = new String[]() {{
                                add("nihil"),
                                add("est"),
                            }};
                            defaultVersion = true;
                            type = "TYPE_GENERAL_AVAILABILITY";
                            versionNumber = "eaque";
                        }}),
                        add(new Version() {{
                            availableFeatures = new String[]() {{
                                add("corporis"),
                                add("exercitationem"),
                            }};
                            defaultVersion = false;
                            type = "TYPE_UNSPECIFIED";
                            versionNumber = "ut";
                        }}),
                    }};
                    cryptoKeyConfig = new CryptoKeyConfig() {{
                        keyReference = "quisquam";
                    }};
                    dataprocServiceAccount = "eaque";
                    description = "nemo";
                    displayName = "corrupti";
                    enableRbac = false;
                    enableStackdriverLogging = false;
                    enableStackdriverMonitoring = true;
                    eventPublishConfig = new EventPublishConfig() {{
                        enabled = false;
                        topic = "assumenda";
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("et", "atque");
                        put("vero", "molestiae");
                        put("aliquam", "consequatur");
                    }};
                    networkConfig = new NetworkConfig() {{
                        ipAllocation = "dolor";
                        network = "placeat";
                    }};
                    options = new java.util.HashMap<String, String>() {{
                        put("temporibus", "odio");
                        put("quo", "enim");
                    }};
                    privateInstance = false;
                    type = "BASIC";
                    version = "atque";
                    zone = "suscipit";
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
* `datafusionProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `datafusionProjectsLocationsVersionsList` - Lists possible versions for Data Fusion instances in the specified project and location.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
