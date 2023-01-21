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
            DollarXgafv: "1",
            AccessToken: "voluptas",
            Alt: "media",
            Callback: "expedita",
            Fields: "consequuntur",
            HashPrefix: "dolor",
            Key: "expedita",
            OauthToken: "voluptas",
            PrettyPrint: true,
            QuotaUser: "et",
            ThreatTypes: []WebriskHashesSearchThreatTypesEnum{
                "SOCIAL_ENGINEERING",
            },
            UploadType: "dicta",
            UploadProtocol: "debitis",
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