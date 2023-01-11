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
                    parent = "sit";
                }};
                queryParams = new ApigatewayProjectsLocationsApisConfigsCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    apiConfigId = "consequuntur";
                    callback = "dolor";
                    fields = "expedita";
                    key = "voluptas";
                    oauthToken = "fugit";
                    prettyPrint = false;
                    quotaUser = "nihil";
                    uploadType = "rerum";
                    uploadProtocol = "dicta";
                }};
                request = new ApigatewayApiConfigInput() {{
                    displayName = "debitis";
                    gatewayConfig = new ApigatewayGatewayConfig() {{
                        backendConfig = new ApigatewayBackendConfig() {{
                            googleServiceAccount = "voluptatum";
                        }};
                    }};
                    gatewayServiceAccount = "et";
                    grpcServices = new openapisdk.models.shared.ApigatewayApiConfigGrpcServiceDefinition[]() {{
                        add(new ApigatewayApiConfigGrpcServiceDefinition() {{
                            fileDescriptorSet = new ApigatewayApiConfigFile() {{
                                contents = "dolorem";
                                path = "et";
                            }};
                            source = new openapisdk.models.shared.ApigatewayApiConfigFile[]() {{
                                add(new ApigatewayApiConfigFile() {{
                                    contents = "iste";
                                    path = "vitae";
                                }}),
                            }};
                        }}),
                        add(new ApigatewayApiConfigGrpcServiceDefinition() {{
                            fileDescriptorSet = new ApigatewayApiConfigFile() {{
                                contents = "totam";
                                path = "dolores";
                            }};
                            source = new openapisdk.models.shared.ApigatewayApiConfigFile[]() {{
                                add(new ApigatewayApiConfigFile() {{
                                    contents = "debitis";
                                    path = "vel";
                                }}),
                                add(new ApigatewayApiConfigFile() {{
                                    contents = "odio";
                                    path = "dolore";
                                }}),
                                add(new ApigatewayApiConfigFile() {{
                                    contents = "id";
                                    path = "aspernatur";
                                }}),
                            }};
                        }}),
                        add(new ApigatewayApiConfigGrpcServiceDefinition() {{
                            fileDescriptorSet = new ApigatewayApiConfigFile() {{
                                contents = "accusantium";
                                path = "totam";
                            }};
                            source = new openapisdk.models.shared.ApigatewayApiConfigFile[]() {{
                                add(new ApigatewayApiConfigFile() {{
                                    contents = "quis";
                                    path = "est";
                                }}),
                                add(new ApigatewayApiConfigFile() {{
                                    contents = "aut";
                                    path = "odit";
                                }}),
                            }};
                        }}),
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("voluptas", "omnis");
                        put("aut", "illo");
                        put("sed", "officiis");
                    }};
                    managedServiceConfigs = new openapisdk.models.shared.ApigatewayApiConfigFile[]() {{
                        add(new ApigatewayApiConfigFile() {{
                            contents = "consectetur";
                            path = "nobis";
                        }}),
                        add(new ApigatewayApiConfigFile() {{
                            contents = "odio";
                            path = "qui";
                        }}),
                    }};
                    openapiDocuments = new openapisdk.models.shared.ApigatewayApiConfigOpenApiDocument[]() {{
                        add(new ApigatewayApiConfigOpenApiDocument() {{
                            document = new ApigatewayApiConfigFile() {{
                                contents = "at";
                                path = "ipsum";
                            }};
                        }}),
                        add(new ApigatewayApiConfigOpenApiDocument() {{
                            document = new ApigatewayApiConfigFile() {{
                                contents = "eveniet";
                                path = "modi";
                            }};
                        }}),
                        add(new ApigatewayApiConfigOpenApiDocument() {{
                            document = new ApigatewayApiConfigFile() {{
                                contents = "sint";
                                path = "inventore";
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