# episodes

## Overview

An episode is a specific instance of a program that will air on a specific date and time.

### Available Operations

* [getApiV2Episodes](#getapiv2episodes) - Gets episodes matching the given criteria.
* [getApiV2EpisodesId](#getapiv2episodesid) - Returns the episode matching the given ID.

## getApiV2Episodes

Gets episodes matching the given criteria.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV2EpisodesOrderByIDEnum;
import org.openapis.openapi.models.operations.GetApiV2EpisodesRequest;
import org.openapis.openapi.models.operations.GetApiV2EpisodesResponse;
import org.openapis.openapi.models.operations.GetApiV2EpisodesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV2EpisodesRequest req = new GetApiV2EpisodesRequest(800911L) {{
                beginAirDateAfter = OffsetDateTime.parse("2022-06-25T00:37:01.696Z");
                endAirDateBefore = OffsetDateTime.parse("2020-12-18T15:02:44.758Z");
                id = 118274L;
                orderById = GetApiV2EpisodesOrderByIDEnum.DESC;
                pageSize = 639921;
                pageStart = 582020;
            }};            

            GetApiV2EpisodesResponse res = sdk.episodes.getApiV2Episodes(req, new GetApiV2EpisodesSecurity("fugit") {{
                cdOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.episodes != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiV2EpisodesId

Returns the episode matching the given ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV2EpisodesIdRequest;
import org.openapis.openapi.models.operations.GetApiV2EpisodesIdResponse;
import org.openapis.openapi.models.operations.GetApiV2EpisodesIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV2EpisodesIdRequest req = new GetApiV2EpisodesIdRequest(537373L);            

            GetApiV2EpisodesIdResponse res = sdk.episodes.getApiV2EpisodesId(req, new GetApiV2EpisodesIdSecurity("hic") {{
                cdOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.episode != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
