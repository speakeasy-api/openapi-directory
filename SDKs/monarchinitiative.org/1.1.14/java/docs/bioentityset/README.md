# bioentityset

## Overview

Operations over sets of entities

### Available Operations

* [getEntitySetAssociations](#getentitysetassociations) - Returns compact associations for a given input set
* [getEntitySetGraphResource](#getentitysetgraphresource) - TODO Graph object spanning all entities
* [getEntitySetSummary](#getentitysetsummary) - Summary statistics for objects associated
* [getOverRepresentation](#getoverrepresentation) - Summary statistics for objects associated

## getEntitySetAssociations

Returns compact associations for a given input set

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEntitySetAssociationsRequest;
import org.openapis.openapi.models.operations.GetEntitySetAssociationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEntitySetAssociationsRequest req = new GetEntitySetAssociationsRequest() {{
                background = new String[]{{
                    add("dicta"),
                    add("iusto"),
                }};
                objectCategory = "esse";
                objectSlim = "praesentium";
                subject = new String[]{{
                    add("reiciendis"),
                    add("vel"),
                    add("architecto"),
                    add("fugiat"),
                }};
            }};            

            GetEntitySetAssociationsResponse res = sdk.bioentityset.getEntitySetAssociations(req);

            if (res.associationResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEntitySetGraphResource

TODO Graph object spanning all entities

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEntitySetGraphResourceRequest;
import org.openapis.openapi.models.operations.GetEntitySetGraphResourceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEntitySetGraphResourceRequest req = new GetEntitySetGraphResourceRequest() {{
                background = new String[]{{
                    add("dicta"),
                }};
                objectCategory = "odio";
                objectSlim = "tempora";
                subject = new String[]{{
                    add("ex"),
                    add("consectetur"),
                }};
            }};            

            GetEntitySetGraphResourceResponse res = sdk.bioentityset.getEntitySetGraphResource(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEntitySetSummary

Summary statistics for objects associated

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEntitySetSummaryRequest;
import org.openapis.openapi.models.operations.GetEntitySetSummaryResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEntitySetSummaryRequest req = new GetEntitySetSummaryRequest() {{
                background = new String[]{{
                    add("ipsa"),
                    add("laborum"),
                }};
                objectCategory = "sunt";
                objectSlim = "nostrum";
                subject = new String[]{{
                    add("expedita"),
                    add("aliquid"),
                    add("officia"),
                    add("suscipit"),
                }};
            }};            

            GetEntitySetSummaryResponse res = sdk.bioentityset.getEntitySetSummary(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOverRepresentation

Summary statistics for objects associated

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOverRepresentationRequest;
import org.openapis.openapi.models.operations.GetOverRepresentationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetOverRepresentationRequest req = new GetOverRepresentationRequest() {{
                background = new String[]{{
                    add("perferendis"),
                    add("eum"),
                }};
                maxPValue = "voluptas";
                objectCategory = "iste";
                ontology = "id";
                subject = new String[]{{
                    add("error"),
                }};
                subjectCategory = "possimus";
                taxon = "voluptates";
            }};            

            GetOverRepresentationResponse res = sdk.bioentityset.getOverRepresentation(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
