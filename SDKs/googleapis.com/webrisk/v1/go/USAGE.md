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
            AccessToken: "doloremque",
            Alt: "proto",
            Callback: "iure",
            Fields: "libero",
            HashPrefix: "libero",
            Key: "aut",
            OauthToken: "qui",
            PrettyPrint: true,
            QuotaUser: "nihil",
            ThreatTypes: []WebriskHashesSearchThreatTypesEnum{
                "THREAT_TYPE_UNSPECIFIED",
                "MALWARE",
            },
            UploadType: "numquam",
            UploadProtocol: "recusandae",
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