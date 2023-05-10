# userDeletion

### Available Operations

* [analyticsUserDeletionUserDeletionRequestUpsert](#analyticsuserdeletionuserdeletionrequestupsert) - Insert or update a user deletion requests.

## analyticsUserDeletionUserDeletionRequestUpsert

Insert or update a user deletion requests.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsUserDeletionUserDeletionRequestUpsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\UserDeletionRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\UserDeletionRequestId;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsUserDeletionUserDeletionRequestUpsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsUserDeletionUserDeletionRequestUpsertRequest();
    $request->userDeletionRequestInput = new UserDeletionRequestInput();
    $request->userDeletionRequestInput->firebaseProjectId = 'quos';
    $request->userDeletionRequestInput->id = new UserDeletionRequestId();
    $request->userDeletionRequestInput->id->type = 'numquam';
    $request->userDeletionRequestInput->id->userId = 'vitae';
    $request->userDeletionRequestInput->kind = 'maiores';
    $request->userDeletionRequestInput->propertyId = 'nam';
    $request->userDeletionRequestInput->webPropertyId = 'architecto';
    $request->alt = AltEnum::JSON;
    $request->fields = 'rerum';
    $request->key = 'assumenda';
    $request->oauthToken = 'eos';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorem';
    $request->userIp = 'hic';

    $requestSecurity = new AnalyticsUserDeletionUserDeletionRequestUpsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->userDeletion->analyticsUserDeletionUserDeletionRequestUpsert($request, $requestSecurity);

    if ($response->userDeletionRequest !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
