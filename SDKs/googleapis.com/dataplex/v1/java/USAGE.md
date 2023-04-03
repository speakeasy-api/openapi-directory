<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DataplexProjectsLocationsDataAttributeBindingsCreateSecurity;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsDataAttributeBindingsCreateRequest;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsDataAttributeBindingsCreateResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1DataAttributeBindingInput;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1DataAttributeBindingPath;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataplexProjectsLocationsDataAttributeBindingsCreateRequest req = new DataplexProjectsLocationsDataAttributeBindingsCreateRequest() {{
                dollarXgafv = "2";
                googleCloudDataplexV1DataAttributeBindingInput = new GoogleCloudDataplexV1DataAttributeBindingInput() {{
                    attributes = new String[]{{
                        add("distinctio"),
                        add("quibusdam"),
                        add("unde"),
                    }};
                    description = "nulla";
                    displayName = "corrupti";
                    etag = "illum";
                    labels = new java.util.HashMap<String, String>() {{
                        put("error", "deserunt");
                        put("suscipit", "iure");
                    }};
                    paths = new org.openapis.openapi.models.shared.GoogleCloudDataplexV1DataAttributeBindingPath[]{{
                        add(new GoogleCloudDataplexV1DataAttributeBindingPath() {{
                            attributes = new String[]{{
                                add("ipsa"),
                                add("delectus"),
                                add("tempora"),
                                add("suscipit"),
                            }};
                            name = "molestiae";
                        }}),
                        add(new GoogleCloudDataplexV1DataAttributeBindingPath() {{
                            attributes = new String[]{{
                                add("placeat"),
                                add("voluptatum"),
                                add("iusto"),
                                add("excepturi"),
                            }};
                            name = "nisi";
                        }}),
                    }};
                    resource = "recusandae";
                }};
                accessToken = "temporibus";
                alt = "json";
                callback = "quis";
                dataAttributeBindingId = "veritatis";
                fields = "deserunt";
                key = "perferendis";
                oauthToken = "ipsam";
                parent = "repellendus";
                prettyPrint = false;
                quotaUser = "sapiente";
                uploadType = "quo";
                uploadProtocol = "odit";
                validateOnly = false;
            }}            

            DataplexProjectsLocationsDataAttributeBindingsCreateResponse res = sdk.projects.dataplexProjectsLocationsDataAttributeBindingsCreate(req, new DataplexProjectsLocationsDataAttributeBindingsCreateSecurity() {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->