<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MirrorAccountsInsertRequest;
import org.openapis.openapi.models.operations.MirrorAccountsInsertResponse;
import org.openapis.openapi.models.shared.Account;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AuthToken;
import org.openapis.openapi.models.shared.UserData;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MirrorAccountsInsertRequest req = new MirrorAccountsInsertRequest("corrupti", "provident", "distinctio") {{
                account = new Account() {{
                    authTokens = new org.openapis.openapi.models.shared.AuthToken[]{{
                        add(new AuthToken() {{
                            authToken = "unde";
                            type = "nulla";
                        }}),
                        add(new AuthToken() {{
                            authToken = "corrupti";
                            type = "illum";
                        }}),
                        add(new AuthToken() {{
                            authToken = "vel";
                            type = "error";
                        }}),
                        add(new AuthToken() {{
                            authToken = "deserunt";
                            type = "suscipit";
                        }}),
                    }};
                    features = new String[]{{
                        add("magnam"),
                        add("debitis"),
                    }};
                    password = "ipsa";
                    userData = new org.openapis.openapi.models.shared.UserData[]{{
                        add(new UserData() {{
                            key = "tempora";
                            value = "suscipit";
                        }}),
                        add(new UserData() {{
                            key = "molestiae";
                            value = "minus";
                        }}),
                        add(new UserData() {{
                            key = "placeat";
                            value = "voluptatum";
                        }}),
                        add(new UserData() {{
                            key = "iusto";
                            value = "excepturi";
                        }}),
                    }};
                }};;
                alt = AltEnum.JSON;
                fields = "nisi";
                key = "recusandae";
                oauthToken = "temporibus";
                prettyPrint = false;
                quotaUser = "ab";
                userIp = "quis";
            }};            

            MirrorAccountsInsertResponse res = sdk.accounts.mirrorAccountsInsert(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->