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
                    parent = "dicta";
                }};
                queryParams = new ApigatewayProjectsLocationsApisConfigsCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "impedit";
                    alt = "json";
                    apiConfigId = "reprehenderit";
                    callback = "nesciunt";
                    fields = "aut";
                    key = "necessitatibus";
                    oauthToken = "corrupti";
                    prettyPrint = false;
                    quotaUser = "tempore";
                    uploadType = "saepe";
                    uploadProtocol = "aut";
                }};
                request = new ApigatewayApiConfigInput() {{
                    displayName = "est";
                    gatewayConfig = new ApigatewayGatewayConfig() {{
                        backendConfig = new ApigatewayBackendConfig() {{
                            googleServiceAccount = "odit";
                        }};
                    }};
                    gatewayServiceAccount = "et";
                    grpcServices = new openapisdk.models.shared.ApigatewayApiConfigGrpcServiceDefinition[]() {{
                        add(new ApigatewayApiConfigGrpcServiceDefinition() {{
                            fileDescriptorSet = new ApigatewayApiConfigFile() {{
                                contents = "voluptates";
                                path = "mollitia";
                            }};
                            source = new openapisdk.models.shared.ApigatewayApiConfigFile[]() {{
                                add(new ApigatewayApiConfigFile() {{
                                    contents = "molestiae";
                                    path = "error";
                                }}),
                            }};
                        }}),
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("non", "aspernatur");
                        put("rem", "vel");
                        put("eum", "at");
                    }};
                    managedServiceConfigs = new openapisdk.models.shared.ApigatewayApiConfigFile[]() {{
                        add(new ApigatewayApiConfigFile() {{
                            contents = "ut";
                            path = "voluptas";
                        }}),
                        add(new ApigatewayApiConfigFile() {{
                            contents = "sit";
                            path = "maiores";
                        }}),
                        add(new ApigatewayApiConfigFile() {{
                            contents = "aliquid";
                            path = "veritatis";
                        }}),
                    }};
                    openapiDocuments = new openapisdk.models.shared.ApigatewayApiConfigOpenApiDocument[]() {{
                        add(new ApigatewayApiConfigOpenApiDocument() {{
                            document = new ApigatewayApiConfigFile() {{
                                contents = "sequi";
                                path = "libero";
                            }};
                        }}),
                        add(new ApigatewayApiConfigOpenApiDocument() {{
                            document = new ApigatewayApiConfigFile() {{
                                contents = "in";
                                path = "ut";
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