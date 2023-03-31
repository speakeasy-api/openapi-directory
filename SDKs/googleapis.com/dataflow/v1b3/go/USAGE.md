<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.DataflowProjectsDeleteSnapshotsRequest{
        DollarXgafv: "2",
        AccessToken: "provident",
        Alt: "proto",
        Callback: "quibusdam",
        Fields: "unde",
        Key: "nulla",
        Location: "corrupti",
        OauthToken: "illum",
        PrettyPrint: false,
        ProjectID: "vel",
        QuotaUser: "error",
        SnapshotID: "deserunt",
        UploadType: "suscipit",
        UploadProtocol: "iure",
    }

    ctx := context.Background()
    res, err := s.Projects.DataflowProjectsDeleteSnapshots(ctx, req, operations.DataflowProjectsDeleteSnapshotsSecurity{
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