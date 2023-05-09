# picoLoadmanagementGroup

### Available Operations

* [picoLoadmanagementGroupGet](#picoloadmanagementgroupget) - GET: api/pico/loadmanagementgroup
            
            Returns a pico load management group by it's id
* [getApiPicoLoadmanagementgroup](#getapipicoloadmanagementgroup) - GET: api/pico/loadmanagementgroup
            
            Returns all available load management groups

## picoLoadmanagementGroupGet

GET: api/pico/loadmanagementgroup
            
            Returns a pico load management group by it's id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PicoLoadmanagementGroupGetRequest;
import org.openapis.openapi.models.operations.PicoLoadmanagementGroupGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PicoLoadmanagementGroupGetRequest req = new PicoLoadmanagementGroupGetRequest("debitis");            

            PicoLoadmanagementGroupGetResponse res = sdk.picoLoadmanagementGroup.picoLoadmanagementGroupGet(req);

            if (res.picoLoadmanagementGroupDto != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiPicoLoadmanagementgroup

GET: api/pico/loadmanagementgroup
            
            Returns all available load management groups

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiPicoLoadmanagementgroupResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiPicoLoadmanagementgroupResponse res = sdk.picoLoadmanagementGroup.getApiPicoLoadmanagementgroup();

            if (res.picoLoadmanagementGroupDtos != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
