<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.DeleteLikesPlaylistsPlaylistIDRequest{
        PlaylistID: 548814,
    }

    ctx := context.Background()
    res, err := s.Likes.DeleteLikesPlaylistsPlaylistID(ctx, req, operations.DeleteLikesPlaylistsPlaylistIDSecurity{
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
<!-- End SDK Example Usage -->