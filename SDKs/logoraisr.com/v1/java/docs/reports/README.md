# reports

### Available Operations

* [reportsCreate](#reportscreate) - Create a new report.
* [reportsList](#reportslist) - Get user report list.
* [reportsRead](#reportsread) - Get report details.

## reportsCreate

This POST-Method creates a new report.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReportsCreateResponse;
import org.openapis.openapi.models.shared.ReportRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam") {{
                    token = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ReportRequest req = new ReportRequest("ca1ba928-fc81-4674-acb7-39205929396f", "saepe");            

            ReportsCreateResponse res = sdk.reports.reportsCreate(req);

            if (res.reportResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reportsList

This GET method lists the user's reports.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReportsListResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fuga") {{
                    token = "YOUR_API_KEY_HERE";
                }})
                .build();

            ReportsListResponse res = sdk.reports.reportsList();

            if (res.report != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reportsRead

This GET-Method returns the details of a specific report.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReportsReadRequest;
import org.openapis.openapi.models.operations.ReportsReadResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    token = "YOUR_API_KEY_HERE";
                }})
                .build();

            ReportsReadRequest req = new ReportsReadRequest("corporis");            

            ReportsReadResponse res = sdk.reports.reportsRead(req);

            if (res.report != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
