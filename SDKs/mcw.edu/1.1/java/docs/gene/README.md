# gene

### Available Operations

* [getAllAnnotatedGenesUsingGET](#getallannotatedgenesusingget) - Return a list of genes annotated to an ontology term
* [getAnnotatedGenesUsingPOST](#getannotatedgenesusingpost) - Return a list of genes annotated to an ontology term
* [getGeneAllelesUsingGET](#getgeneallelesusingget) - Return a list of gene alleles
* [getGeneByMapKeyUsingGET](#getgenebymapkeyusingget) - Return a list of all genes with position information for an assembly
* [getGeneByRgdIdUsingGET](#getgenebyrgdidusingget) - Get a gene record by RGD ID
* [getGeneBySymbolUsingGET](#getgenebysymbolusingget) - Get a gene record by symbol and species type key
* [getGeneOrthologsUsingGET](#getgeneorthologsusingget) - Return a list of gene orthologs
* [getGenesAnnotatedUsingGET](#getgenesannotatedusingget) - Return a list of genes annotated to an ontology term
* [getGenesByAffyIdUsingGET](#getgenesbyaffyidusingget) - Return a list of genes for an affymetrix ID
* [getGenesByAliasSymbolUsingGET](#getgenesbyaliassymbolusingget) - Return a list of genes for an alias and species
* [getGenesByKeywordUsingGET](#getgenesbykeywordusingget) - Return a list of genes by keyword and species type key
* [getGenesByPositionUsingGET](#getgenesbypositionusingget) - Return a list of genes position and map key
* [getGenesBySpeciesUsingGET](#getgenesbyspeciesusingget) - Return a list of all genes for a species in RGD
* [getGenesInRegionUsingGET](#getgenesinregionusingget) - Return a list of genes in region
* [getMappedGenesByPositionUsingGET](#getmappedgenesbypositionusingget) - Return a list of genes position and map key
* [getOrthologsByListUsingPOST](#getorthologsbylistusingpost) - Return a list of gene orthologs

## getAllAnnotatedGenesUsingGET

Return a list of genes annotated to an ontology term

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETAllAnnotatedGenesUsingGETRequest;
import org.openapis.openapi.models.operations.GETAllAnnotatedGenesUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETAllAnnotatedGenesUsingGETRequest req = new GETAllAnnotatedGenesUsingGETRequest("quo");            

            GETAllAnnotatedGenesUsingGETResponse res = sdk.gene.getAllAnnotatedGenesUsingGET(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAnnotatedGenesUsingPOST

Return a list of genes annotated to an ontology term

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAnnotatedGenesUsingPOSTResponse;
import org.openapis.openapi.models.shared.AnnotatedGeneRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.AnnotatedGeneRequest req = new AnnotatedGeneRequest() {{
                accId = "odit";
                evidenceCodes = new String[]{{
                    add("at"),
                    add("maiores"),
                    add("molestiae"),
                    add("quod"),
                }};
                speciesTypeKeys = new Integer[]{{
                    add(461479),
                    add(520478),
                    add(780529),
                    add(678880),
                }};
            }};            

            GetAnnotatedGenesUsingPOSTResponse res = sdk.gene.getAnnotatedGenesUsingPOST(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGeneAllelesUsingGET

Return a list of gene alleles

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETGeneAllelesUsingGETRequest;
import org.openapis.openapi.models.operations.GETGeneAllelesUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETGeneAllelesUsingGETRequest req = new GETGeneAllelesUsingGETRequest(118274);            

            GETGeneAllelesUsingGETResponse res = sdk.gene.getGeneAllelesUsingGET(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGeneByMapKeyUsingGET

Return a list of all genes with position information for an assembly

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETGeneByMapKeyUsingGETRequest;
import org.openapis.openapi.models.operations.GETGeneByMapKeyUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETGeneByMapKeyUsingGETRequest req = new GETGeneByMapKeyUsingGETRequest(720633);            

            GETGeneByMapKeyUsingGETResponse res = sdk.gene.getGeneByMapKeyUsingGET(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGeneByRgdIdUsingGET

Get a gene record by RGD ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETGeneByRgdIdUsingGETRequest;
import org.openapis.openapi.models.operations.GETGeneByRgdIdUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETGeneByRgdIdUsingGETRequest req = new GETGeneByRgdIdUsingGETRequest(639921);            

            GETGeneByRgdIdUsingGETResponse res = sdk.gene.getGeneByRgdIdUsingGET(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGeneBySymbolUsingGET

Get a gene record by symbol and species type key

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETGeneBySymbolUsingGETRequest;
import org.openapis.openapi.models.operations.GETGeneBySymbolUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETGeneBySymbolUsingGETRequest req = new GETGeneBySymbolUsingGETRequest(582020, "fugit");            

            GETGeneBySymbolUsingGETResponse res = sdk.gene.getGeneBySymbolUsingGET(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGeneOrthologsUsingGET

Return a list of gene orthologs

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETGeneOrthologsUsingGETRequest;
import org.openapis.openapi.models.operations.GETGeneOrthologsUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETGeneOrthologsUsingGETRequest req = new GETGeneOrthologsUsingGETRequest(537373);            

            GETGeneOrthologsUsingGETResponse res = sdk.gene.getGeneOrthologsUsingGET(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGenesAnnotatedUsingGET

Return a list of genes annotated to an ontology term

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETGenesAnnotatedUsingGETRequest;
import org.openapis.openapi.models.operations.GETGenesAnnotatedUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETGenesAnnotatedUsingGETRequest req = new GETGenesAnnotatedUsingGETRequest("hic", 758616);            

            GETGenesAnnotatedUsingGETResponse res = sdk.gene.getGenesAnnotatedUsingGET(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGenesByAffyIdUsingGET

Return a list of genes for an affymetrix ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETGenesByAffyIdUsingGETRequest;
import org.openapis.openapi.models.operations.GETGenesByAffyIdUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETGenesByAffyIdUsingGETRequest req = new GETGenesByAffyIdUsingGETRequest("totam", 105907);            

            GETGenesByAffyIdUsingGETResponse res = sdk.gene.getGenesByAffyIdUsingGET(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGenesByAliasSymbolUsingGET

Return a list of genes for an alias and species

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETGenesByAliasSymbolUsingGETRequest;
import org.openapis.openapi.models.operations.GETGenesByAliasSymbolUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETGenesByAliasSymbolUsingGETRequest req = new GETGenesByAliasSymbolUsingGETRequest("commodi", 473600);            

            GETGenesByAliasSymbolUsingGETResponse res = sdk.gene.getGenesByAliasSymbolUsingGET(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGenesByKeywordUsingGET

Return a list of genes by keyword and species type key

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETGenesByKeywordUsingGETRequest;
import org.openapis.openapi.models.operations.GETGenesByKeywordUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETGenesByKeywordUsingGETRequest req = new GETGenesByKeywordUsingGETRequest("modi", 186332);            

            GETGenesByKeywordUsingGETResponse res = sdk.gene.getGenesByKeywordUsingGET(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGenesByPositionUsingGET

Return a list of genes position and map key

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETGenesByPositionUsingGETRequest;
import org.openapis.openapi.models.operations.GETGenesByPositionUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETGenesByPositionUsingGETRequest req = new GETGenesByPositionUsingGETRequest("impedit", 736918, 456150L, 216550L);            

            GETGenesByPositionUsingGETResponse res = sdk.gene.getGenesByPositionUsingGET(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGenesBySpeciesUsingGET

Return a list of all genes for a species in RGD

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETGenesBySpeciesUsingGETRequest;
import org.openapis.openapi.models.operations.GETGenesBySpeciesUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETGenesBySpeciesUsingGETRequest req = new GETGenesBySpeciesUsingGETRequest(568434);            

            GETGenesBySpeciesUsingGETResponse res = sdk.gene.getGenesBySpeciesUsingGET(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGenesInRegionUsingGET

Return a list of genes in region

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETGenesInRegionUsingGETRequest;
import org.openapis.openapi.models.operations.GETGenesInRegionUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETGenesInRegionUsingGETRequest req = new GETGenesInRegionUsingGETRequest("aspernatur", 18789, 324141L, 617636L);            

            GETGenesInRegionUsingGETResponse res = sdk.gene.getGenesInRegionUsingGET(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMappedGenesByPositionUsingGET

Return a list of genes position and map key

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETMappedGenesByPositionUsingGETRequest;
import org.openapis.openapi.models.operations.GETMappedGenesByPositionUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETMappedGenesByPositionUsingGETRequest req = new GETMappedGenesByPositionUsingGETRequest("sed", 612096, 222321L, 616934L);            

            GETMappedGenesByPositionUsingGETResponse res = sdk.gene.getMappedGenesByPositionUsingGET(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrthologsByListUsingPOST

Return a list of gene orthologs

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrthologsByListUsingPOSTResponse;
import org.openapis.openapi.models.shared.OrthologRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.OrthologRequest req = new OrthologRequest() {{
                rgdIds = new Integer[]{{
                    add(943749),
                    add(902599),
                }};
                speciesTypeKeys = new Integer[]{{
                    add(449950),
                    add(359508),
                    add(613064),
                }};
            }};            

            GetOrthologsByListUsingPOSTResponse res = sdk.gene.getOrthologsByListUsingPOST(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
