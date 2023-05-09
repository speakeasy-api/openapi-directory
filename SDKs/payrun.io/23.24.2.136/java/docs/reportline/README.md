# reportLine

### Available Operations

* [getReportLineFromEmployer](#getreportlinefromemployer) - Gets the specified report line from the employer
* [getReportLinesFromEmployer](#getreportlinesfromemployer) - Gets the report lines from the specified employer
* [getReportLinesFromPayRun](#getreportlinesfrompayrun) - Gets the report lines from the specified pay run

## getReportLineFromEmployer

Returns the specified pay line from employee

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetReportLineFromEmployerRequest;
import org.openapis.openapi.models.operations.GetReportLineFromEmployerResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetReportLineFromEmployerRequest req = new GetReportLineFromEmployerRequest("libero", "totam", "sequi", "aliquid");            

            GetReportLineFromEmployerResponse res = sdk.reportLine.getReportLineFromEmployer(req);

            if (res.reportLine != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getReportLinesFromEmployer

Get links to all report lines for the specified employee

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetReportLinesFromEmployerRequest;
import org.openapis.openapi.models.operations.GetReportLinesFromEmployerResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetReportLinesFromEmployerRequest req = new GetReportLinesFromEmployerRequest("ea", "impedit", "ducimus");            

            GetReportLinesFromEmployerResponse res = sdk.reportLine.getReportLinesFromEmployer(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getReportLinesFromPayRun

Returns all report lines associated with the specified pay run

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetReportLinesFromPayRunRequest;
import org.openapis.openapi.models.operations.GetReportLinesFromPayRunResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetReportLinesFromPayRunRequest req = new GetReportLinesFromPayRunRequest("odit", "velit", "reiciendis", "repellat", "nulla");            

            GetReportLinesFromPayRunResponse res = sdk.reportLine.getReportLinesFromPayRun(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
