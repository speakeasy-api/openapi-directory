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

            DisplayvideoCombinedAudiencesGetRequest req = new DisplayvideoCombinedAudiencesGetRequest("cupiditate") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quasi";
                advertiserId = "maiores";
                alt = AltEnum.JSON;
                callback = "aliquid";
                fields = "laudantium";
                key = "unde";
                oauthToken = "corrupti";
                partnerId = "quae";
                prettyPrint = false;
                quotaUser = "facere";
                uploadType = "ea";
                uploadProtocol = "libero";
            }};            

            DisplayvideoCombinedAudiencesGetResponse res = sdk.combinedAudiences.displayvideoCombinedAudiencesGet(req, new DisplayvideoCombinedAudiencesGetSecurity("nam", "amet") {{
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
                accessToken = "minus";
                advertiserId = "hic";
                alt = AltEnum.MEDIA;
                callback = "fuga";
                fields = "consectetur";
                filter = "labore";
                key = "laudantium";
                oauthToken = "cumque";
                orderBy = "adipisci";
                pageSize = 83164L;
                pageToken = "nam";
                partnerId = "voluptatibus";
                prettyPrint = false;
                quotaUser = "magnam";
                uploadType = "aperiam";
                uploadProtocol = "ducimus";
            }};            

            DisplayvideoCombinedAudiencesListResponse res = sdk.combinedAudiences.displayvideoCombinedAudiencesList(req, new DisplayvideoCombinedAudiencesListSecurity("itaque", "necessitatibus") {{
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
