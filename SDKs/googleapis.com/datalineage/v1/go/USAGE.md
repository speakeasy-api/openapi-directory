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
        Security: operations.DatalineageProjectsLocationsBatchSearchLinkProcessesSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.DatalineageProjectsLocationsBatchSearchLinkProcessesPathParams{
            Parent: "corrupti",
        },
        QueryParams: operations.DatalineageProjectsLocationsBatchSearchLinkProcessesQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            Fields: "nulla",
            Key: "corrupti",
            OauthToken: "illum",
            PrettyPrint: false,
            QuotaUser: "vel",
            UploadType: "error",
            UploadProtocol: "deserunt",
        },
        Request: &shared.GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesRequest{
            Links: []string{
                "iure",
                "magnam",
            },
            PageSize: 891773,
            PageToken: "ipsa",
        },
    }

    ctx := context.Background()
    res, err := s.Projects.DatalineageProjectsLocationsBatchSearchLinkProcesses(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->