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

            ApigatewayProjectsLocationsApisConfigsCreateRequest req = new ApigatewayProjectsLocationsApisConfigsCreateRequest() {{
                security = new ApigatewayProjectsLocationsApisConfigsCreateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new ApigatewayProjectsLocationsApisConfigsCreatePathParams() {{
                    parent = "inventore";
                }};
                queryParams = new ApigatewayProjectsLocationsApisConfigsCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "autem";
                    alt = "proto";
                    apiConfigId = "facilis";
                    callback = "aut";
                    fields = "est";
                    key = "voluptatem";
                    oauthToken = "magnam";
                    prettyPrint = true;
                    quotaUser = "quos";
                    uploadType = "aspernatur";
                    uploadProtocol = "veniam";
                }};
                request = new ApigatewayApiConfigInput() {{
                    displayName = "minima";
                    gatewayServiceAccount = "harum";
                    grpcServices = new openapisdk.models.shared.ApigatewayApiConfigGrpcServiceDefinition[]() {{
                        add(new ApigatewayApiConfigGrpcServiceDefinition() {{
                            fileDescriptorSet = new ApigatewayApiConfigFile() {{
                                contents = "alias";
                                path = "aliquam";
                            }};
                            source = new openapisdk.models.shared.ApigatewayApiConfigFile[]() {{
                                add(new ApigatewayApiConfigFile() {{
                                    contents = "cumque";
                                    path = "ea";
                                }}),
                                add(new ApigatewayApiConfigFile() {{
                                    contents = "earum";
                                    path = "quisquam";
                                }}),
                            }};
                        }}),
                        add(new ApigatewayApiConfigGrpcServiceDefinition() {{
                            fileDescriptorSet = new ApigatewayApiConfigFile() {{
                                contents = "explicabo";
                                path = "id";
                            }};
                            source = new openapisdk.models.shared.ApigatewayApiConfigFile[]() {{
                                add(new ApigatewayApiConfigFile() {{
                                    contents = "esse";
                                    path = "dolores";
                                }}),
                                add(new ApigatewayApiConfigFile() {{
                                    contents = "cum";
                                    path = "consequuntur";
                                }}),
                            }};
                        }}),
                        add(new ApigatewayApiConfigGrpcServiceDefinition() {{
                            fileDescriptorSet = new ApigatewayApiConfigFile() {{
                                contents = "vero";
                                path = "quia";
                            }};
                            source = new openapisdk.models.shared.ApigatewayApiConfigFile[]() {{
                                add(new ApigatewayApiConfigFile() {{
                                    contents = "sed";
                                    path = "maxime";
                                }}),
                                add(new ApigatewayApiConfigFile() {{
                                    contents = "expedita";
                                    path = "consequatur";
                                }}),
                                add(new ApigatewayApiConfigFile() {{
                                    contents = "excepturi";
                                    path = "ut";
                                }}),
                            }};
                        }}),
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("sit", "aliquid");
                    }};
                    managedServiceConfigs = new openapisdk.models.shared.ApigatewayApiConfigFile[]() {{
                        add(new ApigatewayApiConfigFile() {{
                            contents = "itaque";
                            path = "fuga";
                        }}),
                        add(new ApigatewayApiConfigFile() {{
                            contents = "soluta";
                            path = "accusantium";
                        }}),
                        add(new ApigatewayApiConfigFile() {{
                            contents = "vel";
                            path = "iusto";
                        }}),
                    }};
                    openapiDocuments = new openapisdk.models.shared.ApigatewayApiConfigOpenApiDocument[]() {{
                        add(new ApigatewayApiConfigOpenApiDocument() {{
                            document = new ApigatewayApiConfigFile() {{
                                contents = "illo";
                                path = "exercitationem";
                            }};
                        }}),
                    }};
                }};
            }};

            ApigatewayProjectsLocationsApisConfigsCreateResponse res = sdk.projects.apigatewayProjectsLocationsApisConfigsCreate(req);

            if (res.apigatewayOperation.isPresent()) {
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

* `apigatewayProjectsLocationsApisConfigsCreate` - Creates a new ApiConfig in a given project and location.
* `apigatewayProjectsLocationsApisConfigsList` - Lists ApiConfigs in a given project and location.
* `apigatewayProjectsLocationsApisCreate` - Creates a new Api in a given project and location.
* `apigatewayProjectsLocationsApisList` - Lists Apis in a given project and location.
* `apigatewayProjectsLocationsGatewaysCreate` - Creates a new Gateway in a given project and location.
* `apigatewayProjectsLocationsGatewaysGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `apigatewayProjectsLocationsGatewaysList` - Lists Gateways in a given project and location.
* `apigatewayProjectsLocationsGatewaysPatch` - Updates the parameters of a single Gateway.
* `apigatewayProjectsLocationsGatewaysSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `apigatewayProjectsLocationsGatewaysTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `apigatewayProjectsLocationsList` - Lists information about the supported locations for this service.
* `apigatewayProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `apigatewayProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `apigatewayProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `apigatewayProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
