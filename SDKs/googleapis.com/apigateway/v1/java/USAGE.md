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