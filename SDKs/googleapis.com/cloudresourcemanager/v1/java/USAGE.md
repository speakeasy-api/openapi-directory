<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudresourcemanagerLiensCreateRequest;
import org.openapis.openapi.models.operations.CloudresourcemanagerLiensCreateResponse;
import org.openapis.openapi.models.operations.CloudresourcemanagerLiensCreateSecurity;
import org.openapis.openapi.models.operations.CloudresourcemanagerLiensCreateSecurityOption1;
import org.openapis.openapi.models.operations.CloudresourcemanagerLiensCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Lien;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudresourcemanagerLiensCreateRequest req = new CloudresourcemanagerLiensCreateRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                lien = new Lien() {{
                    createTime = "provident";
                    name = "Ellis Mitchell";
                    origin = "illum";
                    parent = "vel";
                    reason = "error";
                    restrictions = new String[]{{
                        add("suscipit"),
                        add("iure"),
                        add("magnam"),
                    }};
                }};;
                accessToken = "debitis";
                alt = AltEnum.JSON;
                callback = "delectus";
                fields = "tempora";
                key = "suscipit";
                oauthToken = "molestiae";
                prettyPrint = false;
                quotaUser = "minus";
                uploadType = "placeat";
                uploadProtocol = "voluptatum";
            }};            

            CloudresourcemanagerLiensCreateResponse res = sdk.liens.cloudresourcemanagerLiensCreate(req, new CloudresourcemanagerLiensCreateSecurity() {{
                option1 = new CloudresourcemanagerLiensCreateSecurityOption1("iusto", "excepturi") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.lien != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->