<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.MirrorAccountsInsertPathParams;
import org.openapis.openapi.models.operations.MirrorAccountsInsertQueryParams;
import org.openapis.openapi.models.operations.MirrorAccountsInsertRequest;
import org.openapis.openapi.models.operations.MirrorAccountsInsertResponse;
import org.openapis.openapi.models.shared.Account;
import org.openapis.openapi.models.shared.UserData;
import org.openapis.openapi.models.shared.AuthToken;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MirrorAccountsInsertRequest req = new MirrorAccountsInsertRequest() {{
                pathParams = new MirrorAccountsInsertPathParams() {{
                    accountName = "corrupti";
                    accountType = "provident";
                    userToken = "distinctio";
                }};
                queryParams = new MirrorAccountsInsertQueryParams() {{
                    alt = "json";
                    fields = "quibusdam";
                    key = "unde";
                    oauthToken = "nulla";
                    prettyPrint = false;
                    quotaUser = "corrupti";
                    userIp = "illum";
                }};
                request = new Account() {{
                    authTokens = new org.openapis.openapi.models.shared.AuthToken[]{{
                        add(new AuthToken() {{
                            authToken = "error";
                            type = "deserunt";
                        }}),
                        add(new AuthToken() {{
                            authToken = "suscipit";
                            type = "iure";
                        }}),
                    }};
                    features = new String[]{{
                        add("debitis"),
                        add("ipsa"),
                    }};
                    password = "delectus";
                    userData = new org.openapis.openapi.models.shared.UserData[]{{
                        add(new UserData() {{
                            key = "suscipit";
                            value = "molestiae";
                        }}),
                        add(new UserData() {{
                            key = "minus";
                            value = "placeat";
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