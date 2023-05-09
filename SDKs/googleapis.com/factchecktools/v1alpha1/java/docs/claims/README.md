# claims

### Available Operations

* [factchecktoolsClaimsSearch](#factchecktoolsclaimssearch) - Search through fact-checked claims.

## factchecktoolsClaimsSearch

Search through fact-checked claims.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FactchecktoolsClaimsSearchRequest;
import org.openapis.openapi.models.operations.FactchecktoolsClaimsSearchResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FactchecktoolsClaimsSearchRequest req = new FactchecktoolsClaimsSearchRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "suscipit";
                alt = AltEnum.MEDIA;
                callback = "minus";
                fields = "placeat";
                key = "voluptatum";
                languageCode = "iusto";
                maxAgeDays = 568045L;
                oauthToken = "nisi";
                offset = 925597L;
                pageSize = 836079L;
                pageToken = "ab";
                prettyPrint = false;
                query = "quis";
                quotaUser = "veritatis";
                reviewPublisherSiteFilter = "deserunt";
                uploadType = "perferendis";
                uploadProtocol = "ipsam";
            }};            

            FactchecktoolsClaimsSearchResponse res = sdk.claims.factchecktoolsClaimsSearch(req);

            if (res.googleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
