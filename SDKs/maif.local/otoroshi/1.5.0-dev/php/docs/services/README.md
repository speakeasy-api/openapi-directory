# services

## Overview

Everything about Otoroshi service descriptors

### Available Operations

* [allServices](#allservices) - Get all services
* [createService](#createservice) - Create a new service descriptor
* [createServiceTemplate](#createservicetemplate) - Create a service descriptor error template
* [deleteService](#deleteservice) - Delete a service descriptor
* [deleteServiceTemplate](#deleteservicetemplate) - Delete a service descriptor error template
* [patchService](#patchservice) - Update a service descriptor with a diff
* [service](#service) - Get a service descriptor
* [serviceAddTarget](#serviceaddtarget) - Add a target to a service descriptor
* [serviceDeleteTarget](#servicedeletetarget) - Delete a service descriptor target
* [serviceGroupServices](#servicegroupservices) - Get all services descriptor for a group
* [serviceTargets](#servicetargets) - Get a service descriptor targets
* [serviceTemplate](#servicetemplate) - Get a service descriptor error template
* [updateService](#updateservice) - Update a service descriptor
* [updateServiceTargets](#updateservicetargets) - Update a service descriptor targets
* [updateServiceTemplate](#updateservicetemplate) - Update an error template to a service descriptor

## allServices

Get all services

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AllServicesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new AllServicesSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->services->allServices($requestSecurity);

    if ($response->services !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createService

Create a new service descriptor

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Service;
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
use \OpenAPI\OpenAPI\Models\Shared\IpFiltering;
use \OpenAPI\OpenAPI\Models\Shared\RedirectionSettings;
use \OpenAPI\OpenAPI\Models\Shared\StatsdConfig;
use \OpenAPI\OpenAPI\Models\Operations\CreateServiceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Service();
    $request->canary = new Canary();
    $request->canary->enabled = true;
    $request->canary->root = 'a string value';
    $request->canary->targets = [
        new Target(),
    ];
    $request->canary->traffic = 123123;
    $request->additionalHeaders = [
        'occaecati' => 'atque',
        'et' => 'esse',
        'eveniet' => 'accusamus',
        'veritatis' => 'esse',
    ];
    $request->api = new ExposedApi();
    $request->api->exposeApi = true;
    $request->api->openApiDescriptorUrl = 'http://www.google.com';
    $request->authConfigRef = 'a string value';
    $request->buildMode = true;
    $request->chaosConfig = new ChaosConfig();
    $request->chaosConfig->badResponsesFaultConfig = new BadResponsesFaultConfig();
    $request->chaosConfig->badResponsesFaultConfig->ratio = 42.2;
    $request->chaosConfig->badResponsesFaultConfig->responses = [
        new BadResponse(),
        new BadResponse(),
        new BadResponse(),
        new BadResponse(),
    ];
    $request->chaosConfig->enabled = true;
    $request->chaosConfig->largeRequestFaultConfig = new LargeRequestFaultConfig();
    $request->chaosConfig->largeRequestFaultConfig->additionalRequestSize = 123123;
    $request->chaosConfig->largeRequestFaultConfig->ratio = 42.2;
    $request->chaosConfig->largeResponseFaultConfig = new LargeResponseFaultConfig();
    $request->chaosConfig->largeResponseFaultConfig->additionalRequestSize = 123123;
    $request->chaosConfig->largeResponseFaultConfig->ratio = 42.2;
    $request->chaosConfig->latencyInjectionFaultConfig = new LatencyInjectionFaultConfig();
    $request->chaosConfig->latencyInjectionFaultConfig->from = 123123;
    $request->chaosConfig->latencyInjectionFaultConfig->ratio = 42.2;
    $request->chaosConfig->latencyInjectionFaultConfig->to = 123123;
    $request->clientConfig = new ClientConfig();
    $request->clientConfig->backoffFactor = 123123;
    $request->clientConfig->callTimeout = 123123;
    $request->clientConfig->globalTimeout = 123123;
    $request->clientConfig->maxErrors = 123123;
    $request->clientConfig->retries = 123123;
    $request->clientConfig->retryInitialDelay = 123123;
    $request->clientConfig->sampleInterval = 123123;
    $request->clientConfig->useCircuitBreaker = true;
    $request->clientValidatorRef = 'a string value';
    $request->cors = new CorsSettings();
    $request->cors->allowCredentials = true;
    $request->cors->allowHeaders = [
        'a string value',
        'a string value',
        'a string value',
    ];
    $request->cors->allowMethods = [
        'a string value',
        'a string value',
        'a string value',
        'a string value',
    ];
    $request->cors->allowOrigin = 'a string value';
    $request->cors->enabled = true;
    $request->cors->excludedPatterns = [
        'a string value',
        'a string value',
    ];
    $request->cors->exposeHeaders = [
        'a string value',
    ];
    $request->cors->maxAge = 123123;
    $request->domain = 'a string value';
    $request->enabled = true;
    $request->enforceSecureCommunication = true;
    $request->env = 'a string value';
    $request->forceHttps = true;
    $request->groups = [
        'a string value',
        'a string value',
        'a string value',
        'a string value',
    ];
    $request->gzip = new Gzip();
    $request->gzip->blackList = [
        'a string value',
        'a string value',
    ];
    $request->gzip->bufferSize = 123;
    $request->gzip->chunkedThreshold = 123;
    $request->gzip->compressionLevel = 123123;
    $request->gzip->enabled = true;
    $request->gzip->excludedPatterns = [
        'a string value',
        'a string value',
        'a string value',
    ];
    $request->gzip->whiteList = [
        'a string value',
        'a string value',
    ];
    $request->headersVerification = [
        'occaecati' => 'minima',
        'distinctio' => 'eligendi',
        'sit' => 'culpa',
    ];
    $request->healthCheck = new HealthCheck();
    $request->healthCheck->enabled = true;
    $request->healthCheck->url = 'http://www.google.com';
    $request->id = '110e8400-e29b-11d4-a716-446655440000';
    $request->ipFiltering = new IpFiltering();
    $request->ipFiltering->blacklist = [
        '192.192.192.192',
        '192.192.192.192',
        '192.192.192.192',
    ];
    $request->ipFiltering->whitelist = [
        '192.192.192.192',
    ];
    $request->jwtVerifier = new RefJwtVerifier();
    $request->jwtVerifier->enabled = true;
    $request->jwtVerifier->id = 'a string value';
    $request->jwtVerifier->type = 'a string value';
    $request->localHost = 'a string value';
    $request->localScheme = 'a string value';
    $request->maintenanceMode = true;
    $request->matchingHeaders = [
        'consequatur' => 'minus',
    ];
    $request->matchingRoot = 'a string value';
    $request->metadata = [
        'sapiente' => 'consectetur',
        'esse' => 'blanditiis',
    ];
    $request->name = 'a string value';
    $request->overrideHost = true;
    $request->privateApp = true;
    $request->privatePatterns = [
        'a string value',
        'a string value',
        'a string value',
    ];
    $request->publicPatterns = [
        'a string value',
        'a string value',
        'a string value',
        'a string value',
    ];
    $request->redirectToLocal = true;
    $request->redirection = new RedirectionSettings();
    $request->redirection->code = 123123;
    $request->redirection->enabled = true;
    $request->redirection->to = 'a string value';
    $request->root = 'a string value';
    $request->secComExcludedPatterns = [
        'a string value',
        'a string value',
        'a string value',
        'a string value',
    ];
    $request->secComSettings = new ESAlgoSettings();
    $request->secComSettings->privateKey = 'a string value';
    $request->secComSettings->publicKey = 'a string value';
    $request->secComSettings->size = 123123;
    $request->secComSettings->type = 'a string value';
    $request->sendOtoroshiHeadersBack = true;
    $request->statsdConfig = new StatsdConfig();
    $request->statsdConfig->datadog = true;
    $request->statsdConfig->host = 'a string value';
    $request->statsdConfig->port = 123123;
    $request->subdomain = 'a string value';
    $request->targets = [
        new Target(),
        new Target(),
    ];
    $request->transformerRef = 'a string value';
    $request->userFacing = true;
    $request->xForwardedHeaders = true;

    $requestSecurity = new CreateServiceSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->services->createService($request, $requestSecurity);

    if ($response->service !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createServiceTemplate

Update a service descriptor targets

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateServiceTemplateRequest;
use \OpenAPI\OpenAPI\Models\Shared\ErrorTemplate;
use \OpenAPI\OpenAPI\Models\Operations\CreateServiceTemplateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateServiceTemplateRequest();
    $request->errorTemplate = new ErrorTemplate();
    $request->errorTemplate->messages = [
        'a' => 'error',
    ];
    $request->errorTemplate->serviceId = 'a string value';
    $request->errorTemplate->template40x = 'a string value';
    $request->errorTemplate->template50x = 'a string value';
    $request->errorTemplate->templateBuild = 'a string value';
    $request->errorTemplate->templateMaintenance = 'a string value';
    $request->serviceId = 'sint';

    $requestSecurity = new CreateServiceTemplateSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->services->createServiceTemplate($request, $requestSecurity);

    if ($response->errorTemplate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteService

Delete a service descriptor

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteServiceRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteServiceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteServiceRequest();
    $request->serviceId = 'pariatur';

    $requestSecurity = new DeleteServiceSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->services->deleteService($request, $requestSecurity);

    if ($response->deleted !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteServiceTemplate

Delete a service descriptor error template

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteServiceTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteServiceTemplateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteServiceTemplateRequest();
    $request->serviceId = 'possimus';

    $requestSecurity = new DeleteServiceTemplateSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->services->deleteServiceTemplate($request, $requestSecurity);

    if ($response->deleted !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchService

Update a service descriptor with a diff

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchServiceRequest;
use \OpenAPI\OpenAPI\Models\Shared\Patch;
use \OpenAPI\OpenAPI\Models\Shared\PatchOpEnum;
use \OpenAPI\OpenAPI\Models\Operations\PatchServiceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchServiceRequest();
    $request->requestBody = [
        new Patch(),
    ];
    $request->serviceId = 'eveniet';

    $requestSecurity = new PatchServiceSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->services->patchService($request, $requestSecurity);

    if ($response->service !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## service

Get a service descriptor

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServiceRequest;
use \OpenAPI\OpenAPI\Models\Operations\ServiceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServiceRequest();
    $request->serviceId = 'asperiores';

    $requestSecurity = new ServiceSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->services->service($request, $requestSecurity);

    if ($response->service !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## serviceAddTarget

Add a target to a service descriptor

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServiceAddTargetRequest;
use \OpenAPI\OpenAPI\Models\Shared\Target;
use \OpenAPI\OpenAPI\Models\Operations\ServiceAddTargetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServiceAddTargetRequest();
    $request->target = new Target();
    $request->target->host = 'www.google.com';
    $request->target->scheme = 'a string value';
    $request->serviceId = 'facere';

    $requestSecurity = new ServiceAddTargetSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->services->serviceAddTarget($request, $requestSecurity);

    if ($response->targets !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## serviceDeleteTarget

Delete a service descriptor target

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServiceDeleteTargetRequest;
use \OpenAPI\OpenAPI\Models\Operations\ServiceDeleteTargetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServiceDeleteTargetRequest();
    $request->serviceId = 'veritatis';

    $requestSecurity = new ServiceDeleteTargetSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->services->serviceDeleteTarget($request, $requestSecurity);

    if ($response->targets !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## serviceGroupServices

Get all services descriptor for a group

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServiceGroupServicesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ServiceGroupServicesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServiceGroupServicesRequest();
    $request->serviceGroupId = 'consequuntur';

    $requestSecurity = new ServiceGroupServicesSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->services->serviceGroupServices($request, $requestSecurity);

    if ($response->apiKeys !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## serviceTargets

Get a service descriptor targets

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServiceTargetsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ServiceTargetsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServiceTargetsRequest();
    $request->serviceId = 'quasi';

    $requestSecurity = new ServiceTargetsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->services->serviceTargets($request, $requestSecurity);

    if ($response->targets !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## serviceTemplate

Get a service descriptor error template

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServiceTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\ServiceTemplateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServiceTemplateRequest();
    $request->serviceId = 'similique';

    $requestSecurity = new ServiceTemplateSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->services->serviceTemplate($request, $requestSecurity);

    if ($response->errorTemplate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateService

Update a service descriptor

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceRequest;
use \OpenAPI\OpenAPI\Models\Shared\Service;
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
use \OpenAPI\OpenAPI\Models\Shared\IpFiltering;
use \OpenAPI\OpenAPI\Models\Shared\RedirectionSettings;
use \OpenAPI\OpenAPI\Models\Shared\StatsdConfig;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateServiceRequest();
    $request->service = new Service();
    $request->service->canary = new Canary();
    $request->service->canary->enabled = true;
    $request->service->canary->root = 'a string value';
    $request->service->canary->targets = [
        new Target(),
        new Target(),
        new Target(),
    ];
    $request->service->canary->traffic = 123123;
    $request->service->additionalHeaders = [
        'tenetur' => 'quae',
        'earum' => 'vel',
    ];
    $request->service->api = new ExposedApi();
    $request->service->api->exposeApi = true;
    $request->service->api->openApiDescriptorUrl = 'http://www.google.com';
    $request->service->authConfigRef = 'a string value';
    $request->service->buildMode = true;
    $request->service->chaosConfig = new ChaosConfig();
    $request->service->chaosConfig->badResponsesFaultConfig = new BadResponsesFaultConfig();
    $request->service->chaosConfig->badResponsesFaultConfig->ratio = 42.2;
    $request->service->chaosConfig->badResponsesFaultConfig->responses = [
        new BadResponse(),
        new BadResponse(),
    ];
    $request->service->chaosConfig->enabled = true;
    $request->service->chaosConfig->largeRequestFaultConfig = new LargeRequestFaultConfig();
    $request->service->chaosConfig->largeRequestFaultConfig->additionalRequestSize = 123123;
    $request->service->chaosConfig->largeRequestFaultConfig->ratio = 42.2;
    $request->service->chaosConfig->largeResponseFaultConfig = new LargeResponseFaultConfig();
    $request->service->chaosConfig->largeResponseFaultConfig->additionalRequestSize = 123123;
    $request->service->chaosConfig->largeResponseFaultConfig->ratio = 42.2;
    $request->service->chaosConfig->latencyInjectionFaultConfig = new LatencyInjectionFaultConfig();
    $request->service->chaosConfig->latencyInjectionFaultConfig->from = 123123;
    $request->service->chaosConfig->latencyInjectionFaultConfig->ratio = 42.2;
    $request->service->chaosConfig->latencyInjectionFaultConfig->to = 123123;
    $request->service->clientConfig = new ClientConfig();
    $request->service->clientConfig->backoffFactor = 123123;
    $request->service->clientConfig->callTimeout = 123123;
    $request->service->clientConfig->globalTimeout = 123123;
    $request->service->clientConfig->maxErrors = 123123;
    $request->service->clientConfig->retries = 123123;
    $request->service->clientConfig->retryInitialDelay = 123123;
    $request->service->clientConfig->sampleInterval = 123123;
    $request->service->clientConfig->useCircuitBreaker = true;
    $request->service->clientValidatorRef = 'a string value';
    $request->service->cors = new CorsSettings();
    $request->service->cors->allowCredentials = true;
    $request->service->cors->allowHeaders = [
        'a string value',
        'a string value',
    ];
    $request->service->cors->allowMethods = [
        'a string value',
        'a string value',
        'a string value',
    ];
    $request->service->cors->allowOrigin = 'a string value';
    $request->service->cors->enabled = true;
    $request->service->cors->excludedPatterns = [
        'a string value',
        'a string value',
        'a string value',
        'a string value',
    ];
    $request->service->cors->exposeHeaders = [
        'a string value',
        'a string value',
        'a string value',
    ];
    $request->service->cors->maxAge = 123123;
    $request->service->domain = 'a string value';
    $request->service->enabled = true;
    $request->service->enforceSecureCommunication = true;
    $request->service->env = 'a string value';
    $request->service->forceHttps = true;
    $request->service->groups = [
        'a string value',
    ];
    $request->service->gzip = new Gzip();
    $request->service->gzip->blackList = [
        'a string value',
        'a string value',
    ];
    $request->service->gzip->bufferSize = 123;
    $request->service->gzip->chunkedThreshold = 123;
    $request->service->gzip->compressionLevel = 123123;
    $request->service->gzip->enabled = true;
    $request->service->gzip->excludedPatterns = [
        'a string value',
        'a string value',
        'a string value',
        'a string value',
    ];
    $request->service->gzip->whiteList = [
        'a string value',
    ];
    $request->service->headersVerification = [
        'reprehenderit' => 'ullam',
        'nisi' => 'aut',
    ];
    $request->service->healthCheck = new HealthCheck();
    $request->service->healthCheck->enabled = true;
    $request->service->healthCheck->url = 'http://www.google.com';
    $request->service->id = '110e8400-e29b-11d4-a716-446655440000';
    $request->service->ipFiltering = new IpFiltering();
    $request->service->ipFiltering->blacklist = [
        '192.192.192.192',
        '192.192.192.192',
        '192.192.192.192',
    ];
    $request->service->ipFiltering->whitelist = [
        '192.192.192.192',
    ];
    $request->service->jwtVerifier = new RefJwtVerifier();
    $request->service->jwtVerifier->enabled = true;
    $request->service->jwtVerifier->id = 'a string value';
    $request->service->jwtVerifier->type = 'a string value';
    $request->service->localHost = 'a string value';
    $request->service->localScheme = 'a string value';
    $request->service->maintenanceMode = true;
    $request->service->matchingHeaders = [
        'deleniti' => 'itaque',
        'dolorum' => 'architecto',
    ];
    $request->service->matchingRoot = 'a string value';
    $request->service->metadata = [
        'tenetur' => 'quasi',
        'at' => 'et',
        'voluptate' => 'ipsa',
    ];
    $request->service->name = 'a string value';
    $request->service->overrideHost = true;
    $request->service->privateApp = true;
    $request->service->privatePatterns = [
        'a string value',
        'a string value',
    ];
    $request->service->publicPatterns = [
        'a string value',
    ];
    $request->service->redirectToLocal = true;
    $request->service->redirection = new RedirectionSettings();
    $request->service->redirection->code = 123123;
    $request->service->redirection->enabled = true;
    $request->service->redirection->to = 'a string value';
    $request->service->root = 'a string value';
    $request->service->secComExcludedPatterns = [
        'a string value',
    ];
    $request->service->secComSettings = new HSAlgoSettings();
    $request->service->secComSettings->secret = 'a string value';
    $request->service->secComSettings->size = 123123;
    $request->service->secComSettings->type = 'a string value';
    $request->service->sendOtoroshiHeadersBack = true;
    $request->service->statsdConfig = new StatsdConfig();
    $request->service->statsdConfig->datadog = true;
    $request->service->statsdConfig->host = 'a string value';
    $request->service->statsdConfig->port = 123123;
    $request->service->subdomain = 'a string value';
    $request->service->targets = [
        new Target(),
        new Target(),
        new Target(),
    ];
    $request->service->transformerRef = 'a string value';
    $request->service->userFacing = true;
    $request->service->xForwardedHeaders = true;
    $request->serviceId = 'temporibus';

    $requestSecurity = new UpdateServiceSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->services->updateService($request, $requestSecurity);

    if ($response->service !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateServiceTargets

Update a service descriptor targets

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceTargetsRequest;
use \OpenAPI\OpenAPI\Models\Shared\Patch;
use \OpenAPI\OpenAPI\Models\Shared\PatchOpEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceTargetsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateServiceTargetsRequest();
    $request->requestBody = [
        new Patch(),
    ];
    $request->serviceId = 'rem';

    $requestSecurity = new UpdateServiceTargetsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->services->updateServiceTargets($request, $requestSecurity);

    if ($response->targets !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateServiceTemplate

Update an error template to a service descriptor

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceTemplateRequest;
use \OpenAPI\OpenAPI\Models\Shared\ErrorTemplate;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceTemplateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateServiceTemplateRequest();
    $request->errorTemplate = new ErrorTemplate();
    $request->errorTemplate->messages = [
        'laudantium' => 'eum',
    ];
    $request->errorTemplate->serviceId = 'a string value';
    $request->errorTemplate->template40x = 'a string value';
    $request->errorTemplate->template50x = 'a string value';
    $request->errorTemplate->templateBuild = 'a string value';
    $request->errorTemplate->templateMaintenance = 'a string value';
    $request->serviceId = 'mollitia';

    $requestSecurity = new UpdateServiceTemplateSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->services->updateServiceTemplate($request, $requestSecurity);

    if ($response->errorTemplate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
