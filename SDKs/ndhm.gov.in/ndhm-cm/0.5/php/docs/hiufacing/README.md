# hiuFacing

### Available Operations

* [postV05SubscriptionsHiuOnNotify](#postv05subscriptionshiuonnotify) - Callback API for /subscriptions/hiu/notify to acknowledge receipt of notification.
* [postV05UsersAuthOnNotifyJson](#postv05usersauthonnotifyjson) - callback API from HIU/HIPs as acknowledgement of auth notification (in case of DIRECT auth)
* [postV05UsersAuthOnNotifyRaw](#postv05usersauthonnotifyraw) - callback API from HIU/HIPs as acknowledgement of auth notification (in case of DIRECT auth)

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
    $request->authorization = 'cumque';
    $request->hiuSubscriptionNotificationAcknowledgment = new HIUSubscriptionNotificationAcknowledgment();
    $request->hiuSubscriptionNotificationAcknowledgment->acknowledgement = new HIUSubscriptionNotificationAcknowledgmentAcknowledgement();
    $request->hiuSubscriptionNotificationAcknowledgment->acknowledgement->eventId = 'subscription event Id';
    $request->hiuSubscriptionNotificationAcknowledgment->acknowledgement->status = HIUSubscriptionNotificationAcknowledgmentAcknowledgementStatusEnum::OK;
    $request->hiuSubscriptionNotificationAcknowledgment->error = new Error();
    $request->hiuSubscriptionNotificationAcknowledgment->error->code = ErrorCodeEnum::TEN_THOUSAND_AND_ONE;
    $request->hiuSubscriptionNotificationAcknowledgment->error->message = 'nobis';
    $request->hiuSubscriptionNotificationAcknowledgment->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->hiuSubscriptionNotificationAcknowledgment->resp = new RequestReference();
    $request->hiuSubscriptionNotificationAcknowledgment->resp->requestId = '1e31b8b9-0f34-443a-9108-e0adcf4b9218';
    $request->hiuSubscriptionNotificationAcknowledgment->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-03T03:16:58.870Z');

    $response = $sdk->hiuFacing->postV05SubscriptionsHiuOnNotify($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05UsersAuthOnNotifyJson

This API is called by HIU/HIPs to confirm acknowledgement for receipt of auth notification is case of DIRECT authentication. 


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05UsersAuthOnNotifyJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\PatientAuthNotificationAcknowledgement;
use \OpenAPI\OpenAPI\Models\Shared\PatientAuthNotificationAcknowledgementAcknowledgement;
use \OpenAPI\OpenAPI\Models\Shared\PatientAuthNotificationAcknowledgementAcknowledgementStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\Error;
use \OpenAPI\OpenAPI\Models\Shared\ErrorCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RequestReference;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05UsersAuthOnNotifyJsonRequest();
    $request->authorization = 'voluptatibus';
    $request->patientAuthNotificationAcknowledgement = new PatientAuthNotificationAcknowledgement();
    $request->patientAuthNotificationAcknowledgement->acknowledgement = new PatientAuthNotificationAcknowledgementAcknowledgement();
    $request->patientAuthNotificationAcknowledgement->acknowledgement->status = PatientAuthNotificationAcknowledgementAcknowledgementStatusEnum::OK;
    $request->patientAuthNotificationAcknowledgement->error = new Error();
    $request->patientAuthNotificationAcknowledgement->error->code = ErrorCodeEnum::TEN_THOUSAND_AND_ONE;
    $request->patientAuthNotificationAcknowledgement->error->message = 'vero';
    $request->patientAuthNotificationAcknowledgement->requestId = '5f7a535d-a3fd-416b-b069-c97d021fbacd';
    $request->patientAuthNotificationAcknowledgement->resp = new RequestReference();
    $request->patientAuthNotificationAcknowledgement->resp->requestId = '953f73ef-7fbc-47ab-974d-d39c0f5d2cff';
    $request->patientAuthNotificationAcknowledgement->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-31T22:43:48.703Z');

    $response = $sdk->hiuFacing->postV05UsersAuthOnNotifyJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV05UsersAuthOnNotifyRaw

This API is called by HIU/HIPs to confirm acknowledgement for receipt of auth notification is case of DIRECT authentication. 


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV05UsersAuthOnNotifyRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV05UsersAuthOnNotifyRawRequest();
    $request->authorization = 'ducimus';
    $request->requestBody = 'alias';

    $response = $sdk->hiuFacing->postV05UsersAuthOnNotifyRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
