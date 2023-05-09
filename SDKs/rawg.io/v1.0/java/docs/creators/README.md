# creators

### Available Operations

* [creatorsList](#creatorslist) - Get a list of game creators.
* [creatorsRead](#creatorsread) - Get details of the creator.

## creatorsList

Get a list of game creators.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreatorsListRequest;
import org.openapis.openapi.models.operations.CreatorsListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreatorsListRequest req = new CreatorsListRequest() {{
                page = 602763L;
                pageSize = 857946L;
            }};            

            CreatorsListResponse res = sdk.creators.creatorsList(req);

            if (res.creatorsList200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## creatorsRead

Get details of the creator.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreatorsReadRequest;
import org.openapis.openapi.models.operations.CreatorsReadResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreatorsReadRequest req = new CreatorsReadRequest("corrupti");            

            CreatorsReadResponse res = sdk.creators.creatorsRead(req);

            if (res.personSingle != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
