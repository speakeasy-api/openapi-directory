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

    req := operations.ServicebrokerProjectsBrokersCreateRequest{
        DollarXgafv: "2",
        GoogleCloudServicebrokerV1beta1Broker: &shared.GoogleCloudServicebrokerV1beta1Broker{
            CreateTime: "provident",
            Name: "distinctio",
            Title: "Dr.",
            URL: "unde",
        },
        AccessToken: "nulla",
        Alt: "media",
        Callback: "illum",
        Fields: "vel",
        Key: "error",
        OauthToken: "deserunt",
        Parent: "suscipit",
        PrettyPrint: false,
        QuotaUser: "iure",
        UploadType: "magnam",
        UploadProtocol: "debitis",
    }

    ctx := context.Background()
    res, err := s.Projects.ServicebrokerProjectsBrokersCreate(ctx, req, operations.ServicebrokerProjectsBrokersCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->