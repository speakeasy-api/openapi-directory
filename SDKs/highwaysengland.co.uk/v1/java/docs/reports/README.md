# reports

### Available Operations

* [reportsIndex](#reportsindex) - Gets the daily report.
* [getVVersionReportsStartDateToEndDateReportType](#getvversionreportsstartdatetoenddatereporttype) - Gets the daily report.

## reportsIndex

Get's the report.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReportsIndexRequest;
import org.openapis.openapi.models.operations.ReportsIndexResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReportsIndexRequest req = new ReportsIndexRequest("iure", 297534, 891773, "ipsa", "delectus", "tempora", "suscipit") {{
                reportSubTypeId = 477665;
            }};            

            ReportsIndexResponse res = sdk.reports.reportsIndex(req);

            if (res.object != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVVersionReportsStartDateToEndDateReportType

Get's the report.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVVersionReportsStartDateToEndDateReportTypeRequest;
import org.openapis.openapi.models.operations.GetVVersionReportsStartDateToEndDateReportTypeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetVVersionReportsStartDateToEndDateReportTypeRequest req = new GetVVersionReportsStartDateToEndDateReportTypeRequest("minus", 812169, 528895, "iusto", "excepturi", "nisi", "recusandae") {{
                reportSubTypeId = 836079;
            }};            

            GetVVersionReportsStartDateToEndDateReportTypeResponse res = sdk.reports.getVVersionReportsStartDateToEndDateReportType(req);

            if (res.object != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
