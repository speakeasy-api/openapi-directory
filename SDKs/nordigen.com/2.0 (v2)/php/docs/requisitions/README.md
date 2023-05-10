# requisitions

### Available Operations

* [deleteRequisitionByIdV2](#deleterequisitionbyidv2) - Delete requisition and its end user agreement
* [requisitionById](#requisitionbyid) - Retrieve a requisition by ID
* [requisitionCreated](#requisitioncreated) - Create a new requisition
* [retrieveAllRequisitions](#retrieveallrequisitions) - Retrieve all requisitions belonging to the company

## deleteRequisitionByIdV2

Delete requisition and its end user agreement

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRequisitionByIdV2Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRequisitionByIdV2Request();
    $request->id = '26f8d986-e881-4ead-8f0e-1012563f94e2';

    $response = $sdk->requisitions->deleteRequisitionByIdV2($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## requisitionById

Retrieve a requisition by ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RequisitionByIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RequisitionByIdRequest();
    $request->id = '9e973e92-2a57-4a15-be3e-060807e2b6e3';

    $response = $sdk->requisitions->requisitionById($request);

    if ($response->requisition !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## requisitionCreated

Create a new requisition

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\RequisitionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RequisitionRequest();
    $request->accountSelection = false;
    $request->agreement = 'ab8845f0-597a-460f-b2a5-4a31e94764a3';
    $request->institutionId = 'debitis';
    $request->redirect = 'https://infamous-fridge.org';
    $request->redirectImmediate = false;
    $request->reference = 'esse';
    $request->ssn = 'provident';
    $request->userLanguage = 'quis';

    $response = $sdk->requisitions->requisitionCreated($request);

    if ($response->spectacularRequisition !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retrieveAllRequisitions

Retrieve all requisitions belonging to the company

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveAllRequisitionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetrieveAllRequisitionsRequest();
    $request->limit = 431785;
    $request->offset = 970494;

    $response = $sdk->requisitions->retrieveAllRequisitions($request);

    if ($response->paginatedRequisitionList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
