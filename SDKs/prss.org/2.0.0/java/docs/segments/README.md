# segments

## Overview

Segments include the audio content and related information such as the in-cue and out-cue.

### Available Operations

* [deleteApiV2SegmentsId](#deleteapiv2segmentsid) - Deletes the segment with the given ID.
* [getApiV2Segments](#getapiv2segments) - Returns the segments matching the query parameters.
* [getApiV2SegmentsId](#getapiv2segmentsid) - Returns the segment matching the given ID.
* [getApiV2SegmentsIdContent](#getapiv2segmentsidcontent) - UNDER DEVELOPMENT - Returns the audio content segment matching the given ID.
* [postApiV2Segments](#postapiv2segments) - Creates a new segment.

## deleteApiV2SegmentsId

Deletes the segment with the given ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteApiV2SegmentsIdRequest;
import org.openapis.openapi.models.operations.DeleteApiV2SegmentsIdResponse;
import org.openapis.openapi.models.operations.DeleteApiV2SegmentsIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteApiV2SegmentsIdRequest req = new DeleteApiV2SegmentsIdRequest(363711L);            

            DeleteApiV2SegmentsIdResponse res = sdk.segments.deleteApiV2SegmentsId(req, new DeleteApiV2SegmentsIdSecurity("minima") {{
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

## getApiV2Segments

Returns the segments matching the query parameters.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV2SegmentsOrderByIDEnum;
import org.openapis.openapi.models.operations.GetApiV2SegmentsRequest;
import org.openapis.openapi.models.operations.GetApiV2SegmentsResponse;
import org.openapis.openapi.models.operations.GetApiV2SegmentsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV2SegmentsRequest req = new GetApiV2SegmentsRequest(570197L) {{
                orderById = GetApiV2SegmentsOrderByIDEnum.ASC;
                pageSize = 438601;
                pageStart = 634274;
                segmentNumber = 988374;
            }};            

            GetApiV2SegmentsResponse res = sdk.segments.getApiV2Segments(req, new GetApiV2SegmentsSecurity("sapiente") {{
                cdOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.segments != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiV2SegmentsId

Returns the segment matching the given ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV2SegmentsIdRequest;
import org.openapis.openapi.models.operations.GetApiV2SegmentsIdResponse;
import org.openapis.openapi.models.operations.GetApiV2SegmentsIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV2SegmentsIdRequest req = new GetApiV2SegmentsIdRequest(102044L);            

            GetApiV2SegmentsIdResponse res = sdk.segments.getApiV2SegmentsId(req, new GetApiV2SegmentsIdSecurity("mollitia") {{
                cdOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.segment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiV2SegmentsIdContent

UNDER DEVELOPMENT - Returns the audio content segment matching the given ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV2SegmentsIdContentRequest;
import org.openapis.openapi.models.operations.GetApiV2SegmentsIdContentResponse;
import org.openapis.openapi.models.operations.GetApiV2SegmentsIdContentSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV2SegmentsIdContentRequest req = new GetApiV2SegmentsIdContentRequest(208876L);            

            GetApiV2SegmentsIdContentResponse res = sdk.segments.getApiV2SegmentsIdContent(req, new GetApiV2SegmentsIdContentSecurity("culpa") {{
                cdOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.getApiV2SegmentsIdContent200ApplicationOctetStreamBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postApiV2Segments

Creates a new segment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostApiV2SegmentsRequestBody;
import org.openapis.openapi.models.operations.PostApiV2SegmentsResponse;
import org.openapis.openapi.models.operations.PostApiV2SegmentsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostApiV2SegmentsRequestBody req = new PostApiV2SegmentsRequestBody("consequuntur", 995300L, 653108) {{
                inCue = "occaecati";
                outCue = "numquam";
            }};            

            PostApiV2SegmentsResponse res = sdk.segments.postApiV2Segments(req, new PostApiV2SegmentsSecurity("commodi") {{
                cdOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.segment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
