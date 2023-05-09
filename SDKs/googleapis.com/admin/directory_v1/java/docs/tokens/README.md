# tokens

### Available Operations

* [directoryTokensDelete](#directorytokensdelete) - Deletes all access tokens issued by a user for an application.
* [directoryTokensGet](#directorytokensget) - Gets information about an access token issued by a user.
* [directoryTokensList](#directorytokenslist) - Returns the set of tokens specified user has issued to 3rd party applications.

## directoryTokensDelete

Deletes all access tokens issued by a user for an application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryTokensDeleteRequest;
import org.openapis.openapi.models.operations.DirectoryTokensDeleteResponse;
import org.openapis.openapi.models.operations.DirectoryTokensDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryTokensDeleteRequest req = new DirectoryTokensDeleteRequest("accusantium", "quod") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quos";
                alt = AltEnum.PROTO;
                callback = "maiores";
                fields = "odio";
                key = "provident";
                oauthToken = "sapiente";
                prettyPrint = false;
                quotaUser = "aperiam";
                uploadType = "similique";
                uploadProtocol = "nesciunt";
            }};            

            DirectoryTokensDeleteResponse res = sdk.tokens.directoryTokensDelete(req, new DirectoryTokensDeleteSecurity("provident", "ex") {{
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

## directoryTokensGet

Gets information about an access token issued by a user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryTokensGetRequest;
import org.openapis.openapi.models.operations.DirectoryTokensGetResponse;
import org.openapis.openapi.models.operations.DirectoryTokensGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryTokensGetRequest req = new DirectoryTokensGetRequest("repellendus", "unde") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "impedit";
                alt = AltEnum.JSON;
                callback = "commodi";
                fields = "labore";
                key = "expedita";
                oauthToken = "in";
                prettyPrint = false;
                quotaUser = "quisquam";
                uploadType = "sunt";
                uploadProtocol = "enim";
            }};            

            DirectoryTokensGetResponse res = sdk.tokens.directoryTokensGet(req, new DirectoryTokensGetSecurity("nulla", "maiores") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.token != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## directoryTokensList

Returns the set of tokens specified user has issued to 3rd party applications.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryTokensListRequest;
import org.openapis.openapi.models.operations.DirectoryTokensListResponse;
import org.openapis.openapi.models.operations.DirectoryTokensListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryTokensListRequest req = new DirectoryTokensListRequest("distinctio") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "impedit";
                alt = AltEnum.PROTO;
                callback = "et";
                fields = "quas";
                key = "blanditiis";
                oauthToken = "cum";
                prettyPrint = false;
                quotaUser = "dicta";
                uploadType = "impedit";
                uploadProtocol = "tempora";
            }};            

            DirectoryTokensListResponse res = sdk.tokens.directoryTokensList(req, new DirectoryTokensListSecurity("eveniet", "repudiandae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.tokens != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
