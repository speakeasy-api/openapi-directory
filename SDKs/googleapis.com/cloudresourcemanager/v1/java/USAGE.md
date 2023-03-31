<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CloudresourcemanagerLiensCreateSecurityOption1;
import org.openapis.openapi.models.operations.CloudresourcemanagerLiensCreateSecurityOption2;
import org.openapis.openapi.models.operations.CloudresourcemanagerLiensCreateSecurity;
import org.openapis.openapi.models.operations.CloudresourcemanagerLiensCreateQueryParams;
import org.openapis.openapi.models.operations.CloudresourcemanagerLiensCreateRequest;
import org.openapis.openapi.models.operations.CloudresourcemanagerLiensCreateResponse;
import org.openapis.openapi.models.shared.Lien;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

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
                    accessToken = "provident";
                    alt = "proto";
                    callback = "quibusdam";
                    fields = "unde";
                    key = "nulla";
                    oauthToken = "corrupti";
                    prettyPrint = false;
                    quotaUser = "illum";
                    uploadType = "vel";
                    uploadProtocol = "error";
                }};
                request = new Lien() {{
                    createTime = "deserunt";
                    name = "suscipit";
                    origin = "iure";
                    parent = "magnam";
                    reason = "debitis";
                    restrictions = new String[]{{
                        add("delectus"),
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