# partners

### Available Operations

* [paymentsresellersubscriptionPartnersProductsList](#paymentsresellersubscriptionpartnersproductslist) - To retrieve the products that can be resold by the partner. It should be autenticated with a service account.
* [paymentsresellersubscriptionPartnersPromotionsFindEligible](#paymentsresellersubscriptionpartnerspromotionsfindeligible) - To find eligible promotions for the current user. The API requires user authorization via OAuth. The user is inferred from the authenticated OAuth credential.
* [paymentsresellersubscriptionPartnersPromotionsList](#paymentsresellersubscriptionpartnerspromotionslist) - To retrieve the promotions, such as free trial, that can be used by the partner. It should be autenticated with a service account.
* [paymentsresellersubscriptionPartnersSubscriptionsCancel](#paymentsresellersubscriptionpartnerssubscriptionscancel) - Used by partners to cancel a subscription service either immediately or by the end of the current billing cycle for their customers. It should be called directly by the partner using service accounts.
* [paymentsresellersubscriptionPartnersSubscriptionsCreate](#paymentsresellersubscriptionpartnerssubscriptionscreate) - Used by partners to create a subscription for their customers. The created subscription is associated with the end user inferred from the end user credentials. This API must be authorized by the end user using OAuth.
* [paymentsresellersubscriptionPartnersSubscriptionsEntitle](#paymentsresellersubscriptionpartnerssubscriptionsentitle) - Used by partners to entitle a previously provisioned subscription to the current end user. The end user identity is inferred from the authorized credential of the request. This API must be authorized by the end user using OAuth.
* [paymentsresellersubscriptionPartnersSubscriptionsExtend](#paymentsresellersubscriptionpartnerssubscriptionsextend) - [Opt-in only] Most partners should be on auto-extend by default. Used by partners to extend a subscription service for their customers on an ongoing basis for the subscription to remain active and renewable. It should be called directly by the partner using service accounts.
* [paymentsresellersubscriptionPartnersSubscriptionsGet](#paymentsresellersubscriptionpartnerssubscriptionsget) - Used by partners to get a subscription by id. It should be called directly by the partner using service accounts.
* [paymentsresellersubscriptionPartnersSubscriptionsProvision](#paymentsresellersubscriptionpartnerssubscriptionsprovision) - Used by partners to provision a subscription for their customers. This creates a subscription without associating it with the end user account. EntitleSubscription must be called separately using OAuth in order for the end user account to be associated with the subscription. It should be called directly by the partner using service accounts.
* [paymentsresellersubscriptionPartnersSubscriptionsUndoCancel](#paymentsresellersubscriptionpartnerssubscriptionsundocancel) - Used by partners to revoke the pending cancellation of a subscription, which is currently in `STATE_CANCEL_AT_END_OF_CYCLE` state. If the subscription is already cancelled, the request will fail. It should be called directly by the partner using service accounts.

## paymentsresellersubscriptionPartnersProductsList

To retrieve the products that can be resold by the partner. It should be autenticated with a service account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PaymentsresellersubscriptionPartnersProductsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PaymentsresellersubscriptionPartnersProductsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ipsa';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'tempora';
    $request->fields = 'suscipit';
    $request->filter = 'molestiae';
    $request->key = 'minus';
    $request->oauthToken = 'placeat';
    $request->pageSize = 528895;
    $request->pageToken = 'iusto';
    $request->parent = 'excepturi';
    $request->prettyPrint = false;
    $request->quotaUser = 'nisi';
    $request->uploadType = 'recusandae';
    $request->uploadProtocol = 'temporibus';

    $response = $sdk->partners->paymentsresellersubscriptionPartnersProductsList($request);

    if ($response->googleCloudPaymentsResellerSubscriptionV1ListProductsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## paymentsresellersubscriptionPartnersPromotionsFindEligible

To find eligible promotions for the current user. The API requires user authorization via OAuth. The user is inferred from the authenticated OAuth credential.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PaymentsresellersubscriptionPartnersPromotionsFindEligibleRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PaymentsresellersubscriptionPartnersPromotionsFindEligibleRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsRequest = new GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsRequest();
    $request->googleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsRequest->filter = 'quis';
    $request->googleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsRequest->pageSize = 87129;
    $request->googleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsRequest->pageToken = 'deserunt';
    $request->accessToken = 'perferendis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'repellendus';
    $request->fields = 'sapiente';
    $request->key = 'quo';
    $request->oauthToken = 'odit';
    $request->parent = 'at';
    $request->prettyPrint = false;
    $request->quotaUser = 'at';
    $request->uploadType = 'maiores';
    $request->uploadProtocol = 'molestiae';

    $response = $sdk->partners->paymentsresellersubscriptionPartnersPromotionsFindEligible($request);

    if ($response->googleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## paymentsresellersubscriptionPartnersPromotionsList

To retrieve the promotions, such as free trial, that can be used by the partner. It should be autenticated with a service account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PaymentsresellersubscriptionPartnersPromotionsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PaymentsresellersubscriptionPartnersPromotionsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quod';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'totam';
    $request->fields = 'porro';
    $request->filter = 'dolorum';
    $request->key = 'dicta';
    $request->oauthToken = 'nam';
    $request->pageSize = 639921;
    $request->pageToken = 'occaecati';
    $request->parent = 'fugit';
    $request->prettyPrint = false;
    $request->quotaUser = 'deleniti';
    $request->uploadType = 'hic';
    $request->uploadProtocol = 'optio';

    $response = $sdk->partners->paymentsresellersubscriptionPartnersPromotionsList($request);

    if ($response->googleCloudPaymentsResellerSubscriptionV1ListPromotionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## paymentsresellersubscriptionPartnersSubscriptionsCancel

Used by partners to cancel a subscription service either immediately or by the end of the current billing cycle for their customers. It should be called directly by the partner using service accounts.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PaymentsresellersubscriptionPartnersSubscriptionsCancelRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequestCancellationReasonEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PaymentsresellersubscriptionPartnersSubscriptionsCancelRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequest = new GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequest();
    $request->googleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequest->cancelImmediately = false;
    $request->googleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequest->cancellationReason = GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequestCancellationReasonEnum::CANCELLATION_REASON_FRAUD;
    $request->accessToken = 'commodi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'modi';
    $request->fields = 'qui';
    $request->key = 'impedit';
    $request->name = 'Cory Emmerich';
    $request->oauthToken = 'perferendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'ad';
    $request->uploadType = 'natus';
    $request->uploadProtocol = 'sed';

    $response = $sdk->partners->paymentsresellersubscriptionPartnersSubscriptionsCancel($request);

    if ($response->googleCloudPaymentsResellerSubscriptionV1CancelSubscriptionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## paymentsresellersubscriptionPartnersSubscriptionsCreate

Used by partners to create a subscription for their customers. The created subscription is associated with the end user inferred from the end user credentials. This API must be authorized by the end user using OAuth.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PaymentsresellersubscriptionPartnersSubscriptionsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudPaymentsResellerSubscriptionV1SubscriptionInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetails;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetailsReasonEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudPaymentsResellerSubscriptionV1Amount;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudPaymentsResellerSubscriptionV1Duration;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudPaymentsResellerSubscriptionV1DurationUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemOneTimeRecurrenceDetails;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudPaymentsResellerSubscriptionV1ServicePeriod;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudPaymentsResellerSubscriptionV1ProductPayload;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayload;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadOfferingEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadSalesChannelEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudPaymentsResellerSubscriptionV1YoutubePayload;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudPaymentsResellerSubscriptionV1Location;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetails;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetailsBillingCycleSpecEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PaymentsresellersubscriptionPartnersSubscriptionsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudPaymentsResellerSubscriptionV1SubscriptionInput = new GoogleCloudPaymentsResellerSubscriptionV1SubscriptionInput();
    $request->googleCloudPaymentsResellerSubscriptionV1SubscriptionInput->cancellationDetails = new GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetails();
    $request->googleCloudPaymentsResellerSubscriptionV1SubscriptionInput->cancellationDetails->reason = GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetailsReasonEnum::CANCELLATION_REASON_REMORSE;
    $request->googleCloudPaymentsResellerSubscriptionV1SubscriptionInput->lineItems = [
        new GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemInput(),
        new GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemInput(),
        new GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemInput(),
    ];
    $request->googleCloudPaymentsResellerSubscriptionV1SubscriptionInput->name = 'May Turcotte';
    $request->googleCloudPaymentsResellerSubscriptionV1SubscriptionInput->partnerUserToken = 'corporis';
    $request->googleCloudPaymentsResellerSubscriptionV1SubscriptionInput->products = [
        'iure',
        'saepe',
        'quidem',
    ];
    $request->googleCloudPaymentsResellerSubscriptionV1SubscriptionInput->promotionSpecs = [
        new GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput(),
    ];
    $request->googleCloudPaymentsResellerSubscriptionV1SubscriptionInput->promotions = [
        'reiciendis',
    ];
    $request->googleCloudPaymentsResellerSubscriptionV1SubscriptionInput->serviceLocation = new GoogleCloudPaymentsResellerSubscriptionV1Location();
    $request->googleCloudPaymentsResellerSubscriptionV1SubscriptionInput->serviceLocation->postalCode = '66123-1736';
    $request->googleCloudPaymentsResellerSubscriptionV1SubscriptionInput->serviceLocation->regionCode = 'nemo';
    $request->googleCloudPaymentsResellerSubscriptionV1SubscriptionInput->upgradeDowngradeDetails = new GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetails();
    $request->googleCloudPaymentsResellerSubscriptionV1SubscriptionInput->upgradeDowngradeDetails->billingCycleSpec = GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetailsBillingCycleSpecEnum::BILLING_CYCLE_SPEC_UNSPECIFIED;
    $request->googleCloudPaymentsResellerSubscriptionV1SubscriptionInput->upgradeDowngradeDetails->previousSubscriptionId = 'excepturi';
    $request->accessToken = 'accusantium';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'culpa';
    $request->fields = 'doloribus';
    $request->key = 'sapiente';
    $request->oauthToken = 'architecto';
    $request->parent = 'mollitia';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorem';
    $request->subscriptionId = 'culpa';
    $request->uploadType = 'consequuntur';
    $request->uploadProtocol = 'repellat';

    $response = $sdk->partners->paymentsresellersubscriptionPartnersSubscriptionsCreate($request);

    if ($response->googleCloudPaymentsResellerSubscriptionV1Subscription !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## paymentsresellersubscriptionPartnersSubscriptionsEntitle

Used by partners to entitle a previously provisioned subscription to the current end user. The end user identity is inferred from the authorized credential of the request. This API must be authorized by the end user using OAuth.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PaymentsresellersubscriptionPartnersSubscriptionsEntitleRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PaymentsresellersubscriptionPartnersSubscriptionsEntitleRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'numquam' => 'commodi',
        'quam' => 'molestiae',
        'velit' => 'error',
    ];
    $request->accessToken = 'quia';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'vitae';
    $request->fields = 'laborum';
    $request->key = 'animi';
    $request->name = 'Christina Satterfield';
    $request->oauthToken = 'ipsam';
    $request->prettyPrint = false;
    $request->quotaUser = 'id';
    $request->uploadType = 'possimus';
    $request->uploadProtocol = 'aut';

    $response = $sdk->partners->paymentsresellersubscriptionPartnersSubscriptionsEntitle($request);

    if ($response->googleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## paymentsresellersubscriptionPartnersSubscriptionsExtend

[Opt-in only] Most partners should be on auto-extend by default. Used by partners to extend a subscription service for their customers on an ongoing basis for the subscription to remain active and renewable. It should be called directly by the partner using service accounts.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PaymentsresellersubscriptionPartnersSubscriptionsExtendRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudPaymentsResellerSubscriptionV1Extension;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudPaymentsResellerSubscriptionV1Duration;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudPaymentsResellerSubscriptionV1DurationUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PaymentsresellersubscriptionPartnersSubscriptionsExtendRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionRequest = new GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionRequest();
    $request->googleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionRequest->extension = new GoogleCloudPaymentsResellerSubscriptionV1Extension();
    $request->googleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionRequest->extension->duration = new GoogleCloudPaymentsResellerSubscriptionV1Duration();
    $request->googleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionRequest->extension->duration->count = 622846;
    $request->googleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionRequest->extension->duration->unit = GoogleCloudPaymentsResellerSubscriptionV1DurationUnitEnum::DAY;
    $request->googleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionRequest->extension->partnerUserToken = 'laborum';
    $request->googleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionRequest->requestId = 'quasi';
    $request->accessToken = 'reiciendis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'vero';
    $request->fields = 'nihil';
    $request->key = 'praesentium';
    $request->name = 'Jose Moen';
    $request->oauthToken = 'perferendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'doloremque';
    $request->uploadType = 'reprehenderit';
    $request->uploadProtocol = 'ut';

    $response = $sdk->partners->paymentsresellersubscriptionPartnersSubscriptionsExtend($request);

    if ($response->googleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## paymentsresellersubscriptionPartnersSubscriptionsGet

Used by partners to get a subscription by id. It should be called directly by the partner using service accounts.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PaymentsresellersubscriptionPartnersSubscriptionsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PaymentsresellersubscriptionPartnersSubscriptionsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'dicta';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolore';
    $request->fields = 'iusto';
    $request->key = 'dicta';
    $request->name = 'Bill Thompson';
    $request->oauthToken = 'quae';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsum';
    $request->uploadType = 'quidem';
    $request->uploadProtocol = 'molestias';

    $response = $sdk->partners->paymentsresellersubscriptionPartnersSubscriptionsGet($request);

    if ($response->googleCloudPaymentsResellerSubscriptionV1Subscription !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## paymentsresellersubscriptionPartnersSubscriptionsProvision

Used by partners to provision a subscription for their customers. This creates a subscription without associating it with the end user account. EntitleSubscription must be called separately using OAuth in order for the end user account to be associated with the subscription. It should be called directly by the partner using service accounts.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PaymentsresellersubscriptionPartnersSubscriptionsProvisionRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudPaymentsResellerSubscriptionV1SubscriptionInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetails;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetailsReasonEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudPaymentsResellerSubscriptionV1Amount;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudPaymentsResellerSubscriptionV1Duration;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudPaymentsResellerSubscriptionV1DurationUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemOneTimeRecurrenceDetails;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudPaymentsResellerSubscriptionV1ServicePeriod;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudPaymentsResellerSubscriptionV1ProductPayload;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayload;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadOfferingEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadSalesChannelEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudPaymentsResellerSubscriptionV1YoutubePayload;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudPaymentsResellerSubscriptionV1Location;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetails;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetailsBillingCycleSpecEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PaymentsresellersubscriptionPartnersSubscriptionsProvisionRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudPaymentsResellerSubscriptionV1SubscriptionInput = new GoogleCloudPaymentsResellerSubscriptionV1SubscriptionInput();
    $request->googleCloudPaymentsResellerSubscriptionV1SubscriptionInput->cancellationDetails = new GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetails();
    $request->googleCloudPaymentsResellerSubscriptionV1SubscriptionInput->cancellationDetails->reason = GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetailsReasonEnum::CANCELLATION_REASON_SYSTEM_ERROR;
    $request->googleCloudPaymentsResellerSubscriptionV1SubscriptionInput->lineItems = [
        new GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemInput(),
        new GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemInput(),
    ];
    $request->googleCloudPaymentsResellerSubscriptionV1SubscriptionInput->name = 'Dr. Jordan Von';
    $request->googleCloudPaymentsResellerSubscriptionV1SubscriptionInput->partnerUserToken = 'veritatis';
    $request->googleCloudPaymentsResellerSubscriptionV1SubscriptionInput->products = [
        'incidunt',
        'enim',
        'consequatur',
        'est',
    ];
    $request->googleCloudPaymentsResellerSubscriptionV1SubscriptionInput->promotionSpecs = [
        new GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput(),
        new GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput(),
        new GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput(),
        new GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput(),
    ];
    $request->googleCloudPaymentsResellerSubscriptionV1SubscriptionInput->promotions = [
        'deserunt',
    ];
    $request->googleCloudPaymentsResellerSubscriptionV1SubscriptionInput->serviceLocation = new GoogleCloudPaymentsResellerSubscriptionV1Location();
    $request->googleCloudPaymentsResellerSubscriptionV1SubscriptionInput->serviceLocation->postalCode = '82213-5501';
    $request->googleCloudPaymentsResellerSubscriptionV1SubscriptionInput->serviceLocation->regionCode = 'assumenda';
    $request->googleCloudPaymentsResellerSubscriptionV1SubscriptionInput->upgradeDowngradeDetails = new GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetails();
    $request->googleCloudPaymentsResellerSubscriptionV1SubscriptionInput->upgradeDowngradeDetails->billingCycleSpec = GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetailsBillingCycleSpecEnum::BILLING_CYCLE_SPEC_ALIGN_WITH_PREVIOUS_SUBSCRIPTION;
    $request->googleCloudPaymentsResellerSubscriptionV1SubscriptionInput->upgradeDowngradeDetails->previousSubscriptionId = 'alias';
    $request->accessToken = 'fugit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'excepturi';
    $request->fields = 'tempora';
    $request->key = 'facilis';
    $request->oauthToken = 'tempore';
    $request->parent = 'labore';
    $request->prettyPrint = false;
    $request->quotaUser = 'delectus';
    $request->subscriptionId = 'eum';
    $request->uploadType = 'non';
    $request->uploadProtocol = 'eligendi';

    $response = $sdk->partners->paymentsresellersubscriptionPartnersSubscriptionsProvision($request);

    if ($response->googleCloudPaymentsResellerSubscriptionV1Subscription !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## paymentsresellersubscriptionPartnersSubscriptionsUndoCancel

Used by partners to revoke the pending cancellation of a subscription, which is currently in `STATE_CANCEL_AT_END_OF_CYCLE` state. If the subscription is already cancelled, the request will fail. It should be called directly by the partner using service accounts.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PaymentsresellersubscriptionPartnersSubscriptionsUndoCancelRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PaymentsresellersubscriptionPartnersSubscriptionsUndoCancelRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'provident' => 'necessitatibus',
        'sint' => 'officia',
    ];
    $request->accessToken = 'dolor';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'a';
    $request->fields = 'dolorum';
    $request->key = 'in';
    $request->name = 'Angel Wolff II';
    $request->oauthToken = 'cumque';
    $request->prettyPrint = false;
    $request->quotaUser = 'facere';
    $request->uploadType = 'ea';
    $request->uploadProtocol = 'aliquid';

    $response = $sdk->partners->paymentsresellersubscriptionPartnersSubscriptionsUndoCancel($request);

    if ($response->googleCloudPaymentsResellerSubscriptionV1UndoCancelSubscriptionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
