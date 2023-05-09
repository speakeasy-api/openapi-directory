# reports

### Available Operations

* [adsenseReportsGenerate](#adsensereportsgenerate) - Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.
* [adsenseReportsSavedGenerate](#adsensereportssavedgenerate) - Generate an AdSense report based on the saved report ID sent in the query parameters.
* [adsenseReportsSavedList](#adsensereportssavedlist) - List all saved reports in this AdSense account.

## adsenseReportsGenerate

Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdsenseReportsGenerateRequest;
import org.openapis.openapi.models.operations.AdsenseReportsGenerateResponse;
import org.openapis.openapi.models.operations.AdsenseReportsGenerateSecurity;
import org.openapis.openapi.models.operations.AdsenseReportsGenerateSecurityOption1;
import org.openapis.openapi.models.operations.AdsenseReportsGenerateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsenseReportsGenerateRequest req = new AdsenseReportsGenerateRequest("dolorem", "dolorem") {{
                accountId = new String[]{{
                    add("qui"),
                }};
                alt = AltEnum.CSV;
                currency = "hic";
                dimension = new String[]{{
                    add("cum"),
                    add("voluptate"),
                    add("dignissimos"),
                }};
                fields = "reiciendis";
                filter = new String[]{{
                    add("dolorum"),
                }};
                key = "numquam";
                locale = "veritatis";
                maxResults = 58029L;
                metric = new String[]{{
                    add("iure"),
                }};
                oauthToken = "odio";
                prettyPrint = false;
                quotaUser = "quaerat";
                sort = new String[]{{
                    add("quidem"),
                    add("voluptatibus"),
                    add("voluptas"),
                    add("natus"),
                }};
                startIndex = 179603L;
                useTimezoneReporting = false;
                userIp = "atque";
            }};            

            AdsenseReportsGenerateResponse res = sdk.reports.adsenseReportsGenerate(req, new AdsenseReportsGenerateSecurity() {{
                option1 = new AdsenseReportsGenerateSecurityOption1("sit", "fugiat") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.adsenseReportsGenerateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adsenseReportsSavedGenerate

Generate an AdSense report based on the saved report ID sent in the query parameters.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdsenseReportsSavedGenerateRequest;
import org.openapis.openapi.models.operations.AdsenseReportsSavedGenerateResponse;
import org.openapis.openapi.models.operations.AdsenseReportsSavedGenerateSecurity;
import org.openapis.openapi.models.operations.AdsenseReportsSavedGenerateSecurityOption1;
import org.openapis.openapi.models.operations.AdsenseReportsSavedGenerateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsenseReportsSavedGenerateRequest req = new AdsenseReportsSavedGenerateRequest("ab") {{
                alt = AltEnum.JSON;
                fields = "dolorum";
                key = "iusto";
                locale = "voluptate";
                maxResults = 677082L;
                oauthToken = "deleniti";
                prettyPrint = false;
                quotaUser = "omnis";
                startIndex = 896672L;
                userIp = "distinctio";
            }};            

            AdsenseReportsSavedGenerateResponse res = sdk.reports.adsenseReportsSavedGenerate(req, new AdsenseReportsSavedGenerateSecurity() {{
                option1 = new AdsenseReportsSavedGenerateSecurityOption1("asperiores", "nihil") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.adsenseReportsGenerateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adsenseReportsSavedList

List all saved reports in this AdSense account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdsenseReportsSavedListRequest;
import org.openapis.openapi.models.operations.AdsenseReportsSavedListResponse;
import org.openapis.openapi.models.operations.AdsenseReportsSavedListSecurity;
import org.openapis.openapi.models.operations.AdsenseReportsSavedListSecurityOption1;
import org.openapis.openapi.models.operations.AdsenseReportsSavedListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsenseReportsSavedListRequest req = new AdsenseReportsSavedListRequest() {{
                alt = AltEnum.CSV;
                fields = "voluptate";
                key = "id";
                maxResults = 906418L;
                oauthToken = "eius";
                pageToken = "aspernatur";
                prettyPrint = false;
                quotaUser = "perferendis";
                userIp = "amet";
            }};            

            AdsenseReportsSavedListResponse res = sdk.reports.adsenseReportsSavedList(req, new AdsenseReportsSavedListSecurity() {{
                option1 = new AdsenseReportsSavedListSecurityOption1("optio", "accusamus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.savedReports != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
