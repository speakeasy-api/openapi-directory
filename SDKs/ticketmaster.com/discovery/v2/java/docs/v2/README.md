# v2

### Available Operations

* [getDiscoveryV2Suggest](#getdiscoveryv2suggest) - Find Suggest

## getDiscoveryV2Suggest

Find search suggestions and filter your suggestions by location, source, etc.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDiscoveryV2SuggestIncludeFuzzyEnum;
import org.openapis.openapi.models.operations.GetDiscoveryV2SuggestIncludeLicensedContentEnum;
import org.openapis.openapi.models.operations.GetDiscoveryV2SuggestIncludeSpellcheckEnum;
import org.openapis.openapi.models.operations.GetDiscoveryV2SuggestIncludeTbaEnum;
import org.openapis.openapi.models.operations.GetDiscoveryV2SuggestIncludeTbdEnum;
import org.openapis.openapi.models.operations.GetDiscoveryV2SuggestRequest;
import org.openapis.openapi.models.operations.GetDiscoveryV2SuggestResponse;
import org.openapis.openapi.models.operations.GetDiscoveryV2SuggestSourceEnum;
import org.openapis.openapi.models.operations.GetDiscoveryV2SuggestUnitEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDiscoveryV2SuggestRequest req = new GetDiscoveryV2SuggestRequest() {{
                clientVisibility = "quasi";
                countryCode = "IS";
                geoPoint = "doloribus";
                includeFuzzy = GetDiscoveryV2SuggestIncludeFuzzyEnum.NO;
                includeLicensedContent = GetDiscoveryV2SuggestIncludeLicensedContentEnum.YES;
                includeSpellcheck = GetDiscoveryV2SuggestIncludeSpellcheckEnum.NO;
                includeTBA = GetDiscoveryV2SuggestIncludeTbaEnum.NO;
                includeTBD = GetDiscoveryV2SuggestIncludeTbdEnum.ONLY;
                keyword = "in";
                latlong = "architecto";
                locale = "architecto";
                radius = "repudiandae";
                segmentId = "ullam";
                size = "expedita";
                source = GetDiscoveryV2SuggestSourceEnum.UNIVERSE;
                unit = GetDiscoveryV2SuggestUnitEnum.KM;
            }};            

            GetDiscoveryV2SuggestResponse res = sdk.v2.getDiscoveryV2Suggest(req);

            if (res.getDiscoveryV2Suggest200ApplicationHalPlusJsonString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
