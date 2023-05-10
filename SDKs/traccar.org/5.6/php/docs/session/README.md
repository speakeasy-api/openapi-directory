# session

## Overview

User session management

### Available Operations

* [deleteSession](#deletesession) - Close the Session
* [getSession](#getsession) - Fetch Session information
* [postSession](#postsession) - Create a new Session

## deleteSession

Close the Session

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->session->deleteSession();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSession

Fetch Session information

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSessionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSessionRequest();
    $request->token = 'saepe';

    $response = $sdk->session->getSession($request);

    if ($response->user !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSession

Create a new Session

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostSessionRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostSessionRequestBody();
    $request->email = 'Luna83@yahoo.com';
    $request->password = 'totam';

    $response = $sdk->session->postSession($request);

    if ($response->user !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
