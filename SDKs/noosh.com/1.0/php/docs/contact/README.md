# contact

### Available Operations

* [getBillingRecipients](#getbillingrecipients) - List Billing Recipients
* [getContactList](#getcontactlist) - List the contacts
* [getContactUserInfo](#getcontactuserinfo) - Contact Info

## getBillingRecipients

List Billing Recipients

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBillingRecipientsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBillingRecipientsRequest();
    $request->workgroupId = 'provident';

    $response = $sdk->contact->getBillingRecipients($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getContactList

List the contacts

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetContactListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetContactListRequest();
    $request->workgroupId = 'distinctio';

    $response = $sdk->contact->getContactList($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getContactUserInfo

Contact Info

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetContactUserInfoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetContactUserInfoRequest();
    $request->userId = 'quibusdam';
    $request->workgroupId = 'unde';

    $response = $sdk->contact->getContactUserInfo($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
