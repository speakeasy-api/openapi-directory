# privateQuotes

## Overview

Create and manage your own Quotes. You need an API key to access this service.

### Available Operations

* [deleteQuote](#deletequote) - Delete a quote. The user needs to be the owner of the quote to be able to delete it.

* [getQuote](#getquote) - Gets a `Quote` with a given `id`.
* [getQuoteList](#getquotelist) - Get the list of quotes in your private collection.
* [patchQuote](#patchquote) - Update a quote
* [postQuote](#postquote) - Add a new quote to your private collection. Same as 'PUT' but added since some clients don't handle PUT well.
* [postQuoteTagsAdd](#postquotetagsadd) - Add a tag to a given Quote.
* [postQuoteTagsRemove](#postquotetagsremove) - Remove a tag from a given quote.
* [putQuote](#putquote) - Add a new quote to your private collection.

## deleteQuote

Delete a quote. The user needs to be the owner of the quote to be able to delete it.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteQuoteRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteQuoteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteQuoteRequest();
    $request->id = 'debitis';

    $requestSecurity = new DeleteQuoteSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->privateQuotes->deleteQuote($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getQuote

Gets a `Quote` with a given `id`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetQuoteRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetQuoteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetQuoteRequest();
    $request->id = 'ipsa';

    $requestSecurity = new GetQuoteSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->privateQuotes->getQuote($request, $requestSecurity);

    if ($response->quoteResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getQuoteList

Get the list of quotes in your private collection.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetQuoteListRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetQuoteListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetQuoteListRequest();
    $request->limit = 963663;
    $request->start = 272656;

    $requestSecurity = new GetQuoteListSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->privateQuotes->getQuoteList($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchQuote

Update a quote

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchQuoteRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatchQuoteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchQuoteRequest();
    $request->author = 'suscipit';
    $request->id = 'molestiae';
    $request->language = 'minus';
    $request->quote = 'placeat';
    $request->tags = 'voluptatum';

    $requestSecurity = new PatchQuoteSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->privateQuotes->patchQuote($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postQuote

Add a new quote to your private collection. Same as 'PUT' but added since some clients don't handle PUT well.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostQuoteRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostQuoteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostQuoteRequest();
    $request->author = 'iusto';
    $request->language = 'excepturi';
    $request->quote = 'nisi';
    $request->tags = 'recusandae';

    $requestSecurity = new PostQuoteSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->privateQuotes->postQuote($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postQuoteTagsAdd

Add a tag to a given Quote.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostQuoteTagsAddRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostQuoteTagsAddSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostQuoteTagsAddRequest();
    $request->id = 'temporibus';
    $request->tags = 'ab';

    $requestSecurity = new PostQuoteTagsAddSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->privateQuotes->postQuoteTagsAdd($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postQuoteTagsRemove

Remove a tag from a given quote.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostQuoteTagsRemoveRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostQuoteTagsRemoveSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostQuoteTagsRemoveRequest();
    $request->id = 'quis';
    $request->tags = 'veritatis';

    $requestSecurity = new PostQuoteTagsRemoveSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->privateQuotes->postQuoteTagsRemove($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putQuote

Add a new quote to your private collection.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutQuoteRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutQuoteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutQuoteRequest();
    $request->author = 'deserunt';
    $request->language = 'perferendis';
    $request->quote = 'ipsam';
    $request->tags = 'repellendus';

    $requestSecurity = new PutQuoteSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->privateQuotes->putQuote($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
