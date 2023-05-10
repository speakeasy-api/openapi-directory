# agreements

### Available Operations

* [acceptEUA](#accepteua) - Accept an end-user agreement via the API
* [createEUAV2](#createeuav2) - API endpoints related to end-user agreements.
* [deleteEUAByIdV2](#deleteeuabyidv2) - Delete an end user agreement
* [retrieveEUAByIdV2](#retrieveeuabyidv2) - Retrieve end user agreement by ID
* [retrieveAllEUAsForAnEndUserV2](#retrievealleuasforanenduserv2) - API endpoints related to end-user agreements.

## acceptEUA

Accept an end-user agreement via the API

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AcceptEUARequest;
use \OpenAPI\OpenAPI\Models\Shared\EnduserAcceptanceDetailsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AcceptEUARequest();
    $request->enduserAcceptanceDetailsRequest = new EnduserAcceptanceDetailsRequest();
    $request->enduserAcceptanceDetailsRequest->ipAddress = 'harum';
    $request->enduserAcceptanceDetailsRequest->userAgent = 'enim';
    $request->id = 'e6e13b99-d488-4e1e-91e4-50ad2abd4426';

    $response = $sdk->agreements->acceptEUA($request);

    if ($response->endUserAgreement !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createEUAV2

API endpoints related to end-user agreements.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\EndUserAgreementRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EndUserAgreementRequest();
    $request->accessScope = [
        [
            'perferendis',
            'magni',
            'assumenda',
        ],
        [
            'alias',
            'fugit',
        ],
        [
            'excepturi',
            'tempora',
            'facilis',
        ],
    ];
    $request->accessValidForDays = 735194;
    $request->institutionId = 'labore';
    $request->maxHistoricalDays = 962189;

    $response = $sdk->agreements->createEUAV2($request);

    if ($response->endUserAgreement !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteEUAByIdV2

Delete an end user agreement

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteEUAByIdV2Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteEUAByIdV2Request();
    $request->id = '63c969e9-a3ef-4a77-9fb1-4cd66ae395ef';

    $response = $sdk->agreements->deleteEUAByIdV2($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retrieveEUAByIdV2

Retrieve end user agreement by ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveEUAByIdV2Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetrieveEUAByIdV2Request();
    $request->id = 'b9ba88f3-a669-4970-b4ba-4469b6e21419';

    $response = $sdk->agreements->retrieveEUAByIdV2($request);

    if ($response->endUserAgreement !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retrieveAllEUAsForAnEndUserV2

API endpoints related to end-user agreements.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveAllEUAsForAnEndUserV2Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetrieveAllEUAsForAnEndUserV2Request();
    $request->limit = 354047;
    $request->offset = 590873;

    $response = $sdk->agreements->retrieveAllEUAsForAnEndUserV2($request);

    if ($response->paginatedEndUserAgreementList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
