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
                    dollarXgafv = "1";
                    accessToken = "voluptas";
                    alt = "media";
                    callback = "expedita";
                    fields = "consequuntur";
                    key = "dolor";
                    oauthToken = "expedita";
                    prettyPrint = true;
                    quotaUser = "fugit";
                    uploadType = "et";
                    uploadProtocol = "nihil";
                }};
                request = new Lien() {{
                    createTime = "rerum";
                    name = "dicta";
                    origin = "debitis";
                    parent = "voluptatum";
                    reason = "et";
                    restrictions = new String[]() {{
                        add("dolorem"),
                        add("et"),
                        add("voluptate"),
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