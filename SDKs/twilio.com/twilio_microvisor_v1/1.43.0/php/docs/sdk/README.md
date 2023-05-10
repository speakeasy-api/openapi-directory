# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [createAccountConfig](#createaccountconfig) - Create a config for an Account.
* [createAccountSecret](#createaccountsecret) - Create a secret for an Account.
* [createDeviceConfig](#createdeviceconfig) - Create a config for a Microvisor Device.
* [createDeviceSecret](#createdevicesecret) - Create a secret for a Microvisor Device.
* [deleteAccountConfig](#deleteaccountconfig) - Delete a config for an Account.
* [deleteAccountSecret](#deleteaccountsecret) - Delete a secret for an Account.
* [deleteApp](#deleteapp) - Delete a specific App.
* [deleteDeviceConfig](#deletedeviceconfig) - Delete a config for a Microvisor Device.
* [deleteDeviceSecret](#deletedevicesecret) - Delete a secret for a Microvisor Device.
* [fetchAccountConfig](#fetchaccountconfig) - Retrieve a Config for an Account.
* [fetchAccountSecret](#fetchaccountsecret) - Retrieve a Secret for an Account.
* [fetchApp](#fetchapp) - Fetch a specific App.
* [fetchAppManifest](#fetchappmanifest) - Retrieve the Manifest for an App.
* [fetchDevice](#fetchdevice) - Fetch a specific Device.
* [fetchDeviceConfig](#fetchdeviceconfig) - Retrieve a Config for a Device.
* [fetchDeviceSecret](#fetchdevicesecret) - Retrieve a Secret for a Device.
* [listAccountConfig](#listaccountconfig) - Retrieve a list of all Configs for an Account.
* [listAccountSecret](#listaccountsecret) - Retrieve a list of all Secrets for an Account.
* [listApp](#listapp) - Retrieve a list of all Apps for an Account.
* [listDevice](#listdevice) - Retrieve a list of all Devices registered with the Account.
* [listDeviceConfig](#listdeviceconfig) - Retrieve a list of all Configs for a Device.
* [listDeviceSecret](#listdevicesecret) - Retrieve a list of all Secrets for a Device.
* [updateAccountConfig](#updateaccountconfig) - Update a config for an Account.
* [updateAccountSecret](#updateaccountsecret) - Update a secret for an Account.
* [updateDevice](#updatedevice) - Update a specific Device.
* [updateDeviceConfig](#updatedeviceconfig) - Update a config for a Microvisor Device.
* [updateDeviceSecret](#updatedevicesecret) - Update a secret for a Microvisor Device.

## createAccountConfig

Create a config for an Account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateAccountConfigCreateAccountConfigRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateAccountConfigSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAccountConfigCreateAccountConfigRequest();
    $request->key = 'distinctio';
    $request->value = 'quibusdam';

    $requestSecurity = new CreateAccountConfigSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createAccountConfig($request, $requestSecurity);

    if ($response->microvisorV1AccountConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createAccountSecret

Create a secret for an Account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateAccountSecretCreateAccountSecretRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateAccountSecretSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAccountSecretCreateAccountSecretRequest();
    $request->key = 'unde';
    $request->value = 'nulla';

    $requestSecurity = new CreateAccountSecretSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createAccountSecret($request, $requestSecurity);

    if ($response->microvisorV1AccountSecret !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDeviceConfig

Create a config for a Microvisor Device.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeviceConfigRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeviceConfigCreateDeviceConfigRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeviceConfigSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDeviceConfigRequest();
    $request->deviceSid = 'corrupti';
    $request->requestBody = new CreateDeviceConfigCreateDeviceConfigRequest();
    $request->requestBody->key = 'illum';
    $request->requestBody->value = 'vel';

    $requestSecurity = new CreateDeviceConfigSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createDeviceConfig($request, $requestSecurity);

    if ($response->microvisorV1DeviceDeviceConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDeviceSecret

Create a secret for a Microvisor Device.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeviceSecretRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeviceSecretCreateDeviceSecretRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeviceSecretSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDeviceSecretRequest();
    $request->deviceSid = 'error';
    $request->requestBody = new CreateDeviceSecretCreateDeviceSecretRequest();
    $request->requestBody->key = 'deserunt';
    $request->requestBody->value = 'suscipit';

    $requestSecurity = new CreateDeviceSecretSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createDeviceSecret($request, $requestSecurity);

    if ($response->microvisorV1DeviceDeviceSecret !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAccountConfig

Delete a config for an Account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAccountConfigRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAccountConfigSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAccountConfigRequest();
    $request->key = 'iure';

    $requestSecurity = new DeleteAccountConfigSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteAccountConfig($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAccountSecret

Delete a secret for an Account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAccountSecretRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAccountSecretSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAccountSecretRequest();
    $request->key = 'magnam';

    $requestSecurity = new DeleteAccountSecretSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteAccountSecret($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteApp

Delete a specific App.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAppRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAppSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAppRequest();
    $request->sid = 'debitis';

    $requestSecurity = new DeleteAppSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteApp($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDeviceConfig

Delete a config for a Microvisor Device.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDeviceConfigRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDeviceConfigSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDeviceConfigRequest();
    $request->deviceSid = 'ipsa';
    $request->key = 'delectus';

    $requestSecurity = new DeleteDeviceConfigSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteDeviceConfig($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDeviceSecret

Delete a secret for a Microvisor Device.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDeviceSecretRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDeviceSecretSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDeviceSecretRequest();
    $request->deviceSid = 'tempora';
    $request->key = 'suscipit';

    $requestSecurity = new DeleteDeviceSecretSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteDeviceSecret($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchAccountConfig

Retrieve a Config for an Account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchAccountConfigRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchAccountConfigSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchAccountConfigRequest();
    $request->key = 'molestiae';

    $requestSecurity = new FetchAccountConfigSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchAccountConfig($request, $requestSecurity);

    if ($response->microvisorV1AccountConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchAccountSecret

Retrieve a Secret for an Account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchAccountSecretRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchAccountSecretSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchAccountSecretRequest();
    $request->key = 'minus';

    $requestSecurity = new FetchAccountSecretSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchAccountSecret($request, $requestSecurity);

    if ($response->microvisorV1AccountSecret !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchApp

Fetch a specific App.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchAppRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchAppSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchAppRequest();
    $request->sid = 'placeat';

    $requestSecurity = new FetchAppSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchApp($request, $requestSecurity);

    if ($response->microvisorV1App !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchAppManifest

Retrieve the Manifest for an App.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchAppManifestRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchAppManifestSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchAppManifestRequest();
    $request->appSid = 'voluptatum';

    $requestSecurity = new FetchAppManifestSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchAppManifest($request, $requestSecurity);

    if ($response->microvisorV1AppAppManifest !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchDevice

Fetch a specific Device.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchDeviceRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchDeviceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchDeviceRequest();
    $request->sid = 'iusto';

    $requestSecurity = new FetchDeviceSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchDevice($request, $requestSecurity);

    if ($response->microvisorV1Device !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchDeviceConfig

Retrieve a Config for a Device.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchDeviceConfigRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchDeviceConfigSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchDeviceConfigRequest();
    $request->deviceSid = 'excepturi';
    $request->key = 'nisi';

    $requestSecurity = new FetchDeviceConfigSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchDeviceConfig($request, $requestSecurity);

    if ($response->microvisorV1DeviceDeviceConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchDeviceSecret

Retrieve a Secret for a Device.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchDeviceSecretRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchDeviceSecretSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchDeviceSecretRequest();
    $request->deviceSid = 'recusandae';
    $request->key = 'temporibus';

    $requestSecurity = new FetchDeviceSecretSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchDeviceSecret($request, $requestSecurity);

    if ($response->microvisorV1DeviceDeviceSecret !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAccountConfig

Retrieve a list of all Configs for an Account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListAccountConfigRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListAccountConfigSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAccountConfigRequest();
    $request->page = 71036;
    $request->pageSize = 337396;
    $request->pageToken = 'veritatis';

    $requestSecurity = new ListAccountConfigSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listAccountConfig($request, $requestSecurity);

    if ($response->listAccountConfigResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAccountSecret

Retrieve a list of all Secrets for an Account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListAccountSecretRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListAccountSecretSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAccountSecretRequest();
    $request->page = 648172;
    $request->pageSize = 20218;
    $request->pageToken = 'ipsam';

    $requestSecurity = new ListAccountSecretSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listAccountSecret($request, $requestSecurity);

    if ($response->listAccountSecretResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listApp

Retrieve a list of all Apps for an Account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListAppRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListAppSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAppRequest();
    $request->page = 832620;
    $request->pageSize = 957156;
    $request->pageToken = 'quo';

    $requestSecurity = new ListAppSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listApp($request, $requestSecurity);

    if ($response->listAppResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDevice

Retrieve a list of all Devices registered with the Account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListDeviceRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListDeviceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDeviceRequest();
    $request->page = 140350;
    $request->pageSize = 870013;
    $request->pageToken = 'at';

    $requestSecurity = new ListDeviceSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listDevice($request, $requestSecurity);

    if ($response->listDeviceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDeviceConfig

Retrieve a list of all Configs for a Device.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListDeviceConfigRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListDeviceConfigSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDeviceConfigRequest();
    $request->deviceSid = 'maiores';
    $request->page = 473608;
    $request->pageSize = 799159;
    $request->pageToken = 'quod';

    $requestSecurity = new ListDeviceConfigSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listDeviceConfig($request, $requestSecurity);

    if ($response->listDeviceConfigResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDeviceSecret

Retrieve a list of all Secrets for a Device.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListDeviceSecretRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListDeviceSecretSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDeviceSecretRequest();
    $request->deviceSid = 'esse';
    $request->page = 520478;
    $request->pageSize = 780529;
    $request->pageToken = 'dolorum';

    $requestSecurity = new ListDeviceSecretSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listDeviceSecret($request, $requestSecurity);

    if ($response->listDeviceSecretResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateAccountConfig

Update a config for an Account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAccountConfigRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAccountConfigUpdateAccountConfigRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAccountConfigSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateAccountConfigRequest();
    $request->key = 'dicta';
    $request->requestBody = new UpdateAccountConfigUpdateAccountConfigRequest();
    $request->requestBody->value = 'nam';

    $requestSecurity = new UpdateAccountConfigSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateAccountConfig($request, $requestSecurity);

    if ($response->microvisorV1AccountConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateAccountSecret

Update a secret for an Account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAccountSecretRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAccountSecretUpdateAccountSecretRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAccountSecretSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateAccountSecretRequest();
    $request->key = 'officia';
    $request->requestBody = new UpdateAccountSecretUpdateAccountSecretRequest();
    $request->requestBody->value = 'occaecati';

    $requestSecurity = new UpdateAccountSecretSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateAccountSecret($request, $requestSecurity);

    if ($response->microvisorV1AccountSecret !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDevice

Update a specific Device.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceUpdateDeviceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDeviceRequest();
    $request->requestBody = new UpdateDeviceUpdateDeviceRequest();
    $request->requestBody->loggingEnabled = false;
    $request->requestBody->targetApp = 'fugit';
    $request->requestBody->uniqueName = 'deleniti';
    $request->sid = 'hic';

    $requestSecurity = new UpdateDeviceSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateDevice($request, $requestSecurity);

    if ($response->microvisorV1Device !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDeviceConfig

Update a config for a Microvisor Device.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceConfigRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceConfigUpdateDeviceConfigRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceConfigSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDeviceConfigRequest();
    $request->deviceSid = 'optio';
    $request->key = 'totam';
    $request->requestBody = new UpdateDeviceConfigUpdateDeviceConfigRequest();
    $request->requestBody->value = 'beatae';

    $requestSecurity = new UpdateDeviceConfigSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateDeviceConfig($request, $requestSecurity);

    if ($response->microvisorV1DeviceDeviceConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDeviceSecret

Update a secret for a Microvisor Device.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSecretRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSecretUpdateDeviceSecretRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSecretSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDeviceSecretRequest();
    $request->deviceSid = 'commodi';
    $request->key = 'molestiae';
    $request->requestBody = new UpdateDeviceSecretUpdateDeviceSecretRequest();
    $request->requestBody->value = 'modi';

    $requestSecurity = new UpdateDeviceSecretSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateDeviceSecret($request, $requestSecurity);

    if ($response->microvisorV1DeviceDeviceSecret !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
