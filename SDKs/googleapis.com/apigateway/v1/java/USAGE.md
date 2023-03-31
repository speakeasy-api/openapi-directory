<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.ApigatewayProjectsLocationsApisConfigsCreateSecurity;
import org.openapis.openapi.models.operations.ApigatewayProjectsLocationsApisConfigsCreatePathParams;
import org.openapis.openapi.models.operations.ApigatewayProjectsLocationsApisConfigsCreateQueryParams;
import org.openapis.openapi.models.operations.ApigatewayProjectsLocationsApisConfigsCreateRequest;
import org.openapis.openapi.models.operations.ApigatewayProjectsLocationsApisConfigsCreateResponse;
import org.openapis.openapi.models.shared.ApigatewayApiConfigInput;
import org.openapis.openapi.models.shared.ApigatewayApiConfigOpenApiDocument;
import org.openapis.openapi.models.shared.ApigatewayApiConfigFile;
import org.openapis.openapi.models.shared.ApigatewayApiConfigGrpcServiceDefinition;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

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
                    parent = "corrupti";
                }};
                queryParams = new ApigatewayProjectsLocationsApisConfigsCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    apiConfigId = "unde";
                    callback = "nulla";
                    fields = "corrupti";
                    key = "illum";
                    oauthToken = "vel";
                    prettyPrint = false;
                    quotaUser = "error";
                    uploadType = "deserunt";
                    uploadProtocol = "suscipit";
                }};
                request = new ApigatewayApiConfigInput() {{
                    displayName = "iure";
                    gatewayServiceAccount = "magnam";
                    grpcServices = new org.openapis.openapi.models.shared.ApigatewayApiConfigGrpcServiceDefinition[]{{
                        add(new ApigatewayApiConfigGrpcServiceDefinition() {{
                            fileDescriptorSet = new ApigatewayApiConfigFile() {{
                                contents = "ipsa";
                                path = "delectus";
                            }};
                            source = new org.openapis.openapi.models.shared.ApigatewayApiConfigFile[]{{
                                add(new ApigatewayApiConfigFile() {{
                                    contents = "suscipit";
                                    path = "molestiae";
                                }}),
                                add(new ApigatewayApiConfigFile() {{
                                    contents = "minus";
                                    path = "placeat";
                                }}),
                            }};
                        }}),
                        add(new ApigatewayApiConfigGrpcServiceDefinition() {{
                            fileDescriptorSet = new ApigatewayApiConfigFile() {{
                                contents = "voluptatum";
                                path = "iusto";
                            }};
                            source = new org.openapis.openapi.models.shared.ApigatewayApiConfigFile[]{{
                                add(new ApigatewayApiConfigFile() {{
                                    contents = "nisi";
                                    path = "recusandae";
                                }}),
                                add(new ApigatewayApiConfigFile() {{
                                    contents = "temporibus";
                                    path = "ab";
                                }}),
                                add(new ApigatewayApiConfigFile() {{
                                    contents = "quis";
                                    path = "veritatis";
                                }}),
                            }};
                        }}),
                        add(new ApigatewayApiConfigGrpcServiceDefinition() {{
                            fileDescriptorSet = new ApigatewayApiConfigFile() {{
                                contents = "deserunt";
                                path = "perferendis";
                            }};
                            source = new org.openapis.openapi.models.shared.ApigatewayApiConfigFile[]{{
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
                        add(new ApigatewayApiConfigGrpcServiceDefinition() {{
                            fileDescriptorSet = new ApigatewayApiConfigFile() {{
                                contents = "at";
                                path = "at";
                            }};
                            source = new org.openapis.openapi.models.shared.ApigatewayApiConfigFile[]{{
                                add(new ApigatewayApiConfigFile() {{
                                    contents = "molestiae";
                                    path = "quod";
                                }}),
                                add(new ApigatewayApiConfigFile() {{
                                    contents = "quod";
                                    path = "esse";
                                }}),
                                add(new ApigatewayApiConfigFile() {{
                                    contents = "totam";
                                    path = "porro";
                                }}),
                                add(new ApigatewayApiConfigFile() {{
                                    contents = "dolorum";
                                    path = "dicta";
                                }}),
                            }};
                        }}),
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("officia", "occaecati");
                        put("fugit", "deleniti");
                        put("hic", "optio");
                    }};
                    managedServiceConfigs = new org.openapis.openapi.models.shared.ApigatewayApiConfigFile[]{{
                        add(new ApigatewayApiConfigFile() {{
                            contents = "beatae";
                            path = "commodi";
                        }}),
                        add(new ApigatewayApiConfigFile() {{
                            contents = "molestiae";
                            path = "modi";
                        }}),
                        add(new ApigatewayApiConfigFile() {{
                            contents = "qui";
                            path = "impedit";
                        }}),
                    }};
                    openapiDocuments = new org.openapis.openapi.models.shared.ApigatewayApiConfigOpenApiDocument[]{{
                        add(new ApigatewayApiConfigOpenApiDocument() {{
                            document = new ApigatewayApiConfigFile() {{
                                contents = "esse";
                                path = "ipsum";
                            }};
                        }}),
                        add(new ApigatewayApiConfigOpenApiDocument() {{
                            document = new ApigatewayApiConfigFile() {{
                                contents = "excepturi";
                                path = "aspernatur";
                            }};
                        }}),
                        add(new ApigatewayApiConfigOpenApiDocument() {{
                            document = new ApigatewayApiConfigFile() {{
                                contents = "perferendis";
                                path = "ad";
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