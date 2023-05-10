# meterFolderInformation

### Available Operations

* [meterFolderInformationGet](#meterfolderinformationget) - Beta: Gets the General Information for a Meter or a Folder
* [meterFolderInformationPostForm](#meterfolderinformationpostform) - Sets the Name of a Meter or a Folder
* [meterFolderInformationPostJson](#meterfolderinformationpostjson) - Sets the Name of a Meter or a Folder
* [meterFolderInformationPostRaw](#meterfolderinformationpostraw) - Sets the Name of a Meter or a Folder

## meterFolderInformationGet

Beta: Gets the General Information for a Meter or a Folder

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MeterFolderInformationGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MeterFolderInformationGetRequest();
    $request->id = 'd6b14429-0747-4477-8a7b-d466d28c10ab';

    $response = $sdk->meterFolderInformation->meterFolderInformationGet($request);

    if ($response->meterFolderInformation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## meterFolderInformationPostForm

Sets the Name of a Meter or a Folder

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\MeterFolderInformationToPost;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MeterFolderInformationToPost();
    $request->id = '3cdca425-1904-4e52-bc7e-0bc7178e4796';
    $request->name = 'Todd Oberbrunner DDS';

    $response = $sdk->meterFolderInformation->meterFolderInformationPostForm($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## meterFolderInformationPostJson

Sets the Name of a Meter or a Folder

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\MeterFolderInformationToPost;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MeterFolderInformationToPost();
    $request->id = '688282aa-4825-462f-a22e-9817ee17cbe6';
    $request->name = 'Jenna Kautzer';

    $response = $sdk->meterFolderInformation->meterFolderInformationPostJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## meterFolderInformationPostRaw

Sets the Name of a Meter or a Folder

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
'rerum'

    $response = $sdk->meterFolderInformation->meterFolderInformationPostRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
