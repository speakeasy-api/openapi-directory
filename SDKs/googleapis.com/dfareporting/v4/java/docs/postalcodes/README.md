# postalCodes

### Available Operations

* [dfareportingPostalCodesGet](#dfareportingpostalcodesget) - Gets one postal code by ID.
* [dfareportingPostalCodesList](#dfareportingpostalcodeslist) - Retrieves a list of postal codes.

## dfareportingPostalCodesGet

Gets one postal code by ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingPostalCodesGetRequest;
import org.openapis.openapi.models.operations.DfareportingPostalCodesGetResponse;
import org.openapis.openapi.models.operations.DfareportingPostalCodesGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingPostalCodesGetRequest req = new DfareportingPostalCodesGetRequest("tenetur", "nihil") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "iste";
                alt = AltEnum.MEDIA;
                callback = "earum";
                fields = "a";
                key = "repudiandae";
                oauthToken = "eum";
                prettyPrint = false;
                quotaUser = "omnis";
                uploadType = "aliquid";
                uploadProtocol = "blanditiis";
            }};            

            DfareportingPostalCodesGetResponse res = sdk.postalCodes.dfareportingPostalCodesGet(req, new DfareportingPostalCodesGetSecurity("sed", "mollitia") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.postalCode != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingPostalCodesList

Retrieves a list of postal codes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingPostalCodesListRequest;
import org.openapis.openapi.models.operations.DfareportingPostalCodesListResponse;
import org.openapis.openapi.models.operations.DfareportingPostalCodesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingPostalCodesListRequest req = new DfareportingPostalCodesListRequest("minus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "recusandae";
                alt = AltEnum.PROTO;
                callback = "cum";
                fields = "accusantium";
                key = "magnam";
                oauthToken = "reiciendis";
                prettyPrint = false;
                quotaUser = "voluptatum";
                uploadType = "maxime";
                uploadProtocol = "ad";
            }};            

            DfareportingPostalCodesListResponse res = sdk.postalCodes.dfareportingPostalCodesList(req, new DfareportingPostalCodesListSecurity("illo", "ratione") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.postalCodesListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
