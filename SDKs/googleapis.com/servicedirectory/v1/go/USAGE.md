<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.ServicedirectoryProjectsLocationsListRequest{
        Security: operations.ServicedirectoryProjectsLocationsListSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.ServicedirectoryProjectsLocationsListPathParams{
            Name: "unde",
        },
        QueryParams: operations.ServicedirectoryProjectsLocationsListQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            Fields: "vero",
            Filter: "perspiciatis",
            Key: "nulla",
            OauthToken: "nihil",
            PageSize: 623564,
            PageToken: "facilis",
            PrettyPrint: false,
            QuotaUser: "eum",
            UploadType: "iusto",
            UploadProtocol: "ullam",
        },
    }

    ctx := context.Background()
    res, err := s.Projects.ServicedirectoryProjectsLocationsList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLocationsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->