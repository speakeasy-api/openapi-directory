# sandbox

### Available Operations

* [deleteSandboxSandboxId](#deletesandboxsandboxid) - Delete Sandbox
* [getSandboxSandboxId](#getsandboxsandboxid) - Export Sandbox
* [postSandbox](#postsandbox) - Create Sandbox
* [putSandbox](#putsandbox) - Import Sandbox

## deleteSandboxSandboxId

Delete Sandbox

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSandboxSandboxIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSandboxSandboxIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSandboxSandboxIdRequest();
    $request->sandboxId = 'in';

    $requestSecurity = new DeleteSandboxSandboxIdSecurity();
    $requestSecurity->authorizationCodeToken = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->clientId = 'YOUR_API_KEY_HERE';

    $response = $sdk->sandbox->deleteSandboxSandboxId($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSandboxSandboxId

Export Sandbox

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSandboxSandboxIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSandboxSandboxIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSandboxSandboxIdRequest();
    $request->sandboxId = 'corporis';

    $requestSecurity = new GetSandboxSandboxIdSecurity();
    $requestSecurity->authorizationCodeToken = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->clientId = 'YOUR_API_KEY_HERE';

    $response = $sdk->sandbox->getSandboxSandboxId($request, $requestSecurity);

    if ($response->sandbox !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSandbox

Create Sandbox

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SandboxRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostSandboxSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SandboxRequest();
    $request->sandboxId = 'iste';

    $requestSecurity = new PostSandboxSecurity();
    $requestSecurity->authorizationCodeToken = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->clientId = 'YOUR_API_KEY_HERE';

    $response = $sdk->sandbox->postSandbox($request, $requestSecurity);

    if ($response->sandbox !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putSandbox

Import Sandbox

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Sandbox;
use \OpenAPI\OpenAPI\Models\Shared\SandboxUser;
use \OpenAPI\OpenAPI\Models\Shared\SandboxBankAccount;
use \OpenAPI\OpenAPI\Models\Shared\SandboxBeneficiary;
use \OpenAPI\OpenAPI\Models\Shared\SandboxBankAccountInfo;
use \OpenAPI\OpenAPI\Models\Shared\SandboxParty;
use \OpenAPI\OpenAPI\Models\Shared\SandboxScheduledPayment;
use \OpenAPI\OpenAPI\Models\Shared\SandboxStandingOrder;
use \OpenAPI\OpenAPI\Models\Shared\SandboxStatement;
use \OpenAPI\OpenAPI\Models\Shared\SandboxTransaction;
use \OpenAPI\OpenAPI\Models\Shared\SandboxCard;
use \OpenAPI\OpenAPI\Models\Shared\SandboxCardInfo;
use \OpenAPI\OpenAPI\Models\Shared\SandboxRetryCacheEntry;
use \OpenAPI\OpenAPI\Models\Operations\PutSandboxSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Sandbox();
    $request->sandboxId = 'iure';
    $request->users = [
        new SandboxUser(),
        new SandboxUser(),
        new SandboxUser(),
        new SandboxUser(),
    ];

    $requestSecurity = new PutSandboxSecurity();
    $requestSecurity->authorizationCodeToken = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->clientId = 'YOUR_API_KEY_HERE';

    $response = $sdk->sandbox->putSandbox($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
