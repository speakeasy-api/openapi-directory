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
    
    req := operations.PolicysimulatorProjectsLocationsReplaysOperationsListRequest{
        Security: operations.PolicysimulatorProjectsLocationsReplaysOperationsListSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.PolicysimulatorProjectsLocationsReplaysOperationsListPathParams{
            Name: "sed",
        },
        QueryParams: operations.PolicysimulatorProjectsLocationsReplaysOperationsListQueryParams{
            DollarXgafv: "2",
            AccessToken: "voluptatum",
            Alt: "proto",
            Callback: "est",
            Fields: "nulla",
            Filter: "nisi",
            Key: "numquam",
            OauthToken: "consequatur",
            PageSize: 6140224945249400582,
            PageToken: "consequatur",
            PrettyPrint: false,
            QuotaUser: "et",
            UploadType: "in",
            UploadProtocol: "aut",
        },
    }
    
    res, err := s.Projects.PolicysimulatorProjectsLocationsReplaysOperationsList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningListOperationsResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->