# FloodlightGroups

### Available Operations

* [DisplayvideoFloodlightGroupsGet](#displayvideofloodlightgroupsget) - Gets a Floodlight group.

## DisplayvideoFloodlightGroupsGet

Gets a Floodlight group.

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
    res, err := s.FloodlightGroups.DisplayvideoFloodlightGroupsGet(ctx, operations.DisplayvideoFloodlightGroupsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("eos"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("cumque"),
        Fields: sdk.String("ut"),
        FloodlightGroupID: "quae",
        Key: sdk.String("nihil"),
        OauthToken: sdk.String("quam"),
        PartnerID: sdk.String("assumenda"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("consequatur"),
        UploadType: sdk.String("cumque"),
        UploadProtocol: sdk.String("placeat"),
    }, operations.DisplayvideoFloodlightGroupsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FloodlightGroup != nil {
        // handle response
    }
}
```
