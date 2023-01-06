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
            Parent: "ipsa",
        },
        QueryParams: operations.VersionhistoryPlatformsChannelsListQueryParams{
            DollarXgafv: "1",
            AccessToken: "expedita",
            Alt: "json",
            Callback: "quasi",
            Fields: "voluptas",
            Key: "numquam",
            OauthToken: "autem",
            PageSize: 8013628070797498346,
            PageToken: "rem",
            PrettyPrint: true,
            QuotaUser: "ut",
            UploadType: "dignissimos",
            UploadProtocol: "eum",
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