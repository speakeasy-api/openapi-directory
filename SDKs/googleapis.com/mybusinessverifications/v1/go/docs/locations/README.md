# Locations

### Available Operations

* [MybusinessverificationsLocationsFetchVerificationOptions](#mybusinessverificationslocationsfetchverificationoptions) - Reports all eligible verification options for a location in a specific language.
* [MybusinessverificationsLocationsGetVoiceOfMerchantState](#mybusinessverificationslocationsgetvoiceofmerchantstate) - Gets the VoiceOfMerchant state.
* [MybusinessverificationsLocationsVerificationsComplete](#mybusinessverificationslocationsverificationscomplete) - Completes a `PENDING` verification. It is only necessary for non `AUTO` verification methods. `AUTO` verification request is instantly `VERIFIED` upon creation.
* [MybusinessverificationsLocationsVerificationsList](#mybusinessverificationslocationsverificationslist) - List verifications of a location, ordered by create time.
* [MybusinessverificationsLocationsVerify](#mybusinessverificationslocationsverify) - Starts the verification process for a location.

## MybusinessverificationsLocationsFetchVerificationOptions

Reports all eligible verification options for a location in a specific language.

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
    res, err := s.Locations.MybusinessverificationsLocationsFetchVerificationOptions(ctx, operations.MybusinessverificationsLocationsFetchVerificationOptionsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        FetchVerificationOptionsRequest: &shared.FetchVerificationOptionsRequest{
            Context: &shared.ServiceBusinessContext{
                Address: &shared.PostalAddress{
                    AddressLines: []string{
                        "at",
                        "maiores",
                        "molestiae",
                        "quod",
                    },
                    AdministrativeArea: sdk.String("quod"),
                    LanguageCode: sdk.String("esse"),
                    Locality: sdk.String("totam"),
                    Organization: sdk.String("porro"),
                    PostalCode: sdk.String("17651-5975"),
                    Recipients: []string{
                        "commodi",
                    },
                    RegionCode: sdk.String("molestiae"),
                    Revision: sdk.Int(264555),
                    SortingCode: sdk.String("qui"),
                    Sublocality: sdk.String("impedit"),
                },
            },
            LanguageCode: sdk.String("cum"),
        },
        AccessToken: sdk.String("esse"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("excepturi"),
        Fields: sdk.String("aspernatur"),
        Key: sdk.String("perferendis"),
        Location: "ad",
        OauthToken: sdk.String("natus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sed"),
        UploadType: sdk.String("iste"),
        UploadProtocol: sdk.String("dolor"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FetchVerificationOptionsResponse != nil {
        // handle response
    }
}
```

## MybusinessverificationsLocationsGetVoiceOfMerchantState

Gets the VoiceOfMerchant state.

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
    res, err := s.Locations.MybusinessverificationsLocationsGetVoiceOfMerchantState(ctx, operations.MybusinessverificationsLocationsGetVoiceOfMerchantStateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("laboriosam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("saepe"),
        Fields: sdk.String("fuga"),
        Key: sdk.String("in"),
        Name: "Sheryl Kertzmann",
        OauthToken: sdk.String("architecto"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsa"),
        UploadType: sdk.String("reiciendis"),
        UploadProtocol: sdk.String("est"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VoiceOfMerchantState != nil {
        // handle response
    }
}
```

## MybusinessverificationsLocationsVerificationsComplete

Completes a `PENDING` verification. It is only necessary for non `AUTO` verification methods. `AUTO` verification request is instantly `VERIFIED` upon creation.

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
    res, err := s.Locations.MybusinessverificationsLocationsVerificationsComplete(ctx, operations.MybusinessverificationsLocationsVerificationsCompleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        CompleteVerificationRequest: &shared.CompleteVerificationRequest{
            Pin: sdk.String("laborum"),
        },
        AccessToken: sdk.String("dolores"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("corporis"),
        Fields: sdk.String("explicabo"),
        Key: sdk.String("nobis"),
        Name: "Guadalupe Hickle",
        OauthToken: sdk.String("accusantium"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iure"),
        UploadType: sdk.String("culpa"),
        UploadProtocol: sdk.String("doloribus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CompleteVerificationResponse != nil {
        // handle response
    }
}
```

## MybusinessverificationsLocationsVerificationsList

List verifications of a location, ordered by create time.

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
    res, err := s.Locations.MybusinessverificationsLocationsVerificationsList(ctx, operations.MybusinessverificationsLocationsVerificationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("architecto"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dolorem"),
        Fields: sdk.String("culpa"),
        Key: sdk.String("consequuntur"),
        OauthToken: sdk.String("repellat"),
        PageSize: sdk.Int64(653108),
        PageToken: sdk.String("occaecati"),
        Parent: "numquam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("commodi"),
        UploadType: sdk.String("quam"),
        UploadProtocol: sdk.String("molestiae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListVerificationsResponse != nil {
        // handle response
    }
}
```

## MybusinessverificationsLocationsVerify

Starts the verification process for a location.

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
    res, err := s.Locations.MybusinessverificationsLocationsVerify(ctx, operations.MybusinessverificationsLocationsVerifyRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        VerifyLocationRequest: &shared.VerifyLocationRequest{
            Context: &shared.ServiceBusinessContext{
                Address: &shared.PostalAddress{
                    AddressLines: []string{
                        "quia",
                        "quis",
                        "vitae",
                    },
                    AdministrativeArea: sdk.String("laborum"),
                    LanguageCode: sdk.String("animi"),
                    Locality: sdk.String("enim"),
                    Organization: sdk.String("odit"),
                    PostalCode: sdk.String("19368-0068"),
                    Recipients: []string{
                        "quasi",
                        "reiciendis",
                        "voluptatibus",
                    },
                    RegionCode: sdk.String("vero"),
                    Revision: sdk.Int(468651),
                    SortingCode: sdk.String("praesentium"),
                    Sublocality: sdk.String("voluptatibus"),
                },
            },
            EmailAddress: sdk.String("ipsa"),
            LanguageCode: sdk.String("omnis"),
            MailerContact: sdk.String("voluptate"),
            Method: shared.VerifyLocationRequestMethodEnumAuto.ToPointer(),
            PhoneNumber: sdk.String("perferendis"),
            Token: &shared.VerificationToken{
                TokenString: sdk.String("doloremque"),
            },
        },
        AccessToken: sdk.String("reprehenderit"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("maiores"),
        Fields: sdk.String("dicta"),
        Key: sdk.String("corporis"),
        Name: "Heidi Carter",
        OauthToken: sdk.String("accusamus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("commodi"),
        UploadType: sdk.String("repudiandae"),
        UploadProtocol: sdk.String("quae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VerifyLocationResponse != nil {
        // handle response
    }
}
```
