# reports

### Available Operations

* [deleteReportDefinition](#deletereportdefinition) - Deletes a report definition
* [deleteTransformDefinition](#deletetransformdefinition) - Deletes a transform definition
* [getActivePayInstructionsReportOutput](#getactivepayinstructionsreportoutput) - Runs the active pay instructions report
* [getAoeLiabilityReportOuput](#getaoeliabilityreportouput) - Runs the AOE liability report
* [getDpsMessageReportOutput](#getdpsmessagereportoutput) - Runs the DPS message report
* [getEmployerSummaryReportOuput](#getemployersummaryreportouput) - Runs the employer summary report
* [getGrossToNetReportOutput](#getgrosstonetreportoutput) - Runs the gross to net report
* [getHolidayBalanceReportOutput](#getholidaybalancereportoutput) - Runs the holiday balance report
* [getJournalReportOuput](#getjournalreportouput) - Runs the journal report
* [getLastPayDateReportOuput](#getlastpaydatereportouput) - Runs the last pay date report
* [getNetPayReportOutput](#getnetpayreportoutput) - Runs the net pay report
* [getNextPayPeriodDatesReportOutput](#getnextpayperioddatesreportoutput) - Runs the next pay period report
* [getP11SummaryReportOutput](#getp11summaryreportoutput) - Runs the P11 summary report
* [getP32NetReportOutput](#getp32netreportoutput) - Runs the P32 report
* [getP32SummaryNetReportOutput](#getp32summarynetreportoutput) - Runs the P32 summary report
* [getP45ReportOutput](#getp45reportoutput) - Runs the P45 report
* [getP60ReportOutput](#getp60reportoutput) - Runs the P60 report
* [getPapdisReportOuput](#getpapdisreportouput) - Runs the PAPDIS report
* [getPassReportOuput](#getpassreportouput) - Runs the PASS report
* [getPayDashboardPayslipReportOuput](#getpaydashboardpayslipreportouput) - Runs the Pay Dashboard payslips report
* [getPayslip3ReportOutput](#getpayslip3reportoutput) - Runs the verbose payslip report
* [getPensionLiabilityReportOutput](#getpensionliabilityreportoutput) - Runs the pension liability report
* [getReportDefinitionFromApplication](#getreportdefinitionfromapplication) - Get the report definition
* [getReportDefinitionsFromApplication](#getreportdefinitionsfromapplication) - Gets all reports
* [getReportOutput](#getreportoutput) - Runs the specified report definition
* [getTransformDefinitionFromApplication](#gettransformdefinitionfromapplication) - Get the transform definition
* [getTransformDefinitionsFromApplication](#gettransformdefinitionsfromapplication) - Gets all transform definitions
* [postReportDefinition](#postreportdefinition) - Create a new report definition
* [postTransformDefinition](#posttransformdefinition) - Create a new transform definition
* [putReportDefinition](#putreportdefinition) - Updates a report definition
* [putTransformDefinition](#puttransformdefinition) - Updates a transform definition

## deleteReportDefinition

Delete the specified report definition

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteReportDefinitionRequest;
import org.openapis.openapi.models.operations.DeleteReportDefinitionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteReportDefinitionRequest req = new DeleteReportDefinitionRequest("modi", "itaque", "maxime");            

            DeleteReportDefinitionResponse res = sdk.reports.deleteReportDefinition(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteTransformDefinition

Delete the specified transform definition

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteTransformDefinitionRequest;
import org.openapis.openapi.models.operations.DeleteTransformDefinitionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteTransformDefinitionRequest req = new DeleteTransformDefinitionRequest("modi", "consequuntur", "assumenda");            

            DeleteTransformDefinitionResponse res = sdk.reports.deleteTransformDefinition(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getActivePayInstructionsReportOutput

Returns the result of the executed active pay instructions report for the given query parameters

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetActivePayInstructionsReportOutputRequest;
import org.openapis.openapi.models.operations.GetActivePayInstructionsReportOutputResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetActivePayInstructionsReportOutputRequest req = new GetActivePayInstructionsReportOutputRequest("vero", "doloribus", "impedit", "porro", LocalDate.parse("2021-06-11")) {{
                activeOn = LocalDate.parse("2022-10-20");
                toDate = LocalDate.parse("2022-01-21");
                type = "esse";
            }};            

            GetActivePayInstructionsReportOutputResponse res = sdk.reports.getActivePayInstructionsReportOutput(req);

            if (res.getActivePayInstructionsReportOutput200ApplicationJSONBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAoeLiabilityReportOuput

Returns the result of the executed AOE liability report for the given query parameters

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAoeLiabilityReportOuputRequest;
import org.openapis.openapi.models.operations.GetAoeLiabilityReportOuputResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAoeLiabilityReportOuputRequest req = new GetAoeLiabilityReportOuputRequest("iure", "odio", "nesciunt", "debitis", "vel") {{
                taxPeriod = "neque";
                transformDefinitionKey = "corporis";
            }};            

            GetAoeLiabilityReportOuputResponse res = sdk.reports.getAoeLiabilityReportOuput(req);

            if (res.getAoeLiabilityReportOuput200ApplicationJSONBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDpsMessageReportOutput

Returns the result of the executed DPS message report for the given query parameters

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDpsMessageReportOutputRequest;
import org.openapis.openapi.models.operations.GetDpsMessageReportOutputResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDpsMessageReportOutputRequest req = new GetDpsMessageReportOutputRequest("voluptas", "consequuntur", "officia", LocalDate.parse("2022-04-14")) {{
                maxIndex = "eius";
                messageStatuses = "ipsa";
                messageTypes = "rem";
                startIndex = "maiores";
                toDate = LocalDate.parse("2022-09-02");
            }};            

            GetDpsMessageReportOutputResponse res = sdk.reports.getDpsMessageReportOutput(req);

            if (res.getDpsMessageReportOutput200ApplicationJSONBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEmployerSummaryReportOuput

Returns the result of the employer summary report for the given query parameters

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEmployerSummaryReportOuputRequest;
import org.openapis.openapi.models.operations.GetEmployerSummaryReportOuputResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEmployerSummaryReportOuputRequest req = new GetEmployerSummaryReportOuputRequest("saepe", "neque", LocalDate.parse("2022-01-29"), "quos");            

            GetEmployerSummaryReportOuputResponse res = sdk.reports.getEmployerSummaryReportOuput(req);

            if (res.getEmployerSummaryReportOuput200ApplicationJSONBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGrossToNetReportOutput

Returns the result of the executed gross to net report for the given query parameters

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGrossToNetReportOutputRequest;
import org.openapis.openapi.models.operations.GetGrossToNetReportOutputResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetGrossToNetReportOutputRequest req = new GetGrossToNetReportOutputRequest("doloribus", "fugiat", "est", "delectus", "velit") {{
                maxIndex = "vitae";
                startIndex = "nesciunt";
                taxPeriod = "similique";
            }};            

            GetGrossToNetReportOutputResponse res = sdk.reports.getGrossToNetReportOutput(req);

            if (res.getGrossToNetReportOutput200ApplicationJSONBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getHolidayBalanceReportOutput

Returns the result of the executed holiday balance report for the given query parameters

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetHolidayBalanceReportOutputRequest;
import org.openapis.openapi.models.operations.GetHolidayBalanceReportOutputResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetHolidayBalanceReportOutputRequest req = new GetHolidayBalanceReportOutputRequest("illo", "repellat", "nemo", LocalDate.parse("2020-07-12")) {{
                employeeCodes = "unde";
                maxIndex = "incidunt";
                startIndex = "explicabo";
            }};            

            GetHolidayBalanceReportOutputResponse res = sdk.reports.getHolidayBalanceReportOutput(req);

            if (res.getHolidayBalanceReportOutput200ApplicationJSONBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getJournalReportOuput

Returns the result of the journal report for the given query parameters

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetJournalReportOuputRequest;
import org.openapis.openapi.models.operations.GetJournalReportOuputResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetJournalReportOuputRequest req = new GetJournalReportOuputRequest("ipsam", "cupiditate", "optio", "alias", "quidem", "nesciunt") {{
                taxPeriod = "commodi";
            }};            

            GetJournalReportOuputResponse res = sdk.reports.getJournalReportOuput(req);

            if (res.getJournalReportOuput200ApplicationJSONBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLastPayDateReportOuput

Returns the result of the executed last pay date report for the given query parameters

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLastPayDateReportOuputRequest;
import org.openapis.openapi.models.operations.GetLastPayDateReportOuputResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetLastPayDateReportOuputRequest req = new GetLastPayDateReportOuputRequest("sapiente", "consequuntur", "veniam", "debitis");            

            GetLastPayDateReportOuputResponse res = sdk.reports.getLastPayDateReportOuput(req);

            if (res.getLastPayDateReportOuput200ApplicationJSONBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetPayReportOutput

Returns the result of the executed net pay report for the given query parameters

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetPayReportOutputRequest;
import org.openapis.openapi.models.operations.GetNetPayReportOutputResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNetPayReportOutputRequest req = new GetNetPayReportOutputRequest("officia", "sint", "ut", "numquam", "tenetur") {{
                maxIndex = "adipisci";
                startIndex = "libero";
                taxPeriod = "in";
            }};            

            GetNetPayReportOutputResponse res = sdk.reports.getNetPayReportOutput(req);

            if (res.getNetPayReportOutput200ApplicationJSONBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNextPayPeriodDatesReportOutput

Returns the result of the executed next pay period report for the given query parameters

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNextPayPeriodDatesReportOutputRequest;
import org.openapis.openapi.models.operations.GetNextPayPeriodDatesReportOutputResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNextPayPeriodDatesReportOutputRequest req = new GetNextPayPeriodDatesReportOutputRequest("minima", "ex", "minus", "ab");            

            GetNextPayPeriodDatesReportOutputResponse res = sdk.reports.getNextPayPeriodDatesReportOutput(req);

            if (res.getNextPayPeriodDatesReportOutput200ApplicationJSONBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getP11SummaryReportOutput

Returns the result of the executed P11 summary report for the given query parameters

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetP11SummaryReportOutputRequest;
import org.openapis.openapi.models.operations.GetP11SummaryReportOutputResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetP11SummaryReportOutputRequest req = new GetP11SummaryReportOutputRequest("beatae", "hic", "nisi", "quisquam", "dolor") {{
                maxIndex = "ducimus";
                startIndex = "fuga";
            }};            

            GetP11SummaryReportOutputResponse res = sdk.reports.getP11SummaryReportOutput(req);

            if (res.getP11SummaryReportOutput200ApplicationJSONBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getP32NetReportOutput

Returns the result of the executed P32 report for the given query parameters

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetP32NetReportOutputRequest;
import org.openapis.openapi.models.operations.GetP32NetReportOutputResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetP32NetReportOutputRequest req = new GetP32NetReportOutputRequest("minima", "architecto", "qui", "aliquid");            

            GetP32NetReportOutputResponse res = sdk.reports.getP32NetReportOutput(req);

            if (res.getP32NetReportOutput200ApplicationJSONBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getP32SummaryNetReportOutput

Returns the result of the executed P32 summary report for the given query parameters

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetP32SummaryNetReportOutputRequest;
import org.openapis.openapi.models.operations.GetP32SummaryNetReportOutputResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetP32SummaryNetReportOutputRequest req = new GetP32SummaryNetReportOutputRequest("magni", "incidunt", "adipisci", "praesentium");            

            GetP32SummaryNetReportOutputResponse res = sdk.reports.getP32SummaryNetReportOutput(req);

            if (res.getP32SummaryNetReportOutput200ApplicationJSONBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getP45ReportOutput

Returns the result of the executed P45 report for the given query parameters

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetP45ReportOutputRequest;
import org.openapis.openapi.models.operations.GetP45ReportOutputResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetP45ReportOutputRequest req = new GetP45ReportOutputRequest("dolor", "exercitationem", "expedita", "facilis") {{
                transformDefinitionKey = "impedit";
            }};            

            GetP45ReportOutputResponse res = sdk.reports.getP45ReportOutput(req);

            if (res.getP45ReportOutput200ApplicationJSONBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getP60ReportOutput

Returns the result of the executed P60 report for the given query parameters

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetP60ReportOutputRequest;
import org.openapis.openapi.models.operations.GetP60ReportOutputResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetP60ReportOutputRequest req = new GetP60ReportOutputRequest("sit", "nemo", "culpa", "consequuntur") {{
                employeeCodes = "amet";
                maxIndex = "deserunt";
                startIndex = "modi";
                transformDefinitionKey = "veniam";
            }};            

            GetP60ReportOutputResponse res = sdk.reports.getP60ReportOutput(req);

            if (res.getP60ReportOutput200ApplicationJSONBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPapdisReportOuput

Returns the result of the executed PAPDIS report. PAPDIS is a free and open data interface standard designed to allow payroll and middleware software developers to create a file that can be used by pension providers to exchange data. http://www.papdis.org/

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPapdisReportOuputRequest;
import org.openapis.openapi.models.operations.GetPapdisReportOuputResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPapdisReportOuputRequest req = new GetPapdisReportOuputRequest("quod", "itaque", "a", "quisquam", "enim", "doloribus", "assumenda") {{
                paymentDate = LocalDate.parse("2022-09-09");
                transformDefinitionKey = "alias";
            }};            

            GetPapdisReportOuputResponse res = sdk.reports.getPapdisReportOuput(req);

            if (res.getPapdisReportOuput200ApplicationJSONBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPassReportOuput

Returns the result of the executed PASS report. PASS stands for Payroll and Systemsync. PASS 1.1 is an extension of the PAPDIS V1.1 schema. https://pensionsynckb.systemsyncsolutions.com/display/PKB/PASS+1.1

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPassReportOuputRequest;
import org.openapis.openapi.models.operations.GetPassReportOuputResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPassReportOuputRequest req = new GetPassReportOuputRequest("culpa", "ipsa", "nobis", "necessitatibus", "quia", "dicta", "vel", "perspiciatis", "debitis") {{
                paymentDate = LocalDate.parse("2022-11-24");
            }};            

            GetPassReportOuputResponse res = sdk.reports.getPassReportOuput(req);

            if (res.getPassReportOuput200ApplicationJSONBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPayDashboardPayslipReportOuput

Returns the result of the executed Pay Dashboard payslip report for the given query parameters. See https://api.paydashboard.com for details. For compatability should be returned as JSON with TransformDefinitionKey=Json-Clean.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPayDashboardPayslipReportOuputRequest;
import org.openapis.openapi.models.operations.GetPayDashboardPayslipReportOuputResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPayDashboardPayslipReportOuputRequest req = new GetPayDashboardPayslipReportOuputRequest("accusantium", "perferendis", "veritatis", "provident", LocalDate.parse("2021-09-11"), "quibusdam") {{
                employeeCodes = "quod";
                maxIndex = "nemo";
                paymentDate = LocalDate.parse("2022-04-05");
                startIndex = "magnam";
                transformDefinitionKey = "dignissimos";
            }};            

            GetPayDashboardPayslipReportOuputResponse res = sdk.reports.getPayDashboardPayslipReportOuput(req);

            if (res.getPayDashboardPayslipReportOuput200ApplicationJSONBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPayslip3ReportOutput

Returns the result of the executed verbose payslip report for the given query parameters

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPayslip3ReportOutputRequest;
import org.openapis.openapi.models.operations.GetPayslip3ReportOutputResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPayslip3ReportOutputRequest req = new GetPayslip3ReportOutputRequest("laboriosam", "sed", "odio", "natus", "provident") {{
                employeeCodes = "cum";
                maxIndex = "doloribus";
                paymentDate = LocalDate.parse("2021-08-09");
                startIndex = "itaque";
                transformDefinitionKey = "laboriosam";
            }};            

            GetPayslip3ReportOutputResponse res = sdk.reports.getPayslip3ReportOutput(req);

            if (res.getPayslip3ReportOutput200ApplicationJSONBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPensionLiabilityReportOutput

Returns the result of the executed pension liability report for the given query parameters

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPensionLiabilityReportOutputRequest;
import org.openapis.openapi.models.operations.GetPensionLiabilityReportOutputResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPensionLiabilityReportOutputRequest req = new GetPensionLiabilityReportOutputRequest("unde", "modi", "perspiciatis", "hic", "cum");            

            GetPensionLiabilityReportOutputResponse res = sdk.reports.getPensionLiabilityReportOutput(req);

            if (res.getPensionLiabilityReportOutput200ApplicationJSONBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getReportDefinitionFromApplication

Returns the specified report definition from the authroised application

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetReportDefinitionFromApplicationRequest;
import org.openapis.openapi.models.operations.GetReportDefinitionFromApplicationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetReportDefinitionFromApplicationRequest req = new GetReportDefinitionFromApplicationRequest("aspernatur", "libero", "nam");            

            GetReportDefinitionFromApplicationResponse res = sdk.reports.getReportDefinitionFromApplication(req);

            if (res.reportDefinition != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getReportDefinitionsFromApplication

Get links to all saved report definitions under authorised application

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetReportDefinitionsFromApplicationRequest;
import org.openapis.openapi.models.operations.GetReportDefinitionsFromApplicationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetReportDefinitionsFromApplicationRequest req = new GetReportDefinitionsFromApplicationRequest("incidunt", "recusandae");            

            GetReportDefinitionsFromApplicationResponse res = sdk.reports.getReportDefinitionsFromApplication(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getReportOutput

Returns the result of the executed report definition

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetReportOutputRequest;
import org.openapis.openapi.models.operations.GetReportOutputResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetReportOutputRequest req = new GetReportOutputRequest("quod", "id", "saepe");            

            GetReportOutputResponse res = sdk.reports.getReportOutput(req);

            if (res.getReportOutput200ApplicationJSONBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTransformDefinitionFromApplication

Returns the specified transform definition from the authroised application

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTransformDefinitionFromApplicationRequest;
import org.openapis.openapi.models.operations.GetTransformDefinitionFromApplicationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTransformDefinitionFromApplicationRequest req = new GetTransformDefinitionFromApplicationRequest("autem", "quo", "nesciunt");            

            GetTransformDefinitionFromApplicationResponse res = sdk.reports.getTransformDefinitionFromApplication(req);

            if (res.transformDefinition != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTransformDefinitionsFromApplication

Get links to all saved transform definitions under authorised application

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTransformDefinitionsFromApplicationRequest;
import org.openapis.openapi.models.operations.GetTransformDefinitionsFromApplicationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTransformDefinitionsFromApplicationRequest req = new GetTransformDefinitionsFromApplicationRequest("illum", "nemo");            

            GetTransformDefinitionsFromApplicationResponse res = sdk.reports.getTransformDefinitionsFromApplication(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postReportDefinition

Creates a new report defintion object

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostReportDefinitionRequest;
import org.openapis.openapi.models.operations.PostReportDefinitionResponse;
import org.openapis.openapi.models.shared.ReportDefinition;
import org.openapis.openapi.models.shared.ReportDefinitionReportDefinition;
import org.openapis.openapi.models.shared.ReportDefinitionReportDefinitionReportQuery;
import org.openapis.openapi.models.shared.ReportDefinitionReportDefinitionReportQueryGroup;
import org.openapis.openapi.models.shared.ReportDefinitionReportDefinitionReportQueryGroupGroup;
import org.openapis.openapi.models.shared.ReportDefinitionReportDefinitionReportQueryGroupGroupCondition;
import org.openapis.openapi.models.shared.ReportDefinitionReportDefinitionReportQueryGroupGroupFilter;
import org.openapis.openapi.models.shared.ReportDefinitionReportDefinitionReportQueryGroupGroupOrder;
import org.openapis.openapi.models.shared.ReportDefinitionReportDefinitionReportQueryGroupGroupOutput;
import org.openapis.openapi.models.shared.ReportDefinitionReportDefinitionReportQueryGroupGroupOutputAtOutputEnum;
import org.openapis.openapi.models.shared.ReportDefinitionReportDefinitionReportQueryVariable;
import org.openapis.openapi.models.shared.ReportDefinitionReportDefinitionReportQueryVariableVariable;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostReportDefinitionRequest req = new PostReportDefinitionRequest("illum", "facilis",                 new ReportDefinition() {{
                                reportDefinition = new ReportDefinitionReportDefinition() {{
                                    active = false;
                                    readonly = false;
                                    reportQuery = new ReportDefinitionReportDefinitionReportQuery() {{
                                        encoding = "non";
                                        excludeNullOrEmptyElements = false;
                                        groups = new ReportDefinitionReportDefinitionReportQueryGroup() {{
                                            group = new org.openapis.openapi.models.shared.ReportDefinitionReportDefinitionReportQueryGroupGroup[]{{
                                                add(new ReportDefinitionReportDefinitionReportQueryGroupGroup() {{
                                                    atGroupName = "assumenda";
                                                    atItemName = "recusandae";
                                                    atLoopExpression = "distinctio";
                                                    atPredicate = "pariatur";
                                                    atSelector = "ad";
                                                    atUniqueKeyVariable = "facere";
                                                    condition = new org.openapis.openapi.models.shared.ReportDefinitionReportDefinitionReportQueryGroupGroupCondition[]{{
                                                        add(new ReportDefinitionReportDefinitionReportQueryGroupGroupCondition() {{
                                                            atValueA = "eveniet";
                                                            atValueB = "laborum";
                                                        }}),
                                                        add(new ReportDefinitionReportDefinitionReportQueryGroupGroupCondition() {{
                                                            atValueA = "incidunt";
                                                            atValueB = "maxime";
                                                        }}),
                                                        add(new ReportDefinitionReportDefinitionReportQueryGroupGroupCondition() {{
                                                            atValueA = "ipsam";
                                                            atValueB = "alias";
                                                        }}),
                                                    }};
                                                    filter = new org.openapis.openapi.models.shared.ReportDefinitionReportDefinitionReportQueryGroupGroupFilter[]{{
                                                        add(new ReportDefinitionReportDefinitionReportQueryGroupGroupFilter() {{
                                                            atIsOr = false;
                                                            atProperty = "deserunt";
                                                            atValue = "molestias";
                                                        }}),
                                                        add(new ReportDefinitionReportDefinitionReportQueryGroupGroupFilter() {{
                                                            atIsOr = false;
                                                            atProperty = "laborum";
                                                            atValue = "est";
                                                        }}),
                                                    }};
                                                    order = new org.openapis.openapi.models.shared.ReportDefinitionReportDefinitionReportQueryGroupGroupOrder[]{{
                                                        add(new ReportDefinitionReportDefinitionReportQueryGroupGroupOrder() {{
                                                            atProperty = "labore";
                                                        }}),
                                                        add(new ReportDefinitionReportDefinitionReportQueryGroupGroupOrder() {{
                                                            atProperty = "quo";
                                                        }}),
                                                        add(new ReportDefinitionReportDefinitionReportQueryGroupGroupOrder() {{
                                                            atProperty = "perferendis";
                                                        }}),
                                                    }};
                                                    output = new org.openapis.openapi.models.shared.ReportDefinitionReportDefinitionReportQueryGroupGroupOutput[]{{
                                                        add(new ReportDefinitionReportDefinitionReportQueryGroupGroupOutput() {{
                                                            atMaxLength = "aliquid";
                                                            atOutput = ReportDefinitionReportDefinitionReportQueryGroupGroupOutputAtOutputEnum.VARIABLE;
                                                        }}),
                                                    }};
                                                }}),
                                                add(new ReportDefinitionReportDefinitionReportQueryGroupGroup() {{
                                                    atGroupName = "quaerat";
                                                    atItemName = "eligendi";
                                                    atLoopExpression = "hic";
                                                    atPredicate = "nostrum";
                                                    atSelector = "officiis";
                                                    atUniqueKeyVariable = "unde";
                                                    condition = new org.openapis.openapi.models.shared.ReportDefinitionReportDefinitionReportQueryGroupGroupCondition[]{{
                                                        add(new ReportDefinitionReportDefinitionReportQueryGroupGroupCondition() {{
                                                            atValueA = "error";
                                                            atValueB = "mollitia";
                                                        }}),
                                                        add(new ReportDefinitionReportDefinitionReportQueryGroupGroupCondition() {{
                                                            atValueA = "magnam";
                                                            atValueB = "nostrum";
                                                        }}),
                                                        add(new ReportDefinitionReportDefinitionReportQueryGroupGroupCondition() {{
                                                            atValueA = "esse";
                                                            atValueB = "corrupti";
                                                        }}),
                                                        add(new ReportDefinitionReportDefinitionReportQueryGroupGroupCondition() {{
                                                            atValueA = "fuga";
                                                            atValueB = "facere";
                                                        }}),
                                                    }};
                                                    filter = new org.openapis.openapi.models.shared.ReportDefinitionReportDefinitionReportQueryGroupGroupFilter[]{{
                                                        add(new ReportDefinitionReportDefinitionReportQueryGroupGroupFilter() {{
                                                            atIsOr = false;
                                                            atProperty = "quasi";
                                                            atValue = "deserunt";
                                                        }}),
                                                        add(new ReportDefinitionReportDefinitionReportQueryGroupGroupFilter() {{
                                                            atIsOr = false;
                                                            atProperty = "quod";
                                                            atValue = "laboriosam";
                                                        }}),
                                                        add(new ReportDefinitionReportDefinitionReportQueryGroupGroupFilter() {{
                                                            atIsOr = false;
                                                            atProperty = "doloremque";
                                                            atValue = "voluptatem";
                                                        }}),
                                                        add(new ReportDefinitionReportDefinitionReportQueryGroupGroupFilter() {{
                                                            atIsOr = false;
                                                            atProperty = "facere";
                                                            atValue = "necessitatibus";
                                                        }}),
                                                    }};
                                                    order = new org.openapis.openapi.models.shared.ReportDefinitionReportDefinitionReportQueryGroupGroupOrder[]{{
                                                        add(new ReportDefinitionReportDefinitionReportQueryGroupGroupOrder() {{
                                                            atProperty = "consequatur";
                                                        }}),
                                                        add(new ReportDefinitionReportDefinitionReportQueryGroupGroupOrder() {{
                                                            atProperty = "eaque";
                                                        }}),
                                                        add(new ReportDefinitionReportDefinitionReportQueryGroupGroupOrder() {{
                                                            atProperty = "architecto";
                                                        }}),
                                                        add(new ReportDefinitionReportDefinitionReportQueryGroupGroupOrder() {{
                                                            atProperty = "similique";
                                                        }}),
                                                    }};
                                                    output = new org.openapis.openapi.models.shared.ReportDefinitionReportDefinitionReportQueryGroupGroupOutput[]{{
                                                        add(new ReportDefinitionReportDefinitionReportQueryGroupGroupOutput() {{
                                                            atMaxLength = "blanditiis";
                                                            atOutput = ReportDefinitionReportDefinitionReportQueryGroupGroupOutputAtOutputEnum.ELEMENT;
                                                        }}),
                                                        add(new ReportDefinitionReportDefinitionReportQueryGroupGroupOutput() {{
                                                            atMaxLength = "magni";
                                                            atOutput = ReportDefinitionReportDefinitionReportQueryGroupGroupOutputAtOutputEnum.INNER_TEXT;
                                                        }}),
                                                        add(new ReportDefinitionReportDefinitionReportQueryGroupGroupOutput() {{
                                                            atMaxLength = "sed";
                                                            atOutput = ReportDefinitionReportDefinitionReportQueryGroupGroupOutputAtOutputEnum.INNER_TEXT;
                                                        }}),
                                                        add(new ReportDefinitionReportDefinitionReportQueryGroupGroupOutput() {{
                                                            atMaxLength = "impedit";
                                                            atOutput = ReportDefinitionReportDefinitionReportQueryGroupGroupOutputAtOutputEnum.ELEMENT;
                                                        }}),
                                                    }};
                                                }}),
                                                add(new ReportDefinitionReportDefinitionReportQueryGroupGroup() {{
                                                    atGroupName = "excepturi";
                                                    atItemName = "a";
                                                    atLoopExpression = "maiores";
                                                    atPredicate = "laudantium";
                                                    atSelector = "maiores";
                                                    atUniqueKeyVariable = "alias";
                                                    condition = new org.openapis.openapi.models.shared.ReportDefinitionReportDefinitionReportQueryGroupGroupCondition[]{{
                                                        add(new ReportDefinitionReportDefinitionReportQueryGroupGroupCondition() {{
                                                            atValueA = "rem";
                                                            atValueB = "dicta";
                                                        }}),
                                                        add(new ReportDefinitionReportDefinitionReportQueryGroupGroupCondition() {{
                                                            atValueA = "suscipit";
                                                            atValueB = "earum";
                                                        }}),
                                                        add(new ReportDefinitionReportDefinitionReportQueryGroupGroupCondition() {{
                                                            atValueA = "doloribus";
                                                            atValueB = "velit";
                                                        }}),
                                                        add(new ReportDefinitionReportDefinitionReportQueryGroupGroupCondition() {{
                                                            atValueA = "eius";
                                                            atValueB = "esse";
                                                        }}),
                                                    }};
                                                    filter = new org.openapis.openapi.models.shared.ReportDefinitionReportDefinitionReportQueryGroupGroupFilter[]{{
                                                        add(new ReportDefinitionReportDefinitionReportQueryGroupGroupFilter() {{
                                                            atIsOr = false;
                                                            atProperty = "eligendi";
                                                            atValue = "quasi";
                                                        }}),
                                                        add(new ReportDefinitionReportDefinitionReportQueryGroupGroupFilter() {{
                                                            atIsOr = false;
                                                            atProperty = "neque";
                                                            atValue = "vero";
                                                        }}),
                                                    }};
                                                    order = new org.openapis.openapi.models.shared.ReportDefinitionReportDefinitionReportQueryGroupGroupOrder[]{{
                                                        add(new ReportDefinitionReportDefinitionReportQueryGroupGroupOrder() {{
                                                            atProperty = "accusantium";
                                                        }}),
                                                        add(new ReportDefinitionReportDefinitionReportQueryGroupGroupOrder() {{
                                                            atProperty = "qui";
                                                        }}),
                                                        add(new ReportDefinitionReportDefinitionReportQueryGroupGroupOrder() {{
                                                            atProperty = "impedit";
                                                        }}),
                                                    }};
                                                    output = new org.openapis.openapi.models.shared.ReportDefinitionReportDefinitionReportQueryGroupGroupOutput[]{{
                                                        add(new ReportDefinitionReportDefinitionReportQueryGroupGroupOutput() {{
                                                            atMaxLength = "incidunt";
                                                            atOutput = ReportDefinitionReportDefinitionReportQueryGroupGroupOutputAtOutputEnum.ELEMENT;
                                                        }}),
                                                    }};
                                                }}),
                                            }};
                                        }};;
                                        rootNodeName = "odit";
                                        suppressMetricAttributes = false;
                                        variables = new ReportDefinitionReportDefinitionReportQueryVariable() {{
                                            variable = new org.openapis.openapi.models.shared.ReportDefinitionReportDefinitionReportQueryVariableVariable[]{{
                                                add(new ReportDefinitionReportDefinitionReportQueryVariableVariable() {{
                                                    atName = "rerum";
                                                    atValue = "alias";
                                                }}),
                                                add(new ReportDefinitionReportDefinitionReportQueryVariableVariable() {{
                                                    atName = "error";
                                                    atValue = "vel";
                                                }}),
                                            }};
                                        }};;
                                    }};;
                                    supportedTransforms = "accusantium";
                                    title = "Miss";
                                    version = "laboriosam";
                                }};;
                            }};);            

            PostReportDefinitionResponse res = sdk.reports.postReportDefinition(req);

            if (res.link != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postTransformDefinition

Creates a new transform defintion object

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostTransformDefinitionRequest;
import org.openapis.openapi.models.operations.PostTransformDefinitionResponse;
import org.openapis.openapi.models.shared.TransformDefinition;
import org.openapis.openapi.models.shared.TransformDefinitionTransformDefinition;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostTransformDefinitionRequest req = new PostTransformDefinitionRequest("ex", "quas",                 new TransformDefinition() {{
                                transformDefinition = new TransformDefinitionTransformDefinition() {{
                                    active = false;
                                    contentType = "veritatis";
                                    definition = "ullam";
                                    definitionType = "quae";
                                    readonly = false;
                                    supportedReports = "similique";
                                    taxYear = 278116;
                                    title = "Ms.";
                                    version = "magni";
                                }};;
                            }};);            

            PostTransformDefinitionResponse res = sdk.reports.postTransformDefinition(req);

            if (res.link != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putReportDefinition

Updates the existing specified report definition object

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutReportDefinitionRequest;
import org.openapis.openapi.models.operations.PutReportDefinitionResponse;
import org.openapis.openapi.models.shared.ReportDefinition;
import org.openapis.openapi.models.shared.ReportDefinitionReportDefinition;
import org.openapis.openapi.models.shared.ReportDefinitionReportDefinitionReportQuery;
import org.openapis.openapi.models.shared.ReportDefinitionReportDefinitionReportQueryGroup;
import org.openapis.openapi.models.shared.ReportDefinitionReportDefinitionReportQueryGroupGroup;
import org.openapis.openapi.models.shared.ReportDefinitionReportDefinitionReportQueryGroupGroupCondition;
import org.openapis.openapi.models.shared.ReportDefinitionReportDefinitionReportQueryGroupGroupFilter;
import org.openapis.openapi.models.shared.ReportDefinitionReportDefinitionReportQueryGroupGroupOrder;
import org.openapis.openapi.models.shared.ReportDefinitionReportDefinitionReportQueryGroupGroupOutput;
import org.openapis.openapi.models.shared.ReportDefinitionReportDefinitionReportQueryGroupGroupOutputAtOutputEnum;
import org.openapis.openapi.models.shared.ReportDefinitionReportDefinitionReportQueryVariable;
import org.openapis.openapi.models.shared.ReportDefinitionReportDefinitionReportQueryVariableVariable;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutReportDefinitionRequest req = new PutReportDefinitionRequest("deserunt", "delectus",                 new ReportDefinition() {{
                                reportDefinition = new ReportDefinitionReportDefinition() {{
                                    active = false;
                                    readonly = false;
                                    reportQuery = new ReportDefinitionReportDefinitionReportQuery() {{
                                        encoding = "omnis";
                                        excludeNullOrEmptyElements = false;
                                        groups = new ReportDefinitionReportDefinitionReportQueryGroup() {{
                                            group = new org.openapis.openapi.models.shared.ReportDefinitionReportDefinitionReportQueryGroupGroup[]{{
                                                add(new ReportDefinitionReportDefinitionReportQueryGroupGroup() {{
                                                    atGroupName = "nesciunt";
                                                    atItemName = "maxime";
                                                    atLoopExpression = "quis";
                                                    atPredicate = "cupiditate";
                                                    atSelector = "aliquam";
                                                    atUniqueKeyVariable = "excepturi";
                                                    condition = new org.openapis.openapi.models.shared.ReportDefinitionReportDefinitionReportQueryGroupGroupCondition[]{{
                                                        add(new ReportDefinitionReportDefinitionReportQueryGroupGroupCondition() {{
                                                            atValueA = "laudantium";
                                                            atValueB = "velit";
                                                        }}),
                                                        add(new ReportDefinitionReportDefinitionReportQueryGroupGroupCondition() {{
                                                            atValueA = "reiciendis";
                                                            atValueB = "amet";
                                                        }}),
                                                        add(new ReportDefinitionReportDefinitionReportQueryGroupGroupCondition() {{
                                                            atValueA = "nemo";
                                                            atValueB = "ipsa";
                                                        }}),
                                                        add(new ReportDefinitionReportDefinitionReportQueryGroupGroupCondition() {{
                                                            atValueA = "quisquam";
                                                            atValueB = "tenetur";
                                                        }}),
                                                    }};
                                                    filter = new org.openapis.openapi.models.shared.ReportDefinitionReportDefinitionReportQueryGroupGroupFilter[]{{
                                                        add(new ReportDefinitionReportDefinitionReportQueryGroupGroupFilter() {{
                                                            atIsOr = false;
                                                            atProperty = "molestiae";
                                                            atValue = "aliquid";
                                                        }}),
                                                        add(new ReportDefinitionReportDefinitionReportQueryGroupGroupFilter() {{
                                                            atIsOr = false;
                                                            atProperty = "asperiores";
                                                            atValue = "a";
                                                        }}),
                                                        add(new ReportDefinitionReportDefinitionReportQueryGroupGroupFilter() {{
                                                            atIsOr = false;
                                                            atProperty = "nobis";
                                                            atValue = "perspiciatis";
                                                        }}),
                                                    }};
                                                    order = new org.openapis.openapi.models.shared.ReportDefinitionReportDefinitionReportQueryGroupGroupOrder[]{{
                                                        add(new ReportDefinitionReportDefinitionReportQueryGroupGroupOrder() {{
                                                            atProperty = "dicta";
                                                        }}),
                                                    }};
                                                    output = new org.openapis.openapi.models.shared.ReportDefinitionReportDefinitionReportQueryGroupGroupOutput[]{{
                                                        add(new ReportDefinitionReportDefinitionReportQueryGroupGroupOutput() {{
                                                            atMaxLength = "commodi";
                                                            atOutput = ReportDefinitionReportDefinitionReportQueryGroupGroupOutputAtOutputEnum.INNER_TEXT;
                                                        }}),
                                                        add(new ReportDefinitionReportDefinitionReportQueryGroupGroupOutput() {{
                                                            atMaxLength = "porro";
                                                            atOutput = ReportDefinitionReportDefinitionReportQueryGroupGroupOutputAtOutputEnum.VARIABLE_PREPEND;
                                                        }}),
                                                        add(new ReportDefinitionReportDefinitionReportQueryGroupGroupOutput() {{
                                                            atMaxLength = "quidem";
                                                            atOutput = ReportDefinitionReportDefinitionReportQueryGroupGroupOutputAtOutputEnum.VARIABLE;
                                                        }}),
                                                        add(new ReportDefinitionReportDefinitionReportQueryGroupGroupOutput() {{
                                                            atMaxLength = "voluptates";
                                                            atOutput = ReportDefinitionReportDefinitionReportQueryGroupGroupOutputAtOutputEnum.ATTRIBUTE;
                                                        }}),
                                                    }};
                                                }}),
                                            }};
                                        }};;
                                        rootNodeName = "eius";
                                        suppressMetricAttributes = false;
                                        variables = new ReportDefinitionReportDefinitionReportQueryVariable() {{
                                            variable = new org.openapis.openapi.models.shared.ReportDefinitionReportDefinitionReportQueryVariableVariable[]{{
                                                add(new ReportDefinitionReportDefinitionReportQueryVariableVariable() {{
                                                    atName = "eligendi";
                                                    atValue = "asperiores";
                                                }}),
                                            }};
                                        }};;
                                    }};;
                                    supportedTransforms = "esse";
                                    title = "Ms.";
                                    version = "sint";
                                }};;
                            }};, "repellat");            

            PutReportDefinitionResponse res = sdk.reports.putReportDefinition(req);

            if (res.reportDefinition != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putTransformDefinition

Updates the existing specified transform definition object

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutTransformDefinitionRequest;
import org.openapis.openapi.models.operations.PutTransformDefinitionResponse;
import org.openapis.openapi.models.shared.TransformDefinition;
import org.openapis.openapi.models.shared.TransformDefinitionTransformDefinition;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutTransformDefinitionRequest req = new PutTransformDefinitionRequest("a", "animi",                 new TransformDefinition() {{
                                transformDefinition = new TransformDefinitionTransformDefinition() {{
                                    active = false;
                                    contentType = "maiores";
                                    definition = "itaque";
                                    definitionType = "nulla";
                                    readonly = false;
                                    supportedReports = "deserunt";
                                    taxYear = 359097;
                                    title = "Mrs.";
                                    version = "officiis";
                                }};;
                            }};, "enim");            

            PutTransformDefinitionResponse res = sdk.reports.putTransformDefinition(req);

            if (res.transformDefinition != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
