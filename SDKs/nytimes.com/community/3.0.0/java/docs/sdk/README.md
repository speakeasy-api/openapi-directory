# SDK

## Overview

Get access to comments from registered users on New York Times articles.  NOTE: This API is deprecated.

<http://developer.nytimes.com/>
### Available Operations

* [getUserContentByDateJson](#getusercontentbydatejson) - Comments by Date
* [getUserContentRecentJson](#getusercontentrecentjson) - Recent User Comments
* [getUserContentUrlJson](#getusercontenturljson) - Comments by URL
* [getUserContentUserJson](#getusercontentuserjson) - Comments by User

## getUserContentByDateJson

Comments by Date

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETUserContentByDateJsonRequest;
import org.openapis.openapi.models.operations.GETUserContentByDateJsonResponse;
import org.openapis.openapi.models.operations.GETUserContentByDateJsonSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETUserContentByDateJsonRequest req = new GETUserContentByDateJsonRequest() {{
                date = "distinctio";
            }};            

            GETUserContentByDateJsonResponse res = sdk.sdk.getUserContentByDateJson(req, new GETUserContentByDateJsonSecurity("quibusdam") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getUserContentByDateJSON200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUserContentRecentJson

Recent User Comments

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETUserContentRecentJsonResponse;
import org.openapis.openapi.models.operations.GETUserContentRecentJsonSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETUserContentRecentJsonResponse res = sdk.sdk.getUserContentRecentJson(new GETUserContentRecentJsonSecurity("unde") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getUserContentRecentJSON200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUserContentUrlJson

Comments by URL

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETUserContentUrlJsonRequest;
import org.openapis.openapi.models.operations.GETUserContentUrlJsonResponse;
import org.openapis.openapi.models.operations.GETUserContentUrlJsonSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETUserContentUrlJsonRequest req = new GETUserContentUrlJsonRequest() {{
                url = "nulla";
            }};            

            GETUserContentUrlJsonResponse res = sdk.sdk.getUserContentUrlJson(req, new GETUserContentUrlJsonSecurity("corrupti") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getUserContentUrlJSON200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUserContentUserJson

Comments by User

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETUserContentUserJsonRequest;
import org.openapis.openapi.models.operations.GETUserContentUserJsonResponse;
import org.openapis.openapi.models.operations.GETUserContentUserJsonSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETUserContentUserJsonRequest req = new GETUserContentUserJsonRequest() {{
                userID = 847252L;
            }};            

            GETUserContentUserJsonResponse res = sdk.sdk.getUserContentUserJson(req, new GETUserContentUserJsonSecurity("vel") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getUserContentUserJSON200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
