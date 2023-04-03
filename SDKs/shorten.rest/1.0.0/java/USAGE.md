<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CreateAliasSecurity;
import org.openapis.openapi.models.operations.CreateAliasRequest;
import org.openapis.openapi.models.operations.CreateAliasResponse;
import org.openapis.openapi.models.shared.CreateAliasModel;
import org.openapis.openapi.models.shared.SnippetModel;
import org.openapis.openapi.models.shared.MetaTagModel;
import org.openapis.openapi.models.shared.DestinationModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateAliasRequest req = new CreateAliasRequest() {{
                createAliasModel = new CreateAliasModel() {{
                    destinations = new org.openapis.openapi.models.shared.DestinationModel[]{{
                        add(new DestinationModel() {{
                            country = "Montenegro";
                            os = "distinctio";
                            url = "quibusdam";
                        }}),
                        add(new DestinationModel() {{
                            country = "Mozambique";
                            os = "nulla";
                            url = "corrupti";
                        }}),
                        add(new DestinationModel() {{
                            country = "Suriname";
                            os = "vel";
                            url = "error";
                        }}),
                    }};
                    metatags = new org.openapis.openapi.models.shared.MetaTagModel[]{{
                        add(new MetaTagModel() {{
                            content = "suscipit";
                            name = "iure";
                        }}),
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
                aliasName = "veritatis";
                domainName = "deserunt";
            }}            

            CreateAliasResponse res = sdk.alias.createAlias(req, new CreateAliasSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.createAliasResponseModel.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->