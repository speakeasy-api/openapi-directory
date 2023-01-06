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
    
    req := operations.LocalservicesAccountReportsSearchRequest{
        Security: operations.LocalservicesAccountReportsSearchSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        QueryParams: operations.LocalservicesAccountReportsSearchQueryParams{
            DollarXgafv: "1",
            AccessToken: "enim",
            Alt: "json",
            Callback: "cumque",
            EndDateDay: 3432839955366230088,
            EndDateMonth: 770986986073861708,
            EndDateYear: 2450390360383236322,
            Fields: "nobis",
            Key: "quo",
            OauthToken: "et",
            PageSize: 6011960963865065675,
            PageToken: "voluptatum",
            PrettyPrint: true,
            Query: "accusamus",
            QuotaUser: "ipsum",
            StartDateDay: 8386595300525764156,
            StartDateMonth: 3520306321387089337,
            StartDateYear: 4698341347543227594,
            UploadType: "repellat",
            UploadProtocol: "laboriosam",
        },
    }
    
    res, err := s.AccountReports.LocalservicesAccountReportsSearch(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAdsHomeservicesLocalservicesV1SearchAccountReportsResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->