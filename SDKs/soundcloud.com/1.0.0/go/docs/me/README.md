# Me

## Overview

Own User Endpoints.

### Available Operations

* [DeleteMeFollowingsUserID](#deletemefollowingsuserid) - Deletes a user who is followed by the authenticated user.
* [GetMe](#getme) - Returns the authenticated user’s information.
* [GetMeActivities](#getmeactivities) - Returns the authenticated user's activities.
* [GetMeActivitiesAllOwn](#getmeactivitiesallown) - Recent the authenticated user's activities.
* [GetMeActivitiesTracks](#getmeactivitiestracks) - Returns the authenticated user's recent track related activities.
* [GetMeConnections](#getmeconnections) - Returns a list of the authenticated user's connected social accounts.
* [GetMeConnectionsConnectionID](#getmeconnectionsconnectionid) - Returns the authenticated user's connected social account.
* [~~GetMeFavoritesIds~~](#getmefavoritesids) - Returns user’s favorites ids. (use /me/likes/tracks instead to fetch the authenticated user's likes) :warning: **Deprecated**
* [GetMeFollowers](#getmefollowers) - Returns a list of users who are following the authenticated user.
* [~~GetMeFollowersFollowerID~~](#getmefollowersfollowerid) - Returns a user who is following the authenticated user. (use /users/{user_id} instead, to fetch the user details) :warning: **Deprecated**
* [GetMeFollowings](#getmefollowings) - Returns a list of users who are followed by the authenticated user.
* [GetMeFollowingsTracks](#getmefollowingstracks) - Returns a list of recent tracks from users followed by the authenticated user.
* [~~GetMeFollowingsUserID~~](#getmefollowingsuserid) - Returns a user who is followed by the authenticated user. (use /users/{user_id} instead, to fetch the user details) :warning: **Deprecated**
* [GetMeLikesTracks](#getmelikestracks) - Returns a list of favorited or liked tracks of the authenticated user.
* [GetMePlaylists](#getmeplaylists) - Returns user’s playlists (sets).
* [~~GetMePlaylistsPlaylistID~~](#getmeplaylistsplaylistid) - Returns playlist. (use /playlists/{playlist_id} instead, to fetch the playlist details) :warning: **Deprecated**
* [GetMeTracks](#getmetracks) - Returns a list of user's tracks.
* [~~GetMeTracksTrackID~~](#getmetrackstrackid) - Returns a specified track. (use /tracks/{track_id} instead, to fetch the track details) :warning: **Deprecated**
* [PutMeFollowingsUserID](#putmefollowingsuserid) - Follows a user.

## DeleteMeFollowingsUserID

Deletes a user who is followed by the authenticated user.

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
    res, err := s.Me.DeleteMeFollowingsUserID(ctx, operations.DeleteMeFollowingsUserIDRequest{
        UserID: 857946,
    }, operations.DeleteMeFollowingsUserIDSecurity{
        AuthHeader: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetMe

Returns the authenticated user’s information.

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
    res, err := s.Me.GetMe(ctx, operations.GetMeSecurity{
        AuthHeader: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CompleteUser != nil {
        // handle response
    }
}
```

## GetMeActivities

Returns the authenticated user's activities.

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
    res, err := s.Me.GetMeActivities(ctx, operations.GetMeActivitiesRequest{
        Access: []shared.AccessEnum{
            shared.AccessEnumBlocked,
            shared.AccessEnumPreview,
            shared.AccessEnumPreview,
        },
        Limit: sdk.Int64(645894),
    }, operations.GetMeActivitiesSecurity{
        AuthHeader: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Activities != nil {
        // handle response
    }
}
```

## GetMeActivitiesAllOwn

Recent the authenticated user's activities.

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
    res, err := s.Me.GetMeActivitiesAllOwn(ctx, operations.GetMeActivitiesAllOwnRequest{
        Access: []shared.AccessEnum{
            shared.AccessEnumPreview,
            shared.AccessEnumPlayable,
        },
        Limit: sdk.Int64(891773),
    }, operations.GetMeActivitiesAllOwnSecurity{
        AuthHeader: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Activities != nil {
        // handle response
    }
}
```

## GetMeActivitiesTracks

Returns the authenticated user's recent track related activities.

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
    res, err := s.Me.GetMeActivitiesTracks(ctx, operations.GetMeActivitiesTracksRequest{
        Access: []shared.AccessEnum{
            shared.AccessEnumBlocked,
        },
        Limit: sdk.Int64(272656),
    }, operations.GetMeActivitiesTracksSecurity{
        AuthHeader: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Activities != nil {
        // handle response
    }
}
```

## GetMeConnections

Returns a list of the authenticated user's connected social accounts.

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
    res, err := s.Me.GetMeConnections(ctx, operations.GetMeConnectionsRequest{
        Limit: sdk.Int64(383441),
        Offset: sdk.Int64(477665),
    }, operations.GetMeConnectionsSecurity{
        AuthHeader: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Connections != nil {
        // handle response
    }
}
```

## GetMeConnectionsConnectionID

Returns the authenticated user's connected social account.

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
    res, err := s.Me.GetMeConnectionsConnectionID(ctx, operations.GetMeConnectionsConnectionIDRequest{
        ConnectionID: 791725,
    }, operations.GetMeConnectionsConnectionIDSecurity{
        AuthHeader: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Connection != nil {
        // handle response
    }
}
```

## ~~GetMeFavoritesIds~~

Returns user’s favorites ids. (use /me/likes/tracks instead to fetch the authenticated user's likes)

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
    res, err := s.Me.GetMeFavoritesIds(ctx, operations.GetMeFavoritesIdsRequest{
        Limit: sdk.Int64(812169),
    }, operations.GetMeFavoritesIdsSecurity{
        AuthHeader: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetMeFollowers

Returns a list of users who are following the authenticated user.

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
    res, err := s.Me.GetMeFollowers(ctx, operations.GetMeFollowersRequest{
        Limit: sdk.Int64(528895),
    }, operations.GetMeFollowersSecurity{
        AuthHeader: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetMeFollowers200ApplicationJSONOneOf != nil {
        // handle response
    }
}
```

## ~~GetMeFollowersFollowerID~~

Returns a user who is following the authenticated user. (use /users/{user_id} instead, to fetch the user details)

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
    res, err := s.Me.GetMeFollowersFollowerID(ctx, operations.GetMeFollowersFollowerIDRequest{
        FollowerID: 479977,
    }, operations.GetMeFollowersFollowerIDSecurity{
        AuthHeader: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.User != nil {
        // handle response
    }
}
```

## GetMeFollowings

Returns a list of users who are followed by the authenticated user.

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
    res, err := s.Me.GetMeFollowings(ctx, operations.GetMeFollowingsRequest{
        Limit: sdk.Int64(568045),
        Offset: sdk.Int64(392785),
    }, operations.GetMeFollowingsSecurity{
        AuthHeader: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetMeFollowings200ApplicationJSONOneOf != nil {
        // handle response
    }
}
```

## GetMeFollowingsTracks

Returns a list of recent tracks from users followed by the authenticated user.

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
    res, err := s.Me.GetMeFollowingsTracks(ctx, operations.GetMeFollowingsTracksRequest{
        Access: []shared.AccessEnum{
            shared.AccessEnumBlocked,
            shared.AccessEnumPlayable,
            shared.AccessEnumPreview,
            shared.AccessEnumPlayable,
        },
        Limit: sdk.Int64(648172),
        Offset: sdk.Int64(20218),
    }, operations.GetMeFollowingsTracksSecurity{
        AuthHeader: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TracksList != nil {
        // handle response
    }
}
```

## ~~GetMeFollowingsUserID~~

Returns a user who is followed by the authenticated user. (use /users/{user_id} instead, to fetch the user details)

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
    res, err := s.Me.GetMeFollowingsUserID(ctx, operations.GetMeFollowingsUserIDRequest{
        UserID: 368241,
    }, operations.GetMeFollowingsUserIDSecurity{
        AuthHeader: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.User != nil {
        // handle response
    }
}
```

## GetMeLikesTracks

Returns a list of favorited or liked tracks of the authenticated user.

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
    res, err := s.Me.GetMeLikesTracks(ctx, operations.GetMeLikesTracksRequest{
        Limit: sdk.Int64(832620),
        LinkedPartitioning: sdk.Bool(false),
    }, operations.GetMeLikesTracksSecurity{
        AuthHeader: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetMeLikesTracks200ApplicationJSONOneOf != nil {
        // handle response
    }
}
```

## GetMePlaylists

Returns playlist info, playlist tracks and tracks owner info.

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
    res, err := s.Me.GetMePlaylists(ctx, operations.GetMePlaylistsRequest{
        Limit: sdk.Int64(957156),
    }, operations.GetMePlaylistsSecurity{
        AuthHeader: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlaylistsArray != nil {
        // handle response
    }
}
```

## ~~GetMePlaylistsPlaylistID~~

Returns playlist. (use /playlists/{playlist_id} instead, to fetch the playlist details)

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
    res, err := s.Me.GetMePlaylistsPlaylistID(ctx, operations.GetMePlaylistsPlaylistIDRequest{
        PlaylistID: 778157,
    }, operations.GetMePlaylistsPlaylistIDSecurity{
        AuthHeader: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Playlist != nil {
        // handle response
    }
}
```

## GetMeTracks

Returns a list of user's tracks.

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
    res, err := s.Me.GetMeTracks(ctx, operations.GetMeTracksRequest{
        Limit: sdk.Int64(140350),
        LinkedPartitioning: sdk.Bool(false),
    }, operations.GetMeTracksSecurity{
        AuthHeader: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetMeTracks200ApplicationJSONOneOf != nil {
        // handle response
    }
}
```

## ~~GetMeTracksTrackID~~

Returns a specified track. (use /tracks/{track_id} instead, to fetch the track details)

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
    res, err := s.Me.GetMeTracksTrackID(ctx, operations.GetMeTracksTrackIDRequest{
        TrackID: 870013,
    }, operations.GetMeTracksTrackIDSecurity{
        AuthHeader: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Track != nil {
        // handle response
    }
}
```

## PutMeFollowingsUserID

Follows a user.

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
    res, err := s.Me.PutMeFollowingsUserID(ctx, operations.PutMeFollowingsUserIDRequest{
        UserID: 870088,
    }, operations.PutMeFollowingsUserIDSecurity{
        AuthHeader: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.User != nil {
        // handle response
    }
}
```
