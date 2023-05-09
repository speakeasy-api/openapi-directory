# private_

## Overview

Unstable API methods. Subject to change without prior notice. Use at your own risk.

### Available Operations

* [getApiDocs](#getapidocs) - Browse API documentation
* [getApiSwaggerUI](#getapiswaggerui) - Browse interactive API documentation
* [getAutocomplete](#getautocomplete) - Get `autocomplete` objects.
* [getDiseaseById](#getdiseasebyid) - Find information about a disease
* [getDrugByID](#getdrugbyid) - Get drug by ID
* [getECObyID](#getecobyid) - Get evidence code by ID
* [getQuickSearch](#getquicksearch) - Search most relevant results
* [getRelationByEFOID](#getrelationbyefoid) - Find related entities by disease
* [getRelationByENSGID](#getrelationbyensgid) - Find related entities by target
* [getSwagger](#getswagger) - Get OpenAPI schema
* [getTargetByENSGID](#gettargetbyensgid) - Find information about a target
* [getTargetExpressionByENSGID](#gettargetexpressionbyensgid) - Query expression levels
* [postBestHitSearch](#postbesthitsearch) - Find the best hit
* [postDiseaseById](#postdiseasebyid) - Find information about a list of diseases
* [postEnrichmentTarget](#postenrichmenttarget) - Enrichment analysis
* [postRelation](#postrelation) - Find related entities
* [postTargetByENSGID](#posttargetbyensgid) - Find information about a list of targets
* [postTargetExpressionByENSGID](#posttargetexpressionbyensgid) - Batch query expression levels

## getApiDocs

Access api docs as served by Redoc

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiDocsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiDocsResponse res = sdk.private_.getApiDocs();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiSwaggerUI

Interactive API docs using swagger-ui

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiSwaggerUIResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiSwaggerUIResponse res = sdk.private_.getApiSwaggerUI();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAutocomplete

Search for the closest term to autocomplete in the search box.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAutocompleteRequest;
import org.openapis.openapi.models.operations.GetAutocompleteResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAutocompleteRequest req = new GetAutocompleteRequest("officia") {{
                size = "occaecati";
            }};            

            GetAutocompleteResponse res = sdk.private_.getAutocomplete(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDiseaseById

Get `disease` objects.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDiseaseByIdRequest;
import org.openapis.openapi.models.operations.GetDiseaseByIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDiseaseByIdRequest req = new GetDiseaseByIdRequest("fugit");            

            GetDiseaseByIdResponse res = sdk.private_.getDiseaseById(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDrugByID

Get `drug` objects.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDrugByIDRequest;
import org.openapis.openapi.models.operations.GetDrugByIDResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDrugByIDRequest req = new GetDrugByIDRequest("deleniti", "hic");            

            GetDrugByIDResponse res = sdk.private_.getDrugByID(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getECObyID

Get `ECO` objects.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetECObyIDRequest;
import org.openapis.openapi.models.operations.GetECObyIDResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetECObyIDRequest req = new GetECObyIDRequest("optio");            

            GetECObyIDResponse res = sdk.private_.getECObyID(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getQuickSearch

Get `search-result` objects. Enables search bar functionality.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetQuickSearchRequest;
import org.openapis.openapi.models.operations.GetQuickSearchResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetQuickSearchRequest req = new GetQuickSearchRequest("totam") {{
                size = "beatae";
            }};            

            GetQuickSearchResponse res = sdk.private_.getQuickSearch(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRelationByEFOID

Get `relation` objects starting from diseases.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRelationByEFOIDRequest;
import org.openapis.openapi.models.operations.GetRelationByEFOIDResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRelationByEFOIDRequest req = new GetRelationByEFOIDRequest("commodi");            

            GetRelationByEFOIDResponse res = sdk.private_.getRelationByEFOID(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRelationByENSGID

Get `relation` objects starting from diseases.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRelationByENSGIDRequest;
import org.openapis.openapi.models.operations.GetRelationByENSGIDResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRelationByENSGIDRequest req = new GetRelationByENSGIDRequest("molestiae");            

            GetRelationByENSGIDResponse res = sdk.private_.getRelationByENSGID(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSwagger

Get swagger.yaml specs for the API

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSwaggerResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSwaggerResponse res = sdk.private_.getSwagger();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTargetByENSGID

Get `target` objects.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTargetByENSGIDRequest;
import org.openapis.openapi.models.operations.GetTargetByENSGIDResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTargetByENSGIDRequest req = new GetTargetByENSGIDRequest("modi");            

            GetTargetByENSGIDResponse res = sdk.private_.getTargetByENSGID(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTargetExpressionByENSGID

Get `gene-expression` objects.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTargetExpressionByENSGIDRequest;
import org.openapis.openapi.models.operations.GetTargetExpressionByENSGIDResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTargetExpressionByENSGIDRequest req = new GetTargetExpressionByENSGIDRequest("qui");            

            GetTargetExpressionByENSGIDResponse res = sdk.private_.getTargetExpressionByENSGID(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postBestHitSearch

Fire the search method for multiple strings


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostBestHitSearchResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = "impedit"            

            PostBestHitSearchResponse res = sdk.private_.postBestHitSearch(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDiseaseById

Get `disease` objects.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostDiseaseByIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = "{"disease":["disease1", "disease2"],
"facets" = "true"}
"            

            PostDiseaseByIdResponse res = sdk.private_.postDiseaseById(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postEnrichmentTarget

Returns an enrichment analysis for a list of targets passed in the body


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostEnrichmentTargetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = "{"target" : ["ENSG00000001", "ENSG00000002"],
 "pvalue" : 0.001,
 "size" : 20}
"            

            PostEnrichmentTargetResponse res = sdk.private_.postEnrichmentTarget(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postRelation

Get `relation` objects.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostRelationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = "{"subject":["gene1", "gene2"]}
"            

            PostRelationResponse res = sdk.private_.postRelation(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postTargetByENSGID

Get `target` objects. Used for the target profile page.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostTargetByENSGIDResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = "{"target":["target1", "target2"],
"facets" = "true"}
"            

            PostTargetByENSGIDResponse res = sdk.private_.postTargetByENSGID(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postTargetExpressionByENSGID

Get `gene-expression` objects.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostTargetExpressionByENSGIDResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = "{"gene":["gene1", "gene2"]}
"            

            PostTargetExpressionByENSGIDResponse res = sdk.private_.postTargetExpressionByENSGID(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
