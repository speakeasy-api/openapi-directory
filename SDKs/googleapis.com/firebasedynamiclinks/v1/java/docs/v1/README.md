# v1

### Available Operations

* [firebasedynamiclinksGetLinkStats](#firebasedynamiclinksgetlinkstats) - Fetches analytics stats of a short Dynamic Link for a given duration. Metrics include number of clicks, redirects, installs, app first opens, and app reopens.
* [firebasedynamiclinksInstallAttribution](#firebasedynamiclinksinstallattribution) - Get iOS strong/weak-match info for post-install attribution.
* [firebasedynamiclinksReopenAttribution](#firebasedynamiclinksreopenattribution) - Get iOS reopen attribution for app universal link open deeplinking.

## firebasedynamiclinksGetLinkStats

Fetches analytics stats of a short Dynamic Link for a given duration. Metrics include number of clicks, redirects, installs, app first opens, and app reopens.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebasedynamiclinksGetLinkStatsRequest;
import org.openapis.openapi.models.operations.FirebasedynamiclinksGetLinkStatsResponse;
import org.openapis.openapi.models.operations.FirebasedynamiclinksGetLinkStatsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebasedynamiclinksGetLinkStatsRequest req = new FirebasedynamiclinksGetLinkStatsRequest("nihil") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "voluptatibus";
                alt = AltEnum.JSON;
                callback = "omnis";
                durationDays = "voluptate";
                fields = "cum";
                key = "perferendis";
                oauthToken = "doloremque";
                prettyPrint = false;
                quotaUser = "reprehenderit";
                sdkVersion = "ut";
                uploadType = "maiores";
                uploadProtocol = "dicta";
            }};            

            FirebasedynamiclinksGetLinkStatsResponse res = sdk.v1.firebasedynamiclinksGetLinkStats(req, new FirebasedynamiclinksGetLinkStatsSecurity("corporis", "dolore") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.dynamicLinkStats != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebasedynamiclinksInstallAttribution

Get iOS strong/weak-match info for post-install attribution.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebasedynamiclinksInstallAttributionRequest;
import org.openapis.openapi.models.operations.FirebasedynamiclinksInstallAttributionResponse;
import org.openapis.openapi.models.operations.FirebasedynamiclinksInstallAttributionSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DeviceInfo;
import org.openapis.openapi.models.shared.GetIosPostInstallAttributionRequest;
import org.openapis.openapi.models.shared.GetIosPostInstallAttributionRequestRetrievalMethodEnum;
import org.openapis.openapi.models.shared.GetIosPostInstallAttributionRequestVisualStyleEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebasedynamiclinksInstallAttributionRequest req = new FirebasedynamiclinksInstallAttributionRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                getIosPostInstallAttributionRequest = new GetIosPostInstallAttributionRequest() {{
                    appInstallationTime = "dicta";
                    bundleId = "harum";
                    device = new DeviceInfo() {{
                        deviceModelName = "enim";
                        languageCode = "accusamus";
                        languageCodeFromWebview = "commodi";
                        languageCodeRaw = "repudiandae";
                        screenResolutionHeight = "quae";
                        screenResolutionWidth = "ipsum";
                        timezone = "quidem";
                    }};;
                    iosVersion = "molestias";
                    retrievalMethod = GetIosPostInstallAttributionRequestRetrievalMethodEnum.EXPLICIT_WEAK_MATCH;
                    sdkVersion = "pariatur";
                    uniqueMatchLinkToCheck = "modi";
                    visualStyle = GetIosPostInstallAttributionRequestVisualStyleEnum.DEFAULT_STYLE;
                }};;
                accessToken = "rem";
                alt = AltEnum.PROTO;
                callback = "quasi";
                fields = "repudiandae";
                key = "sint";
                oauthToken = "veritatis";
                prettyPrint = false;
                quotaUser = "itaque";
                uploadType = "incidunt";
                uploadProtocol = "enim";
            }};            

            FirebasedynamiclinksInstallAttributionResponse res = sdk.v1.firebasedynamiclinksInstallAttribution(req, new FirebasedynamiclinksInstallAttributionSecurity("consequatur", "est") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.getIosPostInstallAttributionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebasedynamiclinksReopenAttribution

Get iOS reopen attribution for app universal link open deeplinking.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebasedynamiclinksReopenAttributionRequest;
import org.openapis.openapi.models.operations.FirebasedynamiclinksReopenAttributionResponse;
import org.openapis.openapi.models.operations.FirebasedynamiclinksReopenAttributionSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GetIosReopenAttributionRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebasedynamiclinksReopenAttributionRequest req = new FirebasedynamiclinksReopenAttributionRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                getIosReopenAttributionRequest = new GetIosReopenAttributionRequest() {{
                    bundleId = "explicabo";
                    requestedLink = "deserunt";
                    sdkVersion = "distinctio";
                }};;
                accessToken = "quibusdam";
                alt = AltEnum.JSON;
                callback = "modi";
                fields = "qui";
                key = "aliquid";
                oauthToken = "cupiditate";
                prettyPrint = false;
                quotaUser = "quos";
                uploadType = "perferendis";
                uploadProtocol = "magni";
            }};            

            FirebasedynamiclinksReopenAttributionResponse res = sdk.v1.firebasedynamiclinksReopenAttribution(req, new FirebasedynamiclinksReopenAttributionSecurity("assumenda", "ipsam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.getIosReopenAttributionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
