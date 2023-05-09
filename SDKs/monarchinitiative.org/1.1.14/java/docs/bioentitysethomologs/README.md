# bioentitysetHomologs

## Overview

Map gene IDs to their homologs

### Available Operations

* [getEntitySetHomologs](#getentitysethomologs) - Returns homology associations for a given input set of genes

## getEntitySetHomologs

Returns homology associations for a given input set of genes

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEntitySetHomologsRequest;
import org.openapis.openapi.models.operations.GetEntitySetHomologsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEntitySetHomologsRequest req = new GetEntitySetHomologsRequest() {{
                subject = new String[]{{
                    add("laborum"),
                    add("libero"),
                    add("ad"),
                }};
            }};            

            GetEntitySetHomologsResponse res = sdk.bioentitysetHomologs.getEntitySetHomologs(req);

            if (res.associationResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
