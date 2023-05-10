# SDK

## Overview

The [Redact API](/redact/overview) helps organisations meet their privacy compliance obligations. It provides controlled, on-demand redaction of private information from transactional records in the long-term storage. Note, Redact API does not have the capability to redact the short-lived server logs that are retained for a few weeks. For SMS customers that need immediate redaction, Vonage suggests using [Advanced Auto-redact](/redact/overview#auto-redact-vs-redact-api).

### Available Operations

* [redactMessage](#redactmessage) - Redact a specific message

## redactMessage

Redact a specific message

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\RedactTransaction;
use \OpenAPI\OpenAPI\Models\Shared\RedactTransactionProductEnum;
use \OpenAPI\OpenAPI\Models\Shared\RedactTransactionTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\RedactMessageSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RedactTransaction();
    $request->id = '209ab3c7536542b91e8b5aef032f6861';
    $request->product = RedactTransactionProductEnum::SMS;
    $request->type = RedactTransactionTypeEnum::OUTBOUND;

    $requestSecurity = new RedactMessageSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->redactMessage($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
