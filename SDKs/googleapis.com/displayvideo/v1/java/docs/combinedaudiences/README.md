# combinedAudiences

### Available Operations

* [displayvideoCombinedAudiencesGet](#displayvideocombinedaudiencesget) - Gets a combined audience.
* [displayvideoCombinedAudiencesList](#displayvideocombinedaudienceslist) - Lists combined audiences. The order is defined by the order_by parameter.

## displayvideoCombinedAudiencesGet

Gets a combined audience.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoCombinedAudiencesGetRequest;
import org.openapis.openapi.models.operations.DisplayvideoCombinedAudiencesGetResponse;
import org.openapis.openapi.models.operations.DisplayvideoCombinedAudiencesGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoCombinedAudiencesGetRequest req = new DisplayvideoCombinedAudiencesGetRequest("amet") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "vel";
                advertiserId = "necessitatibus";
                alt = AltEnum.MEDIA;
                callback = "nesciunt";
                fields = "corrupti";
                key = "cupiditate";
                oauthToken = "voluptatibus";
                partnerId = "ullam";
                prettyPrint = false;
                quotaUser = "dolorum";
                uploadType = "soluta";
                uploadProtocol = "cum";
            }};            

            DisplayvideoCombinedAudiencesGetResponse res = sdk.combinedAudiences.displayvideoCombinedAudiencesGet(req, new DisplayvideoCombinedAudiencesGetSecurity("in", "delectus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.combinedAudience != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoCombinedAudiencesList

Lists combined audiences. The order is defined by the order_by parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoCombinedAudiencesListRequest;
import org.openapis.openapi.models.operations.DisplayvideoCombinedAudiencesListResponse;
import org.openapis.openapi.models.operations.DisplayvideoCombinedAudiencesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoCombinedAudiencesListRequest req = new DisplayvideoCombinedAudiencesListRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "commodi";
                advertiserId = "fugit";
                alt = AltEnum.MEDIA;
                callback = "ullam";
                fields = "doloremque";
                filter = "est";
                key = "qui";
                oauthToken = "praesentium";
                orderBy = "adipisci";
                pageSize = 519132L;
                pageToken = "qui";
                partnerId = "deserunt";
                prettyPrint = false;
                quotaUser = "eligendi";
                uploadType = "incidunt";
                uploadProtocol = "deleniti";
            }};            

            DisplayvideoCombinedAudiencesListResponse res = sdk.combinedAudiences.displayvideoCombinedAudiencesList(req, new DisplayvideoCombinedAudiencesListSecurity("dolor", "est") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listCombinedAudiencesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
