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
        DollarXgafv: "2",
        RequestBody: map[string]interface{}{
            "distinctio": "quibusdam",
            "unde": "nulla",
            "corrupti": "illum",
        },
        AccessToken: "vel",
        Alt: "media",
        Bucket: "deserunt",
        Callback: "suscipit",
        Fields: "iure",
        Key: "magnam",
        OauthToken: "debitis",
        PrettyPrint: false,
        QuotaUser: "ipsa",
        UploadType: "delectus",
        UploadProtocol: "tempora",
    }

    ctx := context.Background()
    res, err := s.Projects.FirebasestorageProjectsBucketsAddFirebase(ctx, req, operations.FirebasestorageProjectsBucketsAddFirebaseSecurity{
        Option1: &operations.FirebasestorageProjectsBucketsAddFirebaseSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Bucket != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->