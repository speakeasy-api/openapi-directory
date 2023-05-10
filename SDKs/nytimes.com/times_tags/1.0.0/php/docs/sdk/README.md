# SDK

## Overview

With the TimesTags API, you can mine the riches of the New York Times tag set. The TimesTags service matches your query to the controlled vocabularies that fuel NYTimes.com metadata. You supply a string of characters, and the service returns a ranked list of suggested terms.

<http://developer.nytimes.com/>
### Available Operations

* [getTimestags](#gettimestags)

## getTimestags

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTimestagsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTimestagsFilterEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTimestagsRequest();
    $request->filter = GetTimestagsFilterEnum::PER;
    $request->max = 602763;
    $request->query = 'nulla';

    $response = $sdk->sdk->getTimestags($request);

    if ($response->getTimestags200ApplicationJSONArrays !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
