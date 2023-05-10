# SDK

## Overview

Get access to comments from registered users on New York Times articles.  NOTE: This API is deprecated.

<http://developer.nytimes.com/>
### Available Operations

* [getUserContentByDateJson](#getusercontentbydatejson) - Comments by Date
* [getUserContentRecentJson](#getusercontentrecentjson) - Recent User Comments
* [getUserContentUrlJson](#getusercontenturljson) - Comments by URL
* [getUserContentUserJson](#getusercontentuserjson) - Comments by User

## getUserContentByDateJson

Comments by Date

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETUserContentByDateJsonRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETUserContentByDateJsonSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETUserContentByDateJsonRequest();
    $request->date = 'provident';

    $requestSecurity = new GETUserContentByDateJsonSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->sdk->getUserContentByDateJson($request, $requestSecurity);

    if ($response->getUserContentByDateJSON200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUserContentRecentJson

Recent User Comments

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETUserContentRecentJsonSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new GETUserContentRecentJsonSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->sdk->getUserContentRecentJson($requestSecurity);

    if ($response->getUserContentRecentJSON200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUserContentUrlJson

Comments by URL

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETUserContentUrlJsonRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETUserContentUrlJsonSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETUserContentUrlJsonRequest();
    $request->url = 'distinctio';

    $requestSecurity = new GETUserContentUrlJsonSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->sdk->getUserContentUrlJson($request, $requestSecurity);

    if ($response->getUserContentUrlJSON200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUserContentUserJson

Comments by User

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETUserContentUserJsonRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETUserContentUserJsonSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETUserContentUserJsonRequest();
    $request->userID = 844266;

    $requestSecurity = new GETUserContentUserJsonSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->sdk->getUserContentUserJson($request, $requestSecurity);

    if ($response->getUserContentUserJSON200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
