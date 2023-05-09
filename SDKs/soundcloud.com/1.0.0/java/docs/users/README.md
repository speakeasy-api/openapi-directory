# users

## Overview

SoundCloud Users Endpoints.

### Available Operations

* [getUsersUserId](#getusersuserid) - Returns a user.
* [getUsersUserIdComments](#getusersuseridcomments) - Returns a list of user's comments.
* [~~getUsersUserIdFavorites~~](#getusersuseridfavorites) - Returns a list of user's favorited or liked tracks. (use /users/:userId/likes/tracks instead, to fetch a user's likes) :warning: **Deprecated**
* [getUsersUserIdFollowers](#getusersuseridfollowers) - Returns a list of user’s followers.
* [getUsersUserIdFollowings](#getusersuseridfollowings) - Returns a list of user’s followings.
* [~~getUsersUserIdFollowingsFollowingId~~](#getusersuseridfollowingsfollowingid) - Returns a user's following. (use /users/{user_id} instead, to fetch the user details) :warning: **Deprecated**
* [getUsersUserIdLikesTracks](#getusersuseridlikestracks) - Returns a list of user's liked tracks.
* [getUsersUserIdPlaylists](#getusersuseridplaylists) - Returns a list of user's playlists.
* [getUsersUserIdTracks](#getusersuseridtracks) - Returns a list of user's tracks.
* [getUsersUserIdWebProfiles](#getusersuseridwebprofiles) - Returns list of user's links added to their profile (website, facebook, instagram).

## getUsersUserId

Returns a user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersUserIdRequest;
import org.openapis.openapi.models.operations.GetUsersUserIdResponse;
import org.openapis.openapi.models.operations.GetUsersUserIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersUserIdRequest req = new GetUsersUserIdRequest(970237L);            

            GetUsersUserIdResponse res = sdk.users.getUsersUserId(req, new GetUsersUserIdSecurity("amet", "dolorum") {{
                authHeader = "YOUR_API_KEY_HERE";
                clientId = "YOUR_API_KEY_HERE";
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

## getUsersUserIdComments

Returns a list of user's comments.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersUserIdCommentsRequest;
import org.openapis.openapi.models.operations.GetUsersUserIdCommentsResponse;
import org.openapis.openapi.models.operations.GetUsersUserIdCommentsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersUserIdCommentsRequest req = new GetUsersUserIdCommentsRequest(254356L) {{
                limit = 85295L;
                offset = 58029L;
            }};            

            GetUsersUserIdCommentsResponse res = sdk.users.getUsersUserIdComments(req, new GetUsersUserIdCommentsSecurity("ipsa", "iure") {{
                authHeader = "YOUR_API_KEY_HERE";
                clientId = "YOUR_API_KEY_HERE";
            }});

            if (res.commentsList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~getUsersUserIdFavorites~~

Returns a list of user's favorited or liked tracks. (use /users/:userId/likes/tracks instead, to fetch a user's likes)

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersUserIdFavoritesRequest;
import org.openapis.openapi.models.operations.GetUsersUserIdFavoritesResponse;
import org.openapis.openapi.models.operations.GetUsersUserIdFavoritesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersUserIdFavoritesRequest req = new GetUsersUserIdFavoritesRequest(487838L) {{
                limit = 311796L;
                linkedPartitioning = false;
            }};            

            GetUsersUserIdFavoritesResponse res = sdk.users.getUsersUserIdFavorites(req, new GetUsersUserIdFavoritesSecurity("accusamus", "quidem") {{
                authHeader = "YOUR_API_KEY_HERE";
                clientId = "YOUR_API_KEY_HERE";
            }});

            if (res.getUsersUserIdFavorites200ApplicationJSONOneOf != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsersUserIdFollowers

Returns a list of users that follows (user_id).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersUserIdFollowersRequest;
import org.openapis.openapi.models.operations.GetUsersUserIdFollowersResponse;
import org.openapis.openapi.models.operations.GetUsersUserIdFollowersSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersUserIdFollowersRequest req = new GetUsersUserIdFollowersRequest(976405L) {{
                limit = 377752L;
            }};            

            GetUsersUserIdFollowersResponse res = sdk.users.getUsersUserIdFollowers(req, new GetUsersUserIdFollowersSecurity("natus", "eos") {{
                authHeader = "YOUR_API_KEY_HERE";
                clientId = "YOUR_API_KEY_HERE";
            }});

            if (res.getUsersUserIdFollowers200ApplicationJSONOneOf != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsersUserIdFollowings

Returns list of users that (user_id) follows.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersUserIdFollowingsRequest;
import org.openapis.openapi.models.operations.GetUsersUserIdFollowingsResponse;
import org.openapis.openapi.models.operations.GetUsersUserIdFollowingsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersUserIdFollowingsRequest req = new GetUsersUserIdFollowingsRequest(542499L) {{
                limit = 24678L;
            }};            

            GetUsersUserIdFollowingsResponse res = sdk.users.getUsersUserIdFollowings(req, new GetUsersUserIdFollowingsSecurity("fugiat", "ab") {{
                authHeader = "YOUR_API_KEY_HERE";
                clientId = "YOUR_API_KEY_HERE";
            }});

            if (res.getUsersUserIdFollowings200ApplicationJSONOneOf != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~getUsersUserIdFollowingsFollowingId~~

Returns (following_id) that is followed by (user_id).

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersUserIdFollowingsFollowingIdRequest;
import org.openapis.openapi.models.operations.GetUsersUserIdFollowingsFollowingIdResponse;
import org.openapis.openapi.models.operations.GetUsersUserIdFollowingsFollowingIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersUserIdFollowingsFollowingIdRequest req = new GetUsersUserIdFollowingsFollowingIdRequest(743835L, 679393L);            

            GetUsersUserIdFollowingsFollowingIdResponse res = sdk.users.getUsersUserIdFollowingsFollowingId(req, new GetUsersUserIdFollowingsFollowingIdSecurity("iusto", "voluptate") {{
                authHeader = "YOUR_API_KEY_HERE";
                clientId = "YOUR_API_KEY_HERE";
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

## getUsersUserIdLikesTracks

Returns a list of user's liked tracks.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersUserIdLikesTracksRequest;
import org.openapis.openapi.models.operations.GetUsersUserIdLikesTracksResponse;
import org.openapis.openapi.models.operations.GetUsersUserIdLikesTracksSecurity;
import org.openapis.openapi.models.shared.AccessEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersUserIdLikesTracksRequest req = new GetUsersUserIdLikesTracksRequest(677082L) {{
                access = new org.openapis.openapi.models.shared.AccessEnum[]{{
                    add(AccessEnum.PREVIEW),
                    add(AccessEnum.BLOCKED),
                    add(AccessEnum.BLOCKED),
                }};
                limit = 990339L;
                linkedPartitioning = false;
            }};            

            GetUsersUserIdLikesTracksResponse res = sdk.users.getUsersUserIdLikesTracks(req, new GetUsersUserIdLikesTracksSecurity("nihil", "ipsum") {{
                authHeader = "YOUR_API_KEY_HERE";
                clientId = "YOUR_API_KEY_HERE";
            }});

            if (res.getUsersUserIdLikesTracks200ApplicationJSONOneOf != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsersUserIdPlaylists

Returns a list of user's playlists.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersUserIdPlaylistsRequest;
import org.openapis.openapi.models.operations.GetUsersUserIdPlaylistsResponse;
import org.openapis.openapi.models.operations.GetUsersUserIdPlaylistsSecurity;
import org.openapis.openapi.models.shared.AccessEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersUserIdPlaylistsRequest req = new GetUsersUserIdPlaylistsRequest(456015L) {{
                access = new org.openapis.openapi.models.shared.AccessEnum[]{{
                    add(AccessEnum.BLOCKED),
                    add(AccessEnum.PLAYABLE),
                    add(AccessEnum.PLAYABLE),
                }};
                limit = 20651L;
                linkedPartitioning = false;
            }};            

            GetUsersUserIdPlaylistsResponse res = sdk.users.getUsersUserIdPlaylists(req, new GetUsersUserIdPlaylistsSecurity("amet", "optio") {{
                authHeader = "YOUR_API_KEY_HERE";
                clientId = "YOUR_API_KEY_HERE";
            }});

            if (res.getUsersUserIdPlaylists200ApplicationJSONOneOf != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsersUserIdTracks

Returns a list of user's tracks.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersUserIdTracksRequest;
import org.openapis.openapi.models.operations.GetUsersUserIdTracksResponse;
import org.openapis.openapi.models.operations.GetUsersUserIdTracksSecurity;
import org.openapis.openapi.models.shared.AccessEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersUserIdTracksRequest req = new GetUsersUserIdTracksRequest(881586L) {{
                access = new org.openapis.openapi.models.shared.AccessEnum[]{{
                    add(AccessEnum.BLOCKED),
                    add(AccessEnum.PREVIEW),
                }};
                limit = 645785L;
                linkedPartitioning = false;
            }};            

            GetUsersUserIdTracksResponse res = sdk.users.getUsersUserIdTracks(req, new GetUsersUserIdTracksSecurity("provident", "minima") {{
                authHeader = "YOUR_API_KEY_HERE";
                clientId = "YOUR_API_KEY_HERE";
            }});

            if (res.getUsersUserIdTracks200ApplicationJSONOneOf != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsersUserIdWebProfiles

Returns list of user's links added to their profile (website, facebook, instagram).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersUserIdWebProfilesRequest;
import org.openapis.openapi.models.operations.GetUsersUserIdWebProfilesResponse;
import org.openapis.openapi.models.operations.GetUsersUserIdWebProfilesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersUserIdWebProfilesRequest req = new GetUsersUserIdWebProfilesRequest(831049L) {{
                limit = 519711L;
            }};            

            GetUsersUserIdWebProfilesResponse res = sdk.users.getUsersUserIdWebProfiles(req, new GetUsersUserIdWebProfilesSecurity("similique", "alias") {{
                authHeader = "YOUR_API_KEY_HERE";
                clientId = "YOUR_API_KEY_HERE";
            }});

            if (res.webProfiles != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
