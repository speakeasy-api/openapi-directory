<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CreateAliasSecurity;
import org.openapis.openapi.models.operations.CreateAliasQueryParams;
import org.openapis.openapi.models.operations.CreateAliasRequest;
import org.openapis.openapi.models.operations.CreateAliasResponse;
import org.openapis.openapi.models.shared.CreateAliasModel;
import org.openapis.openapi.models.shared.SnippetModel;
import org.openapis.openapi.models.shared.MetaTagModel;
import org.openapis.openapi.models.shared.DestinationModel;
import org.openapis.openapi.models.shared.SchemeAPIKeyAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateAliasRequest req = new CreateAliasRequest() {{
                security = new CreateAliasSecurity() {{
                    apiKeyAuth = new SchemeAPIKeyAuth() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                queryParams = new CreateAliasQueryParams() {{
                    aliasName = "corrupti";
                    domainName = "provident";
                }};
                request = new CreateAliasModel() {{
                    destinations = new org.openapis.openapi.models.shared.DestinationModel[]{{
                        add(new DestinationModel() {{
                            country = "Suriname";
                            os = "unde";
                            url = "nulla";
                        }}),
                        add(new DestinationModel() {{
                            country = "Mali";
                            os = "illum";
                            url = "vel";
                        }}),
                        add(new DestinationModel() {{
                            country = "Netherlands Antilles";
                            os = "deserunt";
                            url = "suscipit";
                        }}),
                    }};
                    metatags = new org.openapis.openapi.models.shared.MetaTagModel[]{{
                        add(new MetaTagModel() {{
                            content = "magnam";
                            name = "debitis";
                        }}),
                        add(new MetaTagModel() {{
                            content = "ipsa";
                            name = "delectus";
                        }}),
                    }};
                    snippets = new org.openapis.openapi.models.shared.SnippetModel[]{{
                        add(new SnippetModel() {{
                            id = "suscipit";
                            parameters = new java.util.HashMap<String, String>() {{
                                put("minus", "placeat");
                                put("voluptatum", "iusto");
                            }};
                        }}),
                        add(new SnippetModel() {{
                            id = "excepturi";
                            parameters = new java.util.HashMap<String, String>() {{
                                put("recusandae", "temporibus");
                                put("ab", "quis");
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