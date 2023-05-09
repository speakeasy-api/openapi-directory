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
import org.openapis.openapi.models.operations.ApigatewayProjectsLocationsApisConfigsCreateRequest;
import org.openapis.openapi.models.operations.ApigatewayProjectsLocationsApisConfigsCreateResponse;
import org.openapis.openapi.models.operations.ApigatewayProjectsLocationsApisConfigsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ApigatewayApiConfigFile;
import org.openapis.openapi.models.shared.ApigatewayApiConfigGrpcServiceDefinition;
import org.openapis.openapi.models.shared.ApigatewayApiConfigInput;
import org.openapis.openapi.models.shared.ApigatewayApiConfigOpenApiDocument;
import org.openapis.openapi.models.shared.ApigatewayBackendConfig;
import org.openapis.openapi.models.shared.ApigatewayGatewayConfig;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApigatewayProjectsLocationsApisConfigsCreateRequest req = new ApigatewayProjectsLocationsApisConfigsCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                apigatewayApiConfigInput = new ApigatewayApiConfigInput() {{
                    displayName = "distinctio";
                    gatewayConfig = new ApigatewayGatewayConfig() {{
                        backendConfig = new ApigatewayBackendConfig() {{
                            googleServiceAccount = "quibusdam";
                        }};;
                    }};;
                    gatewayServiceAccount = "unde";
                    grpcServices = new org.openapis.openapi.models.shared.ApigatewayApiConfigGrpcServiceDefinition[]{{
                        add(new ApigatewayApiConfigGrpcServiceDefinition() {{
                            fileDescriptorSet = new ApigatewayApiConfigFile() {{
                                contents = "corrupti";
                                path = "illum";
                            }};
                            source = new org.openapis.openapi.models.shared.ApigatewayApiConfigFile[]{{
                                add(new ApigatewayApiConfigFile() {{
                                    contents = "error";
                                    path = "deserunt";
                                }}),
                                add(new ApigatewayApiConfigFile() {{
                                    contents = "suscipit";
                                    path = "iure";
                                }}),
                            }};
                        }}),
                        add(new ApigatewayApiConfigGrpcServiceDefinition() {{
                            fileDescriptorSet = new ApigatewayApiConfigFile() {{
                                contents = "magnam";
                                path = "debitis";
                            }};
                            source = new org.openapis.openapi.models.shared.ApigatewayApiConfigFile[]{{
                                add(new ApigatewayApiConfigFile() {{
                                    contents = "delectus";
                                    path = "tempora";
                                }}),
                            }};
                        }}),
                        add(new ApigatewayApiConfigGrpcServiceDefinition() {{
                            fileDescriptorSet = new ApigatewayApiConfigFile() {{
                                contents = "suscipit";
                                path = "molestiae";
                            }};
                            source = new org.openapis.openapi.models.shared.ApigatewayApiConfigFile[]{{
                                add(new ApigatewayApiConfigFile() {{
                                    contents = "placeat";
                                    path = "voluptatum";
                                }}),
                                add(new ApigatewayApiConfigFile() {{
                                    contents = "iusto";
                                    path = "excepturi";
                                }}),
                                add(new ApigatewayApiConfigFile() {{
                                    contents = "nisi";
                                    path = "recusandae";
                                }}),
                                add(new ApigatewayApiConfigFile() {{
                                    contents = "temporibus";
                                    path = "ab";
                                }}),
                            }};
                        }}),
                        add(new ApigatewayApiConfigGrpcServiceDefinition() {{
                            fileDescriptorSet = new ApigatewayApiConfigFile() {{
                                contents = "quis";
                                path = "veritatis";
                            }};
                            source = new org.openapis.openapi.models.shared.ApigatewayApiConfigFile[]{{
                                add(new ApigatewayApiConfigFile() {{
                                    contents = "perferendis";
                                    path = "ipsam";
                                }}),
                                add(new ApigatewayApiConfigFile() {{
                                    contents = "repellendus";
                                    path = "sapiente";
                                }}),
                                add(new ApigatewayApiConfigFile() {{
                                    contents = "quo";
                                    path = "odit";
                                }}),
                            }};
                        }}),
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("at", "maiores");
                        put("molestiae", "quod");
                        put("quod", "esse");
                        put("totam", "porro");
                    }};
                    managedServiceConfigs = new org.openapis.openapi.models.shared.ApigatewayApiConfigFile[]{{
                        add(new ApigatewayApiConfigFile() {{
                            contents = "dicta";
                            path = "nam";
                        }}),
                        add(new ApigatewayApiConfigFile() {{
                            contents = "officia";
                            path = "occaecati";
                        }}),
                        add(new ApigatewayApiConfigFile() {{
                            contents = "fugit";
                            path = "deleniti";
                        }}),
                    }};
                    openapiDocuments = new org.openapis.openapi.models.shared.ApigatewayApiConfigOpenApiDocument[]{{
                        add(new ApigatewayApiConfigOpenApiDocument() {{
                            document = new ApigatewayApiConfigFile() {{
                                contents = "optio";
                                path = "totam";
                            }};
                        }}),
                        add(new ApigatewayApiConfigOpenApiDocument() {{
                            document = new ApigatewayApiConfigFile() {{
                                contents = "beatae";
                                path = "commodi";
                            }};
                        }}),
                        add(new ApigatewayApiConfigOpenApiDocument() {{
                            document = new ApigatewayApiConfigFile() {{
                                contents = "molestiae";
                                path = "modi";
                            }};
                        }}),
                        add(new ApigatewayApiConfigOpenApiDocument() {{
                            document = new ApigatewayApiConfigFile() {{
                                contents = "qui";
                                path = "impedit";
                            }};
                        }}),
                    }};
                }};;
                accessToken = "cum";
                alt = AltEnum.MEDIA;
                apiConfigId = "ipsum";
                callback = "excepturi";
                fields = "aspernatur";
                key = "perferendis";
                oauthToken = "ad";
                prettyPrint = false;
                quotaUser = "natus";
                uploadType = "sed";
                uploadProtocol = "iste";
            }};            

            ApigatewayProjectsLocationsApisConfigsCreateResponse res = sdk.projects.apigatewayProjectsLocationsApisConfigsCreate(req, new ApigatewayProjectsLocationsApisConfigsCreateSecurity("dolor", "natus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.apigatewayOperation != null) {
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

* [apigatewayProjectsLocationsApisConfigsCreate](docs/projects/README.md#apigatewayprojectslocationsapisconfigscreate) - Creates a new ApiConfig in a given project and location.
* [apigatewayProjectsLocationsApisConfigsList](docs/projects/README.md#apigatewayprojectslocationsapisconfigslist) - Lists ApiConfigs in a given project and location.
* [apigatewayProjectsLocationsApisCreate](docs/projects/README.md#apigatewayprojectslocationsapiscreate) - Creates a new Api in a given project and location.
* [apigatewayProjectsLocationsApisList](docs/projects/README.md#apigatewayprojectslocationsapislist) - Lists Apis in a given project and location.
* [apigatewayProjectsLocationsGatewaysCreate](docs/projects/README.md#apigatewayprojectslocationsgatewayscreate) - Creates a new Gateway in a given project and location.
* [apigatewayProjectsLocationsGatewaysGetIamPolicy](docs/projects/README.md#apigatewayprojectslocationsgatewaysgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [apigatewayProjectsLocationsGatewaysList](docs/projects/README.md#apigatewayprojectslocationsgatewayslist) - Lists Gateways in a given project and location.
* [apigatewayProjectsLocationsGatewaysPatch](docs/projects/README.md#apigatewayprojectslocationsgatewayspatch) - Updates the parameters of a single Gateway.
* [apigatewayProjectsLocationsGatewaysSetIamPolicy](docs/projects/README.md#apigatewayprojectslocationsgatewayssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [apigatewayProjectsLocationsGatewaysTestIamPermissions](docs/projects/README.md#apigatewayprojectslocationsgatewaystestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [apigatewayProjectsLocationsList](docs/projects/README.md#apigatewayprojectslocationslist) - Lists information about the supported locations for this service.
* [apigatewayProjectsLocationsOperationsCancel](docs/projects/README.md#apigatewayprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [apigatewayProjectsLocationsOperationsDelete](docs/projects/README.md#apigatewayprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [apigatewayProjectsLocationsOperationsGet](docs/projects/README.md#apigatewayprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [apigatewayProjectsLocationsOperationsList](docs/projects/README.md#apigatewayprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
