# ratStrain

### Available Operations

* [getAllStrainsUsingGET](#getallstrainsusingget) - Return all active strains in RGD
* [getStrainByRgdIdUsingGET](#getstrainbyrgdidusingget) - Return a strain by RGD ID
* [getStrainsByPositionUsingGET](#getstrainsbypositionusingget) - Return all active strains by position

## getAllStrainsUsingGET

Return all active strains in RGD

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETAllStrainsUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETAllStrainsUsingGETResponse res = sdk.ratStrain.getAllStrainsUsingGET();

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getStrainByRgdIdUsingGET

Return a strain by RGD ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETStrainByRgdIdUsingGETRequest;
import org.openapis.openapi.models.operations.GETStrainByRgdIdUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETStrainByRgdIdUsingGETRequest req = new GETStrainByRgdIdUsingGETRequest(441711);            

            GETStrainByRgdIdUsingGETResponse res = sdk.ratStrain.getStrainByRgdIdUsingGET(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getStrainsByPositionUsingGET

Return all active strains by position

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETStrainsByPositionUsingGETRequest;
import org.openapis.openapi.models.operations.GETStrainsByPositionUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETStrainsByPositionUsingGETRequest req = new GETStrainsByPositionUsingGETRequest("ut", 979587, 120196L, 359444L);            

            GETStrainsByPositionUsingGETResponse res = sdk.ratStrain.getStrainsByPositionUsingGET(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
