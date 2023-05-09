# fleet

## Overview

Fleet is a group of clients under a given a name. For the purposes of identification and visualisation, the Fleet object has its own properties (e.g. logo), the most important of which is the `members`, which contains the user objects of the fleet.

### Available Operations

* [getFleetFleetname](#getfleetfleetname) - Get a Fleet

## getFleetFleetname

Use this endpoint to generate a random group of clients. The feleet is generated in a deterministic way, on the basis of a fleet name given as a path parameter.
In the case of identical fleet names, the endpoint will generate the same fleet object. The properties of the generated fleet object are randomly generated on the basis of the fleet name.
In lack of a fleet name, all calls generate a different fleet object to the randomly generated fleet name.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFleetFleetnameRequest;
import org.openapis.openapi.models.operations.GetFleetFleetnameResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFleetFleetnameRequest req = new GetFleetFleetnameRequest("quo");            

            GetFleetFleetnameResponse res = sdk.fleet.getFleetFleetname(req);

            if (res.getFleetFleetname200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
