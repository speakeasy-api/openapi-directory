# quote

### Available Operations

* [getQuote](#getquote) - Get a specific quote of project
* [getQuoteList](#getquotelist) - List the quotes
* [getQuoteStateList](#getquotestatelist) - List the quote states
* [getV1WorkgroupsWorkgroupIdQuotes](#getv1workgroupsworkgroupidquotes) - List the quotes of workgroup level
* [putQuoteJson](#putquotejson) - Accept / Reject a Quote
* [putQuoteRaw](#putquoteraw) - Accept / Reject a Quote

## getQuote

Get a specific quote of project

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetQuoteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetQuoteRequest();
    $request->projectId = 'nihil';
    $request->quoteId = 'praesentium';
    $request->workgroupId = 'voluptatibus';

    $response = $sdk->quote->getQuote($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getQuoteList

List the quotes

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetQuoteListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetQuoteListRequest();
    $request->projectId = 'ipsa';
    $request->quoteStateIdUseFiltersEqualQuoteStateId111111 = 'omnis';
    $request->workgroupId = 'voluptate';

    $response = $sdk->quote->getQuoteList($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getQuoteStateList

List the quote states

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetQuoteStateListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetQuoteStateListRequest();
    $request->workgroupId = 'cum';

    $response = $sdk->quote->getQuoteStateList($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getV1WorkgroupsWorkgroupIdQuotes

List the quotes of workgroup level

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV1WorkgroupsWorkgroupIdQuotesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV1WorkgroupsWorkgroupIdQuotesRequest();
    $request->quoteStateIdUseFiltersEqualQuoteStateId111111 = 'perferendis';
    $request->workgroupId = 'doloremque';

    $response = $sdk->quote->getV1WorkgroupsWorkgroupIdQuotes($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putQuoteJson

Accept / Reject a Quote

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutQuoteJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\QuotePutPersistVO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutQuoteJsonRequest();
    $request->quotePutPersistVO = new QuotePutPersistVO();
    $request->quotePutPersistVO->action = 'sample action';
    $request->quotePutPersistVO->poNumber = 'sample po_number';
    $request->quotePutPersistVO->quoteId = 1;
    $request->quotePutPersistVO->stateChangeComments = 'sample state_change_comments';
    $request->projectId = 'reprehenderit';
    $request->quoteId = 'ut';
    $request->workgroupId = 'maiores';

    $response = $sdk->quote->putQuoteJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putQuoteRaw

Accept / Reject a Quote

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutQuoteRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutQuoteRawRequest();
    $request->requestBody = 'dicta';
    $request->projectId = 'corporis';
    $request->quoteId = 'dolore';
    $request->workgroupId = 'iusto';

    $response = $sdk->quote->putQuoteRaw($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
