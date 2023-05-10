# quoteOfTheDay

## Overview

Access quote of the day service. Use this to get the quote of the day in various categories. This is a free API that is available to public. You must credit They Said So if you are using the free version.

Find out more
<https://theysaidso.com/api/quote#qod>
### Available Operations

* [getQod](#getqod) - Gets `Quote of the Day` (QOD). Optional `category` param determines the category of returned quote of the day

* [getQodCategories](#getqodcategories) - Gets a list of `Quote of the Day` Categories.

* [getQodLanguages](#getqodlanguages) - Gets a list of supported languages for `Quote of the Day`. 


## getQod

Gets `Quote of the Day` (QOD). Optional `category` param determines the category of returned quote of the day


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetQodRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetQodSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetQodRequest();
    $request->category = 'occaecati';
    $request->id = 'numquam';
    $request->language = 'commodi';

    $requestSecurity = new GetQodSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->quoteOfTheDay->getQod($request, $requestSecurity);

    if ($response->qodResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getQodCategories

Gets a list of `Quote of the Day` Categories.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetQodCategoriesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetQodCategoriesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetQodCategoriesRequest();
    $request->detailed = false;
    $request->language = 'quam';

    $requestSecurity = new GetQodCategoriesSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->quoteOfTheDay->getQodCategories($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getQodLanguages

Gets a list of supported languages for `Quote of the Day`. 


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetQodLanguagesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new GetQodLanguagesSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->quoteOfTheDay->getQodLanguages($requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
