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
            Parent: "modi",
        },
        QueryParams: operations.ApigeeregistryProjectsLocationsApisCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "dolores",
            Alt: "media",
            APIID: "delectus",
            Callback: "sint",
            Fields: "non",
            Key: "labore",
            OauthToken: "ut",
            PrettyPrint: false,
            QuotaUser: "magni",
            UploadType: "eveniet",
            UploadProtocol: "consectetur",
        },
        Request: &shared.APIInput{
            Annotations: map[string]string{
                "eum": "rerum",
                "ut": "est",
                "quas": "quia",
            },
            Availability: "rem",
            Description: "incidunt",
            DisplayName: "modi",
            Labels: map[string]string{
                "ex": "maiores",
                "inventore": "quia",
                "amet": "ullam",
            },
            Name: "ut",
            RecommendedDeployment: "fugit",
            RecommendedVersion: "temporibus",
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