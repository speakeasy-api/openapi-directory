# playlist

### Available Operations

* [getPlaylists](#getplaylists) - Returns playlists optionally filtered by {start} and/or {end} datetimes
* [getPlaylistsId](#getplaylistsid) - Get a Playlist by id

## getPlaylists

Get Playlists optionally filtered by a datetime range.
Only past Playlists will be returned (with allowed tolerance equals 1 hour in future).

Ordered chronologically from newest to oldest.


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPlaylistsRequest;
import org.openapis.openapi.models.operations.GetPlaylistsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetPlaylistsRequest req = new GetPlaylistsRequest() {{
                count = 461479L;
                end = OffsetDateTime.parse("2021-06-10T05:07:43.614Z");
                expand = new String[]{{
                    add("dicta"),
                    add("nam"),
                    add("officia"),
                }};
                fields = new String[]{{
                    add("fugit"),
                    add("deleniti"),
                    add("hic"),
                }};
                page = 758616L;
                personaId = 521848L;
                showId = 105907L;
                start = OffsetDateTime.parse("2022-07-12T03:15:36.542Z");
            }};            

            GetPlaylistsResponse res = sdk.playlist.getPlaylists(req);

            if (res.getPlaylists200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPlaylistsId

The response object represents the playlist specified by {id}.

Status 404 is returned if a playlist with {id} does not exist or if it does but starts in the future (with allowed tolerance equals 1 hour in future).


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPlaylistsIdRequest;
import org.openapis.openapi.models.operations.GetPlaylistsIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetPlaylistsIdRequest req = new GetPlaylistsIdRequest(264555L) {{
                expand = new String[]{{
                    add("impedit"),
                }};
                fields = new String[]{{
                    add("esse"),
                    add("ipsum"),
                    add("excepturi"),
                }};
            }};            

            GetPlaylistsIdResponse res = sdk.playlist.getPlaylistsId(req);

            if (res.playlist != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
