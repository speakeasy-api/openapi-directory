<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Locations.MybusinessverificationsLocationsFetchVerificationOptions(ctx, operations.MybusinessverificationsLocationsFetchVerificationOptionsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        FetchVerificationOptionsRequest: &shared.FetchVerificationOptionsRequest{
            Context: &shared.ServiceBusinessContext{
                Address: &shared.PostalAddress{
                    AddressLines: []string{
                        "distinctio",
                        "quibusdam",
                        "unde",
                    },
                    AdministrativeArea: sdk.String("nulla"),
                    LanguageCode: sdk.String("corrupti"),
                    Locality: sdk.String("illum"),
                    Organization: sdk.String("vel"),
                    PostalCode: sdk.String("63428-0923"),
                    Recipients: []string{
                        "minus",
                        "placeat",
                    },
                    RegionCode: sdk.String("voluptatum"),
                    Revision: sdk.Int(479977),
                    SortingCode: sdk.String("excepturi"),
                    Sublocality: sdk.String("nisi"),
                },
            },
            LanguageCode: sdk.String("recusandae"),
        },
        AccessToken: sdk.String("temporibus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quis"),
        Fields: sdk.String("veritatis"),
        Key: sdk.String("deserunt"),
        Location: "perferendis",
        OauthToken: sdk.String("ipsam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("repellendus"),
        UploadType: sdk.String("sapiente"),
        UploadProtocol: sdk.String("quo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FetchVerificationOptionsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->