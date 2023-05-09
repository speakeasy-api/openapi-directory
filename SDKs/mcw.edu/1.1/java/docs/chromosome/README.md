# chromosome

### Available Operations

* [getChromosomeByAssemblyUsingGET](#getchromosomebyassemblyusingget) - Return a list of chromosomes
* [getChromosomesByAssemblyUsingGET](#getchromosomesbyassemblyusingget) - Return a list of chromosomes

## getChromosomeByAssemblyUsingGET

Return a list of chromosomes

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETChromosomeByAssemblyUsingGETRequest;
import org.openapis.openapi.models.operations.GETChromosomeByAssemblyUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETChromosomeByAssemblyUsingGETRequest req = new GETChromosomeByAssemblyUsingGETRequest("ipsam", 832620);            

            GETChromosomeByAssemblyUsingGETResponse res = sdk.chromosome.getChromosomeByAssemblyUsingGET(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getChromosomesByAssemblyUsingGET

Return a list of chromosomes

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETChromosomesByAssemblyUsingGETRequest;
import org.openapis.openapi.models.operations.GETChromosomesByAssemblyUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETChromosomesByAssemblyUsingGETRequest req = new GETChromosomesByAssemblyUsingGETRequest(957156);            

            GETChromosomesByAssemblyUsingGETResponse res = sdk.chromosome.getChromosomesByAssemblyUsingGET(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
