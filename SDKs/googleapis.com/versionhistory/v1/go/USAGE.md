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
            Parent: "sit",
        },
        QueryParams: operations.VersionhistoryPlatformsChannelsListQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            Fields: "dolor",
            Key: "expedita",
            OauthToken: "voluptas",
            PageSize: 8274930044578894929,
            PageToken: "et",
            PrettyPrint: true,
            QuotaUser: "rerum",
            UploadType: "dicta",
            UploadProtocol: "debitis",
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