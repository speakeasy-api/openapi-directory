# accounts

### Available Operations

* [mirrorAccountsInsert](#mirroraccountsinsert) - Inserts a new account for a user

## mirrorAccountsInsert

Inserts a new account for a user

### Example Usage

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

            MirrorAccountsInsertRequest req = new MirrorAccountsInsertRequest("veritatis", "deserunt", "perferendis") {{
                account = new Account() {{
                    authTokens = new org.openapis.openapi.models.shared.AuthToken[]{{
                        add(new AuthToken() {{
                            authToken = "repellendus";
                            type = "sapiente";
                        }}),
                        add(new AuthToken() {{
                            authToken = "quo";
                            type = "odit";
                        }}),
                    }};
                    features = new String[]{{
                        add("at"),
                        add("maiores"),
                        add("molestiae"),
                        add("quod"),
                    }};
                    password = "quod";
                    userData = new org.openapis.openapi.models.shared.UserData[]{{
                        add(new UserData() {{
                            key = "totam";
                            value = "porro";
                        }}),
                        add(new UserData() {{
                            key = "dolorum";
                            value = "dicta";
                        }}),
                    }};
                }};;
                alt = AltEnum.JSON;
                fields = "nam";
                key = "officia";
                oauthToken = "occaecati";
                prettyPrint = false;
                quotaUser = "fugit";
                userIp = "deleniti";
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
