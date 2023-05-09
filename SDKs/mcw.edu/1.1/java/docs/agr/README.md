# agr

## Overview

Alliance of Genome Resources

### Available Operations

* [getAffectedGenomicModelsUsingGET](#getaffectedgenomicmodelsusingget) - Get affected genomic models (rat strains with gene alleles) submitted by RGD to AGR by taxonId
* [getAllelesForTaxonUsingGET](#getallelesfortaxonusingget) - Get gene allele records submitted by RGD to AGR by taxonId
* [getExpressionForTaxonUsingGET](#getexpressionfortaxonusingget) - Get expression annotations submitted by RGD to AGR by taxonId
* [getGenesForLatestAssemblyUsingGET](#getgenesforlatestassemblyusingget) - Get gene records submitted by RGD to AGR by taxonId
* [getPhenotypesForTaxonUsingGET](#getphenotypesfortaxonusingget) - Get phenotype annotations submitted by RGD to AGR by taxonId
* [getVariantsForTaxonUsingGET](#getvariantsfortaxonusingget) - Get basic variant records submitted by RGD to AGR by taxonId

## getAffectedGenomicModelsUsingGET

Get affected genomic models (rat strains with gene alleles) submitted by RGD to AGR by taxonId

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETAffectedGenomicModelsUsingGETRequest;
import org.openapis.openapi.models.operations.GETAffectedGenomicModelsUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETAffectedGenomicModelsUsingGETRequest req = new GETAffectedGenomicModelsUsingGETRequest("provident");            

            GETAffectedGenomicModelsUsingGETResponse res = sdk.agr.getAffectedGenomicModelsUsingGET(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAllelesForTaxonUsingGET

Get gene allele records submitted by RGD to AGR by taxonId

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETAllelesForTaxonUsingGETRequest;
import org.openapis.openapi.models.operations.GETAllelesForTaxonUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETAllelesForTaxonUsingGETRequest req = new GETAllelesForTaxonUsingGETRequest("distinctio");            

            GETAllelesForTaxonUsingGETResponse res = sdk.agr.getAllelesForTaxonUsingGET(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getExpressionForTaxonUsingGET

Get expression annotations submitted by RGD to AGR by taxonId

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETExpressionForTaxonUsingGETRequest;
import org.openapis.openapi.models.operations.GETExpressionForTaxonUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETExpressionForTaxonUsingGETRequest req = new GETExpressionForTaxonUsingGETRequest("quibusdam");            

            GETExpressionForTaxonUsingGETResponse res = sdk.agr.getExpressionForTaxonUsingGET(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGenesForLatestAssemblyUsingGET

Get gene records submitted by RGD to AGR by taxonId

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETGenesForLatestAssemblyUsingGETRequest;
import org.openapis.openapi.models.operations.GETGenesForLatestAssemblyUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETGenesForLatestAssemblyUsingGETRequest req = new GETGenesForLatestAssemblyUsingGETRequest("unde");            

            GETGenesForLatestAssemblyUsingGETResponse res = sdk.agr.getGenesForLatestAssemblyUsingGET(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPhenotypesForTaxonUsingGET

Get phenotype annotations submitted by RGD to AGR by taxonId

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETPhenotypesForTaxonUsingGETRequest;
import org.openapis.openapi.models.operations.GETPhenotypesForTaxonUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETPhenotypesForTaxonUsingGETRequest req = new GETPhenotypesForTaxonUsingGETRequest("nulla");            

            GETPhenotypesForTaxonUsingGETResponse res = sdk.agr.getPhenotypesForTaxonUsingGET(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVariantsForTaxonUsingGET

Get basic variant records submitted by RGD to AGR by taxonId

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETVariantsForTaxonUsingGETRequest;
import org.openapis.openapi.models.operations.GETVariantsForTaxonUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETVariantsForTaxonUsingGETRequest req = new GETVariantsForTaxonUsingGETRequest("corrupti");            

            GETVariantsForTaxonUsingGETResponse res = sdk.agr.getVariantsForTaxonUsingGET(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
