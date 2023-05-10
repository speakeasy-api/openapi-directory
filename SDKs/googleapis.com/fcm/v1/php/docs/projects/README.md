# projects

### Available Operations

* [fcmProjectsMessagesSend](#fcmprojectsmessagessend) - Send a message to specified target (a registration token, topic or condition).

## fcmProjectsMessagesSend

Send a message to specified target (a registration token, topic or condition).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FcmProjectsMessagesSendRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SendMessageRequest;
use \OpenAPI\OpenAPI\Models\Shared\Message;
use \OpenAPI\OpenAPI\Models\Shared\AndroidConfig;
use \OpenAPI\OpenAPI\Models\Shared\AndroidFcmOptions;
use \OpenAPI\OpenAPI\Models\Shared\AndroidNotification;
use \OpenAPI\OpenAPI\Models\Shared\LightSettings;
use \OpenAPI\OpenAPI\Models\Shared\Color;
use \OpenAPI\OpenAPI\Models\Shared\AndroidNotificationNotificationPriorityEnum;
use \OpenAPI\OpenAPI\Models\Shared\AndroidNotificationProxyEnum;
use \OpenAPI\OpenAPI\Models\Shared\AndroidNotificationVisibilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\AndroidConfigPriorityEnum;
use \OpenAPI\OpenAPI\Models\Shared\ApnsConfig;
use \OpenAPI\OpenAPI\Models\Shared\ApnsFcmOptions;
use \OpenAPI\OpenAPI\Models\Shared\FcmOptions;
use \OpenAPI\OpenAPI\Models\Shared\Notification;
use \OpenAPI\OpenAPI\Models\Shared\WebpushConfig;
use \OpenAPI\OpenAPI\Models\Shared\WebpushFcmOptions;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FcmProjectsMessagesSendSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FcmProjectsMessagesSendSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FcmProjectsMessagesSendSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FcmProjectsMessagesSendRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->sendMessageRequest = new SendMessageRequest();
    $request->sendMessageRequest->message = new Message();
    $request->sendMessageRequest->message->android = new AndroidConfig();
    $request->sendMessageRequest->message->android->collapseKey = 'mollitia';
    $request->sendMessageRequest->message->android->data = [
        'numquam' => 'commodi',
        'quam' => 'molestiae',
        'velit' => 'error',
    ];
    $request->sendMessageRequest->message->android->directBootOk = false;
    $request->sendMessageRequest->message->android->fcmOptions = new AndroidFcmOptions();
    $request->sendMessageRequest->message->android->fcmOptions->analyticsLabel = 'quia';
    $request->sendMessageRequest->message->android->notification = new AndroidNotification();
    $request->sendMessageRequest->message->android->notification->body = 'quis';
    $request->sendMessageRequest->message->android->notification->bodyLocArgs = [
        'laborum',
    ];
    $request->sendMessageRequest->message->android->notification->bodyLocKey = 'animi';
    $request->sendMessageRequest->message->android->notification->bypassProxyNotification = false;
    $request->sendMessageRequest->message->android->notification->channelId = 'enim';
    $request->sendMessageRequest->message->android->notification->clickAction = 'odit';
    $request->sendMessageRequest->message->android->notification->color = 'quo';
    $request->sendMessageRequest->message->android->notification->defaultLightSettings = false;
    $request->sendMessageRequest->message->android->notification->defaultSound = false;
    $request->sendMessageRequest->message->android->notification->defaultVibrateTimings = false;
    $request->sendMessageRequest->message->android->notification->eventTime = 'sequi';
    $request->sendMessageRequest->message->android->notification->icon = 'tenetur';
    $request->sendMessageRequest->message->android->notification->image = 'ipsam';
    $request->sendMessageRequest->message->android->notification->lightSettings = new LightSettings();
    $request->sendMessageRequest->message->android->notification->lightSettings->color = new Color();
    $request->sendMessageRequest->message->android->notification->lightSettings->color->alpha = 6625.27;
    $request->sendMessageRequest->message->android->notification->lightSettings->color->blue = 8209.94;
    $request->sendMessageRequest->message->android->notification->lightSettings->color->green = 135.71;
    $request->sendMessageRequest->message->android->notification->lightSettings->color->red = 971.01;
    $request->sendMessageRequest->message->android->notification->lightSettings->lightOffDuration = 'error';
    $request->sendMessageRequest->message->android->notification->lightSettings->lightOnDuration = 'temporibus';
    $request->sendMessageRequest->message->android->notification->localOnly = false;
    $request->sendMessageRequest->message->android->notification->notificationCount = 673660;
    $request->sendMessageRequest->message->android->notification->notificationPriority = AndroidNotificationNotificationPriorityEnum::PRIORITY_UNSPECIFIED;
    $request->sendMessageRequest->message->android->notification->proxy = AndroidNotificationProxyEnum::IF_PRIORITY_LOWERED;
    $request->sendMessageRequest->message->android->notification->sound = 'voluptatibus';
    $request->sendMessageRequest->message->android->notification->sticky = false;
    $request->sendMessageRequest->message->android->notification->tag = 'vero';
    $request->sendMessageRequest->message->android->notification->ticker = 'nihil';
    $request->sendMessageRequest->message->android->notification->title = 'Ms.';
    $request->sendMessageRequest->message->android->notification->titleLocArgs = [
        'ipsa',
        'omnis',
        'voluptate',
        'cum',
    ];
    $request->sendMessageRequest->message->android->notification->titleLocKey = 'perferendis';
    $request->sendMessageRequest->message->android->notification->vibrateTimings = [
        'reprehenderit',
    ];
    $request->sendMessageRequest->message->android->notification->visibility = AndroidNotificationVisibilityEnum::PRIVATE;
    $request->sendMessageRequest->message->android->priority = AndroidConfigPriorityEnum::HIGH;
    $request->sendMessageRequest->message->android->restrictedPackageName = 'dicta';
    $request->sendMessageRequest->message->android->ttl = 'corporis';
    $request->sendMessageRequest->message->apns = new ApnsConfig();
    $request->sendMessageRequest->message->apns->fcmOptions = new ApnsFcmOptions();
    $request->sendMessageRequest->message->apns->fcmOptions->analyticsLabel = 'dolore';
    $request->sendMessageRequest->message->apns->fcmOptions->image = 'iusto';
    $request->sendMessageRequest->message->apns->headers = [
        'harum' => 'enim',
    ];
    $request->sendMessageRequest->message->apns->payload = [
        'commodi' => 'repudiandae',
        'quae' => 'ipsum',
        'quidem' => 'molestias',
        'excepturi' => 'pariatur',
    ];
    $request->sendMessageRequest->message->condition = 'modi';
    $request->sendMessageRequest->message->data = [
        'rem' => 'voluptates',
        'quasi' => 'repudiandae',
        'sint' => 'veritatis',
    ];
    $request->sendMessageRequest->message->fcmOptions = new FcmOptions();
    $request->sendMessageRequest->message->fcmOptions->analyticsLabel = 'itaque';
    $request->sendMessageRequest->message->name = 'Erin Altenwerth';
    $request->sendMessageRequest->message->notification = new Notification();
    $request->sendMessageRequest->message->notification->body = 'explicabo';
    $request->sendMessageRequest->message->notification->image = 'deserunt';
    $request->sendMessageRequest->message->notification->title = 'Miss';
    $request->sendMessageRequest->message->token = 'quibusdam';
    $request->sendMessageRequest->message->topic = 'labore';
    $request->sendMessageRequest->message->webpush = new WebpushConfig();
    $request->sendMessageRequest->message->webpush->data = [
        'qui' => 'aliquid',
        'cupiditate' => 'quos',
    ];
    $request->sendMessageRequest->message->webpush->fcmOptions = new WebpushFcmOptions();
    $request->sendMessageRequest->message->webpush->fcmOptions->analyticsLabel = 'perferendis';
    $request->sendMessageRequest->message->webpush->fcmOptions->link = 'magni';
    $request->sendMessageRequest->message->webpush->headers = [
        'ipsam' => 'alias',
        'fugit' => 'dolorum',
        'excepturi' => 'tempora',
        'facilis' => 'tempore',
    ];
    $request->sendMessageRequest->message->webpush->notification = [
        'delectus' => 'eum',
        'non' => 'eligendi',
    ];
    $request->sendMessageRequest->validateOnly = false;
    $request->accessToken = 'sint';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'provident';
    $request->fields = 'necessitatibus';
    $request->key = 'sint';
    $request->oauthToken = 'officia';
    $request->parent = 'dolor';
    $request->prettyPrint = false;
    $request->quotaUser = 'debitis';
    $request->uploadType = 'a';
    $request->uploadProtocol = 'dolorum';

    $requestSecurity = new FcmProjectsMessagesSendSecurity();
    $requestSecurity->option1 = new FcmProjectsMessagesSendSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->fcmProjectsMessagesSend($request, $requestSecurity);

    if ($response->message !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
