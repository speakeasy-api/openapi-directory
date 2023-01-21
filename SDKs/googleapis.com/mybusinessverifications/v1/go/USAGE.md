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
            Location: "sit",
        },
        QueryParams: operations.MybusinessverificationsLocationsFetchVerificationOptionsQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            Fields: "dolor",
            Key: "expedita",
            OauthToken: "voluptas",
            PrettyPrint: true,
            QuotaUser: "et",
            UploadType: "nihil",
            UploadProtocol: "rerum",
        },
        Request: &shared.FetchVerificationOptionsRequest{
            Context: &shared.ServiceBusinessContext{
                Address: &shared.PostalAddress{
                    AddressLines: []string{
                        "debitis",
                        "voluptatum",
                        "et",
                    },
                    AdministrativeArea: "ut",
                    LanguageCode: "dolorem",
                    Locality: "et",
                    Organization: "voluptate",
                    PostalCode: "iste",
                    Recipients: []string{
                        "totam",
                    },
                    RegionCode: "dolores",
                    Revision: 1929546706668609706,
                    SortingCode: "debitis",
                    Sublocality: "vel",
                },
            },
            LanguageCode: "odio",
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