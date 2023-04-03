<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CloudresourcemanagerLiensCreateSecurityOption1;
import org.openapis.openapi.models.operations.CloudresourcemanagerLiensCreateSecurityOption2;
import org.openapis.openapi.models.operations.CloudresourcemanagerLiensCreateSecurity;
import org.openapis.openapi.models.operations.CloudresourcemanagerLiensCreateRequest;
import org.openapis.openapi.models.operations.CloudresourcemanagerLiensCreateResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Lien;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudresourcemanagerLiensCreateRequest req = new CloudresourcemanagerLiensCreateRequest() {{
                dollarXgafv = "2";
                lien = new Lien() {{
                    createTime = "provident";
                    name = "distinctio";
                    origin = "quibusdam";
                    parent = "unde";
                    reason = "nulla";
                    restrictions = new String[]{{
                        add("illum"),
                        add("vel"),
                        add("error"),
                    }};
                }};
                accessToken = "deserunt";
                alt = "media";
                callback = "iure";
                fields = "magnam";
                key = "debitis";
                oauthToken = "ipsa";
                prettyPrint = false;
                quotaUser = "delectus";
                uploadType = "tempora";
                uploadProtocol = "suscipit";
            }}            

            CloudresourcemanagerLiensCreateResponse res = sdk.liens.cloudresourcemanagerLiensCreate(req, new CloudresourcemanagerLiensCreateSecurity() {{
                option1 = new CloudresourcemanagerLiensCreateSecurityOption1() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.lien.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->