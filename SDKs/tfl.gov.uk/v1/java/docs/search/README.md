# search

### Available Operations

* [searchBusSchedules](#searchbusschedules) - Searches the bus schedules folder on S3 for a given bus number.
* [searchGet](#searchget) - Search the site for occurrences of the query string. The maximum number of results returned is equal to the maximum page size
            of 100. To return subsequent pages, use the paginated overload.
* [searchMetaCategories](#searchmetacategories) - Gets the available search categories.
* [searchMetaSearchProviders](#searchmetasearchproviders) - Gets the available searchProvider names.
* [searchMetaSorts](#searchmetasorts) - Gets the available sorting options.

## searchBusSchedules

Searches the bus schedules folder on S3 for a given bus number.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchBusSchedulesRequest;
import org.openapis.openapi.models.operations.SearchBusSchedulesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchBusSchedulesRequest req = new SearchBusSchedulesRequest("a");            

            SearchBusSchedulesResponse res = sdk.search.searchBusSchedules(req);

            if (res.tflApiPresentationEntitiesSearchResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## searchGet

Search the site for occurrences of the query string. The maximum number of results returned is equal to the maximum page size
            of 100. To return subsequent pages, use the paginated overload.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchGetRequest;
import org.openapis.openapi.models.operations.SearchGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchGetRequest req = new SearchGetRequest("dolorum");            

            SearchGetResponse res = sdk.search.searchGet(req);

            if (res.tflApiPresentationEntitiesSearchResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## searchMetaCategories

Gets the available search categories.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchMetaCategoriesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchMetaCategoriesResponse res = sdk.search.searchMetaCategories();

            if (res.searchMetaCategories200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## searchMetaSearchProviders

Gets the available searchProvider names.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchMetaSearchProvidersResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchMetaSearchProvidersResponse res = sdk.search.searchMetaSearchProviders();

            if (res.searchMetaSearchProviders200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## searchMetaSorts

Gets the available sorting options.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchMetaSortsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchMetaSortsResponse res = sdk.search.searchMetaSorts();

            if (res.searchMetaSorts200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
