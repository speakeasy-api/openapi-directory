# areas

### Available Operations

* [areasGet](#areasget) - Returns list of areas
* [getVVersionAreasAreaIds](#getvversionareasareaids) - Returns details of selected area

## areasGet

Returns list of areas

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AreasGetRequest;
import org.openapis.openapi.models.operations.AreasGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AreasGetRequest req = new AreasGetRequest("provident");            

            AreasGetResponse res = sdk.areas.areasGet(req);

            if (res.areaResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVVersionAreasAreaIds

Returns details of selected area

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVVersionAreasAreaIdsRequest;
import org.openapis.openapi.models.operations.GetVVersionAreasAreaIdsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetVVersionAreasAreaIdsRequest req = new GetVVersionAreasAreaIdsRequest("distinctio", "quibusdam");            

            GetVVersionAreasAreaIdsResponse res = sdk.areas.getVVersionAreasAreaIds(req);

            if (res.areaResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
