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

            CreateAliasRequest req = new CreateAliasRequest() {{
                security = new CreateAliasSecurity() {{
                    apiKeyAuth = new SchemeApiKeyAuth() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                queryParams = new CreateAliasQueryParams() {{
                    aliasName = "deserunt";
                    domainName = "eaque";
                }};
                request = new CreateAliasModel() {{
                    destinations = new openapisdk.models.shared.DestinationModel[]() {{
                        add(new DestinationModel() {{
                            country = "sit";
                            os = "autem";
                            url = "quis";
                        }}),
                        add(new DestinationModel() {{
                            country = "vel";
                            os = "vel";
                            url = "placeat";
                        }}),
                    }};
                    metatags = new openapisdk.models.shared.MetaTagModel[]() {{
                        add(new MetaTagModel() {{
                            content = "nisi";
                            name = "quis";
                        }}),
                    }};
                    snippets = new openapisdk.models.shared.SnippetModel[]() {{
                        add(new SnippetModel() {{
                            id = "porro";
                            parameters = new java.util.HashMap<String, String>() {{
                                put("et", "accusamus");
                                put("numquam", "laborum");
                                put("rerum", "ut");
                            }};
                        }}),
                        add(new SnippetModel() {{
                            id = "laborum";
                            parameters = new java.util.HashMap<String, String>() {{
                                put("quis", "minus");
                            }};
                        }}),
                    }};
                }};
            }};

            CreateAliasResponse res = sdk.alias.createAlias(req);

            if (res.createAliasResponseModel.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->