# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/mybusinessverifications/v1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Locations](docs/locations/README.md)

* [MybusinessverificationsLocationsFetchVerificationOptions](docs/locations/README.md#mybusinessverificationslocationsfetchverificationoptions) - Reports all eligible verification options for a location in a specific language.
* [MybusinessverificationsLocationsGetVoiceOfMerchantState](docs/locations/README.md#mybusinessverificationslocationsgetvoiceofmerchantstate) - Gets the VoiceOfMerchant state.
* [MybusinessverificationsLocationsVerificationsComplete](docs/locations/README.md#mybusinessverificationslocationsverificationscomplete) - Completes a `PENDING` verification. It is only necessary for non `AUTO` verification methods. `AUTO` verification request is instantly `VERIFIED` upon creation.
* [MybusinessverificationsLocationsVerificationsList](docs/locations/README.md#mybusinessverificationslocationsverificationslist) - List verifications of a location, ordered by create time.
* [MybusinessverificationsLocationsVerify](docs/locations/README.md#mybusinessverificationslocationsverify) - Starts the verification process for a location.

### [VerificationTokens](docs/verificationtokens/README.md)

* [MybusinessverificationsVerificationTokensGenerate](docs/verificationtokens/README.md#mybusinessverificationsverificationtokensgenerate) - Generates a token for the provided location data as a vetted [partner](https://support.google.com/business/answer/7674102). Throws PERMISSION_DENIED if the caller is not a vetted partner account. Throws FAILED_PRECONDITION if the caller's VettedStatus is INVALID.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
