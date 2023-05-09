# applications

## Overview

API operations to interact with the monitored Applications.

### Available Operations

* [getApplications](#getapplications) - Gets summarized information about all monitored applications.
* [getOneApplication](#getoneapplication) - Gets detailed information for a specific application.

## getApplications

Lists all the available ApplicationSummary instances.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApplicationsDirectionEnum;
import org.openapis.openapi.models.operations.GetApplicationsRequest;
import org.openapis.openapi.models.operations.GetApplicationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApplicationsRequest req = new GetApplicationsRequest() {{
                direction = GetApplicationsDirectionEnum.DESC;
                limit = 528895;
                page = "iusto";
                sort = "excepturi";
            }};            

            GetApplicationsResponse res = sdk.applications.getApplications(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOneApplication

You need to provide an <b>Application ID</b>:<br>- use the <b>hardware/applications</b> service to retrieve all available application IDs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOneApplicationRequest;
import org.openapis.openapi.models.operations.GetOneApplicationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetOneApplicationRequest req = new GetOneApplicationRequest("nisi");            

            GetOneApplicationResponse res = sdk.applications.getOneApplication(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
