# subscriptions

### Available Operations

* [postV05SubscriptionRequestsCmInitJson](#postv05subscriptionrequestscminitjson) - Request for subscription
* [postV05SubscriptionRequestsCmInitRaw](#postv05subscriptionrequestscminitraw) - Request for subscription
* [postV05SubscriptionRequestsHiuOnNotify](#postv05subscriptionrequestshiuonnotify) - Callback API for /subscription-requests/hiu/notify to acknowledge receipt of notification.
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
    $request->authorization = 'explicabo';
    $request->subscriptionRequest = new SubscriptionRequest();
    $request->subscriptionRequest->requestId = '499a5a4a-7dda-4f20-9b67-e24589627061';
    $request->subscriptionRequest->subscription = new SubscriptionRequestSubscription();
    $request->subscriptionRequest->subscription->categories = [
        SubscriptionCategoryEnum::LINK,
        SubscriptionCategoryEnum::LINK,
    ];
    $request->subscriptionRequest->subscription->hips = [
        new OrganizationRepresentation(),
        new OrganizationRepresentation(),
    ];
    $request->subscriptionRequest->subscription->hiu = new OrganizationRepresentation();
    $request->subscriptionRequest->subscription->hiu->id = '2f222e98-17ee-417c-be61-e6b7b95bc0ab';
    $request->subscriptionRequest->subscription->patient = new ConsentManagerPatientID();
    $request->subscriptionRequest->subscription->patient->id = 'hinapatel79@ndhm';
    $request->subscriptionRequest->subscription->period = new SubscriptionPeriod();
    $request->subscriptionRequest->subscription->period->from = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-27T01:23:58.638Z');
    $request->subscriptionRequest->subscription->period->to = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-28T10:26:44.811Z');
    $request->subscriptionRequest->subscription->purpose = new UsePurpose();
    $request->subscriptionRequest->subscription->purpose->code = 'minus';
    $request->subscriptionRequest->subscription->purpose->refUri = 'http://well-off-curtailment.info';
    $request->subscriptionRequest->subscription->purpose->text = 'blanditiis';
    $request->subscriptionRequest->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-02-03T18:48:04.995Z');

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
    $request->authorization = 'nulla';
    $request->requestBody = 'quas';

    $response = $sdk->subscriptions->postV05SubscriptionRequestsCmInitRaw($request);

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
    $request->authorization = 'esse';
    $request->hiuSubscriptionRequestNotificationAcknowledgement = new HIUSubscriptionRequestNotificationAcknowledgement();
    $request->hiuSubscriptionRequestNotificationAcknowledgement->acknowledgement = new HIUSubscriptionRequestNotificationAcknowledgementAcknowledgement();
    $request->hiuSubscriptionRequestNotificationAcknowledgement->acknowledgement->status = HIUSubscriptionRequestNotificationAcknowledgementAcknowledgementStatusEnum::OK;
    $request->hiuSubscriptionRequestNotificationAcknowledgement->acknowledgement->subscriptionRequestId = 'subscription Id';
    $request->hiuSubscriptionRequestNotificationAcknowledgement->error = new Error();
    $request->hiuSubscriptionRequestNotificationAcknowledgement->error->code = ErrorCodeEnum::ONE_THOUSAND;
    $request->hiuSubscriptionRequestNotificationAcknowledgement->error->message = 'a';
    $request->hiuSubscriptionRequestNotificationAcknowledgement->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->hiuSubscriptionRequestNotificationAcknowledgement->resp = new RequestReference();
    $request->hiuSubscriptionRequestNotificationAcknowledgement->resp->requestId = '99dd2efd-121a-4a6f-9e67-4bdb04f15756';
    $request->hiuSubscriptionRequestNotificationAcknowledgement->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-20T21:00:03.729Z');

    $response = $sdk->subscriptions->postV05SubscriptionRequestsHiuOnNotify($request);

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
    $request->authorization = 'qui';
    $request->hiuSubscriptionNotificationAcknowledgment = new HIUSubscriptionNotificationAcknowledgment();
    $request->hiuSubscriptionNotificationAcknowledgment->acknowledgement = new HIUSubscriptionNotificationAcknowledgmentAcknowledgement();
    $request->hiuSubscriptionNotificationAcknowledgment->acknowledgement->eventId = 'subscription event Id';
    $request->hiuSubscriptionNotificationAcknowledgment->acknowledgement->status = HIUSubscriptionNotificationAcknowledgmentAcknowledgementStatusEnum::OK;
    $request->hiuSubscriptionNotificationAcknowledgment->error = new Error();
    $request->hiuSubscriptionNotificationAcknowledgment->error->code = ErrorCodeEnum::TEN_THOUSAND_AND_ONE;
    $request->hiuSubscriptionNotificationAcknowledgment->error->message = 'ex';
    $request->hiuSubscriptionNotificationAcknowledgment->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->hiuSubscriptionNotificationAcknowledgment->resp = new RequestReference();
    $request->hiuSubscriptionNotificationAcknowledgment->resp->requestId = '8ea19f1d-1705-4133-9d08-086a1840394c';
    $request->hiuSubscriptionNotificationAcknowledgment->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-16T16:15:17.905Z');

    $response = $sdk->subscriptions->postV05SubscriptionsHiuOnNotify($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
