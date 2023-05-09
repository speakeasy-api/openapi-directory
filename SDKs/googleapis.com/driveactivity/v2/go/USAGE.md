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
    res, err := s.Activity.DriveactivityActivityQuery(ctx, operations.DriveactivityActivityQueryRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        QueryDriveActivityRequest: &shared.QueryDriveActivityRequest{
            AncestorName: sdk.String("provident"),
            ConsolidationStrategy: &shared.ConsolidationStrategy{
                Legacy: map[string]interface{}{
                    "quibusdam": "unde",
                    "nulla": "corrupti",
                    "illum": "vel",
                },
                None: map[string]interface{}{
                    "deserunt": "suscipit",
                    "iure": "magnam",
                    "debitis": "ipsa",
                },
            },
            Filter: sdk.String("delectus"),
            ItemName: sdk.String("tempora"),
            PageSize: sdk.Int(383441),
            PageToken: sdk.String("molestiae"),
        },
        AccessToken: sdk.String("minus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("voluptatum"),
        Fields: sdk.String("iusto"),
        Key: sdk.String("excepturi"),
        OauthToken: sdk.String("nisi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("recusandae"),
        UploadType: sdk.String("temporibus"),
        UploadProtocol: sdk.String("ab"),
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
<!-- End SDK Example Usage -->