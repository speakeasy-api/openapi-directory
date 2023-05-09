# Users

## Overview

SoundCloud Users Endpoints.

### Available Operations

* [GetUsersUserID](#getusersuserid) - Returns a user.
* [GetUsersUserIDComments](#getusersuseridcomments) - Returns a list of user's comments.
* [~~GetUsersUserIDFavorites~~](#getusersuseridfavorites) - Returns a list of user's favorited or liked tracks. (use /users/:userId/likes/tracks instead, to fetch a user's likes) :warning: **Deprecated**
* [GetUsersUserIDFollowers](#getusersuseridfollowers) - Returns a list of user’s followers.
* [GetUsersUserIDFollowings](#getusersuseridfollowings) - Returns a list of user’s followings.
* [~~GetUsersUserIDFollowingsFollowingID~~](#getusersuseridfollowingsfollowingid) - Returns a user's following. (use /users/{user_id} instead, to fetch the user details) :warning: **Deprecated**
* [GetUsersUserIDLikesTracks](#getusersuseridlikestracks) - Returns a list of user's liked tracks.
* [GetUsersUserIDPlaylists](#getusersuseridplaylists) - Returns a list of user's playlists.
* [GetUsersUserIDTracks](#getusersuseridtracks) - Returns a list of user's tracks.
* [GetUsersUserIDWebProfiles](#getusersuseridwebprofiles) - Returns list of user's links added to their profile (website, facebook, instagram).

## GetUsersUserID

Returns a user.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Users.GetUsersUserID(ctx, operations.GetUsersUserIDRequest{
        UserID: 537023,
    }, operations.GetUsersUserIDSecurity{
        AuthHeader: "YOUR_API_KEY_HERE",
        ClientID: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CompleteUser != nil {
        // handle response
    }
}
```

## GetUsersUserIDComments

Returns a list of user's comments.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Users.GetUsersUserIDComments(ctx, operations.GetUsersUserIDCommentsRequest{
        Limit: sdk.Int64(703889),
        Offset: sdk.Int64(447926),
        UserID: 100226,
    }, operations.GetUsersUserIDCommentsSecurity{
        AuthHeader: "YOUR_API_KEY_HERE",
        ClientID: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CommentsList != nil {
        // handle response
    }
}
```

## ~~GetUsersUserIDFavorites~~

Returns a list of user's favorited or liked tracks. (use /users/:userId/likes/tracks instead, to fetch a user's likes)

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Users.GetUsersUserIDFavorites(ctx, operations.GetUsersUserIDFavoritesRequest{
        Limit: sdk.Int64(99569),
        LinkedPartitioning: sdk.Bool(false),
        UserID: 919483,
    }, operations.GetUsersUserIDFavoritesSecurity{
        AuthHeader: "YOUR_API_KEY_HERE",
        ClientID: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetUsersUserIDFavorites200ApplicationJSONOneOf != nil {
        // handle response
    }
}
```

## GetUsersUserIDFollowers

Returns a list of users that follows (user_id).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Users.GetUsersUserIDFollowers(ctx, operations.GetUsersUserIDFollowersRequest{
        Limit: sdk.Int64(352312),
        UserID: 714242,
    }, operations.GetUsersUserIDFollowersSecurity{
        AuthHeader: "YOUR_API_KEY_HERE",
        ClientID: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetUsersUserIDFollowers200ApplicationJSONOneOf != nil {
        // handle response
    }
}
```

## GetUsersUserIDFollowings

Returns list of users that (user_id) follows.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Users.GetUsersUserIDFollowings(ctx, operations.GetUsersUserIDFollowingsRequest{
        Limit: sdk.Int64(469249),
        UserID: 998848,
    }, operations.GetUsersUserIDFollowingsSecurity{
        AuthHeader: "YOUR_API_KEY_HERE",
        ClientID: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetUsersUserIDFollowings200ApplicationJSONOneOf != nil {
        // handle response
    }
}
```

## ~~GetUsersUserIDFollowingsFollowingID~~

Returns (following_id) that is followed by (user_id).

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Users.GetUsersUserIDFollowingsFollowingID(ctx, operations.GetUsersUserIDFollowingsFollowingIDRequest{
        FollowingID: 841140,
        UserID: 149448,
    }, operations.GetUsersUserIDFollowingsFollowingIDSecurity{
        AuthHeader: "YOUR_API_KEY_HERE",
        ClientID: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CompleteUser != nil {
        // handle response
    }
}
```

## GetUsersUserIDLikesTracks

Returns a list of user's liked tracks.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Users.GetUsersUserIDLikesTracks(ctx, operations.GetUsersUserIDLikesTracksRequest{
        Access: []shared.AccessEnum{
            shared.AccessEnumBlocked,
            shared.AccessEnumPlayable,
            shared.AccessEnumPlayable,
            shared.AccessEnumPreview,
        },
        Limit: sdk.Int64(615560),
        LinkedPartitioning: sdk.Bool(false),
        UserID: 166847,
    }, operations.GetUsersUserIDLikesTracksSecurity{
        AuthHeader: "YOUR_API_KEY_HERE",
        ClientID: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetUsersUserIDLikesTracks200ApplicationJSONOneOf != nil {
        // handle response
    }
}
```

## GetUsersUserIDPlaylists

Returns a list of user's playlists.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Users.GetUsersUserIDPlaylists(ctx, operations.GetUsersUserIDPlaylistsRequest{
        Access: []shared.AccessEnum{
            shared.AccessEnumBlocked,
        },
        Limit: sdk.Int64(848009),
        LinkedPartitioning: sdk.Bool(false),
        UserID: 864934,
    }, operations.GetUsersUserIDPlaylistsSecurity{
        AuthHeader: "YOUR_API_KEY_HERE",
        ClientID: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetUsersUserIDPlaylists200ApplicationJSONOneOf != nil {
        // handle response
    }
}
```

## GetUsersUserIDTracks

Returns a list of user's tracks.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Users.GetUsersUserIDTracks(ctx, operations.GetUsersUserIDTracksRequest{
        Access: []shared.AccessEnum{
            shared.AccessEnumPreview,
            shared.AccessEnumPreview,
            shared.AccessEnumPlayable,
            shared.AccessEnumPreview,
        },
        Limit: sdk.Int64(33222),
        LinkedPartitioning: sdk.Bool(false),
        UserID: 69167,
    }, operations.GetUsersUserIDTracksSecurity{
        AuthHeader: "YOUR_API_KEY_HERE",
        ClientID: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetUsersUserIDTracks200ApplicationJSONOneOf != nil {
        // handle response
    }
}
```

## GetUsersUserIDWebProfiles

Returns list of user's links added to their profile (website, facebook, instagram).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Users.GetUsersUserIDWebProfiles(ctx, operations.GetUsersUserIDWebProfilesRequest{
        Limit: sdk.Int64(982575),
        UserID: 697429,
    }, operations.GetUsersUserIDWebProfilesSecurity{
        AuthHeader: "YOUR_API_KEY_HERE",
        ClientID: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WebProfiles != nil {
        // handle response
    }
}
```
