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
        Security: operations.DataflowProjectsDeleteSnapshotsSecurity{
            Option1: &operations.DataflowProjectsDeleteSnapshotsSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        PathParams: operations.DataflowProjectsDeleteSnapshotsPathParams{
            ProjectID: "corrupti",
        },
        QueryParams: operations.DataflowProjectsDeleteSnapshotsQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            Fields: "nulla",
            Key: "corrupti",
            Location: "illum",
            OauthToken: "vel",
            PrettyPrint: false,
            QuotaUser: "error",
            SnapshotID: "deserunt",
            UploadType: "suscipit",
            UploadProtocol: "iure",
        },
    }

    ctx := context.Background()
    res, err := s.Projects.DataflowProjectsDeleteSnapshots(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteSnapshotResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->