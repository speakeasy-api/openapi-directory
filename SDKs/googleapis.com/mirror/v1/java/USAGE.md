<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.MirrorAccountsInsertRequest;
import org.openapis.openapi.models.operations.MirrorAccountsInsertResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Account;
import org.openapis.openapi.models.shared.UserData;
import org.openapis.openapi.models.shared.AuthToken;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MirrorAccountsInsertRequest req = new MirrorAccountsInsertRequest() {{
                account = new Account() {{
                    authTokens = new org.openapis.openapi.models.shared.AuthToken[]{{
                        add(new AuthToken() {{
                            authToken = "provident";
                            type = "distinctio";
                        }}),
                        add(new AuthToken() {{
                            authToken = "quibusdam";
                            type = "unde";
                        }}),
                        add(new AuthToken() {{
                            authToken = "nulla";
                            type = "corrupti";
                        }}),
                    }};
                    features = new String[]{{
                        add("vel"),
                        add("error"),
                        add("deserunt"),
                        add("suscipit"),
                    }};
                    password = "iure";
                    userData = new org.openapis.openapi.models.shared.UserData[]{{
                        add(new UserData() {{
                            key = "debitis";
                            value = "ipsa";
                        }}),
                        add(new UserData() {{
                            key = "delectus";
                            value = "tempora";
                        }}),
                    }};
                }};
                accountName = "suscipit";
                accountType = "molestiae";
                alt = "json";
                fields = "minus";
                key = "placeat";
                oauthToken = "voluptatum";
                prettyPrint = false;
                quotaUser = "iusto";
                userIp = "excepturi";
                userToken = "nisi";
            }}            

            MirrorAccountsInsertResponse res = sdk.accounts.mirrorAccountsInsert(req);

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->