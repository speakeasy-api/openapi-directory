# reports

## Overview

The reports API let you group checks into a single report and download the result as a PDF or CSV file.
It is also possible to upload a group of backgrounds check to be performed in batch and get a report about them later.

### Available Operations

* [batchUpload](#batchupload) - Batch Upload
* [createReport](#createreport) - Create Report
* [getReport](#getreport) - Get Report
* [listReports](#listreports) - List Reports

## batchUpload

Upload multiple checks and associate them to the report. The inputs for these checks must be sent in an xlsx file, please use the following templates:

**Person:** [Chile](https://app.truora.com/files/person/person-input-cl.xlsx), [Colombia](https://app.truora.com/files/person/person-input-co.xlsx), [Mexico](https://app.truora.com/files/person/person-input-mx.xlsx), [Peru](https://app.truora.com/files/person/person-input-pe.xlsx), [Costa Rica](https://app.truora.com/files/person/person-input-cr.xlsx), [Brazil](https://app.truora.com/files/person/person-input-br.xlsx)

**Vehicle:** [Chile](https://app.truora.com/files/vehicle/vehicle-input-cl.xlsx), [Colombia](https://app.truora.com/files/vehicle/vehicle-input-co.xlsx), [Mexico](https://app.truora.com/files/vehicle/vehicle-input-mx.xlsx), [Peru](https://app.truora.com/files/vehicle/vehicle-input-pe.xlsx)

**Company** [Colombia](https://app.truora.com/files/company/company-input-co.xlsx), [Mexico](https://app.truora.com/files/company/company-input-mx.xlsx), [Brazil](https://app.truora.com/files/company/company-input-br.xlsx)

Keep in mind that we currently do not support batch uploads for custom check types. Background checks created by batch upload are processed with low priority.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchUploadRequest;
import org.openapis.openapi.models.operations.BatchUploadResponse;
import org.openapis.openapi.models.operations.BatchUploadSecurity;
import org.openapis.openapi.models.shared.BatchUploadInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BatchUploadRequest req = new BatchUploadRequest(                new BatchUploadInput(                new byte[][]{{
                                                add("iusto".getBytes()),
                                                add("dicta".getBytes()),
                                            }});, "harum");            

            BatchUploadResponse res = sdk.reports.batchUpload(req, new BatchUploadSecurity("enim") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.reportOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createReport

Creates a Report to which it is possible to associate multiple Checks.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateReportResponse;
import org.openapis.openapi.models.operations.CreateReportSecurity;
import org.openapis.openapi.models.shared.CreateReportInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CreateReportInput req = new CreateReportInput("accusamus");            

            CreateReportResponse res = sdk.reports.createReport(req, new CreateReportSecurity("commodi") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.reportOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getReport

Returns a report with the given ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetReportRequest;
import org.openapis.openapi.models.operations.GetReportResponse;
import org.openapis.openapi.models.operations.GetReportSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetReportRequest req = new GetReportRequest("repudiandae");            

            GetReportResponse res = sdk.reports.getReport(req, new GetReportSecurity("quae") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.reportOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listReports

Lists all reports asociated with the client or user requesting.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListReportsRequest;
import org.openapis.openapi.models.operations.ListReportsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListReportsRequest req = new ListReportsRequest() {{
                startKey = "quidem";
                username = "Kennedi.Mante50";
            }};            

            ListReportsResponse res = sdk.reports.listReports(req);

            if (res.reportsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
