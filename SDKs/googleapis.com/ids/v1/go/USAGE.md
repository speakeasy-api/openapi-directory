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
            Parent: "pariatur",
        },
        QueryParams: operations.IdsProjectsLocationsEndpointsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "itaque",
            Alt: "json",
            Callback: "assumenda",
            EndpointID: "architecto",
            Fields: "id",
            Key: "et",
            OauthToken: "voluptate",
            PrettyPrint: false,
            QuotaUser: "quo",
            RequestID: "sint",
            UploadType: "magnam",
            UploadProtocol: "quis",
        },
        Request: &shared.EndpointInput{
            Description: "doloremque",
            Labels: map[string]string{
                "ratione": "sequi",
            },
            Network: "distinctio",
            Severity: "HIGH",
            TrafficLogs: false,
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