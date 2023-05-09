# Users

### Available Operations

* [DrivelabelsUsersGetCapabilities](#drivelabelsusersgetcapabilities) - Gets the user capabilities.

## DrivelabelsUsersGetCapabilities

Gets the user capabilities.

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
    res, err := s.Users.DrivelabelsUsersGetCapabilities(ctx, operations.DrivelabelsUsersGetCapabilitiesRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("vel"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("debitis"),
        Customer: sdk.String("ullam"),
        Fields: sdk.String("architecto"),
        Key: sdk.String("accusantium"),
        Name: "Carolyn McLaughlin",
        OauthToken: sdk.String("quibusdam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quod"),
        UploadType: sdk.String("nemo"),
        UploadProtocol: sdk.String("recusandae"),
        UseAdminAccess: sdk.Bool(false),
        View: operations.DrivelabelsUsersGetCapabilitiesViewEnumLabelViewBasic.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAppsDriveLabelsV2betaUserCapabilities != nil {
        // handle response
    }
}
```
