# playlistAPI

## Overview

Endpoints to fetch Listen Later playlists data

### Available Operations

* [getPlaylistById](#getplaylistbyid) - Fetch a playlist's info and items (i.e., episodes or podcasts).
* [getPlaylists](#getplaylists) - Fetch a list of your playlists.

## getPlaylistById

A playlist can be an episode list (i.e., all items are episodes) or a podcast list (i.e., all items are podcasts),
which is essentially the same as those created via listennotes.com/listen/.
This endpoint fetches a list of items (i.e., episodes or podcasts) in the playlist.
You can use the **last_pub_date_ms** parameter to do pagination and fetch more items.
A playlist can be **public** (discoverable on ListenNotes.com),
**unlisted** (accessible to anyone who knows the playlist id),
or **private** (accessible to its owner).
You can fetch all playlists created by you, and **public** / **unlisted** playlists created by others.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPlaylistByIdRequest;
import org.openapis.openapi.models.operations.GetPlaylistByIdResponse;
import org.openapis.openapi.models.operations.GetPlaylistByIdSortEnum;
import org.openapis.openapi.models.operations.GetPlaylistByIdTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPlaylistByIdRequest req = new GetPlaylistByIdRequest("fugit", "deleniti") {{
                lastTimestampMs = 944669L;
                sort = GetPlaylistByIdSortEnum.OLDEST_PUBLISHED_FIRST;
                type = GetPlaylistByIdTypeEnum.PODCAST_LIST;
            }};            

            GetPlaylistByIdResponse res = sdk.playlistAPI.getPlaylistById(req);

            if (res.playlistResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPlaylists

This endpoint returns same data as listennotes.com/listen under your account.
You can use the **page** parameter to do pagination and fetch more playlists.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPlaylistsRequest;
import org.openapis.openapi.models.operations.GetPlaylistsResponse;
import org.openapis.openapi.models.operations.GetPlaylistsSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPlaylistsRequest req = new GetPlaylistsRequest("beatae") {{
                page = 414662L;
                sort = GetPlaylistsSortEnum.OLDEST_ADDED_FIRST;
            }};            

            GetPlaylistsResponse res = sdk.playlistAPI.getPlaylists(req);

            if (res.playlistsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
