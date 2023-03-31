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

    req := operations.WebriskHashesSearchRequest{
        DollarXgafv: "2",
        AccessToken: "provident",
        Alt: "proto",
        Callback: "quibusdam",
        Fields: "unde",
        HashPrefix: "nulla",
        Key: "corrupti",
        OauthToken: "illum",
        PrettyPrint: false,
        QuotaUser: "vel",
        ThreatTypes: []WebriskHashesSearchThreatTypesEnum{
            "UNWANTED_SOFTWARE",
            "MALWARE",
            "SOCIAL_ENGINEERING",
        },
        UploadType: "magnam",
        UploadProtocol: "debitis",
    }

    ctx := context.Background()
    res, err := s.Hashes.WebriskHashesSearch(ctx, req, operations.WebriskHashesSearchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudWebriskV1SearchHashesResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->