# services

### Available Operations

* [cloudbillingServicesList](#cloudbillingserviceslist) - Lists all public cloud services.
* [cloudbillingServicesSkusList](#cloudbillingservicesskuslist) - Lists all publicly available SKUs for a given cloud service.

## cloudbillingServicesList

Lists all public cloud services.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudbillingServicesListRequest;
import org.openapis.openapi.models.operations.CloudbillingServicesListResponse;
import org.openapis.openapi.models.operations.CloudbillingServicesListSecurity;
import org.openapis.openapi.models.operations.CloudbillingServicesListSecurityOption1;
import org.openapis.openapi.models.operations.CloudbillingServicesListSecurityOption2;
import org.openapis.openapi.models.operations.CloudbillingServicesListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudbillingServicesListRequest req = new CloudbillingServicesListRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "blanditiis";
                alt = AltEnum.MEDIA;
                callback = "sapiente";
                fields = "amet";
                key = "deserunt";
                oauthToken = "nisi";
                pageSize = 423855L;
                pageToken = "natus";
                prettyPrint = false;
                quotaUser = "omnis";
                uploadType = "molestiae";
                uploadProtocol = "perferendis";
            }};            

            CloudbillingServicesListResponse res = sdk.services.cloudbillingServicesList(req, new CloudbillingServicesListSecurity() {{
                option1 = new CloudbillingServicesListSecurityOption1("nihil", "magnam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listServicesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudbillingServicesSkusList

Lists all publicly available SKUs for a given cloud service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudbillingServicesSkusListRequest;
import org.openapis.openapi.models.operations.CloudbillingServicesSkusListResponse;
import org.openapis.openapi.models.operations.CloudbillingServicesSkusListSecurity;
import org.openapis.openapi.models.operations.CloudbillingServicesSkusListSecurityOption1;
import org.openapis.openapi.models.operations.CloudbillingServicesSkusListSecurityOption2;
import org.openapis.openapi.models.operations.CloudbillingServicesSkusListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudbillingServicesSkusListRequest req = new CloudbillingServicesSkusListRequest("distinctio") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "labore";
                alt = AltEnum.JSON;
                callback = "suscipit";
                currencyCode = "natus";
                endTime = "nobis";
                fields = "eum";
                key = "vero";
                oauthToken = "aspernatur";
                pageSize = 102863L;
                pageToken = "magnam";
                prettyPrint = false;
                quotaUser = "et";
                startTime = "excepturi";
                uploadType = "ullam";
                uploadProtocol = "provident";
            }};            

            CloudbillingServicesSkusListResponse res = sdk.services.cloudbillingServicesSkusList(req, new CloudbillingServicesSkusListSecurity() {{
                option1 = new CloudbillingServicesSkusListSecurityOption1("quos", "sint") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listSkusResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
