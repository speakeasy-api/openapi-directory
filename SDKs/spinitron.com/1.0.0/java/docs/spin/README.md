# spin

### Available Operations

* [getSpins](#getspins) - Returns spins optionally filtered by {start} and/or {end} datetimes
* [getSpinsId](#getspinsid) - Get a Spin by id
* [postSpins](#postspins) - Log a Spin

## getSpins

Get Spins optionally filtered by a datetime range. Only past Spins will be returned.


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSpinsRequest;
import org.openapis.openapi.models.operations.GetSpinsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSpinsRequest req = new GetSpinsRequest() {{
                count = 969810L;
                end = OffsetDateTime.parse("2021-09-11T04:59:11.542Z");
                expand = new String[]{{
                    add("dolores"),
                    add("dolorem"),
                    add("corporis"),
                }};
                fields = new String[]{{
                    add("nobis"),
                }};
                page = 315428L;
                playlistId = 607831L;
                showId = 363711L;
                start = OffsetDateTime.parse("2022-06-06T21:04:34.044Z");
            }};            

            GetSpinsResponse res = sdk.spin.getSpins(req);

            if (res.getSpins200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSpinsId

Get a Spin by id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSpinsIdRequest;
import org.openapis.openapi.models.operations.GetSpinsIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSpinsIdRequest req = new GetSpinsIdRequest(38425L) {{
                expand = new String[]{{
                    add("culpa"),
                    add("doloribus"),
                }};
                fields = new String[]{{
                    add("architecto"),
                    add("mollitia"),
                    add("dolorem"),
                    add("culpa"),
                }};
            }};            

            GetSpinsIdResponse res = sdk.spin.getSpinsId(req);

            if (res.spin != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSpins

An endpoint for automation systems to log spins into the spin table.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostSpinsRequestBody;
import org.openapis.openapi.models.operations.PostSpinsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostSpinsRequestBody req = new PostSpinsRequestBody("consequuntur", "repellat") {{
                composer = "mollitia";
                duration = 581850L;
                genre = "numquam";
                isrc = "commodi";
                label = "quam";
                live = false;
                release = "molestiae";
                start = OffsetDateTime.parse("2022-05-18T10:03:04.921Z");
            }};            

            PostSpinsResponse res = sdk.spin.postSpins(req);

            if (res.spin != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
