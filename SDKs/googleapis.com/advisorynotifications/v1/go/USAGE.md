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

    req := operations.AdvisorynotificationsOrganizationsLocationsNotificationsGetRequest{
        Security: operations.AdvisorynotificationsOrganizationsLocationsNotificationsGetSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.AdvisorynotificationsOrganizationsLocationsNotificationsGetPathParams{
            Name: "corrupti",
        },
        QueryParams: operations.AdvisorynotificationsOrganizationsLocationsNotificationsGetQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            Fields: "nulla",
            Key: "corrupti",
            LanguageCode: "illum",
            OauthToken: "vel",
            PrettyPrint: false,
            QuotaUser: "error",
            UploadType: "deserunt",
            UploadProtocol: "suscipit",
        },
    }

    ctx := context.Background()
    res, err := s.Organizations.AdvisorynotificationsOrganizationsLocationsNotificationsGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudAdvisorynotificationsV1Notification != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->