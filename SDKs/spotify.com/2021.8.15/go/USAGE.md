<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.EndpointGetAnAlbumRequest{
        Security: operations.EndpointGetAnAlbumSecurity{
            SpotifyAuth: shared.SchemeSpotifyAuth{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.EndpointGetAnAlbumPathParams{
            ID: "sit",
        },
        QueryParams: operations.EndpointGetAnAlbumQueryParams{
            Market: "voluptas",
        },
        Headers: operations.EndpointGetAnAlbumHeaders{
            Authorization: "culpa",
        },
    }
    
    res, err := s.CategoryAlbums.EndpointGetAnAlbum(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AlbumObject != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->