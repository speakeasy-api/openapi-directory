<!-- Start SDK Example Usage -->
```go
package main

import (
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
            ProjectID: "sit",
        },
        QueryParams: operations.DataflowProjectsDeleteSnapshotsQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            Fields: "dolor",
            Key: "expedita",
            Location: "voluptas",
            OauthToken: "fugit",
            PrettyPrint: false,
            QuotaUser: "nihil",
            SnapshotID: "rerum",
            UploadType: "dicta",
            UploadProtocol: "debitis",
        },
    }
    
    res, err := s.Projects.DataflowProjectsDeleteSnapshots(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteSnapshotResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->