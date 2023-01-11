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
                    gatewayServiceAccount = "voluptatum";
                    grpcServices = new openapisdk.models.shared.ApigatewayApiConfigGrpcServiceDefinition[]() {{
                        add(new ApigatewayApiConfigGrpcServiceDefinition() {{
                            fileDescriptorSet = new ApigatewayApiConfigFile() {{
                                contents = "ut";
                                path = "dolorem";
                            }};
                            source = new openapisdk.models.shared.ApigatewayApiConfigFile[]() {{
                                add(new ApigatewayApiConfigFile() {{
                                    contents = "voluptate";
                                    path = "iste";
                                }}),
                                add(new ApigatewayApiConfigFile() {{
                                    contents = "vitae";
                                    path = "totam";
                                }}),
                            }};
                        }}),
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("illum", "debitis");
                    }};
                    managedServiceConfigs = new openapisdk.models.shared.ApigatewayApiConfigFile[]() {{
                        add(new ApigatewayApiConfigFile() {{
                            contents = "odio";
                            path = "dolore";
                        }}),
                        add(new ApigatewayApiConfigFile() {{
                            contents = "id";
                            path = "aspernatur";
                        }}),
                    }};
                    openapiDocuments = new openapisdk.models.shared.ApigatewayApiConfigOpenApiDocument[]() {{
                        add(new ApigatewayApiConfigOpenApiDocument() {{
                            document = new ApigatewayApiConfigFile() {{
                                contents = "totam";
                                path = "commodi";
                            }};
                        }}),
                        add(new ApigatewayApiConfigOpenApiDocument() {{
                            document = new ApigatewayApiConfigFile() {{
                                contents = "quis";
                                path = "est";
                            }};
                        }}),
                        add(new ApigatewayApiConfigOpenApiDocument() {{
                            document = new ApigatewayApiConfigFile() {{
                                contents = "aut";
                                path = "odit";
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