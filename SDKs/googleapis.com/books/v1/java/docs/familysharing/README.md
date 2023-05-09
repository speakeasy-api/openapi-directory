# familysharing

### Available Operations

* [booksFamilysharingGetFamilyInfo](#booksfamilysharinggetfamilyinfo) - Gets information regarding the family that the user is part of.
* [booksFamilysharingShare](#booksfamilysharingshare) - Initiates sharing of the content with the user's family. Empty response indicates success.
* [booksFamilysharingUnshare](#booksfamilysharingunshare) - Initiates revoking content that has already been shared with the user's family. Empty response indicates success.

## booksFamilysharingGetFamilyInfo

Gets information regarding the family that the user is part of.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BooksFamilysharingGetFamilyInfoRequest;
import org.openapis.openapi.models.operations.BooksFamilysharingGetFamilyInfoResponse;
import org.openapis.openapi.models.operations.BooksFamilysharingGetFamilyInfoSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BooksFamilysharingGetFamilyInfoRequest req = new BooksFamilysharingGetFamilyInfoRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "animi";
                alt = AltEnum.JSON;
                callback = "odit";
                fields = "quo";
                key = "sequi";
                oauthToken = "tenetur";
                prettyPrint = false;
                quotaUser = "ipsam";
                source = "id";
                uploadType = "possimus";
                uploadProtocol = "aut";
            }};            

            BooksFamilysharingGetFamilyInfoResponse res = sdk.familysharing.booksFamilysharingGetFamilyInfo(req, new BooksFamilysharingGetFamilyInfoSecurity("quasi", "error") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.familyInfo != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## booksFamilysharingShare

Initiates sharing of the content with the user's family. Empty response indicates success.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BooksFamilysharingShareRequest;
import org.openapis.openapi.models.operations.BooksFamilysharingShareResponse;
import org.openapis.openapi.models.operations.BooksFamilysharingShareSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BooksFamilysharingShareRequest req = new BooksFamilysharingShareRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "laborum";
                alt = AltEnum.JSON;
                callback = "reiciendis";
                docId = "voluptatibus";
                fields = "vero";
                key = "nihil";
                oauthToken = "praesentium";
                prettyPrint = false;
                quotaUser = "voluptatibus";
                source = "ipsa";
                uploadType = "omnis";
                uploadProtocol = "voluptate";
                volumeId = "cum";
            }};            

            BooksFamilysharingShareResponse res = sdk.familysharing.booksFamilysharingShare(req, new BooksFamilysharingShareSecurity("perferendis", "doloremque") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## booksFamilysharingUnshare

Initiates revoking content that has already been shared with the user's family. Empty response indicates success.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BooksFamilysharingUnshareRequest;
import org.openapis.openapi.models.operations.BooksFamilysharingUnshareResponse;
import org.openapis.openapi.models.operations.BooksFamilysharingUnshareSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BooksFamilysharingUnshareRequest req = new BooksFamilysharingUnshareRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ut";
                alt = AltEnum.PROTO;
                callback = "dicta";
                docId = "corporis";
                fields = "dolore";
                key = "iusto";
                oauthToken = "dicta";
                prettyPrint = false;
                quotaUser = "harum";
                source = "enim";
                uploadType = "accusamus";
                uploadProtocol = "commodi";
                volumeId = "repudiandae";
            }};            

            BooksFamilysharingUnshareResponse res = sdk.familysharing.booksFamilysharingUnshare(req, new BooksFamilysharingUnshareSecurity("quae", "ipsum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
