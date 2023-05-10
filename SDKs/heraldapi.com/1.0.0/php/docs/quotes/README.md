# quotes

### Available Operations

* [getQuotesQuoteId](#getquotesquoteid) - /quotes/{quote_id}

## getQuotesQuoteId

### Get a quote

Get the latest details for a specific [quote](https://www.heraldapi.com/docs/quotes) created by a `submission`. While a submission can contain many products, each quote is for a *single* product. A `quote_id` is created for each quote, located in the submission response. 

> If you're looking to create a new quote with a carrier, you need to [create a submission](../reference/HeraldAPI.v1.yaml/paths/~1submissions/post) before retrieving quote details.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetQuotesQuoteIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetQuotesQuoteIdRequest();
    $request->quoteId = '02a94bb4-f63c-4969-a9a3-efa77dfb14cd';

    $response = $sdk->quotes->getQuotesQuoteId($request);

    if ($response->getQuotesQuoteId200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
