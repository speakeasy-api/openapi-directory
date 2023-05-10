# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [createAlphaSender](#createalphasender)
* [createBrandRegistrationOtp](#createbrandregistrationotp)
* [createBrandRegistrations](#createbrandregistrations)
* [createBrandVetting](#createbrandvetting)
* [createExternalCampaign](#createexternalcampaign)
* [createLinkshorteningMessagingService](#createlinkshorteningmessagingservice)
* [createPhoneNumber](#createphonenumber)
* [createService](#createservice)
* [createShortCode](#createshortcode)
* [createUsAppToPerson](#createusapptoperson)
* [deleteAlphaSender](#deletealphasender)
* [deleteDomainCertV4](#deletedomaincertv4)
* [deleteLinkshorteningMessagingService](#deletelinkshorteningmessagingservice)
* [deletePhoneNumber](#deletephonenumber)
* [deleteService](#deleteservice)
* [deleteShortCode](#deleteshortcode)
* [deleteUsAppToPerson](#deleteusapptoperson)
* [fetchAlphaSender](#fetchalphasender)
* [fetchBrandRegistrations](#fetchbrandregistrations)
* [fetchBrandVetting](#fetchbrandvetting)
* [fetchDeactivation](#fetchdeactivation) - Fetch a list of all United States numbers that have been deactivated on a specific date.
* [fetchDomainCertV4](#fetchdomaincertv4)
* [fetchDomainConfig](#fetchdomainconfig)
* [fetchDomainConfigMessagingService](#fetchdomainconfigmessagingservice)
* [fetchPhoneNumber](#fetchphonenumber)
* [fetchService](#fetchservice)
* [fetchShortCode](#fetchshortcode)
* [fetchUsAppToPerson](#fetchusapptoperson)
* [fetchUsAppToPersonUsecase](#fetchusapptopersonusecase)
* [fetchUsecase](#fetchusecase)
* [listAlphaSender](#listalphasender)
* [listBrandRegistrations](#listbrandregistrations)
* [listBrandVetting](#listbrandvetting)
* [listPhoneNumber](#listphonenumber)
* [listService](#listservice)
* [listShortCode](#listshortcode)
* [listUsAppToPerson](#listusapptoperson)
* [updateBrandRegistrations](#updatebrandregistrations)
* [updateDomainCertV4](#updatedomaincertv4)
* [updateDomainConfig](#updatedomainconfig)
* [updateService](#updateservice)

## createAlphaSender

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateAlphaSenderRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateAlphaSenderCreateAlphaSenderRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateAlphaSenderSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAlphaSenderRequest();
    $request->requestBody = new CreateAlphaSenderCreateAlphaSenderRequest();
    $request->requestBody->alphaSender = 'distinctio';
    $request->serviceSid = 'quibusdam';

    $requestSecurity = new CreateAlphaSenderSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createAlphaSender($request, $requestSecurity);

    if ($response->messagingV1ServiceAlphaSender !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createBrandRegistrationOtp

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateBrandRegistrationOtpRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateBrandRegistrationOtpSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateBrandRegistrationOtpRequest();
    $request->brandRegistrationSid = 'unde';

    $requestSecurity = new CreateBrandRegistrationOtpSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createBrandRegistrationOtp($request, $requestSecurity);

    if ($response->messagingV1BrandRegistrationsBrandRegistrationOtp !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createBrandRegistrations

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateBrandRegistrationsCreateBrandRegistrationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateBrandRegistrationsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateBrandRegistrationsCreateBrandRegistrationsRequest();
    $request->a2PProfileBundleSid = 'nulla';
    $request->brandType = 'corrupti';
    $request->customerProfileBundleSid = 'illum';
    $request->mock = false;
    $request->skipAutomaticSecVet = false;

    $requestSecurity = new CreateBrandRegistrationsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createBrandRegistrations($request, $requestSecurity);

    if ($response->messagingV1BrandRegistrations !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createBrandVetting

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateBrandVettingRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateBrandVettingCreateBrandVettingRequest;
use \OpenAPI\OpenAPI\Models\Shared\BrandVettingEnumVettingProviderEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateBrandVettingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateBrandVettingRequest();
    $request->brandSid = 'vel';
    $request->requestBody = new CreateBrandVettingCreateBrandVettingRequest();
    $request->requestBody->vettingId = 'error';
    $request->requestBody->vettingProvider = BrandVettingEnumVettingProviderEnum::CAMPAIGN_VERIFY;

    $requestSecurity = new CreateBrandVettingSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createBrandVetting($request, $requestSecurity);

    if ($response->messagingV1BrandRegistrationsBrandVetting !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createExternalCampaign

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateExternalCampaignCreateExternalCampaignRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateExternalCampaignSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateExternalCampaignCreateExternalCampaignRequest();
    $request->campaignId = 'deserunt';
    $request->messagingServiceSid = 'suscipit';

    $requestSecurity = new CreateExternalCampaignSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createExternalCampaign($request, $requestSecurity);

    if ($response->messagingV1ExternalCampaign !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createLinkshorteningMessagingService

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateLinkshorteningMessagingServiceRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateLinkshorteningMessagingServiceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateLinkshorteningMessagingServiceRequest();
    $request->domainSid = 'iure';
    $request->messagingServiceSid = 'magnam';

    $requestSecurity = new CreateLinkshorteningMessagingServiceSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createLinkshorteningMessagingService($request, $requestSecurity);

    if ($response->messagingV1LinkshorteningMessagingService !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createPhoneNumber

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreatePhoneNumberRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreatePhoneNumberCreatePhoneNumberRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreatePhoneNumberSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatePhoneNumberRequest();
    $request->requestBody = new CreatePhoneNumberCreatePhoneNumberRequest();
    $request->requestBody->phoneNumberSid = 'debitis';
    $request->serviceSid = 'ipsa';

    $requestSecurity = new CreatePhoneNumberSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createPhoneNumber($request, $requestSecurity);

    if ($response->messagingV1ServicePhoneNumber !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createService

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateServiceCreateServiceRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateServiceCreateServiceRequestFallbackMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateServiceCreateServiceRequestInboundMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServiceEnumScanMessageContentEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateServiceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateServiceCreateServiceRequest();
    $request->areaCodeGeomatch = false;
    $request->fallbackMethod = CreateServiceCreateServiceRequestFallbackMethodEnum::DELETE;
    $request->fallbackToLongCode = false;
    $request->fallbackUrl = 'http://hideous-jam.net';
    $request->friendlyName = 'placeat';
    $request->inboundMethod = CreateServiceCreateServiceRequestInboundMethodEnum::PATCH;
    $request->inboundRequestUrl = 'http://nice-gorilla.org';
    $request->mmsConverter = false;
    $request->scanMessageContent = ServiceEnumScanMessageContentEnum::DISABLE;
    $request->smartEncoding = false;
    $request->statusCallback = 'http://gloomy-blanket.name';
    $request->stickySender = false;
    $request->synchronousValidation = false;
    $request->useInboundWebhookOnNumber = false;
    $request->usecase = 'perferendis';
    $request->validityPeriod = 368241;

    $requestSecurity = new CreateServiceSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createService($request, $requestSecurity);

    if ($response->messagingV1Service !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createShortCode

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateShortCodeRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateShortCodeCreateShortCodeRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateShortCodeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateShortCodeRequest();
    $request->requestBody = new CreateShortCodeCreateShortCodeRequest();
    $request->requestBody->shortCodeSid = 'repellendus';
    $request->serviceSid = 'sapiente';

    $requestSecurity = new CreateShortCodeSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createShortCode($request, $requestSecurity);

    if ($response->messagingV1ServiceShortCode !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createUsAppToPerson

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateUsAppToPersonRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateUsAppToPersonCreateUsAppToPersonRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateUsAppToPersonSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateUsAppToPersonRequest();
    $request->messagingServiceSid = 'quo';
    $request->requestBody = new CreateUsAppToPersonCreateUsAppToPersonRequest();
    $request->requestBody->brandRegistrationSid = 'odit';
    $request->requestBody->description = 'at';
    $request->requestBody->hasEmbeddedLinks = false;
    $request->requestBody->hasEmbeddedPhone = false;
    $request->requestBody->helpKeywords = [
        'maiores',
        'molestiae',
        'quod',
        'quod',
    ];
    $request->requestBody->helpMessage = 'esse';
    $request->requestBody->messageFlow = 'totam';
    $request->requestBody->messageSamples = [
        'dolorum',
        'dicta',
        'nam',
        'officia',
    ];
    $request->requestBody->optInKeywords = [
        'fugit',
        'deleniti',
        'hic',
    ];
    $request->requestBody->optInMessage = 'optio';
    $request->requestBody->optOutKeywords = [
        'beatae',
        'commodi',
        'molestiae',
    ];
    $request->requestBody->optOutMessage = 'modi';
    $request->requestBody->usAppToPersonUsecase = 'qui';

    $requestSecurity = new CreateUsAppToPersonSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createUsAppToPerson($request, $requestSecurity);

    if ($response->messagingV1ServiceUsAppToPerson !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAlphaSender

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAlphaSenderRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAlphaSenderSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAlphaSenderRequest();
    $request->serviceSid = 'impedit';
    $request->sid = 'cum';

    $requestSecurity = new DeleteAlphaSenderSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteAlphaSender($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDomainCertV4

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDomainCertV4Request;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDomainCertV4Security;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDomainCertV4Request();
    $request->domainSid = 'esse';

    $requestSecurity = new DeleteDomainCertV4Security();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteDomainCertV4($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteLinkshorteningMessagingService

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteLinkshorteningMessagingServiceRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteLinkshorteningMessagingServiceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteLinkshorteningMessagingServiceRequest();
    $request->domainSid = 'ipsum';
    $request->messagingServiceSid = 'excepturi';

    $requestSecurity = new DeleteLinkshorteningMessagingServiceSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteLinkshorteningMessagingService($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deletePhoneNumber

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeletePhoneNumberRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeletePhoneNumberSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePhoneNumberRequest();
    $request->serviceSid = 'aspernatur';
    $request->sid = 'perferendis';

    $requestSecurity = new DeletePhoneNumberSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deletePhoneNumber($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteService

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
    $request->sid = 'ad';

    $requestSecurity = new DeleteServiceSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteService($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteShortCode

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteShortCodeRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteShortCodeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteShortCodeRequest();
    $request->serviceSid = 'natus';
    $request->sid = 'sed';

    $requestSecurity = new DeleteShortCodeSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteShortCode($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteUsAppToPerson

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUsAppToPersonRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUsAppToPersonSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteUsAppToPersonRequest();
    $request->messagingServiceSid = 'iste';
    $request->sid = 'dolor';

    $requestSecurity = new DeleteUsAppToPersonSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteUsAppToPerson($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchAlphaSender

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchAlphaSenderRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchAlphaSenderSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchAlphaSenderRequest();
    $request->serviceSid = 'natus';
    $request->sid = 'laboriosam';

    $requestSecurity = new FetchAlphaSenderSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchAlphaSender($request, $requestSecurity);

    if ($response->messagingV1ServiceAlphaSender !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchBrandRegistrations

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchBrandRegistrationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchBrandRegistrationsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchBrandRegistrationsRequest();
    $request->sid = 'hic';

    $requestSecurity = new FetchBrandRegistrationsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchBrandRegistrations($request, $requestSecurity);

    if ($response->messagingV1BrandRegistrations !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchBrandVetting

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchBrandVettingRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchBrandVettingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchBrandVettingRequest();
    $request->brandSid = 'saepe';
    $request->brandVettingSid = 'fuga';

    $requestSecurity = new FetchBrandVettingSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchBrandVetting($request, $requestSecurity);

    if ($response->messagingV1BrandRegistrationsBrandVetting !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchDeactivation

Fetch a list of all United States numbers that have been deactivated on a specific date.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchDeactivationRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchDeactivationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchDeactivationRequest();
    $request->date = DateTime::createFromFormat('Y-m-d', '2022-08-22');

    $requestSecurity = new FetchDeactivationSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchDeactivation($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchDomainCertV4

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchDomainCertV4Request;
use \OpenAPI\OpenAPI\Models\Operations\FetchDomainCertV4Security;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchDomainCertV4Request();
    $request->domainSid = 'iste';

    $requestSecurity = new FetchDomainCertV4Security();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchDomainCertV4($request, $requestSecurity);

    if ($response->messagingV1DomainCertV4 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchDomainConfig

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchDomainConfigRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchDomainConfigSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchDomainConfigRequest();
    $request->domainSid = 'iure';

    $requestSecurity = new FetchDomainConfigSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchDomainConfig($request, $requestSecurity);

    if ($response->messagingV1DomainConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchDomainConfigMessagingService

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchDomainConfigMessagingServiceRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchDomainConfigMessagingServiceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchDomainConfigMessagingServiceRequest();
    $request->messagingServiceSid = 'saepe';

    $requestSecurity = new FetchDomainConfigMessagingServiceSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchDomainConfigMessagingService($request, $requestSecurity);

    if ($response->messagingV1DomainConfigMessagingService !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchPhoneNumber

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchPhoneNumberRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchPhoneNumberSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchPhoneNumberRequest();
    $request->serviceSid = 'quidem';
    $request->sid = 'architecto';

    $requestSecurity = new FetchPhoneNumberSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchPhoneNumber($request, $requestSecurity);

    if ($response->messagingV1ServicePhoneNumber !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchService

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchServiceRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchServiceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchServiceRequest();
    $request->sid = 'ipsa';

    $requestSecurity = new FetchServiceSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchService($request, $requestSecurity);

    if ($response->messagingV1Service !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchShortCode

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchShortCodeRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchShortCodeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchShortCodeRequest();
    $request->serviceSid = 'reiciendis';
    $request->sid = 'est';

    $requestSecurity = new FetchShortCodeSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchShortCode($request, $requestSecurity);

    if ($response->messagingV1ServiceShortCode !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchUsAppToPerson

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchUsAppToPersonRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchUsAppToPersonSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchUsAppToPersonRequest();
    $request->messagingServiceSid = 'mollitia';
    $request->sid = 'laborum';

    $requestSecurity = new FetchUsAppToPersonSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchUsAppToPerson($request, $requestSecurity);

    if ($response->messagingV1ServiceUsAppToPerson !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchUsAppToPersonUsecase

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchUsAppToPersonUsecaseRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchUsAppToPersonUsecaseSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchUsAppToPersonUsecaseRequest();
    $request->brandRegistrationSid = 'dolores';
    $request->messagingServiceSid = 'dolorem';

    $requestSecurity = new FetchUsAppToPersonUsecaseSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchUsAppToPersonUsecase($request, $requestSecurity);

    if ($response->messagingV1ServiceUsAppToPersonUsecase !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchUsecase

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchUsecaseSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new FetchUsecaseSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchUsecase($requestSecurity);

    if ($response->messagingV1Usecase !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAlphaSender

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListAlphaSenderRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListAlphaSenderSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAlphaSenderRequest();
    $request->page = 358152;
    $request->pageSize = 128926;
    $request->pageToken = 'nobis';
    $request->serviceSid = 'enim';

    $requestSecurity = new ListAlphaSenderSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listAlphaSender($request, $requestSecurity);

    if ($response->listAlphaSenderResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listBrandRegistrations

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListBrandRegistrationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListBrandRegistrationsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListBrandRegistrationsRequest();
    $request->page = 607831;
    $request->pageSize = 363711;
    $request->pageToken = 'minima';

    $requestSecurity = new ListBrandRegistrationsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listBrandRegistrations($request, $requestSecurity);

    if ($response->listBrandRegistrationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listBrandVetting

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListBrandVettingRequest;
use \OpenAPI\OpenAPI\Models\Shared\BrandVettingEnumVettingProviderEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListBrandVettingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListBrandVettingRequest();
    $request->brandSid = 'excepturi';
    $request->page = 38425;
    $request->pageSize = 438601;
    $request->pageToken = 'culpa';
    $request->vettingProvider = BrandVettingEnumVettingProviderEnum::CAMPAIGN_VERIFY;

    $requestSecurity = new ListBrandVettingSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listBrandVetting($request, $requestSecurity);

    if ($response->listBrandVettingResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listPhoneNumber

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListPhoneNumberRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListPhoneNumberSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListPhoneNumberRequest();
    $request->page = 988374;
    $request->pageSize = 958950;
    $request->pageToken = 'architecto';
    $request->serviceSid = 'mollitia';

    $requestSecurity = new ListPhoneNumberSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listPhoneNumber($request, $requestSecurity);

    if ($response->listPhoneNumberResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listService

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListServiceRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListServiceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListServiceRequest();
    $request->page = 208876;
    $request->pageSize = 635059;
    $request->pageToken = 'consequuntur';

    $requestSecurity = new ListServiceSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listService($request, $requestSecurity);

    if ($response->listServiceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listShortCode

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListShortCodeRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListShortCodeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListShortCodeRequest();
    $request->page = 995300;
    $request->pageSize = 653108;
    $request->pageToken = 'occaecati';
    $request->serviceSid = 'numquam';

    $requestSecurity = new ListShortCodeSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listShortCode($request, $requestSecurity);

    if ($response->listShortCodeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listUsAppToPerson

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListUsAppToPersonRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListUsAppToPersonSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListUsAppToPersonRequest();
    $request->messagingServiceSid = 'commodi';
    $request->page = 466311;
    $request->pageSize = 474697;
    $request->pageToken = 'velit';

    $requestSecurity = new ListUsAppToPersonSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listUsAppToPerson($request, $requestSecurity);

    if ($response->listUsAppToPersonResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateBrandRegistrations

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBrandRegistrationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBrandRegistrationsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateBrandRegistrationsRequest();
    $request->sid = 'error';

    $requestSecurity = new UpdateBrandRegistrationsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateBrandRegistrations($request, $requestSecurity);

    if ($response->messagingV1BrandRegistrations !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDomainCertV4

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDomainCertV4Request;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDomainCertV4UpdateDomainCertV4Request;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDomainCertV4Security;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDomainCertV4Request();
    $request->domainSid = 'quia';
    $request->requestBody = new UpdateDomainCertV4UpdateDomainCertV4Request();
    $request->requestBody->tlsCert = 'quis';

    $requestSecurity = new UpdateDomainCertV4Security();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateDomainCertV4($request, $requestSecurity);

    if ($response->messagingV1DomainCertV4 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDomainConfig

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDomainConfigRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDomainConfigUpdateDomainConfigRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDomainConfigSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDomainConfigRequest();
    $request->domainSid = 'vitae';
    $request->requestBody = new UpdateDomainConfigUpdateDomainConfigRequest();
    $request->requestBody->callbackUrl = 'https://profuse-ethernet.com';
    $request->requestBody->fallbackUrl = 'https://dimwitted-vaulting.info';

    $requestSecurity = new UpdateDomainConfigSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateDomainConfig($request, $requestSecurity);

    if ($response->messagingV1DomainConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateService

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceUpdateServiceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceUpdateServiceRequestFallbackMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceUpdateServiceRequestInboundMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServiceEnumScanMessageContentEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateServiceRequest();
    $request->requestBody = new UpdateServiceUpdateServiceRequest();
    $request->requestBody->areaCodeGeomatch = false;
    $request->requestBody->fallbackMethod = UpdateServiceUpdateServiceRequestFallbackMethodEnum::PATCH;
    $request->requestBody->fallbackToLongCode = false;
    $request->requestBody->fallbackUrl = 'https://adolescent-borrower.name';
    $request->requestBody->friendlyName = 'temporibus';
    $request->requestBody->inboundMethod = UpdateServiceUpdateServiceRequestInboundMethodEnum::PUT;
    $request->requestBody->inboundRequestUrl = 'http://wilted-weight.org';
    $request->requestBody->mmsConverter = false;
    $request->requestBody->scanMessageContent = ServiceEnumScanMessageContentEnum::ENABLE;
    $request->requestBody->smartEncoding = false;
    $request->requestBody->statusCallback = 'https://witty-avocado.name';
    $request->requestBody->stickySender = false;
    $request->requestBody->synchronousValidation = false;
    $request->requestBody->useInboundWebhookOnNumber = false;
    $request->requestBody->usecase = 'voluptate';
    $request->requestBody->validityPeriod = 739264;
    $request->sid = 'perferendis';

    $requestSecurity = new UpdateServiceSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateService($request, $requestSecurity);

    if ($response->messagingV1Service !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
