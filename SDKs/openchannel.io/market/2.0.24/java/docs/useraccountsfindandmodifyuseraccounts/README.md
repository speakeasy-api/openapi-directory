# userAccountsFindAndModifyUserAccounts

### Available Operations

* [deleteUserAccountsUserAccountId](#deleteuseraccountsuseraccountid) - Removes the user account
* [getUserAccounts](#getuseraccounts) - Returns a paginated list of userAccounts
* [getUserAccountsUserAccountId](#getuseraccountsuseraccountid) - Returns a single user account
* [patchUserAccountsUserAccountId](#patchuseraccountsuseraccountid) - Updates the user account fields
* [postUserAccountsUserAccountId](#postuseraccountsuseraccountid) - Updates the user account or adds the user account if it doesn't exist

## deleteUserAccountsUserAccountId

Removes the user account

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteUserAccountsUserAccountIdRequest;
import org.openapis.openapi.models.operations.DeleteUserAccountsUserAccountIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sit", "fugiat") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            DeleteUserAccountsUserAccountIdRequest req = new DeleteUserAccountsUserAccountIdRequest("ab");            

            DeleteUserAccountsUserAccountIdResponse res = sdk.userAccountsFindAndModifyUserAccounts.deleteUserAccountsUserAccountId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUserAccounts

- Results are paginated and the default is value is 1000 if no limit is provided


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUserAccountsRequest;
import org.openapis.openapi.models.operations.GetUserAccountsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("soluta", "dolorum") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetUserAccountsRequest req = new GetUserAccountsRequest() {{
                limit = 478596L;
                pageNumber = 453697L;
                query = "dolorum";
                sort = "deleniti";
            }};            

            GetUserAccountsResponse res = sdk.userAccountsFindAndModifyUserAccounts.getUserAccounts(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUserAccountsUserAccountId

Returns a single user account

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUserAccountsUserAccountIdRequest;
import org.openapis.openapi.models.operations.GetUserAccountsUserAccountIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis", "necessitatibus") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetUserAccountsUserAccountIdRequest req = new GetUserAccountsUserAccountIdRequest("distinctio");            

            GetUserAccountsUserAccountIdResponse res = sdk.userAccountsFindAndModifyUserAccounts.getUserAccountsUserAccountId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchUserAccountsUserAccountId

Updates the user account fields

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchUserAccountsUserAccountIdRequest;
import org.openapis.openapi.models.operations.PatchUserAccountsUserAccountIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("asperiores", "nihil") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            PatchUserAccountsUserAccountIdRequest req = new PatchUserAccountsUserAccountIdRequest("ipsum", "voluptate") {{
                customData = "id";
                email = "Diamond22@hotmail.com";
                name = "Tomas Hammes";
            }};            

            PatchUserAccountsUserAccountIdResponse res = sdk.userAccountsFindAndModifyUserAccounts.patchUserAccountsUserAccountId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUserAccountsUserAccountId

Updates the user account or adds the user account if it doesn't exist

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostUserAccountsUserAccountIdRequest;
import org.openapis.openapi.models.operations.PostUserAccountsUserAccountIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt", "provident") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            PostUserAccountsUserAccountIdRequest req = new PostUserAccountsUserAccountIdRequest("minima", "repellendus") {{
                customData = "totam";
                email = "Aaliyah27@yahoo.com";
                name = "Bernadette Torp";
            }};            

            PostUserAccountsUserAccountIdResponse res = sdk.userAccountsFindAndModifyUserAccounts.postUserAccountsUserAccountId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
