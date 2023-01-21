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
    
    req := operations.IdsProjectsLocationsEndpointsCreateRequest{
        Security: operations.IdsProjectsLocationsEndpointsCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.IdsProjectsLocationsEndpointsCreatePathParams{
            Parent: "sit",
        },
        QueryParams: operations.IdsProjectsLocationsEndpointsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            EndpointID: "dolor",
            Fields: "expedita",
            Key: "voluptas",
            OauthToken: "fugit",
            PrettyPrint: false,
            QuotaUser: "nihil",
            RequestID: "rerum",
            UploadType: "dicta",
            UploadProtocol: "debitis",
        },
        Request: &shared.EndpointInput{
            Description: "voluptatum",
            Labels: map[string]string{
                "ut": "dolorem",
            },
            Network: "et",
            Severity: "SEVERITY_UNSPECIFIED",
            TrafficLogs: true,
        },
    }
    
    res, err := s.Projects.IdsProjectsLocationsEndpointsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->