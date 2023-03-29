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

    req := operations.StorageBucketAccessControlsDeleteRequest{
        Security: operations.StorageBucketAccessControlsDeleteSecurity{
            Option1: &operations.StorageBucketAccessControlsDeleteSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        PathParams: operations.StorageBucketAccessControlsDeletePathParams{
            Bucket: "unde",
            Entity: "deserunt",
        },
        QueryParams: operations.StorageBucketAccessControlsDeleteQueryParams{
            Alt: "json",
            Fields: "nulla",
            Key: "id",
            OauthToken: "vero",
            PrettyPrint: false,
            QuotaUser: "perspiciatis",
            UploadType: "nulla",
            UserIP: "nihil",
            UserProject: "fuga",
        },
    }

    ctx := context.Background()
    res, err := s.BucketAccessControls.StorageBucketAccessControlsDelete(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->