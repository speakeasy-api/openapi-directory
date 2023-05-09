# public_

## Overview

Publicly supported stable API.

### Available Operations

* [getAssociationById](#getassociationbyid) - Get association by id
* [getAssociationFilter](#getassociationfilter) - Filter available associations
* [getDataMetrics](#getdatametrics) - Get metrics about the current data release
* [getDataStats](#getdatastats) - Get statistics about the current data release
* [getEvidenceById](#getevidencebyid) - Get evidence by ID
* [getEvidenceFilter](#getevidencefilter) - Filter available evidence
* [getPing](#getping) - Ping service
* [getSearch](#getsearch) - Search for a disease or a target
* [getTherapeuticAreas](#gettherapeuticareas) - Get the list of therapeutic areas about the current data release
* [getVersion](#getversion) - Get API version
* [postAssociationFilter](#postassociationfilter) - Batch query available associations
* [postEvidenceById](#postevidencebyid) - Get evidence for a list of IDs
* [postEvidenceFilter](#postevidencefilter) - Batch filter available evidence

## getAssociationById

Once we integrate all evidence connecting a target to a specific disease, we
 compute an association score by the means of an harmonic sum. This *association score* provides
 an indication of how strong the evidence behind each connection is and can be
 used to rank genes in order of likelihood as drug targets.
 The association ID is constructed by using the Ensembl ID of the gene and the
 EFO ID for the disease (e.g. ENSG00000073756-EFO_0003767).
 The method returns an association object, which contains the data and summary
 on each evidence type included in the calculation of the score, as well as the score itself.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAssociationByIdRequest;
import org.openapis.openapi.models.operations.GetAssociationByIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAssociationByIdRequest req = new GetAssociationByIdRequest("cum");            

            GetAssociationByIdResponse res = sdk.public_.getAssociationById(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAssociationFilter

More complex queries for associations scores and objects can be done using
this method, which allows to sort in different order, restrict to a specific class
of diseases or targets, as well as filtering results by score and associated pathways.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAssociationFilterRequest;
import org.openapis.openapi.models.operations.GetAssociationFilterResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAssociationFilterRequest req = new GetAssociationFilterRequest() {{
                datasource = "esse";
                datastructure = "ipsum";
                datatype = "excepturi";
                direct = false;
                disease = "aspernatur";
                facets = false;
                fields = "perferendis";
                format = "ad";
                from = 6176.36;
                pathway = "sed";
                scorevalueMax = 6120.96;
                scorevalueMin = 2223.21;
                scorevalueTypes = "natus";
                search = "laboriosam";
                size = 9437.49;
                sort = "saepe";
                target = "fuga";
                targetClass = "in";
                therapeuticArea = "corporis";
                uniprotkw = "iste";
            }};            

            GetAssociationFilterResponse res = sdk.public_.getAssociationFilter(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDataMetrics

Returns the metrics about associations and evidences, divided by datasource, genes and so on.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDataMetricsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDataMetricsResponse res = sdk.public_.getDataMetrics();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDataStats

Returns the number of associations and evidences, divided by datasource.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDataStatsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDataStatsResponse res = sdk.public_.getDataStats();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEvidenceById

We call **evidence** a unit of data that support a connection between a target and a disease.
The Open Targets Platform integrates multiple types of evidence including genetic associations,
somatic mutations, RNA expression and target-disease associations mined from the literature.
This method allows you to retrieve a single evidence item or a list of pieces of evidence by using their
targetvalidation.org ID.

Evidence IDs are unique within each data release (e.g. `8ed3d7568a8c6cac9c95cfb869bac762` for release 1.2).
You can obtain a list of evidence and their IDs from other API calls such as [/public/evidence/filter](#!/public/get_public_evidence_filter).

**Please note** that a specific evidence ID may change between data releases. We can not guarantee that a specific evidence ID will refer to the same piece of evidence connecting a target and its diseases.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEvidenceByIdRequest;
import org.openapis.openapi.models.operations.GetEvidenceByIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEvidenceByIdRequest req = new GetEvidenceByIdRequest("iure");            

            GetEvidenceByIdResponse res = sdk.public_.getEvidenceById(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEvidenceFilter

The filter method allows to retrieve the specific data that supports a connection between targets and diseases.
Filters can be used to restrict the results by source and type of data,
or limit results to targets which are part of a particular pathway.
Minimum and maximum scores can be specified as well as the type of evidence linking target and disease.
**Note** that multiple genes and diseases can be specified in the same request.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEvidenceFilterRequest;
import org.openapis.openapi.models.operations.GetEvidenceFilterResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEvidenceFilterRequest req = new GetEvidenceFilterRequest() {{
                dataSource = "saepe";
                datastructure = "quidem";
                datatype = "architecto";
                disease = "ipsa";
                fields = "reiciendis";
                format = "est";
                from = 6531.4;
                pathway = "laborum";
                scorevalueMax = 1709.09;
                scorevalueMin = 2103.82;
                size = 3581.52;
                sort = "explicabo";
                target = "nobis";
                uniprotkw = "enim";
            }};            

            GetEvidenceFilterResponse res = sdk.public_.getEvidenceFilter(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPing

Check if the API is up


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPingResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPingResponse res = sdk.public_.getPing();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSearch

This method allows you to look for gene or diseases of interest using a free text search,
replicating the functionality of the search box on our homepage. It should be used to identify
the best match for a disease or target of interest, rather than gathering a specific set of evidence.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSearchRequest;
import org.openapis.openapi.models.operations.GetSearchResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSearchRequest req = new GetSearchRequest("omnis") {{
                filter = "nemo";
                from = "minima";
                size = "excepturi";
            }};            

            GetSearchResponse res = sdk.public_.getSearch(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTherapeuticAreas

Returns the list of therapeutic areas for the current data release


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTherapeuticAreasResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTherapeuticAreasResponse res = sdk.public_.getTherapeuticAreas();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVersion

Returns current API version.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVersionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetVersionResponse res = sdk.public_.getVersion();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAssociationFilter

Complex queries and filters for association objects can also be submitted using a JSON
object and the equivalent POST method.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAssociationFilterResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = "{"target":["target1", "target2"]}
"            

            PostAssociationFilterResponse res = sdk.public_.postAssociationFilter(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postEvidenceById

This is the POST version of [/public/evidence](#!/public/get_public_evidence).
It allows to query for a list of evidence strings encoded in a `json` object to be passed in the body.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostEvidenceByIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = "{"id":["id1", "id2"]}
"            

            PostEvidenceByIdResponse res = sdk.public_.postEvidenceById(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postEvidenceFilter

POST version of [/public/evidence/filter](#!/public/get_public_evidence_filter).
Filters can be specified as part of a `json` object in the body, simplifying the submission of queries.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostEvidenceFilterResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = "{"target":["ENSG00000094755", "ENSG00000167207"], "disease":["EFO_0003767"]}
"            

            PostEvidenceFilterResponse res = sdk.public_.postEvidenceFilter(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
