# Activity

### Available Operations

* [DriveactivityActivityQuery](#driveactivityactivityquery) - Query past activity in Google Drive.

## DriveactivityActivityQuery

Query past activity in Google Drive.

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
    res, err := s.Activity.DriveactivityActivityQuery(ctx, operations.DriveactivityActivityQueryRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        QueryDriveActivityRequest: &shared.QueryDriveActivityRequest{
            AncestorName: sdk.String("veritatis"),
            ConsolidationStrategy: &shared.ConsolidationStrategy{
                Legacy: map[string]interface{}{
                    "perferendis": "ipsam",
                    "repellendus": "sapiente",
                    "quo": "odit",
                },
                None: map[string]interface{}{
                    "at": "maiores",
                    "molestiae": "quod",
                    "quod": "esse",
                    "totam": "porro",
                },
            },
            Filter: sdk.String("dolorum"),
            ItemName: sdk.String("dicta"),
            PageSize: sdk.Int(720633),
            PageToken: sdk.String("officia"),
        },
        AccessToken: sdk.String("occaecati"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("deleniti"),
        Fields: sdk.String("hic"),
        Key: sdk.String("optio"),
        OauthToken: sdk.String("totam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("beatae"),
        UploadType: sdk.String("commodi"),
        UploadProtocol: sdk.String("molestiae"),
    }, operations.DriveactivityActivityQuerySecurity{
        Option1: &operations.DriveactivityActivityQuerySecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.QueryDriveActivityResponse != nil {
        // handle response
    }
}
```
