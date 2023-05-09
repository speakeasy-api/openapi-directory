# services

## Overview

API operations to interact with the monitored Services.

### Available Operations

* [getOneService](#getoneservice) - Gets detailed information about a specific service.
* [getServices](#getservices) - Gets summarized information about all monitored services.

## getOneService

You need to provide a <b>Service ID</b> ID :<br>- use the <b>hardware/services</b> service to get all available service IDs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOneServiceRequest;
import org.openapis.openapi.models.operations.GetOneServiceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetOneServiceRequest req = new GetOneServiceRequest("natus");            

            GetOneServiceResponse res = sdk.services.getOneService(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getServices

Lists the available ServiceSummary instances.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetServicesDirectionEnum;
import org.openapis.openapi.models.operations.GetServicesRequest;
import org.openapis.openapi.models.operations.GetServicesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetServicesRequest req = new GetServicesRequest() {{
                direction = GetServicesDirectionEnum.ASC;
                limit = 612096;
                page = "dolor";
                sort = "natus";
            }};            

            GetServicesResponse res = sdk.services.getServices(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
