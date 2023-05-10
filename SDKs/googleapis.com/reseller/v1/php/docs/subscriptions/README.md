# subscriptions

### Available Operations

* [resellerSubscriptionsActivate](#resellersubscriptionsactivate) - Activates a subscription previously suspended by the reseller. If you did not suspend the customer subscription and it is suspended for any other reason, such as for abuse or a pending ToS acceptance, this call will not reactivate the customer subscription.
* [resellerSubscriptionsChangePlan](#resellersubscriptionschangeplan) - Updates a subscription plan. Use this method to update a plan for a 30-day trial or a flexible plan subscription to an annual commitment plan with monthly or yearly payments. How a plan is updated differs depending on the plan and the products. For more information, see the description in [manage subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#update_subscription_plan).
* [resellerSubscriptionsChangeRenewalSettings](#resellersubscriptionschangerenewalsettings) - Updates a user license's renewal settings. This is applicable for accounts with annual commitment plans only. For more information, see the description in [manage subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#update_renewal).
* [resellerSubscriptionsChangeSeats](#resellersubscriptionschangeseats) - Updates a subscription's user license settings. For more information about updating an annual commitment plan or a flexible plan subscription’s licenses, see [Manage Subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#update_subscription_seat).
* [resellerSubscriptionsDelete](#resellersubscriptionsdelete) - Cancels, suspends, or transfers a subscription to direct.
* [resellerSubscriptionsGet](#resellersubscriptionsget) - Gets a specific subscription. The `subscriptionId` can be found using the [Retrieve all reseller subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#get_all_subscriptions) method. For more information about retrieving a specific subscription, see the information descrived in [manage subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#get_subscription).
* [resellerSubscriptionsInsert](#resellersubscriptionsinsert) - Creates or transfer a subscription. Create a subscription for a customer's account that you ordered using the [Order a new customer account](/admin-sdk/reseller/v1/reference/customers/insert.html) method. For more information about creating a subscription for different payment plans, see [manage subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#create_subscription).\ If you did not order the customer's account using the customer insert method, use the customer's `customerAuthToken` when creating a subscription for that customer. If transferring a G Suite subscription with an associated Google Drive or Google Vault subscription, use the [batch operation](/admin-sdk/reseller/v1/how-tos/batch.html) to transfer all of these subscriptions. For more information, see how to [transfer subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#transfer_a_subscription).
* [resellerSubscriptionsList](#resellersubscriptionslist) - Lists of subscriptions managed by the reseller. The list can be all subscriptions, all of a customer's subscriptions, or all of a customer's transferable subscriptions. Optionally, this method can filter the response by a `customerNamePrefix`. For more information, see [manage subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions).
* [resellerSubscriptionsStartPaidService](#resellersubscriptionsstartpaidservice) - Immediately move a 30-day free trial subscription to a paid service subscription. This method is only applicable if a payment plan has already been set up for the 30-day trial subscription. For more information, see [manage subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#paid_service).
* [resellerSubscriptionsSuspend](#resellersubscriptionssuspend) - Suspends an active subscription. You can use this method to suspend a paid subscription that is currently in the `ACTIVE` state. * For `FLEXIBLE` subscriptions, billing is paused. * For `ANNUAL_MONTHLY_PAY` or `ANNUAL_YEARLY_PAY` subscriptions: * Suspending the subscription does not change the renewal date that was originally committed to. * A suspended subscription does not renew. If you activate the subscription after the original renewal date, a new annual subscription will be created, starting on the day of activation. We strongly encourage you to suspend subscriptions only for short periods of time as suspensions over 60 days may result in the subscription being cancelled.

## resellerSubscriptionsActivate

Activates a subscription previously suspended by the reseller. If you did not suspend the customer subscription and it is suspended for any other reason, such as for abuse or a pending ToS acceptance, this call will not reactivate the customer subscription.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ResellerSubscriptionsActivateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ResellerSubscriptionsActivateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ResellerSubscriptionsActivateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'accusamus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'repudiandae';
    $request->customerId = 'quae';
    $request->fields = 'ipsum';
    $request->key = 'quidem';
    $request->oauthToken = 'molestias';
    $request->prettyPrint = false;
    $request->quotaUser = 'excepturi';
    $request->subscriptionId = 'pariatur';
    $request->uploadType = 'modi';
    $request->uploadProtocol = 'praesentium';

    $requestSecurity = new ResellerSubscriptionsActivateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->subscriptions->resellerSubscriptionsActivate($request, $requestSecurity);

    if ($response->subscription !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## resellerSubscriptionsChangePlan

Updates a subscription plan. Use this method to update a plan for a 30-day trial or a flexible plan subscription to an annual commitment plan with monthly or yearly payments. How a plan is updated differs depending on the plan and the products. For more information, see the description in [manage subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#update_subscription_plan).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ResellerSubscriptionsChangePlanRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ChangePlanRequest;
use \OpenAPI\OpenAPI\Models\Shared\Seats;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ResellerSubscriptionsChangePlanSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ResellerSubscriptionsChangePlanRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->changePlanRequest = new ChangePlanRequest();
    $request->changePlanRequest->dealCode = 'voluptates';
    $request->changePlanRequest->kind = 'quasi';
    $request->changePlanRequest->planName = 'repudiandae';
    $request->changePlanRequest->purchaseOrderId = 'sint';
    $request->changePlanRequest->seats = new Seats();
    $request->changePlanRequest->seats->kind = 'veritatis';
    $request->changePlanRequest->seats->licensedNumberOfSeats = 929297;
    $request->changePlanRequest->seats->maximumNumberOfSeats = 277718;
    $request->changePlanRequest->seats->numberOfSeats = 318569;
    $request->accessToken = 'consequatur';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quibusdam';
    $request->customerId = 'explicabo';
    $request->fields = 'deserunt';
    $request->key = 'distinctio';
    $request->oauthToken = 'quibusdam';
    $request->prettyPrint = false;
    $request->quotaUser = 'labore';
    $request->subscriptionId = 'modi';
    $request->uploadType = 'qui';
    $request->uploadProtocol = 'aliquid';

    $requestSecurity = new ResellerSubscriptionsChangePlanSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->subscriptions->resellerSubscriptionsChangePlan($request, $requestSecurity);

    if ($response->subscription !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## resellerSubscriptionsChangeRenewalSettings

Updates a user license's renewal settings. This is applicable for accounts with annual commitment plans only. For more information, see the description in [manage subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#update_renewal).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ResellerSubscriptionsChangeRenewalSettingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RenewalSettings;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ResellerSubscriptionsChangeRenewalSettingsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ResellerSubscriptionsChangeRenewalSettingsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->renewalSettings = new RenewalSettings();
    $request->renewalSettings->kind = 'quos';
    $request->renewalSettings->renewalType = 'perferendis';
    $request->accessToken = 'magni';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ipsam';
    $request->customerId = 'alias';
    $request->fields = 'fugit';
    $request->key = 'dolorum';
    $request->oauthToken = 'excepturi';
    $request->prettyPrint = false;
    $request->quotaUser = 'tempora';
    $request->subscriptionId = 'facilis';
    $request->uploadType = 'tempore';
    $request->uploadProtocol = 'labore';

    $requestSecurity = new ResellerSubscriptionsChangeRenewalSettingsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->subscriptions->resellerSubscriptionsChangeRenewalSettings($request, $requestSecurity);

    if ($response->subscription !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## resellerSubscriptionsChangeSeats

Updates a subscription's user license settings. For more information about updating an annual commitment plan or a flexible plan subscription’s licenses, see [Manage Subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#update_subscription_seat).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ResellerSubscriptionsChangeSeatsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Seats;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ResellerSubscriptionsChangeSeatsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ResellerSubscriptionsChangeSeatsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->seats = new Seats();
    $request->seats->kind = 'eum';
    $request->seats->licensedNumberOfSeats = 248753;
    $request->seats->maximumNumberOfSeats = 756107;
    $request->seats->numberOfSeats = 576157;
    $request->accessToken = 'aliquid';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'necessitatibus';
    $request->customerId = 'sint';
    $request->fields = 'officia';
    $request->key = 'dolor';
    $request->oauthToken = 'debitis';
    $request->prettyPrint = false;
    $request->quotaUser = 'a';
    $request->subscriptionId = 'dolorum';
    $request->uploadType = 'in';
    $request->uploadProtocol = 'in';

    $requestSecurity = new ResellerSubscriptionsChangeSeatsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->subscriptions->resellerSubscriptionsChangeSeats($request, $requestSecurity);

    if ($response->subscription !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## resellerSubscriptionsDelete

Cancels, suspends, or transfers a subscription to direct.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ResellerSubscriptionsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ResellerSubscriptionsDeleteDeletionTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ResellerSubscriptionsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ResellerSubscriptionsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'maiores';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dicta';
    $request->customerId = 'magnam';
    $request->deletionType = ResellerSubscriptionsDeleteDeletionTypeEnum::TRANSFER_TO_DIRECT;
    $request->fields = 'facere';
    $request->key = 'ea';
    $request->oauthToken = 'aliquid';
    $request->prettyPrint = false;
    $request->quotaUser = 'laborum';
    $request->subscriptionId = 'accusamus';
    $request->uploadType = 'non';
    $request->uploadProtocol = 'occaecati';

    $requestSecurity = new ResellerSubscriptionsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->subscriptions->resellerSubscriptionsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## resellerSubscriptionsGet

Gets a specific subscription. The `subscriptionId` can be found using the [Retrieve all reseller subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#get_all_subscriptions) method. For more information about retrieving a specific subscription, see the information descrived in [manage subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#get_subscription).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ResellerSubscriptionsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ResellerSubscriptionsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ResellerSubscriptionsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ResellerSubscriptionsGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ResellerSubscriptionsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'accusamus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quidem';
    $request->customerId = 'provident';
    $request->fields = 'nam';
    $request->key = 'id';
    $request->oauthToken = 'blanditiis';
    $request->prettyPrint = false;
    $request->quotaUser = 'deleniti';
    $request->subscriptionId = 'sapiente';
    $request->uploadType = 'amet';
    $request->uploadProtocol = 'deserunt';

    $requestSecurity = new ResellerSubscriptionsGetSecurity();
    $requestSecurity->option1 = new ResellerSubscriptionsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->subscriptions->resellerSubscriptionsGet($request, $requestSecurity);

    if ($response->subscription !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## resellerSubscriptionsInsert

Creates or transfer a subscription. Create a subscription for a customer's account that you ordered using the [Order a new customer account](/admin-sdk/reseller/v1/reference/customers/insert.html) method. For more information about creating a subscription for different payment plans, see [manage subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#create_subscription).\ If you did not order the customer's account using the customer insert method, use the customer's `customerAuthToken` when creating a subscription for that customer. If transferring a G Suite subscription with an associated Google Drive or Google Vault subscription, use the [batch operation](/admin-sdk/reseller/v1/how-tos/batch.html) to transfer all of these subscriptions. For more information, see how to [transfer subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#transfer_a_subscription).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ResellerSubscriptionsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Subscription;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionPlan;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionPlanCommitmentInterval;
use \OpenAPI\OpenAPI\Models\Shared\RenewalSettings;
use \OpenAPI\OpenAPI\Models\Shared\Seats;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionTransferInfo;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionTrialSettings;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ResellerSubscriptionsInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ResellerSubscriptionsInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->subscription = new Subscription();
    $request->subscription->billingMethod = 'vel';
    $request->subscription->creationTime = 'natus';
    $request->subscription->customerDomain = 'omnis';
    $request->subscription->customerId = 'molestiae';
    $request->subscription->dealCode = 'perferendis';
    $request->subscription->kind = 'nihil';
    $request->subscription->plan = new SubscriptionPlan();
    $request->subscription->plan->commitmentInterval = new SubscriptionPlanCommitmentInterval();
    $request->subscription->plan->commitmentInterval->endTime = 'magnam';
    $request->subscription->plan->commitmentInterval->startTime = 'distinctio';
    $request->subscription->plan->isCommitmentPlan = false;
    $request->subscription->plan->planName = 'id';
    $request->subscription->purchaseOrderId = 'labore';
    $request->subscription->renewalSettings = new RenewalSettings();
    $request->subscription->renewalSettings->kind = 'labore';
    $request->subscription->renewalSettings->renewalType = 'suscipit';
    $request->subscription->resourceUiUrl = 'natus';
    $request->subscription->seats = new Seats();
    $request->subscription->seats->kind = 'nobis';
    $request->subscription->seats->licensedNumberOfSeats = 428769;
    $request->subscription->seats->maximumNumberOfSeats = 878453;
    $request->subscription->seats->numberOfSeats = 135474;
    $request->subscription->skuId = 'architecto';
    $request->subscription->skuName = 'magnam';
    $request->subscription->status = 'et';
    $request->subscription->subscriptionId = 'excepturi';
    $request->subscription->suspensionReasons = [
        'provident',
        'quos',
    ];
    $request->subscription->transferInfo = new SubscriptionTransferInfo();
    $request->subscription->transferInfo->currentLegacySkuId = 'sint';
    $request->subscription->transferInfo->minimumTransferableSeats = 33625;
    $request->subscription->transferInfo->transferabilityExpirationTime = 'mollitia';
    $request->subscription->trialSettings = new SubscriptionTrialSettings();
    $request->subscription->trialSettings->isInTrial = false;
    $request->subscription->trialSettings->trialEndTime = 'reiciendis';
    $request->accessToken = 'mollitia';
    $request->alt = AltEnum::JSON;
    $request->callback = 'eum';
    $request->customerAuthToken = 'dolor';
    $request->customerId = 'necessitatibus';
    $request->fields = 'odit';
    $request->key = 'nemo';
    $request->oauthToken = 'quasi';
    $request->prettyPrint = false;
    $request->quotaUser = 'iure';
    $request->uploadType = 'doloribus';
    $request->uploadProtocol = 'debitis';

    $requestSecurity = new ResellerSubscriptionsInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->subscriptions->resellerSubscriptionsInsert($request, $requestSecurity);

    if ($response->subscription !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## resellerSubscriptionsList

Lists of subscriptions managed by the reseller. The list can be all subscriptions, all of a customer's subscriptions, or all of a customer's transferable subscriptions. Optionally, this method can filter the response by a `customerNamePrefix`. For more information, see [manage subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ResellerSubscriptionsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ResellerSubscriptionsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ResellerSubscriptionsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ResellerSubscriptionsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ResellerSubscriptionsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'maxime';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'facilis';
    $request->customerAuthToken = 'in';
    $request->customerId = 'architecto';
    $request->customerNamePrefix = 'architecto';
    $request->fields = 'repudiandae';
    $request->key = 'ullam';
    $request->maxResults = 714242;
    $request->oauthToken = 'nihil';
    $request->pageToken = 'repellat';
    $request->prettyPrint = false;
    $request->quotaUser = 'quibusdam';
    $request->uploadType = 'sed';
    $request->uploadProtocol = 'saepe';

    $requestSecurity = new ResellerSubscriptionsListSecurity();
    $requestSecurity->option1 = new ResellerSubscriptionsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->subscriptions->resellerSubscriptionsList($request, $requestSecurity);

    if ($response->subscriptions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## resellerSubscriptionsStartPaidService

Immediately move a 30-day free trial subscription to a paid service subscription. This method is only applicable if a payment plan has already been set up for the 30-day trial subscription. For more information, see [manage subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#paid_service).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ResellerSubscriptionsStartPaidServiceRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ResellerSubscriptionsStartPaidServiceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ResellerSubscriptionsStartPaidServiceRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'accusantium';
    $request->alt = AltEnum::JSON;
    $request->callback = 'praesentium';
    $request->customerId = 'natus';
    $request->fields = 'magni';
    $request->key = 'sunt';
    $request->oauthToken = 'quo';
    $request->prettyPrint = false;
    $request->quotaUser = 'illum';
    $request->subscriptionId = 'pariatur';
    $request->uploadType = 'maxime';
    $request->uploadProtocol = 'ea';

    $requestSecurity = new ResellerSubscriptionsStartPaidServiceSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->subscriptions->resellerSubscriptionsStartPaidService($request, $requestSecurity);

    if ($response->subscription !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## resellerSubscriptionsSuspend

Suspends an active subscription. You can use this method to suspend a paid subscription that is currently in the `ACTIVE` state. * For `FLEXIBLE` subscriptions, billing is paused. * For `ANNUAL_MONTHLY_PAY` or `ANNUAL_YEARLY_PAY` subscriptions: * Suspending the subscription does not change the renewal date that was originally committed to. * A suspended subscription does not renew. If you activate the subscription after the original renewal date, a new annual subscription will be created, starting on the day of activation. We strongly encourage you to suspend subscriptions only for short periods of time as suspensions over 60 days may result in the subscription being cancelled.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ResellerSubscriptionsSuspendRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ResellerSubscriptionsSuspendSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ResellerSubscriptionsSuspendRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'odit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'accusantium';
    $request->customerId = 'ab';
    $request->fields = 'maiores';
    $request->key = 'quidem';
    $request->oauthToken = 'ipsam';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptate';
    $request->subscriptionId = 'autem';
    $request->uploadType = 'nam';
    $request->uploadProtocol = 'eaque';

    $requestSecurity = new ResellerSubscriptionsSuspendSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->subscriptions->resellerSubscriptionsSuspend($request, $requestSecurity);

    if ($response->subscription !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
