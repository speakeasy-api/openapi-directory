# branch

## Overview

Endpoint for getting Branch data

### Available Operations

* [getBranches](#getbranches) - Gets a list of all `Branch` objects.
* [headBranches](#headbranches) - Gets header information on the current set of `Branch` data

## getBranches

Gets a list of all `Branch` objects.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBranchesRequest;
import org.openapis.openapi.models.operations.GetBranchesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBranchesRequest req = new GetBranchesRequest() {{
                ifModifiedSince = "deserunt";
                ifNoneMatch = "suscipit";
            }};            

            GetBranchesResponse res = sdk.branch.getBranches(req);

            if (res.getBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## headBranches

Gets header information on the current set of `Branch` data

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.HeadBranchesRequest;
import org.openapis.openapi.models.operations.HeadBranchesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            HeadBranchesRequest req = new HeadBranchesRequest() {{
                ifModifiedSince = "iure";
                ifNoneMatch = "magnam";
            }};            

            HeadBranchesResponse res = sdk.branch.headBranches(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
