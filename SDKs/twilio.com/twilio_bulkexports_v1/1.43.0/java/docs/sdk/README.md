# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [createExportCustomJob](#createexportcustomjob)
* [deleteJob](#deletejob)
* [fetchDay](#fetchday) - Fetch a specific Day.
* [fetchExport](#fetchexport) - Fetch a specific Export.
* [fetchExportConfiguration](#fetchexportconfiguration) - Fetch a specific Export Configuration.
* [fetchJob](#fetchjob)
* [listDay](#listday) - Retrieve a list of all Days for a resource.
* [listExportCustomJob](#listexportcustomjob)
* [updateExportConfiguration](#updateexportconfiguration) - Update a specific Export Configuration.

## createExportCustomJob

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateExportCustomJobCreateExportCustomJobRequest;
import org.openapis.openapi.models.operations.CreateExportCustomJobRequest;
import org.openapis.openapi.models.operations.CreateExportCustomJobResponse;
import org.openapis.openapi.models.operations.CreateExportCustomJobSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateExportCustomJobRequest req = new CreateExportCustomJobRequest("debitis") {{
                requestBody = new CreateExportCustomJobCreateExportCustomJobRequest("ipsa", "delectus", "tempora") {{
                    email = "Jasper_Schiller47@yahoo.com";
                    webhookMethod = "excepturi";
                    webhookUrl = "nisi";
                }};;
            }};            

            CreateExportCustomJobResponse res = sdk.sdk.createExportCustomJob(req, new CreateExportCustomJobSecurity("recusandae", "temporibus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.bulkexportsV1ExportExportCustomJob != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteJob

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteJobRequest;
import org.openapis.openapi.models.operations.DeleteJobResponse;
import org.openapis.openapi.models.operations.DeleteJobSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteJobRequest req = new DeleteJobRequest("ab");            

            DeleteJobResponse res = sdk.sdk.deleteJob(req, new DeleteJobSecurity("quis", "veritatis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchDay

Fetch a specific Day.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchDayRequest;
import org.openapis.openapi.models.operations.FetchDayResponse;
import org.openapis.openapi.models.operations.FetchDaySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchDayRequest req = new FetchDayRequest("deserunt", "perferendis");            

            FetchDayResponse res = sdk.sdk.fetchDay(req, new FetchDaySecurity("ipsam", "repellendus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchExport

Fetch a specific Export.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchExportRequest;
import org.openapis.openapi.models.operations.FetchExportResponse;
import org.openapis.openapi.models.operations.FetchExportSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchExportRequest req = new FetchExportRequest("sapiente");            

            FetchExportResponse res = sdk.sdk.fetchExport(req, new FetchExportSecurity("quo", "odit") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.bulkexportsV1Export != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchExportConfiguration

Fetch a specific Export Configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchExportConfigurationRequest;
import org.openapis.openapi.models.operations.FetchExportConfigurationResponse;
import org.openapis.openapi.models.operations.FetchExportConfigurationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchExportConfigurationRequest req = new FetchExportConfigurationRequest("at");            

            FetchExportConfigurationResponse res = sdk.sdk.fetchExportConfiguration(req, new FetchExportConfigurationSecurity("at", "maiores") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.bulkexportsV1ExportConfiguration != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchJob

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchJobRequest;
import org.openapis.openapi.models.operations.FetchJobResponse;
import org.openapis.openapi.models.operations.FetchJobSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchJobRequest req = new FetchJobRequest("molestiae");            

            FetchJobResponse res = sdk.sdk.fetchJob(req, new FetchJobSecurity("quod", "quod") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.bulkexportsV1ExportJob != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDay

Retrieve a list of all Days for a resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDayRequest;
import org.openapis.openapi.models.operations.ListDayResponse;
import org.openapis.openapi.models.operations.ListDaySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListDayRequest req = new ListDayRequest("esse") {{
                page = 520478L;
                pageSize = 780529L;
                pageToken = "dolorum";
            }};            

            ListDayResponse res = sdk.sdk.listDay(req, new ListDaySecurity("dicta", "nam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listDayResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listExportCustomJob

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListExportCustomJobRequest;
import org.openapis.openapi.models.operations.ListExportCustomJobResponse;
import org.openapis.openapi.models.operations.ListExportCustomJobSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListExportCustomJobRequest req = new ListExportCustomJobRequest("officia") {{
                page = 582020L;
                pageSize = 143353L;
                pageToken = "deleniti";
            }};            

            ListExportCustomJobResponse res = sdk.sdk.listExportCustomJob(req, new ListExportCustomJobSecurity("hic", "optio") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listExportCustomJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateExportConfiguration

Update a specific Export Configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateExportConfigurationRequest;
import org.openapis.openapi.models.operations.UpdateExportConfigurationResponse;
import org.openapis.openapi.models.operations.UpdateExportConfigurationSecurity;
import org.openapis.openapi.models.operations.UpdateExportConfigurationUpdateExportConfigurationRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateExportConfigurationRequest req = new UpdateExportConfigurationRequest("totam") {{
                requestBody = new UpdateExportConfigurationUpdateExportConfigurationRequest() {{
                    enabled = false;
                    webhookMethod = "beatae";
                    webhookUrl = "http://kosher-dipstick.biz";
                }};;
            }};            

            UpdateExportConfigurationResponse res = sdk.sdk.updateExportConfiguration(req, new UpdateExportConfigurationSecurity("impedit", "cum") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.bulkexportsV1ExportConfiguration != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
