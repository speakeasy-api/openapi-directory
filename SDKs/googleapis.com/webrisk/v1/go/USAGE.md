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
            AccessToken: "omnis",
            Alt: "json",
            Callback: "et",
            Fields: "est",
            HashPrefix: "dolores",
            Key: "laboriosam",
            OauthToken: "qui",
            PrettyPrint: true,
            QuotaUser: "et",
            ThreatTypes: []WebriskHashesSearchThreatTypesEnum{
                "SOCIAL_ENGINEERING_EXTENDED_COVERAGE",
            },
            UploadType: "non",
            UploadProtocol: "pariatur",
        },
    }
    
    res, err := s.Hashes.WebriskHashesSearch(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudWebriskV1SearchHashesResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->