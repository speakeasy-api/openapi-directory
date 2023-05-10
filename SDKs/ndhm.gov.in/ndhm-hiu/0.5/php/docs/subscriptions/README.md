# subscriptions

### Available Operations

* [postV05SubscriptionRequestsHiuNotifyJson](#postv05subscriptionrequestshiunotifyjson) - Notification for subscription grant/deny/revoke
* [postV05SubscriptionRequestsHiuNotifyRaw](#postv05subscriptionrequestshiunotifyraw) - Notification for subscription grant/deny/revoke
* [postV05SubscriptionRequestsHiuOnInit](#postv05subscriptionrequestshiuoninit) - callback API for the /subscription-requests/cm/init to notify a HIU on acceptance/acknowledgement of the request for subscription.
* [postV05SubscriptionsHiuNotifyJson](#postv05subscriptionshiunotifyjson) - Notification to HIU on basis of a granted subscription
* [postV05SubscriptionsHiuNotifyRaw](#postv05subscriptionshiunotifyraw) - Notification to HIU on basis of a granted subscription

## postV05SubscriptionRequestsHiuNotifyJson

This API is used by CM to notify a HIU to grant or deny a request for subscription, and also to notify that in case an existing subscription is revoked or expired. For notifying that a particular subscription request was GRANTED or DENIED, the **subscriptionRequestId** is passed. 


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05SubscriptionRequestsHiuNotifyJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionApprovalNotification;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionApprovalNotificationNotification;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\HIUSubscription;
use \OpenAPI\OpenAPI\Models\Shared\OrganizationRepresentation;
use \OpenAPI\OpenAPI\Models\Shared\ConsentManagerPatientID;
use \OpenAPI\OpenAPI\Models\Shared\HIUSubscriptionContext;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionCategoryEnum;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionPeriod;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05SubscriptionRequestsHiuNotifyJsonRequest();
    $request->authorization = 'dolorum';
    $request->subscriptionApprovalNotification = new SubscriptionApprovalNotification();
    $request->subscriptionApprovalNotification->notification = new SubscriptionApprovalNotificationNotification();
    $request->subscriptionApprovalNotification->notification->status = SubscriptionStatusEnum::GRANTED;
    $request->subscriptionApprovalNotification->notification->subscription = new HIUSubscription();
    $request->subscriptionApprovalNotification->notification->subscription->hiu = new OrganizationRepresentation();
    $request->subscriptionApprovalNotification->notification->subscription->hiu->id = '9f1d1705-1339-4d08-886a-1840394c2607';
    $request->subscriptionApprovalNotification->notification->subscription->id = 'subscription Id';
    $request->subscriptionApprovalNotification->notification->subscription->patient = new ConsentManagerPatientID();
    $request->subscriptionApprovalNotification->notification->subscription->patient->id = 'hinapatel@ndhm';
    $request->subscriptionApprovalNotification->notification->subscription->sources = [
        new HIUSubscriptionContext(),
    ];
    $request->subscriptionApprovalNotification->notification->subscriptionRequestId = 'request id of the subscription';
    $request->subscriptionApprovalNotification->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->subscriptionApprovalNotification->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-02-22T18:20:18.826Z');
    $request->xHiuId = 'velit';

    $response = $sdk->subscriptions->postV05SubscriptionRequestsHiuNotifyJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05SubscriptionRequestsHiuNotifyRaw

This API is used by CM to notify a HIU to grant or deny a request for subscription, and also to notify that in case an existing subscription is revoked or expired. For notifying that a particular subscription request was GRANTED or DENIED, the **subscriptionRequestId** is passed. 


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05SubscriptionRequestsHiuNotifyRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05SubscriptionRequestsHiuNotifyRawRequest();
    $request->authorization = 'voluptatibus';
    $request->requestBody = 'voluptas';
    $request->xHiuId = 'asperiores';

    $response = $sdk->subscriptions->postV05SubscriptionRequestsHiuNotifyRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05SubscriptionRequestsHiuOnInit

This callback API acknowledges the request for subscription from a HIU, and sends back a "id" that will be used when the patient/user approves or denies the subscription. 


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05SubscriptionRequestsHiuOnInitRequest;
use \OpenAPI\OpenAPI\Models\Shared\HIUSubscriptionRequestReceipt;
use \OpenAPI\OpenAPI\Models\Shared\Error;
use \OpenAPI\OpenAPI\Models\Shared\ErrorCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RequestReference;
use \OpenAPI\OpenAPI\Models\Shared\HIUSubscriptionRequestReceiptSubscriptionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05SubscriptionRequestsHiuOnInitRequest();
    $request->authorization = 'aperiam';
    $request->hiuSubscriptionRequestReceipt = new HIUSubscriptionRequestReceipt();
    $request->hiuSubscriptionRequestReceipt->error = new Error();
    $request->hiuSubscriptionRequestReceipt->error->code = ErrorCodeEnum::ONE_THOUSAND;
    $request->hiuSubscriptionRequestReceipt->error->message = 'quaerat';
    $request->hiuSubscriptionRequestReceipt->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->hiuSubscriptionRequestReceipt->resp = new RequestReference();
    $request->hiuSubscriptionRequestReceipt->resp->requestId = '2dac7af5-15cc-4413-aa63-aae8d67864db';
    $request->hiuSubscriptionRequestReceipt->subscriptionRequest = new HIUSubscriptionRequestReceiptSubscriptionRequest();
    $request->hiuSubscriptionRequestReceipt->subscriptionRequest->id = 'f29f0e59-8388-4698-9fe6-05db67aeac46';
    $request->hiuSubscriptionRequestReceipt->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-04T03:42:26.898Z');
    $request->xHiuId = 'in';

    $response = $sdk->subscriptions->postV05SubscriptionRequestsHiuOnInit($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05SubscriptionsHiuNotifyJson

This API is used by CM to notify a HIU for notification relevant to subscription. Notifications are sent to subscribed HIUs whenever a new care-context is linked or new data is available on an existing linked care-context. 
1. if event.category = LINK, then only care-contexts are passed when new care-contexts are linked for patient. 
2. If event.category = DATA, then hiTypes are passed. Care-context is passed only if the subscribed HIU has any valid consent for that care-context


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05SubscriptionsHiuNotifyJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\HIUSubscriptionNotification;
use \OpenAPI\OpenAPI\Models\Shared\HIUSubscriptionNotificationEvent;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionCategoryEnum;
use \OpenAPI\OpenAPI\Models\Shared\HIUSubscriptionEventContent;
use \OpenAPI\OpenAPI\Models\Shared\EventCategoryDetail;
use \OpenAPI\OpenAPI\Models\Shared\CareContextDefinition;
use \OpenAPI\OpenAPI\Models\Shared\HITypeEnumEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrganizationRepresentation;
use \OpenAPI\OpenAPI\Models\Shared\ConsentManagerPatientID;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05SubscriptionsHiuNotifyJsonRequest();
    $request->authorization = 'corporis';
    $request->hiuSubscriptionNotification = new HIUSubscriptionNotification();
    $request->hiuSubscriptionNotification->event = new HIUSubscriptionNotificationEvent();
    $request->hiuSubscriptionNotification->event->category = SubscriptionCategoryEnum::LINK;
    $request->hiuSubscriptionNotification->event->content = new HIUSubscriptionEventContent();
    $request->hiuSubscriptionNotification->event->content->context = [
        new EventCategoryDetail(),
        new EventCategoryDetail(),
        new EventCategoryDetail(),
        new EventCategoryDetail(),
    ];
    $request->hiuSubscriptionNotification->event->content->hip = new OrganizationRepresentation();
    $request->hiuSubscriptionNotification->event->content->hip->id = 'd5e60b37-5ed4-4f6f-bee4-1f33317fe35b';
    $request->hiuSubscriptionNotification->event->content->patient = new ConsentManagerPatientID();
    $request->hiuSubscriptionNotification->event->content->patient->id = 'hinapatel@ndhm';
    $request->hiuSubscriptionNotification->event->id = 'a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d';
    $request->hiuSubscriptionNotification->event->published = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-10T16:47:53.137Z');
    $request->hiuSubscriptionNotification->event->subscriptionId = 'subscription Id';
    $request->hiuSubscriptionNotification->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->hiuSubscriptionNotification->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-10-22T20:57:52.942Z');
    $request->xHiuId = 'vitae';

    $response = $sdk->subscriptions->postV05SubscriptionsHiuNotifyJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05SubscriptionsHiuNotifyRaw

This API is used by CM to notify a HIU for notification relevant to subscription. Notifications are sent to subscribed HIUs whenever a new care-context is linked or new data is available on an existing linked care-context. 
1. if event.category = LINK, then only care-contexts are passed when new care-contexts are linked for patient. 
2. If event.category = DATA, then hiTypes are passed. Care-context is passed only if the subscribed HIU has any valid consent for that care-context


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05SubscriptionsHiuNotifyRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05SubscriptionsHiuNotifyRawRequest();
    $request->authorization = 'accusamus';
    $request->requestBody = 'similique';
    $request->xHiuId = 'tempora';

    $response = $sdk->subscriptions->postV05SubscriptionsHiuNotifyRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
