# limits

### Available Operations

* [drivelabelsLimitsGetLabel](#drivelabelslimitsgetlabel) - Get the constraints on the structure of a Label; such as, the maximum number of Fields allowed and maximum length of the label title.

## drivelabelsLimitsGetLabel

Get the constraints on the structure of a Label; such as, the maximum number of Fields allowed and maximum length of the label title.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DrivelabelsLimitsGetLabelRequest;
import org.openapis.openapi.models.operations.DrivelabelsLimitsGetLabelResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DrivelabelsLimitsGetLabelRequest req = new DrivelabelsLimitsGetLabelRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "necessitatibus";
                alt = AltEnum.PROTO;
                callback = "explicabo";
                fields = "beatae";
                key = "aliquid";
                name = "Kara Wolf";
                oauthToken = "libero";
                prettyPrint = false;
                quotaUser = "totam";
                uploadType = "sequi";
                uploadProtocol = "aliquid";
            }};            

            DrivelabelsLimitsGetLabelResponse res = sdk.limits.drivelabelsLimitsGetLabel(req);

            if (res.googleAppsDriveLabelsV2LabelLimits != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
