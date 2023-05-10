# rti

### Available Operations

* [deleteRtiTransaction](#deletertitransaction) - Delete the RTI transaction
* [getAllRtiTransactionTags](#getallrtitransactiontags) - Get all RTI transaction tags
* [getRtiTransactionFromEmployer](#getrtitransactionfromemployer) - Get the RTI transaction
* [getRtiTransactionSummariesFromEmployer](#getrtitransactionsummariesfromemployer) - Get all RTI transaction summaries for the employer
* [getRtiTransactionSummaryFromEmployer](#getrtitransactionsummaryfromemployer) - Get the RTI transaction summary
* [getRtiTransactionsFromEmployer](#getrtitransactionsfromemployer) - Get all RTI transactions for the employer
* [getRtiTransactionsWithTag](#getrtitransactionswithtag) - Get RTI transactions with tag

## deleteRtiTransaction

Deletes the specified RTI transaction

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRtiTransactionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRtiTransactionRequest();
    $request->apiVersion = 'consectetur';
    $request->authorization = 'repellat';
    $request->employerId = 'explicabo';
    $request->rtiTransactionId = 'explicabo';

    $response = $sdk->rti->deleteRtiTransaction($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAllRtiTransactionTags

Gets all the RTI transaction tags

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAllRtiTransactionTagsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAllRtiTransactionTagsRequest();
    $request->apiVersion = 'exercitationem';
    $request->authorization = 'nihil';
    $request->employerId = 'non';

    $response = $sdk->rti->getAllRtiTransactionTags($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRtiTransactionFromEmployer

Returns the specified RTI transaction

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRtiTransactionFromEmployerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRtiTransactionFromEmployerRequest();
    $request->apiVersion = 'ab';
    $request->authorization = 'illo';
    $request->employerId = 'hic';
    $request->rtiTransactionId = 'deserunt';

    $response = $sdk->rti->getRtiTransactionFromEmployer($request);

    if ($response->rtiTransactionBase !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRtiTransactionSummariesFromEmployer

Get links for all RTI transaction summaries for the specified employer

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRtiTransactionSummariesFromEmployerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRtiTransactionSummariesFromEmployerRequest();
    $request->apiVersion = 'delectus';
    $request->authorization = 'non';
    $request->employerId = 'distinctio';

    $response = $sdk->rti->getRtiTransactionSummariesFromEmployer($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRtiTransactionSummaryFromEmployer

Returns the specified RTI transaction summary data excluding some poroperties

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRtiTransactionSummaryFromEmployerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRtiTransactionSummaryFromEmployerRequest();
    $request->apiVersion = 'in';
    $request->authorization = 'exercitationem';
    $request->employerId = 'labore';
    $request->rtiTransactionId = 'numquam';

    $response = $sdk->rti->getRtiTransactionSummaryFromEmployer($request);

    if ($response->rtiTransactionBase !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRtiTransactionsFromEmployer

Get links for all RTI transactions for the specified employer

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRtiTransactionsFromEmployerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRtiTransactionsFromEmployerRequest();
    $request->apiVersion = 'repudiandae';
    $request->authorization = 'modi';
    $request->employerId = 'in';

    $response = $sdk->rti->getRtiTransactionsFromEmployer($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRtiTransactionsWithTag

Gets the RTI transactions with the tag

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRtiTransactionsWithTagRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRtiTransactionsWithTagRequest();
    $request->apiVersion = 'explicabo';
    $request->authorization = 'accusamus';
    $request->employerId = 'rem';
    $request->tagId = 'aperiam';

    $response = $sdk->rti->getRtiTransactionsWithTag($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
