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
    
    req := operations.StorageBucketAccessControlsDeleteRequest{
        Security: operations.StorageBucketAccessControlsDeleteSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.StorageBucketAccessControlsDeletePathParams{
            Bucket: "repudiandae",
            Entity: "architecto",
        },
        QueryParams: operations.StorageBucketAccessControlsDeleteQueryParams{
            Alt: "json",
            Fields: "fuga",
            Key: "in",
            OauthToken: "ullam",
            PrettyPrint: false,
            QuotaUser: "necessitatibus",
            UserIP: "voluptatum",
        },
    }
    
    res, err := s.BucketAccessControls.StorageBucketAccessControlsDelete(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->