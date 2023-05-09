# likes

## Overview

Liking Tracks & Playlists.

### Available Operations

* [deleteLikesPlaylistsPlaylistId](#deletelikesplaylistsplaylistid) - Unlikes a playlist.
* [deleteLikesTracksTrackId](#deletelikestrackstrackid) - Unlikes a track.
* [postLikesPlaylistsPlaylistId](#postlikesplaylistsplaylistid) - Likes a playlist.
* [postLikesTracksTrackId](#postlikestrackstrackid) - Likes a track.

## deleteLikesPlaylistsPlaylistId

Unlikes a playlist.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteLikesPlaylistsPlaylistIdRequest;
import org.openapis.openapi.models.operations.DeleteLikesPlaylistsPlaylistIdResponse;
import org.openapis.openapi.models.operations.DeleteLikesPlaylistsPlaylistIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteLikesPlaylistsPlaylistIdRequest req = new DeleteLikesPlaylistsPlaylistIdRequest(715190L);            

            DeleteLikesPlaylistsPlaylistIdResponse res = sdk.likes.deleteLikesPlaylistsPlaylistId(req, new DeleteLikesPlaylistsPlaylistIdSecurity("quibusdam") {{
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

## deleteLikesTracksTrackId

Unlikes a track.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteLikesTracksTrackIdRequest;
import org.openapis.openapi.models.operations.DeleteLikesTracksTrackIdResponse;
import org.openapis.openapi.models.operations.DeleteLikesTracksTrackIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteLikesTracksTrackIdRequest req = new DeleteLikesTracksTrackIdRequest(602763L);            

            DeleteLikesTracksTrackIdResponse res = sdk.likes.deleteLikesTracksTrackId(req, new DeleteLikesTracksTrackIdSecurity("nulla") {{
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

## postLikesPlaylistsPlaylistId

Likes a playlist.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostLikesPlaylistsPlaylistIdRequest;
import org.openapis.openapi.models.operations.PostLikesPlaylistsPlaylistIdResponse;
import org.openapis.openapi.models.operations.PostLikesPlaylistsPlaylistIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostLikesPlaylistsPlaylistIdRequest req = new PostLikesPlaylistsPlaylistIdRequest(544883L);            

            PostLikesPlaylistsPlaylistIdResponse res = sdk.likes.postLikesPlaylistsPlaylistId(req, new PostLikesPlaylistsPlaylistIdSecurity("illum") {{
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

## postLikesTracksTrackId

Likes a track.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostLikesTracksTrackIdRequest;
import org.openapis.openapi.models.operations.PostLikesTracksTrackIdResponse;
import org.openapis.openapi.models.operations.PostLikesTracksTrackIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostLikesTracksTrackIdRequest req = new PostLikesTracksTrackIdRequest(423655L);            

            PostLikesTracksTrackIdResponse res = sdk.likes.postLikesTracksTrackId(req, new PostLikesTracksTrackIdSecurity("error") {{
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
