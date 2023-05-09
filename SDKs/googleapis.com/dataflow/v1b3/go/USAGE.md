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
    res, err := s.Projects.DataflowProjectsDeleteSnapshots(ctx, operations.DataflowProjectsDeleteSnapshotsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quibusdam"),
        Fields: sdk.String("unde"),
        Key: sdk.String("nulla"),
        Location: sdk.String("corrupti"),
        OauthToken: sdk.String("illum"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "vel",
        QuotaUser: sdk.String("error"),
        SnapshotID: sdk.String("deserunt"),
        UploadType: sdk.String("suscipit"),
        UploadProtocol: sdk.String("iure"),
    }, operations.DataflowProjectsDeleteSnapshotsSecurity{
        Option1: &operations.DataflowProjectsDeleteSnapshotsSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteSnapshotResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->