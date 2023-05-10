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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->sendMessageRequest = new SendMessageRequest();
    $request->sendMessageRequest->message = new Message();
    $request->sendMessageRequest->message->android = new AndroidConfig();
    $request->sendMessageRequest->message->android->collapseKey = 'mollitia';
    $request->sendMessageRequest->message->android->data = [
        'culpa' => 'consequuntur',
    ];
    $request->sendMessageRequest->message->android->directBootOk = false;
    $request->sendMessageRequest->message->android->fcmOptions = new AndroidFcmOptions();
    $request->sendMessageRequest->message->android->fcmOptions->analyticsLabel = 'repellat';
    $request->sendMessageRequest->message->android->notification = new AndroidNotification();
    $request->sendMessageRequest->message->android->notification->body = 'mollitia';
    $request->sendMessageRequest->message->android->notification->bodyLocArgs = [
        'numquam',
        'commodi',
        'quam',
    ];
    $request->sendMessageRequest->message->android->notification->bodyLocKey = 'molestiae';
    $request->sendMessageRequest->message->android->notification->bypassProxyNotification = false;
    $request->sendMessageRequest->message->android->notification->channelId = 'velit';
    $request->sendMessageRequest->message->android->notification->clickAction = 'error';
    $request->sendMessageRequest->message->android->notification->color = 'quia';
    $request->sendMessageRequest->message->android->notification->defaultLightSettings = false;
    $request->sendMessageRequest->message->android->notification->defaultSound = false;
    $request->sendMessageRequest->message->android->notification->defaultVibrateTimings = false;
    $request->sendMessageRequest->message->android->notification->eventTime = 'quis';
    $request->sendMessageRequest->message->android->notification->icon = 'vitae';
    $request->sendMessageRequest->message->android->notification->image = 'laborum';
    $request->sendMessageRequest->message->android->notification->lightSettings = new LightSettings();
    $request->sendMessageRequest->message->android->notification->lightSettings->color = new Color();
    $request->sendMessageRequest->message->android->notification->lightSettings->color->alpha = 6563.3;
    $request->sendMessageRequest->message->android->notification->lightSettings->color->blue = 3172.02;
    $request->sendMessageRequest->message->android->notification->lightSettings->color->green = 1381.83;
    $request->sendMessageRequest->message->android->notification->lightSettings->color->red = 7783.46;
    $request->sendMessageRequest->message->android->notification->lightSettings->lightOffDuration = 'sequi';
    $request->sendMessageRequest->message->android->notification->lightSettings->lightOnDuration = 'tenetur';
    $request->sendMessageRequest->message->android->notification->localOnly = false;
    $request->sendMessageRequest->message->android->notification->notificationCount = 368725;
    $request->sendMessageRequest->message->android->notification->notificationPriority = AndroidNotificationNotificationPriorityEnum::PRIORITY_DEFAULT;
    $request->sendMessageRequest->message->android->notification->sound = 'possimus';
    $request->sendMessageRequest->message->android->notification->sticky = false;
    $request->sendMessageRequest->message->android->notification->tag = 'aut';
    $request->sendMessageRequest->message->android->notification->ticker = 'quasi';
    $request->sendMessageRequest->message->android->notification->title = 'Miss';
    $request->sendMessageRequest->message->android->notification->titleLocArgs = [
        'laborum',
        'quasi',
        'reiciendis',
        'voluptatibus',
    ];
    $request->sendMessageRequest->message->android->notification->titleLocKey = 'vero';
    $request->sendMessageRequest->message->android->notification->vibrateTimings = [
        'praesentium',
        'voluptatibus',
    ];
    $request->sendMessageRequest->message->android->notification->visibility = AndroidNotificationVisibilityEnum::VISIBILITY_UNSPECIFIED;
    $request->sendMessageRequest->message->android->priority = AndroidConfigPriorityEnum::HIGH;
    $request->sendMessageRequest->message->android->restrictedPackageName = 'voluptate';
    $request->sendMessageRequest->message->android->ttl = 'cum';
    $request->sendMessageRequest->message->apns = new ApnsConfig();
    $request->sendMessageRequest->message->apns->fcmOptions = new ApnsFcmOptions();
    $request->sendMessageRequest->message->apns->fcmOptions->analyticsLabel = 'perferendis';
    $request->sendMessageRequest->message->apns->fcmOptions->image = 'doloremque';
    $request->sendMessageRequest->message->apns->headers = [
        'ut' => 'maiores',
        'dicta' => 'corporis',
    ];
    $request->sendMessageRequest->message->apns->payload = [
        'iusto' => 'dicta',
        'harum' => 'enim',
    ];
    $request->sendMessageRequest->message->condition = 'accusamus';
    $request->sendMessageRequest->message->data = [
        'repudiandae' => 'quae',
        'ipsum' => 'quidem',
    ];
    $request->sendMessageRequest->message->fcmOptions = new FcmOptions();
    $request->sendMessageRequest->message->fcmOptions->analyticsLabel = 'molestias';
    $request->sendMessageRequest->message->name = 'Ervin Gleason';
    $request->sendMessageRequest->message->notification = new Notification();
    $request->sendMessageRequest->message->notification->body = 'voluptates';
    $request->sendMessageRequest->message->notification->image = 'quasi';
    $request->sendMessageRequest->message->notification->title = 'Dr.';
    $request->sendMessageRequest->message->token = 'sint';
    $request->sendMessageRequest->message->topic = 'veritatis';
    $request->sendMessageRequest->message->webpush = new WebpushConfig();
    $request->sendMessageRequest->message->webpush->data = [
        'incidunt' => 'enim',
        'consequatur' => 'est',
        'quibusdam' => 'explicabo',
        'deserunt' => 'distinctio',
    ];
    $request->sendMessageRequest->message->webpush->fcmOptions = new WebpushFcmOptions();
    $request->sendMessageRequest->message->webpush->fcmOptions->analyticsLabel = 'quibusdam';
    $request->sendMessageRequest->message->webpush->fcmOptions->link = 'labore';
    $request->sendMessageRequest->message->webpush->headers = [
        'qui' => 'aliquid',
        'cupiditate' => 'quos',
    ];
    $request->sendMessageRequest->message->webpush->notification = [
        'magni' => 'assumenda',
    ];
    $request->sendMessageRequest->validateOnly = false;
    $request->accessToken = 'ipsam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'fugit';
    $request->fields = 'dolorum';
    $request->key = 'excepturi';
    $request->oauthToken = 'tempora';
    $request->parent = 'facilis';
    $request->prettyPrint = false;
    $request->quotaUser = 'tempore';
    $request->uploadType = 'labore';
    $request->uploadProtocol = 'delectus';

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
