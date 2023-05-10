# search

## Overview

Endpoints that allow you to search for Marketing Events in HubSpot.

### Available Operations

* [getMarketingV3MarketingEventsEventsSearchDoSearch](#getmarketingv3marketingeventseventssearchdosearch) - Search for marketing events

## getMarketingV3MarketingEventsEventsSearchDoSearch

Search for marketing events that have an event id that starts with the query string

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMarketingV3MarketingEventsEventsSearchDoSearchRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMarketingV3MarketingEventsEventsSearchDoSearchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMarketingV3MarketingEventsEventsSearchDoSearchRequest();
    $request->q = 'sed';

    $requestSecurity = new GetMarketingV3MarketingEventsEventsSearchDoSearchSecurity();
    $requestSecurity->oauth2Legacy = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->search->getMarketingV3MarketingEventsEventsSearchDoSearch($request, $requestSecurity);

    if ($response->collectionResponseMarketingEventExternalUniqueIdentifierNoPaging !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
