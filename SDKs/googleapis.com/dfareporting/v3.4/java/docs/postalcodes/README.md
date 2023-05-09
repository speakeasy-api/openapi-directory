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

            DfareportingPostalCodesGetRequest req = new DfareportingPostalCodesGetRequest("est", "nam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "repellat";
                alt = AltEnum.MEDIA;
                callback = "asperiores";
                fields = "optio";
                key = "eos";
                oauthToken = "impedit";
                prettyPrint = false;
                quotaUser = "minus";
                uploadType = "facilis";
                uploadProtocol = "id";
            }};            

            DfareportingPostalCodesGetResponse res = sdk.postalCodes.dfareportingPostalCodesGet(req, new DfareportingPostalCodesGetSecurity("numquam", "libero") {{
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

            DfareportingPostalCodesListRequest req = new DfareportingPostalCodesListRequest("recusandae") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "aperiam";
                alt = AltEnum.PROTO;
                callback = "reiciendis";
                fields = "nisi";
                key = "voluptatum";
                oauthToken = "earum";
                prettyPrint = false;
                quotaUser = "mollitia";
                uploadType = "vero";
                uploadProtocol = "repellendus";
            }};            

            DfareportingPostalCodesListResponse res = sdk.postalCodes.dfareportingPostalCodesList(req, new DfareportingPostalCodesListSecurity("facilis", "consequuntur") {{
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
