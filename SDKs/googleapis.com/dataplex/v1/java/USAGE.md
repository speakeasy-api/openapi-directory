<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DataplexProjectsLocationsDataAttributeBindingsCreateSecurity;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsDataAttributeBindingsCreatePathParams;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsDataAttributeBindingsCreateQueryParams;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsDataAttributeBindingsCreateRequest;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsDataAttributeBindingsCreateResponse;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1DataAttributeBindingInput;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1DataAttributeBindingPath;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataplexProjectsLocationsDataAttributeBindingsCreateRequest req = new DataplexProjectsLocationsDataAttributeBindingsCreateRequest() {{
                security = new DataplexProjectsLocationsDataAttributeBindingsCreateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new DataplexProjectsLocationsDataAttributeBindingsCreatePathParams() {{
                    parent = "corrupti";
                }};
                queryParams = new DataplexProjectsLocationsDataAttributeBindingsCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    dataAttributeBindingId = "nulla";
                    fields = "corrupti";
                    key = "illum";
                    oauthToken = "vel";
                    prettyPrint = false;
                    quotaUser = "error";
                    uploadType = "deserunt";
                    uploadProtocol = "suscipit";
                    validateOnly = false;
                }};
                request = new GoogleCloudDataplexV1DataAttributeBindingInput() {{
                    attributes = new String[]{{
                        add("magnam"),
                        add("debitis"),
                    }};
                    description = "ipsa";
                    displayName = "delectus";
                    etag = "tempora";
                    labels = new java.util.HashMap<String, String>() {{
                        put("molestiae", "minus");
                        put("placeat", "voluptatum");
                    }};
                    paths = new org.openapis.openapi.models.shared.GoogleCloudDataplexV1DataAttributeBindingPath[]{{
                        add(new GoogleCloudDataplexV1DataAttributeBindingPath() {{
                            attributes = new String[]{{
                                add("nisi"),
                                add("recusandae"),
                                add("temporibus"),
                            }};
                            name = "ab";
                        }}),
                        add(new GoogleCloudDataplexV1DataAttributeBindingPath() {{
                            attributes = new String[]{{
                                add("veritatis"),
                                add("deserunt"),
                            }};
                            name = "perferendis";
                        }}),
                    }};
                    resource = "ipsam";
                }};
            }};            

            DataplexProjectsLocationsDataAttributeBindingsCreateResponse res = sdk.projects.dataplexProjectsLocationsDataAttributeBindingsCreate(req);

            if (res.googleLongrunningOperation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->