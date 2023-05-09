# MembershipsLevels

### Available Operations

* [YoutubeMembershipsLevelsList](#youtubemembershipslevelslist) - Retrieves a list of all pricing levels offered by a creator to the fans.

## YoutubeMembershipsLevelsList

Retrieves a list of all pricing levels offered by a creator to the fans.

### Example Usage

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
    res, err := s.MembershipsLevels.YoutubeMembershipsLevelsList(ctx, operations.YoutubeMembershipsLevelsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("repudiandae"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("officia"),
        Fields: sdk.String("impedit"),
        Key: sdk.String("quasi"),
        OauthToken: sdk.String("blanditiis"),
        Part: []string{
            "quisquam",
            "eos",
        },
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nobis"),
        UploadType: sdk.String("natus"),
        UploadProtocol: sdk.String("minus"),
    }, operations.YoutubeMembershipsLevelsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MembershipsLevelListResponse != nil {
        // handle response
    }
}
```
