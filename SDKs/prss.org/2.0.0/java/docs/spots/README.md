# spots

## Overview

A spot is an audio file that is to be inserted into streams using cues.

### Available Operations

* [deleteApiV2SpotsId](#deleteapiv2spotsid) - Deletes the spot with the given ID.
* [getApiV2Spots](#getapiv2spots) - Returns the spots matching the query parameters.
* [getApiV2SpotsId](#getapiv2spotsid) - Returns the spot matching the given ID.
* [postApiV2Spots](#postapiv2spots) - Creates a new spot.

## deleteApiV2SpotsId

Deletes the spot with the given ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteApiV2SpotsIdRequest;
import org.openapis.openapi.models.operations.DeleteApiV2SpotsIdResponse;
import org.openapis.openapi.models.operations.DeleteApiV2SpotsIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteApiV2SpotsIdRequest req = new DeleteApiV2SpotsIdRequest(13571L);            

            DeleteApiV2SpotsIdResponse res = sdk.spots.deleteApiV2SpotsId(req, new DeleteApiV2SpotsIdSecurity("quasi") {{
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

## getApiV2Spots

Returns the spots matching the query parameters.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV2SpotsOrderByIDEnum;
import org.openapis.openapi.models.operations.GetApiV2SpotsRequest;
import org.openapis.openapi.models.operations.GetApiV2SpotsResponse;
import org.openapis.openapi.models.operations.GetApiV2SpotsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV2SpotsRequest req = new GetApiV2SpotsRequest() {{
                orderById = GetApiV2SpotsOrderByIDEnum.DESC;
                pageSize = 837945;
                pageStart = 673660;
            }};            

            GetApiV2SpotsResponse res = sdk.spots.getApiV2Spots(req, new GetApiV2SpotsSecurity("quasi") {{
                cdOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.spots != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiV2SpotsId

Returns the spot matching the given ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV2SpotsIdRequest;
import org.openapis.openapi.models.operations.GetApiV2SpotsIdResponse;
import org.openapis.openapi.models.operations.GetApiV2SpotsIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV2SpotsIdRequest req = new GetApiV2SpotsIdRequest(971945L);            

            GetApiV2SpotsIdResponse res = sdk.spots.getApiV2SpotsId(req, new GetApiV2SpotsIdSecurity("voluptatibus") {{
                cdOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.spot != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postApiV2Spots

Creates a new spot.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostApiV2SpotsRequestBody;
import org.openapis.openapi.models.operations.PostApiV2SpotsResponse;
import org.openapis.openapi.models.operations.PostApiV2SpotsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostApiV2SpotsRequestBody req = new PostApiV2SpotsRequestBody("vero", "nihil", "praesentium");            

            PostApiV2SpotsResponse res = sdk.spots.postApiV2Spots(req, new PostApiV2SpotsSecurity("voluptatibus") {{
                cdOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.spot != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
