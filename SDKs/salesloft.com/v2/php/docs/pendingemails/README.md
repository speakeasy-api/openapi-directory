# pendingEmails

## Overview

Pending Emails

### Available Operations

* [getV2PendingEmailsJson](#getv2pendingemailsjson) - Fetches a list of emails ready to be sent by an external email service. Only emails sent with an External Email Client will appear here.
* [putV2PendingEmailsIdJson](#putv2pendingemailsidjson) - Updates the status of an email sent by an External Email Client

## getV2PendingEmailsJson

Fetches a list of emails ready to be sent by an external email service.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2PendingEmailsJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2PendingEmailsJsonRequest();
    $request->includePagingCounts = false;
    $request->limitPagingCounts = false;
    $request->page = 484966;
    $request->perPage = 51170;

    $response = $sdk->pendingEmails->getV2PendingEmailsJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putV2PendingEmailsIdJson

Updates the status of an email sent by an External Email Client. Does not affect lofted emails.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutV2PendingEmailsIdJsonRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutV2PendingEmailsIdJsonRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutV2PendingEmailsIdJsonRequest();
    $request->requestBody = new PutV2PendingEmailsIdJsonRequestBody();
    $request->requestBody->errorMessage = 'saepe';
    $request->requestBody->messageId = 'architecto';
    $request->requestBody->sentAt = 'quos';
    $request->requestBody->status = 'iste';
    $request->id = 'dbb30fcb-33ea-4055-b197-cd44e2f52d82';

    $response = $sdk->pendingEmails->putV2PendingEmailsIdJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
