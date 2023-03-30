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

    req := operations.MybusinessverificationsLocationsFetchVerificationOptionsRequest{
        PathParams: operations.MybusinessverificationsLocationsFetchVerificationOptionsPathParams{
            Location: "corrupti",
        },
        QueryParams: operations.MybusinessverificationsLocationsFetchVerificationOptionsQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            Fields: "nulla",
            Key: "corrupti",
            OauthToken: "illum",
            PrettyPrint: false,
            QuotaUser: "vel",
            UploadType: "error",
            UploadProtocol: "deserunt",
        },
        Request: &shared.FetchVerificationOptionsRequest{
            Context: &shared.ServiceBusinessContext{
                Address: &shared.PostalAddress{
                    AddressLines: []string{
                        "iure",
                        "magnam",
                    },
                    AdministrativeArea: "debitis",
                    LanguageCode: "ipsa",
                    Locality: "delectus",
                    Organization: "tempora",
                    PostalCode: "47854",
                    Recipients: []string{
                        "nisi",
                        "recusandae",
                        "temporibus",
                    },
                    RegionCode: "ab",
                    Revision: 337396,
                    SortingCode: "veritatis",
                    Sublocality: "deserunt",
                },
            },
            LanguageCode: "perferendis",
        },
    }

    ctx := context.Background()
    res, err := s.Locations.MybusinessverificationsLocationsFetchVerificationOptions(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.FetchVerificationOptionsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->