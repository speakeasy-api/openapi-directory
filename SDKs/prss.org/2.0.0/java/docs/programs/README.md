# programs

## Overview

Program information including searching for existing programs or fetching a specific program. A program is a collection of episodes that are delivered by ContentDepot as a live stream or pre-recorded files.

### Available Operations

* [getApiV2ProgramsSearch](#getapiv2programssearch) - Optimized free-text search for programs using various filters.
* [getApiV2ProgramsId](#getapiv2programsid) - Returns the program matching the given ID.

## getApiV2ProgramsSearch

Optimized free-text search for programs using various filters.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV2ProgramsSearchRequest;
import org.openapis.openapi.models.operations.GetApiV2ProgramsSearchResponse;
import org.openapis.openapi.models.operations.GetApiV2ProgramsSearchSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV2ProgramsSearchRequest req = new GetApiV2ProgramsSearchRequest() {{
                keywords = "est";
                pageSize = 653140;
                pageStart = 670638;
            }};            

            GetApiV2ProgramsSearchResponse res = sdk.programs.getApiV2ProgramsSearch(req, new GetApiV2ProgramsSearchSecurity("dolores") {{
                cdOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.programs != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiV2ProgramsId

Returns the program matching the given ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV2ProgramsIdRequest;
import org.openapis.openapi.models.operations.GetApiV2ProgramsIdResponse;
import org.openapis.openapi.models.operations.GetApiV2ProgramsIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV2ProgramsIdRequest req = new GetApiV2ProgramsIdRequest(210382L);            

            GetApiV2ProgramsIdResponse res = sdk.programs.getApiV2ProgramsId(req, new GetApiV2ProgramsIdSecurity("corporis") {{
                cdOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.program != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
