# SDK

## Overview

The Books API provides information about book reviews and The New York Times bestsellers lists.

<http://developer.nytimes.com/>
### Available Operations

* [getListsBestSellersHistoryJson](#getlistsbestsellershistoryjson) - Best Seller History List
* [getListsDateListJson](#getlistsdatelistjson) - Best Seller List by Date
* [getListsFormat](#getlistsformat) - Best Seller List
* [getListsNamesFormat](#getlistsnamesformat) - Best Seller List Names
* [getListsOverviewFormat](#getlistsoverviewformat) - Best Seller List Overview
* [getReviewsFormat](#getreviewsformat) - Reviews

## getListsBestSellersHistoryJson

Best Seller History List

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETListsBestSellersHistoryJsonRequest;
import org.openapis.openapi.models.operations.GETListsBestSellersHistoryJsonResponse;
import org.openapis.openapi.models.operations.GETListsBestSellersHistoryJsonSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETListsBestSellersHistoryJsonRequest req = new GETListsBestSellersHistoryJsonRequest() {{
                ageGroup = "vel";
                author = "error";
                contributor = "deserunt";
                isbn = "suscipit";
                price = "iure";
                publisher = "magnam";
                title = "Dr.";
            }};            

            GETListsBestSellersHistoryJsonResponse res = sdk.sdk.getListsBestSellersHistoryJson(req, new GETListsBestSellersHistoryJsonSecurity("ipsa") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getListsBestSellersHistoryJSON200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getListsDateListJson

Best Seller List by Date

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETListsDateListJsonRequest;
import org.openapis.openapi.models.operations.GETListsDateListJsonResponse;
import org.openapis.openapi.models.operations.GETListsDateListJsonSecurity;
import org.openapis.openapi.models.operations.GETListsDateListJsonSortOrderEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETListsDateListJsonRequest req = new GETListsDateListJsonRequest("delectus", "tempora") {{
                bestsellersDate = "suscipit";
                isbn = 477665L;
                listName = "minus";
                offset = 812169L;
                publishedDate = OffsetDateTime.parse("2022-01-15T14:47:59.325Z");
                rank = "excepturi";
                rankLastWeek = 392785L;
                sortOrder = GETListsDateListJsonSortOrderEnum.DESC;
                weeksOnList = 836079L;
            }};            

            GETListsDateListJsonResponse res = sdk.sdk.getListsDateListJson(req, new GETListsDateListJsonSecurity("ab") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getListsDateListJSON200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getListsFormat

Best Seller List

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETListsFormatFormatEnum;
import org.openapis.openapi.models.operations.GETListsFormatRequest;
import org.openapis.openapi.models.operations.GETListsFormatResponse;
import org.openapis.openapi.models.operations.GETListsFormatSecurity;
import org.openapis.openapi.models.operations.GETListsFormatSortOrderEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETListsFormatRequest req = new GETListsFormatRequest(GETListsFormatFormatEnum.JSON) {{
                bestsellersDate = OffsetDateTime.parse("2022-05-09T10:00:51.349Z");
                date = "perferendis";
                isbn = "ipsam";
                list = "repellendus";
                offset = 957156L;
                publishedDate = "quo";
                rank = 140350L;
                rankLastWeek = 870013L;
                sortOrder = GETListsFormatSortOrderEnum.DESC;
                weeksOnList = 978619L;
            }};            

            GETListsFormatResponse res = sdk.sdk.getListsFormat(req, new GETListsFormatSecurity("molestiae") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getListsFormat200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getListsNamesFormat

Best Seller List Names

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETListsNamesFormatFormatEnum;
import org.openapis.openapi.models.operations.GETListsNamesFormatRequest;
import org.openapis.openapi.models.operations.GETListsNamesFormatResponse;
import org.openapis.openapi.models.operations.GETListsNamesFormatSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETListsNamesFormatRequest req = new GETListsNamesFormatRequest(GETListsNamesFormatFormatEnum.JSONP) {{
                apiKey = "quod";
            }};            

            GETListsNamesFormatResponse res = sdk.sdk.getListsNamesFormat(req, new GETListsNamesFormatSecurity("esse") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getListsNamesFormat200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getListsOverviewFormat

Best Seller List Overview

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETListsOverviewFormatFormatEnum;
import org.openapis.openapi.models.operations.GETListsOverviewFormatRequest;
import org.openapis.openapi.models.operations.GETListsOverviewFormatResponse;
import org.openapis.openapi.models.operations.GETListsOverviewFormatSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETListsOverviewFormatRequest req = new GETListsOverviewFormatRequest(GETListsOverviewFormatFormatEnum.JSONP) {{
                apiKey = "porro";
                publishedDate = "dolorum";
            }};            

            GETListsOverviewFormatResponse res = sdk.sdk.getListsOverviewFormat(req, new GETListsOverviewFormatSecurity("dicta") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getListsOverviewFormat200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getReviewsFormat

Reviews

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETReviewsFormatFormatEnum;
import org.openapis.openapi.models.operations.GETReviewsFormatRequest;
import org.openapis.openapi.models.operations.GETReviewsFormatResponse;
import org.openapis.openapi.models.operations.GETReviewsFormatSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETReviewsFormatRequest req = new GETReviewsFormatRequest(GETReviewsFormatFormatEnum.JSONP) {{
                apiKey = "officia";
                author = "occaecati";
                isbn = 143353L;
                title = "Ms.";
            }};            

            GETReviewsFormatResponse res = sdk.sdk.getReviewsFormat(req, new GETReviewsFormatSecurity("hic") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getReviewsFormat200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
