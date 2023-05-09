# graph

## Overview

Operations over data graphs

### Available Operations

* [getEdgeResource](#getedgeresource) - Returns edges emanating from a given node
* [getNodeResource](#getnoderesource) - Returns a graph node

## getEdgeResource

Returns edges emanating from a given node

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEdgeResourceDirectionEnum;
import org.openapis.openapi.models.operations.GetEdgeResourceGraphEnum;
import org.openapis.openapi.models.operations.GetEdgeResourceRequest;
import org.openapis.openapi.models.operations.GetEdgeResourceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEdgeResourceRequest req = new GetEdgeResourceRequest("inventore") {{
                depth = 537279L;
                direction = GetEdgeResourceDirectionEnum.INCOMING;
                entail = false;
                graph = GetEdgeResourceGraphEnum.DATA;
                relationshipType = new String[]{{
                    add("consequatur"),
                }};
            }};            

            GetEdgeResourceResponse res = sdk.graph.getEdgeResource(req);

            if (res.graphs != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNodeResource

A node is an abstract representation of some kind of entity. The entity may be a physical thing such as a patient,
a molecular entity such as a gene or protein, or a conceptual entity such as a class from an ontology.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNodeResourceRequest;
import org.openapis.openapi.models.operations.GetNodeResourceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNodeResourceRequest req = new GetNodeResourceRequest("architecto");            

            GetNodeResourceResponse res = sdk.graph.getNodeResource(req);

            if (res.bioObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
