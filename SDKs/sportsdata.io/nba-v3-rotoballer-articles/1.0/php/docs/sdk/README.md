# SDK

### Available Operations

* [rotoballerArticles](#rotoballerarticles) - RotoBaller Articles
* [rotoballerArticlesByDate](#rotoballerarticlesbydate) - RotoBaller Articles by Date
* [rotoballerArticlesByPlayer](#rotoballerarticlesbyplayer) - RotoBaller Articles by Player

## rotoballerArticles

RotoBaller Articles

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RotoballerArticlesRequest;
use \OpenAPI\OpenAPI\Models\Operations\RotoballerArticlesFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RotoballerArticlesRequest();
    $request->format = RotoballerArticlesFormatEnum::JSON;

    $response = $sdk->sdk->rotoballerArticles($request);

    if ($response->articles !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## rotoballerArticlesByDate

RotoBaller Articles by Date

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RotoballerArticlesByDateRequest;
use \OpenAPI\OpenAPI\Models\Operations\RotoballerArticlesByDateFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RotoballerArticlesByDateRequest();
    $request->date = 'distinctio';
    $request->format = RotoballerArticlesByDateFormatEnum::JSON;

    $response = $sdk->sdk->rotoballerArticlesByDate($request);

    if ($response->articles !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## rotoballerArticlesByPlayer

RotoBaller Articles by Player

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RotoballerArticlesByPlayerRequest;
use \OpenAPI\OpenAPI\Models\Operations\RotoballerArticlesByPlayerFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RotoballerArticlesByPlayerRequest();
    $request->format = RotoballerArticlesByPlayerFormatEnum::JSON;
    $request->playerid = 'nulla';

    $response = $sdk->sdk->rotoballerArticlesByPlayer($request);

    if ($response->articles !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
