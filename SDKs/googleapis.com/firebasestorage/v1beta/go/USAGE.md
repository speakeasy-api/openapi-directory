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

    req := operations.FirebasestorageProjectsBucketsAddFirebaseRequest{
        Security: operations.FirebasestorageProjectsBucketsAddFirebaseSecurity{
            Option1: &operations.FirebasestorageProjectsBucketsAddFirebaseSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        PathParams: operations.FirebasestorageProjectsBucketsAddFirebasePathParams{
            Bucket: "unde",
        },
        QueryParams: operations.FirebasestorageProjectsBucketsAddFirebaseQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            Fields: "vero",
            Key: "perspiciatis",
            OauthToken: "nulla",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "fuga",
            UploadProtocol: "facilis",
        },
        Request: map[string]interface{}{
            "iusto": "ullam",
            "saepe": "inventore",
        },
    }

    ctx := context.Background()
    res, err := s.Projects.FirebasestorageProjectsBucketsAddFirebase(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Bucket != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->