# payStatements

### Available Operations

* [getsEmployeePayStatementDetailDataBasedOnTheSpecifiedYear](#getsemployeepaystatementdetaildatabasedonthespecifiedyear) - Get employee pay statement details data for the specified year.
* [getsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDate](#getsemployeepaystatementdetaildatabasedonthespecifiedyearandcheckdate) - Get employee pay statement details data for the specified year and check date.
* [getsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYear](#getsemployeepaystatementsummarydatabasedonthespecifiedyear) - Get employee pay statement summary data for the specified year.
* [getsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDate](#getsemployeepaystatementsummarydatabasedonthespecifiedyearandcheckdate) - Get employee pay statement summary data for the specified year and check date.

## getsEmployeePayStatementDetailDataBasedOnTheSpecifiedYear

Get pay statement details API will return employee pay statement details data currently available in Web Pay for the specified year.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearRequest;
import org.openapis.openapi.models.operations.GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearResponse;
import org.openapis.openapi.models.operations.GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearRequest req = new GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearRequest("culpa", "voluptatem", "sapiente") {{
                codegroup = "officiis";
                includetotalcount = false;
                pagenumber = 103298L;
                pagesize = 682119L;
            }};            

            GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearResponse res = sdk.payStatements.getsEmployeePayStatementDetailDataBasedOnTheSpecifiedYear(req, new GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearSecurity("pariatur") {{
                paylocityAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.payStatementDetails != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDate

Get pay statement details API will return employee pay statement detail data currently available in Web Pay for the specified year and check date.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateRequest;
import org.openapis.openapi.models.operations.GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateResponse;
import org.openapis.openapi.models.operations.GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateRequest req = new GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateRequest("debitis", "voluptatem", "alias", "deleniti") {{
                codegroup = "earum";
                includetotalcount = false;
                pagenumber = 404244L;
                pagesize = 958308L;
            }};            

            GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateResponse res = sdk.payStatements.getsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDate(req, new GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateSecurity("rem") {{
                paylocityAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.payStatementDetails != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYear

Get pay statement summary API will return employee pay statement summary data currently available in Web Pay for the specified year.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearRequest;
import org.openapis.openapi.models.operations.GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearResponse;
import org.openapis.openapi.models.operations.GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearRequest req = new GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearRequest("minus", "nemo", "asperiores") {{
                codegroup = "ratione";
                includetotalcount = false;
                pagenumber = 355225L;
                pagesize = 19122L;
            }};            

            GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearResponse res = sdk.payStatements.getsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYear(req, new GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearSecurity("illum") {{
                paylocityAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.payStatementSummaries != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDate

Get pay statement summary API will return employee pay statement summary data currently available in Web Pay for the specified year and check date.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDateRequest;
import org.openapis.openapi.models.operations.GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDateResponse;
import org.openapis.openapi.models.operations.GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDateRequest req = new GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDateRequest("totam", "impedit", "quibusdam", "nam") {{
                codegroup = "ipsam";
                includetotalcount = false;
                pagenumber = 633415L;
                pagesize = 222864L;
            }};            

            GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDateResponse res = sdk.payStatements.getsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDate(req, new GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDateSecurity("aliquam") {{
                paylocityAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.payStatementSummaries != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
