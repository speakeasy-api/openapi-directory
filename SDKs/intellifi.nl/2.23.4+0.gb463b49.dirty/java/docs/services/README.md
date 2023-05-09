# services

## Overview

The Brain consists of several software components with their own responsibilities, referred to as "services".
Some of these services have status information and/or configuration that can be managed using the `services` resource.


### Available Operations

* [getServiceById](#getservicebyid) - Get service
* [getServices](#getservices) - Get all services
* [updateService](#updateservice) - Update existing service

## getServiceById

Get service

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetServiceByIdRequest;
import org.openapis.openapi.models.operations.GetServiceByIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    cookieSid = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetServiceByIdRequest req = new GetServiceByIdRequest("laborum");            

            GetServiceByIdResponse res = sdk.services.getServiceById(req);

            if (res.service != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getServices

Get all services

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetServicesRequest;
import org.openapis.openapi.models.operations.GetServicesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    cookieSid = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetServicesRequest req = new GetServicesRequest() {{
                after = OffsetDateTime.parse("2022-04-02T11:21:13.260Z");
                afterId = "occaecati";
                before = "enim";
                beforeId = "accusamus";
                from = "delectus";
                fromId = "quidem";
                id = "5b7d6cbd7503c445552a1664";
                idOnly = false;
                limit = 588465L;
                name = "Foo Bar";
                populate = "nam";
                resultsOnly = false;
                select = "id";
                sort = "blanditiis";
                timeCreated = "2018-08-30T09:51:59.737Z";
                timeUpdated = "2018-08-30T09:51:59.737Z";
                timeoutS = 5332.06;
                until = "sapiente";
                untilId = "amet";
            }};            

            GetServicesResponse res = sdk.services.getServices(req);

            if (res.getServices200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateService

Update existing service

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateServiceRequest;
import org.openapis.openapi.models.operations.UpdateServiceResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServiceInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    cookieSid = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateServiceRequest req = new UpdateServiceRequest(                new ServiceInput() {{
                                configRequest = new java.util.HashMap<String, Object>() {{
                                    put("nisi", "vel");
                                    put("natus", "omnis");
                                    put("molestiae", "perferendis");
                                }};
                                restartRequest = true;
                            }};, "nihil");            

            UpdateServiceResponse res = sdk.services.updateService(req);

            if (res.responseDefaultResource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
