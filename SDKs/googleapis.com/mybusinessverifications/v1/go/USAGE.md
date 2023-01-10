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
    
    req := operations.MybusinessverificationsLocationsFetchVerificationOptionsRequest{
        PathParams: operations.MybusinessverificationsLocationsFetchVerificationOptionsPathParams{
            Location: "ex",
        },
        QueryParams: operations.MybusinessverificationsLocationsFetchVerificationOptionsQueryParams{
            DollarXgafv: "2",
            AccessToken: "quis",
            Alt: "json",
            Callback: "qui",
            Fields: "voluptates",
            Key: "odio",
            OauthToken: "pariatur",
            PrettyPrint: false,
            QuotaUser: "rerum",
            UploadType: "omnis",
            UploadProtocol: "veritatis",
        },
        Request: &shared.FetchVerificationOptionsRequest{
            Context: &shared.ServiceBusinessContext{
                Address: &shared.PostalAddress{
                    AddressLines: []string{
                        "vero",
                    },
                    AdministrativeArea: "autem",
                    LanguageCode: "vel",
                    Locality: "quos",
                    Organization: "dolore",
                    PostalCode: "sequi",
                    Recipients: []string{
                        "minus",
                        "harum",
                    },
                    RegionCode: "dolores",
                    Revision: 5694222714762395261,
                    SortingCode: "iure",
                    Sublocality: "beatae",
                },
            },
            LanguageCode: "ut",
        },
    }
    
    res, err := s.Locations.MybusinessverificationsLocationsFetchVerificationOptions(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.FetchVerificationOptionsResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->