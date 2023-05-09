# hashes

### Available Operations

* [webriskHashesSearch](#webriskhashessearch) - Gets the full hashes that match the requested hash prefix. This is used after a hash prefix is looked up in a threatList and there is a match. The client side threatList only holds partial hashes so the client must query this method to determine if there is a full hash match of a threat.

## webriskHashesSearch

Gets the full hashes that match the requested hash prefix. This is used after a hash prefix is looked up in a threatList and there is a match. The client side threatList only holds partial hashes so the client must query this method to determine if there is a full hash match of a threat.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WebriskHashesSearchRequest;
import org.openapis.openapi.models.operations.WebriskHashesSearchResponse;
import org.openapis.openapi.models.operations.WebriskHashesSearchSecurity;
import org.openapis.openapi.models.operations.WebriskHashesSearchThreatTypesEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WebriskHashesSearchRequest req = new WebriskHashesSearchRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "suscipit";
                alt = AltEnum.MEDIA;
                callback = "minus";
                fields = "placeat";
                hashPrefix = "voluptatum";
                key = "iusto";
                oauthToken = "excepturi";
                prettyPrint = false;
                quotaUser = "nisi";
                threatTypes = new org.openapis.openapi.models.operations.WebriskHashesSearchThreatTypesEnum[]{{
                    add(WebriskHashesSearchThreatTypesEnum.SOCIAL_ENGINEERING_EXTENDED_COVERAGE),
                    add(WebriskHashesSearchThreatTypesEnum.THREAT_TYPE_UNSPECIFIED),
                    add(WebriskHashesSearchThreatTypesEnum.MALWARE),
                    add(WebriskHashesSearchThreatTypesEnum.THREAT_TYPE_UNSPECIFIED),
                }};
                uploadType = "deserunt";
                uploadProtocol = "perferendis";
            }};            

            WebriskHashesSearchResponse res = sdk.hashes.webriskHashesSearch(req, new WebriskHashesSearchSecurity("ipsam", "repellendus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudWebriskV1SearchHashesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
