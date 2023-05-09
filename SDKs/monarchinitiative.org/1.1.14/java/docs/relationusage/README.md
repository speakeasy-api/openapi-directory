# relationUsage

## Overview

Usage of different relationship types

### Available Operations

* [getRelationUsageBetweenResource](#getrelationusagebetweenresource) - All relations used plus count of associations
* [getRelationUsagePivotLabelResource](#getrelationusagepivotlabelresource) - Relation usage count for all subj x obj category combinations, showing label
* [getRelationUsagePivotResource](#getrelationusagepivotresource) - Relation usage count for all subj x obj category combinations
* [getRelationUsageResource](#getrelationusageresource) - All relations used plus count of associations

## getRelationUsageBetweenResource

All relations used plus count of associations

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRelationUsageBetweenResourceRequest;
import org.openapis.openapi.models.operations.GetRelationUsageBetweenResourceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRelationUsageBetweenResourceRequest req = new GetRelationUsageBetweenResourceRequest("dignissimos", "neque") {{
                evidence = "quo";
                subjectTaxon = "deleniti";
            }};            

            GetRelationUsageBetweenResourceResponse res = sdk.relationUsage.getRelationUsageBetweenResource(req);

            if (res.associationResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRelationUsagePivotLabelResource

Relation usage count for all subj x obj category combinations, showing label

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRelationUsagePivotLabelResourceRequest;
import org.openapis.openapi.models.operations.GetRelationUsagePivotLabelResourceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRelationUsagePivotLabelResourceRequest req = new GetRelationUsagePivotLabelResourceRequest() {{
                evidence = "quibusdam";
                subjectTaxon = "iure";
            }};            

            GetRelationUsagePivotLabelResourceResponse res = sdk.relationUsage.getRelationUsagePivotLabelResource(req);

            if (res.associationResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRelationUsagePivotResource

Relation usage count for all subj x obj category combinations

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRelationUsagePivotResourceRequest;
import org.openapis.openapi.models.operations.GetRelationUsagePivotResourceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRelationUsagePivotResourceRequest req = new GetRelationUsagePivotResourceRequest() {{
                evidence = "odit";
                subjectTaxon = "voluptatibus";
            }};            

            GetRelationUsagePivotResourceResponse res = sdk.relationUsage.getRelationUsagePivotResource(req);

            if (res.associationResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRelationUsageResource

All relations used plus count of associations

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRelationUsageResourceRequest;
import org.openapis.openapi.models.operations.GetRelationUsageResourceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRelationUsageResourceRequest req = new GetRelationUsageResourceRequest() {{
                evidence = "vel";
                subjectTaxon = "magnam";
            }};            

            GetRelationUsageResourceResponse res = sdk.relationUsage.getRelationUsageResource(req);

            if (res.associationResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
