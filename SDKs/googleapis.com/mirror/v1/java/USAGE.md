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

            MirrorAccountsInsertRequest req = new MirrorAccountsInsertRequest() {{
                pathParams = new MirrorAccountsInsertPathParams() {{
                    accountName = "sit";
                    accountType = "voluptas";
                    userToken = "culpa";
                }};
                queryParams = new MirrorAccountsInsertQueryParams() {{
                    alt = "json";
                    fields = "consequuntur";
                    key = "dolor";
                    oauthToken = "expedita";
                    prettyPrint = true;
                    quotaUser = "fugit";
                    userIp = "et";
                }};
                request = new Account() {{
                    authTokens = new openapisdk.models.shared.AuthToken[]() {{
                        add(new AuthToken() {{
                            authToken = "rerum";
                            type = "dicta";
                        }}),
                    }};
                    features = new String[]() {{
                        add("voluptatum"),
                    }};
                    password = "et";
                    userData = new openapisdk.models.shared.UserData[]() {{
                        add(new UserData() {{
                            key = "dolorem";
                            value = "et";
                        }}),
                        add(new UserData() {{
                            key = "voluptate";
                            value = "iste";
                        }}),
                        add(new UserData() {{
                            key = "vitae";
                            value = "totam";
                        }}),
                    }};
                }};
            }};

            MirrorAccountsInsertResponse res = sdk.accounts.mirrorAccountsInsert(req);

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->