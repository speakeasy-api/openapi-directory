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
    res, err := s.Edits.AndroidpublisherEditsApklistingsDelete(ctx, operations.AndroidpublisherEditsApklistingsDeleteRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        ApkVersionCode: 548814,
        EditID: "provident",
        Fields: sdk.String("distinctio"),
        Key: sdk.String("quibusdam"),
        Language: "unde",
        OauthToken: sdk.String("nulla"),
        PackageName: "corrupti",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("illum"),
        UserIP: sdk.String("vel"),
    }, operations.AndroidpublisherEditsApklistingsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
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