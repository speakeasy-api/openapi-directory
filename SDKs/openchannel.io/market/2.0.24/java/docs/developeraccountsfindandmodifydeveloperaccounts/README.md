# developerAccountsFindAndModifyDeveloperAccounts

### Available Operations

* [deleteDeveloperAccountsDeveloperAccountId](#deletedeveloperaccountsdeveloperaccountid) - Removes the developer account
* [getDeveloperAccounts](#getdeveloperaccounts) - Returns a paginated list of developerAccounts
* [getDeveloperAccountsDeveloperAccountId](#getdeveloperaccountsdeveloperaccountid) - Returns a single developer account
* [patchDeveloperAccountsDeveloperAccountId](#patchdeveloperaccountsdeveloperaccountid) - Updates the developer account fields
* [postDeveloperAccountsDeveloperAccountId](#postdeveloperaccountsdeveloperaccountid) - Updates the developer account or adds the developer account if it doesn't exist

## deleteDeveloperAccountsDeveloperAccountId

Removes the developer account

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDeveloperAccountsDeveloperAccountIdRequest;
import org.openapis.openapi.models.operations.DeleteDeveloperAccountsDeveloperAccountIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("possimus", "aut") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            DeleteDeveloperAccountsDeveloperAccountIdRequest req = new DeleteDeveloperAccountsDeveloperAccountIdRequest("quasi");            

            DeleteDeveloperAccountsDeveloperAccountIdResponse res = sdk.developerAccountsFindAndModifyDeveloperAccounts.deleteDeveloperAccountsDeveloperAccountId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeveloperAccounts

- Results are paginated and the default is value is 1000 if no limit is provided


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeveloperAccountsRequest;
import org.openapis.openapi.models.operations.GetDeveloperAccountsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error", "temporibus") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetDeveloperAccountsRequest req = new GetDeveloperAccountsRequest() {{
                limit = 673660L;
                pageNumber = 96098L;
                query = "reiciendis";
                sort = "voluptatibus";
            }};            

            GetDeveloperAccountsResponse res = sdk.developerAccountsFindAndModifyDeveloperAccounts.getDeveloperAccounts(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeveloperAccountsDeveloperAccountId

Returns a single developer account

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeveloperAccountsDeveloperAccountIdRequest;
import org.openapis.openapi.models.operations.GetDeveloperAccountsDeveloperAccountIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vero", "nihil") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetDeveloperAccountsDeveloperAccountIdRequest req = new GetDeveloperAccountsDeveloperAccountIdRequest("praesentium");            

            GetDeveloperAccountsDeveloperAccountIdResponse res = sdk.developerAccountsFindAndModifyDeveloperAccounts.getDeveloperAccountsDeveloperAccountId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchDeveloperAccountsDeveloperAccountId

Updates the developer account fields

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchDeveloperAccountsDeveloperAccountIdRequest;
import org.openapis.openapi.models.operations.PatchDeveloperAccountsDeveloperAccountIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus", "ipsa") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            PatchDeveloperAccountsDeveloperAccountIdRequest req = new PatchDeveloperAccountsDeveloperAccountIdRequest("omnis", "voluptate") {{
                customData = "cum";
                email = "Alison97@gmail.com";
                name = "Stacy Gulgowski MD";
            }};            

            PatchDeveloperAccountsDeveloperAccountIdResponse res = sdk.developerAccountsFindAndModifyDeveloperAccounts.patchDeveloperAccountsDeveloperAccountId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeveloperAccountsDeveloperAccountId

Updates the developer account or adds the developer account if it doesn't exist

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostDeveloperAccountsDeveloperAccountIdRequest;
import org.openapis.openapi.models.operations.PostDeveloperAccountsDeveloperAccountIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim", "accusamus") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            PostDeveloperAccountsDeveloperAccountIdRequest req = new PostDeveloperAccountsDeveloperAccountIdRequest("commodi", "repudiandae") {{
                customData = "quae";
                email = "Mathilde_Mann@gmail.com";
                name = "Irma Ledner DVM";
            }};            

            PostDeveloperAccountsDeveloperAccountIdResponse res = sdk.developerAccountsFindAndModifyDeveloperAccounts.postDeveloperAccountsDeveloperAccountId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
