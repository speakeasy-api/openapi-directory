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
    res, err := s.Projects.FileProjectsLocationsBackupsCreate(ctx, operations.FileProjectsLocationsBackupsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        BackupInput: &shared.BackupInput{
            Description: sdk.String("provident"),
            KmsKey: sdk.String("distinctio"),
            Labels: map[string]string{
                "unde": "nulla",
                "corrupti": "illum",
                "vel": "error",
                "deserunt": "suscipit",
            },
            SourceFileShare: sdk.String("iure"),
            SourceInstance: sdk.String("magnam"),
        },
        AccessToken: sdk.String("debitis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        BackupID: sdk.String("delectus"),
        Callback: sdk.String("tempora"),
        Fields: sdk.String("suscipit"),
        Key: sdk.String("molestiae"),
        OauthToken: sdk.String("minus"),
        Parent: "placeat",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatum"),
        UploadType: sdk.String("iusto"),
        UploadProtocol: sdk.String("excepturi"),
    }, operations.FileProjectsLocationsBackupsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->