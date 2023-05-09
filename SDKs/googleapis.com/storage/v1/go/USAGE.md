<!-- Start SDK Example Usage -->
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
    res, err := s.BucketAccessControls.StorageBucketAccessControlsDelete(ctx, operations.StorageBucketAccessControlsDeleteRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Bucket: "corrupti",
        Entity: "provident",
        Fields: sdk.String("distinctio"),
        Key: sdk.String("quibusdam"),
        OauthToken: sdk.String("unde"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nulla"),
        UploadType: sdk.String("corrupti"),
        UserIP: sdk.String("illum"),
        UserProject: sdk.String("vel"),
    }, operations.StorageBucketAccessControlsDeleteSecurity{
        Option1: &operations.StorageBucketAccessControlsDeleteSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
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