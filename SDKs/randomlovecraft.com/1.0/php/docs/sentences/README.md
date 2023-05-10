# sentences

### Available Operations

* [getSentences](#getsentences) - A random sentence
* [getSentencesFromBook](#getsentencesfrombook) - Random sentences from a specific book
* [getSpecificSentence](#getspecificsentence) - A specific sentence

## getSentences

A random sentence

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSentencesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSentencesRequest();
    $request->limit = 548814;

    $response = $sdk->sentences->getSentences($request);

    if ($response->getSentences200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSentencesFromBook

Random sentences from a specific book

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSentencesFromBookRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSentencesFromBookRequest();
    $request->id = '9bd9d8d6-9a67-44e0-b467-cc8796ed151a';
    $request->limit = 20218;

    $response = $sdk->sentences->getSentencesFromBook($request);

    if ($response->getSentencesFromBook200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSpecificSentence

A specific sentence

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSpecificSentenceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSpecificSentenceRequest();
    $request->id = '5dfc2ddf-7cc7-48ca-9ba9-28fc816742cb';

    $response = $sdk->sentences->getSpecificSentence($request);

    if ($response->getSpecificSentence200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
