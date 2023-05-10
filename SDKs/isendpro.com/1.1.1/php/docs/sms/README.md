# sms

### Available Operations

* [sendSms](#sendsms) - Envoyer un sms
* [sendSmsMulti](#sendsmsmulti) - Envoyer des SMS

## sendSms

Envoi un sms vers un unique destinataire

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SmsUniqueRequest;
use \OpenAPI\OpenAPI\Models\Shared\SmsUniqueRequestGmtZoneEnum;
use \OpenAPI\OpenAPI\Models\Shared\SmsUniqueRequestNumAzurEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SmsUniqueRequest();
    $request->dateEnvoi = 'vero';
    $request->emetteur = 'nihil';
    $request->gmtZone = SmsUniqueRequestGmtZoneEnum::AFRICA_WINDHOEK;
    $request->keyid = 'voluptatibus';
    $request->nostop = 'ipsa';
    $request->num = 'omnis';
    $request->numAzur = SmsUniqueRequestNumAzurEnum::ONE;
    $request->sms = 'voluptate';
    $request->smslong = 'cum';
    $request->tracker = 'perferendis';
    $request->ucs2 = 'doloremque';

    $response = $sdk->sms->sendSms($request);

    if ($response->smsReponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sendSmsMulti

Envoi de SMS vers 1 ou plusieurs destinataires


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SMSRequest;
use \OpenAPI\OpenAPI\Models\Shared\SMSRequestGmtZoneEnum;
use \OpenAPI\OpenAPI\Models\Shared\SMSRequestNumAzurEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SMSRequest();
    $request->dateEnvoi = 'reprehenderit';
    $request->emetteur = 'ut';
    $request->gmtZone = SMSRequestGmtZoneEnum::PACIFIC_TONGATAPU;
    $request->keyid = 'dicta';
    $request->nostop = 'corporis';
    $request->num = [
        'iusto',
        'dicta',
    ];
    $request->numAzur = SMSRequestNumAzurEnum::ONE;
    $request->repertoireId = 'harum';
    $request->sms = [
        'accusamus',
        'commodi',
    ];
    $request->smslong = 'repudiandae';
    $request->tracker = [
        'ipsum',
    ];
    $request->ucs2 = 'quidem';

    $response = $sdk->sms->sendSmsMulti($request);

    if ($response->smsReponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
