# subscriptions

### Available Operations

* [postV05SubscriptionRequestsCmInitJson](#postv05subscriptionrequestscminitjson) - Request for subscription
* [postV05SubscriptionRequestsCmInitRaw](#postv05subscriptionrequestscminitraw) - Request for subscription
* [postV05SubscriptionRequestsCmOnInit](#postv05subscriptionrequestscmoninit) - callback API for the /subscription-requests/cm/init to notify a HIU on acceptance/acknowledgement of the request for subscription.
* [postV05SubscriptionRequestsHiuNotifyJson](#postv05subscriptionrequestshiunotifyjson) - Notification for subscription grant/deny/revoke
* [postV05SubscriptionRequestsHiuNotifyRaw](#postv05subscriptionrequestshiunotifyraw) - Notification for subscription grant/deny/revoke
* [postV05SubscriptionRequestsHiuOnNotify](#postv05subscriptionrequestshiuonnotify) - Callback API for /subscription-requests/hiu/notify to acknowledge receipt of notification.
* [postV05SubscriptionsHiuNotifyJson](#postv05subscriptionshiunotifyjson) - Notification to HIU on basis of a granted subscription
* [postV05SubscriptionsHiuNotifyRaw](#postv05subscriptionshiunotifyraw) - Notification to HIU on basis of a granted subscription
* [postV05SubscriptionsHiuOnNotify](#postv05subscriptionshiuonnotify) - Callback API for /subscriptions/hiu/notify to acknowledge receipt of notification.

## postV05SubscriptionRequestsCmInitJson

creates a request for subscription. The subscription categories can be for care-contexts linkages or availability of data against existing care-contexts. Note that the requester must have HIU role

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05SubscriptionRequestsCmInitJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionRequestSubscription;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionCategoryEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrganizationRepresentation;
use \OpenAPI\OpenAPI\Models\Shared\ConsentManagerPatientID;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionPeriod;
use \OpenAPI\OpenAPI\Models\Shared\UsePurpose;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05SubscriptionRequestsCmInitJsonRequest();
    $request->authorization = 'sit';
    $request->subscriptionRequest = new SubscriptionRequest();
    $request->subscriptionRequest->requestId = '499a5a4a-7dda-4f20-9b67-e24589627061';
    $request->subscriptionRequest->subscription = new SubscriptionRequestSubscription();
    $request->subscriptionRequest->subscription->categories = [
        SubscriptionCategoryEnum::LINK,
        SubscriptionCategoryEnum::LINK,
        SubscriptionCategoryEnum::LINK,
        SubscriptionCategoryEnum::LINK,
    ];
    $request->subscriptionRequest->subscription->hips = [
        new OrganizationRepresentation(),
        new OrganizationRepresentation(),
    ];
    $request->subscriptionRequest->subscription->hiu = new OrganizationRepresentation();
    $request->subscriptionRequest->subscription->hiu->id = '49ef0300-4978-4a61-ba1c-f20688f77c1f';
    $request->subscriptionRequest->subscription->patient = new ConsentManagerPatientID();
    $request->subscriptionRequest->subscription->patient->id = 'hinapatel79@ndhm';
    $request->subscriptionRequest->subscription->period = new SubscriptionPeriod();
    $request->subscriptionRequest->subscription->period->from = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-08-09T03:30:38.934Z');
    $request->subscriptionRequest->subscription->period->to = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-03T12:46:57.729Z');
    $request->subscriptionRequest->subscription->purpose = new UsePurpose();
    $request->subscriptionRequest->subscription->purpose->code = 'facere';
    $request->subscriptionRequest->subscription->purpose->refUri = 'https://reckless-barium.info';
    $request->subscriptionRequest->subscription->purpose->text = 'consectetur';
    $request->subscriptionRequest->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-17T08:36:48.070Z');
    $request->xCmId = 'animi';

    $response = $sdk->subscriptions->postV05SubscriptionRequestsCmInitJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05SubscriptionRequestsCmInitRaw

creates a request for subscription. The subscription categories can be for care-contexts linkages or availability of data against existing care-contexts. Note that the requester must have HIU role

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05SubscriptionRequestsCmInitRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05SubscriptionRequestsCmInitRawRequest();
    $request->authorization = 'sequi';
    $request->requestBody = 'eligendi';
    $request->xCmId = 'voluptatum';

    $response = $sdk->subscriptions->postV05SubscriptionRequestsCmInitRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05SubscriptionRequestsCmOnInit

This callback API acknowledges the request for subscription from a HIU, and sends back a "id" that will be used when the patient/user approves or denies the subscription. 


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05SubscriptionRequestsCmOnInitRequest;
use \OpenAPI\OpenAPI\Models\Shared\HIUSubscriptionRequestReceipt;
use \OpenAPI\OpenAPI\Models\Shared\Error;
use \OpenAPI\OpenAPI\Models\Shared\ErrorCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RequestReference;
use \OpenAPI\OpenAPI\Models\Shared\HIUSubscriptionRequestReceiptSubscriptionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05SubscriptionRequestsCmOnInitRequest();
    $request->authorization = 'perferendis';
    $request->hiuSubscriptionRequestReceipt = new HIUSubscriptionRequestReceipt();
    $request->hiuSubscriptionRequestReceipt->error = new Error();
    $request->hiuSubscriptionRequestReceipt->error->code = ErrorCodeEnum::TEN_THOUSAND_AND_ONE;
    $request->hiuSubscriptionRequestReceipt->error->message = 'omnis';
    $request->hiuSubscriptionRequestReceipt->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->hiuSubscriptionRequestReceipt->resp = new RequestReference();
    $request->hiuSubscriptionRequestReceipt->resp->requestId = '7ff334cd-df85-47a9-a618-76c6ab21d29d';
    $request->hiuSubscriptionRequestReceipt->subscriptionRequest = new HIUSubscriptionRequestReceiptSubscriptionRequest();
    $request->hiuSubscriptionRequestReceipt->subscriptionRequest->id = 'f29f0e59-8388-4698-9fe6-05db67aeac46';
    $request->hiuSubscriptionRequestReceipt->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-09-08T16:05:14.281Z');
    $request->xHiuId = 'unde';

    $response = $sdk->subscriptions->postV05SubscriptionRequestsCmOnInit($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

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
    $request->authorization = 'ut';
    $request->subscriptionApprovalNotification = new SubscriptionApprovalNotification();
    $request->subscriptionApprovalNotification->notification = new SubscriptionApprovalNotificationNotification();
    $request->subscriptionApprovalNotification->notification->status = SubscriptionStatusEnum::DENIED;
    $request->subscriptionApprovalNotification->notification->subscription = new HIUSubscription();
    $request->subscriptionApprovalNotification->notification->subscription->hiu = new OrganizationRepresentation();
    $request->subscriptionApprovalNotification->notification->subscription->hiu->id = '6fecd799-3900-466a-ad2d-000355338cec';
    $request->subscriptionApprovalNotification->notification->subscription->id = 'subscription Id';
    $request->subscriptionApprovalNotification->notification->subscription->patient = new ConsentManagerPatientID();
    $request->subscriptionApprovalNotification->notification->subscription->patient->id = 'hinapatel79@ndhm';
    $request->subscriptionApprovalNotification->notification->subscription->sources = [
        new HIUSubscriptionContext(),
    ];
    $request->subscriptionApprovalNotification->notification->subscriptionRequestId = 'request id of the subscription';
    $request->subscriptionApprovalNotification->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->subscriptionApprovalNotification->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-17T06:08:12.577Z');
    $request->xHiuId = 'maiores';

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
    $request->authorization = 'est';
    $request->requestBody = 'fugit';
    $request->xHiuId = 'veritatis';

    $response = $sdk->subscriptions->postV05SubscriptionRequestsHiuNotifyRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05SubscriptionRequestsHiuOnNotify

This API is called by HIU as acknowledgement to subscription request relevant notifications. 


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05SubscriptionRequestsHiuOnNotifyRequest;
use \OpenAPI\OpenAPI\Models\Shared\HIUSubscriptionRequestNotificationAcknowledgement;
use \OpenAPI\OpenAPI\Models\Shared\HIUSubscriptionRequestNotificationAcknowledgementAcknowledgement;
use \OpenAPI\OpenAPI\Models\Shared\HIUSubscriptionRequestNotificationAcknowledgementAcknowledgementStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\Error;
use \OpenAPI\OpenAPI\Models\Shared\ErrorCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RequestReference;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05SubscriptionRequestsHiuOnNotifyRequest();
    $request->authorization = 'necessitatibus';
    $request->hiuSubscriptionRequestNotificationAcknowledgement = new HIUSubscriptionRequestNotificationAcknowledgement();
    $request->hiuSubscriptionRequestNotificationAcknowledgement->acknowledgement = new HIUSubscriptionRequestNotificationAcknowledgementAcknowledgement();
    $request->hiuSubscriptionRequestNotificationAcknowledgement->acknowledgement->status = HIUSubscriptionRequestNotificationAcknowledgementAcknowledgementStatusEnum::OK;
    $request->hiuSubscriptionRequestNotificationAcknowledgement->acknowledgement->subscriptionRequestId = 'subscription Id';
    $request->hiuSubscriptionRequestNotificationAcknowledgement->error = new Error();
    $request->hiuSubscriptionRequestNotificationAcknowledgement->error->code = ErrorCodeEnum::TEN_THOUSAND_AND_ONE;
    $request->hiuSubscriptionRequestNotificationAcknowledgement->error->message = 'dicta';
    $request->hiuSubscriptionRequestNotificationAcknowledgement->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->hiuSubscriptionRequestNotificationAcknowledgement->resp = new RequestReference();
    $request->hiuSubscriptionRequestNotificationAcknowledgement->resp->requestId = '52cb3119-167b-48e3-88db-03408d6d364f';
    $request->hiuSubscriptionRequestNotificationAcknowledgement->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-07-09T15:47:06.553Z');
    $request->xCmId = 'dolore';

    $response = $sdk->subscriptions->postV05SubscriptionRequestsHiuOnNotify($request);

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
    $request->authorization = 'enim';
    $request->hiuSubscriptionNotification = new HIUSubscriptionNotification();
    $request->hiuSubscriptionNotification->event = new HIUSubscriptionNotificationEvent();
    $request->hiuSubscriptionNotification->event->category = SubscriptionCategoryEnum::LINK;
    $request->hiuSubscriptionNotification->event->content = new HIUSubscriptionEventContent();
    $request->hiuSubscriptionNotification->event->content->context = [
        new EventCategoryDetail(),
        new EventCategoryDetail(),
    ];
    $request->hiuSubscriptionNotification->event->content->hip = new OrganizationRepresentation();
    $request->hiuSubscriptionNotification->event->content->hip->id = '906d1263-d48e-4935-82c9-e81f30be3e43';
    $request->hiuSubscriptionNotification->event->content->patient = new ConsentManagerPatientID();
    $request->hiuSubscriptionNotification->event->content->patient->id = 'hinapatel79@ndhm';
    $request->hiuSubscriptionNotification->event->id = 'a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d';
    $request->hiuSubscriptionNotification->event->published = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-15T07:52:06.510Z');
    $request->hiuSubscriptionNotification->event->subscriptionId = 'subscription Id';
    $request->hiuSubscriptionNotification->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->hiuSubscriptionNotification->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-25T03:59:17.657Z');
    $request->xHiuId = 'iusto';

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
    $request->authorization = 'magni';
    $request->requestBody = 'beatae';
    $request->xHiuId = 'aliquid';

    $response = $sdk->subscriptions->postV05SubscriptionsHiuNotifyRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05SubscriptionsHiuOnNotify

This API is called by HIU as acknowledgement to consent notifications, specifically for cases when consent is REVOKED or EXPIRED.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05SubscriptionsHiuOnNotifyRequest;
use \OpenAPI\OpenAPI\Models\Shared\HIUSubscriptionNotificationAcknowledgment;
use \OpenAPI\OpenAPI\Models\Shared\HIUSubscriptionNotificationAcknowledgmentAcknowledgement;
use \OpenAPI\OpenAPI\Models\Shared\HIUSubscriptionNotificationAcknowledgmentAcknowledgementStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\Error;
use \OpenAPI\OpenAPI\Models\Shared\ErrorCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RequestReference;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05SubscriptionsHiuOnNotifyRequest();
    $request->authorization = 'ad';
    $request->hiuSubscriptionNotificationAcknowledgment = new HIUSubscriptionNotificationAcknowledgment();
    $request->hiuSubscriptionNotificationAcknowledgment->acknowledgement = new HIUSubscriptionNotificationAcknowledgmentAcknowledgement();
    $request->hiuSubscriptionNotificationAcknowledgment->acknowledgement->eventId = 'subscription event Id';
    $request->hiuSubscriptionNotificationAcknowledgment->acknowledgement->status = HIUSubscriptionNotificationAcknowledgmentAcknowledgementStatusEnum::OK;
    $request->hiuSubscriptionNotificationAcknowledgment->error = new Error();
    $request->hiuSubscriptionNotificationAcknowledgment->error->code = ErrorCodeEnum::ONE_THOUSAND;
    $request->hiuSubscriptionNotificationAcknowledgment->error->message = 'vel';
    $request->hiuSubscriptionNotificationAcknowledgment->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->hiuSubscriptionNotificationAcknowledgment->resp = new RequestReference();
    $request->hiuSubscriptionNotificationAcknowledgment->resp->requestId = '50664187-0d9d-421f-9ad0-30c4ecc11a08';
    $request->hiuSubscriptionNotificationAcknowledgment->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-25T15:58:33.983Z');
    $request->xCmId = 'tempora';

    $response = $sdk->subscriptions->postV05SubscriptionsHiuOnNotify($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
