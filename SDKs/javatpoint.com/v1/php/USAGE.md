<!-- Start SDK Example Usage -->
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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->sendMessageRequest = new SendMessageRequest();
    $request->sendMessageRequest->message = new Message();
    $request->sendMessageRequest->message->android = new AndroidConfig();
    $request->sendMessageRequest->message->android->collapseKey = 'provident';
    $request->sendMessageRequest->message->android->data = [
        'quibusdam' => 'unde',
        'nulla' => 'corrupti',
        'illum' => 'vel',
    ];
    $request->sendMessageRequest->message->android->directBootOk = false;
    $request->sendMessageRequest->message->android->fcmOptions = new AndroidFcmOptions();
    $request->sendMessageRequest->message->android->fcmOptions->analyticsLabel = 'error';
    $request->sendMessageRequest->message->android->notification = new AndroidNotification();
    $request->sendMessageRequest->message->android->notification->body = 'deserunt';
    $request->sendMessageRequest->message->android->notification->bodyLocArgs = [
        'iure',
        'magnam',
    ];
    $request->sendMessageRequest->message->android->notification->bodyLocKey = 'debitis';
    $request->sendMessageRequest->message->android->notification->bypassProxyNotification = false;
    $request->sendMessageRequest->message->android->notification->channelId = 'ipsa';
    $request->sendMessageRequest->message->android->notification->clickAction = 'delectus';
    $request->sendMessageRequest->message->android->notification->color = 'tempora';
    $request->sendMessageRequest->message->android->notification->defaultLightSettings = false;
    $request->sendMessageRequest->message->android->notification->defaultSound = false;
    $request->sendMessageRequest->message->android->notification->defaultVibrateTimings = false;
    $request->sendMessageRequest->message->android->notification->eventTime = 'suscipit';
    $request->sendMessageRequest->message->android->notification->icon = 'molestiae';
    $request->sendMessageRequest->message->android->notification->image = 'minus';
    $request->sendMessageRequest->message->android->notification->lightSettings = new LightSettings();
    $request->sendMessageRequest->message->android->notification->lightSettings->color = new Color();
    $request->sendMessageRequest->message->android->notification->lightSettings->color->alpha = 8121.69;
    $request->sendMessageRequest->message->android->notification->lightSettings->color->blue = 5288.95;
    $request->sendMessageRequest->message->android->notification->lightSettings->color->green = 4799.77;
    $request->sendMessageRequest->message->android->notification->lightSettings->color->red = 5680.45;
    $request->sendMessageRequest->message->android->notification->lightSettings->lightOffDuration = 'nisi';
    $request->sendMessageRequest->message->android->notification->lightSettings->lightOnDuration = 'recusandae';
    $request->sendMessageRequest->message->android->notification->localOnly = false;
    $request->sendMessageRequest->message->android->notification->notificationCount = 836079;
    $request->sendMessageRequest->message->android->notification->notificationPriority = AndroidNotificationNotificationPriorityEnum::PRIORITY_UNSPECIFIED;
    $request->sendMessageRequest->message->android->notification->sound = 'quis';
    $request->sendMessageRequest->message->android->notification->sticky = false;
    $request->sendMessageRequest->message->android->notification->tag = 'veritatis';
    $request->sendMessageRequest->message->android->notification->ticker = 'deserunt';
    $request->sendMessageRequest->message->android->notification->title = 'Mr.';
    $request->sendMessageRequest->message->android->notification->titleLocArgs = [
        'repellendus',
        'sapiente',
    ];
    $request->sendMessageRequest->message->android->notification->titleLocKey = 'quo';
    $request->sendMessageRequest->message->android->notification->vibrateTimings = [
        'at',
    ];
    $request->sendMessageRequest->message->android->notification->visibility = AndroidNotificationVisibilityEnum::SECRET;
    $request->sendMessageRequest->message->android->priority = AndroidConfigPriorityEnum::HIGH;
    $request->sendMessageRequest->message->android->restrictedPackageName = 'molestiae';
    $request->sendMessageRequest->message->android->ttl = 'quod';
    $request->sendMessageRequest->message->apns = new ApnsConfig();
    $request->sendMessageRequest->message->apns->fcmOptions = new ApnsFcmOptions();
    $request->sendMessageRequest->message->apns->fcmOptions->analyticsLabel = 'quod';
    $request->sendMessageRequest->message->apns->fcmOptions->image = 'esse';
    $request->sendMessageRequest->message->apns->headers = [
        'porro' => 'dolorum',
        'dicta' => 'nam',
        'officia' => 'occaecati',
    ];
    $request->sendMessageRequest->message->apns->payload = [
        'deleniti' => 'hic',
    ];
    $request->sendMessageRequest->message->condition = 'optio';
    $request->sendMessageRequest->message->data = [
        'beatae' => 'commodi',
        'molestiae' => 'modi',
        'qui' => 'impedit',
    ];
    $request->sendMessageRequest->message->fcmOptions = new FcmOptions();
    $request->sendMessageRequest->message->fcmOptions->analyticsLabel = 'cum';
    $request->sendMessageRequest->message->name = 'Edna Mante II';
    $request->sendMessageRequest->message->notification = new Notification();
    $request->sendMessageRequest->message->notification->body = 'natus';
    $request->sendMessageRequest->message->notification->image = 'sed';
    $request->sendMessageRequest->message->notification->title = 'Miss';
    $request->sendMessageRequest->message->token = 'dolor';
    $request->sendMessageRequest->message->topic = 'natus';
    $request->sendMessageRequest->message->webpush = new WebpushConfig();
    $request->sendMessageRequest->message->webpush->data = [
        'hic' => 'saepe',
        'fuga' => 'in',
    ];
    $request->sendMessageRequest->message->webpush->fcmOptions = new WebpushFcmOptions();
    $request->sendMessageRequest->message->webpush->fcmOptions->analyticsLabel = 'corporis';
    $request->sendMessageRequest->message->webpush->fcmOptions->link = 'iste';
    $request->sendMessageRequest->message->webpush->headers = [
        'saepe' => 'quidem',
        'architecto' => 'ipsa',
    ];
    $request->sendMessageRequest->message->webpush->notification = [
        'est' => 'mollitia',
        'laborum' => 'dolores',
        'dolorem' => 'corporis',
        'explicabo' => 'nobis',
    ];
    $request->sendMessageRequest->validateOnly = false;
    $request->accessToken = 'enim';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nemo';
    $request->fields = 'minima';
    $request->key = 'excepturi';
    $request->oauthToken = 'accusantium';
    $request->parent = 'iure';
    $request->prettyPrint = false;
    $request->quotaUser = 'culpa';
    $request->uploadType = 'doloribus';
    $request->uploadProtocol = 'sapiente';

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
<!-- End SDK Example Usage -->