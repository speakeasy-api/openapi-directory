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
        Security: operations.WebriskHashesSearchSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        QueryParams: operations.WebriskHashesSearchQueryParams{
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
        },
    }

    ctx := context.Background()
    res, err := s.Hashes.WebriskHashesSearch(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudWebriskV1SearchHashesResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->