# statics

### Available Operations

* [createNetworkAppliancePrefixesDelegatedStatic](#createnetworkapplianceprefixesdelegatedstatic) - Add a static delegated prefix from a network
* [deleteNetworkAppliancePrefixesDelegatedStatic](#deletenetworkapplianceprefixesdelegatedstatic) - Delete a static delegated prefix from a network
* [getNetworkAppliancePrefixesDelegatedStatic](#getnetworkapplianceprefixesdelegatedstatic) - Return a static delegated prefix from a network
* [getNetworkAppliancePrefixesDelegatedStatics](#getnetworkapplianceprefixesdelegatedstatics) - List static delegated prefixes for a network
* [updateNetworkAppliancePrefixesDelegatedStatic](#updatenetworkapplianceprefixesdelegatedstatic) - Update a static delegated prefix from a network

## createNetworkAppliancePrefixesDelegatedStatic

Add a static delegated prefix from a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkAppliancePrefixesDelegatedStaticRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkAppliancePrefixesDelegatedStaticRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkAppliancePrefixesDelegatedStaticRequestBodyOrigin;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkAppliancePrefixesDelegatedStaticRequestBodyOriginTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkAppliancePrefixesDelegatedStaticRequest();
    $request->requestBody = new CreateNetworkAppliancePrefixesDelegatedStaticRequestBody();
    $request->requestBody->description = 'odio';
    $request->requestBody->origin = new CreateNetworkAppliancePrefixesDelegatedStaticRequestBodyOrigin();
    $request->requestBody->origin->interfaces = [
        'voluptates',
        'minus',
        'harum',
    ];
    $request->requestBody->origin->type = CreateNetworkAppliancePrefixesDelegatedStaticRequestBodyOriginTypeEnum::INTERNET;
    $request->requestBody->prefix = 'ullam';
    $request->networkId = 'eum';

    $response = $sdk->statics->createNetworkAppliancePrefixesDelegatedStatic($request);

    if ($response->createNetworkAppliancePrefixesDelegatedStatic201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkAppliancePrefixesDelegatedStatic

Delete a static delegated prefix from a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkAppliancePrefixesDelegatedStaticRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkAppliancePrefixesDelegatedStaticRequest();
    $request->networkId = 'iste';
    $request->staticDelegatedPrefixId = 'at';

    $response = $sdk->statics->deleteNetworkAppliancePrefixesDelegatedStatic($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkAppliancePrefixesDelegatedStatic

Return a static delegated prefix from a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkAppliancePrefixesDelegatedStaticRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkAppliancePrefixesDelegatedStaticRequest();
    $request->networkId = 'voluptate';
    $request->staticDelegatedPrefixId = 'alias';

    $response = $sdk->statics->getNetworkAppliancePrefixesDelegatedStatic($request);

    if ($response->getNetworkAppliancePrefixesDelegatedStatic200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkAppliancePrefixesDelegatedStatics

List static delegated prefixes for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkAppliancePrefixesDelegatedStaticsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkAppliancePrefixesDelegatedStaticsRequest();
    $request->networkId = 'minus';

    $response = $sdk->statics->getNetworkAppliancePrefixesDelegatedStatics($request);

    if ($response->getNetworkAppliancePrefixesDelegatedStatics200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkAppliancePrefixesDelegatedStatic

Update a static delegated prefix from a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkAppliancePrefixesDelegatedStaticRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkAppliancePrefixesDelegatedStaticRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkAppliancePrefixesDelegatedStaticRequestBodyOrigin;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkAppliancePrefixesDelegatedStaticRequestBodyOriginTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkAppliancePrefixesDelegatedStaticRequest();
    $request->requestBody = new UpdateNetworkAppliancePrefixesDelegatedStaticRequestBody();
    $request->requestBody->description = 'expedita';
    $request->requestBody->origin = new UpdateNetworkAppliancePrefixesDelegatedStaticRequestBodyOrigin();
    $request->requestBody->origin->interfaces = [
        'suscipit',
    ];
    $request->requestBody->origin->type = UpdateNetworkAppliancePrefixesDelegatedStaticRequestBodyOriginTypeEnum::INTERNET;
    $request->requestBody->prefix = 'occaecati';
    $request->networkId = 'sit';
    $request->staticDelegatedPrefixId = 'dignissimos';

    $response = $sdk->statics->updateNetworkAppliancePrefixesDelegatedStatic($request);

    if ($response->updateNetworkAppliancePrefixesDelegatedStatic200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
