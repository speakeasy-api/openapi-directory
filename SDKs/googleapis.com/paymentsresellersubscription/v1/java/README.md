# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PaymentsresellersubscriptionPartnersProductsListRequest;
import org.openapis.openapi.models.operations.PaymentsresellersubscriptionPartnersProductsListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PaymentsresellersubscriptionPartnersProductsListRequest req = new PaymentsresellersubscriptionPartnersProductsListRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "distinctio";
                alt = AltEnum.PROTO;
                callback = "unde";
                fields = "nulla";
                filter = "corrupti";
                key = "illum";
                oauthToken = "vel";
                pageSize = 623564L;
                pageToken = "deserunt";
                prettyPrint = false;
                quotaUser = "suscipit";
                uploadType = "iure";
                uploadProtocol = "magnam";
            }};            

            PaymentsresellersubscriptionPartnersProductsListResponse res = sdk.partners.paymentsresellersubscriptionPartnersProductsList(req);

            if (res.googleCloudPaymentsResellerSubscriptionV1ListProductsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [partners](docs/partners/README.md)

* [paymentsresellersubscriptionPartnersProductsList](docs/partners/README.md#paymentsresellersubscriptionpartnersproductslist) - To retrieve the products that can be resold by the partner. It should be autenticated with a service account.
* [paymentsresellersubscriptionPartnersPromotionsFindEligible](docs/partners/README.md#paymentsresellersubscriptionpartnerspromotionsfindeligible) - To find eligible promotions for the current user. The API requires user authorization via OAuth. The user is inferred from the authenticated OAuth credential.
* [paymentsresellersubscriptionPartnersPromotionsList](docs/partners/README.md#paymentsresellersubscriptionpartnerspromotionslist) - To retrieve the promotions, such as free trial, that can be used by the partner. It should be autenticated with a service account.
* [paymentsresellersubscriptionPartnersSubscriptionsCancel](docs/partners/README.md#paymentsresellersubscriptionpartnerssubscriptionscancel) - Used by partners to cancel a subscription service either immediately or by the end of the current billing cycle for their customers. It should be called directly by the partner using service accounts.
* [paymentsresellersubscriptionPartnersSubscriptionsCreate](docs/partners/README.md#paymentsresellersubscriptionpartnerssubscriptionscreate) - Used by partners to create a subscription for their customers. The created subscription is associated with the end user inferred from the end user credentials. This API must be authorized by the end user using OAuth.
* [paymentsresellersubscriptionPartnersSubscriptionsEntitle](docs/partners/README.md#paymentsresellersubscriptionpartnerssubscriptionsentitle) - Used by partners to entitle a previously provisioned subscription to the current end user. The end user identity is inferred from the authorized credential of the request. This API must be authorized by the end user using OAuth.
* [paymentsresellersubscriptionPartnersSubscriptionsExtend](docs/partners/README.md#paymentsresellersubscriptionpartnerssubscriptionsextend) - [Opt-in only] Most partners should be on auto-extend by default. Used by partners to extend a subscription service for their customers on an ongoing basis for the subscription to remain active and renewable. It should be called directly by the partner using service accounts.
* [paymentsresellersubscriptionPartnersSubscriptionsGet](docs/partners/README.md#paymentsresellersubscriptionpartnerssubscriptionsget) - Used by partners to get a subscription by id. It should be called directly by the partner using service accounts.
* [paymentsresellersubscriptionPartnersSubscriptionsProvision](docs/partners/README.md#paymentsresellersubscriptionpartnerssubscriptionsprovision) - Used by partners to provision a subscription for their customers. This creates a subscription without associating it with the end user account. EntitleSubscription must be called separately using OAuth in order for the end user account to be associated with the subscription. It should be called directly by the partner using service accounts.
* [paymentsresellersubscriptionPartnersSubscriptionsUndoCancel](docs/partners/README.md#paymentsresellersubscriptionpartnerssubscriptionsundocancel) - Used by partners to revoke the pending cancellation of a subscription, which is currently in `STATE_CANCEL_AT_END_OF_CYCLE` state. If the subscription is already cancelled, the request will fail. It should be called directly by the partner using service accounts.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
