# payors

## Overview

A Payor is the entity which is sending money. Here you will find the available APIs for working with Payors.

### Available Operations

* [~~getPayorByIdV1~~](#getpayorbyidv1) - Get Payor :warning: **Deprecated**
* [getPayorByIdV2](#getpayorbyidv2) - Get Payor
* [payorAddPayorLogoV1](#payoraddpayorlogov1) - Add Logo
* [payorCreateApiKeyV1](#payorcreateapikeyv1) - Create API Key
* [payorCreateApplicationV1](#payorcreateapplicationv1) - Create Application
* [payorEmailOptOut](#payoremailoptout) - Reminder Email Opt-Out
* [payorGetBranding](#payorgetbranding) - Get Branding

## ~~getPayorByIdV1~~

<p>Get a Single Payor by Id.</p>
<p>deprecated since v2.10 - Use /v2/payors


> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPayorByIdV1Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPayorByIdV1Request();
    $request->payorId = '61d01747-6360-4a15-9b6a-660659a1adea';

    $response = $sdk->payors->getPayorByIdV1($request);

    if ($response->payorV1 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPayorByIdV2

Get a Single Payor by Id.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPayorByIdV2Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPayorByIdV2Request();
    $request->payorId = 'ab5851d6-c645-4b08-b618-91baa0fe1ade';

    $response = $sdk->payors->getPayorByIdV2($request);

    if ($response->payorV2 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## payorAddPayorLogoV1

<p>Add Payor Logo</p>
<p>Logo file is used in your branding and emails sent to payees</p>


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PayorAddPayorLogoV1Request;
use \OpenAPI\OpenAPI\Models\Shared\PayorLogoRequest;
use \OpenAPI\OpenAPI\Models\Shared\PayorLogoRequestLogo;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PayorAddPayorLogoV1Request();
    $request->payorLogoRequest = new PayorLogoRequest();
    $request->payorLogoRequest->logo = new PayorLogoRequestLogo();
    $request->payorLogoRequest->logo->content = 'voluptatem';
    $request->payorLogoRequest->logo->logo = 'alias';
    $request->payorId = '8e6f8c5f-350d-48cd-b5a3-418143010421';

    $response = $sdk->payors->payorAddPayorLogoV1($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## payorCreateApiKeyV1

<p>Create an an API key for the given payor Id and application Id</p>
<p>You can create multiple API Keys for a given application</p>
<p>API Keys are programmatic users for integrating your application with the Velo platform</p>


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PayorCreateApiKeyV1Request;
use \OpenAPI\OpenAPI\Models\Shared\PayorCreateApiKeyRequest;
use \OpenAPI\OpenAPI\Models\Shared\PayorCreateApiKeyRequestRolesEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PayorCreateApiKeyV1Request();
    $request->payorCreateApiKeyRequest = new PayorCreateApiKeyRequest();
    $request->payorCreateApiKeyRequest->description = 'Key for iOS mobile application';
    $request->payorCreateApiKeyRequest->name = 'iOS Key';
    $request->payorCreateApiKeyRequest->roles = [
        PayorCreateApiKeyRequestRolesEnum::VELO_PAYOR_ADMIN,
        PayorCreateApiKeyRequestRolesEnum::VELO_PAYOR_ADMIN,
        PayorCreateApiKeyRequestRolesEnum::VELO_PAYOR_SUPPORT,
    ];
    $request->applicationId = '5208ece7-e253-4b66-8451-c6c6e205e16d';
    $request->payorId = 'eab3fec9-578a-4645-8427-3a8418d16230';

    $response = $sdk->payors->payorCreateApiKeyV1($request);

    if ($response->payorCreateApiKeyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## payorCreateApplicationV1

<p>Create an application for the given Payor ID.</p>
<p>Applications provide a means to group your API Keys</p>
<p>For example you might have an SAP application that you wish to integrate with Velo</p>
<p>You can create an application and then create one or more API keys for the application</p>


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PayorCreateApplicationV1Request;
use \OpenAPI\OpenAPI\Models\Shared\PayorCreateApplicationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PayorCreateApplicationV1Request();
    $request->payorCreateApplicationRequest = new PayorCreateApplicationRequest();
    $request->payorCreateApplicationRequest->description = 'SAP Application integration';
    $request->payorCreateApplicationRequest->name = 'SAP';
    $request->payorId = '9fb09299-21ae-4fb9-b58c-4d86e68e4be0';

    $response = $sdk->payors->payorCreateApplicationV1($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## payorEmailOptOut

Update the emailRemindersOptOut field for a Payor. This API can be used to opt out
or opt into Payor Reminder emails. These emails are typically around payee events
such as payees registering and onboarding.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PayorEmailOptOutRequest;
use \OpenAPI\OpenAPI\Models\Shared\PayorEmailOptOutRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PayorEmailOptOutRequest();
    $request->payorEmailOptOutRequest = new PayorEmailOptOutRequest();
    $request->payorEmailOptOutRequest->reminderEmailsOptOut = false;
    $request->payorId = '56013f59-da75-47a5-9ecf-ef66ef1caa33';

    $response = $sdk->payors->payorEmailOptOut($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## payorGetBranding

Get the payor branding details.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PayorGetBrandingRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PayorGetBrandingRequest();
    $request->payorId = '83c2beb4-7737-43c8-972f-64d1db1f2c43';

    $response = $sdk->payors->payorGetBranding($request);

    if ($response->payorBrandingResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
