# users

### Available Operations

* [androidpublisherUsersCreate](#androidpublisheruserscreate) - Grant access for a user to the given developer account.
* [androidpublisherUsersDelete](#androidpublisherusersdelete) - Removes all access for the user to the given developer account.
* [androidpublisherUsersList](#androidpublisheruserslist) - Lists all users with access to a developer account.
* [androidpublisherUsersPatch](#androidpublisheruserspatch) - Updates access for the user to the developer account.

## androidpublisherUsersCreate

Grant access for a user to the given developer account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherUsersCreateRequest;
import org.openapis.openapi.models.operations.AndroidpublisherUsersCreateResponse;
import org.openapis.openapi.models.operations.AndroidpublisherUsersCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.UserDeveloperAccountPermissionsEnum;
import org.openapis.openapi.models.shared.UserInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherUsersCreateRequest req = new AndroidpublisherUsersCreateRequest("at") {{
                dollarXgafv = XgafvEnum.ONE;
                userInput = new UserInput() {{
                    developerAccountPermissions = new org.openapis.openapi.models.shared.UserDeveloperAccountPermissionsEnum[]{{
                        add(UserDeveloperAccountPermissionsEnum.CAN_VIEW_FINANCIAL_DATA_GLOBAL),
                        add(UserDeveloperAccountPermissionsEnum.CAN_SEE_ALL_APPS),
                        add(UserDeveloperAccountPermissionsEnum.CAN_MANAGE_PERMISSIONS_GLOBAL),
                        add(UserDeveloperAccountPermissionsEnum.CAN_VIEW_FINANCIAL_DATA_GLOBAL),
                    }};
                    email = "Tyler10@hotmail.com";
                    expirationTime = "aperiam";
                    name = "Mrs. Christie Halvorson";
                }};;
                accessToken = "numquam";
                alt = AltEnum.PROTO;
                callback = "nobis";
                fields = "ex";
                key = "repellat";
                oauthToken = "quae";
                prettyPrint = false;
                quotaUser = "deleniti";
                uploadType = "expedita";
                uploadProtocol = "hic";
            }};            

            AndroidpublisherUsersCreateResponse res = sdk.users.androidpublisherUsersCreate(req, new AndroidpublisherUsersCreateSecurity("excepturi", "aliquid") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.user != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherUsersDelete

Removes all access for the user to the given developer account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherUsersDeleteRequest;
import org.openapis.openapi.models.operations.AndroidpublisherUsersDeleteResponse;
import org.openapis.openapi.models.operations.AndroidpublisherUsersDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherUsersDeleteRequest req = new AndroidpublisherUsersDeleteRequest("sed") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "similique";
                alt = AltEnum.MEDIA;
                callback = "animi";
                fields = "dolore";
                key = "tenetur";
                oauthToken = "dignissimos";
                prettyPrint = false;
                quotaUser = "esse";
                uploadType = "animi";
                uploadProtocol = "laudantium";
            }};            

            AndroidpublisherUsersDeleteResponse res = sdk.users.androidpublisherUsersDelete(req, new AndroidpublisherUsersDeleteSecurity("esse", "eveniet") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## androidpublisherUsersList

Lists all users with access to a developer account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherUsersListRequest;
import org.openapis.openapi.models.operations.AndroidpublisherUsersListResponse;
import org.openapis.openapi.models.operations.AndroidpublisherUsersListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherUsersListRequest req = new AndroidpublisherUsersListRequest("earum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "officiis";
                alt = AltEnum.JSON;
                callback = "rerum";
                fields = "itaque";
                key = "dignissimos";
                oauthToken = "ipsam";
                pageSize = 131687L;
                pageToken = "impedit";
                prettyPrint = false;
                quotaUser = "aliquid";
                uploadType = "quis";
                uploadProtocol = "facilis";
            }};            

            AndroidpublisherUsersListResponse res = sdk.users.androidpublisherUsersList(req, new AndroidpublisherUsersListSecurity("ipsum", "ut") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listUsersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherUsersPatch

Updates access for the user to the developer account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherUsersPatchRequest;
import org.openapis.openapi.models.operations.AndroidpublisherUsersPatchResponse;
import org.openapis.openapi.models.operations.AndroidpublisherUsersPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.UserDeveloperAccountPermissionsEnum;
import org.openapis.openapi.models.shared.UserInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherUsersPatchRequest req = new AndroidpublisherUsersPatchRequest("quaerat") {{
                dollarXgafv = XgafvEnum.ONE;
                userInput = new UserInput() {{
                    developerAccountPermissions = new org.openapis.openapi.models.shared.UserDeveloperAccountPermissionsEnum[]{{
                        add(UserDeveloperAccountPermissionsEnum.CAN_MANAGE_ORDERS_GLOBAL),
                        add(UserDeveloperAccountPermissionsEnum.CAN_MANAGE_PERMISSIONS_GLOBAL),
                        add(UserDeveloperAccountPermissionsEnum.CAN_MANAGE_DRAFT_APPS_GLOBAL),
                    }};
                    email = "Letitia_Blanda83@hotmail.com";
                    expirationTime = "sint";
                    name = "Dr. Veronica Thompson";
                }};;
                accessToken = "tempora";
                alt = AltEnum.JSON;
                callback = "omnis";
                fields = "illum";
                key = "rem";
                oauthToken = "tenetur";
                prettyPrint = false;
                quotaUser = "deleniti";
                updateMask = "modi";
                uploadType = "earum";
                uploadProtocol = "architecto";
            }};            

            AndroidpublisherUsersPatchResponse res = sdk.users.androidpublisherUsersPatch(req, new AndroidpublisherUsersPatchSecurity("aliquam", "labore") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.user != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
