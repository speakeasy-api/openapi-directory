# filter

## Overview

Methods to filter the available evidence.

### Available Operations

* [getAssociationFilter](#getassociationfilter) - Filter available associations
* [getEvidenceFilter](#getevidencefilter) - Filter available evidence
* [postAssociationFilter](#postassociationfilter) - Batch query available associations
* [postEvidenceFilter](#postevidencefilter) - Batch filter available evidence

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
                datasource = "suscipit";
                datastructure = "molestiae";
                datatype = "minus";
                direct = false;
                disease = "placeat";
                facets = false;
                fields = "voluptatum";
                format = "iusto";
                from = 5680.45;
                pathway = "nisi";
                scorevalueMax = 9255.97;
                scorevalueMin = 8360.79;
                scorevalueTypes = "ab";
                search = "quis";
                size = 871.29;
                sort = "deserunt";
                target = "perferendis";
                targetClass = "ipsam";
                therapeuticArea = "repellendus";
                uniprotkw = "sapiente";
            }};            

            GetAssociationFilterResponse res = sdk.filter.getAssociationFilter(req);

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
                dataSource = "quo";
                datastructure = "odit";
                datatype = "at";
                disease = "at";
                fields = "maiores";
                format = "molestiae";
                from = 7991.59;
                pathway = "quod";
                scorevalueMax = 4614.79;
                scorevalueMin = 5204.78;
                size = 7805.29;
                sort = "dolorum";
                target = "dicta";
                uniprotkw = "nam";
            }};            

            GetEvidenceFilterResponse res = sdk.filter.getEvidenceFilter(req);

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

            PostAssociationFilterResponse res = sdk.filter.postAssociationFilter(req);

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

            PostEvidenceFilterResponse res = sdk.filter.postEvidenceFilter(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
