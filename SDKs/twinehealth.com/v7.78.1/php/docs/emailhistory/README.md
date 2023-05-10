# emailHistory

## Overview

Email history represents a single email that was sent using Fitbit Plus.

### Available Operations

* [fetchEmailHistories](#fetchemailhistories) - List email histories
* [fetchEmailHistory](#fetchemailhistory) - Get an email history

## fetchEmailHistories

Get a list of email histories

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchEmailHistoriesRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchEmailHistoriesSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchEmailHistoriesRequest();
    $request->filterEmailType = 'commodi';
    $request->filterReceiver = 'quidem';
    $request->filterSender = 'explicabo';
    $request->sort = FetchEmailHistoriesSortEnum::SEND_TIME;

    $response = $sdk->emailHistory->fetchEmailHistories($request);

    if ($response->fetchEmailHistoriesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchEmailHistory

Get an email history by id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchEmailHistoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchEmailHistoryRequest();
    $request->id = '916fe1f0-8f42-494e-b698-f447f603e8b4';

    $response = $sdk->emailHistory->fetchEmailHistory($request);

    if ($response->fetchEmailHistoryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
