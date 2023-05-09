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
        AccessToken: sdk.String("doloremque"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("tempora"),
        Fields: sdk.String("debitis"),
        FloodlightGroupID: "cumque",
        Key: sdk.String("maxime"),
        OauthToken: sdk.String("et"),
        PartnerID: sdk.String("beatae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("id"),
        UploadType: sdk.String("consequatur"),
        UploadProtocol: sdk.String("quos"),
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
