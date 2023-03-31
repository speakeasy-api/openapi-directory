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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Locations

* `MybusinessverificationsLocationsFetchVerificationOptions` - Reports all eligible verification options for a location in a specific language.
* `MybusinessverificationsLocationsGetVoiceOfMerchantState` - Gets the VoiceOfMerchant state.
* `MybusinessverificationsLocationsVerificationsComplete` - Completes a `PENDING` verification. It is only necessary for non `AUTO` verification methods. `AUTO` verification request is instantly `VERIFIED` upon creation.
* `MybusinessverificationsLocationsVerificationsList` - List verifications of a location, ordered by create time.
* `MybusinessverificationsLocationsVerify` - Starts the verification process for a location.

### VerificationTokens

* `MybusinessverificationsVerificationTokensGenerate` - Generates a token for the provided location data as a vetted [partner](https://support.google.com/business/answer/7674102). Throws PERMISSION_DENIED if the caller is not a vetted partner account. Throws FAILED_PRECONDITION if the caller's VettedStatus is INVALID.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
