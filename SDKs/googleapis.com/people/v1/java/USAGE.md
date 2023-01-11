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
                    dollarXgafv = "1";
                    accessToken = "ut";
                    alt = "json";
                    callback = "odit";
                    fields = "saepe";
                    groupFields = "sit";
                    key = "maxime";
                    maxMembers = 7997996156776222842;
                    oauthToken = "aut";
                    prettyPrint = false;
                    quotaUser = "fugit";
                    resourceNames = new String[]() {{
                        add("quia"),
                    }};
                    uploadType = "numquam";
                    uploadProtocol = "quia";
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