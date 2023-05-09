# dependencyGraph

## Overview

Endpoints to access Dependency Graph features.

### Available Operations

* [dependencyGraphDiffRange](#dependencygraphdiffrange) - Get a diff of the dependencies between commits

## dependencyGraphDiffRange

Gets the diff of the dependency changes between two commits of a repository, based on the changes to the dependency manifests made in those commits.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/dependency-graph#get-a-diff-of-the-dependencies-between-commits>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DependencyGraphDiffRangeRequest;
import org.openapis.openapi.models.operations.DependencyGraphDiffRangeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DependencyGraphDiffRangeRequest req = new DependencyGraphDiffRangeRequest("culpa", "aliquid", "tenetur") {{
                name = "Lila Kassulke";
            }};            

            DependencyGraphDiffRangeResponse res = sdk.dependencyGraph.dependencyGraphDiffRange(req);

            if (res.dependencyGraphDiff != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
