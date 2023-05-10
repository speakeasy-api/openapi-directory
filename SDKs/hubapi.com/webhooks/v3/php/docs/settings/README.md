# settings

## Overview

Operations to manage app-level webhook settings.

### Available Operations

* [deleteWebhooksV3AppIdSettingsClear](#deletewebhooksv3appidsettingsclear)
* [getWebhooksV3AppIdSettingsGetAll](#getwebhooksv3appidsettingsgetall)
* [putWebhooksV3AppIdSettingsConfigure](#putwebhooksv3appidsettingsconfigure)

## deleteWebhooksV3AppIdSettingsClear

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWebhooksV3AppIdSettingsClearRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWebhooksV3AppIdSettingsClearSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteWebhooksV3AppIdSettingsClearRequest();
    $request->appId = 592845;

    $requestSecurity = new DeleteWebhooksV3AppIdSettingsClearSecurity();
    $requestSecurity->developerHapikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->settings->deleteWebhooksV3AppIdSettingsClear($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWebhooksV3AppIdSettingsGetAll

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetWebhooksV3AppIdSettingsGetAllRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetWebhooksV3AppIdSettingsGetAllSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWebhooksV3AppIdSettingsGetAllRequest();
    $request->appId = 715190;

    $requestSecurity = new GetWebhooksV3AppIdSettingsGetAllSecurity();
    $requestSecurity->developerHapikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->settings->getWebhooksV3AppIdSettingsGetAll($request, $requestSecurity);

    if ($response->settingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putWebhooksV3AppIdSettingsConfigure

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutWebhooksV3AppIdSettingsConfigureRequest;
use \OpenAPI\OpenAPI\Models\Shared\SettingsChangeRequest;
use \OpenAPI\OpenAPI\Models\Shared\ThrottlingSettings;
use \OpenAPI\OpenAPI\Models\Shared\ThrottlingSettingsPeriodEnum;
use \OpenAPI\OpenAPI\Models\Operations\PutWebhooksV3AppIdSettingsConfigureSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutWebhooksV3AppIdSettingsConfigureRequest();
    $request->settingsChangeRequest = new SettingsChangeRequest();
    $request->settingsChangeRequest->targetUrl = 'quibusdam';
    $request->settingsChangeRequest->throttling = new ThrottlingSettings();
    $request->settingsChangeRequest->throttling->maxConcurrentRequests = 602763;
    $request->settingsChangeRequest->throttling->period = ThrottlingSettingsPeriodEnum::ROLLING_MINUTE;
    $request->appId = 544883;

    $requestSecurity = new PutWebhooksV3AppIdSettingsConfigureSecurity();
    $requestSecurity->developerHapikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->settings->putWebhooksV3AppIdSettingsConfigure($request, $requestSecurity);

    if ($response->settingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
