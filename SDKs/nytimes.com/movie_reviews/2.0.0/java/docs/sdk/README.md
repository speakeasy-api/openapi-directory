# SDK

## Overview

With the Movie Reviews API, you can search New York Times movie reviews by keyword and get lists of NYT Critics' Picks.

<http://developer.nytimes.com/>
### Available Operations

* [getCriticsResourceTypeJson](#getcriticsresourcetypejson)
* [getReviewsSearchJson](#getreviewssearchjson)
* [getReviewsResourceTypeJson](#getreviewsresourcetypejson)

## getCriticsResourceTypeJson

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCriticsResourceTypeJsonRequest;
import org.openapis.openapi.models.operations.GetCriticsResourceTypeJsonResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCriticsResourceTypeJsonRequest req = new GetCriticsResourceTypeJsonRequest("quibusdam");            

            GetCriticsResourceTypeJsonResponse res = sdk.sdk.getCriticsResourceTypeJson(req);

            if (res.getCriticsResourceTypeJSON200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getReviewsSearchJson

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetReviewsSearchJsonCriticsPickEnum;
import org.openapis.openapi.models.operations.GetReviewsSearchJsonRequest;
import org.openapis.openapi.models.operations.GetReviewsSearchJsonResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("unde") {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetReviewsSearchJsonRequest req = new GetReviewsSearchJsonRequest() {{
                criticsPick = GetReviewsSearchJsonCriticsPickEnum.N;
                offset = 544883L;
                openingDate = "illum";
                order = "vel";
                publicationDate = "error";
                query = "deserunt";
                reviewer = "suscipit";
            }};            

            GetReviewsSearchJsonResponse res = sdk.sdk.getReviewsSearchJson(req);

            if (res.getReviewsSearchJSON200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getReviewsResourceTypeJson

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetReviewsResourceTypeJsonOrderEnum;
import org.openapis.openapi.models.operations.GetReviewsResourceTypeJsonRequest;
import org.openapis.openapi.models.operations.GetReviewsResourceTypeJsonResourceTypeEnum;
import org.openapis.openapi.models.operations.GetReviewsResourceTypeJsonResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetReviewsResourceTypeJsonRequest req = new GetReviewsResourceTypeJsonRequest(GetReviewsResourceTypeJsonResourceTypeEnum.ALL) {{
                offset = 891773L;
                order = GetReviewsResourceTypeJsonOrderEnum.BY_TITLE;
            }};            

            GetReviewsResourceTypeJsonResponse res = sdk.sdk.getReviewsResourceTypeJson(req);

            if (res.getReviewsResourceTypeJSON200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
