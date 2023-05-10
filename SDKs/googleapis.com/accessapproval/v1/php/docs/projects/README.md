# projects

### Available Operations

* [accessapprovalProjectsApprovalRequestsApprove](#accessapprovalprojectsapprovalrequestsapprove) - Approves a request and returns the updated ApprovalRequest. Returns NOT_FOUND if the request does not exist. Returns FAILED_PRECONDITION if the request exists but is not in a pending state.
* [accessapprovalProjectsApprovalRequestsDismiss](#accessapprovalprojectsapprovalrequestsdismiss) - Dismisses a request. Returns the updated ApprovalRequest. NOTE: This does not deny access to the resource if another request has been made and approved. It is equivalent in effect to ignoring the request altogether. Returns NOT_FOUND if the request does not exist. Returns FAILED_PRECONDITION if the request exists but is not in a pending state.
* [accessapprovalProjectsApprovalRequestsGet](#accessapprovalprojectsapprovalrequestsget) - Gets an approval request. Returns NOT_FOUND if the request does not exist.
* [accessapprovalProjectsApprovalRequestsInvalidate](#accessapprovalprojectsapprovalrequestsinvalidate) - Invalidates an existing ApprovalRequest. Returns the updated ApprovalRequest. NOTE: This does not deny access to the resource if another request has been made and approved. It only invalidates a single approval. Returns FAILED_PRECONDITION if the request exists but is not in an approved state.
* [accessapprovalProjectsApprovalRequestsList](#accessapprovalprojectsapprovalrequestslist) - Lists approval requests associated with a project, folder, or organization. Approval requests can be filtered by state (pending, active, dismissed). The order is reverse chronological.
* [accessapprovalProjectsDeleteAccessApprovalSettings](#accessapprovalprojectsdeleteaccessapprovalsettings) - Deletes the settings associated with a project, folder, or organization. This will have the effect of disabling Access Approval for the project, folder, or organization, but only if all ancestors also have Access Approval disabled. If Access Approval is enabled at a higher level of the hierarchy, then Access Approval will still be enabled at this level as the settings are inherited.
* [accessapprovalProjectsUpdateAccessApprovalSettings](#accessapprovalprojectsupdateaccessapprovalsettings) - Updates the settings associated with a project, folder, or organization. Settings to update are determined by the value of field_mask.

## accessapprovalProjectsApprovalRequestsApprove

Approves a request and returns the updated ApprovalRequest. Returns NOT_FOUND if the request does not exist. Returns FAILED_PRECONDITION if the request exists but is not in a pending state.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AccessapprovalProjectsApprovalRequestsApproveRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ApproveApprovalRequestMessage;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AccessapprovalProjectsApprovalRequestsApproveSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccessapprovalProjectsApprovalRequestsApproveRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->approveApprovalRequestMessage = new ApproveApprovalRequestMessage();
    $request->approveApprovalRequestMessage->expireTime = 'tempora';
    $request->accessToken = 'suscipit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'minus';
    $request->fields = 'placeat';
    $request->key = 'voluptatum';
    $request->name = 'Miriam Huel';
    $request->oauthToken = 'ab';
    $request->prettyPrint = false;
    $request->quotaUser = 'quis';
    $request->uploadType = 'veritatis';
    $request->uploadProtocol = 'deserunt';

    $requestSecurity = new AccessapprovalProjectsApprovalRequestsApproveSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->accessapprovalProjectsApprovalRequestsApprove($request, $requestSecurity);

    if ($response->approvalRequest !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accessapprovalProjectsApprovalRequestsDismiss

Dismisses a request. Returns the updated ApprovalRequest. NOTE: This does not deny access to the resource if another request has been made and approved. It is equivalent in effect to ignoring the request altogether. Returns NOT_FOUND if the request does not exist. Returns FAILED_PRECONDITION if the request exists but is not in a pending state.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AccessapprovalProjectsApprovalRequestsDismissRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AccessapprovalProjectsApprovalRequestsDismissSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccessapprovalProjectsApprovalRequestsDismissRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'repellendus' => 'sapiente',
        'quo' => 'odit',
    ];
    $request->accessToken = 'at';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'maiores';
    $request->fields = 'molestiae';
    $request->key = 'quod';
    $request->name = 'Erik Lebsack';
    $request->oauthToken = 'dicta';
    $request->prettyPrint = false;
    $request->quotaUser = 'nam';
    $request->uploadType = 'officia';
    $request->uploadProtocol = 'occaecati';

    $requestSecurity = new AccessapprovalProjectsApprovalRequestsDismissSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->accessapprovalProjectsApprovalRequestsDismiss($request, $requestSecurity);

    if ($response->approvalRequest !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accessapprovalProjectsApprovalRequestsGet

Gets an approval request. Returns NOT_FOUND if the request does not exist.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AccessapprovalProjectsApprovalRequestsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AccessapprovalProjectsApprovalRequestsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccessapprovalProjectsApprovalRequestsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'deleniti';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'optio';
    $request->fields = 'totam';
    $request->key = 'beatae';
    $request->name = 'Tanya Gleason';
    $request->oauthToken = 'cum';
    $request->prettyPrint = false;
    $request->quotaUser = 'esse';
    $request->uploadType = 'ipsum';
    $request->uploadProtocol = 'excepturi';

    $requestSecurity = new AccessapprovalProjectsApprovalRequestsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->accessapprovalProjectsApprovalRequestsGet($request, $requestSecurity);

    if ($response->approvalRequest !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accessapprovalProjectsApprovalRequestsInvalidate

Invalidates an existing ApprovalRequest. Returns the updated ApprovalRequest. NOTE: This does not deny access to the resource if another request has been made and approved. It only invalidates a single approval. Returns FAILED_PRECONDITION if the request exists but is not in an approved state.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AccessapprovalProjectsApprovalRequestsInvalidateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AccessapprovalProjectsApprovalRequestsInvalidateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccessapprovalProjectsApprovalRequestsInvalidateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'ad' => 'natus',
    ];
    $request->accessToken = 'sed';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolor';
    $request->fields = 'natus';
    $request->key = 'laboriosam';
    $request->name = 'Elias Parker';
    $request->oauthToken = 'iste';
    $request->prettyPrint = false;
    $request->quotaUser = 'iure';
    $request->uploadType = 'saepe';
    $request->uploadProtocol = 'quidem';

    $requestSecurity = new AccessapprovalProjectsApprovalRequestsInvalidateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->accessapprovalProjectsApprovalRequestsInvalidate($request, $requestSecurity);

    if ($response->approvalRequest !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accessapprovalProjectsApprovalRequestsList

Lists approval requests associated with a project, folder, or organization. Approval requests can be filtered by state (pending, active, dismissed). The order is reverse chronological.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AccessapprovalProjectsApprovalRequestsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AccessapprovalProjectsApprovalRequestsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccessapprovalProjectsApprovalRequestsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ipsa';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'est';
    $request->fields = 'mollitia';
    $request->filter = 'laborum';
    $request->key = 'dolores';
    $request->oauthToken = 'dolorem';
    $request->pageSize = 358152;
    $request->pageToken = 'explicabo';
    $request->parent = 'nobis';
    $request->prettyPrint = false;
    $request->quotaUser = 'enim';
    $request->uploadType = 'omnis';
    $request->uploadProtocol = 'nemo';

    $requestSecurity = new AccessapprovalProjectsApprovalRequestsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->accessapprovalProjectsApprovalRequestsList($request, $requestSecurity);

    if ($response->listApprovalRequestsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accessapprovalProjectsDeleteAccessApprovalSettings

Deletes the settings associated with a project, folder, or organization. This will have the effect of disabling Access Approval for the project, folder, or organization, but only if all ancestors also have Access Approval disabled. If Access Approval is enabled at a higher level of the hierarchy, then Access Approval will still be enabled at this level as the settings are inherited.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AccessapprovalProjectsDeleteAccessApprovalSettingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AccessapprovalProjectsDeleteAccessApprovalSettingsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccessapprovalProjectsDeleteAccessApprovalSettingsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'iure';
    $request->fields = 'culpa';
    $request->key = 'doloribus';
    $request->name = 'Juan O'Hara';
    $request->oauthToken = 'consequuntur';
    $request->prettyPrint = false;
    $request->quotaUser = 'repellat';
    $request->uploadType = 'mollitia';
    $request->uploadProtocol = 'occaecati';

    $requestSecurity = new AccessapprovalProjectsDeleteAccessApprovalSettingsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->accessapprovalProjectsDeleteAccessApprovalSettings($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accessapprovalProjectsUpdateAccessApprovalSettings

Updates the settings associated with a project, folder, or organization. Settings to update are determined by the value of field_mask.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AccessapprovalProjectsUpdateAccessApprovalSettingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AccessApprovalSettingsInput;
use \OpenAPI\OpenAPI\Models\Shared\EnrolledService;
use \OpenAPI\OpenAPI\Models\Shared\EnrolledServiceEnrollmentLevelEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AccessapprovalProjectsUpdateAccessApprovalSettingsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccessapprovalProjectsUpdateAccessApprovalSettingsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessApprovalSettingsInput = new AccessApprovalSettingsInput();
    $request->accessApprovalSettingsInput->activeKeyVersion = 'commodi';
    $request->accessApprovalSettingsInput->enrolledServices = [
        new EnrolledService(),
        new EnrolledService(),
    ];
    $request->accessApprovalSettingsInput->name = 'Shannon Mueller';
    $request->accessApprovalSettingsInput->notificationEmails = [
        'laborum',
    ];
    $request->accessApprovalSettingsInput->preferNoBroadApprovalRequests = false;
    $request->accessApprovalSettingsInput->preferredRequestExpirationDays = 656330;
    $request->accessToken = 'enim';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quo';
    $request->fields = 'sequi';
    $request->key = 'tenetur';
    $request->name = 'Mr. Alberta Schuster';
    $request->oauthToken = 'temporibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'laborum';
    $request->updateMask = 'quasi';
    $request->uploadType = 'reiciendis';
    $request->uploadProtocol = 'voluptatibus';

    $requestSecurity = new AccessapprovalProjectsUpdateAccessApprovalSettingsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->accessapprovalProjectsUpdateAccessApprovalSettings($request, $requestSecurity);

    if ($response->accessApprovalSettings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
