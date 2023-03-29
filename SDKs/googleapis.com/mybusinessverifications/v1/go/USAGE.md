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
            Location: "unde",
        },
        QueryParams: operations.MybusinessverificationsLocationsFetchVerificationOptionsQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            Fields: "vero",
            Key: "perspiciatis",
            OauthToken: "nulla",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "fuga",
            UploadProtocol: "facilis",
        },
        Request: &shared.FetchVerificationOptionsRequest{
            Context: &shared.ServiceBusinessContext{
                Address: &shared.PostalAddress{
                    AddressLines: []string{
                        "iusto",
                        "ullam",
                    },
                    AdministrativeArea: "saepe",
                    LanguageCode: "inventore",
                    Locality: "sapiente",
                    Organization: "enim",
                    PostalCode: "47854",
                    Recipients: []string{
                        "reprehenderit",
                        "molestiae",
                        "quo",
                    },
                    RegionCode: "quasi",
                    Revision: 337396,
                    SortingCode: "dicta",
                    Sublocality: "est",
                },
            },
            LanguageCode: "voluptatem",
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