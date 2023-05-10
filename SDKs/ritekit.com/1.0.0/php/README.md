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
use \OpenAPI\OpenAPI\Models\Operations\AnimateImageRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnimateImageRequest();
    $request->type = 'corrupti';
    $request->url = 'provident';

    $response = $sdk->animateImage($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [animateImage](docs/sdk/README.md#animateimage) - Animate Image
* [autoEmojify](docs/sdk/README.md#autoemojify) - Auto-Emojify
* [autoHashtag](docs/sdk/README.md#autohashtag) - Auto-Hashtag
* [companyLogo](docs/sdk/README.md#companylogo) - Company Logo
* [emojiSuggestions](docs/sdk/README.md#emojisuggestions) - Emoji Suggestions
* [hashtagHistory](docs/sdk/README.md#hashtaghistory) - Hashtag History
* [hashtagStats](docs/sdk/README.md#hashtagstats) - Hashtag Stats
* [hashtagSuggestions](docs/sdk/README.md#hashtagsuggestions) - Hashtag Suggestions
* [hashtagsCleaner](docs/sdk/README.md#hashtagscleaner) - Hashtags cleaner
* [listOfCTAs](docs/sdk/README.md#listofctas) - List of CTAs
* [shortenLink](docs/sdk/README.md#shortenlink) - Shorten Link
* [textToImage](docs/sdk/README.md#texttoimage) - Text to Image
* [trendingHashtags](docs/sdk/README.md#trendinghashtags) - Trending Hashtags
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
