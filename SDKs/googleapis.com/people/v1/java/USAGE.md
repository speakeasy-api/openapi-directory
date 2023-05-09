<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PeopleContactGroupsBatchGetRequest;
import org.openapis.openapi.models.operations.PeopleContactGroupsBatchGetResponse;
import org.openapis.openapi.models.operations.PeopleContactGroupsBatchGetSecurity;
import org.openapis.openapi.models.operations.PeopleContactGroupsBatchGetSecurityOption1;
import org.openapis.openapi.models.operations.PeopleContactGroupsBatchGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PeopleContactGroupsBatchGetRequest req = new PeopleContactGroupsBatchGetRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "provident";
                alt = AltEnum.PROTO;
                callback = "quibusdam";
                fields = "unde";
                groupFields = "nulla";
                key = "corrupti";
                maxMembers = 847252L;
                oauthToken = "vel";
                prettyPrint = false;
                quotaUser = "error";
                resourceNames = new String[]{{
                    add("suscipit"),
                    add("iure"),
                    add("magnam"),
                }};
                uploadType = "debitis";
                uploadProtocol = "ipsa";
            }};            

            PeopleContactGroupsBatchGetResponse res = sdk.contactGroups.peopleContactGroupsBatchGet(req, new PeopleContactGroupsBatchGetSecurity() {{
                option1 = new PeopleContactGroupsBatchGetSecurityOption1("delectus", "tempora") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.batchGetContactGroupsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->