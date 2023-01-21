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
            Bucket: "sit",
        },
        QueryParams: operations.FirebasestorageProjectsBucketsAddFirebaseQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            Fields: "dolor",
            Key: "expedita",
            OauthToken: "voluptas",
            PrettyPrint: true,
            QuotaUser: "et",
            UploadType: "nihil",
            UploadProtocol: "rerum",
        },
        Request: map[string]interface{}{
            "debitis": "voluptatum",
            "et": "ut",
            "dolorem": "et",
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