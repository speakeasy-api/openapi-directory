# rootSession

## Overview

User session management.

### Available Operations

* [createSession](#createsession) - Create user session
* [deleteSession](#deletesession) - Delete user session

## createSession

Open a user session.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\CreateSessionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSessionRequest();
    $request->organizationId = 'nisi';
    $request->realm = 'quis';

    $response = $sdk->rootSession->createSession($request);

    if ($response->sessionSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSession

Close a user session and invalidate the session token.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSessionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSessionRequest();
    $request->id = '0edf22a9-4d20-4ec9-8ea4-1d1f465e8515';

    $response = $sdk->rootSession->deleteSession($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
