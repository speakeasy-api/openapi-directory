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
            Parent: "sunt",
        },
        QueryParams: operations.ApigeeregistryProjectsLocationsApisCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "reprehenderit",
            Alt: "media",
            APIID: "enim",
            Callback: "aut",
            Fields: "et",
            Key: "aut",
            OauthToken: "reprehenderit",
            PrettyPrint: true,
            QuotaUser: "magnam",
            UploadType: "praesentium",
            UploadProtocol: "non",
        },
        Request: &shared.APIInput{
            Annotations: map[string]string{
                "eaque": "iste",
            },
            Availability: "rerum",
            Description: "maiores",
            DisplayName: "consequatur",
            Labels: map[string]string{
                "vero": "rem",
            },
            Name: "architecto",
            RecommendedDeployment: "ut",
            RecommendedVersion: "aut",
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