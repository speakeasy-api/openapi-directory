# map

## Overview

Map Web Service

### Available Operations

* [getChromosomeByAssemblyUsingGET](#getchromosomebyassemblyusingget) - Return a list of chromosomes
* [getChromosomesByAssemblyUsingGET](#getchromosomesbyassemblyusingget) - Return a list of chromosomes
* [getMapsBySpeciesUsingGET](#getmapsbyspeciesusingget) - Return a list of assemblies

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

            GETChromosomeByAssemblyUsingGETRequest req = new GETChromosomeByAssemblyUsingGETRequest("quo", 196582);            

            GETChromosomeByAssemblyUsingGETResponse res = sdk.map.getChromosomeByAssemblyUsingGET(req);

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

            GETChromosomesByAssemblyUsingGETRequest req = new GETChromosomesByAssemblyUsingGETRequest(949572);            

            GETChromosomesByAssemblyUsingGETResponse res = sdk.map.getChromosomesByAssemblyUsingGET(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMapsBySpeciesUsingGET

Return a list of assemblies

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETMapsBySpeciesUsingGETRequest;
import org.openapis.openapi.models.operations.GETMapsBySpeciesUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETMapsBySpeciesUsingGETRequest req = new GETMapsBySpeciesUsingGETRequest(368725);            

            GETMapsBySpeciesUsingGETResponse res = sdk.map.getMapsBySpeciesUsingGET(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
