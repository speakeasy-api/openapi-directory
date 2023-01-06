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
            Bucket: "libero",
        },
        QueryParams: operations.FirebasestorageProjectsBucketsAddFirebaseQueryParams{
            DollarXgafv: "2",
            AccessToken: "in",
            Alt: "proto",
            Callback: "voluptatem",
            Fields: "aliquam",
            Key: "explicabo",
            OauthToken: "quia",
            PrettyPrint: false,
            QuotaUser: "totam",
            UploadType: "blanditiis",
            UploadProtocol: "ducimus",
        },
        Request: map[string]interface{}{
            "ad": "quia",
            "quaerat": "velit",
            "voluptas": "eum",
        },
    }
    
    res, err := s.Projects.FirebasestorageProjectsBucketsAddFirebase(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Bucket != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->