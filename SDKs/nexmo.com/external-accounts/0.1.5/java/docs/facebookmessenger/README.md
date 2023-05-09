# facebookMessenger

## Overview

Managing your [Facebook Messenger](https://developer.nexmo.com/messages/concepts/facebook) account

### Available Operations

* [createMessengerAccount](#createmessengeraccount) - Create a Messenger account
* [deleteMessengerAccount](#deletemessengeraccount) - Delete a Messenger account
* [getMessengerAccount](#getmessengeraccount) - Retrieve a Messenger account
* [updateMessengerAccount](#updatemessengeraccount) - Update a Messenger account

## createMessengerAccount

Create a Messenger account

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateMessengerAccountRequestBody;
import org.openapis.openapi.models.operations.CreateMessengerAccountResponse;
import org.openapis.openapi.models.operations.CreateMessengerAccountSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateMessengerAccountRequestBody req = new CreateMessengerAccountRequestBody("myAccessToken", "12345678") {{
                applications = new String[]{{
                    add("delectus"),
                }};
                name = "optionalName";
            }};            

            CreateMessengerAccountResponse res = sdk.facebookMessenger.createMessengerAccount(req, new CreateMessengerAccountSecurity() {{
                basicAuth = new SchemeBasicAuth("tempora", "suscipit") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }};
            }});

            if (res.messengerAccountResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteMessengerAccount

Delete a Messenger account

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteMessengerAccountRequest;
import org.openapis.openapi.models.operations.DeleteMessengerAccountResponse;
import org.openapis.openapi.models.operations.DeleteMessengerAccountSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteMessengerAccountRequest req = new DeleteMessengerAccountRequest("molestiae");            

            DeleteMessengerAccountResponse res = sdk.facebookMessenger.deleteMessengerAccount(req, new DeleteMessengerAccountSecurity() {{
                basicAuth = new SchemeBasicAuth("minus", "placeat") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }};
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMessengerAccount

Retrieve a Messenger account

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMessengerAccountRequest;
import org.openapis.openapi.models.operations.GetMessengerAccountResponse;
import org.openapis.openapi.models.operations.GetMessengerAccountSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMessengerAccountRequest req = new GetMessengerAccountRequest("voluptatum");            

            GetMessengerAccountResponse res = sdk.facebookMessenger.getMessengerAccount(req, new GetMessengerAccountSecurity() {{
                basicAuth = new SchemeBasicAuth("iusto", "excepturi") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }};
            }});

            if (res.messengerAccountResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateMessengerAccount

Update a Messenger account

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateMessengerAccountRequest;
import org.openapis.openapi.models.operations.UpdateMessengerAccountRequestBody;
import org.openapis.openapi.models.operations.UpdateMessengerAccountResponse;
import org.openapis.openapi.models.operations.UpdateMessengerAccountSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateMessengerAccountRequest req = new UpdateMessengerAccountRequest(                new UpdateMessengerAccountRequestBody() {{
                                accessToken = "updatedAccessToken";
                                applications = new String[]{{
                                    add("recusandae"),
                                    add("temporibus"),
                                }};
                                name = "newName";
                            }};, "ab");            

            UpdateMessengerAccountResponse res = sdk.facebookMessenger.updateMessengerAccount(req, new UpdateMessengerAccountSecurity() {{
                basicAuth = new SchemeBasicAuth("quis", "veritatis") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }};
            }});

            if (res.updateMessengerAccount200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
