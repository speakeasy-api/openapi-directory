# registerForRealtimeApi

### Available Operations

* [registerForRealtimeApiDelete](#registerforrealtimeapidelete) - Deletes a realtime API registration.
* [registerForRealtimeApiGet](#registerforrealtimeapiget) - Gets all registrations for the Realtime API.
* [registerForRealtimeApiPostForm](#registerforrealtimeapipostform) - Creates a new registration for the realtime API. The Realtime API sends you the data of the registred devices as soon as we have them on the cloud.
             More Information about the realtime API: https://www.smart-me.com/Description/api/realtimeapi.aspx
* [registerForRealtimeApiPostJson](#registerforrealtimeapipostjson) - Creates a new registration for the realtime API. The Realtime API sends you the data of the registred devices as soon as we have them on the cloud.
             More Information about the realtime API: https://www.smart-me.com/Description/api/realtimeapi.aspx
* [registerForRealtimeApiPostRaw](#registerforrealtimeapipostraw) - Creates a new registration for the realtime API. The Realtime API sends you the data of the registred devices as soon as we have them on the cloud.
             More Information about the realtime API: https://www.smart-me.com/Description/api/realtimeapi.aspx

## registerForRealtimeApiDelete

Deletes a realtime API registration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RegisterForRealtimeApiDeleteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegisterForRealtimeApiDeleteRequest();
    $request->id = '8f3a8d8f-5c0b-42f2-bb7b-194a276b2691';

    $response = $sdk->registerForRealtimeApi->registerForRealtimeApiDelete($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## registerForRealtimeApiGet

Gets all registrations for the Realtime API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->registerForRealtimeApi->registerForRealtimeApiGet();

    if ($response->registerRealtimeApiData !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## registerForRealtimeApiPostForm

Creates a new registration for the realtime API. The Realtime API sends you the data of the registred devices as soon as we have them on the cloud. More Information about the realtime API: https://www.smart-me.com/Description/api/realtimeapi.aspx

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\RegisterRealtimeApiData;
use \OpenAPI\OpenAPI\Models\Shared\RegisterRealtimeApiDataRegistrationTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegisterRealtimeApiData();
    $request->apiUrl = 'suscipit';
    $request->basicAuthPassword = 'sapiente';
    $request->basicAuthUsername = 'debitis';
    $request->id = '1f08f429-4e36-498f-847f-603e8b445e80';
    $request->meterId = 'nobis';
    $request->registrationType = RegisterRealtimeApiDataRegistrationTypeEnum::SINGLE_METER_REGISTRATION;
    $request->serialNumber = 'veniam';

    $response = $sdk->registerForRealtimeApi->registerForRealtimeApiPostForm($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## registerForRealtimeApiPostJson

Creates a new registration for the realtime API. The Realtime API sends you the data of the registred devices as soon as we have them on the cloud. More Information about the realtime API: https://www.smart-me.com/Description/api/realtimeapi.aspx

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\RegisterRealtimeApiData;
use \OpenAPI\OpenAPI\Models\Shared\RegisterRealtimeApiDataRegistrationTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegisterRealtimeApiData();
    $request->apiUrl = 'minima';
    $request->basicAuthPassword = 'recusandae';
    $request->basicAuthUsername = 'reiciendis';
    $request->id = 'd20e457e-1858-4b6a-89fb-e3a5aa8e4824';
    $request->meterId = 'fugiat';
    $request->registrationType = RegisterRealtimeApiDataRegistrationTypeEnum::DISABLED;
    $request->serialNumber = 'culpa';

    $response = $sdk->registerForRealtimeApi->registerForRealtimeApiPostJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## registerForRealtimeApiPostRaw

Creates a new registration for the realtime API. The Realtime API sends you the data of the registred devices as soon as we have them on the cloud. More Information about the realtime API: https://www.smart-me.com/Description/api/realtimeapi.aspx

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
'expedita'

    $response = $sdk->registerForRealtimeApi->registerForRealtimeApiPostRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
