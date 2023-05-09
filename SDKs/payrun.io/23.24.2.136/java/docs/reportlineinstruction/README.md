# reportLineInstruction

### Available Operations

* [deleteReportingInstruction](#deletereportinginstruction) - Deletes a reporting instruction
* [getReportingInstructionFromEmployer](#getreportinginstructionfromemployer) - Gets the specified reporting instruction from the employer
* [getReportingInstructionsFromEmployer](#getreportinginstructionsfromemployer) - Gets the reporting instructions from the specified employer
* [postReportingInstruction](#postreportinginstruction) - Creates a new Reporting Instruction
* [putReportingInstruction](#putreportinginstruction) - Update a reporting Instruction

## deleteReportingInstruction

Delete the specified reporting instruction

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteReportingInstructionRequest;
import org.openapis.openapi.models.operations.DeleteReportingInstructionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteReportingInstructionRequest req = new DeleteReportingInstructionRequest("laborum", "natus", "accusamus", "doloremque");            

            DeleteReportingInstructionResponse res = sdk.reportLineInstruction.deleteReportingInstruction(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getReportingInstructionFromEmployer

Returns the specified pay instruction from employee

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetReportingInstructionFromEmployerRequest;
import org.openapis.openapi.models.operations.GetReportingInstructionFromEmployerResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetReportingInstructionFromEmployerRequest req = new GetReportingInstructionFromEmployerRequest("nisi", "rerum", "recusandae", "voluptates");            

            GetReportingInstructionFromEmployerResponse res = sdk.reportLineInstruction.getReportingInstructionFromEmployer(req);

            if (res.reportingInstruction != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getReportingInstructionsFromEmployer

Get links to all pay instructions for the specified employee

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetReportingInstructionsFromEmployerRequest;
import org.openapis.openapi.models.operations.GetReportingInstructionsFromEmployerResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetReportingInstructionsFromEmployerRequest req = new GetReportingInstructionsFromEmployerRequest("non", "rem", "quia");            

            GetReportingInstructionsFromEmployerResponse res = sdk.reportLineInstruction.getReportingInstructionsFromEmployer(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postReportingInstruction

Creates a new reporting instruction object

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostReportingInstructionRequest;
import org.openapis.openapi.models.operations.PostReportingInstructionResponse;
import org.openapis.openapi.models.shared.ReportingInstruction;
import org.openapis.openapi.models.shared.ReportingInstructionReportingInstruction;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostReportingInstructionRequest req = new PostReportingInstructionRequest("ullam", "quisquam", "dicta",                 new ReportingInstruction() {{
                                reportingInstruction = new ReportingInstructionReportingInstruction() {{
                                    endDate = LocalDate.parse("2020-09-26");
                                    startDate = LocalDate.parse("2022-02-11");
                                    taxMonth = 100002;
                                    taxYear = 100251;
                                    value = 3178.98;
                                }};;
                            }};);            

            PostReportingInstructionResponse res = sdk.reportLineInstruction.postReportingInstruction(req);

            if (res.link != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putReportingInstruction

Updates the existing specified reporting instruction object

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutReportingInstructionRequest;
import org.openapis.openapi.models.operations.PutReportingInstructionResponse;
import org.openapis.openapi.models.shared.ReportingInstruction;
import org.openapis.openapi.models.shared.ReportingInstructionReportingInstruction;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutReportingInstructionRequest req = new PutReportingInstructionRequest("optio", "rem", "perferendis",                 new ReportingInstruction() {{
                                reportingInstruction = new ReportingInstructionReportingInstruction() {{
                                    endDate = LocalDate.parse("2021-01-25");
                                    startDate = LocalDate.parse("2021-02-26");
                                    taxMonth = 117819;
                                    taxYear = 552439;
                                    value = 3563.15;
                                }};;
                            }};, "dolore");            

            PutReportingInstructionResponse res = sdk.reportLineInstruction.putReportingInstruction(req);

            if (res.reportingInstruction != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
