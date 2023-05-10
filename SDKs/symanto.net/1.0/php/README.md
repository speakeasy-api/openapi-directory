# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CommunicationRequest;
use \OpenAPI\OpenAPI\Models\Shared\Post;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CommunicationRequest();
    $request->requestBody = [
        new Post(),
        new Post(),
        new Post(),
    ];
    $request->all = false;

    $response = $sdk->textAnalysis->communication($request);

    if ($response->predictionResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [textAnalysis](docs/textanalysis/README.md)

* [communication](docs/textanalysis/README.md#communication) - Communication & Tonality
* [ekmanEmotion](docs/textanalysis/README.md#ekmanemotion) - Emotion Analysis
* [emotion](docs/textanalysis/README.md#emotion) - Emotion Analysis
* [languageDetection](docs/textanalysis/README.md#languagedetection) - Language Detection
* [personality](docs/textanalysis/README.md#personality) - Personality Traits
* [sentiment](docs/textanalysis/README.md#sentiment) - Sentiment Analysis
* [topicSentiment](docs/textanalysis/README.md#topicsentiment) - Extracts topics and sentiments and relates them.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
