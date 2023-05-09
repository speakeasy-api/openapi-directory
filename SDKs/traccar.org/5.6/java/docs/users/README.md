# users

## Overview

User management

### Available Operations

* [deleteUsersId](#deleteusersid) - Delete a User
* [getUsers](#getusers) - Fetch a list of Users
* [postUsers](#postusers) - Create a User
* [putUsersId](#putusersid) - Update a User

## deleteUsersId

Delete a User

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteUsersIdRequest;
import org.openapis.openapi.models.operations.DeleteUsersIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolore", "quibusdam") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            DeleteUsersIdRequest req = new DeleteUsersIdRequest(848944L);            

            DeleteUsersIdResponse res = sdk.users.deleteUsersId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsers

Fetch a list of Users

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersRequest;
import org.openapis.openapi.models.operations.GetUsersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sequi", "natus") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetUsersRequest req = new GetUsersRequest() {{
                userId = "impedit";
            }};            

            GetUsersResponse res = sdk.users.getUsers(req);

            if (res.users != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUsers

Create a User

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostUsersResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.User;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut", "voluptatibus") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.User req = new User() {{
                administrator = false;
                attributes = new java.util.HashMap<String, Object>() {{
                    put("nulla", "fugit");
                    put("porro", "maiores");
                }};
                coordinateFormat = "doloribus";
                deviceLimit = 478370L;
                deviceReadonly = false;
                disabled = false;
                email = "Jess.Abernathy@hotmail.com";
                expirationTime = OffsetDateTime.parse("2022-08-04T04:05:19.236Z");
                id = 136900L;
                latitude = 4282.24;
                limitCommands = false;
                longitude = 8221.18;
                map = "magnam";
                name = "Mrs. Vicki Langosh";
                password = "quasi";
                phone = "1-859-497-9473 x330";
                poiLayer = "magnam";
                readonly = false;
                twelveHourFormat = false;
                userLimit = 407241L;
                zoom = 775220L;
            }};            

            PostUsersResponse res = sdk.users.postUsers(req);

            if (res.user != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putUsersId

Update a User

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutUsersIdRequest;
import org.openapis.openapi.models.operations.PutUsersIdResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.User;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consectetur", "recusandae") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            PutUsersIdRequest req = new PutUsersIdRequest(                new User() {{
                                administrator = false;
                                attributes = new java.util.HashMap<String, Object>() {{
                                    put("minima", "eaque");
                                }};
                                coordinateFormat = "a";
                                deviceLimit = 725595L;
                                deviceReadonly = false;
                                disabled = false;
                                email = "Aditya.Lesch14@gmail.com";
                                expirationTime = OffsetDateTime.parse("2022-10-05T22:09:33.495Z");
                                id = 250622L;
                                latitude = 896.03;
                                limitCommands = false;
                                longitude = 6774.12;
                                map = "laborum";
                                name = "Lee Kemmer";
                                password = "quas";
                                phone = "(837) 222-1504 x34244";
                                poiLayer = "rem";
                                readonly = false;
                                twelveHourFormat = false;
                                userLimit = 683282L;
                                zoom = 442015L;
                            }};, 695626L);            

            PutUsersIdResponse res = sdk.users.putUsersId(req);

            if (res.user != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
