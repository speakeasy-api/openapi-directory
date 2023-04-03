<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.AddUserToAccountRequestBodyAccount;
import org.openapis.openapi.models.operations.AddUserToAccountRequestBodyUsersIdentification;
import org.openapis.openapi.models.operations.AddUserToAccountRequestBodyUsers;
import org.openapis.openapi.models.operations.AddUserToAccountRequestBody;
import org.openapis.openapi.models.operations.AddUserToAccountResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AddUserToAccountRequestBody req = new AddUserToAccountRequestBody() {{
                account = new AddUserToAccountRequestBodyAccount() {{
                    accountId = "corrupti";
                    domain = "provident";
                }};
                users = new org.openapis.openapi.models.operations.AddUserToAccountRequestBodyUsers[]{{
                    add(new AddUserToAccountRequestBodyUsers() {{
                        identification = new AddUserToAccountRequestBodyUsersIdentification() {{
                            email = "Leda_Stiedemann@hotmail.com";
                            userId = "vel";
                        }};
                    }}),
                    add(new AddUserToAccountRequestBodyUsers() {{
                        identification = new AddUserToAccountRequestBodyUsersIdentification() {{
                            email = "Luna.Hoppe@yahoo.com";
                            userId = "debitis";
                        }};
                    }}),
                    add(new AddUserToAccountRequestBodyUsers() {{
                        identification = new AddUserToAccountRequestBodyUsersIdentification() {{
                            email = "Vincenzo.Goldner@gmail.com";
                            userId = "minus";
                        }};
                    }}),
                }};
            }}            

            AddUserToAccountResponse res = sdk.accounts.addUserToAccount(req);

            if (res.addUserToAccount201ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->