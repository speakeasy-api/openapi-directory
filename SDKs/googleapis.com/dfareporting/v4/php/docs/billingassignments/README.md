# billingAssignments

### Available Operations

* [dfareportingBillingAssignmentsInsert](#dfareportingbillingassignmentsinsert) - Inserts a new billing assignment and returns the new assignment. Only one of advertiser_id or campaign_id is support per request. If the new assignment has no effect (assigning a campaign to the parent advertiser billing profile or assigning an advertiser to the account billing profile), no assignment will be returned.
* [dfareportingBillingAssignmentsList](#dfareportingbillingassignmentslist) - Retrieves a list of billing assignments.

## dfareportingBillingAssignmentsInsert

Inserts a new billing assignment and returns the new assignment. Only one of advertiser_id or campaign_id is support per request. If the new assignment has no effect (assigning a campaign to the parent advertiser billing profile or assigning an advertiser to the account billing profile), no assignment will be returned.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingBillingAssignmentsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BillingAssignment;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingBillingAssignmentsInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingBillingAssignmentsInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->billingAssignment = new BillingAssignment();
    $request->billingAssignment->accountId = 'totam';
    $request->billingAssignment->advertiserId = 'dicta';
    $request->billingAssignment->campaignId = 'voluptatem';
    $request->billingAssignment->kind = 'velit';
    $request->billingAssignment->subaccountId = 'dolor';
    $request->accessToken = 'sunt';
    $request->alt = AltEnum::PROTO;
    $request->billingProfileId = 'dolor';
    $request->callback = 'occaecati';
    $request->fields = 'atque';
    $request->key = 'beatae';
    $request->oauthToken = 'at';
    $request->prettyPrint = false;
    $request->profileId = 'labore';
    $request->quotaUser = 'minus';
    $request->uploadType = 'esse';
    $request->uploadProtocol = 'voluptatem';

    $requestSecurity = new DfareportingBillingAssignmentsInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->billingAssignments->dfareportingBillingAssignmentsInsert($request, $requestSecurity);

    if ($response->billingAssignment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingBillingAssignmentsList

Retrieves a list of billing assignments.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingBillingAssignmentsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingBillingAssignmentsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingBillingAssignmentsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'rerum';
    $request->alt = AltEnum::MEDIA;
    $request->billingProfileId = 'aperiam';
    $request->callback = 'dignissimos';
    $request->fields = 'repellat';
    $request->key = 'velit';
    $request->oauthToken = 'porro';
    $request->prettyPrint = false;
    $request->profileId = 'provident';
    $request->quotaUser = 'consectetur';
    $request->uploadType = 'eligendi';
    $request->uploadProtocol = 'dignissimos';

    $requestSecurity = new DfareportingBillingAssignmentsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->billingAssignments->dfareportingBillingAssignmentsList($request, $requestSecurity);

    if ($response->billingAssignmentsListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
