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