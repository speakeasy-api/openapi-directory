# annotation

### Available Operations

* [getAnnotationCountByAccIdAndObjectTypeUsingGET](#getannotationcountbyaccidandobjecttypeusingget) - Returns annotation count for ontology accession ID and object type
* [getAnnotationCountByAccIdAndSpeciesUsingGET](#getannotationcountbyaccidandspeciesusingget) - Returns annotation count for ontology accession ID and speicies
* [getAnnotationCountByAccIdUsingGET](#getannotationcountbyaccidusingget) - Returns annotation count for ontology accession ID
* [getAnnotationsByAccIdAndRgdIdUsingGET](#getannotationsbyaccidandrgdidusingget) - Returns a list of annotations by RGD ID and ontology term accession ID
* [getAnnotationsByRgdIdAndOntologyUsingGET](#getannotationsbyrgdidandontologyusingget) - Returns a list of annotations by RGD ID and ontology prefix
* [getAnnotationsByRgdIdUsingGET](#getannotationsbyrgdidusingget) - Returns a list of annotations by RGD ID
* [getAnnotationsUsingGET](#getannotationsusingget) - Returns a list annotations for an ontology term or a term and it's children
* [getAnnotationsUsingPOST](#getannotationsusingpost) - Return a list of genes annotated to an ontology term
* [getAnnotsByRefrerenceUsingGET](#getannotsbyrefrerenceusingget) - Returns a list of annotations for a reference
* [getTermAccIdsUsingGET](#gettermaccidsusingget) - Returns a list ontology term accession IDs annotated to an rgd object

## getAnnotationCountByAccIdAndObjectTypeUsingGET

Returns annotation count for ontology accession ID and object type

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETAnnotationCountByAccIdAndObjectTypeUsingGETRequest;
import org.openapis.openapi.models.operations.GETAnnotationCountByAccIdAndObjectTypeUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETAnnotationCountByAccIdAndObjectTypeUsingGETRequest req = new GETAnnotationCountByAccIdAndObjectTypeUsingGETRequest("illum", false, 423655, 623564);            

            GETAnnotationCountByAccIdAndObjectTypeUsingGETResponse res = sdk.annotation.getAnnotationCountByAccIdAndObjectTypeUsingGET(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAnnotationCountByAccIdAndSpeciesUsingGET

Returns annotation count for ontology accession ID and speicies

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETAnnotationCountByAccIdAndSpeciesUsingGETRequest;
import org.openapis.openapi.models.operations.GETAnnotationCountByAccIdAndSpeciesUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETAnnotationCountByAccIdAndSpeciesUsingGETRequest req = new GETAnnotationCountByAccIdAndSpeciesUsingGETRequest("deserunt", false, 384382);            

            GETAnnotationCountByAccIdAndSpeciesUsingGETResponse res = sdk.annotation.getAnnotationCountByAccIdAndSpeciesUsingGET(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAnnotationCountByAccIdUsingGET

Returns annotation count for ontology accession ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETAnnotationCountByAccIdUsingGETRequest;
import org.openapis.openapi.models.operations.GETAnnotationCountByAccIdUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETAnnotationCountByAccIdUsingGETRequest req = new GETAnnotationCountByAccIdUsingGETRequest("iure", false);            

            GETAnnotationCountByAccIdUsingGETResponse res = sdk.annotation.getAnnotationCountByAccIdUsingGET(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAnnotationsByAccIdAndRgdIdUsingGET

Returns a list of annotations by RGD ID and ontology term accession ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETAnnotationsByAccIdAndRgdIdUsingGETRequest;
import org.openapis.openapi.models.operations.GETAnnotationsByAccIdAndRgdIdUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETAnnotationsByAccIdAndRgdIdUsingGETRequest req = new GETAnnotationsByAccIdAndRgdIdUsingGETRequest("magnam", 891773);            

            GETAnnotationsByAccIdAndRgdIdUsingGETResponse res = sdk.annotation.getAnnotationsByAccIdAndRgdIdUsingGET(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAnnotationsByRgdIdAndOntologyUsingGET

Returns a list of annotations by RGD ID and ontology prefix

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETAnnotationsByRgdIdAndOntologyUsingGETRequest;
import org.openapis.openapi.models.operations.GETAnnotationsByRgdIdAndOntologyUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETAnnotationsByRgdIdAndOntologyUsingGETRequest req = new GETAnnotationsByRgdIdAndOntologyUsingGETRequest("ipsa", 963663);            

            GETAnnotationsByRgdIdAndOntologyUsingGETResponse res = sdk.annotation.getAnnotationsByRgdIdAndOntologyUsingGET(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAnnotationsByRgdIdUsingGET

Returns a list of annotations by RGD ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETAnnotationsByRgdIdUsingGETRequest;
import org.openapis.openapi.models.operations.GETAnnotationsByRgdIdUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETAnnotationsByRgdIdUsingGETRequest req = new GETAnnotationsByRgdIdUsingGETRequest(272656);            

            GETAnnotationsByRgdIdUsingGETResponse res = sdk.annotation.getAnnotationsByRgdIdUsingGET(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAnnotationsUsingGET

Returns a list annotations for an ontology term or a term and it's children

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETAnnotationsUsingGETRequest;
import org.openapis.openapi.models.operations.GETAnnotationsUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETAnnotationsUsingGETRequest req = new GETAnnotationsUsingGETRequest("suscipit", false, 477665);            

            GETAnnotationsUsingGETResponse res = sdk.annotation.getAnnotationsUsingGET(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAnnotationsUsingPOST

Return a list of genes annotated to an ontology term

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAnnotationsUsingPOSTResponse;
import org.openapis.openapi.models.shared.AnnotationRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.AnnotationRequest req = new AnnotationRequest() {{
                evidenceCodes = new String[]{{
                    add("placeat"),
                    add("voluptatum"),
                    add("iusto"),
                    add("excepturi"),
                }};
                ids = new String[]{{
                    add("recusandae"),
                    add("temporibus"),
                }};
                speciesTypeKeys = new Integer[]{{
                    add(337396),
                }};
                termAcc = "veritatis";
            }};            

            GetAnnotationsUsingPOSTResponse res = sdk.annotation.getAnnotationsUsingPOST(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAnnotsByRefrerenceUsingGET

Returns a list of annotations for a reference

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETAnnotsByRefrerenceUsingGETRequest;
import org.openapis.openapi.models.operations.GETAnnotsByRefrerenceUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETAnnotsByRefrerenceUsingGETRequest req = new GETAnnotsByRefrerenceUsingGETRequest(648172);            

            GETAnnotsByRefrerenceUsingGETResponse res = sdk.annotation.getAnnotsByRefrerenceUsingGET(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTermAccIdsUsingGET

Returns a list ontology term accession IDs annotated to an rgd object

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETTermAccIdsUsingGETRequest;
import org.openapis.openapi.models.operations.GETTermAccIdsUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETTermAccIdsUsingGETRequest req = new GETTermAccIdsUsingGETRequest(20218);            

            GETTermAccIdsUsingGETResponse res = sdk.annotation.getTermAccIdsUsingGET(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
