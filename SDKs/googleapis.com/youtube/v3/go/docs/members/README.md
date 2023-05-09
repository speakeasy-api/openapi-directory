# Members

### Available Operations

* [YoutubeMembersList](#youtubememberslist) - Retrieves a list of members that match the request criteria for a channel.

## YoutubeMembersList

Retrieves a list of members that match the request criteria for a channel.

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
    res, err := s.Members.YoutubeMembersList(ctx, operations.YoutubeMembersListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("eligendi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("esse"),
        Fields: sdk.String("blanditiis"),
        FilterByMemberChannelID: sdk.String("sint"),
        HasAccessToLevel: sdk.String("repellat"),
        Key: sdk.String("a"),
        MaxResults: sdk.Int64(658604),
        Mode: operations.YoutubeMembersListModeEnumAllCurrent.ToPointer(),
        OauthToken: sdk.String("itaque"),
        PageToken: sdk.String("nulla"),
        Part: []string{
            "corporis",
            "velit",
            "officiis",
        },
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("enim"),
        UploadType: sdk.String("officia"),
        UploadProtocol: sdk.String("saepe"),
    }, operations.YoutubeMembersListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MemberListResponse != nil {
        // handle response
    }
}
```
