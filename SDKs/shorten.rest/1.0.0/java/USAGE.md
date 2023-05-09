<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAliasRequest;
import org.openapis.openapi.models.operations.CreateAliasResponse;
import org.openapis.openapi.models.operations.CreateAliasSecurity;
import org.openapis.openapi.models.shared.CreateAliasModel;
import org.openapis.openapi.models.shared.DestinationModel;
import org.openapis.openapi.models.shared.MetaTagModel;
import org.openapis.openapi.models.shared.SnippetModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateAliasRequest req = new CreateAliasRequest(                new CreateAliasModel() {{
                                destinations = new org.openapis.openapi.models.shared.DestinationModel[]{{
                                    add(new DestinationModel("unde") {{
                                        country = "Montenegro";
                                        os = "distinctio";
                                        url = "quibusdam";
                                    }}),
                                    add(new DestinationModel("vel") {{
                                        country = "Sweden";
                                        os = "corrupti";
                                        url = "illum";
                                    }}),
                                    add(new DestinationModel("iure") {{
                                        country = "Netherlands Antilles";
                                        os = "deserunt";
                                        url = "suscipit";
                                    }}),
                                }};
                                metatags = new org.openapis.openapi.models.shared.MetaTagModel[]{{
                                    add(new MetaTagModel("minus", "placeat") {{
                                        content = "debitis";
                                        name = "Lucia Goldner";
                                    }}),
                                    add(new MetaTagModel("ab", "quis") {{
                                        content = "voluptatum";
                                        name = "Miriam Huel";
                                    }}),
                                }};
                                snippets = new org.openapis.openapi.models.shared.SnippetModel[]{{
                                    add(new SnippetModel("sed") {{
                                        id = "a05dfc2d-df7c-4c78-8a1b-a928fc816742";
                                        parameters = new java.util.HashMap<String, String>() {{
                                            put("cum", "esse");
                                            put("ipsum", "excepturi");
                                            put("aspernatur", "perferendis");
                                            put("ad", "natus");
                                        }};
                                    }}),
                                }};
                            }};) {{
                aliasName = "iste";
                domainName = "dolor";
            }};            

            CreateAliasResponse res = sdk.alias.createAlias(req, new CreateAliasSecurity("natus") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.createAliasResponseModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->