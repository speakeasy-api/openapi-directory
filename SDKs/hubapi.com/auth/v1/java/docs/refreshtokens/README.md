# refreshTokens

### Available Operations

* [deleteOauthV1RefreshTokensTokenArchive](#deleteoauthv1refreshtokenstokenarchive)
* [getOauthV1RefreshTokensTokenGet](#getoauthv1refreshtokenstokenget)

## deleteOauthV1RefreshTokensTokenArchive

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteOauthV1RefreshTokensTokenArchiveRequest;
import org.openapis.openapi.models.operations.DeleteOauthV1RefreshTokensTokenArchiveResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteOauthV1RefreshTokensTokenArchiveRequest req = new DeleteOauthV1RefreshTokensTokenArchiveRequest("distinctio");            

            DeleteOauthV1RefreshTokensTokenArchiveResponse res = sdk.refreshTokens.deleteOauthV1RefreshTokensTokenArchive(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOauthV1RefreshTokensTokenGet

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOauthV1RefreshTokensTokenGetRequest;
import org.openapis.openapi.models.operations.GetOauthV1RefreshTokensTokenGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetOauthV1RefreshTokensTokenGetRequest req = new GetOauthV1RefreshTokensTokenGetRequest("quibusdam");            

            GetOauthV1RefreshTokensTokenGetResponse res = sdk.refreshTokens.getOauthV1RefreshTokensTokenGet(req);

            if (res.refreshTokenInfoResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
