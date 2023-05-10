# SDK

## Overview

RiteKit API is based on REST principles.

Authentication uses standard OAuth 2.0 process

##Getting started

1. Sign up for [RiteKit](https://ritekit.com/)

1. Go to [developer dashboard](https://ritekit.com/developer/dashboard/)

1. Click "Create a token" button to get your **Client ID** and **Client secret**

1. When you reach your free limit of calls per month, [upgrade to paid tiers](https://ritekit.com/developer/)

## Options for authorizing API Calls

#### Using Client ID directly

You can directly connect to our API using your **client ID** by sending it as a GET query parameter. This option is simple (no need for oAuth) but it should be used only in case the Client ID is not exposed publicly.

GET  https://api.ritekit.com/v1/stats/multiple-hashtags?tags=php&client_id=292c6912e7710c838347ae178b4a

### Available Operations

* [animateImage](#animateimage) - Animate Image
* [autoEmojify](#autoemojify) - Auto-Emojify
* [autoHashtag](#autohashtag) - Auto-Hashtag
* [companyLogo](#companylogo) - Company Logo
* [emojiSuggestions](#emojisuggestions) - Emoji Suggestions
* [hashtagHistory](#hashtaghistory) - Hashtag History
* [hashtagStats](#hashtagstats) - Hashtag Stats
* [hashtagSuggestions](#hashtagsuggestions) - Hashtag Suggestions
* [hashtagsCleaner](#hashtagscleaner) - Hashtags cleaner
* [listOfCTAs](#listofctas) - List of CTAs
* [shortenLink](#shortenlink) - Shorten Link
* [textToImage](#texttoimage) - Text to Image
* [trendingHashtags](#trendinghashtags) - Trending Hashtags

## animateImage

Returns URL of an animated GIF.

### Example Usage

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
    $request->type = 'distinctio';
    $request->url = 'quibusdam';

    $response = $sdk->sdk->animateImage($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## autoEmojify

Returns text of the post with emoji added

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AutoEmojifyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AutoEmojifyRequest();
    $request->text = 'unde';

    $response = $sdk->sdk->autoEmojify($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## autoHashtag

Returns auto-hashtagged text of the post.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AutoHashtagRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AutoHashtagRequest();
    $request->hashtagPosition = 'nulla';
    $request->maxHashtags = 544883;
    $request->post = 'illum';

    $response = $sdk->sdk->autoHashtag($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## companyLogo

Returns a company logo based on website domain. If the logo is not in our database yet, it will be extracted from the site on the fly. White logo background is automatically removed to make the logo look better on color backgrounds.

Note: It is not possible to access our company logo API publicly without authentication. If you wish to do so, you have to create proxy on your own server that calls our API from the server side.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CompanyLogoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CompanyLogoRequest();
    $request->domain = 'vel';

    $response = $sdk->sdk->companyLogo($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## emojiSuggestions

Returns list of emoji suggestions for a given text of the post

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EmojiSuggestionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EmojiSuggestionsRequest();
    $request->text = 'error';

    $response = $sdk->sdk->emojiSuggestions($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## hashtagHistory

Returns historical stats for a given hashtag from the last 30 days

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\HashtagHistoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new HashtagHistoryRequest();
    $request->hashtag = 'deserunt';

    $response = $sdk->sdk->hashtagHistory($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## hashtagStats

Returns real-time stats for up to 100 hashtags (updated hourly).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\HashtagStatsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new HashtagStatsRequest();
    $request->tags = [
        'iure',
        'magnam',
    ];

    $response = $sdk->sdk->hashtagStats($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## hashtagSuggestions

Returns list of hashtag suggestions for a single-word topic or a shorter text up to 1000 characters. Takes into account both semantic relevancy and real-time hashtag popularity.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\HashtagSuggestionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new HashtagSuggestionsRequest();
    $request->text = 'debitis';

    $response = $sdk->sdk->hashtagSuggestions($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## hashtagsCleaner

Remove banned hashtags before posting to Instagram

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\HashtagsCleanerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new HashtagsCleanerRequest();
    $request->post = 'ipsa';

    $response = $sdk->sdk->hashtagsCleaner($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listOfCTAs

Returns list of available CTA for current user. Requires each user to authenticate with RiteKit

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->sdk->listOfCTAs();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## shortenLink

Returns a shorten link with a given CTA.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ShortenLinkRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ShortenLinkRequest();
    $request->cta = 963663;
    $request->url = 'tempora';

    $response = $sdk->sdk->shortenLink($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## textToImage

Returns URL of an image created from text according to given style parameters

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TextToImageRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TextToImageRequest();
    $request->animation = 'suscipit';
    $request->author = 'molestiae';
    $request->authorFont = 'minus';
    $request->authorFontColor = 'placeat';
    $request->backgroundColor = 'voluptatum';
    $request->bgType = 'iusto';
    $request->brandLogo = 'excepturi';
    $request->enableHighlight = 392785;
    $request->fontSize = 925597;
    $request->gradientColor1 = 'temporibus';
    $request->gradientColor2 = 'ab';
    $request->gradientType = 'quis';
    $request->highlightColor = 'veritatis';
    $request->quote = 'deserunt';
    $request->quoteFont = 'perferendis';
    $request->quoteFontColor = 'ipsam';
    $request->showQuoteMark = 832620;

    $response = $sdk->sdk->textToImage($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## trendingHashtags

Returns list of hashtags currently trending on Twitter

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TrendingHashtagsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TrendingHashtagsRequest();
    $request->green = false;
    $request->latin = false;

    $response = $sdk->sdk->trendingHashtags($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
