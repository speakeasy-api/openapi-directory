# quote

## Overview

Access random quote service. Use this to get random quotes , quotes filtered by authors or tags etc. You need an API key to access this service.

### Available Operations

* [getQuote](#getquote) - Gets a `Quote` with a given `id`.
* [getQuoteAuthorsPopular](#getquoteauthorspopular) - Gets a list of popular author names in the system. 

* [getQuoteAuthorsSearch](#getquoteauthorssearch) - Gets a list of author names in the system. 

* [getQuoteBookmarkToggle](#getquotebookmarktoggle) - Toggle the user bookmark of the given Quote as a user of the API Key.
* [getQuoteCategoriesPopular](#getquotecategoriespopular) - Gets a list of popular `Quote` Categories.

* [getQuoteCategoriesSearch](#getquotecategoriessearch) - Gets a list of `Quote` Categories matching the query string.

* [getQuoteLikeToggle](#getquoteliketoggle) - Toggle the user like of the given Quote as a user of the API Key.
* [getQuoteRandom](#getquoterandom) - Gets a `Random Quote`. When you are in a hurry this is what you call to get a random famous quote.
* [getQuoteSearch](#getquotesearch) - Search for a `Quote` in They Said So platform. Optional `category` , `author`, `minlength`, `maxlength` params determines the filters applied while searching for the quote. 

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
    $request->id = 'optio';

    $requestSecurity = new GetQuoteSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->quote->getQuote($request, $requestSecurity);

    if ($response->quoteResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getQuoteAuthorsPopular

Gets a list of popular author names in the system. 


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetQuoteAuthorsPopularRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetQuoteAuthorsPopularSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetQuoteAuthorsPopularRequest();
    $request->detailed = false;
    $request->language = 'totam';
    $request->limit = 105907;
    $request->start = 414662;

    $requestSecurity = new GetQuoteAuthorsPopularSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->quote->getQuoteAuthorsPopular($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getQuoteAuthorsSearch

Gets a list of author names in the system. 


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetQuoteAuthorsSearchRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetQuoteAuthorsSearchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetQuoteAuthorsSearchRequest();
    $request->detailed = false;
    $request->language = 'molestiae';
    $request->limit = 264555;
    $request->query = 'qui';
    $request->start = 774234;

    $requestSecurity = new GetQuoteAuthorsSearchSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->quote->getQuoteAuthorsSearch($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getQuoteBookmarkToggle

Toggle the user bookmark of the given Quote as a user of the API Key.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetQuoteBookmarkToggleRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetQuoteBookmarkToggleSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetQuoteBookmarkToggleRequest();
    $request->quoteId = 'cum';

    $requestSecurity = new GetQuoteBookmarkToggleSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->quote->getQuoteBookmarkToggle($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getQuoteCategoriesPopular

Gets a list of popular `Quote` Categories.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetQuoteCategoriesPopularRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetQuoteCategoriesPopularSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetQuoteCategoriesPopularRequest();
    $request->limit = 456150;
    $request->start = 216550;

    $requestSecurity = new GetQuoteCategoriesPopularSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->quote->getQuoteCategoriesPopular($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getQuoteCategoriesSearch

Gets a list of `Quote` Categories matching the query string.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetQuoteCategoriesSearchRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetQuoteCategoriesSearchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetQuoteCategoriesSearchRequest();
    $request->limit = 568434;
    $request->query = 'aspernatur';
    $request->start = 18789;

    $requestSecurity = new GetQuoteCategoriesSearchSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->quote->getQuoteCategoriesSearch($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getQuoteLikeToggle

Toggle the user like of the given Quote as a user of the API Key.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetQuoteLikeToggleRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetQuoteLikeToggleSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetQuoteLikeToggleRequest();
    $request->quoteId = 'ad';

    $requestSecurity = new GetQuoteLikeToggleSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->quote->getQuoteLikeToggle($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getQuoteRandom

Gets a `Random Quote`. When you are in a hurry this is what you call to get a random famous quote.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetQuoteRandomRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetQuoteRandomSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetQuoteRandomRequest();
    $request->language = 'natus';
    $request->limit = 149675;

    $requestSecurity = new GetQuoteRandomSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->quote->getQuoteRandom($request, $requestSecurity);

    if ($response->quoteResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getQuoteSearch

Search for a `Quote` in They Said So platform. Optional `category` , `author`, `minlength`, `maxlength` params determines the filters applied while searching for the quote. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetQuoteSearchRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetQuoteSearchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetQuoteSearchRequest();
    $request->author = 'iste';
    $request->category = 'dolor';
    $request->language = 'natus';
    $request->limit = 386489;
    $request->maxlength = 943749;
    $request->minlength = 902599;
    $request->private = false;
    $request->query = 'fuga';
    $request->sfw = false;

    $requestSecurity = new GetQuoteSearchSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->quote->getQuoteSearch($request, $requestSecurity);

    if ($response->quoteResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
