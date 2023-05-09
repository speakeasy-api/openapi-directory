# me

## Overview

Own User Endpoints.

### Available Operations

* [deleteMeFollowingsUserId](#deletemefollowingsuserid) - Deletes a user who is followed by the authenticated user.
* [getMe](#getme) - Returns the authenticated user’s information.
* [getMeActivities](#getmeactivities) - Returns the authenticated user's activities.
* [getMeActivitiesAllOwn](#getmeactivitiesallown) - Recent the authenticated user's activities.
* [getMeActivitiesTracks](#getmeactivitiestracks) - Returns the authenticated user's recent track related activities.
* [getMeConnections](#getmeconnections) - Returns a list of the authenticated user's connected social accounts.
* [getMeConnectionsConnectionId](#getmeconnectionsconnectionid) - Returns the authenticated user's connected social account.
* [~~getMeFavoritesIds~~](#getmefavoritesids) - Returns user’s favorites ids. (use /me/likes/tracks instead to fetch the authenticated user's likes) :warning: **Deprecated**
* [getMeFollowers](#getmefollowers) - Returns a list of users who are following the authenticated user.
* [~~getMeFollowersFollowerId~~](#getmefollowersfollowerid) - Returns a user who is following the authenticated user. (use /users/{user_id} instead, to fetch the user details) :warning: **Deprecated**
* [getMeFollowings](#getmefollowings) - Returns a list of users who are followed by the authenticated user.
* [getMeFollowingsTracks](#getmefollowingstracks) - Returns a list of recent tracks from users followed by the authenticated user.
* [~~getMeFollowingsUserId~~](#getmefollowingsuserid) - Returns a user who is followed by the authenticated user. (use /users/{user_id} instead, to fetch the user details) :warning: **Deprecated**
* [getMeLikesTracks](#getmelikestracks) - Returns a list of favorited or liked tracks of the authenticated user.
* [getMePlaylists](#getmeplaylists) - Returns user’s playlists (sets).
* [~~getMePlaylistsPlaylistId~~](#getmeplaylistsplaylistid) - Returns playlist. (use /playlists/{playlist_id} instead, to fetch the playlist details) :warning: **Deprecated**
* [getMeTracks](#getmetracks) - Returns a list of user's tracks.
* [~~getMeTracksTrackId~~](#getmetrackstrackid) - Returns a specified track. (use /tracks/{track_id} instead, to fetch the track details) :warning: **Deprecated**
* [putMeFollowingsUserId](#putmefollowingsuserid) - Follows a user.

## deleteMeFollowingsUserId

Deletes a user who is followed by the authenticated user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteMeFollowingsUserIdRequest;
import org.openapis.openapi.models.operations.DeleteMeFollowingsUserIdResponse;
import org.openapis.openapi.models.operations.DeleteMeFollowingsUserIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteMeFollowingsUserIdRequest req = new DeleteMeFollowingsUserIdRequest(645894L);            

            DeleteMeFollowingsUserIdResponse res = sdk.me.deleteMeFollowingsUserId(req, new DeleteMeFollowingsUserIdSecurity("suscipit") {{
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

## getMe

Returns the authenticated user’s information.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMeResponse;
import org.openapis.openapi.models.operations.GetMeSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMeResponse res = sdk.me.getMe(new GetMeSecurity("iure") {{
                authHeader = "YOUR_API_KEY_HERE";
            }});

            if (res.completeUser != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMeActivities

Returns the authenticated user's activities.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMeActivitiesRequest;
import org.openapis.openapi.models.operations.GetMeActivitiesResponse;
import org.openapis.openapi.models.operations.GetMeActivitiesSecurity;
import org.openapis.openapi.models.shared.AccessEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMeActivitiesRequest req = new GetMeActivitiesRequest() {{
                access = new org.openapis.openapi.models.shared.AccessEnum[]{{
                    add(AccessEnum.BLOCKED),
                    add(AccessEnum.PLAYABLE),
                }};
                limit = 963663L;
            }};            

            GetMeActivitiesResponse res = sdk.me.getMeActivities(req, new GetMeActivitiesSecurity("tempora") {{
                authHeader = "YOUR_API_KEY_HERE";
            }});

            if (res.activities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMeActivitiesAllOwn

Recent the authenticated user's activities.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMeActivitiesAllOwnRequest;
import org.openapis.openapi.models.operations.GetMeActivitiesAllOwnResponse;
import org.openapis.openapi.models.operations.GetMeActivitiesAllOwnSecurity;
import org.openapis.openapi.models.shared.AccessEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMeActivitiesAllOwnRequest req = new GetMeActivitiesAllOwnRequest() {{
                access = new org.openapis.openapi.models.shared.AccessEnum[]{{
                    add(AccessEnum.PREVIEW),
                    add(AccessEnum.BLOCKED),
                }};
                limit = 812169L;
            }};            

            GetMeActivitiesAllOwnResponse res = sdk.me.getMeActivitiesAllOwn(req, new GetMeActivitiesAllOwnSecurity("voluptatum") {{
                authHeader = "YOUR_API_KEY_HERE";
            }});

            if (res.activities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMeActivitiesTracks

Returns the authenticated user's recent track related activities.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMeActivitiesTracksRequest;
import org.openapis.openapi.models.operations.GetMeActivitiesTracksResponse;
import org.openapis.openapi.models.operations.GetMeActivitiesTracksSecurity;
import org.openapis.openapi.models.shared.AccessEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMeActivitiesTracksRequest req = new GetMeActivitiesTracksRequest() {{
                access = new org.openapis.openapi.models.shared.AccessEnum[]{{
                    add(AccessEnum.PREVIEW),
                    add(AccessEnum.PREVIEW),
                }};
                limit = 925597L;
            }};            

            GetMeActivitiesTracksResponse res = sdk.me.getMeActivitiesTracks(req, new GetMeActivitiesTracksSecurity("temporibus") {{
                authHeader = "YOUR_API_KEY_HERE";
            }});

            if (res.activities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMeConnections

Returns a list of the authenticated user's connected social accounts.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMeConnectionsRequest;
import org.openapis.openapi.models.operations.GetMeConnectionsResponse;
import org.openapis.openapi.models.operations.GetMeConnectionsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMeConnectionsRequest req = new GetMeConnectionsRequest() {{
                limit = 71036L;
                offset = 337396L;
            }};            

            GetMeConnectionsResponse res = sdk.me.getMeConnections(req, new GetMeConnectionsSecurity("veritatis") {{
                authHeader = "YOUR_API_KEY_HERE";
            }});

            if (res.connections != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMeConnectionsConnectionId

Returns the authenticated user's connected social account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMeConnectionsConnectionIdRequest;
import org.openapis.openapi.models.operations.GetMeConnectionsConnectionIdResponse;
import org.openapis.openapi.models.operations.GetMeConnectionsConnectionIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMeConnectionsConnectionIdRequest req = new GetMeConnectionsConnectionIdRequest(648172L);            

            GetMeConnectionsConnectionIdResponse res = sdk.me.getMeConnectionsConnectionId(req, new GetMeConnectionsConnectionIdSecurity("perferendis") {{
                authHeader = "YOUR_API_KEY_HERE";
            }});

            if (res.connection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~getMeFavoritesIds~~

Returns user’s favorites ids. (use /me/likes/tracks instead to fetch the authenticated user's likes)

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMeFavoritesIdsRequest;
import org.openapis.openapi.models.operations.GetMeFavoritesIdsResponse;
import org.openapis.openapi.models.operations.GetMeFavoritesIdsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMeFavoritesIdsRequest req = new GetMeFavoritesIdsRequest() {{
                limit = 368241L;
            }};            

            GetMeFavoritesIdsResponse res = sdk.me.getMeFavoritesIds(req, new GetMeFavoritesIdsSecurity("repellendus") {{
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

## getMeFollowers

Returns a list of users who are following the authenticated user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMeFollowersRequest;
import org.openapis.openapi.models.operations.GetMeFollowersResponse;
import org.openapis.openapi.models.operations.GetMeFollowersSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMeFollowersRequest req = new GetMeFollowersRequest() {{
                limit = 957156L;
            }};            

            GetMeFollowersResponse res = sdk.me.getMeFollowers(req, new GetMeFollowersSecurity("quo") {{
                authHeader = "YOUR_API_KEY_HERE";
            }});

            if (res.getMeFollowers200ApplicationJSONOneOf != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~getMeFollowersFollowerId~~

Returns a user who is following the authenticated user. (use /users/{user_id} instead, to fetch the user details)

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMeFollowersFollowerIdRequest;
import org.openapis.openapi.models.operations.GetMeFollowersFollowerIdResponse;
import org.openapis.openapi.models.operations.GetMeFollowersFollowerIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMeFollowersFollowerIdRequest req = new GetMeFollowersFollowerIdRequest(140350L);            

            GetMeFollowersFollowerIdResponse res = sdk.me.getMeFollowersFollowerId(req, new GetMeFollowersFollowerIdSecurity("at") {{
                authHeader = "YOUR_API_KEY_HERE";
            }});

            if (res.user != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMeFollowings

Returns a list of users who are followed by the authenticated user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMeFollowingsRequest;
import org.openapis.openapi.models.operations.GetMeFollowingsResponse;
import org.openapis.openapi.models.operations.GetMeFollowingsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMeFollowingsRequest req = new GetMeFollowingsRequest() {{
                limit = 870088L;
                offset = 978619L;
            }};            

            GetMeFollowingsResponse res = sdk.me.getMeFollowings(req, new GetMeFollowingsSecurity("molestiae") {{
                authHeader = "YOUR_API_KEY_HERE";
            }});

            if (res.getMeFollowings200ApplicationJSONOneOf != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMeFollowingsTracks

Returns a list of recent tracks from users followed by the authenticated user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMeFollowingsTracksRequest;
import org.openapis.openapi.models.operations.GetMeFollowingsTracksResponse;
import org.openapis.openapi.models.operations.GetMeFollowingsTracksSecurity;
import org.openapis.openapi.models.shared.AccessEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMeFollowingsTracksRequest req = new GetMeFollowingsTracksRequest() {{
                access = new org.openapis.openapi.models.shared.AccessEnum[]{{
                    add(AccessEnum.BLOCKED),
                    add(AccessEnum.PREVIEW),
                    add(AccessEnum.PREVIEW),
                    add(AccessEnum.BLOCKED),
                }};
                limit = 678880L;
                offset = 118274L;
            }};            

            GetMeFollowingsTracksResponse res = sdk.me.getMeFollowingsTracks(req, new GetMeFollowingsTracksSecurity("nam") {{
                authHeader = "YOUR_API_KEY_HERE";
            }});

            if (res.tracksList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~getMeFollowingsUserId~~

Returns a user who is followed by the authenticated user. (use /users/{user_id} instead, to fetch the user details)

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMeFollowingsUserIdRequest;
import org.openapis.openapi.models.operations.GetMeFollowingsUserIdResponse;
import org.openapis.openapi.models.operations.GetMeFollowingsUserIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMeFollowingsUserIdRequest req = new GetMeFollowingsUserIdRequest(639921L);            

            GetMeFollowingsUserIdResponse res = sdk.me.getMeFollowingsUserId(req, new GetMeFollowingsUserIdSecurity("occaecati") {{
                authHeader = "YOUR_API_KEY_HERE";
            }});

            if (res.user != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMeLikesTracks

Returns a list of favorited or liked tracks of the authenticated user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMeLikesTracksRequest;
import org.openapis.openapi.models.operations.GetMeLikesTracksResponse;
import org.openapis.openapi.models.operations.GetMeLikesTracksSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMeLikesTracksRequest req = new GetMeLikesTracksRequest() {{
                limit = 143353L;
                linkedPartitioning = false;
            }};            

            GetMeLikesTracksResponse res = sdk.me.getMeLikesTracks(req, new GetMeLikesTracksSecurity("deleniti") {{
                authHeader = "YOUR_API_KEY_HERE";
            }});

            if (res.getMeLikesTracks200ApplicationJSONOneOf != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMePlaylists

Returns playlist info, playlist tracks and tracks owner info.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMePlaylistsRequest;
import org.openapis.openapi.models.operations.GetMePlaylistsResponse;
import org.openapis.openapi.models.operations.GetMePlaylistsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMePlaylistsRequest req = new GetMePlaylistsRequest() {{
                limit = 944669L;
            }};            

            GetMePlaylistsResponse res = sdk.me.getMePlaylists(req, new GetMePlaylistsSecurity("optio") {{
                authHeader = "YOUR_API_KEY_HERE";
            }});

            if (res.playlistsArray != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~getMePlaylistsPlaylistId~~

Returns playlist. (use /playlists/{playlist_id} instead, to fetch the playlist details)

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMePlaylistsPlaylistIdRequest;
import org.openapis.openapi.models.operations.GetMePlaylistsPlaylistIdResponse;
import org.openapis.openapi.models.operations.GetMePlaylistsPlaylistIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMePlaylistsPlaylistIdRequest req = new GetMePlaylistsPlaylistIdRequest(521848L);            

            GetMePlaylistsPlaylistIdResponse res = sdk.me.getMePlaylistsPlaylistId(req, new GetMePlaylistsPlaylistIdSecurity("beatae") {{
                authHeader = "YOUR_API_KEY_HERE";
            }});

            if (res.playlist != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMeTracks

Returns a list of user's tracks.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMeTracksRequest;
import org.openapis.openapi.models.operations.GetMeTracksResponse;
import org.openapis.openapi.models.operations.GetMeTracksSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMeTracksRequest req = new GetMeTracksRequest() {{
                limit = 414662L;
                linkedPartitioning = false;
            }};            

            GetMeTracksResponse res = sdk.me.getMeTracks(req, new GetMeTracksSecurity("molestiae") {{
                authHeader = "YOUR_API_KEY_HERE";
            }});

            if (res.getMeTracks200ApplicationJSONOneOf != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~getMeTracksTrackId~~

Returns a specified track. (use /tracks/{track_id} instead, to fetch the track details)

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMeTracksTrackIdRequest;
import org.openapis.openapi.models.operations.GetMeTracksTrackIdResponse;
import org.openapis.openapi.models.operations.GetMeTracksTrackIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMeTracksTrackIdRequest req = new GetMeTracksTrackIdRequest(264555L);            

            GetMeTracksTrackIdResponse res = sdk.me.getMeTracksTrackId(req, new GetMeTracksTrackIdSecurity("qui") {{
                authHeader = "YOUR_API_KEY_HERE";
            }});

            if (res.track != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putMeFollowingsUserId

Follows a user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutMeFollowingsUserIdRequest;
import org.openapis.openapi.models.operations.PutMeFollowingsUserIdResponse;
import org.openapis.openapi.models.operations.PutMeFollowingsUserIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutMeFollowingsUserIdRequest req = new PutMeFollowingsUserIdRequest(774234L);            

            PutMeFollowingsUserIdResponse res = sdk.me.putMeFollowingsUserId(req, new PutMeFollowingsUserIdSecurity("cum") {{
                authHeader = "YOUR_API_KEY_HERE";
            }});

            if (res.user != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
