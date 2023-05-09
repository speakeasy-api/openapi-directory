# search

## Overview

Methods to search for target or diseases.

### Available Operations

* [getSearch](#getsearch) - Search for a disease or a target

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

            GetSearchRequest req = new GetSearchRequest("culpa") {{
                filter = "doloribus";
                from = "sapiente";
                size = "architecto";
            }};            

            GetSearchResponse res = sdk.search.getSearch(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
