# privateQOD

## Overview

Define and host your own quote of the day service. You can set filter conditions based on tags, authors, your own quote collection etc. and our platform  will do the magic for you.

Find out more
<https://theysaidso.com/api/quote#qod>
### Available Operations

* [getQod](#getqod) - Gets `Quote of the Day` (QOD). Optional `category` param determines the category of returned quote of the day

* [patchQod](#patchqod) - Update an existing private `Quote of the Day` definition.

* [putQod](#putqod) - Create a private `Quote of the Day` service. 


## getQod

Gets `Quote of the Day` (QOD). Optional `category` param determines the category of returned quote of the day


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetQodRequest;
import org.openapis.openapi.models.operations.GetQodResponse;
import org.openapis.openapi.models.operations.GetQodSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetQodRequest req = new GetQodRequest() {{
                category = "unde";
                id = "nulla";
                language = "corrupti";
            }};            

            GetQodResponse res = sdk.privateQOD.getQod(req, new GetQodSecurity("illum") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.qodResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchQod

Update an existing private `Quote of the Day` definition.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchQodRequest;
import org.openapis.openapi.models.operations.PatchQodResponse;
import org.openapis.openapi.models.operations.PatchQodSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchQodRequest req = new PatchQodRequest("vel") {{
                authors = "error";
                language = "deserunt";
                private_ = false;
                repeatAfter = 384382L;
                sfw = false;
            }};            

            PatchQodResponse res = sdk.privateQOD.patchQod(req, new PatchQodSecurity("iure") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.quoteResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putQod

Create a private `Quote of the Day` service. 


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutQodRequest;
import org.openapis.openapi.models.operations.PutQodResponse;
import org.openapis.openapi.models.operations.PutQodSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutQodRequest req = new PutQodRequest("magnam") {{
                authors = "debitis";
                language = "ipsa";
                private_ = false;
                repeatAfter = 963663L;
                sfw = false;
            }};            

            PutQodResponse res = sdk.privateQOD.putQod(req, new PutQodSecurity("tempora") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.successResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
