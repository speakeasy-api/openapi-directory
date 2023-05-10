# www

### Available Operations

* [browserBot](#browserbot) - Browser Bot
* [htmlClean](#htmlclean) - HTML Clean
* [urlInfo](#urlinfo) - URL Info

## browserBot

Browser bot can extract content, interact with keyboard and mouse events, and execute JavaScript on a website

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BrowserBotRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BrowserBotRequestBody();
    $request->delay = 96098;
    $request->exec = [
        'voluptatibus',
        'vero',
        'nihil',
        'praesentium',
    ];
    $request->ignoreCertificateErrors = false;
    $request->selector = 'voluptatibus';
    $request->timeout = 55714;
    $request->url = 'omnis';
    $request->userAgent = 'voluptate';

    $response = $sdk->www->browserBot($request);

    if ($response->browserBotResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## htmlClean

Clean and sanitize untrusted HTML

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\HTMLCleanRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new HTMLCleanRequestBody();
    $request->content = 'cum';
    $request->outputType = 'perferendis';

    $response = $sdk->www->htmlClean($request);

    if ($response->htmlClean200ApplicationJSONBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## urlInfo

Parse, analyze and retrieve content from the supplied URL

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\URLInfoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new URLInfoRequest();
    $request->fetchContent = false;
    $request->ignoreCertificateErrors = false;
    $request->retry = 39187;
    $request->timeout = 441711;
    $request->url = 'ut';

    $response = $sdk->www->urlInfo($request);

    if ($response->urlInfoResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
