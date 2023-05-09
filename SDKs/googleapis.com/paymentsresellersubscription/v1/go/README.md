# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/paymentsresellersubscription/v1/go
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
    res, err := s.Partners.PaymentsresellersubscriptionPartnersProductsList(ctx, operations.PaymentsresellersubscriptionPartnersProductsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quibusdam"),
        Fields: sdk.String("unde"),
        Filter: sdk.String("nulla"),
        Key: sdk.String("corrupti"),
        OauthToken: sdk.String("illum"),
        PageSize: sdk.Int64(423655),
        PageToken: sdk.String("error"),
        Parent: "deserunt",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("suscipit"),
        UploadType: sdk.String("iure"),
        UploadProtocol: sdk.String("magnam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudPaymentsResellerSubscriptionV1ListProductsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Partners](docs/partners/README.md)

* [PaymentsresellersubscriptionPartnersProductsList](docs/partners/README.md#paymentsresellersubscriptionpartnersproductslist) - To retrieve the products that can be resold by the partner. It should be autenticated with a service account.
* [PaymentsresellersubscriptionPartnersPromotionsFindEligible](docs/partners/README.md#paymentsresellersubscriptionpartnerspromotionsfindeligible) - To find eligible promotions for the current user. The API requires user authorization via OAuth. The user is inferred from the authenticated OAuth credential.
* [PaymentsresellersubscriptionPartnersPromotionsList](docs/partners/README.md#paymentsresellersubscriptionpartnerspromotionslist) - To retrieve the promotions, such as free trial, that can be used by the partner. It should be autenticated with a service account.
* [PaymentsresellersubscriptionPartnersSubscriptionsCancel](docs/partners/README.md#paymentsresellersubscriptionpartnerssubscriptionscancel) - Used by partners to cancel a subscription service either immediately or by the end of the current billing cycle for their customers. It should be called directly by the partner using service accounts.
* [PaymentsresellersubscriptionPartnersSubscriptionsCreate](docs/partners/README.md#paymentsresellersubscriptionpartnerssubscriptionscreate) - Used by partners to create a subscription for their customers. The created subscription is associated with the end user inferred from the end user credentials. This API must be authorized by the end user using OAuth.
* [PaymentsresellersubscriptionPartnersSubscriptionsEntitle](docs/partners/README.md#paymentsresellersubscriptionpartnerssubscriptionsentitle) - Used by partners to entitle a previously provisioned subscription to the current end user. The end user identity is inferred from the authorized credential of the request. This API must be authorized by the end user using OAuth.
* [PaymentsresellersubscriptionPartnersSubscriptionsExtend](docs/partners/README.md#paymentsresellersubscriptionpartnerssubscriptionsextend) - [Opt-in only] Most partners should be on auto-extend by default. Used by partners to extend a subscription service for their customers on an ongoing basis for the subscription to remain active and renewable. It should be called directly by the partner using service accounts.
* [PaymentsresellersubscriptionPartnersSubscriptionsGet](docs/partners/README.md#paymentsresellersubscriptionpartnerssubscriptionsget) - Used by partners to get a subscription by id. It should be called directly by the partner using service accounts.
* [PaymentsresellersubscriptionPartnersSubscriptionsProvision](docs/partners/README.md#paymentsresellersubscriptionpartnerssubscriptionsprovision) - Used by partners to provision a subscription for their customers. This creates a subscription without associating it with the end user account. EntitleSubscription must be called separately using OAuth in order for the end user account to be associated with the subscription. It should be called directly by the partner using service accounts.
* [PaymentsresellersubscriptionPartnersSubscriptionsUndoCancel](docs/partners/README.md#paymentsresellersubscriptionpartnerssubscriptionsundocancel) - Used by partners to revoke the pending cancellation of a subscription, which is currently in `STATE_CANCEL_AT_END_OF_CYCLE` state. If the subscription is already cancelled, the request will fail. It should be called directly by the partner using service accounts.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
