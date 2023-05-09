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

            DfareportingPostalCodesGetRequest req = new DfareportingPostalCodesGetRequest("quidem", "repellat") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "amet";
                alt = AltEnum.JSON;
                callback = "pariatur";
                fields = "voluptatibus";
                key = "vero";
                oauthToken = "provident";
                prettyPrint = false;
                quotaUser = "iure";
                uploadType = "incidunt";
                uploadProtocol = "repellat";
            }};            

            DfareportingPostalCodesGetResponse res = sdk.postalCodes.dfareportingPostalCodesGet(req, new DfareportingPostalCodesGetSecurity("similique", "ut") {{
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

            DfareportingPostalCodesListRequest req = new DfareportingPostalCodesListRequest("tempore") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "voluptates";
                alt = AltEnum.MEDIA;
                callback = "placeat";
                fields = "consequatur";
                key = "natus";
                oauthToken = "molestiae";
                prettyPrint = false;
                quotaUser = "accusamus";
                uploadType = "temporibus";
                uploadProtocol = "animi";
            }};            

            DfareportingPostalCodesListResponse res = sdk.postalCodes.dfareportingPostalCodesList(req, new DfareportingPostalCodesListSecurity("autem", "fugit") {{
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
