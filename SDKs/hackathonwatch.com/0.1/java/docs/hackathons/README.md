# hackathons

## Overview

Operations about hackathons

### Available Operations

* [getHackathonsIdFormat](#gethackathonsidformat) - Return the detail of a given hackathon
* [getHackathonsComingFormat](#gethackathonscomingformat) - Return a list of coming hackathons

## getHackathonsIdFormat

Return the detail of a given hackathon

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETHackathonsIdFormatRequest;
import org.openapis.openapi.models.operations.GETHackathonsIdFormatResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETHackathonsIdFormatRequest req = new GETHackathonsIdFormatRequest(592845);            

            GETHackathonsIdFormatResponse res = sdk.hackathons.getHackathonsIdFormat(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getHackathonsComingFormat

Return a list of coming hackathons

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETHackathonsComingFormatRequest;
import org.openapis.openapi.models.operations.GETHackathonsComingFormatResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETHackathonsComingFormatRequest req = new GETHackathonsComingFormatRequest() {{
                page = 715190;
            }};            

            GETHackathonsComingFormatResponse res = sdk.hackathons.getHackathonsComingFormat(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
