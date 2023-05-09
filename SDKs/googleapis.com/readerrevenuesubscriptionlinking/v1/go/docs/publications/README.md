# Publications

### Available Operations

* [ReaderrevenuesubscriptionlinkingPublicationsReadersDelete](#readerrevenuesubscriptionlinkingpublicationsreadersdelete) - Removes a publication reader, effectively severing the association with a Google user. If `force` is set to true, any entitlements for this reader will also be deleted. (Otherwise, the request will only work if the reader has no entitlements.) - If the reader does not exist, return NOT_FOUND. - Return FAILED_PRECONDITION if the force field is false (or unset) and entitlements are present.
* [ReaderrevenuesubscriptionlinkingPublicationsReadersGetEntitlements](#readerrevenuesubscriptionlinkingpublicationsreadersgetentitlements) - Gets the reader entitlements for a publication reader. - Returns PERMISSION_DENIED if the caller does not have access. - Returns NOT_FOUND if the reader does not exist.
* [ReaderrevenuesubscriptionlinkingPublicationsReadersUpdateEntitlements](#readerrevenuesubscriptionlinkingpublicationsreadersupdateentitlements) - Updates the reader entitlements for a publication reader. The entire reader entitlements will be overwritten by the new reader entitlements in the payload, like a PUT. - Returns PERMISSION_DENIED if the caller does not have access. - Returns NOT_FOUND if the reader does not exist.

## ReaderrevenuesubscriptionlinkingPublicationsReadersDelete

Removes a publication reader, effectively severing the association with a Google user. If `force` is set to true, any entitlements for this reader will also be deleted. (Otherwise, the request will only work if the reader has no entitlements.) - If the reader does not exist, return NOT_FOUND. - Return FAILED_PRECONDITION if the force field is false (or unset) and entitlements are present.

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
    res, err := s.Publications.ReaderrevenuesubscriptionlinkingPublicationsReadersDelete(ctx, operations.ReaderrevenuesubscriptionlinkingPublicationsReadersDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("delectus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("suscipit"),
        Fields: sdk.String("molestiae"),
        Force: sdk.Bool(false),
        Key: sdk.String("minus"),
        Name: "Ken Kshlerin",
        OauthToken: sdk.String("recusandae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("temporibus"),
        UploadType: sdk.String("ab"),
        UploadProtocol: sdk.String("quis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteReaderResponse != nil {
        // handle response
    }
}
```

## ReaderrevenuesubscriptionlinkingPublicationsReadersGetEntitlements

Gets the reader entitlements for a publication reader. - Returns PERMISSION_DENIED if the caller does not have access. - Returns NOT_FOUND if the reader does not exist.

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
    res, err := s.Publications.ReaderrevenuesubscriptionlinkingPublicationsReadersGetEntitlements(ctx, operations.ReaderrevenuesubscriptionlinkingPublicationsReadersGetEntitlementsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("deserunt"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ipsam"),
        Fields: sdk.String("repellendus"),
        Key: sdk.String("sapiente"),
        Name: "Fred Strosin",
        OauthToken: sdk.String("molestiae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quod"),
        UploadType: sdk.String("quod"),
        UploadProtocol: sdk.String("esse"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReaderEntitlements != nil {
        // handle response
    }
}
```

## ReaderrevenuesubscriptionlinkingPublicationsReadersUpdateEntitlements

Updates the reader entitlements for a publication reader. The entire reader entitlements will be overwritten by the new reader entitlements in the payload, like a PUT. - Returns PERMISSION_DENIED if the caller does not have access. - Returns NOT_FOUND if the reader does not exist.

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
    res, err := s.Publications.ReaderrevenuesubscriptionlinkingPublicationsReadersUpdateEntitlements(ctx, operations.ReaderrevenuesubscriptionlinkingPublicationsReadersUpdateEntitlementsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ReaderEntitlementsInput: &shared.ReaderEntitlementsInput{
            Entitlements: []shared.Entitlement{
                shared.Entitlement{
                    Detail: sdk.String("dolorum"),
                    ExpireTime: sdk.String("dicta"),
                    ProductID: sdk.String("nam"),
                    SubscriptionToken: sdk.String("officia"),
                },
                shared.Entitlement{
                    Detail: sdk.String("occaecati"),
                    ExpireTime: sdk.String("fugit"),
                    ProductID: sdk.String("deleniti"),
                    SubscriptionToken: sdk.String("hic"),
                },
                shared.Entitlement{
                    Detail: sdk.String("optio"),
                    ExpireTime: sdk.String("totam"),
                    ProductID: sdk.String("beatae"),
                    SubscriptionToken: sdk.String("commodi"),
                },
                shared.Entitlement{
                    Detail: sdk.String("molestiae"),
                    ExpireTime: sdk.String("modi"),
                    ProductID: sdk.String("qui"),
                    SubscriptionToken: sdk.String("impedit"),
                },
            },
        },
        AccessToken: sdk.String("cum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ipsum"),
        Fields: sdk.String("excepturi"),
        Key: sdk.String("aspernatur"),
        Name: "Cathy Mosciski",
        OauthToken: sdk.String("dolor"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("natus"),
        UpdateMask: sdk.String("laboriosam"),
        UploadType: sdk.String("hic"),
        UploadProtocol: sdk.String("saepe"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReaderEntitlements != nil {
        // handle response
    }
}
```
