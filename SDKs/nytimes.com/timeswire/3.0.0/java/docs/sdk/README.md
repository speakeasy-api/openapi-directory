# SDK

## Overview

With the Times Newswire API, you can get links and metadata for Times articles and blog posts as soon as they are published on NYTimes.com. The Times Newswire API provides an up-to-the-minute stream of published items.

<http://developer.nytimes.com/>
### Available Operations

* [getContentJson](#getcontentjson)
* [getContentSourceSectionJson](#getcontentsourcesectionjson)
* [getContentSourceSectionTimePeriodJson](#getcontentsourcesectiontimeperiodjson)

## getContentJson

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetContentJsonRequest;
import org.openapis.openapi.models.operations.GetContentJsonResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetContentJsonRequest req = new GetContentJsonRequest("quibusdam");            

            GetContentJsonResponse res = sdk.sdk.getContentJson(req);

            if (res.getContentJSON200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getContentSourceSectionJson

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetContentSourceSectionJsonRequest;
import org.openapis.openapi.models.operations.GetContentSourceSectionJsonResponse;
import org.openapis.openapi.models.operations.GetContentSourceSectionJsonSourceEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("unde") {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetContentSourceSectionJsonRequest req = new GetContentSourceSectionJsonRequest("nulla", GetContentSourceSectionJsonSourceEnum.NYT) {{
                limit = 847252L;
                offset = 423655L;
            }};            

            GetContentSourceSectionJsonResponse res = sdk.sdk.getContentSourceSectionJson(req);

            if (res.getContentSourceSectionJSON200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getContentSourceSectionTimePeriodJson

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetContentSourceSectionTimePeriodJsonRequest;
import org.openapis.openapi.models.operations.GetContentSourceSectionTimePeriodJsonResponse;
import org.openapis.openapi.models.operations.GetContentSourceSectionTimePeriodJsonSourceEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetContentSourceSectionTimePeriodJsonRequest req = new GetContentSourceSectionTimePeriodJsonRequest("deserunt", GetContentSourceSectionTimePeriodJsonSourceEnum.NYT, 437587L) {{
                limit = 297534L;
                offset = 891773L;
            }};            

            GetContentSourceSectionTimePeriodJsonResponse res = sdk.sdk.getContentSourceSectionTimePeriodJson(req);

            if (res.getContentSourceSectionTimePeriodJSON200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
