# Invitation

### Available Operations

* [GetInvitationVendors](#getinvitationvendors) - Get vendor list for compiled invitation needs

## GetInvitationVendors

Get vendor list for compiled invitation needs

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Invitation.GetInvitationVendors(ctx, []shared.FileNeedsVendor{
        shared.FileNeedsVendor{
            FileID: sdk.Int64(463575),
            GUID: sdk.String("ipsum"),
            ProjectID: sdk.Int64(277628),
            Reason: sdk.String("qui"),
            TargetLanguage: []string{
                "maxime",
                "pariatur",
                "soluta",
            },
            TaskType: []string{
                "laborum",
            },
        },
        shared.FileNeedsVendor{
            FileID: sdk.Int64(517379),
            GUID: sdk.String("incidunt"),
            ProjectID: sdk.Int64(132068),
            Reason: sdk.String("dolores"),
            TargetLanguage: []string{
                "facilis",
                "aliquid",
                "quam",
            },
            TaskType: []string{
                "temporibus",
                "qui",
                "neque",
            },
        },
        shared.FileNeedsVendor{
            FileID: sdk.Int64(144847),
            GUID: sdk.String("magni"),
            ProjectID: sdk.Int64(488056),
            Reason: sdk.String("sunt"),
            TargetLanguage: []string{
                "nam",
                "hic",
            },
            TaskType: []string{
                "cumque",
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VendorInvitationList != nil {
        // handle response
    }
}
```
