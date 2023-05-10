# projects

### Available Operations

* [contactcenteraiplatformProjectsLocationsContactCentersCreate](#contactcenteraiplatformprojectslocationscontactcenterscreate) - Creates a new ContactCenter in a given project and location.
* [contactcenteraiplatformProjectsLocationsContactCentersList](#contactcenteraiplatformprojectslocationscontactcenterslist) - Lists ContactCenters in a given project and location.
* [contactcenteraiplatformProjectsLocationsContactCentersPatch](#contactcenteraiplatformprojectslocationscontactcenterspatch) - Updates the parameters of a single ContactCenter.
* [contactcenteraiplatformProjectsLocationsList](#contactcenteraiplatformprojectslocationslist) - Lists information about the supported locations for this service.
* [contactcenteraiplatformProjectsLocationsOperationsCancel](#contactcenteraiplatformprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [contactcenteraiplatformProjectsLocationsOperationsDelete](#contactcenteraiplatformprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [contactcenteraiplatformProjectsLocationsOperationsGet](#contactcenteraiplatformprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [contactcenteraiplatformProjectsLocationsOperationsList](#contactcenteraiplatformprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [contactcenteraiplatformProjectsLocationsQueryContactCenterQuota](#contactcenteraiplatformprojectslocationsquerycontactcenterquota) - Queries the contact center quota, an aggregation over all the projects, that belongs to the billing account, which the input project belongs to.

## contactcenteraiplatformProjectsLocationsContactCentersCreate

Creates a new ContactCenter in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContactcenteraiplatformProjectsLocationsContactCentersCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContactCenterInput;
use \OpenAPI\OpenAPI\Models\Shared\AdminUser;
use \OpenAPI\OpenAPI\Models\Shared\InstanceConfig;
use \OpenAPI\OpenAPI\Models\Shared\InstanceConfigInstanceSizeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SAMLParams;
use \OpenAPI\OpenAPI\Models\Shared\URIs;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContactcenteraiplatformProjectsLocationsContactCentersCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContactcenteraiplatformProjectsLocationsContactCentersCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->contactCenterInput = new ContactCenterInput();
    $request->contactCenterInput->adminUser = new AdminUser();
    $request->contactCenterInput->adminUser->familyName = 'maiores';
    $request->contactCenterInput->adminUser->givenName = 'molestiae';
    $request->contactCenterInput->ccaipManagedUsers = false;
    $request->contactCenterInput->customerDomainPrefix = 'quod';
    $request->contactCenterInput->displayName = 'quod';
    $request->contactCenterInput->instanceConfig = new InstanceConfig();
    $request->contactCenterInput->instanceConfig->instanceSize = InstanceConfigInstanceSizeEnum::STANDARD_LARGE;
    $request->contactCenterInput->labels = [
        'porro' => 'dolorum',
        'dicta' => 'nam',
        'officia' => 'occaecati',
    ];
    $request->contactCenterInput->name = 'Cassandra Welch';
    $request->contactCenterInput->samlParams = new SAMLParams();
    $request->contactCenterInput->samlParams->certificate = 'beatae';
    $request->contactCenterInput->samlParams->entityId = 'commodi';
    $request->contactCenterInput->samlParams->ssoUri = 'molestiae';
    $request->contactCenterInput->samlParams->userEmail = 'modi';
    $request->contactCenterInput->uris = new URIs();
    $request->contactCenterInput->uris->chatBotUri = 'qui';
    $request->contactCenterInput->uris->mediaUri = 'impedit';
    $request->contactCenterInput->uris->rootUri = 'cum';
    $request->contactCenterInput->uris->virtualAgentStreamingServiceUri = 'esse';
    $request->contactCenterInput->userEmail = 'ipsum';
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'perferendis';
    $request->contactCenterId = 'ad';
    $request->fields = 'natus';
    $request->key = 'sed';
    $request->oauthToken = 'iste';
    $request->parent = 'dolor';
    $request->prettyPrint = false;
    $request->quotaUser = 'natus';
    $request->requestId = 'laboriosam';
    $request->uploadType = 'hic';
    $request->uploadProtocol = 'saepe';

    $requestSecurity = new ContactcenteraiplatformProjectsLocationsContactCentersCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->contactcenteraiplatformProjectsLocationsContactCentersCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contactcenteraiplatformProjectsLocationsContactCentersList

Lists ContactCenters in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContactcenteraiplatformProjectsLocationsContactCentersListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContactcenteraiplatformProjectsLocationsContactCentersListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContactcenteraiplatformProjectsLocationsContactCentersListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'in';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'iste';
    $request->fields = 'iure';
    $request->filter = 'saepe';
    $request->key = 'quidem';
    $request->oauthToken = 'architecto';
    $request->orderBy = 'ipsa';
    $request->pageSize = 969810;
    $request->pageToken = 'est';
    $request->parent = 'mollitia';
    $request->prettyPrint = false;
    $request->quotaUser = 'laborum';
    $request->uploadType = 'dolores';
    $request->uploadProtocol = 'dolorem';

    $requestSecurity = new ContactcenteraiplatformProjectsLocationsContactCentersListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->contactcenteraiplatformProjectsLocationsContactCentersList($request, $requestSecurity);

    if ($response->listContactCentersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contactcenteraiplatformProjectsLocationsContactCentersPatch

Updates the parameters of a single ContactCenter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContactcenteraiplatformProjectsLocationsContactCentersPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContactCenterInput;
use \OpenAPI\OpenAPI\Models\Shared\AdminUser;
use \OpenAPI\OpenAPI\Models\Shared\InstanceConfig;
use \OpenAPI\OpenAPI\Models\Shared\InstanceConfigInstanceSizeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SAMLParams;
use \OpenAPI\OpenAPI\Models\Shared\URIs;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContactcenteraiplatformProjectsLocationsContactCentersPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContactcenteraiplatformProjectsLocationsContactCentersPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->contactCenterInput = new ContactCenterInput();
    $request->contactCenterInput->adminUser = new AdminUser();
    $request->contactCenterInput->adminUser->familyName = 'explicabo';
    $request->contactCenterInput->adminUser->givenName = 'nobis';
    $request->contactCenterInput->ccaipManagedUsers = false;
    $request->contactCenterInput->customerDomainPrefix = 'enim';
    $request->contactCenterInput->displayName = 'omnis';
    $request->contactCenterInput->instanceConfig = new InstanceConfig();
    $request->contactCenterInput->instanceConfig->instanceSize = InstanceConfigInstanceSizeEnum::STANDARD_MEDIUM;
    $request->contactCenterInput->labels = [
        'excepturi' => 'accusantium',
        'iure' => 'culpa',
    ];
    $request->contactCenterInput->name = 'Darrin Brakus';
    $request->contactCenterInput->samlParams = new SAMLParams();
    $request->contactCenterInput->samlParams->certificate = 'culpa';
    $request->contactCenterInput->samlParams->entityId = 'consequuntur';
    $request->contactCenterInput->samlParams->ssoUri = 'repellat';
    $request->contactCenterInput->samlParams->userEmail = 'mollitia';
    $request->contactCenterInput->uris = new URIs();
    $request->contactCenterInput->uris->chatBotUri = 'occaecati';
    $request->contactCenterInput->uris->mediaUri = 'numquam';
    $request->contactCenterInput->uris->rootUri = 'commodi';
    $request->contactCenterInput->uris->virtualAgentStreamingServiceUri = 'quam';
    $request->contactCenterInput->userEmail = 'molestiae';
    $request->accessToken = 'velit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quia';
    $request->fields = 'quis';
    $request->key = 'vitae';
    $request->name = 'Matt Hamill';
    $request->oauthToken = 'sequi';
    $request->prettyPrint = false;
    $request->quotaUser = 'tenetur';
    $request->requestId = 'ipsam';
    $request->updateMask = 'id';
    $request->uploadType = 'possimus';
    $request->uploadProtocol = 'aut';

    $requestSecurity = new ContactcenteraiplatformProjectsLocationsContactCentersPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->contactcenteraiplatformProjectsLocationsContactCentersPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contactcenteraiplatformProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContactcenteraiplatformProjectsLocationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContactcenteraiplatformProjectsLocationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContactcenteraiplatformProjectsLocationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'error';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'laborum';
    $request->fields = 'quasi';
    $request->filter = 'reiciendis';
    $request->key = 'voluptatibus';
    $request->name = 'Jessie Langosh V';
    $request->oauthToken = 'voluptate';
    $request->pageSize = 739264;
    $request->pageToken = 'perferendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'doloremque';
    $request->uploadType = 'reprehenderit';
    $request->uploadProtocol = 'ut';

    $requestSecurity = new ContactcenteraiplatformProjectsLocationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->contactcenteraiplatformProjectsLocationsList($request, $requestSecurity);

    if ($response->listLocationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contactcenteraiplatformProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContactcenteraiplatformProjectsLocationsOperationsCancelRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContactcenteraiplatformProjectsLocationsOperationsCancelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContactcenteraiplatformProjectsLocationsOperationsCancelRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'corporis' => 'dolore',
    ];
    $request->accessToken = 'iusto';
    $request->alt = AltEnum::JSON;
    $request->callback = 'harum';
    $request->fields = 'enim';
    $request->key = 'accusamus';
    $request->name = 'Elvira Bergnaum';
    $request->oauthToken = 'molestias';
    $request->prettyPrint = false;
    $request->quotaUser = 'excepturi';
    $request->uploadType = 'pariatur';
    $request->uploadProtocol = 'modi';

    $requestSecurity = new ContactcenteraiplatformProjectsLocationsOperationsCancelSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->contactcenteraiplatformProjectsLocationsOperationsCancel($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contactcenteraiplatformProjectsLocationsOperationsDelete

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContactcenteraiplatformProjectsLocationsOperationsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContactcenteraiplatformProjectsLocationsOperationsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContactcenteraiplatformProjectsLocationsOperationsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'rem';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quasi';
    $request->fields = 'repudiandae';
    $request->key = 'sint';
    $request->name = 'Patti Gottlieb MD';
    $request->oauthToken = 'quibusdam';
    $request->prettyPrint = false;
    $request->quotaUser = 'explicabo';
    $request->requestId = 'deserunt';
    $request->uploadType = 'distinctio';
    $request->uploadProtocol = 'quibusdam';

    $requestSecurity = new ContactcenteraiplatformProjectsLocationsOperationsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->contactcenteraiplatformProjectsLocationsOperationsDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contactcenteraiplatformProjectsLocationsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContactcenteraiplatformProjectsLocationsOperationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContactcenteraiplatformProjectsLocationsOperationsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContactcenteraiplatformProjectsLocationsOperationsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'modi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'aliquid';
    $request->fields = 'cupiditate';
    $request->key = 'quos';
    $request->name = 'Louise Simonis Sr.';
    $request->oauthToken = 'dolorum';
    $request->prettyPrint = false;
    $request->quotaUser = 'excepturi';
    $request->uploadType = 'tempora';
    $request->uploadProtocol = 'facilis';

    $requestSecurity = new ContactcenteraiplatformProjectsLocationsOperationsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->contactcenteraiplatformProjectsLocationsOperationsGet($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contactcenteraiplatformProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContactcenteraiplatformProjectsLocationsOperationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContactcenteraiplatformProjectsLocationsOperationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContactcenteraiplatformProjectsLocationsOperationsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'labore';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'eum';
    $request->fields = 'non';
    $request->filter = 'eligendi';
    $request->key = 'sint';
    $request->name = 'Sherri Tremblay';
    $request->oauthToken = 'dolor';
    $request->pageSize = 891555;
    $request->pageToken = 'a';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorum';
    $request->uploadType = 'in';
    $request->uploadProtocol = 'in';

    $requestSecurity = new ContactcenteraiplatformProjectsLocationsOperationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->contactcenteraiplatformProjectsLocationsOperationsList($request, $requestSecurity);

    if ($response->listOperationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contactcenteraiplatformProjectsLocationsQueryContactCenterQuota

Queries the contact center quota, an aggregation over all the projects, that belongs to the billing account, which the input project belongs to.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContactcenteraiplatformProjectsLocationsQueryContactCenterQuotaRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContactcenteraiplatformProjectsLocationsQueryContactCenterQuotaSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContactcenteraiplatformProjectsLocationsQueryContactCenterQuotaRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'maiores';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dicta';
    $request->fields = 'magnam';
    $request->key = 'cumque';
    $request->oauthToken = 'facere';
    $request->parent = 'ea';
    $request->prettyPrint = false;
    $request->quotaUser = 'aliquid';
    $request->uploadType = 'laborum';
    $request->uploadProtocol = 'accusamus';

    $requestSecurity = new ContactcenteraiplatformProjectsLocationsQueryContactCenterQuotaSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->contactcenteraiplatformProjectsLocationsQueryContactCenterQuota($request, $requestSecurity);

    if ($response->contactCenterQuota !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
