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

    req := operations.VersionhistoryPlatformsChannelsListRequest{
        PathParams: operations.VersionhistoryPlatformsChannelsListPathParams{
            Parent: "corrupti",
        },
        QueryParams: operations.VersionhistoryPlatformsChannelsListQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            Fields: "nulla",
            Key: "corrupti",
            OauthToken: "illum",
            PageSize: 423655,
            PageToken: "error",
            PrettyPrint: false,
            QuotaUser: "deserunt",
            UploadType: "suscipit",
            UploadProtocol: "iure",
        },
    }

    ctx := context.Background()
    res, err := s.Platforms.VersionhistoryPlatformsChannelsList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ListChannelsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->