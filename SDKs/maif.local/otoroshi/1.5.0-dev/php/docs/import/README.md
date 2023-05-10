# import

## Overview

Everything about Otoroshi import/export

### Available Operations

* [fullExport](#fullexport) - Export the full state of Otoroshi
* [fullImport](#fullimport) - Import the full state of Otoroshi
* [fullImportFromFile](#fullimportfromfile) - Import the full state of Otoroshi as a file

## fullExport

Export the full state of Otoroshi

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FullExportSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new FullExportSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->import->fullExport($requestSecurity);

    if ($response->importExport !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fullImport

Import the full state of Otoroshi

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\ImportExport;
use \OpenAPI\OpenAPI\Models\Shared\ImportExportAdmins;
use \OpenAPI\OpenAPI\Models\Shared\ImportExportApiKeys;
use \OpenAPI\OpenAPI\Models\Shared\GlobalConfig;
use \OpenAPI\OpenAPI\Models\Shared\Webhook;
use \OpenAPI\OpenAPI\Models\Shared\Auth0Config;
use \OpenAPI\OpenAPI\Models\Shared\CleverSettings;
use \OpenAPI\OpenAPI\Models\Shared\ElasticConfig;
use \OpenAPI\OpenAPI\Models\Shared\IpFiltering;
use \OpenAPI\OpenAPI\Models\Shared\MailerSettings;
use \OpenAPI\OpenAPI\Models\Shared\ImportExportErrorTemplates;
use \OpenAPI\OpenAPI\Models\Shared\ImportExportServiceDescriptors;
use \OpenAPI\OpenAPI\Models\Shared\Canary;
use \OpenAPI\OpenAPI\Models\Shared\Target;
use \OpenAPI\OpenAPI\Models\Shared\ExposedApi;
use \OpenAPI\OpenAPI\Models\Shared\ChaosConfig;
use \OpenAPI\OpenAPI\Models\Shared\BadResponsesFaultConfig;
use \OpenAPI\OpenAPI\Models\Shared\BadResponse;
use \OpenAPI\OpenAPI\Models\Shared\LargeRequestFaultConfig;
use \OpenAPI\OpenAPI\Models\Shared\LargeResponseFaultConfig;
use \OpenAPI\OpenAPI\Models\Shared\LatencyInjectionFaultConfig;
use \OpenAPI\OpenAPI\Models\Shared\ClientConfig;
use \OpenAPI\OpenAPI\Models\Shared\CorsSettings;
use \OpenAPI\OpenAPI\Models\Shared\Gzip;
use \OpenAPI\OpenAPI\Models\Shared\HealthCheck;
use \OpenAPI\OpenAPI\Models\Shared\RedirectionSettings;
use \OpenAPI\OpenAPI\Models\Shared\StatsdConfig;
use \OpenAPI\OpenAPI\Models\Shared\ImportExportServiceGroups;
use \OpenAPI\OpenAPI\Models\Shared\ImportExportSimpleAdmins;
use \OpenAPI\OpenAPI\Models\Shared\ImportExportStats;
use \OpenAPI\OpenAPI\Models\Operations\FullImportSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImportExport();
    $request->admins = [
        new ImportExportAdmins(),
    ];
    $request->apiKeys = [
        new ImportExportApiKeys(),
        new ImportExportApiKeys(),
        new ImportExportApiKeys(),
    ];
    $request->appConfig = [
        'aut' => 'voluptatibus',
        'exercitationem' => 'nulla',
        'fugit' => 'porro',
        'maiores' => 'doloribus',
    ];
    $request->config = new GlobalConfig();
    $request->config->alertsEmails = [
        'admin@otoroshi.io',
        'admin@otoroshi.io',
    ];
    $request->config->alertsWebhooks = [
        new Webhook(),
        new Webhook(),
        new Webhook(),
        new Webhook(),
    ];
    $request->config->analyticsWebhooks = [
        new Webhook(),
        new Webhook(),
    ];
    $request->config->apiReadOnly = true;
    $request->config->autoLinkToDefaultGroup = true;
    $request->config->backofficeAuth0Config = new Auth0Config();
    $request->config->backofficeAuth0Config->callbackUrl = 'a string value';
    $request->config->backofficeAuth0Config->clientId = 'a string value';
    $request->config->backofficeAuth0Config->clientSecret = 'a string value';
    $request->config->backofficeAuth0Config->domain = 'a string value';
    $request->config->cleverSettings = new CleverSettings();
    $request->config->cleverSettings->consumerKey = 'a string value';
    $request->config->cleverSettings->consumerSecret = 'a string value';
    $request->config->cleverSettings->orgaId = 'a string value';
    $request->config->cleverSettings->secret = 'a string value';
    $request->config->cleverSettings->token = 'a string value';
    $request->config->elasticReadsConfig = new ElasticConfig();
    $request->config->elasticReadsConfig->clusterUri = 'a string value';
    $request->config->elasticReadsConfig->headers = [
        'officia' => 'tempora',
    ];
    $request->config->elasticReadsConfig->index = 'a string value';
    $request->config->elasticReadsConfig->password = 'a string value';
    $request->config->elasticReadsConfig->type = 'a string value';
    $request->config->elasticReadsConfig->user = 'a string value';
    $request->config->elasticWritesConfigs = [
        new ElasticConfig(),
        new ElasticConfig(),
    ];
    $request->config->endlessIpAddresses = [
        '192.192.192.192',
        '192.192.192.192',
    ];
    $request->config->ipFiltering = new IpFiltering();
    $request->config->ipFiltering->blacklist = [
        '192.192.192.192',
    ];
    $request->config->ipFiltering->whitelist = [
        '192.192.192.192',
        '192.192.192.192',
    ];
    $request->config->limitConcurrentRequests = true;
    $request->config->lines = [
        'a string value',
        'a string value',
        'a string value',
        'a string value',
    ];
    $request->config->mailerSettings = new MailerSettings();
    $request->config->mailerSettings->apiKey = 'a string value';
    $request->config->mailerSettings->apiKeyPrivate = 'a string value';
    $request->config->mailerSettings->apiKeyPublic = 'a string value';
    $request->config->mailerSettings->domain = 'a string value';
    $request->config->mailerSettings->eu = true;
    $request->config->mailerSettings->header = [
        'ratione' => 'ex',
        'laudantium' => 'dicta',
    ];
    $request->config->mailerSettings->type = 'a string value';
    $request->config->mailerSettings->url = 'a string value';
    $request->config->maxConcurrentRequests = 123;
    $request->config->maxHttp10ResponseSize = 123;
    $request->config->maxLogsSize = 123123;
    $request->config->middleFingers = true;
    $request->config->perIpThrottlingQuota = 123;
    $request->config->privateAppsAuth0Config = new Auth0Config();
    $request->config->privateAppsAuth0Config->callbackUrl = 'a string value';
    $request->config->privateAppsAuth0Config->clientId = 'a string value';
    $request->config->privateAppsAuth0Config->clientSecret = 'a string value';
    $request->config->privateAppsAuth0Config->domain = 'a string value';
    $request->config->streamEntityOnly = true;
    $request->config->throttlingQuota = 123;
    $request->config->u2fLoginOnly = true;
    $request->config->useCircuitBreakers = true;
    $request->date = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2017-07-21T17:32:28Z');
    $request->dateRaw = 123;
    $request->errorTemplates = [
        new ImportExportErrorTemplates(),
    ];
    $request->label = 'a string value';
    $request->serviceDescriptors = [
        new ImportExportServiceDescriptors(),
        new ImportExportServiceDescriptors(),
        new ImportExportServiceDescriptors(),
        new ImportExportServiceDescriptors(),
    ];
    $request->serviceGroups = [
        new ImportExportServiceGroups(),
    ];
    $request->simpleAdmins = [
        new ImportExportSimpleAdmins(),
        new ImportExportSimpleAdmins(),
    ];
    $request->stats = new ImportExportStats();
    $request->stats->calls = 123;
    $request->stats->dataIn = 123;
    $request->stats->dataOut = 123;

    $requestSecurity = new FullImportSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->import->fullImport($request, $requestSecurity);

    if ($response->done !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fullImportFromFile

Import the full state of Otoroshi as a file

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\ImportExport;
use \OpenAPI\OpenAPI\Models\Shared\ImportExportAdmins;
use \OpenAPI\OpenAPI\Models\Shared\ImportExportApiKeys;
use \OpenAPI\OpenAPI\Models\Shared\GlobalConfig;
use \OpenAPI\OpenAPI\Models\Shared\Webhook;
use \OpenAPI\OpenAPI\Models\Shared\Auth0Config;
use \OpenAPI\OpenAPI\Models\Shared\CleverSettings;
use \OpenAPI\OpenAPI\Models\Shared\ElasticConfig;
use \OpenAPI\OpenAPI\Models\Shared\IpFiltering;
use \OpenAPI\OpenAPI\Models\Shared\MailerSettings;
use \OpenAPI\OpenAPI\Models\Shared\ImportExportErrorTemplates;
use \OpenAPI\OpenAPI\Models\Shared\ImportExportServiceDescriptors;
use \OpenAPI\OpenAPI\Models\Shared\Canary;
use \OpenAPI\OpenAPI\Models\Shared\Target;
use \OpenAPI\OpenAPI\Models\Shared\ExposedApi;
use \OpenAPI\OpenAPI\Models\Shared\ChaosConfig;
use \OpenAPI\OpenAPI\Models\Shared\BadResponsesFaultConfig;
use \OpenAPI\OpenAPI\Models\Shared\BadResponse;
use \OpenAPI\OpenAPI\Models\Shared\LargeRequestFaultConfig;
use \OpenAPI\OpenAPI\Models\Shared\LargeResponseFaultConfig;
use \OpenAPI\OpenAPI\Models\Shared\LatencyInjectionFaultConfig;
use \OpenAPI\OpenAPI\Models\Shared\ClientConfig;
use \OpenAPI\OpenAPI\Models\Shared\CorsSettings;
use \OpenAPI\OpenAPI\Models\Shared\Gzip;
use \OpenAPI\OpenAPI\Models\Shared\HealthCheck;
use \OpenAPI\OpenAPI\Models\Shared\RedirectionSettings;
use \OpenAPI\OpenAPI\Models\Shared\StatsdConfig;
use \OpenAPI\OpenAPI\Models\Shared\ImportExportServiceGroups;
use \OpenAPI\OpenAPI\Models\Shared\ImportExportSimpleAdmins;
use \OpenAPI\OpenAPI\Models\Shared\ImportExportStats;
use \OpenAPI\OpenAPI\Models\Operations\FullImportFromFileSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImportExport();
    $request->admins = [
        new ImportExportAdmins(),
        new ImportExportAdmins(),
        new ImportExportAdmins(),
        new ImportExportAdmins(),
    ];
    $request->apiKeys = [
        new ImportExportApiKeys(),
        new ImportExportApiKeys(),
        new ImportExportApiKeys(),
    ];
    $request->appConfig = [
        'nostrum' => 'sapiente',
        'quisquam' => 'saepe',
        'ea' => 'impedit',
        'corporis' => 'veniam',
    ];
    $request->config = new GlobalConfig();
    $request->config->alertsEmails = [
        'admin@otoroshi.io',
        'admin@otoroshi.io',
    ];
    $request->config->alertsWebhooks = [
        new Webhook(),
    ];
    $request->config->analyticsWebhooks = [
        new Webhook(),
        new Webhook(),
    ];
    $request->config->apiReadOnly = true;
    $request->config->autoLinkToDefaultGroup = true;
    $request->config->backofficeAuth0Config = new Auth0Config();
    $request->config->backofficeAuth0Config->callbackUrl = 'a string value';
    $request->config->backofficeAuth0Config->clientId = 'a string value';
    $request->config->backofficeAuth0Config->clientSecret = 'a string value';
    $request->config->backofficeAuth0Config->domain = 'a string value';
    $request->config->cleverSettings = new CleverSettings();
    $request->config->cleverSettings->consumerKey = 'a string value';
    $request->config->cleverSettings->consumerSecret = 'a string value';
    $request->config->cleverSettings->orgaId = 'a string value';
    $request->config->cleverSettings->secret = 'a string value';
    $request->config->cleverSettings->token = 'a string value';
    $request->config->elasticReadsConfig = new ElasticConfig();
    $request->config->elasticReadsConfig->clusterUri = 'a string value';
    $request->config->elasticReadsConfig->headers = [
        'quo' => 'consectetur',
        'recusandae' => 'aspernatur',
    ];
    $request->config->elasticReadsConfig->index = 'a string value';
    $request->config->elasticReadsConfig->password = 'a string value';
    $request->config->elasticReadsConfig->type = 'a string value';
    $request->config->elasticReadsConfig->user = 'a string value';
    $request->config->elasticWritesConfigs = [
        new ElasticConfig(),
        new ElasticConfig(),
    ];
    $request->config->endlessIpAddresses = [
        '192.192.192.192',
    ];
    $request->config->ipFiltering = new IpFiltering();
    $request->config->ipFiltering->blacklist = [
        '192.192.192.192',
        '192.192.192.192',
        '192.192.192.192',
        '192.192.192.192',
    ];
    $request->config->ipFiltering->whitelist = [
        '192.192.192.192',
        '192.192.192.192',
        '192.192.192.192',
    ];
    $request->config->limitConcurrentRequests = true;
    $request->config->lines = [
        'a string value',
    ];
    $request->config->mailerSettings = new MailerSettings();
    $request->config->mailerSettings->apiKey = 'a string value';
    $request->config->mailerSettings->apiKeyPrivate = 'a string value';
    $request->config->mailerSettings->apiKeyPublic = 'a string value';
    $request->config->mailerSettings->domain = 'a string value';
    $request->config->mailerSettings->eu = true;
    $request->config->mailerSettings->header = [
        'deleniti' => 'impedit',
    ];
    $request->config->mailerSettings->type = 'a string value';
    $request->config->mailerSettings->url = 'a string value';
    $request->config->maxConcurrentRequests = 123;
    $request->config->maxHttp10ResponseSize = 123;
    $request->config->maxLogsSize = 123123;
    $request->config->middleFingers = true;
    $request->config->perIpThrottlingQuota = 123;
    $request->config->privateAppsAuth0Config = new Auth0Config();
    $request->config->privateAppsAuth0Config->callbackUrl = 'a string value';
    $request->config->privateAppsAuth0Config->clientId = 'a string value';
    $request->config->privateAppsAuth0Config->clientSecret = 'a string value';
    $request->config->privateAppsAuth0Config->domain = 'a string value';
    $request->config->streamEntityOnly = true;
    $request->config->throttlingQuota = 123;
    $request->config->u2fLoginOnly = true;
    $request->config->useCircuitBreakers = true;
    $request->date = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2017-07-21T17:32:28Z');
    $request->dateRaw = 123;
    $request->errorTemplates = [
        new ImportExportErrorTemplates(),
        new ImportExportErrorTemplates(),
    ];
    $request->label = 'a string value';
    $request->serviceDescriptors = [
        new ImportExportServiceDescriptors(),
    ];
    $request->serviceGroups = [
        new ImportExportServiceGroups(),
        new ImportExportServiceGroups(),
        new ImportExportServiceGroups(),
        new ImportExportServiceGroups(),
    ];
    $request->simpleAdmins = [
        new ImportExportSimpleAdmins(),
    ];
    $request->stats = new ImportExportStats();
    $request->stats->calls = 123;
    $request->stats->dataIn = 123;
    $request->stats->dataOut = 123;

    $requestSecurity = new FullImportFromFileSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->import->fullImportFromFile($request, $requestSecurity);

    if ($response->done !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
