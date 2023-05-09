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

            DisplayvideoGoogleAudiencesGetRequest req = new DisplayvideoGoogleAudiencesGetRequest("incidunt") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "nemo";
                advertiserId = "est";
                alt = AltEnum.PROTO;
                callback = "maxime";
                fields = "delectus";
                key = "laboriosam";
                oauthToken = "laboriosam";
                partnerId = "quam";
                prettyPrint = false;
                quotaUser = "fuga";
                uploadType = "officia";
                uploadProtocol = "repellat";
            }};            

            DisplayvideoGoogleAudiencesGetResponse res = sdk.googleAudiences.displayvideoGoogleAudiencesGet(req, new DisplayvideoGoogleAudiencesGetSecurity("cupiditate", "soluta") {{
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
                accessToken = "culpa";
                advertiserId = "fugiat";
                alt = AltEnum.JSON;
                callback = "atque";
                fields = "ad";
                filter = "sapiente";
                key = "voluptates";
                oauthToken = "ut";
                orderBy = "nesciunt";
                pageSize = 66756L;
                pageToken = "quibusdam";
                partnerId = "suscipit";
                prettyPrint = false;
                quotaUser = "quidem";
                uploadType = "delectus";
                uploadProtocol = "nemo";
            }};            

            DisplayvideoGoogleAudiencesListResponse res = sdk.googleAudiences.displayvideoGoogleAudiencesList(req, new DisplayvideoGoogleAudiencesListSecurity("cumque", "voluptatum") {{
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
