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
                    accountName = "corrupti";
                    accountType = "sunt";
                    userToken = "aut";
                }};
                queryParams = new MirrorAccountsInsertQueryParams() {{
                    alt = "json";
                    fields = "et";
                    key = "eos";
                    oauthToken = "omnis";
                    prettyPrint = false;
                    quotaUser = "illo";
                    userIp = "deserunt";
                }};
                request = new Account() {{
                    authTokens = new openapisdk.models.shared.AuthToken[]() {{
                        add(new AuthToken() {{
                            authToken = "aspernatur";
                            type = "eos";
                        }}),
                    }};
                    features = new String[]() {{
                        add("ad"),
                        add("perferendis"),
                        add("est"),
                    }};
                    password = "enim";
                    userData = new openapisdk.models.shared.UserData[]() {{
                        add(new UserData() {{
                            key = "voluptatem";
                            value = "omnis";
                        }}),
                        add(new UserData() {{
                            key = "ut";
                            value = "dolorem";
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