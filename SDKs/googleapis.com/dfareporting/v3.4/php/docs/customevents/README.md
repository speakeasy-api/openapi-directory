# customEvents

### Available Operations

* [dfareportingCustomEventsBatchinsert](#dfareportingcustomeventsbatchinsert) - Inserts custom events.

## dfareportingCustomEventsBatchinsert

Inserts custom events.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingCustomEventsBatchinsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CustomEventsBatchInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\CustomEvent;
use \OpenAPI\OpenAPI\Models\Shared\CustomEventClickAnnotation;
use \OpenAPI\OpenAPI\Models\Shared\CustomEventImpressionAnnotation;
use \OpenAPI\OpenAPI\Models\Shared\CustomVariable;
use \OpenAPI\OpenAPI\Models\Shared\CustomEventEventTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CustomEventInsert;
use \OpenAPI\OpenAPI\Models\Shared\CampaignManagerIds;
use \OpenAPI\OpenAPI\Models\Shared\Dv3Ids;
use \OpenAPI\OpenAPI\Models\Shared\CustomEventInsertInsertEventTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingCustomEventsBatchinsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingCustomEventsBatchinsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->customEventsBatchInsertRequest = new CustomEventsBatchInsertRequest();
    $request->customEventsBatchInsertRequest->customEvents = [
        new CustomEvent(),
        new CustomEvent(),
        new CustomEvent(),
        new CustomEvent(),
    ];
    $request->customEventsBatchInsertRequest->kind = 'est';
    $request->accessToken = 'commodi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'autem';
    $request->fields = 'dicta';
    $request->key = 'recusandae';
    $request->oauthToken = 'sapiente';
    $request->prettyPrint = false;
    $request->profileId = 'id';
    $request->quotaUser = 'odit';
    $request->uploadType = 'inventore';
    $request->uploadProtocol = 'iste';

    $requestSecurity = new DfareportingCustomEventsBatchinsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customEvents->dfareportingCustomEventsBatchinsert($request, $requestSecurity);

    if ($response->customEventsBatchInsertResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
