# bioentitysetSlimmer

## Overview

maps a set of entities to a slim

### Available Operations

* [getEntitySetAnatomySlimmer](#getentitysetanatomyslimmer) - For a given gene(s), summarize its annotations over a defined set of slim
* [getEntitySetFunctionSlimmer](#getentitysetfunctionslimmer) - For a given gene(s), summarize its annotations over a defined set of slim
* [getEntitySetPhenotypeSlimmer](#getentitysetphenotypeslimmer) - For a given gene(s), summarize its annotations over a defined set of slim

## getEntitySetAnatomySlimmer

For a given gene(s), summarize its annotations over a defined set of slim

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEntitySetAnatomySlimmerRequest;
import org.openapis.openapi.models.operations.GetEntitySetAnatomySlimmerResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEntitySetAnatomySlimmerRequest req = new GetEntitySetAnatomySlimmerRequest(                new String[]{{
                                add("enim"),
                                add("vitae"),
                                add("repellendus"),
                            }},                 new String[]{{
                                add("quo"),
                                add("ex"),
                            }}) {{
                excludeAutomaticAssertions = false;
                rows = 281153L;
                start = 321043L;
            }};            

            GetEntitySetAnatomySlimmerResponse res = sdk.bioentitysetSlimmer.getEntitySetAnatomySlimmer(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEntitySetFunctionSlimmer

For a given gene(s), summarize its annotations over a defined set of slim

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEntitySetFunctionSlimmerRelationshipTypeEnum;
import org.openapis.openapi.models.operations.GetEntitySetFunctionSlimmerRequest;
import org.openapis.openapi.models.operations.GetEntitySetFunctionSlimmerResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEntitySetFunctionSlimmerRequest req = new GetEntitySetFunctionSlimmerRequest(                new String[]{{
                                add("voluptatem"),
                                add("molestias"),
                                add("cum"),
                            }},                 new String[]{{
                                add("beatae"),
                                add("voluptatum"),
                            }}) {{
                excludeAutomaticAssertions = false;
                relationshipType = GetEntitySetFunctionSlimmerRelationshipTypeEnum.ACTS_UPSTREAM_OF_OR_WITHIN;
                rows = 85233L;
                start = 703218L;
            }};            

            GetEntitySetFunctionSlimmerResponse res = sdk.bioentitysetSlimmer.getEntitySetFunctionSlimmer(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEntitySetPhenotypeSlimmer

For a given gene(s), summarize its annotations over a defined set of slim

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEntitySetPhenotypeSlimmerRequest;
import org.openapis.openapi.models.operations.GetEntitySetPhenotypeSlimmerResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEntitySetPhenotypeSlimmerRequest req = new GetEntitySetPhenotypeSlimmerRequest(                new String[]{{
                                add("culpa"),
                                add("voluptatem"),
                                add("sapiente"),
                            }},                 new String[]{{
                                add("architecto"),
                                add("fuga"),
                                add("pariatur"),
                                add("debitis"),
                            }}) {{
                excludeAutomaticAssertions = false;
                rows = 29190L;
                start = 1207L;
            }};            

            GetEntitySetPhenotypeSlimmerResponse res = sdk.bioentitysetSlimmer.getEntitySetPhenotypeSlimmer(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
