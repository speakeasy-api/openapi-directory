# configuration

## Overview

Everything about Otoroshi global configuration

### Available Operations

* [globalConfig](#globalconfig) - Get the full configuration of Otoroshi
* [patchGlobalConfig](#patchglobalconfig) - Update the global configuration with a diff
* [putGlobalConfig](#putglobalconfig) - Update the global configuration

## globalConfig

Get the full configuration of Otoroshi

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GlobalConfigSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new GlobalConfigSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->configuration->globalConfig($requestSecurity);

    if ($response->globalConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchGlobalConfig

Update the global configuration with a diff

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Patch;
use \OpenAPI\OpenAPI\Models\Shared\PatchOpEnum;
use \OpenAPI\OpenAPI\Models\Operations\PatchGlobalConfigSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        new Patch(),
        new Patch(),
        new Patch(),
    ]

    $requestSecurity = new PatchGlobalConfigSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->configuration->patchGlobalConfig($request, $requestSecurity);

    if ($response->globalConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putGlobalConfig

Update the global configuration

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\GlobalConfig;
use \OpenAPI\OpenAPI\Models\Shared\Webhook;
use \OpenAPI\OpenAPI\Models\Shared\Auth0Config;
use \OpenAPI\OpenAPI\Models\Shared\CleverSettings;
use \OpenAPI\OpenAPI\Models\Shared\ElasticConfig;
use \OpenAPI\OpenAPI\Models\Shared\IpFiltering;
use \OpenAPI\OpenAPI\Models\Shared\MailerSettings;
use \OpenAPI\OpenAPI\Models\Operations\PutGlobalConfigSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GlobalConfig();
    $request->alertsEmails = [
        'admin@otoroshi.io',
        'admin@otoroshi.io',
    ];
    $request->alertsWebhooks = [
        new Webhook(),
        new Webhook(),
    ];
    $request->analyticsWebhooks = [
        new Webhook(),
        new Webhook(),
    ];
    $request->apiReadOnly = true;
    $request->autoLinkToDefaultGroup = true;
    $request->backofficeAuth0Config = new Auth0Config();
    $request->backofficeAuth0Config->callbackUrl = 'a string value';
    $request->backofficeAuth0Config->clientId = 'a string value';
    $request->backofficeAuth0Config->clientSecret = 'a string value';
    $request->backofficeAuth0Config->domain = 'a string value';
    $request->cleverSettings = new CleverSettings();
    $request->cleverSettings->consumerKey = 'a string value';
    $request->cleverSettings->consumerSecret = 'a string value';
    $request->cleverSettings->orgaId = 'a string value';
    $request->cleverSettings->secret = 'a string value';
    $request->cleverSettings->token = 'a string value';
    $request->elasticReadsConfig = new ElasticConfig();
    $request->elasticReadsConfig->clusterUri = 'a string value';
    $request->elasticReadsConfig->headers = [
        'eaque' => 'pariatur',
        'nemo' => 'voluptatibus',
        'perferendis' => 'fugiat',
    ];
    $request->elasticReadsConfig->index = 'a string value';
    $request->elasticReadsConfig->password = 'a string value';
    $request->elasticReadsConfig->type = 'a string value';
    $request->elasticReadsConfig->user = 'a string value';
    $request->elasticWritesConfigs = [
        new ElasticConfig(),
    ];
    $request->endlessIpAddresses = [
        '192.192.192.192',
    ];
    $request->ipFiltering = new IpFiltering();
    $request->ipFiltering->blacklist = [
        '192.192.192.192',
        '192.192.192.192',
        '192.192.192.192',
        '192.192.192.192',
    ];
    $request->ipFiltering->whitelist = [
        '192.192.192.192',
        '192.192.192.192',
    ];
    $request->limitConcurrentRequests = true;
    $request->lines = [
        'a string value',
        'a string value',
        'a string value',
        'a string value',
    ];
    $request->mailerSettings = new MailerSettings();
    $request->mailerSettings->apiKey = 'a string value';
    $request->mailerSettings->apiKeyPrivate = 'a string value';
    $request->mailerSettings->apiKeyPublic = 'a string value';
    $request->mailerSettings->domain = 'a string value';
    $request->mailerSettings->eu = true;
    $request->mailerSettings->header = [
        'nobis' => 'dolores',
        'quis' => 'totam',
        'dignissimos' => 'eaque',
    ];
    $request->mailerSettings->type = 'a string value';
    $request->mailerSettings->url = 'a string value';
    $request->maxConcurrentRequests = 123;
    $request->maxHttp10ResponseSize = 123;
    $request->maxLogsSize = 123123;
    $request->middleFingers = true;
    $request->perIpThrottlingQuota = 123;
    $request->privateAppsAuth0Config = new Auth0Config();
    $request->privateAppsAuth0Config->callbackUrl = 'a string value';
    $request->privateAppsAuth0Config->clientId = 'a string value';
    $request->privateAppsAuth0Config->clientSecret = 'a string value';
    $request->privateAppsAuth0Config->domain = 'a string value';
    $request->streamEntityOnly = true;
    $request->throttlingQuota = 123;
    $request->u2fLoginOnly = true;
    $request->useCircuitBreakers = true;

    $requestSecurity = new PutGlobalConfigSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->configuration->putGlobalConfig($request, $requestSecurity);

    if ($response->globalConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
