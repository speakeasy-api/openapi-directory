# customchannels

### Available Operations

* [adsensehostCustomchannelsDelete](#adsensehostcustomchannelsdelete) - Delete a specific custom channel from the host AdSense account.
* [adsensehostCustomchannelsGet](#adsensehostcustomchannelsget) - Get a specific custom channel from the host AdSense account.
* [adsensehostCustomchannelsInsert](#adsensehostcustomchannelsinsert) - Add a new custom channel to the host AdSense account.
* [adsensehostCustomchannelsList](#adsensehostcustomchannelslist) - List all host custom channels in this AdSense account.
* [adsensehostCustomchannelsPatch](#adsensehostcustomchannelspatch) - Update a custom channel in the host AdSense account. This method supports patch semantics.
* [adsensehostCustomchannelsUpdate](#adsensehostcustomchannelsupdate) - Update a custom channel in the host AdSense account.

## adsensehostCustomchannelsDelete

Delete a specific custom channel from the host AdSense account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdsensehostCustomchannelsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsensehostCustomchannelsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdsensehostCustomchannelsDeleteRequest();
    $request->adClientId = 'libero';
    $request->alt = AltEnum::JSON;
    $request->customChannelId = 'dolores';
    $request->fields = 'quis';
    $request->key = 'totam';
    $request->oauthToken = 'dignissimos';
    $request->prettyPrint = false;
    $request->quotaUser = 'eaque';
    $request->userIp = 'quis';

    $requestSecurity = new AdsensehostCustomchannelsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customchannels->adsensehostCustomchannelsDelete($request, $requestSecurity);

    if ($response->customChannel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adsensehostCustomchannelsGet

Get a specific custom channel from the host AdSense account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdsensehostCustomchannelsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsensehostCustomchannelsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdsensehostCustomchannelsGetRequest();
    $request->adClientId = 'nesciunt';
    $request->alt = AltEnum::CSV;
    $request->customChannelId = 'perferendis';
    $request->fields = 'dolores';
    $request->key = 'minus';
    $request->oauthToken = 'quam';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolor';
    $request->userIp = 'vero';

    $requestSecurity = new AdsensehostCustomchannelsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customchannels->adsensehostCustomchannelsGet($request, $requestSecurity);

    if ($response->customChannel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adsensehostCustomchannelsInsert

Add a new custom channel to the host AdSense account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdsensehostCustomchannelsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\CustomChannel;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsensehostCustomchannelsInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdsensehostCustomchannelsInsertRequest();
    $request->customChannel = new CustomChannel();
    $request->customChannel->code = 'nostrum';
    $request->customChannel->id = 'fe9b90c2-8909-4b3f-a49a-8d9cbf486333';
    $request->customChannel->kind = 'qui';
    $request->customChannel->name = 'Mindy Marks';
    $request->adClientId = 'dignissimos';
    $request->alt = AltEnum::JSON;
    $request->fields = 'amet';
    $request->key = 'dolorum';
    $request->oauthToken = 'numquam';
    $request->prettyPrint = false;
    $request->quotaUser = 'veritatis';
    $request->userIp = 'ipsa';

    $requestSecurity = new AdsensehostCustomchannelsInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customchannels->adsensehostCustomchannelsInsert($request, $requestSecurity);

    if ($response->customChannel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adsensehostCustomchannelsList

List all host custom channels in this AdSense account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdsensehostCustomchannelsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsensehostCustomchannelsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdsensehostCustomchannelsListRequest();
    $request->adClientId = 'ipsa';
    $request->alt = AltEnum::CSV;
    $request->fields = 'odio';
    $request->key = 'quaerat';
    $request->maxResults = 881005;
    $request->oauthToken = 'quidem';
    $request->pageToken = 'voluptatibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptas';
    $request->userIp = 'natus';

    $requestSecurity = new AdsensehostCustomchannelsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customchannels->adsensehostCustomchannelsList($request, $requestSecurity);

    if ($response->customChannels !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adsensehostCustomchannelsPatch

Update a custom channel in the host AdSense account. This method supports patch semantics.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdsensehostCustomchannelsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\CustomChannel;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsensehostCustomchannelsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdsensehostCustomchannelsPatchRequest();
    $request->customChannel = new CustomChannel();
    $request->customChannel->code = 'eos';
    $request->customChannel->id = '80d1ba77-a89e-4bf7-b7ae-4203ce5e6a95';
    $request->customChannel->kind = 'repellendus';
    $request->customChannel->name = 'Donnie Abbott';
    $request->adClientId = 'tempora';
    $request->alt = AltEnum::CSV;
    $request->customChannelId = 'quod';
    $request->fields = 'officiis';
    $request->key = 'qui';
    $request->oauthToken = 'dolorum';
    $request->prettyPrint = false;
    $request->quotaUser = 'a';
    $request->userIp = 'esse';

    $requestSecurity = new AdsensehostCustomchannelsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customchannels->adsensehostCustomchannelsPatch($request, $requestSecurity);

    if ($response->customChannel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adsensehostCustomchannelsUpdate

Update a custom channel in the host AdSense account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdsensehostCustomchannelsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\CustomChannel;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsensehostCustomchannelsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdsensehostCustomchannelsUpdateRequest();
    $request->customChannel = new CustomChannel();
    $request->customChannel->code = 'harum';
    $request->customChannel->id = '73cf3be4-53f8-470b-b26b-5a73429cdb1a';
    $request->customChannel->kind = 'totam';
    $request->customChannel->name = 'Kelly Daniel';
    $request->adClientId = 'aliquid';
    $request->alt = AltEnum::CSV;
    $request->fields = 'molestias';
    $request->key = 'temporibus';
    $request->oauthToken = 'qui';
    $request->prettyPrint = false;
    $request->quotaUser = 'neque';
    $request->userIp = 'fugit';

    $requestSecurity = new AdsensehostCustomchannelsUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customchannels->adsensehostCustomchannelsUpdate($request, $requestSecurity);

    if ($response->customChannel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
