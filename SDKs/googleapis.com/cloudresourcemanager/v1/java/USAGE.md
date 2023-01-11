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

            CloudresourcemanagerLiensCreateRequest req = new CloudresourcemanagerLiensCreateRequest() {{
                security = new CloudresourcemanagerLiensCreateSecurity() {{
                    option1 = new CloudresourcemanagerLiensCreateSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                queryParams = new CloudresourcemanagerLiensCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "perferendis";
                    alt = "media";
                    callback = "adipisci";
                    fields = "quos";
                    key = "odit";
                    oauthToken = "neque";
                    prettyPrint = false;
                    quotaUser = "expedita";
                    uploadType = "veniam";
                    uploadProtocol = "quos";
                }};
                request = new Lien() {{
                    createTime = "natus";
                    name = "porro";
                    origin = "dolorem";
                    parent = "earum";
                    reason = "itaque";
                    restrictions = new String[]() {{
                        add("voluptas"),
                        add("eos"),
                        add("deleniti"),
                    }};
                }};
            }};

            CloudresourcemanagerLiensCreateResponse res = sdk.liens.cloudresourcemanagerLiensCreate(req);

            if (res.lien.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->