# payInstruction

### Available Operations

* [deletePayInstruction](#deletepayinstruction) - Deletes a pay instruction
* [getAllPayInstructionTags](#getallpayinstructiontags) - Get all pay instruction tags
* [getPayInstructionFromEmployee](#getpayinstructionfromemployee) - Gets the specified pay instruction from the employee
* [getPayInstructionsFromEmployee](#getpayinstructionsfromemployee) - Gets the pay instructions from the specified employee
* [getPayInstructionsWithTag](#getpayinstructionswithtag) - Get pay instructions with tag
* [patchPayInstruction](#patchpayinstruction) - Sparse Update of a Pay Instruction
* [postPayInstruction](#postpayinstruction) - Creates a new Pay Instruction
* [putPayInstruction](#putpayinstruction) - Update a Pay Instruction

## deletePayInstruction

Delete the specified pay instruction

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeletePayInstructionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePayInstructionRequest();
    $request->apiVersion = 'iste';
    $request->authorization = 'ex';
    $request->employeeId = 'nemo';
    $request->employerId = 'soluta';
    $request->payInstructionId = 'libero';

    $response = $sdk->payInstruction->deletePayInstruction($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAllPayInstructionTags

Gets all the pay instruction tags

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAllPayInstructionTagsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAllPayInstructionTagsRequest();
    $request->apiVersion = 'rem';
    $request->authorization = 'dolorum';
    $request->employeeId = 'odio';
    $request->employerId = 'fugit';

    $response = $sdk->payInstruction->getAllPayInstructionTags($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPayInstructionFromEmployee

Returns the specified pay instruction from employee

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPayInstructionFromEmployeeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPayInstructionFromEmployeeRequest();
    $request->apiVersion = 'alias';
    $request->authorization = 'magni';
    $request->employeeId = 'vel';
    $request->employerId = 'quae';
    $request->payInstructionId = 'quae';

    $response = $sdk->payInstruction->getPayInstructionFromEmployee($request);

    if ($response->payInstruction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPayInstructionsFromEmployee

Get links to all pay instructions for the specified employee

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPayInstructionsFromEmployeeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPayInstructionsFromEmployeeRequest();
    $request->apiVersion = 'modi';
    $request->authorization = 'neque';
    $request->employeeId = 'exercitationem';
    $request->employerId = 'itaque';

    $response = $sdk->payInstruction->getPayInstructionsFromEmployee($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPayInstructionsWithTag

Gets the pay instructions with the tag

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPayInstructionsWithTagRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPayInstructionsWithTagRequest();
    $request->apiVersion = 'et';
    $request->authorization = 'ipsum';
    $request->employeeId = 'unde';
    $request->employerId = 'nulla';
    $request->tagId = 'distinctio';

    $response = $sdk->payInstruction->getPayInstructionsWithTag($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchPayInstruction

Patches the specified pay instruction with the supplied values

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchPayInstructionRequest;
use \OpenAPI\OpenAPI\Models\Shared\PayInstruction;
use \OpenAPI\OpenAPI\Models\Shared\PayInstructionPayInstruction;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchPayInstructionRequest();
    $request->apiVersion = 'maxime';
    $request->authorization = 'quia';
    $request->employeeId = 'quia';
    $request->employerId = 'nostrum';
    $request->payInstruction = new PayInstruction();
    $request->payInstruction->payInstruction = new PayInstructionPayInstruction();
    $request->payInstruction->payInstruction->description = 'omnis';
    $request->payInstruction->payInstruction->endDate = DateTime::createFromFormat('Y-m-d', '2022-10-08');
    $request->payInstruction->payInstruction->payLineTag = 'id';
    $request->payInstruction->payInstruction->startDate = DateTime::createFromFormat('Y-m-d', '2021-04-17');
    $request->payInstructionId = 'officia';

    $response = $sdk->payInstruction->patchPayInstruction($request);

    if ($response->payInstruction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPayInstruction

Creates a new pay instruction object

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostPayInstructionRequest;
use \OpenAPI\OpenAPI\Models\Shared\PayInstruction;
use \OpenAPI\OpenAPI\Models\Shared\PayInstructionPayInstruction;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostPayInstructionRequest();
    $request->apiVersion = 'quos';
    $request->authorization = 'placeat';
    $request->employeeId = 'sit';
    $request->employerId = 'iusto';
    $request->payInstruction = new PayInstruction();
    $request->payInstruction->payInstruction = new PayInstructionPayInstruction();
    $request->payInstruction->payInstruction->description = 'ipsa';
    $request->payInstruction->payInstruction->endDate = DateTime::createFromFormat('Y-m-d', '2022-10-05');
    $request->payInstruction->payInstruction->payLineTag = 'aperiam';
    $request->payInstruction->payInstruction->startDate = DateTime::createFromFormat('Y-m-d', '2022-06-01');

    $response = $sdk->payInstruction->postPayInstruction($request);

    if ($response->link !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putPayInstruction

Updates the existing specified pay instruction object

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutPayInstructionRequest;
use \OpenAPI\OpenAPI\Models\Shared\PayInstruction;
use \OpenAPI\OpenAPI\Models\Shared\PayInstructionPayInstruction;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutPayInstructionRequest();
    $request->apiVersion = 'eligendi';
    $request->authorization = 'distinctio';
    $request->employeeId = 'voluptatem';
    $request->employerId = 'autem';
    $request->payInstruction = new PayInstruction();
    $request->payInstruction->payInstruction = new PayInstructionPayInstruction();
    $request->payInstruction->payInstruction->description = 'esse';
    $request->payInstruction->payInstruction->endDate = DateTime::createFromFormat('Y-m-d', '2022-03-05');
    $request->payInstruction->payInstruction->payLineTag = 'beatae';
    $request->payInstruction->payInstruction->startDate = DateTime::createFromFormat('Y-m-d', '2021-05-14');
    $request->payInstructionId = 'corrupti';

    $response = $sdk->payInstruction->putPayInstruction($request);

    if ($response->payInstruction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
