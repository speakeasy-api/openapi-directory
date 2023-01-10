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
    
    req := operations.VersionhistoryPlatformsChannelsListRequest{
        PathParams: operations.VersionhistoryPlatformsChannelsListPathParams{
            Parent: "quod",
        },
        QueryParams: operations.VersionhistoryPlatformsChannelsListQueryParams{
            DollarXgafv: "1",
            AccessToken: "numquam",
            Alt: "json",
            Callback: "blanditiis",
            Fields: "voluptatem",
            Key: "voluptas",
            OauthToken: "ea",
            PageSize: 3770087752288054082,
            PageToken: "ea",
            PrettyPrint: false,
            QuotaUser: "quod",
            UploadType: "est",
            UploadProtocol: "quae",
        },
    }
    
    res, err := s.Platforms.VersionhistoryPlatformsChannelsList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ListChannelsResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->