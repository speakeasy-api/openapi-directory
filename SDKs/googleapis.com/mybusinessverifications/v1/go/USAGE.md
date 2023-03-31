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
        DollarXgafv: "2",
        FetchVerificationOptionsRequest: &shared.FetchVerificationOptionsRequest{
            Context: &shared.ServiceBusinessContext{
                Address: &shared.PostalAddress{
                    AddressLines: []string{
                        "distinctio",
                        "quibusdam",
                        "unde",
                    },
                    AdministrativeArea: "nulla",
                    LanguageCode: "corrupti",
                    Locality: "illum",
                    Organization: "vel",
                    PostalCode: "63428-0923",
                    Recipients: []string{
                        "minus",
                        "placeat",
                    },
                    RegionCode: "voluptatum",
                    Revision: 479977,
                    SortingCode: "excepturi",
                    Sublocality: "nisi",
                },
            },
            LanguageCode: "recusandae",
        },
        AccessToken: "temporibus",
        Alt: "json",
        Callback: "quis",
        Fields: "veritatis",
        Key: "deserunt",
        Location: "perferendis",
        OauthToken: "ipsam",
        PrettyPrint: false,
        QuotaUser: "repellendus",
        UploadType: "sapiente",
        UploadProtocol: "quo",
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