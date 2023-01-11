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
                    accessToken = "voluptas";
                    alt = "media";
                    callback = "expedita";
                    fields = "consequuntur";
                    groupFields = "dolor";
                    key = "expedita";
                    maxMembers = 6044372234677422456;
                    oauthToken = "fugit";
                    prettyPrint = false;
                    quotaUser = "nihil";
                    resourceNames = new String[]() {{
                        add("dicta"),
                        add("debitis"),
                        add("voluptatum"),
                    }};
                    uploadType = "et";
                    uploadProtocol = "ut";
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