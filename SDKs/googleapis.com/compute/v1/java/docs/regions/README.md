# regions

### Available Operations

* [computeRegionsGet](#computeregionsget) - Returns the specified Region resource. To decrease latency for this method, you can optionally omit any unneeded information from the response by using a field mask. This practice is especially recommended for unused quota information (the `quotas` field). To exclude one or more fields, set your request's `fields` query parameter to only include the fields you need. For example, to only include the `id` and `selfLink` fields, add the query parameter `?fields=id,selfLink` to your request.
* [computeRegionsList](#computeregionslist) - Retrieves the list of region resources available to the specified project. To decrease latency for this method, you can optionally omit any unneeded information from the response by using a field mask. This practice is especially recommended for unused quota information (the `items.quotas` field). To exclude one or more fields, set your request's `fields` query parameter to only include the fields you need. For example, to only include the `id` and `selfLink` fields, add the query parameter `?fields=id,selfLink` to your request.

## computeRegionsGet

Returns the specified Region resource. To decrease latency for this method, you can optionally omit any unneeded information from the response by using a field mask. This practice is especially recommended for unused quota information (the `quotas` field). To exclude one or more fields, set your request's `fields` query parameter to only include the fields you need. For example, to only include the `id` and `selfLink` fields, add the query parameter `?fields=id,selfLink` to your request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionsGetRequest;
import org.openapis.openapi.models.operations.ComputeRegionsGetResponse;
import org.openapis.openapi.models.operations.ComputeRegionsGetSecurity;
import org.openapis.openapi.models.operations.ComputeRegionsGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionsGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRegionsGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionsGetRequest req = new ComputeRegionsGetRequest("blanditiis", "repellat") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "cupiditate";
                alt = AltEnum.JSON;
                callback = "esse";
                fields = "amet";
                key = "veritatis";
                oauthToken = "dicta";
                prettyPrint = false;
                quotaUser = "veniam";
                uploadType = "et";
                uploadProtocol = "cum";
                userIp = "repudiandae";
            }};            

            ComputeRegionsGetResponse res = sdk.regions.computeRegionsGet(req, new ComputeRegionsGetSecurity() {{
                option1 = new ComputeRegionsGetSecurityOption1("expedita", "numquam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.region != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeRegionsList

Retrieves the list of region resources available to the specified project. To decrease latency for this method, you can optionally omit any unneeded information from the response by using a field mask. This practice is especially recommended for unused quota information (the `items.quotas` field). To exclude one or more fields, set your request's `fields` query parameter to only include the fields you need. For example, to only include the `id` and `selfLink` fields, add the query parameter `?fields=id,selfLink` to your request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionsListRequest;
import org.openapis.openapi.models.operations.ComputeRegionsListResponse;
import org.openapis.openapi.models.operations.ComputeRegionsListSecurity;
import org.openapis.openapi.models.operations.ComputeRegionsListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionsListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRegionsListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionsListRequest req = new ComputeRegionsListRequest("ipsa") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "culpa";
                alt = AltEnum.JSON;
                callback = "doloremque";
                fields = "dolor";
                filter = "ipsam";
                key = "soluta";
                maxResults = 706431L;
                oauthToken = "nisi";
                orderBy = "nobis";
                pageToken = "tenetur";
                prettyPrint = false;
                quotaUser = "dolorem";
                returnPartialSuccess = false;
                uploadType = "blanditiis";
                uploadProtocol = "amet";
                userIp = "porro";
            }};            

            ComputeRegionsListResponse res = sdk.regions.computeRegionsList(req, new ComputeRegionsListSecurity() {{
                option1 = new ComputeRegionsListSecurityOption1("enim", "debitis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.regionList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
