<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.PeopleContactGroupsBatchGetSecurityOption1;
import org.openapis.openapi.models.operations.PeopleContactGroupsBatchGetSecurityOption2;
import org.openapis.openapi.models.operations.PeopleContactGroupsBatchGetSecurity;
import org.openapis.openapi.models.operations.PeopleContactGroupsBatchGetQueryParams;
import org.openapis.openapi.models.operations.PeopleContactGroupsBatchGetRequest;
import org.openapis.openapi.models.operations.PeopleContactGroupsBatchGetResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PeopleContactGroupsBatchGetRequest req = new PeopleContactGroupsBatchGetRequest() {{
                security = new PeopleContactGroupsBatchGetSecurity() {{
                    option1 = new PeopleContactGroupsBatchGetSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                queryParams = new PeopleContactGroupsBatchGetQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "provident";
                    alt = "proto";
                    callback = "quibusdam";
                    fields = "unde";
                    groupFields = "nulla";
                    key = "corrupti";
                    maxMembers = 847252;
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
            }};            

            PeopleContactGroupsBatchGetResponse res = sdk.contactGroups.peopleContactGroupsBatchGet(req);

            if (res.batchGetContactGroupsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->