# genres

### Available Operations

* [genresList](#genreslist) - Get a list of video game genres.
* [genresRead](#genresread) - Get details of the genre.

## genresList

Get a list of video game genres.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GenresListRequest;
import org.openapis.openapi.models.operations.GenresListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GenresListRequest req = new GenresListRequest() {{
                ordering = "totam";
                page = 105907L;
                pageSize = 414662L;
            }};            

            GenresListResponse res = sdk.genres.genresList(req);

            if (res.genresList200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## genresRead

Get details of the genre.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GenresReadRequest;
import org.openapis.openapi.models.operations.GenresReadResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GenresReadRequest req = new GenresReadRequest(473600L);            

            GenresReadResponse res = sdk.genres.genresRead(req);

            if (res.genreSingle != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
