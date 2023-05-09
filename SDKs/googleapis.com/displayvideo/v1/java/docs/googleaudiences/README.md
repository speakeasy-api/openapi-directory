# googleAudiences

### Available Operations

* [displayvideoGoogleAudiencesGet](#displayvideogoogleaudiencesget) - Gets a Google audience.
* [displayvideoGoogleAudiencesList](#displayvideogoogleaudienceslist) - Lists Google audiences. The order is defined by the order_by parameter.

## displayvideoGoogleAudiencesGet

Gets a Google audience.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoGoogleAudiencesGetRequest;
import org.openapis.openapi.models.operations.DisplayvideoGoogleAudiencesGetResponse;
import org.openapis.openapi.models.operations.DisplayvideoGoogleAudiencesGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoGoogleAudiencesGetRequest req = new DisplayvideoGoogleAudiencesGetRequest("vitae") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "asperiores";
                advertiserId = "at";
                alt = AltEnum.PROTO;
                callback = "quam";
                fields = "deleniti";
                key = "rem";
                oauthToken = "vel";
                partnerId = "eos";
                prettyPrint = false;
                quotaUser = "labore";
                uploadType = "sunt";
                uploadProtocol = "blanditiis";
            }};            

            DisplayvideoGoogleAudiencesGetResponse res = sdk.googleAudiences.displayvideoGoogleAudiencesGet(req, new DisplayvideoGoogleAudiencesGetSecurity("iste", "accusamus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleAudience != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoGoogleAudiencesList

Lists Google audiences. The order is defined by the order_by parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoGoogleAudiencesListRequest;
import org.openapis.openapi.models.operations.DisplayvideoGoogleAudiencesListResponse;
import org.openapis.openapi.models.operations.DisplayvideoGoogleAudiencesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoGoogleAudiencesListRequest req = new DisplayvideoGoogleAudiencesListRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "incidunt";
                advertiserId = "labore";
                alt = AltEnum.MEDIA;
                callback = "ducimus";
                fields = "consectetur";
                filter = "sapiente";
                key = "quis";
                oauthToken = "accusantium";
                orderBy = "ratione";
                pageSize = 235813L;
                pageToken = "asperiores";
                partnerId = "architecto";
                prettyPrint = false;
                quotaUser = "sint";
                uploadType = "possimus";
                uploadProtocol = "tempore";
            }};            

            DisplayvideoGoogleAudiencesListResponse res = sdk.googleAudiences.displayvideoGoogleAudiencesList(req, new DisplayvideoGoogleAudiencesListSecurity("asperiores", "quasi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listGoogleAudiencesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
