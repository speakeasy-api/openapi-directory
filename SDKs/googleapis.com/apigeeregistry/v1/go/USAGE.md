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
    
    req := operations.ApigeeregistryProjectsLocationsApisCreateRequest{
        Security: operations.ApigeeregistryProjectsLocationsApisCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.ApigeeregistryProjectsLocationsApisCreatePathParams{
            Parent: "sit",
        },
        QueryParams: operations.ApigeeregistryProjectsLocationsApisCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            APIID: "consequuntur",
            Callback: "dolor",
            Fields: "expedita",
            Key: "voluptas",
            OauthToken: "fugit",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "rerum",
            UploadProtocol: "dicta",
        },
        Request: &shared.APIInput{
            Annotations: map[string]string{
                "voluptatum": "et",
            },
            Availability: "ut",
            Description: "dolorem",
            DisplayName: "et",
            Labels: map[string]string{
                "iste": "vitae",
            },
            Name: "totam",
            RecommendedDeployment: "dolores",
            RecommendedVersion: "illum",
        },
    }
    
    res, err := s.Projects.ApigeeregistryProjectsLocationsApisCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.API != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->