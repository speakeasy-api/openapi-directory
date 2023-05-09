# rootDatabaseLogReport

## Overview

Database log backup report.

### Available Operations

* [queryLogReport](#querylogreport) - Get the database log backup delay information
* [queryReportProperties](#queryreportproperties) - Get the database log backup report properties
* [updateReportProperties](#updatereportproperties) - Update the database log backup report properties

## queryLogReport

Get the database log backup delay information.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QueryLogReportRequest;
import org.openapis.openapi.models.operations.QueryLogReportResponse;
import org.openapis.openapi.models.operations.QueryLogReportSortByEnum;
import org.openapis.openapi.models.operations.QueryLogReportSortOrderEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("sequi", "quo") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            QueryLogReportRequest req = new QueryLogReportRequest() {{
                databaseType = "esse";
                effectiveSlaDomainId = "recusandae";
                limit = 44612;
                location = "distinctio";
                logBackupDelay = 799796;
                name = "Debra Kovacek";
                offset = 306810;
                sortBy = QueryLogReportSortByEnum.DATABASE_TYPE;
                sortOrder = QueryLogReportSortOrderEnum.DESC;
            }};            

            QueryLogReportResponse res = sdk.rootDatabaseLogReport.queryLogReport(req);

            if (res.dbLogReportSummaryListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## queryReportProperties

Get the properties for the database (SQL and Oracle) log backup delay email notification creation. The properties are logDelayThresholdInMin and logDelayNotificationFrequencyInMin.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QueryReportPropertiesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("commodi", "sapiente") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            QueryReportPropertiesResponse res = sdk.rootDatabaseLogReport.queryReportProperties();

            if (res.dbLogReportProperties != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateReportProperties

Update the properties for the database (SQL and Oracle) log backup delay email notification creation. The properties are logDelayThresholdInMin and logDelayNotificationFrequencyInMin.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateReportPropertiesResponse;
import org.openapis.openapi.models.shared.DbLogReportPropertiesUpdate;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("dolores", "deserunt") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            org.openapis.openapi.models.shared.DbLogReportPropertiesUpdate req = new DbLogReportPropertiesUpdate() {{
                enableDelayNotification = false;
                logDelayNotificationFrequencyInMin = 475289L;
                logDelayThresholdInMin = 35362L;
            }};            

            UpdateReportPropertiesResponse res = sdk.rootDatabaseLogReport.updateReportProperties(req);

            if (res.dbLogReportProperties != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
