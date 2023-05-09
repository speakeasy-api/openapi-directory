# views

### Available Operations

* [sessionsIdViewsGet](#sessionsidviewsget) - Views: List Session Views
* [sessionsIdViewsPost](#sessionsidviewspost) - Views: Create A Session View
* [viewsIdDelete](#viewsiddelete) - Views: Delete by Id
* [viewsIdGet](#viewsidget) - Views: Get View

## sessionsIdViewsGet

Get data for all views in a session

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SessionsIdViewsGetRequest;
import org.openapis.openapi.models.operations.SessionsIdViewsGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SessionsIdViewsGetRequest req = new SessionsIdViewsGetRequest("f725b291-2203-40d8-bf5a-eb7799d22e8c");            

            SessionsIdViewsGetResponse res = sdk.views.sessionsIdViewsGet(req);

            if (res.views != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sessionsIdViewsPost

Create a page view object for a viewing session

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SessionsIdViewsPostRequest;
import org.openapis.openapi.models.operations.SessionsIdViewsPostRequiredParametersToCreateAView;
import org.openapis.openapi.models.operations.SessionsIdViewsPostResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SessionsIdViewsPostRequest req = new SessionsIdViewsPostRequest(                new SessionsIdViewsPostRequiredParametersToCreateAView(OffsetDateTime.parse("2022-01-01T15:46:37.757Z"), 542783L, OffsetDateTime.parse("2022-05-29T01:14:34.232Z")) {{
                                activeMSecs = 227017L;
                                additional = "corrupti";
                            }};, "25fdc42c-876c-42c2-9fb4-cfc1c76230f8");            

            SessionsIdViewsPostResponse res = sdk.views.sessionsIdViewsPost(req);

            if (res.view != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## viewsIdDelete

Remove a view and dependant data.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ViewsIdDeleteRequest;
import org.openapis.openapi.models.operations.ViewsIdDeleteResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ViewsIdDeleteRequest req = new ViewsIdDeleteRequest("41fb1bd2-3fdb-414d-b6be-5a685998e22a");            

            ViewsIdDeleteResponse res = sdk.views.viewsIdDelete(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## viewsIdGet

Get view meta data

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ViewsIdGetRequest;
import org.openapis.openapi.models.operations.ViewsIdGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ViewsIdGetRequest req = new ViewsIdGetRequest("e20da16f-c2b2-471a-a89c-57e854e90439");            

            ViewsIdGetResponse res = sdk.views.viewsIdGet(req);

            if (res.view != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
