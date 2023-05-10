# instanceGroupManagerResizeRequests

### Available Operations

* [computeInstanceGroupManagerResizeRequestsCancel](#computeinstancegroupmanagerresizerequestscancel) - Cancels the specified resize request and removes it from the queue. Cancelled resize request does no longer wait for the resources to be provisioned. Cancel is only possible for requests that are accepted in the queue.
* [computeInstanceGroupManagerResizeRequestsDelete](#computeinstancegroupmanagerresizerequestsdelete) - Deletes the specified, inactive resize request. Requests that are still active cannot be deleted. Deleting request does not delete instances that were provisioned previously.
* [computeInstanceGroupManagerResizeRequestsGet](#computeinstancegroupmanagerresizerequestsget) - Returns all of the details about the specified resize request.
* [computeInstanceGroupManagerResizeRequestsInsert](#computeinstancegroupmanagerresizerequestsinsert) - Creates a new resize request that starts provisioning VMs immediately or queues VM creation.
* [computeInstanceGroupManagerResizeRequestsList](#computeinstancegroupmanagerresizerequestslist) - Retrieves a list of resize requests that are contained in the managed instance group.

## computeInstanceGroupManagerResizeRequestsCancel

Cancels the specified resize request and removes it from the queue. Cancelled resize request does no longer wait for the resources to be provisioned. Cancel is only possible for requests that are accepted in the queue.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagerResizeRequestsCancelRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagerResizeRequestsCancelSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagerResizeRequestsCancelSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagerResizeRequestsCancelSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstanceGroupManagerResizeRequestsCancelRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quasi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'officiis';
    $request->fields = 'veniam';
    $request->instanceGroupManager = 'quae';
    $request->key = 'dolore';
    $request->oauthToken = 'in';
    $request->prettyPrint = false;
    $request->project = 'libero';
    $request->quotaUser = 'ut';
    $request->requestId = 'cumque';
    $request->resizeRequest = 'quia';
    $request->uploadType = 'beatae';
    $request->uploadProtocol = 'porro';
    $request->userIp = 'cumque';
    $request->zone = 'distinctio';

    $requestSecurity = new ComputeInstanceGroupManagerResizeRequestsCancelSecurity();
    $requestSecurity->option1 = new ComputeInstanceGroupManagerResizeRequestsCancelSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instanceGroupManagerResizeRequests->computeInstanceGroupManagerResizeRequestsCancel($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstanceGroupManagerResizeRequestsDelete

Deletes the specified, inactive resize request. Requests that are still active cannot be deleted. Deleting request does not delete instances that were provisioned previously.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagerResizeRequestsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagerResizeRequestsDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagerResizeRequestsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagerResizeRequestsDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstanceGroupManagerResizeRequestsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'fugit';
    $request->alt = AltEnum::JSON;
    $request->callback = 'culpa';
    $request->fields = 'facilis';
    $request->instanceGroupManager = 'minus';
    $request->key = 'vero';
    $request->oauthToken = 'impedit';
    $request->prettyPrint = false;
    $request->project = 'omnis';
    $request->quotaUser = 'et';
    $request->requestId = 'earum';
    $request->resizeRequest = 'fuga';
    $request->uploadType = 'est';
    $request->uploadProtocol = 'distinctio';
    $request->userIp = 'fugiat';
    $request->zone = 'nulla';

    $requestSecurity = new ComputeInstanceGroupManagerResizeRequestsDeleteSecurity();
    $requestSecurity->option1 = new ComputeInstanceGroupManagerResizeRequestsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instanceGroupManagerResizeRequests->computeInstanceGroupManagerResizeRequestsDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstanceGroupManagerResizeRequestsGet

Returns all of the details about the specified resize request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagerResizeRequestsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagerResizeRequestsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagerResizeRequestsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagerResizeRequestsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagerResizeRequestsGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstanceGroupManagerResizeRequestsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'praesentium';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'esse';
    $request->fields = 'vitae';
    $request->instanceGroupManager = 'delectus';
    $request->key = 'laboriosam';
    $request->oauthToken = 'minus';
    $request->prettyPrint = false;
    $request->project = 'labore';
    $request->quotaUser = 'quas';
    $request->resizeRequest = 'sed';
    $request->uploadType = 'veniam';
    $request->uploadProtocol = 'sed';
    $request->userIp = 'quibusdam';
    $request->zone = 'reprehenderit';

    $requestSecurity = new ComputeInstanceGroupManagerResizeRequestsGetSecurity();
    $requestSecurity->option1 = new ComputeInstanceGroupManagerResizeRequestsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instanceGroupManagerResizeRequests->computeInstanceGroupManagerResizeRequestsGet($request, $requestSecurity);

    if ($response->instanceGroupManagerResizeRequest !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstanceGroupManagerResizeRequestsInsert

Creates a new resize request that starts provisioning VMs immediately or queues VM creation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagerResizeRequestsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerResizeRequest;
use \OpenAPI\OpenAPI\Models\Shared\QueuingPolicy;
use \OpenAPI\OpenAPI\Models\Shared\Duration;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerResizeRequestStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerResizeRequestStatus;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerResizeRequestStatusError;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerResizeRequestStatusErrorErrors;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerResizeRequestStatusErrorErrorsErrorDetails;
use \OpenAPI\OpenAPI\Models\Shared\ErrorInfo;
use \OpenAPI\OpenAPI\Models\Shared\Help;
use \OpenAPI\OpenAPI\Models\Shared\HelpLink;
use \OpenAPI\OpenAPI\Models\Shared\LocalizedMessage;
use \OpenAPI\OpenAPI\Models\Shared\QuotaExceededInfo;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagerResizeRequestsInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagerResizeRequestsInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagerResizeRequestsInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstanceGroupManagerResizeRequestsInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->instanceGroupManagerResizeRequest = new InstanceGroupManagerResizeRequest();
    $request->instanceGroupManagerResizeRequest->count = 442435;
    $request->instanceGroupManagerResizeRequest->creationTimestamp = 'et';
    $request->instanceGroupManagerResizeRequest->description = 'eveniet';
    $request->instanceGroupManagerResizeRequest->id = 'voluptate';
    $request->instanceGroupManagerResizeRequest->kind = 'hic';
    $request->instanceGroupManagerResizeRequest->name = 'Thomas Kirlin Jr.';
    $request->instanceGroupManagerResizeRequest->queuingPolicy = new QueuingPolicy();
    $request->instanceGroupManagerResizeRequest->queuingPolicy->validUntilDuration = new Duration();
    $request->instanceGroupManagerResizeRequest->queuingPolicy->validUntilDuration->nanos = 611485;
    $request->instanceGroupManagerResizeRequest->queuingPolicy->validUntilDuration->seconds = 'accusamus';
    $request->instanceGroupManagerResizeRequest->queuingPolicy->validUntilTime = 'repellat';
    $request->instanceGroupManagerResizeRequest->selfLink = 'voluptatum';
    $request->instanceGroupManagerResizeRequest->selfLinkWithId = 'facere';
    $request->instanceGroupManagerResizeRequest->state = InstanceGroupManagerResizeRequestStateEnum::CANCELLED;
    $request->instanceGroupManagerResizeRequest->status = new InstanceGroupManagerResizeRequestStatus();
    $request->instanceGroupManagerResizeRequest->status->error = new InstanceGroupManagerResizeRequestStatusError();
    $request->instanceGroupManagerResizeRequest->status->error->errors = [
        new InstanceGroupManagerResizeRequestStatusErrorErrors(),
        new InstanceGroupManagerResizeRequestStatusErrorErrors(),
        new InstanceGroupManagerResizeRequestStatusErrorErrors(),
    ];
    $request->instanceGroupManagerResizeRequest->status->queuingPolicy = new QueuingPolicy();
    $request->instanceGroupManagerResizeRequest->status->queuingPolicy->validUntilDuration = new Duration();
    $request->instanceGroupManagerResizeRequest->status->queuingPolicy->validUntilDuration->nanos = 830473;
    $request->instanceGroupManagerResizeRequest->status->queuingPolicy->validUntilDuration->seconds = 'voluptates';
    $request->instanceGroupManagerResizeRequest->status->queuingPolicy->validUntilTime = 'illo';
    $request->instanceGroupManagerResizeRequest->zone = 'facere';
    $request->accessToken = 'fugiat';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aut';
    $request->fields = 'provident';
    $request->instanceGroupManager = 'voluptate';
    $request->key = 'tempore';
    $request->oauthToken = 'ullam';
    $request->prettyPrint = false;
    $request->project = 'illum';
    $request->quotaUser = 'mollitia';
    $request->requestId = 'ipsa';
    $request->uploadType = 'quos';
    $request->uploadProtocol = 'quo';
    $request->userIp = 'ullam';
    $request->zone = 'in';

    $requestSecurity = new ComputeInstanceGroupManagerResizeRequestsInsertSecurity();
    $requestSecurity->option1 = new ComputeInstanceGroupManagerResizeRequestsInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instanceGroupManagerResizeRequests->computeInstanceGroupManagerResizeRequestsInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstanceGroupManagerResizeRequestsList

Retrieves a list of resize requests that are contained in the managed instance group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagerResizeRequestsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagerResizeRequestsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagerResizeRequestsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagerResizeRequestsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagerResizeRequestsListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstanceGroupManagerResizeRequestsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'id';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'cumque';
    $request->fields = 'odio';
    $request->filter = 'atque';
    $request->instanceGroupManager = 'similique';
    $request->key = 'quia';
    $request->maxResults = 99160;
    $request->oauthToken = 'ea';
    $request->orderBy = 'accusamus';
    $request->pageToken = 'illo';
    $request->prettyPrint = false;
    $request->project = 'excepturi';
    $request->quotaUser = 'harum';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'laborum';
    $request->uploadProtocol = 'a';
    $request->userIp = 'repudiandae';
    $request->zone = 'minus';

    $requestSecurity = new ComputeInstanceGroupManagerResizeRequestsListSecurity();
    $requestSecurity->option1 = new ComputeInstanceGroupManagerResizeRequestsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instanceGroupManagerResizeRequests->computeInstanceGroupManagerResizeRequestsList($request, $requestSecurity);

    if ($response->instanceGroupManagerResizeRequestsListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
