# thirdPartyTransaction

### Available Operations

* [deleteThirdPartyTransactionTag](#deletethirdpartytransactiontag) - Delete third party transaction tag
* [getAllThirdPartyTransactionTags](#getallthirdpartytransactiontags) - Get all third party transaction tags
* [getAllThirdPartyTransactionsWithTag](#getallthirdpartytransactionswithtag) - Get links to tagged third party transactions
* [getTagFromThirdPartyTransaction](#gettagfromthirdpartytransaction) - Get third party transaction tag
* [getTagsFromThirdPartyTransaction](#gettagsfromthirdpartytransaction) - Get tags from third party transaction
* [putThirdPartyTransactionTag](#putthirdpartytransactiontag) - insert third party transaction tag

## deleteThirdPartyTransactionTag

Deletes a tag from the third party transaction

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteThirdPartyTransactionTagRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteThirdPartyTransactionTagRequest();
    $request->apiVersion = 'maiores';
    $request->authorization = 'itaque';
    $request->employerId = 'vero';
    $request->tagId = 'quidem';
    $request->thirdPartyTransactionId = 'illo';

    $response = $sdk->thirdPartyTransaction->deleteThirdPartyTransactionTag($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAllThirdPartyTransactionTags

Gets all the third party transaction tags

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAllThirdPartyTransactionTagsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAllThirdPartyTransactionTagsRequest();
    $request->apiVersion = 'quo';
    $request->authorization = 'dignissimos';
    $request->employerId = 'minus';

    $response = $sdk->thirdPartyTransaction->getAllThirdPartyTransactionTags($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAllThirdPartyTransactionsWithTag

Gets the third party transactions with the specified tag

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAllThirdPartyTransactionsWithTagRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAllThirdPartyTransactionsWithTagRequest();
    $request->apiVersion = 'distinctio';
    $request->authorization = 'possimus';
    $request->employerId = 'cum';
    $request->tagId = 'suscipit';

    $response = $sdk->thirdPartyTransaction->getAllThirdPartyTransactionsWithTag($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTagFromThirdPartyTransaction

Gets a tag from the third party transaction

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTagFromThirdPartyTransactionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTagFromThirdPartyTransactionRequest();
    $request->apiVersion = 'saepe';
    $request->authorization = 'earum';
    $request->employerId = 'quod';
    $request->tagId = 'nihil';
    $request->thirdPartyTransactionId = 'quaerat';

    $response = $sdk->thirdPartyTransaction->getTagFromThirdPartyTransaction($request);

    if ($response->tag !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTagsFromThirdPartyTransaction

Gets all tags from the third party transaction

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTagsFromThirdPartyTransactionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTagsFromThirdPartyTransactionRequest();
    $request->apiVersion = 'ipsum';
    $request->authorization = 'ducimus';
    $request->employerId = 'laudantium';
    $request->thirdPartyTransactionId = 'rerum';

    $response = $sdk->thirdPartyTransaction->getTagsFromThirdPartyTransaction($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putThirdPartyTransactionTag

Inserts a tag on the third party transaction

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutThirdPartyTransactionTagRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutThirdPartyTransactionTagRequest();
    $request->apiVersion = 'deserunt';
    $request->authorization = 'odit';
    $request->employerId = 'ad';
    $request->tagId = 'sequi';
    $request->thirdPartyTransactionId = 'beatae';

    $response = $sdk->thirdPartyTransaction->putThirdPartyTransactionTag($request);

    if ($response->tag !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
