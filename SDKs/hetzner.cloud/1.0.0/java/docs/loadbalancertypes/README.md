# loadBalancerTypes

## Overview

Load Balancer types define kinds of Load Balancers offered. Each type has an hourly and a monthly cost. You will pay whichever amount is lower for your usage of this specific Load Balancer. Costs may differ between Locations.

Currency for all amounts is €. All prices exclude VAT.


### Available Operations

* [getLoadBalancerTypes](#getloadbalancertypes) - Get all Load Balancer Types
* [getLoadBalancerTypesId](#getloadbalancertypesid) - Get a Load Balancer Type

## getLoadBalancerTypes

Gets all Load Balancer type objects.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLoadBalancerTypesRequest;
import org.openapis.openapi.models.operations.GetLoadBalancerTypesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetLoadBalancerTypesRequest req = new GetLoadBalancerTypesRequest() {{
                name = "Dr. Arnold Bradtke";
            }};            

            GetLoadBalancerTypesResponse res = sdk.loadBalancerTypes.getLoadBalancerTypes(req);

            if (res.getLoadBalancerTypes200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLoadBalancerTypesId

Gets a specific Load Balancer type object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLoadBalancerTypesIdRequest;
import org.openapis.openapi.models.operations.GetLoadBalancerTypesIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetLoadBalancerTypesIdRequest req = new GetLoadBalancerTypesIdRequest(714242L);            

            GetLoadBalancerTypesIdResponse res = sdk.loadBalancerTypes.getLoadBalancerTypesId(req);

            if (res.getLoadBalancerTypesId200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
