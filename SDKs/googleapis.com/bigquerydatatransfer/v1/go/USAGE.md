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
    
    req := operations.BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsRequest{
        Security: operations.BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurity{
            Option1: &operations.BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        PathParams: operations.BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsPathParams{
            Name: "sit",
        },
        QueryParams: operations.BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            Fields: "dolor",
            Key: "expedita",
            OauthToken: "voluptas",
            PrettyPrint: true,
            QuotaUser: "et",
            UploadType: "nihil",
            UploadProtocol: "rerum",
        },
        Request: map[string]interface{}{
            "debitis": "voluptatum",
            "et": "ut",
            "dolorem": "et",
        },
    }
    
    res, err := s.Projects.BigquerydatatransferProjectsLocationsDataSourcesCheckValidCreds(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CheckValidCredsResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->