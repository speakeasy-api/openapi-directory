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
            Bucket: "sunt",
            Entity: "minima",
        },
        QueryParams: operations.StorageBucketAccessControlsDeleteQueryParams{
            Alt: "json",
            Fields: "asperiores",
            Key: "repellendus",
            OauthToken: "impedit",
            PrettyPrint: true,
            QuotaUser: "molestiae",
            UploadType: "ipsa",
            UserIP: "nihil",
            UserProject: "recusandae",
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