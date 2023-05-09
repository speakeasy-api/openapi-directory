# VerificationTokens

### Available Operations

* [MybusinessverificationsVerificationTokensGenerate](#mybusinessverificationsverificationtokensgenerate) - Generates a token for the provided location data as a vetted [partner](https://support.google.com/business/answer/7674102). Throws PERMISSION_DENIED if the caller is not a vetted partner account. Throws FAILED_PRECONDITION if the caller's VettedStatus is INVALID.

## MybusinessverificationsVerificationTokensGenerate

Generates a token for the provided location data as a vetted [partner](https://support.google.com/business/answer/7674102). Throws PERMISSION_DENIED if the caller is not a vetted partner account. Throws FAILED_PRECONDITION if the caller's VettedStatus is INVALID.

### Example Usage

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
    res, err := s.VerificationTokens.MybusinessverificationsVerificationTokensGenerate(ctx, operations.MybusinessverificationsVerificationTokensGenerateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GenerateVerificationTokenRequest: &shared.GenerateVerificationTokenRequest{
            Location: &shared.Location{
                Address: &shared.PostalAddress{
                    AddressLines: []string{
                        "molestias",
                        "excepturi",
                        "pariatur",
                    },
                    AdministrativeArea: sdk.String("modi"),
                    LanguageCode: sdk.String("praesentium"),
                    Locality: sdk.String("rem"),
                    Organization: sdk.String("voluptates"),
                    PostalCode: sdk.String("95092"),
                    Recipients: []string{
                        "consequatur",
                        "est",
                    },
                    RegionCode: sdk.String("quibusdam"),
                    Revision: sdk.Int(131797),
                    SortingCode: sdk.String("deserunt"),
                    Sublocality: sdk.String("distinctio"),
                },
                Name: sdk.String("Francisco Gleason"),
                PrimaryCategoryID: sdk.String("cupiditate"),
                PrimaryPhone: sdk.String("quos"),
                WebsiteURI: sdk.String("perferendis"),
            },
        },
        AccessToken: sdk.String("magni"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ipsam"),
        Fields: sdk.String("alias"),
        Key: sdk.String("fugit"),
        OauthToken: sdk.String("dolorum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("excepturi"),
        UploadType: sdk.String("tempora"),
        UploadProtocol: sdk.String("facilis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GenerateVerificationTokenResponse != nil {
        // handle response
    }
}
```
