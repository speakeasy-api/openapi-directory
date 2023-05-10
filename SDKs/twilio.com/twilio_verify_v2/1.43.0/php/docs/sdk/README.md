# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [createAccessToken](#createaccesstoken) - Create a new enrollment Access Token for the Entity
* [createBucket](#createbucket) - Create a new Bucket for a Rate Limit
* [createChallenge](#createchallenge) - Create a new Challenge for the Factor
* [createEntity](#createentity) - Create a new Entity for the Service
* [createMessagingConfiguration](#createmessagingconfiguration) - Create a new MessagingConfiguration for a service.
* [createNewFactor](#createnewfactor) - Create a new Factor for the Entity
* [createNotification](#createnotification) - Create a new Notification for the corresponding Challenge
* [createRateLimit](#createratelimit) - Create a new Rate Limit for a Service
* [createSafelist](#createsafelist) - Add a new phone number to SafeList.
* [createService](#createservice) - Create a new Verification Service.
* [createVerification](#createverification) - Create a new Verification using a Service
* [createVerificationCheck](#createverificationcheck) - challenge a specific Verification Check.
* [createWebhook](#createwebhook) - Create a new Webhook for the Service
* [deleteBucket](#deletebucket) - Delete a specific Bucket.
* [deleteEntity](#deleteentity) - Delete a specific Entity.
* [deleteFactor](#deletefactor) - Delete a specific Factor.
* [deleteMessagingConfiguration](#deletemessagingconfiguration) - Delete a specific MessagingConfiguration.
* [deleteRateLimit](#deleteratelimit) - Delete a specific Rate Limit.
* [deleteSafelist](#deletesafelist) - Remove a phone number from SafeList.
* [deleteService](#deleteservice) - Delete a specific Verification Service Instance.
* [deleteWebhook](#deletewebhook) - Delete a specific Webhook.
* [fetchAccessToken](#fetchaccesstoken) - Fetch an Access Token for the Entity
* [fetchBucket](#fetchbucket) - Fetch a specific Bucket.
* [fetchChallenge](#fetchchallenge) - Fetch a specific Challenge.
* [fetchEntity](#fetchentity) - Fetch a specific Entity.
* [fetchFactor](#fetchfactor) - Fetch a specific Factor.
* [fetchForm](#fetchform) - Fetch the forms for a specific Form Type.
* [fetchMessagingConfiguration](#fetchmessagingconfiguration) - Fetch a specific MessagingConfiguration.
* [fetchRateLimit](#fetchratelimit) - Fetch a specific Rate Limit.
* [fetchSafelist](#fetchsafelist) - Check if a phone number exists in SafeList.
* [fetchService](#fetchservice) - Fetch specific Verification Service Instance.
* [fetchVerification](#fetchverification) - Fetch a specific Verification
* [fetchVerificationAttempt](#fetchverificationattempt) - Fetch a specific verification attempt.
* [fetchVerificationAttemptsSummary](#fetchverificationattemptssummary) - Get a summary of how many attempts were made and how many were converted.
* [fetchWebhook](#fetchwebhook) - Fetch a specific Webhook.
* [listBucket](#listbucket) - Retrieve a list of all Buckets for a Rate Limit.
* [listChallenge](#listchallenge) - Retrieve a list of all Challenges for a Factor.
* [listEntity](#listentity) - Retrieve a list of all Entities for a Service.
* [listFactor](#listfactor) - Retrieve a list of all Factors for an Entity.
* [listMessagingConfiguration](#listmessagingconfiguration) - Retrieve a list of all Messaging Configurations for a Service.
* [listRateLimit](#listratelimit) - Retrieve a list of all Rate Limits for a service.
* [listService](#listservice) - Retrieve a list of all Verification Services for an account.
* [listVerificationAttempt](#listverificationattempt) - List all the verification attempts for a given Account.
* [listVerificationTemplate](#listverificationtemplate) - List all the available templates for a given Account.
* [listWebhook](#listwebhook) - Retrieve a list of all Webhooks for a Service.
* [updateBucket](#updatebucket) - Update a specific Bucket.
* [updateChallenge](#updatechallenge) - Verify a specific Challenge.
* [updateFactor](#updatefactor) - Update a specific Factor. This endpoint can be used to Verify a Factor if passed an `AuthPayload` param.
* [updateMessagingConfiguration](#updatemessagingconfiguration) - Update a specific MessagingConfiguration
* [updateRateLimit](#updateratelimit) - Update a specific Rate Limit.
* [updateService](#updateservice) - Update a specific Verification Service.
* [updateVerification](#updateverification) - Update a Verification status
* [updateWebhook](#updatewebhook)

## createAccessToken

Create a new enrollment Access Token for the Entity

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateAccessTokenRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateAccessTokenCreateAccessTokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\AccessTokenEnumFactorTypesEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateAccessTokenSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAccessTokenRequest();
    $request->requestBody = new CreateAccessTokenCreateAccessTokenRequest();
    $request->requestBody->factorFriendlyName = 'unde';
    $request->requestBody->factorType = AccessTokenEnumFactorTypesEnum::PUSH;
    $request->requestBody->identity = 'nulla';
    $request->requestBody->ttl = 544883;
    $request->serviceSid = 'illum';

    $requestSecurity = new CreateAccessTokenSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createAccessToken($request, $requestSecurity);

    if ($response->verifyV2ServiceAccessToken !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createBucket

Create a new Bucket for a Rate Limit

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateBucketRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateBucketCreateBucketRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateBucketSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateBucketRequest();
    $request->rateLimitSid = 'vel';
    $request->requestBody = new CreateBucketCreateBucketRequest();
    $request->requestBody->interval = 623564;
    $request->requestBody->max = 645894;
    $request->serviceSid = 'suscipit';

    $requestSecurity = new CreateBucketSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createBucket($request, $requestSecurity);

    if ($response->verifyV2ServiceRateLimitBucket !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createChallenge

Create a new Challenge for the Factor

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateChallengeRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateChallengeCreateChallengeRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateChallengeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateChallengeRequest();
    $request->identity = 'iure';
    $request->requestBody = new CreateChallengeCreateChallengeRequest();
    $request->requestBody->authPayload = 'magnam';
    $request->requestBody->detailsFields = [
        'ipsa',
        'delectus',
        'tempora',
        'suscipit',
    ];
    $request->requestBody->detailsMessage = 'molestiae';
    $request->requestBody->expirationDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-07-25T16:12:20.938Z');
    $request->requestBody->factorSid = 'voluptatum';
    $request->requestBody->hiddenDetails = 'iusto';
    $request->serviceSid = 'excepturi';

    $requestSecurity = new CreateChallengeSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createChallenge($request, $requestSecurity);

    if ($response->verifyV2ServiceEntityChallenge !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createEntity

Create a new Entity for the Service

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateEntityRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateEntityCreateEntityRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateEntitySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateEntityRequest();
    $request->requestBody = new CreateEntityCreateEntityRequest();
    $request->requestBody->identity = 'nisi';
    $request->serviceSid = 'recusandae';

    $requestSecurity = new CreateEntitySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createEntity($request, $requestSecurity);

    if ($response->verifyV2ServiceEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createMessagingConfiguration

Create a new MessagingConfiguration for a service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateMessagingConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateMessagingConfigurationCreateMessagingConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateMessagingConfigurationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateMessagingConfigurationRequest();
    $request->requestBody = new CreateMessagingConfigurationCreateMessagingConfigurationRequest();
    $request->requestBody->country = 'Sri Lanka';
    $request->requestBody->messagingServiceSid = 'ab';
    $request->serviceSid = 'quis';

    $requestSecurity = new CreateMessagingConfigurationSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createMessagingConfiguration($request, $requestSecurity);

    if ($response->verifyV2ServiceMessagingConfiguration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createNewFactor

Create a new Factor for the Entity

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateNewFactorRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNewFactorCreateNewFactorRequest;
use \OpenAPI\OpenAPI\Models\Shared\NewFactorEnumTotpAlgorithmsEnum;
use \OpenAPI\OpenAPI\Models\Shared\NewFactorEnumNotificationPlatformsEnum;
use \OpenAPI\OpenAPI\Models\Shared\NewFactorEnumFactorTypesEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNewFactorSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNewFactorRequest();
    $request->identity = 'veritatis';
    $request->requestBody = new CreateNewFactorCreateNewFactorRequest();
    $request->requestBody->bindingAlg = 'deserunt';
    $request->requestBody->bindingPublicKey = 'perferendis';
    $request->requestBody->bindingSecret = 'ipsam';
    $request->requestBody->configAlg = NewFactorEnumTotpAlgorithmsEnum::SHA512;
    $request->requestBody->configAppId = 'sapiente';
    $request->requestBody->configCodeLength = 778157;
    $request->requestBody->configNotificationPlatform = NewFactorEnumNotificationPlatformsEnum::APN;
    $request->requestBody->configNotificationToken = 'at';
    $request->requestBody->configSDKVersion = 'at';
    $request->requestBody->configSkew = 978619;
    $request->requestBody->configTimeStep = 473608;
    $request->requestBody->factorType = NewFactorEnumFactorTypesEnum::TOTP;
    $request->requestBody->friendlyName = 'quod';
    $request->requestBody->metadata = 'esse';
    $request->serviceSid = 'totam';

    $requestSecurity = new CreateNewFactorSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createNewFactor($request, $requestSecurity);

    if ($response->verifyV2ServiceEntityNewFactor !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createNotification

Create a new Notification for the corresponding Challenge

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateNotificationRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNotificationCreateNotificationRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNotificationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNotificationRequest();
    $request->challengeSid = 'porro';
    $request->identity = 'dolorum';
    $request->requestBody = new CreateNotificationCreateNotificationRequest();
    $request->requestBody->ttl = 118274;
    $request->serviceSid = 'nam';

    $requestSecurity = new CreateNotificationSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createNotification($request, $requestSecurity);

    if ($response->verifyV2ServiceEntityChallengeNotification !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createRateLimit

Create a new Rate Limit for a Service

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateRateLimitRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateRateLimitCreateRateLimitRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateRateLimitSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateRateLimitRequest();
    $request->requestBody = new CreateRateLimitCreateRateLimitRequest();
    $request->requestBody->description = 'officia';
    $request->requestBody->uniqueName = 'occaecati';
    $request->serviceSid = 'fugit';

    $requestSecurity = new CreateRateLimitSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createRateLimit($request, $requestSecurity);

    if ($response->verifyV2ServiceRateLimit !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSafelist

Add a new phone number to SafeList.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateSafelistCreateSafelistRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSafelistSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSafelistCreateSafelistRequest();
    $request->phoneNumber = 'deleniti';

    $requestSecurity = new CreateSafelistSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createSafelist($request, $requestSecurity);

    if ($response->verifyV2Safelist !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createService

Create a new Verification Service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateServiceCreateServiceRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateServiceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateServiceCreateServiceRequest();
    $request->codeLength = 944669;
    $request->customCodeEnabled = false;
    $request->defaultTemplateSid = 'optio';
    $request->doNotShareWarningEnabled = false;
    $request->dtmfInputRequired = false;
    $request->friendlyName = 'totam';
    $request->lookupEnabled = false;
    $request->psd2Enabled = false;
    $request->pushApnCredentialSid = 'beatae';
    $request->pushFcmCredentialSid = 'commodi';
    $request->pushIncludeDate = false;
    $request->skipSmsToLandlines = false;
    $request->totpCodeLength = 473600;
    $request->totpIssuer = 'modi';
    $request->totpSkew = 186332;
    $request->totpTimeStep = 774234;
    $request->ttsName = 'cum';

    $requestSecurity = new CreateServiceSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createService($request, $requestSecurity);

    if ($response->verifyV2Service !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createVerification

Create a new Verification using a Service

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateVerificationRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateVerificationCreateVerificationRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateVerificationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateVerificationRequest();
    $request->requestBody = new CreateVerificationCreateVerificationRequest();
    $request->requestBody->amount = 'esse';
    $request->requestBody->appHash = 'ipsum';
    $request->requestBody->channel = 'excepturi';
    $request->requestBody->channelConfiguration = 'aspernatur';
    $request->requestBody->customCode = 'perferendis';
    $request->requestBody->customFriendlyName = 'ad';
    $request->requestBody->customMessage = 'natus';
    $request->requestBody->deviceIp = 'sed';
    $request->requestBody->locale = 'iste';
    $request->requestBody->payee = 'dolor';
    $request->requestBody->rateLimits = 'natus';
    $request->requestBody->sendDigits = 'laboriosam';
    $request->requestBody->templateCustomSubstitutions = 'hic';
    $request->requestBody->templateSid = 'saepe';
    $request->requestBody->to = 'fuga';
    $request->serviceSid = 'in';

    $requestSecurity = new CreateVerificationSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createVerification($request, $requestSecurity);

    if ($response->verifyV2ServiceVerification !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createVerificationCheck

challenge a specific Verification Check.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateVerificationCheckRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateVerificationCheckCreateVerificationCheckRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateVerificationCheckSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateVerificationCheckRequest();
    $request->requestBody = new CreateVerificationCheckCreateVerificationCheckRequest();
    $request->requestBody->amount = 'corporis';
    $request->requestBody->code = 'iste';
    $request->requestBody->payee = 'iure';
    $request->requestBody->to = 'saepe';
    $request->requestBody->verificationSid = 'quidem';
    $request->serviceSid = 'architecto';

    $requestSecurity = new CreateVerificationCheckSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createVerificationCheck($request, $requestSecurity);

    if ($response->verifyV2ServiceVerificationCheck !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createWebhook

Create a new Webhook for the Service

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateWebhookRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateWebhookCreateWebhookRequest;
use \OpenAPI\OpenAPI\Models\Shared\WebhookEnumStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\WebhookEnumVersionEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateWebhookSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateWebhookRequest();
    $request->requestBody = new CreateWebhookCreateWebhookRequest();
    $request->requestBody->eventTypes = [
        'reiciendis',
    ];
    $request->requestBody->friendlyName = 'est';
    $request->requestBody->status = WebhookEnumStatusEnum::DISABLED;
    $request->requestBody->version = WebhookEnumVersionEnum::V2;
    $request->requestBody->webhookUrl = 'dolores';
    $request->serviceSid = 'dolorem';

    $requestSecurity = new CreateWebhookSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createWebhook($request, $requestSecurity);

    if ($response->verifyV2ServiceWebhook !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteBucket

Delete a specific Bucket.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteBucketRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteBucketSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteBucketRequest();
    $request->rateLimitSid = 'corporis';
    $request->serviceSid = 'explicabo';
    $request->sid = 'nobis';

    $requestSecurity = new DeleteBucketSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteBucket($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteEntity

Delete a specific Entity.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteEntityRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteEntitySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteEntityRequest();
    $request->identity = 'enim';
    $request->serviceSid = 'omnis';

    $requestSecurity = new DeleteEntitySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteEntity($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteFactor

Delete a specific Factor.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFactorRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFactorSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteFactorRequest();
    $request->identity = 'nemo';
    $request->serviceSid = 'minima';
    $request->sid = 'excepturi';

    $requestSecurity = new DeleteFactorSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteFactor($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteMessagingConfiguration

Delete a specific MessagingConfiguration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteMessagingConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteMessagingConfigurationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteMessagingConfigurationRequest();
    $request->country = 'Argentina';
    $request->serviceSid = 'iure';

    $requestSecurity = new DeleteMessagingConfigurationSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteMessagingConfiguration($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteRateLimit

Delete a specific Rate Limit.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRateLimitRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRateLimitSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRateLimitRequest();
    $request->serviceSid = 'culpa';
    $request->sid = 'doloribus';

    $requestSecurity = new DeleteRateLimitSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteRateLimit($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSafelist

Remove a phone number from SafeList.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSafelistRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSafelistSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSafelistRequest();
    $request->phoneNumber = 'sapiente';

    $requestSecurity = new DeleteSafelistSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteSafelist($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteService

Delete a specific Verification Service Instance.

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
    $request->sid = 'architecto';

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

## deleteWebhook

Delete a specific Webhook.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWebhookRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWebhookSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteWebhookRequest();
    $request->serviceSid = 'mollitia';
    $request->sid = 'dolorem';

    $requestSecurity = new DeleteWebhookSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteWebhook($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchAccessToken

Fetch an Access Token for the Entity

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchAccessTokenRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchAccessTokenSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchAccessTokenRequest();
    $request->serviceSid = 'culpa';
    $request->sid = 'consequuntur';

    $requestSecurity = new FetchAccessTokenSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchAccessToken($request, $requestSecurity);

    if ($response->verifyV2ServiceAccessToken !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchBucket

Fetch a specific Bucket.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchBucketRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchBucketSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchBucketRequest();
    $request->rateLimitSid = 'repellat';
    $request->serviceSid = 'mollitia';
    $request->sid = 'occaecati';

    $requestSecurity = new FetchBucketSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchBucket($request, $requestSecurity);

    if ($response->verifyV2ServiceRateLimitBucket !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchChallenge

Fetch a specific Challenge.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchChallengeRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchChallengeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchChallengeRequest();
    $request->identity = 'numquam';
    $request->serviceSid = 'commodi';
    $request->sid = 'quam';

    $requestSecurity = new FetchChallengeSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchChallenge($request, $requestSecurity);

    if ($response->verifyV2ServiceEntityChallenge !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchEntity

Fetch a specific Entity.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchEntityRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchEntitySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchEntityRequest();
    $request->identity = 'molestiae';
    $request->serviceSid = 'velit';

    $requestSecurity = new FetchEntitySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchEntity($request, $requestSecurity);

    if ($response->verifyV2ServiceEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchFactor

Fetch a specific Factor.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchFactorRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchFactorSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchFactorRequest();
    $request->identity = 'error';
    $request->serviceSid = 'quia';
    $request->sid = 'quis';

    $requestSecurity = new FetchFactorSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchFactor($request, $requestSecurity);

    if ($response->verifyV2ServiceEntityFactor !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchForm

Fetch the forms for a specific Form Type.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\FormEnumFormTypesEnum;
use \OpenAPI\OpenAPI\Models\Operations\FetchFormSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchFormRequest();
    $request->formType = FormEnumFormTypesEnum::FORM_PUSH;

    $requestSecurity = new FetchFormSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchForm($request, $requestSecurity);

    if ($response->verifyV2Form !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchMessagingConfiguration

Fetch a specific MessagingConfiguration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchMessagingConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchMessagingConfigurationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchMessagingConfigurationRequest();
    $request->country = 'Bosnia and Herzegovina';
    $request->serviceSid = 'laborum';

    $requestSecurity = new FetchMessagingConfigurationSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchMessagingConfiguration($request, $requestSecurity);

    if ($response->verifyV2ServiceMessagingConfiguration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchRateLimit

Fetch a specific Rate Limit.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchRateLimitRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchRateLimitSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchRateLimitRequest();
    $request->serviceSid = 'animi';
    $request->sid = 'enim';

    $requestSecurity = new FetchRateLimitSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchRateLimit($request, $requestSecurity);

    if ($response->verifyV2ServiceRateLimit !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchSafelist

Check if a phone number exists in SafeList.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchSafelistRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchSafelistSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchSafelistRequest();
    $request->phoneNumber = 'odit';

    $requestSecurity = new FetchSafelistSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchSafelist($request, $requestSecurity);

    if ($response->verifyV2Safelist !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchService

Fetch specific Verification Service Instance.

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
    $request->sid = 'quo';

    $requestSecurity = new FetchServiceSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchService($request, $requestSecurity);

    if ($response->verifyV2Service !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchVerification

Fetch a specific Verification

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchVerificationRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchVerificationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchVerificationRequest();
    $request->serviceSid = 'sequi';
    $request->sid = 'tenetur';

    $requestSecurity = new FetchVerificationSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchVerification($request, $requestSecurity);

    if ($response->verifyV2ServiceVerification !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchVerificationAttempt

Fetch a specific verification attempt.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchVerificationAttemptRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchVerificationAttemptSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchVerificationAttemptRequest();
    $request->sid = 'ipsam';

    $requestSecurity = new FetchVerificationAttemptSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchVerificationAttempt($request, $requestSecurity);

    if ($response->verifyV2VerificationAttempt !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchVerificationAttemptsSummary

Get a summary of how many attempts were made and how many were converted.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchVerificationAttemptsSummaryRequest;
use \OpenAPI\OpenAPI\Models\Shared\VerificationAttemptsSummaryEnumChannelsEnum;
use \OpenAPI\OpenAPI\Models\Operations\FetchVerificationAttemptsSummarySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchVerificationAttemptsSummaryRequest();
    $request->channel = VerificationAttemptsSummaryEnumChannelsEnum::EMAIL;
    $request->country = 'possimus';
    $request->dateCreatedAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-26T13:23:33.410Z');
    $request->dateCreatedBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-04-29T07:12:18.684Z');
    $request->destinationPrefix = 'laborum';
    $request->verifyServiceSid = 'quasi';

    $requestSecurity = new FetchVerificationAttemptsSummarySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchVerificationAttemptsSummary($request, $requestSecurity);

    if ($response->verifyV2VerificationAttemptsSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchWebhook

Fetch a specific Webhook.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchWebhookRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchWebhookSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchWebhookRequest();
    $request->serviceSid = 'reiciendis';
    $request->sid = 'voluptatibus';

    $requestSecurity = new FetchWebhookSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchWebhook($request, $requestSecurity);

    if ($response->verifyV2ServiceWebhook !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listBucket

Retrieve a list of all Buckets for a Rate Limit.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListBucketRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListBucketSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListBucketRequest();
    $request->page = 878194;
    $request->pageSize = 468651;
    $request->pageToken = 'praesentium';
    $request->rateLimitSid = 'voluptatibus';
    $request->serviceSid = 'ipsa';

    $requestSecurity = new ListBucketSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listBucket($request, $requestSecurity);

    if ($response->listBucketResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listChallenge

Retrieve a list of all Challenges for a Factor.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListChallengeRequest;
use \OpenAPI\OpenAPI\Models\Shared\ChallengeEnumListOrdersEnum;
use \OpenAPI\OpenAPI\Models\Shared\ChallengeEnumChallengeStatusesEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListChallengeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListChallengeRequest();
    $request->factorSid = 'omnis';
    $request->identity = 'voluptate';
    $request->order = ChallengeEnumListOrdersEnum::DESC;
    $request->page = 19987;
    $request->pageSize = 39187;
    $request->pageToken = 'reprehenderit';
    $request->serviceSid = 'ut';
    $request->status = ChallengeEnumChallengeStatusesEnum::DENIED;

    $requestSecurity = new ListChallengeSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listChallenge($request, $requestSecurity);

    if ($response->listChallengeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listEntity

Retrieve a list of all Entities for a Service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListEntityRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListEntitySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListEntityRequest();
    $request->page = 120196;
    $request->pageSize = 359444;
    $request->pageToken = 'dolore';
    $request->serviceSid = 'iusto';

    $requestSecurity = new ListEntitySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listEntity($request, $requestSecurity);

    if ($response->listEntityResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listFactor

Retrieve a list of all Factors for an Entity.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListFactorRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListFactorSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListFactorRequest();
    $request->identity = 'dicta';
    $request->page = 688661;
    $request->pageSize = 317983;
    $request->pageToken = 'accusamus';
    $request->serviceSid = 'commodi';

    $requestSecurity = new ListFactorSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listFactor($request, $requestSecurity);

    if ($response->listFactorResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listMessagingConfiguration

Retrieve a list of all Messaging Configurations for a Service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListMessagingConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListMessagingConfigurationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListMessagingConfigurationRequest();
    $request->page = 918236;
    $request->pageSize = 64147;
    $request->pageToken = 'ipsum';
    $request->serviceSid = 'quidem';

    $requestSecurity = new ListMessagingConfigurationSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listMessagingConfiguration($request, $requestSecurity);

    if ($response->listMessagingConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listRateLimit

Retrieve a list of all Rate Limits for a service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListRateLimitRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListRateLimitSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListRateLimitRequest();
    $request->page = 565189;
    $request->pageSize = 566602;
    $request->pageToken = 'pariatur';
    $request->serviceSid = 'modi';

    $requestSecurity = new ListRateLimitSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listRateLimit($request, $requestSecurity);

    if ($response->listRateLimitResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listService

Retrieve a list of all Verification Services for an account.

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
    $request->page = 508969;
    $request->pageSize = 523248;
    $request->pageToken = 'voluptates';

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

## listVerificationAttempt

List all the verification attempts for a given Account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListVerificationAttemptRequest;
use \OpenAPI\OpenAPI\Models\Shared\VerificationAttemptEnumChannelsEnum;
use \OpenAPI\OpenAPI\Models\Shared\VerificationAttemptEnumConversionStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListVerificationAttemptSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListVerificationAttemptRequest();
    $request->channel = VerificationAttemptEnumChannelsEnum::SMS;
    $request->channelDataTo = 'repudiandae';
    $request->country = 'sint';
    $request->dateCreatedAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-26T19:21:55.034Z');
    $request->dateCreatedBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-06T17:20:08.756Z');
    $request->page = 9356;
    $request->pageSize = 667411;
    $request->pageToken = 'quibusdam';
    $request->status = VerificationAttemptEnumConversionStatusEnum::CONVERTED;
    $request->verificationSid = 'deserunt';
    $request->verifyServiceSid = 'distinctio';

    $requestSecurity = new ListVerificationAttemptSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listVerificationAttempt($request, $requestSecurity);

    if ($response->listVerificationAttemptResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listVerificationTemplate

List all the available templates for a given Account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListVerificationTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListVerificationTemplateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListVerificationTemplateRequest();
    $request->friendlyName = 'quibusdam';
    $request->page = 289406;
    $request->pageSize = 264730;
    $request->pageToken = 'qui';

    $requestSecurity = new ListVerificationTemplateSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listVerificationTemplate($request, $requestSecurity);

    if ($response->listVerificationTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listWebhook

Retrieve a list of all Webhooks for a Service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListWebhookRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListWebhookSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListWebhookRequest();
    $request->page = 397821;
    $request->pageSize = 586513;
    $request->pageToken = 'quos';
    $request->serviceSid = 'perferendis';

    $requestSecurity = new ListWebhookSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listWebhook($request, $requestSecurity);

    if ($response->listWebhookResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateBucket

Update a specific Bucket.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBucketRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBucketUpdateBucketRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBucketSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateBucketRequest();
    $request->rateLimitSid = 'magni';
    $request->requestBody = new UpdateBucketUpdateBucketRequest();
    $request->requestBody->interval = 828940;
    $request->requestBody->max = 369808;
    $request->serviceSid = 'alias';
    $request->sid = 'fugit';

    $requestSecurity = new UpdateBucketSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateBucket($request, $requestSecurity);

    if ($response->verifyV2ServiceRateLimitBucket !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateChallenge

Verify a specific Challenge.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateChallengeRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateChallengeUpdateChallengeRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateChallengeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateChallengeRequest();
    $request->identity = 'dolorum';
    $request->requestBody = new UpdateChallengeUpdateChallengeRequest();
    $request->requestBody->authPayload = 'excepturi';
    $request->requestBody->metadata = 'tempora';
    $request->serviceSid = 'facilis';
    $request->sid = 'tempore';

    $requestSecurity = new UpdateChallengeSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateChallenge($request, $requestSecurity);

    if ($response->verifyV2ServiceEntityChallenge !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateFactor

Update a specific Factor. This endpoint can be used to Verify a Factor if passed an `AuthPayload` param.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFactorRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFactorUpdateFactorRequest;
use \OpenAPI\OpenAPI\Models\Shared\FactorEnumTotpAlgorithmsEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFactorSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateFactorRequest();
    $request->identity = 'labore';
    $request->requestBody = new UpdateFactorUpdateFactorRequest();
    $request->requestBody->authPayload = 'delectus';
    $request->requestBody->configAlg = FactorEnumTotpAlgorithmsEnum::SHA256;
    $request->requestBody->configCodeLength = 248753;
    $request->requestBody->configNotificationPlatform = 'eligendi';
    $request->requestBody->configNotificationToken = 'sint';
    $request->requestBody->configSDKVersion = 'aliquid';
    $request->requestBody->configSkew = 592042;
    $request->requestBody->configTimeStep = 896039;
    $request->requestBody->friendlyName = 'sint';
    $request->serviceSid = 'officia';
    $request->sid = 'dolor';

    $requestSecurity = new UpdateFactorSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateFactor($request, $requestSecurity);

    if ($response->verifyV2ServiceEntityFactor !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateMessagingConfiguration

Update a specific MessagingConfiguration

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMessagingConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMessagingConfigurationUpdateMessagingConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMessagingConfigurationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateMessagingConfigurationRequest();
    $request->country = 'Togo';
    $request->requestBody = new UpdateMessagingConfigurationUpdateMessagingConfigurationRequest();
    $request->requestBody->messagingServiceSid = 'a';
    $request->serviceSid = 'dolorum';

    $requestSecurity = new UpdateMessagingConfigurationSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateMessagingConfiguration($request, $requestSecurity);

    if ($response->verifyV2ServiceMessagingConfiguration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateRateLimit

Update a specific Rate Limit.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRateLimitRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRateLimitUpdateRateLimitRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRateLimitSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateRateLimitRequest();
    $request->requestBody = new UpdateRateLimitUpdateRateLimitRequest();
    $request->requestBody->description = 'in';
    $request->serviceSid = 'in';
    $request->sid = 'illum';

    $requestSecurity = new UpdateRateLimitSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateRateLimit($request, $requestSecurity);

    if ($response->verifyV2ServiceRateLimit !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateService

Update a specific Verification Service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceUpdateServiceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateServiceRequest();
    $request->requestBody = new UpdateServiceUpdateServiceRequest();
    $request->requestBody->codeLength = 978571;
    $request->requestBody->customCodeEnabled = false;
    $request->requestBody->defaultTemplateSid = 'rerum';
    $request->requestBody->doNotShareWarningEnabled = false;
    $request->requestBody->dtmfInputRequired = false;
    $request->requestBody->friendlyName = 'dicta';
    $request->requestBody->lookupEnabled = false;
    $request->requestBody->psd2Enabled = false;
    $request->requestBody->pushApnCredentialSid = 'magnam';
    $request->requestBody->pushFcmCredentialSid = 'cumque';
    $request->requestBody->pushIncludeDate = false;
    $request->requestBody->skipSmsToLandlines = false;
    $request->requestBody->totpCodeLength = 813798;
    $request->requestBody->totpIssuer = 'ea';
    $request->requestBody->totpSkew = 396506;
    $request->requestBody->totpTimeStep = 675439;
    $request->requestBody->ttsName = 'accusamus';
    $request->sid = 'non';

    $requestSecurity = new UpdateServiceSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateService($request, $requestSecurity);

    if ($response->verifyV2Service !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateVerification

Update a Verification status

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateVerificationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateVerificationUpdateVerificationRequest;
use \OpenAPI\OpenAPI\Models\Shared\VerificationEnumStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateVerificationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateVerificationRequest();
    $request->requestBody = new UpdateVerificationUpdateVerificationRequest();
    $request->requestBody->status = VerificationEnumStatusEnum::APPROVED;
    $request->serviceSid = 'enim';
    $request->sid = 'accusamus';

    $requestSecurity = new UpdateVerificationSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateVerification($request, $requestSecurity);

    if ($response->verifyV2ServiceVerification !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateWebhook

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWebhookRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWebhookUpdateWebhookRequest;
use \OpenAPI\OpenAPI\Models\Shared\WebhookEnumStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\WebhookEnumVersionEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWebhookSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateWebhookRequest();
    $request->requestBody = new UpdateWebhookUpdateWebhookRequest();
    $request->requestBody->eventTypes = [
        'quidem',
        'provident',
        'nam',
        'id',
    ];
    $request->requestBody->friendlyName = 'blanditiis';
    $request->requestBody->status = WebhookEnumStatusEnum::DISABLED;
    $request->requestBody->version = WebhookEnumVersionEnum::V2;
    $request->requestBody->webhookUrl = 'amet';
    $request->serviceSid = 'deserunt';
    $request->sid = 'nisi';

    $requestSecurity = new UpdateWebhookSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateWebhook($request, $requestSecurity);

    if ($response->verifyV2ServiceWebhook !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
