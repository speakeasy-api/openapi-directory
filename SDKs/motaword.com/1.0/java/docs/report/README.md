# report

### Available Operations

* [generateQAReport](#generateqareport) - Generate a QA report for given filter
* [getFilterContents](#getfiltercontents) - Returns available options for selected timeframe.
* [getLanguagePairsReport](#getlanguagepairsreport) - Language pairs report
* [getProjectsReport](#getprojectsreport) - Projects report
* [getUsersReport](#getusersreport) - Company users report

## generateQAReport

Generate a QA report for given filter

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GenerateQAReportResponse;
import org.openapis.openapi.models.shared.QaFilter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.QaFilter req = new QaFilter() {{
                budgetCodes = new String[]{{
                    add("officia"),
                    add("maxime"),
                    add("dignissimos"),
                    add("officia"),
                }};
                categories = new String[]{{
                    add("nemo"),
                    add("quae"),
                    add("quaerat"),
                    add("porro"),
                }};
                clients = new Double[]{{
                    add(2883.98),
                    add(704.47),
                    add(2414.18),
                    add(6835.73),
                }};
                dateFrom = OffsetDateTime.parse("2022-03-29T01:37:24.454Z");
                dateTo = OffsetDateTime.parse("2022-05-14T14:45:53.115Z");
                documents = new Double[]{{
                    add(9268.8),
                    add(5173.09),
                    add(8539.4),
                }};
                projects = new Double[]{{
                    add(4976.78),
                    add(5546.88),
                }};
                severities = new String[]{{
                    add("labore"),
                    add("possimus"),
                }};
                sourceLanguages = new String[]{{
                    add("cum"),
                    add("commodi"),
                    add("in"),
                }};
                subjects = new String[]{{
                    add("reiciendis"),
                    add("assumenda"),
                }};
                targetLanguages = new String[]{{
                    add("recusandae"),
                    add("aliquid"),
                }};
                vendors = new Double[]{{
                    add(7386.83),
                }};
            }};            

            GenerateQAReportResponse res = sdk.report.generateQAReport(req);

            if (res.qaWarnings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFilterContents

Returns available options for selected timeframe.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFilterContentsResponse;
import org.openapis.openapi.models.shared.FilterDates;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consectetur") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.FilterDates req = new FilterDates() {{
                dateFrom = OffsetDateTime.parse("2022-08-26T18:58:12.703Z");
                dateTo = OffsetDateTime.parse("2020-07-22T14:40:50.941Z");
            }};            

            GetFilterContentsResponse res = sdk.report.getFilterContents(req);

            if (res.filterContents != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLanguagePairsReport

View translation reports for each language pair with translations under your account. You can view company-wide language pairs if you have the user permission.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLanguagePairsReportResponse;
import org.openapis.openapi.models.shared.ReportFilter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("numquam") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ReportFilter req = new ReportFilter() {{
                budgetCode = "doloribus";
                dateFrom = OffsetDateTime.parse("2022-01-12T07:48:28.322Z");
                dateTo = OffsetDateTime.parse("2021-03-11T09:18:18.070Z");
                sourceLanguages = new String[]{{
                    add("dolore"),
                    add("sunt"),
                    add("asperiores"),
                    add("adipisci"),
                }};
                targetLanguages = new String[]{{
                    add("amet"),
                }};
                users = new Long[]{{
                    add(489509L),
                }};
            }};            

            GetLanguagePairsReportResponse res = sdk.report.getLanguagePairsReport(req);

            if (res.languagePairsReport != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProjectsReport

View projects under your account, with advanced filtering. You can view company-wide projects if you have the user permission.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProjectsReportResponse;
import org.openapis.openapi.models.shared.ReportFilter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("a") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ReportFilter req = new ReportFilter() {{
                budgetCode = "debitis";
                dateFrom = OffsetDateTime.parse("2022-08-23T06:58:42.024Z");
                dateTo = OffsetDateTime.parse("2022-03-25T18:38:24.627Z");
                sourceLanguages = new String[]{{
                    add("voluptates"),
                }};
                targetLanguages = new String[]{{
                    add("vitae"),
                    add("accusamus"),
                    add("similique"),
                }};
                users = new Long[]{{
                    add(132815L),
                    add(379057L),
                }};
            }};            

            GetProjectsReportResponse res = sdk.report.getProjectsReport(req);

            if (res.projectList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsersReport

View translation reports for each user under your company account. You need the permission to view users in your company.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersReportResponse;
import org.openapis.openapi.models.shared.ReportFilter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptas") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ReportFilter req = new ReportFilter() {{
                budgetCode = "voluptas";
                dateFrom = OffsetDateTime.parse("2022-04-02T16:36:53.419Z");
                dateTo = OffsetDateTime.parse("2022-07-11T09:37:00.887Z");
                sourceLanguages = new String[]{{
                    add("dolores"),
                    add("blanditiis"),
                    add("in"),
                    add("dolore"),
                }};
                targetLanguages = new String[]{{
                    add("officiis"),
                    add("temporibus"),
                }};
                users = new Long[]{{
                    add(237742L),
                    add(738391L),
                }};
            }};            

            GetUsersReportResponse res = sdk.report.getUsersReport(req);

            if (res.usersReport != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
