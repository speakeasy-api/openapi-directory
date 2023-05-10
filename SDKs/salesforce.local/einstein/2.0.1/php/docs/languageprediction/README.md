# languagePrediction

## Overview

Resources that return predictions for text input.

### Available Operations

* [intentMultipart](#intentmultipart) - Prediction for Intent
* [sentimentMultipart](#sentimentmultipart) - Prediction for Sentiment

## intentMultipart

Returns an intent prediction for the given string.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\IntentPredictRequest;
use \OpenAPI\OpenAPI\Models\Operations\IntentMultipartSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IntentPredictRequest();
    $request->document = 'I can't tell you how much fun it was';
    $request->modelId = 'WJH4YCA7YX4PCWVNCYNWYHBMY4';
    $request->numResults = 3;
    $request->sampleId = 'cum';

    $requestSecurity = new IntentMultipartSecurity();
    $requestSecurity->bearerToken = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->languagePrediction->intentMultipart($request, $requestSecurity);

    if ($response->intentPredictResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sentimentMultipart

Returns a sentiment prediction for the given string.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SentimentPredictRequest;
use \OpenAPI\OpenAPI\Models\Operations\SentimentMultipartSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SentimentPredictRequest();
    $request->document = 'I can't tell you how much fun it was';
    $request->modelId = 'WJH4YCA7YX4PCWVNCYNWYHBMY4';
    $request->numResults = 3;
    $request->sampleId = 'esse';

    $requestSecurity = new SentimentMultipartSecurity();
    $requestSecurity->bearerToken = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->languagePrediction->sentimentMultipart($request, $requestSecurity);

    if ($response->sentimentPredictResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
