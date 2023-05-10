# organizations

### Available Operations

* [securitycenterOrganizationsAssetsGroup](#securitycenterorganizationsassetsgroup) - Filters an organization's assets and groups them by their specified properties.
* [securitycenterOrganizationsAssetsList](#securitycenterorganizationsassetslist) - Lists an organization's assets.
* [securitycenterOrganizationsAssetsRunDiscovery](#securitycenterorganizationsassetsrundiscovery) - Runs asset discovery. The discovery is tracked with a long-running operation. This API can only be called with limited frequency for an organization. If it is called too frequently the caller will receive a TOO_MANY_REQUESTS error.
* [securitycenterOrganizationsOperationsCancel](#securitycenterorganizationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [securitycenterOrganizationsOperationsDelete](#securitycenterorganizationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [securitycenterOrganizationsSourcesCreate](#securitycenterorganizationssourcescreate) - Creates a source.
* [securitycenterOrganizationsSourcesFindingsCreate](#securitycenterorganizationssourcesfindingscreate) - Creates a finding. The corresponding source must exist for finding creation to succeed.
* [securitycenterOrganizationsSourcesFindingsGroup](#securitycenterorganizationssourcesfindingsgroup) - Filters an organization or source's findings and groups them by their specified properties. To group across all sources provide a `-` as the source id. Example: /v1beta1/organizations/{organization_id}/sources/-/findings
* [securitycenterOrganizationsSourcesFindingsList](#securitycenterorganizationssourcesfindingslist) - Lists an organization or source's findings. To list across all sources provide a `-` as the source id. Example: /v1beta1/organizations/{organization_id}/sources/-/findings
* [securitycenterOrganizationsSourcesFindingsSetState](#securitycenterorganizationssourcesfindingssetstate) - Updates the state of a finding.
* [securitycenterOrganizationsSourcesFindingsUpdateSecurityMarks](#securitycenterorganizationssourcesfindingsupdatesecuritymarks) - Updates security marks.
* [securitycenterOrganizationsSourcesGet](#securitycenterorganizationssourcesget) - Gets a source.
* [securitycenterOrganizationsSourcesGetIamPolicy](#securitycenterorganizationssourcesgetiampolicy) - Gets the access control policy on the specified Source.
* [securitycenterOrganizationsSourcesList](#securitycenterorganizationssourceslist) - Lists all sources belonging to an organization.
* [securitycenterOrganizationsSourcesSetIamPolicy](#securitycenterorganizationssourcessetiampolicy) - Sets the access control policy on the specified Source.
* [securitycenterOrganizationsSourcesTestIamPermissions](#securitycenterorganizationssourcestestiampermissions) - Returns the permissions that a caller has on the specified source.

## securitycenterOrganizationsAssetsGroup

Filters an organization's assets and groups them by their specified properties.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterOrganizationsAssetsGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GroupAssetsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterOrganizationsAssetsGroupSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SecuritycenterOrganizationsAssetsGroupRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->groupAssetsRequest = new GroupAssetsRequest();
    $request->groupAssetsRequest->compareDuration = 'suscipit';
    $request->groupAssetsRequest->filter = 'molestiae';
    $request->groupAssetsRequest->groupBy = 'minus';
    $request->groupAssetsRequest->pageSize = 812169;
    $request->groupAssetsRequest->pageToken = 'voluptatum';
    $request->groupAssetsRequest->readTime = 'iusto';
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'recusandae';
    $request->fields = 'temporibus';
    $request->key = 'ab';
    $request->oauthToken = 'quis';
    $request->parent = 'veritatis';
    $request->prettyPrint = false;
    $request->quotaUser = 'deserunt';
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'ipsam';

    $requestSecurity = new SecuritycenterOrganizationsAssetsGroupSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->organizations->securitycenterOrganizationsAssetsGroup($request, $requestSecurity);

    if ($response->groupAssetsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## securitycenterOrganizationsAssetsList

Lists an organization's assets.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterOrganizationsAssetsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterOrganizationsAssetsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SecuritycenterOrganizationsAssetsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'sapiente';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'odit';
    $request->compareDuration = 'at';
    $request->fieldMask = 'at';
    $request->fields = 'maiores';
    $request->filter = 'molestiae';
    $request->key = 'quod';
    $request->oauthToken = 'quod';
    $request->orderBy = 'esse';
    $request->pageSize = 520478;
    $request->pageToken = 'porro';
    $request->parent = 'dolorum';
    $request->prettyPrint = false;
    $request->quotaUser = 'dicta';
    $request->readTime = 'nam';
    $request->uploadType = 'officia';
    $request->uploadProtocol = 'occaecati';

    $requestSecurity = new SecuritycenterOrganizationsAssetsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->organizations->securitycenterOrganizationsAssetsList($request, $requestSecurity);

    if ($response->listAssetsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## securitycenterOrganizationsAssetsRunDiscovery

Runs asset discovery. The discovery is tracked with a long-running operation. This API can only be called with limited frequency for an organization. If it is called too frequently the caller will receive a TOO_MANY_REQUESTS error.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterOrganizationsAssetsRunDiscoveryRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterOrganizationsAssetsRunDiscoverySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SecuritycenterOrganizationsAssetsRunDiscoveryRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'hic' => 'optio',
        'totam' => 'beatae',
        'commodi' => 'molestiae',
    ];
    $request->accessToken = 'modi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'impedit';
    $request->fields = 'cum';
    $request->key = 'esse';
    $request->oauthToken = 'ipsum';
    $request->parent = 'excepturi';
    $request->prettyPrint = false;
    $request->quotaUser = 'aspernatur';
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'ad';

    $requestSecurity = new SecuritycenterOrganizationsAssetsRunDiscoverySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->organizations->securitycenterOrganizationsAssetsRunDiscovery($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## securitycenterOrganizationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterOrganizationsOperationsCancelRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterOrganizationsOperationsCancelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SecuritycenterOrganizationsOperationsCancelRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'iste' => 'dolor',
    ];
    $request->accessToken = 'natus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'hic';
    $request->fields = 'saepe';
    $request->key = 'fuga';
    $request->name = 'Stacy Moore';
    $request->oauthToken = 'quidem';
    $request->prettyPrint = false;
    $request->quotaUser = 'architecto';
    $request->uploadType = 'ipsa';
    $request->uploadProtocol = 'reiciendis';

    $requestSecurity = new SecuritycenterOrganizationsOperationsCancelSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->organizations->securitycenterOrganizationsOperationsCancel($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## securitycenterOrganizationsOperationsDelete

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterOrganizationsOperationsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterOrganizationsOperationsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SecuritycenterOrganizationsOperationsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'mollitia';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dolores';
    $request->fields = 'dolorem';
    $request->key = 'corporis';
    $request->name = 'Della Halvorson';
    $request->oauthToken = 'minima';
    $request->prettyPrint = false;
    $request->quotaUser = 'excepturi';
    $request->uploadType = 'accusantium';
    $request->uploadProtocol = 'iure';

    $requestSecurity = new SecuritycenterOrganizationsOperationsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->organizations->securitycenterOrganizationsOperationsDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## securitycenterOrganizationsSourcesCreate

Creates a source.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterOrganizationsSourcesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Source;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterOrganizationsSourcesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SecuritycenterOrganizationsSourcesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->source = new Source();
    $request->source->description = 'doloribus';
    $request->source->displayName = 'sapiente';
    $request->source->name = 'Angie Durgan';
    $request->accessToken = 'repellat';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'occaecati';
    $request->fields = 'numquam';
    $request->key = 'commodi';
    $request->oauthToken = 'quam';
    $request->parent = 'molestiae';
    $request->prettyPrint = false;
    $request->quotaUser = 'velit';
    $request->uploadType = 'error';
    $request->uploadProtocol = 'quia';

    $requestSecurity = new SecuritycenterOrganizationsSourcesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->organizations->securitycenterOrganizationsSourcesCreate($request, $requestSecurity);

    if ($response->source !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## securitycenterOrganizationsSourcesFindingsCreate

Creates a finding. The corresponding source must exist for finding creation to succeed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterOrganizationsSourcesFindingsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudSecuritycenterV1beta1Finding;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudSecuritycenterV1beta1SecurityMarks;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudSecuritycenterV1beta1FindingStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterOrganizationsSourcesFindingsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SecuritycenterOrganizationsSourcesFindingsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudSecuritycenterV1beta1Finding = new GoogleCloudSecuritycenterV1beta1Finding();
    $request->googleCloudSecuritycenterV1beta1Finding->category = 'vitae';
    $request->googleCloudSecuritycenterV1beta1Finding->createTime = 'laborum';
    $request->googleCloudSecuritycenterV1beta1Finding->eventTime = 'animi';
    $request->googleCloudSecuritycenterV1beta1Finding->externalUri = 'enim';
    $request->googleCloudSecuritycenterV1beta1Finding->name = 'Angelica Dietrich';
    $request->googleCloudSecuritycenterV1beta1Finding->parent = 'id';
    $request->googleCloudSecuritycenterV1beta1Finding->resourceName = 'possimus';
    $request->googleCloudSecuritycenterV1beta1Finding->securityMarks = new GoogleCloudSecuritycenterV1beta1SecurityMarks();
    $request->googleCloudSecuritycenterV1beta1Finding->securityMarks->marks = [
        'quasi' => 'error',
    ];
    $request->googleCloudSecuritycenterV1beta1Finding->securityMarks->name = 'Neal Boyer';
    $request->googleCloudSecuritycenterV1beta1Finding->sourceProperties = [
        'nihil' => 'praesentium',
        'voluptatibus' => 'ipsa',
        'omnis' => 'voluptate',
        'cum' => 'perferendis',
    ];
    $request->googleCloudSecuritycenterV1beta1Finding->state = GoogleCloudSecuritycenterV1beta1FindingStateEnum::STATE_UNSPECIFIED;
    $request->accessToken = 'reprehenderit';
    $request->alt = AltEnum::JSON;
    $request->callback = 'maiores';
    $request->fields = 'dicta';
    $request->findingId = 'corporis';
    $request->key = 'dolore';
    $request->oauthToken = 'iusto';
    $request->parent = 'dicta';
    $request->prettyPrint = false;
    $request->quotaUser = 'harum';
    $request->uploadType = 'enim';
    $request->uploadProtocol = 'accusamus';

    $requestSecurity = new SecuritycenterOrganizationsSourcesFindingsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->organizations->securitycenterOrganizationsSourcesFindingsCreate($request, $requestSecurity);

    if ($response->googleCloudSecuritycenterV1beta1Finding !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## securitycenterOrganizationsSourcesFindingsGroup

Filters an organization or source's findings and groups them by their specified properties. To group across all sources provide a `-` as the source id. Example: /v1beta1/organizations/{organization_id}/sources/-/findings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterOrganizationsSourcesFindingsGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GroupFindingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterOrganizationsSourcesFindingsGroupSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SecuritycenterOrganizationsSourcesFindingsGroupRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->groupFindingsRequest = new GroupFindingsRequest();
    $request->groupFindingsRequest->filter = 'repudiandae';
    $request->groupFindingsRequest->groupBy = 'quae';
    $request->groupFindingsRequest->pageSize = 216822;
    $request->groupFindingsRequest->pageToken = 'quidem';
    $request->groupFindingsRequest->readTime = 'molestias';
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'modi';
    $request->fields = 'praesentium';
    $request->key = 'rem';
    $request->oauthToken = 'voluptates';
    $request->parent = 'quasi';
    $request->prettyPrint = false;
    $request->quotaUser = 'repudiandae';
    $request->uploadType = 'sint';
    $request->uploadProtocol = 'veritatis';

    $requestSecurity = new SecuritycenterOrganizationsSourcesFindingsGroupSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->organizations->securitycenterOrganizationsSourcesFindingsGroup($request, $requestSecurity);

    if ($response->groupFindingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## securitycenterOrganizationsSourcesFindingsList

Lists an organization or source's findings. To list across all sources provide a `-` as the source id. Example: /v1beta1/organizations/{organization_id}/sources/-/findings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterOrganizationsSourcesFindingsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterOrganizationsSourcesFindingsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SecuritycenterOrganizationsSourcesFindingsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'incidunt';
    $request->alt = AltEnum::JSON;
    $request->callback = 'consequatur';
    $request->fieldMask = 'est';
    $request->fields = 'quibusdam';
    $request->filter = 'explicabo';
    $request->key = 'deserunt';
    $request->oauthToken = 'distinctio';
    $request->orderBy = 'quibusdam';
    $request->pageSize = 289406;
    $request->pageToken = 'modi';
    $request->parent = 'qui';
    $request->prettyPrint = false;
    $request->quotaUser = 'aliquid';
    $request->readTime = 'cupiditate';
    $request->uploadType = 'quos';
    $request->uploadProtocol = 'perferendis';

    $requestSecurity = new SecuritycenterOrganizationsSourcesFindingsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->organizations->securitycenterOrganizationsSourcesFindingsList($request, $requestSecurity);

    if ($response->listFindingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## securitycenterOrganizationsSourcesFindingsSetState

Updates the state of a finding.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterOrganizationsSourcesFindingsSetStateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetFindingStateRequest;
use \OpenAPI\OpenAPI\Models\Shared\SetFindingStateRequestStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterOrganizationsSourcesFindingsSetStateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SecuritycenterOrganizationsSourcesFindingsSetStateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->setFindingStateRequest = new SetFindingStateRequest();
    $request->setFindingStateRequest->startTime = 'assumenda';
    $request->setFindingStateRequest->state = SetFindingStateRequestStateEnum::ACTIVE;
    $request->accessToken = 'alias';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolorum';
    $request->fields = 'excepturi';
    $request->key = 'tempora';
    $request->name = 'Geoffrey Green';
    $request->oauthToken = 'non';
    $request->prettyPrint = false;
    $request->quotaUser = 'eligendi';
    $request->uploadType = 'sint';
    $request->uploadProtocol = 'aliquid';

    $requestSecurity = new SecuritycenterOrganizationsSourcesFindingsSetStateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->organizations->securitycenterOrganizationsSourcesFindingsSetState($request, $requestSecurity);

    if ($response->googleCloudSecuritycenterV1beta1Finding !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## securitycenterOrganizationsSourcesFindingsUpdateSecurityMarks

Updates security marks.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudSecuritycenterV1beta1SecurityMarks;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudSecuritycenterV1beta1SecurityMarks = new GoogleCloudSecuritycenterV1beta1SecurityMarks();
    $request->googleCloudSecuritycenterV1beta1SecurityMarks->marks = [
        'sint' => 'officia',
        'dolor' => 'debitis',
        'a' => 'dolorum',
        'in' => 'in',
    ];
    $request->googleCloudSecuritycenterV1beta1SecurityMarks->name = 'Mrs. Emilio Price';
    $request->accessToken = 'facere';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aliquid';
    $request->fields = 'laborum';
    $request->key = 'accusamus';
    $request->name = 'Toni Haley';
    $request->oauthToken = 'quidem';
    $request->prettyPrint = false;
    $request->quotaUser = 'provident';
    $request->startTime = 'nam';
    $request->updateMask = 'id';
    $request->uploadType = 'blanditiis';
    $request->uploadProtocol = 'deleniti';

    $requestSecurity = new SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->organizations->securitycenterOrganizationsSourcesFindingsUpdateSecurityMarks($request, $requestSecurity);

    if ($response->googleCloudSecuritycenterV1beta1SecurityMarks !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## securitycenterOrganizationsSourcesGet

Gets a source.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterOrganizationsSourcesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterOrganizationsSourcesGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SecuritycenterOrganizationsSourcesGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'amet';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nisi';
    $request->fields = 'vel';
    $request->filter = 'natus';
    $request->key = 'omnis';
    $request->name = 'Dorothy Kovacek';
    $request->oauthToken = 'id';
    $request->pageSize = 287991;
    $request->pageToken = 'labore';
    $request->prettyPrint = false;
    $request->quotaUser = 'suscipit';
    $request->uploadType = 'natus';
    $request->uploadProtocol = 'nobis';

    $requestSecurity = new SecuritycenterOrganizationsSourcesGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->organizations->securitycenterOrganizationsSourcesGet($request, $requestSecurity);

    if ($response->source !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## securitycenterOrganizationsSourcesGetIamPolicy

Gets the access control policy on the specified Source.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterOrganizationsSourcesGetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetPolicyOptions;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterOrganizationsSourcesGetIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SecuritycenterOrganizationsSourcesGetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->getIamPolicyRequest = new GetIamPolicyRequest();
    $request->getIamPolicyRequest->options = new GetPolicyOptions();
    $request->getIamPolicyRequest->options->requestedPolicyVersion = 878453;
    $request->accessToken = 'aspernatur';
    $request->alt = AltEnum::JSON;
    $request->callback = 'magnam';
    $request->fields = 'et';
    $request->key = 'excepturi';
    $request->oauthToken = 'ullam';
    $request->prettyPrint = false;
    $request->quotaUser = 'provident';
    $request->resource = 'quos';
    $request->uploadType = 'sint';
    $request->uploadProtocol = 'accusantium';

    $requestSecurity = new SecuritycenterOrganizationsSourcesGetIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->organizations->securitycenterOrganizationsSourcesGetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## securitycenterOrganizationsSourcesList

Lists all sources belonging to an organization.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterOrganizationsSourcesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterOrganizationsSourcesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SecuritycenterOrganizationsSourcesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'reiciendis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ad';
    $request->fields = 'eum';
    $request->key = 'dolor';
    $request->oauthToken = 'necessitatibus';
    $request->pageSize = 141264;
    $request->pageToken = 'nemo';
    $request->parent = 'quasi';
    $request->prettyPrint = false;
    $request->quotaUser = 'iure';
    $request->uploadType = 'doloribus';
    $request->uploadProtocol = 'debitis';

    $requestSecurity = new SecuritycenterOrganizationsSourcesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->organizations->securitycenterOrganizationsSourcesList($request, $requestSecurity);

    if ($response->listSourcesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## securitycenterOrganizationsSourcesSetIamPolicy

Sets the access control policy on the specified Source.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterOrganizationsSourcesSetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\Policy;
use \OpenAPI\OpenAPI\Models\Shared\AuditConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuditLogConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuditLogConfigLogTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Binding;
use \OpenAPI\OpenAPI\Models\Shared\Expr;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterOrganizationsSourcesSetIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SecuritycenterOrganizationsSourcesSetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->setIamPolicyRequest = new SetIamPolicyRequest();
    $request->setIamPolicyRequest->policy = new Policy();
    $request->setIamPolicyRequest->policy->auditConfigs = [
        new AuditConfig(),
        new AuditConfig(),
        new AuditConfig(),
        new AuditConfig(),
    ];
    $request->setIamPolicyRequest->policy->bindings = [
        new Binding(),
        new Binding(),
        new Binding(),
    ];
    $request->setIamPolicyRequest->policy->etag = 'facilis';
    $request->setIamPolicyRequest->policy->version = 447926;
    $request->setIamPolicyRequest->updateMask = 'architecto';
    $request->accessToken = 'architecto';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ullam';
    $request->fields = 'expedita';
    $request->key = 'nihil';
    $request->oauthToken = 'repellat';
    $request->prettyPrint = false;
    $request->quotaUser = 'quibusdam';
    $request->resource = 'sed';
    $request->uploadType = 'saepe';
    $request->uploadProtocol = 'pariatur';

    $requestSecurity = new SecuritycenterOrganizationsSourcesSetIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->organizations->securitycenterOrganizationsSourcesSetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## securitycenterOrganizationsSourcesTestIamPermissions

Returns the permissions that a caller has on the specified source.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterOrganizationsSourcesTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterOrganizationsSourcesTestIamPermissionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SecuritycenterOrganizationsSourcesTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->testIamPermissionsRequest = new TestIamPermissionsRequest();
    $request->testIamPermissionsRequest->permissions = [
        'praesentium',
    ];
    $request->accessToken = 'natus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'sunt';
    $request->fields = 'quo';
    $request->key = 'illum';
    $request->oauthToken = 'pariatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'maxime';
    $request->resource = 'ea';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'odit';

    $requestSecurity = new SecuritycenterOrganizationsSourcesTestIamPermissionsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->organizations->securitycenterOrganizationsSourcesTestIamPermissions($request, $requestSecurity);

    if ($response->testIamPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
