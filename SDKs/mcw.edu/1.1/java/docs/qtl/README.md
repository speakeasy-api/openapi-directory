# qtl

### Available Operations

* [getMappedQTLByPositionUsingGET](#getmappedqtlbypositionusingget) - Returns a list QTL for given position and assembly map
* [getQTLByRgdIdUsingGET](#getqtlbyrgdidusingget) - Return a QTL for provided RGD ID
* [getQtlListByPositionUsingGET](#getqtllistbypositionusingget) - Returns a list QTL for given position and assembly map

## getMappedQTLByPositionUsingGET

Returns a list QTL for given position and assembly map

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETMappedQTLByPositionUsingGETRequest;
import org.openapis.openapi.models.operations.GETMappedQTLByPositionUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETMappedQTLByPositionUsingGETRequest req = new GETMappedQTLByPositionUsingGETRequest("laborum", 96098, 971945L, 976460L);            

            GETMappedQTLByPositionUsingGETResponse res = sdk.qtl.getMappedQTLByPositionUsingGET(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getQTLByRgdIdUsingGET

Return a QTL for provided RGD ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETQTLByRgdIdUsingGETRequest;
import org.openapis.openapi.models.operations.GETQTLByRgdIdUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETQTLByRgdIdUsingGETRequest req = new GETQTLByRgdIdUsingGETRequest(878194);            

            GETQTLByRgdIdUsingGETResponse res = sdk.qtl.getQTLByRgdIdUsingGET(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getQtlListByPositionUsingGET

Returns a list QTL for given position and assembly map

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETQtlListByPositionUsingGETRequest;
import org.openapis.openapi.models.operations.GETQtlListByPositionUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETQtlListByPositionUsingGETRequest req = new GETQtlListByPositionUsingGETRequest("nihil", 509624, 976762L, 55714L);            

            GETQtlListByPositionUsingGETResponse res = sdk.qtl.getQtlListByPositionUsingGET(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
