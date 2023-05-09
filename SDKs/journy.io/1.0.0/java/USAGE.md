<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddUserToAccountRequestBody;
import org.openapis.openapi.models.operations.AddUserToAccountRequestBodyAccount;
import org.openapis.openapi.models.operations.AddUserToAccountRequestBodyUsers;
import org.openapis.openapi.models.operations.AddUserToAccountRequestBodyUsersIdentification;
import org.openapis.openapi.models.operations.AddUserToAccountResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AddUserToAccountRequestBody req = new AddUserToAccountRequestBody(                new AddUserToAccountRequestBodyAccount() {{
                                accountId = "corrupti";
                                domain = "provident";
                            }};,                 new org.openapis.openapi.models.operations.AddUserToAccountRequestBodyUsers[]{{
                                add(new AddUserToAccountRequestBodyUsers(                new AddUserToAccountRequestBodyUsersIdentification() {{
                                                    email = "Luna.Hoppe@yahoo.com";
                                                    userId = "debitis";
                                                }};) {{
                                    identification = new AddUserToAccountRequestBodyUsersIdentification() {{
                                        email = "Leda_Stiedemann@hotmail.com";
                                        userId = "vel";
                                    }};
                                }}),
                                add(new AddUserToAccountRequestBodyUsers(                new AddUserToAccountRequestBodyUsersIdentification() {{
                                                    email = "Junior.Kshlerin@hotmail.com";
                                                    userId = "recusandae";
                                                }};) {{
                                    identification = new AddUserToAccountRequestBodyUsersIdentification() {{
                                        email = "Vincenzo.Goldner@gmail.com";
                                        userId = "minus";
                                    }};
                                }}),
                                add(new AddUserToAccountRequestBodyUsers(                new AddUserToAccountRequestBodyUsersIdentification() {{
                                                    email = "Rita.Will87@yahoo.com";
                                                    userId = "at";
                                                }};) {{
                                    identification = new AddUserToAccountRequestBodyUsersIdentification() {{
                                        email = "Antonetta64@hotmail.com";
                                        userId = "perferendis";
                                    }};
                                }}),
                            }});            

            AddUserToAccountResponse res = sdk.accounts.addUserToAccount(req);

            if (res.addUserToAccount201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->