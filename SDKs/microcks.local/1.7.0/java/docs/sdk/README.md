# SDK

## Overview

API offered by Microcks, the Kubernetes native tools for API and microservices mocking and testing (microcks.io)

### Available Operations

* [getResource](#getresource) - Get Resource
* [getResourcesByService](#getresourcesbyservice) - Get Resources by Service

## getResource

Get Resource

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetResourceRequest;
import org.openapis.openapi.models.operations.GetResourceResponse;
import org.openapis.openapi.models.operations.GetResourceSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetResourceRequest req = new GetResourceRequest("distinctio");            

            GetResourceResponse res = sdk.sdk.getResource(req, new GetResourceSecurity("quibusdam") {{
                jwtBearer = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.resource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getResourcesByService

Get Resources by Service

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetResourcesByServiceRequest;
import org.openapis.openapi.models.operations.GetResourcesByServiceResponse;
import org.openapis.openapi.models.operations.GetResourcesByServiceSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetResourcesByServiceRequest req = new GetResourcesByServiceRequest("unde");            

            GetResourcesByServiceResponse res = sdk.sdk.getResourcesByService(req, new GetResourcesByServiceSecurity("nulla") {{
                jwtBearer = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.resources != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
