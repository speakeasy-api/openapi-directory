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

    req := operations.DatalineageProjectsLocationsBatchSearchLinkProcessesRequest{
        DollarXgafv: "2",
        GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesRequest: &shared.GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesRequest{
            Links: []string{
                "distinctio",
                "quibusdam",
                "unde",
            },
            PageSize: 857946,
            PageToken: "corrupti",
        },
        AccessToken: "illum",
        Alt: "media",
        Callback: "error",
        Fields: "deserunt",
        Key: "suscipit",
        OauthToken: "iure",
        Parent: "magnam",
        PrettyPrint: false,
        QuotaUser: "debitis",
        UploadType: "ipsa",
        UploadProtocol: "delectus",
    }

    ctx := context.Background()
    res, err := s.Projects.DatalineageProjectsLocationsBatchSearchLinkProcesses(ctx, req, operations.DatalineageProjectsLocationsBatchSearchLinkProcessesSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->