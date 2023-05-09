# spotInsertions

## Overview

Spot insertions define spots to play when a cue is received.

### Available Operations

* [deleteApiV2SpotinsertionsId](#deleteapiv2spotinsertionsid) - Deletes the spot insertion with the given ID.
* [getApiV2Spotinsertions](#getapiv2spotinsertions) - Returns the spot insertions matching the query parameters.
* [getApiV2SpotinsertionsId](#getapiv2spotinsertionsid) - Returns the spot insertion matching the given ID.
* [postApiV2Spotinsertions](#postapiv2spotinsertions) - Creates a new spot insertion.

## deleteApiV2SpotinsertionsId

Deletes the spot insertion with the given ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteApiV2SpotinsertionsIdRequest;
import org.openapis.openapi.models.operations.DeleteApiV2SpotinsertionsIdResponse;
import org.openapis.openapi.models.operations.DeleteApiV2SpotinsertionsIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteApiV2SpotinsertionsIdRequest req = new DeleteApiV2SpotinsertionsIdRequest(466311L);            

            DeleteApiV2SpotinsertionsIdResponse res = sdk.spotInsertions.deleteApiV2SpotinsertionsId(req, new DeleteApiV2SpotinsertionsIdSecurity("molestiae") {{
                cdOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiV2Spotinsertions

Returns the spot insertions matching the query parameters.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV2SpotinsertionsOrderByIDEnum;
import org.openapis.openapi.models.operations.GetApiV2SpotinsertionsRequest;
import org.openapis.openapi.models.operations.GetApiV2SpotinsertionsResponse;
import org.openapis.openapi.models.operations.GetApiV2SpotinsertionsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV2SpotinsertionsRequest req = new GetApiV2SpotinsertionsRequest() {{
                orderById = GetApiV2SpotinsertionsOrderByIDEnum.ASC;
                pageSize = 623510;
                pageStart = 158969;
            }};            

            GetApiV2SpotinsertionsResponse res = sdk.spotInsertions.getApiV2Spotinsertions(req, new GetApiV2SpotinsertionsSecurity("quis") {{
                cdOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.spotInsertions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiV2SpotinsertionsId

Returns the spot insertion matching the given ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV2SpotinsertionsIdRequest;
import org.openapis.openapi.models.operations.GetApiV2SpotinsertionsIdResponse;
import org.openapis.openapi.models.operations.GetApiV2SpotinsertionsIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV2SpotinsertionsIdRequest req = new GetApiV2SpotinsertionsIdRequest(110375L);            

            GetApiV2SpotinsertionsIdResponse res = sdk.spotInsertions.getApiV2SpotinsertionsId(req, new GetApiV2SpotinsertionsIdSecurity("laborum") {{
                cdOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.spotInsertion != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postApiV2Spotinsertions

Creates a new spot insertion.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostApiV2SpotinsertionsResponse;
import org.openapis.openapi.models.operations.PostApiV2SpotinsertionsSecurity;
import org.openapis.openapi.models.shared.SpotInsertionInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.SpotInsertionInput req = new SpotInsertionInput(656330L, "S:000_SPOT", 317202, LocalDate.parse("2020-01-31"), 138183L,                 new Long[]{{
                                add(196582L),
                                add(949572L),
                                add(368725L),
                                add(662527L),
                            }}, LocalDate.parse("2020-01-31"));            

            PostApiV2SpotinsertionsResponse res = sdk.spotInsertions.postApiV2Spotinsertions(req, new PostApiV2SpotinsertionsSecurity("possimus") {{
                cdOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.spotInsertion != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
