# pubprofiles

### Available Operations

* [adexchangebuyerPubprofilesList](#adexchangebuyerpubprofileslist) - Gets the requested publisher profile(s) by publisher accountId.

## adexchangebuyerPubprofilesList

Gets the requested publisher profile(s) by publisher accountId.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdexchangebuyerPubprofilesListRequest;
import org.openapis.openapi.models.operations.AdexchangebuyerPubprofilesListResponse;
import org.openapis.openapi.models.operations.AdexchangebuyerPubprofilesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdexchangebuyerPubprofilesListRequest req = new AdexchangebuyerPubprofilesListRequest(42364L) {{
                alt = AltEnum.JSON;
                fields = "sed";
                key = "amet";
                oauthToken = "rerum";
                prettyPrint = false;
                quotaUser = "in";
                userIp = "nostrum";
            }};            

            AdexchangebuyerPubprofilesListResponse res = sdk.pubprofiles.adexchangebuyerPubprofilesList(req, new AdexchangebuyerPubprofilesListSecurity("temporibus", "ratione") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.getPublisherProfilesByAccountIdResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
