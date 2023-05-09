# sources

## Overview

Information about tags

### Available Operations

* [getResourcesSourcesJson](#getresourcessourcesjson) - Get Sources
* [getResourcesSourcesIdJson](#getresourcessourcesidjson) - Get Source by ID
* [getResourcesSourcesIdSyndicateFormat](#getresourcessourcesidsyndicateformat) - Get MediaItems for Source

## getResourcesSourcesJson

Source Listings

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetResourcesSourcesJsonRequest;
import org.openapis.openapi.models.operations.GetResourcesSourcesJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetResourcesSourcesJsonRequest req = new GetResourcesSourcesJsonRequest() {{
                max = 368725;
                offset = 662527;
                sort = "possimus";
            }};            

            GetResourcesSourcesJsonResponse res = sdk.sources.getResourcesSourcesJson(req);

            if (res.sourceWrappeds != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getResourcesSourcesIdJson

Information about a specific source.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetResourcesSourcesIdJsonRequest;
import org.openapis.openapi.models.operations.GetResourcesSourcesIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetResourcesSourcesIdJsonRequest req = new GetResourcesSourcesIdJsonRequest(13571L);            

            GetResourcesSourcesIdJsonResponse res = sdk.sources.getResourcesSourcesIdJson(req);

            if (res.sourceWrappeds != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getResourcesSourcesIdSyndicateFormat

MediaItem

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetResourcesSourcesIdSyndicateFormatRequest;
import org.openapis.openapi.models.operations.GetResourcesSourcesIdSyndicateFormatResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetResourcesSourcesIdSyndicateFormatRequest req = new GetResourcesSourcesIdSyndicateFormatRequest("quasi", 622846L) {{
                displayMethod = "temporibus";
            }};            

            GetResourcesSourcesIdSyndicateFormatResponse res = sdk.sources.getResourcesSourcesIdSyndicateFormat(req);

            if (res.mediaItemWrappeds != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
