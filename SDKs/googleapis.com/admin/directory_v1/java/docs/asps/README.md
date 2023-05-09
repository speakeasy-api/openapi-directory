# asps

### Available Operations

* [directoryAspsDelete](#directoryaspsdelete) - Deletes an ASP issued by a user.
* [directoryAspsGet](#directoryaspsget) - Gets information about an ASP issued by a user.
* [directoryAspsList](#directoryaspslist) - Lists the ASPs issued by a user.

## directoryAspsDelete

Deletes an ASP issued by a user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryAspsDeleteRequest;
import org.openapis.openapi.models.operations.DirectoryAspsDeleteResponse;
import org.openapis.openapi.models.operations.DirectoryAspsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryAspsDeleteRequest req = new DirectoryAspsDeleteRequest(891773L, "ipsa") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "tempora";
                alt = AltEnum.MEDIA;
                callback = "molestiae";
                fields = "minus";
                key = "placeat";
                oauthToken = "voluptatum";
                prettyPrint = false;
                quotaUser = "iusto";
                uploadType = "excepturi";
                uploadProtocol = "nisi";
            }};            

            DirectoryAspsDeleteResponse res = sdk.asps.directoryAspsDelete(req, new DirectoryAspsDeleteSecurity("recusandae", "temporibus") {{
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

## directoryAspsGet

Gets information about an ASP issued by a user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryAspsGetRequest;
import org.openapis.openapi.models.operations.DirectoryAspsGetResponse;
import org.openapis.openapi.models.operations.DirectoryAspsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryAspsGetRequest req = new DirectoryAspsGetRequest(71036L, "quis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "deserunt";
                alt = AltEnum.JSON;
                callback = "ipsam";
                fields = "repellendus";
                key = "sapiente";
                oauthToken = "quo";
                prettyPrint = false;
                quotaUser = "odit";
                uploadType = "at";
                uploadProtocol = "at";
            }};            

            DirectoryAspsGetResponse res = sdk.asps.directoryAspsGet(req, new DirectoryAspsGetSecurity("maiores", "molestiae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.asp != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## directoryAspsList

Lists the ASPs issued by a user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryAspsListRequest;
import org.openapis.openapi.models.operations.DirectoryAspsListResponse;
import org.openapis.openapi.models.operations.DirectoryAspsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryAspsListRequest req = new DirectoryAspsListRequest("quod") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "esse";
                alt = AltEnum.MEDIA;
                callback = "porro";
                fields = "dolorum";
                key = "dicta";
                oauthToken = "nam";
                prettyPrint = false;
                quotaUser = "officia";
                uploadType = "occaecati";
                uploadProtocol = "fugit";
            }};            

            DirectoryAspsListResponse res = sdk.asps.directoryAspsList(req, new DirectoryAspsListSecurity("deleniti", "hic") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.asps != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
