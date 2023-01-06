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
            Location: "nulla",
        },
        QueryParams: operations.MybusinessverificationsLocationsFetchVerificationOptionsQueryParams{
            DollarXgafv: "2",
            AccessToken: "impedit",
            Alt: "media",
            Callback: "labore",
            Fields: "veniam",
            Key: "et",
            OauthToken: "aspernatur",
            PrettyPrint: false,
            QuotaUser: "magnam",
            UploadType: "voluptates",
            UploadProtocol: "esse",
        },
        Request: &shared.FetchVerificationOptionsRequest{
            Context: &shared.ServiceBusinessContext{
                Address: &shared.PostalAddress{
                    AddressLines: []string{
                        "qui",
                        "animi",
                        "adipisci",
                    },
                    AdministrativeArea: "odit",
                    LanguageCode: "quaerat",
                    Locality: "cupiditate",
                    Organization: "eum",
                    PostalCode: "est",
                    Recipients: []string{
                        "recusandae",
                        "eius",
                        "incidunt",
                    },
                    RegionCode: "et",
                    Revision: 7628768951656894618,
                    SortingCode: "fugiat",
                    Sublocality: "iusto",
                },
            },
            LanguageCode: "repellendus",
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