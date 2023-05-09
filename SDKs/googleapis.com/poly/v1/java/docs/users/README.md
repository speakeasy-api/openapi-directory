# users

### Available Operations

* [polyUsersAssetsList](#polyusersassetslist) - Lists assets authored by the given user. Only the value 'me', representing the currently-authenticated user, is supported. May include assets with an access level of PRIVATE or UNLISTED and assets which are All Rights Reserved for the currently-authenticated user.
* [polyUsersLikedassetsList](#polyuserslikedassetslist) - Lists assets that the user has liked. Only the value 'me', representing the currently-authenticated user, is supported. May include assets with an access level of UNLISTED.

## polyUsersAssetsList

Lists assets authored by the given user. Only the value 'me', representing the currently-authenticated user, is supported. May include assets with an access level of PRIVATE or UNLISTED and assets which are All Rights Reserved for the currently-authenticated user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PolyUsersAssetsListRequest;
import org.openapis.openapi.models.operations.PolyUsersAssetsListResponse;
import org.openapis.openapi.models.operations.PolyUsersAssetsListVisibilityEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PolyUsersAssetsListRequest req = new PolyUsersAssetsListRequest("at") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "molestiae";
                alt = AltEnum.PROTO;
                callback = "quod";
                fields = "esse";
                format = "totam";
                key = "porro";
                oauthToken = "dolorum";
                orderBy = "dicta";
                pageSize = 720633L;
                pageToken = "officia";
                prettyPrint = false;
                quotaUser = "occaecati";
                uploadType = "fugit";
                uploadProtocol = "deleniti";
                visibility = PolyUsersAssetsListVisibilityEnum.PRIVATE_;
            }};            

            PolyUsersAssetsListResponse res = sdk.users.polyUsersAssetsList(req);

            if (res.listUserAssetsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## polyUsersLikedassetsList

Lists assets that the user has liked. Only the value 'me', representing the currently-authenticated user, is supported. May include assets with an access level of UNLISTED.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PolyUsersLikedassetsListRequest;
import org.openapis.openapi.models.operations.PolyUsersLikedassetsListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PolyUsersLikedassetsListRequest req = new PolyUsersLikedassetsListRequest("optio") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "beatae";
                alt = AltEnum.MEDIA;
                callback = "molestiae";
                fields = "modi";
                format = "qui";
                key = "impedit";
                oauthToken = "cum";
                orderBy = "esse";
                pageSize = 216550L;
                pageToken = "excepturi";
                prettyPrint = false;
                quotaUser = "aspernatur";
                uploadType = "perferendis";
                uploadProtocol = "ad";
            }};            

            PolyUsersLikedassetsListResponse res = sdk.users.polyUsersLikedassetsList(req);

            if (res.listLikedAssetsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
