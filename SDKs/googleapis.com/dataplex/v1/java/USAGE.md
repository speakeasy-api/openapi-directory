<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsDataAttributeBindingsCreateRequest;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsDataAttributeBindingsCreateResponse;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsDataAttributeBindingsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1DataAttributeBindingInput;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1DataAttributeBindingPath;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataplexProjectsLocationsDataAttributeBindingsCreateRequest req = new DataplexProjectsLocationsDataAttributeBindingsCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudDataplexV1DataAttributeBindingInput = new GoogleCloudDataplexV1DataAttributeBindingInput() {{
                    attributes = new String[]{{
                        add("quibusdam"),
                        add("unde"),
                        add("nulla"),
                    }};
                    description = "corrupti";
                    displayName = "illum";
                    etag = "vel";
                    labels = new java.util.HashMap<String, String>() {{
                        put("deserunt", "suscipit");
                        put("iure", "magnam");
                        put("debitis", "ipsa");
                    }};
                    paths = new org.openapis.openapi.models.shared.GoogleCloudDataplexV1DataAttributeBindingPath[]{{
                        add(new GoogleCloudDataplexV1DataAttributeBindingPath() {{
                            attributes = new String[]{{
                                add("suscipit"),
                                add("molestiae"),
                            }};
                            name = "Irving Lehner";
                        }}),
                        add(new GoogleCloudDataplexV1DataAttributeBindingPath() {{
                            attributes = new String[]{{
                                add("recusandae"),
                                add("temporibus"),
                            }};
                            name = "Erica Bogisich III";
                        }}),
                        add(new GoogleCloudDataplexV1DataAttributeBindingPath() {{
                            attributes = new String[]{{
                                add("sapiente"),
                                add("quo"),
                                add("odit"),
                                add("at"),
                            }};
                            name = "Emilio Krajcik";
                        }}),
                        add(new GoogleCloudDataplexV1DataAttributeBindingPath() {{
                            attributes = new String[]{{
                                add("totam"),
                                add("porro"),
                            }};
                            name = "Samuel Reichel";
                        }}),
                    }};
                    resource = "fugit";
                }};;
                accessToken = "deleniti";
                alt = AltEnum.PROTO;
                callback = "optio";
                dataAttributeBindingId = "totam";
                fields = "beatae";
                key = "commodi";
                oauthToken = "molestiae";
                prettyPrint = false;
                quotaUser = "modi";
                uploadType = "qui";
                uploadProtocol = "impedit";
                validateOnly = false;
            }};            

            DataplexProjectsLocationsDataAttributeBindingsCreateResponse res = sdk.projects.dataplexProjectsLocationsDataAttributeBindingsCreate(req, new DataplexProjectsLocationsDataAttributeBindingsCreateSecurity("cum", "esse") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->