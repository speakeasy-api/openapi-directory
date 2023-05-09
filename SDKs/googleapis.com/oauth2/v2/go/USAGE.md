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
    res, err := s.Oauth2Tokeninfo(ctx, operations.Oauth2TokeninfoRequest{
        AccessToken: sdk.String("corrupti"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("provident"),
        IDToken: sdk.String("distinctio"),
        Key: sdk.String("quibusdam"),
        OauthToken: sdk.String("unde"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nulla"),
        UserIP: sdk.String("corrupti"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Tokeninfo != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->