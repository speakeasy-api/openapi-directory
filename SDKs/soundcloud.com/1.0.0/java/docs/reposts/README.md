# reposts

## Overview

Reposting Tracks & Playlists.

### Available Operations

* [deleteRepostsPlaylistsPlaylistId](#deleterepostsplaylistsplaylistid) - Removes a repost on a playlist as the authenticated user
* [deleteRepostsTracksTrackId](#deleterepoststrackstrackid) - Removes a repost on a track as the authenticated user
* [postRepostsPlaylistsPlaylistId](#postrepostsplaylistsplaylistid) - Reposts a playlist as the authenticated user
* [postRepostsTracksTrackId](#postrepoststrackstrackid) - Reposts a track as the authenticated user

## deleteRepostsPlaylistsPlaylistId

Removes a repost on a playlist as the authenticated user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRepostsPlaylistsPlaylistIdRequest;
import org.openapis.openapi.models.operations.DeleteRepostsPlaylistsPlaylistIdResponse;
import org.openapis.openapi.models.operations.DeleteRepostsPlaylistsPlaylistIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteRepostsPlaylistsPlaylistIdRequest req = new DeleteRepostsPlaylistsPlaylistIdRequest(653201L);            

            DeleteRepostsPlaylistsPlaylistIdResponse res = sdk.reposts.deleteRepostsPlaylistsPlaylistId(req, new DeleteRepostsPlaylistsPlaylistIdSecurity("reiciendis") {{
                authHeader = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteRepostsTracksTrackId

Removes a repost on a track as the authenticated user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRepostsTracksTrackIdRequest;
import org.openapis.openapi.models.operations.DeleteRepostsTracksTrackIdResponse;
import org.openapis.openapi.models.operations.DeleteRepostsTracksTrackIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteRepostsTracksTrackIdRequest req = new DeleteRepostsTracksTrackIdRequest(652103L);            

            DeleteRepostsTracksTrackIdResponse res = sdk.reposts.deleteRepostsTracksTrackId(req, new DeleteRepostsTracksTrackIdSecurity("ad") {{
                authHeader = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postRepostsPlaylistsPlaylistId

Reposts a playlist as the authenticated user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostRepostsPlaylistsPlaylistIdRequest;
import org.openapis.openapi.models.operations.PostRepostsPlaylistsPlaylistIdResponse;
import org.openapis.openapi.models.operations.PostRepostsPlaylistsPlaylistIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostRepostsPlaylistsPlaylistIdRequest req = new PostRepostsPlaylistsPlaylistIdRequest(431418L);            

            PostRepostsPlaylistsPlaylistIdResponse res = sdk.reposts.postRepostsPlaylistsPlaylistId(req, new PostRepostsPlaylistsPlaylistIdSecurity("dolor") {{
                authHeader = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postRepostsTracksTrackId

Reposts a track as the authenticated user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostRepostsTracksTrackIdRequest;
import org.openapis.openapi.models.operations.PostRepostsTracksTrackIdResponse;
import org.openapis.openapi.models.operations.PostRepostsTracksTrackIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostRepostsTracksTrackIdRequest req = new PostRepostsTracksTrackIdRequest(896547L);            

            PostRepostsTracksTrackIdResponse res = sdk.reposts.postRepostsTracksTrackId(req, new PostRepostsTracksTrackIdSecurity("odit") {{
                authHeader = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
