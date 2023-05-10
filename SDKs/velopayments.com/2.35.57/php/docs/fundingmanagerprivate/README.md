# fundingManagerPrivate

### Available Operations

* [createFundingAccountV2](#createfundingaccountv2) - Create Funding Account
* [deleteSourceAccountV3](#deletesourceaccountv3) - Delete a source account by ID

## createFundingAccountV2

Create Funding Account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\CreateFundingAccountRequestV2;
use \OpenAPI\OpenAPI\Models\Shared\CreateFundingAccountRequestV2TypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateFundingAccountRequestV2();
    $request->accountName = 'laborum';
    $request->accountNumber = 'accusamus';
    $request->currency = 'USD';
    $request->name = 'Toni Haley';
    $request->payorId = 'b9ba88f3-a669-4970-b4ba-4469b6e21419';
    $request->routingNumber = 'ullam';
    $request->type = CreateFundingAccountRequestV2TypeEnum::WUBS_DECOUPLED;

    $response = $sdk->fundingManagerPrivate->createFundingAccountV2($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSourceAccountV3

Mark a source account as deleted by ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSourceAccountV3Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSourceAccountV3Request();
    $request->sourceAccountId = '890afa56-3e25-416f-a4c8-b711e5b7fd2e';

    $response = $sdk->fundingManagerPrivate->deleteSourceAccountV3($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
