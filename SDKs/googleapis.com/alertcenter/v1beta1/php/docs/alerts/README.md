# alerts

### Available Operations

* [alertcenterAlertsBatchDelete](#alertcenteralertsbatchdelete) - Performs batch delete operation on alerts.
* [alertcenterAlertsBatchUndelete](#alertcenteralertsbatchundelete) - Performs batch undelete operation on alerts.
* [alertcenterAlertsDelete](#alertcenteralertsdelete) - Marks the specified alert for deletion. An alert that has been marked for deletion is removed from Alert Center after 30 days. Marking an alert for deletion has no effect on an alert which has already been marked for deletion. Attempting to mark a nonexistent alert for deletion results in a `NOT_FOUND` error.
* [alertcenterAlertsFeedbackCreate](#alertcenteralertsfeedbackcreate) - Creates new feedback for an alert. Attempting to create a feedback for a non-existent alert returns `NOT_FOUND` error. Attempting to create a feedback for an alert that is marked for deletion returns `FAILED_PRECONDITION' error.
* [alertcenterAlertsFeedbackList](#alertcenteralertsfeedbacklist) - Lists all the feedback for an alert. Attempting to list feedbacks for a non-existent alert returns `NOT_FOUND` error.
* [alertcenterAlertsGet](#alertcenteralertsget) - Gets the specified alert. Attempting to get a nonexistent alert returns `NOT_FOUND` error.
* [alertcenterAlertsGetMetadata](#alertcenteralertsgetmetadata) - Returns the metadata of an alert. Attempting to get metadata for a non-existent alert returns `NOT_FOUND` error.
* [alertcenterAlertsList](#alertcenteralertslist) - Lists the alerts.
* [alertcenterAlertsUndelete](#alertcenteralertsundelete) - Restores, or "undeletes", an alert that was marked for deletion within the past 30 days. Attempting to undelete an alert which was marked for deletion over 30 days ago (which has been removed from the Alert Center database) or a nonexistent alert returns a `NOT_FOUND` error. Attempting to undelete an alert which has not been marked for deletion has no effect.

## alertcenterAlertsBatchDelete

Performs batch delete operation on alerts.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AlertcenterAlertsBatchDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BatchDeleteAlertsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AlertcenterAlertsBatchDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AlertcenterAlertsBatchDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->batchDeleteAlertsRequest = new BatchDeleteAlertsRequest();
    $request->batchDeleteAlertsRequest->alertId = [
        'tempora',
        'suscipit',
        'molestiae',
        'minus',
    ];
    $request->batchDeleteAlertsRequest->customerId = 'placeat';
    $request->accessToken = 'voluptatum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'excepturi';
    $request->fields = 'nisi';
    $request->key = 'recusandae';
    $request->oauthToken = 'temporibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'ab';
    $request->uploadType = 'quis';
    $request->uploadProtocol = 'veritatis';

    $requestSecurity = new AlertcenterAlertsBatchDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->alerts->alertcenterAlertsBatchDelete($request, $requestSecurity);

    if ($response->batchDeleteAlertsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## alertcenterAlertsBatchUndelete

Performs batch undelete operation on alerts.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AlertcenterAlertsBatchUndeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BatchUndeleteAlertsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AlertcenterAlertsBatchUndeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AlertcenterAlertsBatchUndeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->batchUndeleteAlertsRequest = new BatchUndeleteAlertsRequest();
    $request->batchUndeleteAlertsRequest->alertId = [
        'ipsam',
    ];
    $request->batchUndeleteAlertsRequest->customerId = 'repellendus';
    $request->accessToken = 'sapiente';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'odit';
    $request->fields = 'at';
    $request->key = 'at';
    $request->oauthToken = 'maiores';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestiae';
    $request->uploadType = 'quod';
    $request->uploadProtocol = 'quod';

    $requestSecurity = new AlertcenterAlertsBatchUndeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->alerts->alertcenterAlertsBatchUndelete($request, $requestSecurity);

    if ($response->batchUndeleteAlertsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## alertcenterAlertsDelete

Marks the specified alert for deletion. An alert that has been marked for deletion is removed from Alert Center after 30 days. Marking an alert for deletion has no effect on an alert which has already been marked for deletion. Attempting to mark a nonexistent alert for deletion results in a `NOT_FOUND` error.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AlertcenterAlertsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AlertcenterAlertsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AlertcenterAlertsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'totam';
    $request->alertId = 'porro';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dicta';
    $request->customerId = 'nam';
    $request->fields = 'officia';
    $request->key = 'occaecati';
    $request->oauthToken = 'fugit';
    $request->prettyPrint = false;
    $request->quotaUser = 'deleniti';
    $request->uploadType = 'hic';
    $request->uploadProtocol = 'optio';

    $requestSecurity = new AlertcenterAlertsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->alerts->alertcenterAlertsDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## alertcenterAlertsFeedbackCreate

Creates new feedback for an alert. Attempting to create a feedback for a non-existent alert returns `NOT_FOUND` error. Attempting to create a feedback for an alert that is marked for deletion returns `FAILED_PRECONDITION' error.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AlertcenterAlertsFeedbackCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AlertFeedback;
use \OpenAPI\OpenAPI\Models\Shared\AlertFeedbackTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AlertcenterAlertsFeedbackCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AlertcenterAlertsFeedbackCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->alertFeedback = new AlertFeedback();
    $request->alertFeedback->alertId = 'beatae';
    $request->alertFeedback->createTime = 'commodi';
    $request->alertFeedback->customerId = 'molestiae';
    $request->alertFeedback->email = 'Christy.Ryan21@gmail.com';
    $request->alertFeedback->feedbackId = 'excepturi';
    $request->alertFeedback->type = AlertFeedbackTypeEnum::ALERT_FEEDBACK_TYPE_UNSPECIFIED;
    $request->accessToken = 'perferendis';
    $request->alertId = 'ad';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'sed';
    $request->customerId = 'iste';
    $request->fields = 'dolor';
    $request->key = 'natus';
    $request->oauthToken = 'laboriosam';
    $request->prettyPrint = false;
    $request->quotaUser = 'hic';
    $request->uploadType = 'saepe';
    $request->uploadProtocol = 'fuga';

    $requestSecurity = new AlertcenterAlertsFeedbackCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->alerts->alertcenterAlertsFeedbackCreate($request, $requestSecurity);

    if ($response->alertFeedback !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## alertcenterAlertsFeedbackList

Lists all the feedback for an alert. Attempting to list feedbacks for a non-existent alert returns `NOT_FOUND` error.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AlertcenterAlertsFeedbackListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AlertcenterAlertsFeedbackListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AlertcenterAlertsFeedbackListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'corporis';
    $request->alertId = 'iste';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'saepe';
    $request->customerId = 'quidem';
    $request->fields = 'architecto';
    $request->filter = 'ipsa';
    $request->key = 'reiciendis';
    $request->oauthToken = 'est';
    $request->prettyPrint = false;
    $request->quotaUser = 'mollitia';
    $request->uploadType = 'laborum';
    $request->uploadProtocol = 'dolores';

    $requestSecurity = new AlertcenterAlertsFeedbackListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->alerts->alertcenterAlertsFeedbackList($request, $requestSecurity);

    if ($response->listAlertFeedbackResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## alertcenterAlertsGet

Gets the specified alert. Attempting to get a nonexistent alert returns `NOT_FOUND` error.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AlertcenterAlertsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AlertcenterAlertsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AlertcenterAlertsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'corporis';
    $request->alertId = 'explicabo';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'enim';
    $request->customerId = 'omnis';
    $request->fields = 'nemo';
    $request->key = 'minima';
    $request->oauthToken = 'excepturi';
    $request->prettyPrint = false;
    $request->quotaUser = 'accusantium';
    $request->uploadType = 'iure';
    $request->uploadProtocol = 'culpa';

    $requestSecurity = new AlertcenterAlertsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->alerts->alertcenterAlertsGet($request, $requestSecurity);

    if ($response->alert !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## alertcenterAlertsGetMetadata

Returns the metadata of an alert. Attempting to get metadata for a non-existent alert returns `NOT_FOUND` error.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AlertcenterAlertsGetMetadataRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AlertcenterAlertsGetMetadataSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AlertcenterAlertsGetMetadataRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'sapiente';
    $request->alertId = 'architecto';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolorem';
    $request->customerId = 'culpa';
    $request->fields = 'consequuntur';
    $request->key = 'repellat';
    $request->oauthToken = 'mollitia';
    $request->prettyPrint = false;
    $request->quotaUser = 'occaecati';
    $request->uploadType = 'numquam';
    $request->uploadProtocol = 'commodi';

    $requestSecurity = new AlertcenterAlertsGetMetadataSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->alerts->alertcenterAlertsGetMetadata($request, $requestSecurity);

    if ($response->alertMetadata !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## alertcenterAlertsList

Lists the alerts.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AlertcenterAlertsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AlertcenterAlertsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AlertcenterAlertsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'molestiae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'error';
    $request->customerId = 'quia';
    $request->fields = 'quis';
    $request->filter = 'vitae';
    $request->key = 'laborum';
    $request->oauthToken = 'animi';
    $request->orderBy = 'enim';
    $request->pageSize = 138183;
    $request->pageToken = 'quo';
    $request->prettyPrint = false;
    $request->quotaUser = 'sequi';
    $request->uploadType = 'tenetur';
    $request->uploadProtocol = 'ipsam';

    $requestSecurity = new AlertcenterAlertsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->alerts->alertcenterAlertsList($request, $requestSecurity);

    if ($response->listAlertsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## alertcenterAlertsUndelete

Restores, or "undeletes", an alert that was marked for deletion within the past 30 days. Attempting to undelete an alert which was marked for deletion over 30 days ago (which has been removed from the Alert Center database) or a nonexistent alert returns a `NOT_FOUND` error. Attempting to undelete an alert which has not been marked for deletion has no effect.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AlertcenterAlertsUndeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\UndeleteAlertRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AlertcenterAlertsUndeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AlertcenterAlertsUndeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->undeleteAlertRequest = new UndeleteAlertRequest();
    $request->undeleteAlertRequest->customerId = 'possimus';
    $request->accessToken = 'aut';
    $request->alertId = 'quasi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'temporibus';
    $request->fields = 'laborum';
    $request->key = 'quasi';
    $request->oauthToken = 'reiciendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptatibus';
    $request->uploadType = 'vero';
    $request->uploadProtocol = 'nihil';

    $requestSecurity = new AlertcenterAlertsUndeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->alerts->alertcenterAlertsUndelete($request, $requestSecurity);

    if ($response->alert !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
