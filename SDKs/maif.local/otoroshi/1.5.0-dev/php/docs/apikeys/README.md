# apikeys

## Overview

Everything about Otoroshi api keys

### Available Operations

* [allApiKeys](#allapikeys) - Get all api keys
* [apiKey](#apikey) - Get an api key
* [apiKeyFromGroup](#apikeyfromgroup) - Get an api key
* [apiKeyFromGroupQuotas](#apikeyfromgroupquotas) - Get the quota state of an api key
* [apiKeyGroup](#apikeygroup) - Get the group of an api key
* [apiKeyQuotas](#apikeyquotas) - Get the quota state of an api key
* [apiKeys](#apikeys) - Get all api keys for the group of a service
* [apiKeysFromGroup](#apikeysfromgroup) - Get all api keys for the group of a service
* [createApiKey](#createapikey) - Create a new api key for a service
* [createApiKeyFromGroup](#createapikeyfromgroup) - Create a new api key for a group
* [deleteApiKey](#deleteapikey) - Delete an api key
* [deleteApiKeyFromGroup](#deleteapikeyfromgroup) - Delete an api key
* [patchApiKey](#patchapikey) - Update an api key with a diff
* [patchApiKeyFromGroup](#patchapikeyfromgroup) - Update an api key with a diff
* [resetApiKeyFromGroupQuotas](#resetapikeyfromgroupquotas) - Reset the quota state of an api key
* [resetApiKeyQuotas](#resetapikeyquotas) - Reset the quota state of an api key
* [updateApiKey](#updateapikey) - Update an api key
* [updateApiKeyFromGroup](#updateapikeyfromgroup) - Update an api key

## allApiKeys

Get all api keys

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AllApiKeysSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new AllApiKeysSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->apikeys->allApiKeys($requestSecurity);

    if ($response->apiKeys !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## apiKey

Get an api key for a specified service descriptor

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ApiKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\ApiKeySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApiKeyRequest();
    $request->clientId = 'corrupti';
    $request->serviceId = 'provident';

    $requestSecurity = new ApiKeySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->apikeys->apiKey($request, $requestSecurity);

    if ($response->apiKey !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## apiKeyFromGroup

Get an api key for a specified service group

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ApiKeyFromGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\ApiKeyFromGroupSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApiKeyFromGroupRequest();
    $request->clientId = 'distinctio';
    $request->groupId = 'quibusdam';

    $requestSecurity = new ApiKeyFromGroupSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->apikeys->apiKeyFromGroup($request, $requestSecurity);

    if ($response->apiKey !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## apiKeyFromGroupQuotas

Get the quota state of an api key

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ApiKeyFromGroupQuotasRequest;
use \OpenAPI\OpenAPI\Models\Operations\ApiKeyFromGroupQuotasSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApiKeyFromGroupQuotasRequest();
    $request->clientId = 'unde';
    $request->groupId = 'nulla';

    $requestSecurity = new ApiKeyFromGroupQuotasSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->apikeys->apiKeyFromGroupQuotas($request, $requestSecurity);

    if ($response->quotas !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## apiKeyGroup

Get the group of an api key

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ApiKeyGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\ApiKeyGroupSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApiKeyGroupRequest();
    $request->clientId = 'corrupti';
    $request->serviceId = 'illum';

    $requestSecurity = new ApiKeyGroupSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->apikeys->apiKeyGroup($request, $requestSecurity);

    if ($response->group !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## apiKeyQuotas

Get the quota state of an api key

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ApiKeyQuotasRequest;
use \OpenAPI\OpenAPI\Models\Operations\ApiKeyQuotasSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApiKeyQuotasRequest();
    $request->clientId = 'vel';
    $request->serviceId = 'error';

    $requestSecurity = new ApiKeyQuotasSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->apikeys->apiKeyQuotas($request, $requestSecurity);

    if ($response->quotas !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## apiKeys

Get all api keys for the group of a service

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ApiKeysRequest;
use \OpenAPI\OpenAPI\Models\Operations\ApiKeysSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApiKeysRequest();
    $request->serviceId = 'deserunt';

    $requestSecurity = new ApiKeysSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->apikeys->apiKeys($request, $requestSecurity);

    if ($response->apiKeys !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## apiKeysFromGroup

Get all api keys for the group of a service

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ApiKeysFromGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\ApiKeysFromGroupSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApiKeysFromGroupRequest();
    $request->groupId = 'suscipit';

    $requestSecurity = new ApiKeysFromGroupSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->apikeys->apiKeysFromGroup($request, $requestSecurity);

    if ($response->apiKeys !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createApiKey

Create a new api key for a service

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateApiKeyRequest;
use \OpenAPI\OpenAPI\Models\Shared\ApiKey;
use \OpenAPI\OpenAPI\Models\Operations\CreateApiKeySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateApiKeyRequest();
    $request->apiKey = new ApiKey();
    $request->apiKey->authorizedEntities = [
        'a string value',
        'a string value',
    ];
    $request->apiKey->clientId = 'a string value';
    $request->apiKey->clientName = 'a string value';
    $request->apiKey->clientSecret = 'a string value';
    $request->apiKey->dailyQuota = 123;
    $request->apiKey->enabled = true;
    $request->apiKey->metadata = [
        'debitis' => 'ipsa',
        'delectus' => 'tempora',
    ];
    $request->apiKey->monthlyQuota = 123;
    $request->apiKey->throttlingQuota = 123;
    $request->serviceId = 'suscipit';

    $requestSecurity = new CreateApiKeySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->apikeys->createApiKey($request, $requestSecurity);

    if ($response->apiKey !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createApiKeyFromGroup

Create a new api key for a group

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateApiKeyFromGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\ApiKey;
use \OpenAPI\OpenAPI\Models\Operations\CreateApiKeyFromGroupSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateApiKeyFromGroupRequest();
    $request->apiKey = new ApiKey();
    $request->apiKey->authorizedEntities = [
        'a string value',
        'a string value',
    ];
    $request->apiKey->clientId = 'a string value';
    $request->apiKey->clientName = 'a string value';
    $request->apiKey->clientSecret = 'a string value';
    $request->apiKey->dailyQuota = 123;
    $request->apiKey->enabled = true;
    $request->apiKey->metadata = [
        'placeat' => 'voluptatum',
        'iusto' => 'excepturi',
        'nisi' => 'recusandae',
        'temporibus' => 'ab',
    ];
    $request->apiKey->monthlyQuota = 123;
    $request->apiKey->throttlingQuota = 123;
    $request->groupId = 'quis';

    $requestSecurity = new CreateApiKeyFromGroupSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->apikeys->createApiKeyFromGroup($request, $requestSecurity);

    if ($response->apiKey !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteApiKey

Delete an api key for a specified service descriptor

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteApiKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteApiKeySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteApiKeyRequest();
    $request->clientId = 'veritatis';
    $request->serviceId = 'deserunt';

    $requestSecurity = new DeleteApiKeySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->apikeys->deleteApiKey($request, $requestSecurity);

    if ($response->deleted !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteApiKeyFromGroup

Delete an api key for a specified service group

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteApiKeyFromGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteApiKeyFromGroupSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteApiKeyFromGroupRequest();
    $request->clientId = 'perferendis';
    $request->groupId = 'ipsam';

    $requestSecurity = new DeleteApiKeyFromGroupSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->apikeys->deleteApiKeyFromGroup($request, $requestSecurity);

    if ($response->deleted !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchApiKey

Update an api key for a specified service descriptor with a diff

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchApiKeyRequest;
use \OpenAPI\OpenAPI\Models\Shared\Patch;
use \OpenAPI\OpenAPI\Models\Shared\PatchOpEnum;
use \OpenAPI\OpenAPI\Models\Operations\PatchApiKeySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchApiKeyRequest();
    $request->requestBody = [
        new Patch(),
        new Patch(),
        new Patch(),
        new Patch(),
    ];
    $request->clientId = 'sapiente';
    $request->serviceId = 'quo';

    $requestSecurity = new PatchApiKeySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->apikeys->patchApiKey($request, $requestSecurity);

    if ($response->apiKey !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchApiKeyFromGroup

Update an api key for a specified service descriptor with a diff

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchApiKeyFromGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\Patch;
use \OpenAPI\OpenAPI\Models\Shared\PatchOpEnum;
use \OpenAPI\OpenAPI\Models\Operations\PatchApiKeyFromGroupSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchApiKeyFromGroupRequest();
    $request->requestBody = [
        new Patch(),
    ];
    $request->clientId = 'at';
    $request->groupId = 'at';

    $requestSecurity = new PatchApiKeyFromGroupSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->apikeys->patchApiKeyFromGroup($request, $requestSecurity);

    if ($response->apiKey !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## resetApiKeyFromGroupQuotas

Reset the quota state of an api key

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ResetApiKeyFromGroupQuotasRequest;
use \OpenAPI\OpenAPI\Models\Operations\ResetApiKeyFromGroupQuotasSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ResetApiKeyFromGroupQuotasRequest();
    $request->clientId = 'maiores';
    $request->groupId = 'molestiae';

    $requestSecurity = new ResetApiKeyFromGroupQuotasSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->apikeys->resetApiKeyFromGroupQuotas($request, $requestSecurity);

    if ($response->quotas !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## resetApiKeyQuotas

Reset the quota state of an api key

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ResetApiKeyQuotasRequest;
use \OpenAPI\OpenAPI\Models\Operations\ResetApiKeyQuotasSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ResetApiKeyQuotasRequest();
    $request->clientId = 'quod';
    $request->serviceId = 'quod';

    $requestSecurity = new ResetApiKeyQuotasSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->apikeys->resetApiKeyQuotas($request, $requestSecurity);

    if ($response->quotas !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateApiKey

Update an api key for a specified service descriptor

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateApiKeyRequest;
use \OpenAPI\OpenAPI\Models\Shared\ApiKey;
use \OpenAPI\OpenAPI\Models\Operations\UpdateApiKeySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateApiKeyRequest();
    $request->apiKey = new ApiKey();
    $request->apiKey->authorizedEntities = [
        'a string value',
        'a string value',
    ];
    $request->apiKey->clientId = 'a string value';
    $request->apiKey->clientName = 'a string value';
    $request->apiKey->clientSecret = 'a string value';
    $request->apiKey->dailyQuota = 123;
    $request->apiKey->enabled = true;
    $request->apiKey->metadata = [
        'porro' => 'dolorum',
        'dicta' => 'nam',
        'officia' => 'occaecati',
    ];
    $request->apiKey->monthlyQuota = 123;
    $request->apiKey->throttlingQuota = 123;
    $request->clientId = 'fugit';
    $request->serviceId = 'deleniti';

    $requestSecurity = new UpdateApiKeySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->apikeys->updateApiKey($request, $requestSecurity);

    if ($response->apiKey !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateApiKeyFromGroup

Update an api key for a specified service group

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateApiKeyFromGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\ApiKey;
use \OpenAPI\OpenAPI\Models\Operations\UpdateApiKeyFromGroupSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateApiKeyFromGroupRequest();
    $request->apiKey = new ApiKey();
    $request->apiKey->authorizedEntities = [
        'a string value',
        'a string value',
        'a string value',
        'a string value',
    ];
    $request->apiKey->clientId = 'a string value';
    $request->apiKey->clientName = 'a string value';
    $request->apiKey->clientSecret = 'a string value';
    $request->apiKey->dailyQuota = 123;
    $request->apiKey->enabled = true;
    $request->apiKey->metadata = [
        'totam' => 'beatae',
        'commodi' => 'molestiae',
        'modi' => 'qui',
        'impedit' => 'cum',
    ];
    $request->apiKey->monthlyQuota = 123;
    $request->apiKey->throttlingQuota = 123;
    $request->clientId = 'esse';
    $request->groupId = 'ipsum';

    $requestSecurity = new UpdateApiKeyFromGroupSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->apikeys->updateApiKeyFromGroup($request, $requestSecurity);

    if ($response->apiKey !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
