# projects

### Available Operations

* [apigeeregistryProjectsLocationsApisCreate](#apigeeregistryprojectslocationsapiscreate) - Creates a specified API.
* [apigeeregistryProjectsLocationsApisDeploymentsCreate](#apigeeregistryprojectslocationsapisdeploymentscreate) - Creates a specified deployment.
* [apigeeregistryProjectsLocationsApisDeploymentsList](#apigeeregistryprojectslocationsapisdeploymentslist) - Returns matching deployments.
* [apigeeregistryProjectsLocationsApisList](#apigeeregistryprojectslocationsapislist) - Returns matching APIs.
* [apigeeregistryProjectsLocationsApisVersionsCreate](#apigeeregistryprojectslocationsapisversionscreate) - Creates a specified version.
* [apigeeregistryProjectsLocationsApisVersionsList](#apigeeregistryprojectslocationsapisversionslist) - Returns matching versions.
* [apigeeregistryProjectsLocationsApisVersionsSpecsCreate](#apigeeregistryprojectslocationsapisversionsspecscreate) - Creates a specified spec.
* [apigeeregistryProjectsLocationsApisVersionsSpecsDeleteRevision](#apigeeregistryprojectslocationsapisversionsspecsdeleterevision) - Deletes a revision of a spec.
* [apigeeregistryProjectsLocationsApisVersionsSpecsList](#apigeeregistryprojectslocationsapisversionsspecslist) - Returns matching specs.
* [apigeeregistryProjectsLocationsApisVersionsSpecsListRevisions](#apigeeregistryprojectslocationsapisversionsspecslistrevisions) - Lists all revisions of a spec. Revisions are returned in descending order of revision creation time.
* [apigeeregistryProjectsLocationsApisVersionsSpecsPatch](#apigeeregistryprojectslocationsapisversionsspecspatch) - Used to modify a specified spec.
* [apigeeregistryProjectsLocationsApisVersionsSpecsRollback](#apigeeregistryprojectslocationsapisversionsspecsrollback) - Sets the current revision to a specified prior revision. Note that this creates a new revision with a new revision ID.
* [apigeeregistryProjectsLocationsApisVersionsSpecsTagRevision](#apigeeregistryprojectslocationsapisversionsspecstagrevision) - Adds a tag to a specified revision of a spec.
* [apigeeregistryProjectsLocationsArtifactsCreate](#apigeeregistryprojectslocationsartifactscreate) - Creates a specified artifact.
* [apigeeregistryProjectsLocationsArtifactsGetContents](#apigeeregistryprojectslocationsartifactsgetcontents) - Returns the contents of a specified artifact. If artifacts are stored with GZip compression, the default behavior is to return the artifact uncompressed (the mime_type response field indicates the exact format returned).
* [apigeeregistryProjectsLocationsArtifactsList](#apigeeregistryprojectslocationsartifactslist) - Returns matching artifacts.
* [apigeeregistryProjectsLocationsArtifactsReplaceArtifact](#apigeeregistryprojectslocationsartifactsreplaceartifact) - Used to replace a specified artifact.
* [apigeeregistryProjectsLocationsInstancesCreate](#apigeeregistryprojectslocationsinstancescreate) - Provisions instance resources for the Registry.
* [apigeeregistryProjectsLocationsList](#apigeeregistryprojectslocationslist) - Lists information about the supported locations for this service.
* [apigeeregistryProjectsLocationsOperationsCancel](#apigeeregistryprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [apigeeregistryProjectsLocationsOperationsDelete](#apigeeregistryprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [apigeeregistryProjectsLocationsOperationsGet](#apigeeregistryprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [apigeeregistryProjectsLocationsOperationsList](#apigeeregistryprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* [apigeeregistryProjectsLocationsRuntimeGetIamPolicy](#apigeeregistryprojectslocationsruntimegetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [apigeeregistryProjectsLocationsRuntimeSetIamPolicy](#apigeeregistryprojectslocationsruntimesetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [apigeeregistryProjectsLocationsRuntimeTestIamPermissions](#apigeeregistryprojectslocationsruntimetestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

## apigeeregistryProjectsLocationsApisCreate

Creates a specified API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ApigeeregistryProjectsLocationsApisCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ApiInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ApigeeregistryProjectsLocationsApisCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApigeeregistryProjectsLocationsApisCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->apiInput = new ApiInput();
    $request->apiInput->annotations = [
        'quo' => 'odit',
        'at' => 'at',
        'maiores' => 'molestiae',
        'quod' => 'quod',
    ];
    $request->apiInput->availability = 'esse';
    $request->apiInput->description = 'totam';
    $request->apiInput->displayName = 'porro';
    $request->apiInput->labels = [
        'dicta' => 'nam',
        'officia' => 'occaecati',
        'fugit' => 'deleniti',
    ];
    $request->apiInput->name = 'Ms. Earnest Lebsack';
    $request->apiInput->recommendedDeployment = 'modi';
    $request->apiInput->recommendedVersion = 'qui';
    $request->accessToken = 'impedit';
    $request->alt = AltEnum::PROTO;
    $request->apiId = 'esse';
    $request->callback = 'ipsum';
    $request->fields = 'excepturi';
    $request->key = 'aspernatur';
    $request->oauthToken = 'perferendis';
    $request->parent = 'ad';
    $request->prettyPrint = false;
    $request->quotaUser = 'natus';
    $request->uploadType = 'sed';
    $request->uploadProtocol = 'iste';

    $requestSecurity = new ApigeeregistryProjectsLocationsApisCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->apigeeregistryProjectsLocationsApisCreate($request, $requestSecurity);

    if ($response->api !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## apigeeregistryProjectsLocationsApisDeploymentsCreate

Creates a specified deployment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ApigeeregistryProjectsLocationsApisDeploymentsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ApiDeploymentInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ApigeeregistryProjectsLocationsApisDeploymentsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApigeeregistryProjectsLocationsApisDeploymentsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->apiDeploymentInput = new ApiDeploymentInput();
    $request->apiDeploymentInput->accessGuidance = 'natus';
    $request->apiDeploymentInput->annotations = [
        'hic' => 'saepe',
        'fuga' => 'in',
    ];
    $request->apiDeploymentInput->apiSpecRevision = 'corporis';
    $request->apiDeploymentInput->description = 'iste';
    $request->apiDeploymentInput->displayName = 'iure';
    $request->apiDeploymentInput->endpointUri = 'saepe';
    $request->apiDeploymentInput->externalChannelUri = 'quidem';
    $request->apiDeploymentInput->intendedAudience = 'architecto';
    $request->apiDeploymentInput->labels = [
        'reiciendis' => 'est',
    ];
    $request->apiDeploymentInput->name = 'Cameron Dach';
    $request->accessToken = 'explicabo';
    $request->alt = AltEnum::PROTO;
    $request->apiDeploymentId = 'enim';
    $request->callback = 'omnis';
    $request->fields = 'nemo';
    $request->key = 'minima';
    $request->oauthToken = 'excepturi';
    $request->parent = 'accusantium';
    $request->prettyPrint = false;
    $request->quotaUser = 'iure';
    $request->uploadType = 'culpa';
    $request->uploadProtocol = 'doloribus';

    $requestSecurity = new ApigeeregistryProjectsLocationsApisDeploymentsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->apigeeregistryProjectsLocationsApisDeploymentsCreate($request, $requestSecurity);

    if ($response->apiDeployment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## apigeeregistryProjectsLocationsApisDeploymentsList

Returns matching deployments.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ApigeeregistryProjectsLocationsApisDeploymentsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ApigeeregistryProjectsLocationsApisDeploymentsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApigeeregistryProjectsLocationsApisDeploymentsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'architecto';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolorem';
    $request->fields = 'culpa';
    $request->filter = 'consequuntur';
    $request->key = 'repellat';
    $request->oauthToken = 'mollitia';
    $request->orderBy = 'occaecati';
    $request->pageSize = 253291;
    $request->pageToken = 'commodi';
    $request->parent = 'quam';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestiae';
    $request->uploadType = 'velit';
    $request->uploadProtocol = 'error';

    $requestSecurity = new ApigeeregistryProjectsLocationsApisDeploymentsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->apigeeregistryProjectsLocationsApisDeploymentsList($request, $requestSecurity);

    if ($response->listApiDeploymentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## apigeeregistryProjectsLocationsApisList

Returns matching APIs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ApigeeregistryProjectsLocationsApisListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ApigeeregistryProjectsLocationsApisListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApigeeregistryProjectsLocationsApisListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'laborum';
    $request->fields = 'animi';
    $request->filter = 'enim';
    $request->key = 'odit';
    $request->oauthToken = 'quo';
    $request->orderBy = 'sequi';
    $request->pageSize = 949572;
    $request->pageToken = 'ipsam';
    $request->parent = 'id';
    $request->prettyPrint = false;
    $request->quotaUser = 'possimus';
    $request->uploadType = 'aut';
    $request->uploadProtocol = 'quasi';

    $requestSecurity = new ApigeeregistryProjectsLocationsApisListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->apigeeregistryProjectsLocationsApisList($request, $requestSecurity);

    if ($response->listApisResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## apigeeregistryProjectsLocationsApisVersionsCreate

Creates a specified version.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ApigeeregistryProjectsLocationsApisVersionsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ApiVersionInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ApigeeregistryProjectsLocationsApisVersionsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApigeeregistryProjectsLocationsApisVersionsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->apiVersionInput = new ApiVersionInput();
    $request->apiVersionInput->annotations = [
        'laborum' => 'quasi',
        'reiciendis' => 'voluptatibus',
        'vero' => 'nihil',
        'praesentium' => 'voluptatibus',
    ];
    $request->apiVersionInput->description = 'ipsa';
    $request->apiVersionInput->displayName = 'omnis';
    $request->apiVersionInput->labels = [
        'cum' => 'perferendis',
        'doloremque' => 'reprehenderit',
    ];
    $request->apiVersionInput->name = 'Shawna Carter';
    $request->apiVersionInput->primarySpec = 'iusto';
    $request->apiVersionInput->state = 'dicta';
    $request->accessToken = 'harum';
    $request->alt = AltEnum::JSON;
    $request->apiVersionId = 'accusamus';
    $request->callback = 'commodi';
    $request->fields = 'repudiandae';
    $request->key = 'quae';
    $request->oauthToken = 'ipsum';
    $request->parent = 'quidem';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestias';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'pariatur';

    $requestSecurity = new ApigeeregistryProjectsLocationsApisVersionsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->apigeeregistryProjectsLocationsApisVersionsCreate($request, $requestSecurity);

    if ($response->apiVersion !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## apigeeregistryProjectsLocationsApisVersionsList

Returns matching versions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ApigeeregistryProjectsLocationsApisVersionsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ApigeeregistryProjectsLocationsApisVersionsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApigeeregistryProjectsLocationsApisVersionsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'praesentium';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptates';
    $request->fields = 'quasi';
    $request->filter = 'repudiandae';
    $request->key = 'sint';
    $request->oauthToken = 'veritatis';
    $request->orderBy = 'itaque';
    $request->pageSize = 277718;
    $request->pageToken = 'enim';
    $request->parent = 'consequatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'est';
    $request->uploadType = 'quibusdam';
    $request->uploadProtocol = 'explicabo';

    $requestSecurity = new ApigeeregistryProjectsLocationsApisVersionsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->apigeeregistryProjectsLocationsApisVersionsList($request, $requestSecurity);

    if ($response->listApiVersionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## apigeeregistryProjectsLocationsApisVersionsSpecsCreate

Creates a specified spec.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ApigeeregistryProjectsLocationsApisVersionsSpecsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ApiSpecInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ApigeeregistryProjectsLocationsApisVersionsSpecsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApigeeregistryProjectsLocationsApisVersionsSpecsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->apiSpecInput = new ApiSpecInput();
    $request->apiSpecInput->annotations = [
        'quibusdam' => 'labore',
        'modi' => 'qui',
        'aliquid' => 'cupiditate',
    ];
    $request->apiSpecInput->contents = 'quos';
    $request->apiSpecInput->description = 'perferendis';
    $request->apiSpecInput->filename = 'magni';
    $request->apiSpecInput->labels = [
        'ipsam' => 'alias',
        'fugit' => 'dolorum',
        'excepturi' => 'tempora',
        'facilis' => 'tempore',
    ];
    $request->apiSpecInput->mimeType = 'labore';
    $request->apiSpecInput->name = 'Andre Franey';
    $request->apiSpecInput->sourceUri = 'aliquid';
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->apiSpecId = 'sint';
    $request->callback = 'officia';
    $request->fields = 'dolor';
    $request->key = 'debitis';
    $request->oauthToken = 'a';
    $request->parent = 'dolorum';
    $request->prettyPrint = false;
    $request->quotaUser = 'in';
    $request->uploadType = 'in';
    $request->uploadProtocol = 'illum';

    $requestSecurity = new ApigeeregistryProjectsLocationsApisVersionsSpecsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->apigeeregistryProjectsLocationsApisVersionsSpecsCreate($request, $requestSecurity);

    if ($response->apiSpec !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## apigeeregistryProjectsLocationsApisVersionsSpecsDeleteRevision

Deletes a revision of a spec.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ApigeeregistryProjectsLocationsApisVersionsSpecsDeleteRevisionRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ApigeeregistryProjectsLocationsApisVersionsSpecsDeleteRevisionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApigeeregistryProjectsLocationsApisVersionsSpecsDeleteRevisionRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'rerum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'magnam';
    $request->fields = 'cumque';
    $request->key = 'facere';
    $request->name = 'Beth Padberg';
    $request->oauthToken = 'occaecati';
    $request->prettyPrint = false;
    $request->quotaUser = 'enim';
    $request->uploadType = 'accusamus';
    $request->uploadProtocol = 'delectus';

    $requestSecurity = new ApigeeregistryProjectsLocationsApisVersionsSpecsDeleteRevisionSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->apigeeregistryProjectsLocationsApisVersionsSpecsDeleteRevision($request, $requestSecurity);

    if ($response->apiSpec !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## apigeeregistryProjectsLocationsApisVersionsSpecsList

Returns matching specs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ApigeeregistryProjectsLocationsApisVersionsSpecsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ApigeeregistryProjectsLocationsApisVersionsSpecsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApigeeregistryProjectsLocationsApisVersionsSpecsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'id';
    $request->fields = 'blanditiis';
    $request->filter = 'deleniti';
    $request->key = 'sapiente';
    $request->oauthToken = 'amet';
    $request->orderBy = 'deserunt';
    $request->pageSize = 394869;
    $request->pageToken = 'vel';
    $request->parent = 'natus';
    $request->prettyPrint = false;
    $request->quotaUser = 'omnis';
    $request->uploadType = 'molestiae';
    $request->uploadProtocol = 'perferendis';

    $requestSecurity = new ApigeeregistryProjectsLocationsApisVersionsSpecsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->apigeeregistryProjectsLocationsApisVersionsSpecsList($request, $requestSecurity);

    if ($response->listApiSpecsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## apigeeregistryProjectsLocationsApisVersionsSpecsListRevisions

Lists all revisions of a spec. Revisions are returned in descending order of revision creation time.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ApigeeregistryProjectsLocationsApisVersionsSpecsListRevisionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ApigeeregistryProjectsLocationsApisVersionsSpecsListRevisionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApigeeregistryProjectsLocationsApisVersionsSpecsListRevisionsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'magnam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'id';
    $request->fields = 'labore';
    $request->filter = 'labore';
    $request->key = 'suscipit';
    $request->name = 'Robin Keebler';
    $request->oauthToken = 'architecto';
    $request->pageSize = 298282;
    $request->pageToken = 'et';
    $request->prettyPrint = false;
    $request->quotaUser = 'excepturi';
    $request->uploadType = 'ullam';
    $request->uploadProtocol = 'provident';

    $requestSecurity = new ApigeeregistryProjectsLocationsApisVersionsSpecsListRevisionsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->apigeeregistryProjectsLocationsApisVersionsSpecsListRevisions($request, $requestSecurity);

    if ($response->listApiSpecRevisionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## apigeeregistryProjectsLocationsApisVersionsSpecsPatch

Used to modify a specified spec.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ApigeeregistryProjectsLocationsApisVersionsSpecsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ApiSpecInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ApigeeregistryProjectsLocationsApisVersionsSpecsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApigeeregistryProjectsLocationsApisVersionsSpecsPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->apiSpecInput = new ApiSpecInput();
    $request->apiSpecInput->annotations = [
        'accusantium' => 'mollitia',
        'reiciendis' => 'mollitia',
        'ad' => 'eum',
    ];
    $request->apiSpecInput->contents = 'dolor';
    $request->apiSpecInput->description = 'necessitatibus';
    $request->apiSpecInput->filename = 'odit';
    $request->apiSpecInput->labels = [
        'quasi' => 'iure',
        'doloribus' => 'debitis',
    ];
    $request->apiSpecInput->mimeType = 'eius';
    $request->apiSpecInput->name = 'Alfredo Prosacco Sr.';
    $request->apiSpecInput->sourceUri = 'repudiandae';
    $request->accessToken = 'ullam';
    $request->allowMissing = false;
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nihil';
    $request->fields = 'repellat';
    $request->key = 'quibusdam';
    $request->name = 'Mr. Jenna Stroman';
    $request->oauthToken = 'natus';
    $request->prettyPrint = false;
    $request->quotaUser = 'magni';
    $request->updateMask = 'sunt';
    $request->uploadType = 'quo';
    $request->uploadProtocol = 'illum';

    $requestSecurity = new ApigeeregistryProjectsLocationsApisVersionsSpecsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->apigeeregistryProjectsLocationsApisVersionsSpecsPatch($request, $requestSecurity);

    if ($response->apiSpec !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## apigeeregistryProjectsLocationsApisVersionsSpecsRollback

Sets the current revision to a specified prior revision. Note that this creates a new revision with a new revision ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ApigeeregistryProjectsLocationsApisVersionsSpecsRollbackRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RollbackApiSpecRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ApigeeregistryProjectsLocationsApisVersionsSpecsRollbackSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApigeeregistryProjectsLocationsApisVersionsSpecsRollbackRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->rollbackApiSpecRequest = new RollbackApiSpecRequest();
    $request->rollbackApiSpecRequest->revisionId = 'maxime';
    $request->accessToken = 'ea';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'odit';
    $request->fields = 'ea';
    $request->key = 'accusantium';
    $request->name = 'Ebony Predovic';
    $request->oauthToken = 'autem';
    $request->prettyPrint = false;
    $request->quotaUser = 'nam';
    $request->uploadType = 'eaque';
    $request->uploadProtocol = 'pariatur';

    $requestSecurity = new ApigeeregistryProjectsLocationsApisVersionsSpecsRollbackSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->apigeeregistryProjectsLocationsApisVersionsSpecsRollback($request, $requestSecurity);

    if ($response->apiSpec !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## apigeeregistryProjectsLocationsApisVersionsSpecsTagRevision

Adds a tag to a specified revision of a spec.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevisionRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TagApiSpecRevisionRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevisionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevisionRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->tagApiSpecRevisionRequest = new TagApiSpecRevisionRequest();
    $request->tagApiSpecRevisionRequest->tag = 'voluptatibus';
    $request->accessToken = 'perferendis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'amet';
    $request->fields = 'aut';
    $request->key = 'cumque';
    $request->name = 'Mindy Renner';
    $request->oauthToken = 'quis';
    $request->prettyPrint = false;
    $request->quotaUser = 'totam';
    $request->uploadType = 'dignissimos';
    $request->uploadProtocol = 'eaque';

    $requestSecurity = new ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevisionSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->apigeeregistryProjectsLocationsApisVersionsSpecsTagRevision($request, $requestSecurity);

    if ($response->apiSpec !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## apigeeregistryProjectsLocationsArtifactsCreate

Creates a specified artifact.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ApigeeregistryProjectsLocationsArtifactsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ArtifactInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ApigeeregistryProjectsLocationsArtifactsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApigeeregistryProjectsLocationsArtifactsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->artifactInput = new ArtifactInput();
    $request->artifactInput->annotations = [
        'eos' => 'perferendis',
    ];
    $request->artifactInput->contents = 'dolores';
    $request->artifactInput->labels = [
        'quam' => 'dolor',
        'vero' => 'nostrum',
        'hic' => 'recusandae',
        'omnis' => 'facilis',
    ];
    $request->artifactInput->mimeType = 'perspiciatis';
    $request->artifactInput->name = 'Robyn Cruickshank';
    $request->accessToken = 'eaque';
    $request->alt = AltEnum::MEDIA;
    $request->artifactId = 'rerum';
    $request->callback = 'adipisci';
    $request->fields = 'asperiores';
    $request->key = 'earum';
    $request->oauthToken = 'modi';
    $request->parent = 'iste';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorum';
    $request->uploadType = 'deleniti';
    $request->uploadProtocol = 'pariatur';

    $requestSecurity = new ApigeeregistryProjectsLocationsArtifactsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->apigeeregistryProjectsLocationsArtifactsCreate($request, $requestSecurity);

    if ($response->artifact !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## apigeeregistryProjectsLocationsArtifactsGetContents

Returns the contents of a specified artifact. If artifacts are stored with GZip compression, the default behavior is to return the artifact uncompressed (the mime_type response field indicates the exact format returned).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ApigeeregistryProjectsLocationsArtifactsGetContentsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ApigeeregistryProjectsLocationsArtifactsGetContentsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApigeeregistryProjectsLocationsArtifactsGetContentsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'nobis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'delectus';
    $request->fields = 'quaerat';
    $request->key = 'quos';
    $request->name = 'Florence Ebert';
    $request->oauthToken = 'ipsum';
    $request->prettyPrint = false;
    $request->quotaUser = 'hic';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'cum';

    $requestSecurity = new ApigeeregistryProjectsLocationsArtifactsGetContentsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->apigeeregistryProjectsLocationsArtifactsGetContents($request, $requestSecurity);

    if ($response->httpBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## apigeeregistryProjectsLocationsArtifactsList

Returns matching artifacts.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ApigeeregistryProjectsLocationsArtifactsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ApigeeregistryProjectsLocationsArtifactsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApigeeregistryProjectsLocationsArtifactsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'dignissimos';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'amet';
    $request->fields = 'dolorum';
    $request->filter = 'numquam';
    $request->key = 'veritatis';
    $request->oauthToken = 'ipsa';
    $request->orderBy = 'ipsa';
    $request->pageSize = 434417;
    $request->pageToken = 'odio';
    $request->parent = 'quaerat';
    $request->prettyPrint = false;
    $request->quotaUser = 'accusamus';
    $request->uploadType = 'quidem';
    $request->uploadProtocol = 'voluptatibus';

    $requestSecurity = new ApigeeregistryProjectsLocationsArtifactsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->apigeeregistryProjectsLocationsArtifactsList($request, $requestSecurity);

    if ($response->listArtifactsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## apigeeregistryProjectsLocationsArtifactsReplaceArtifact

Used to replace a specified artifact.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ApigeeregistryProjectsLocationsArtifactsReplaceArtifactRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ArtifactInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ApigeeregistryProjectsLocationsArtifactsReplaceArtifactSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApigeeregistryProjectsLocationsArtifactsReplaceArtifactRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->artifactInput = new ArtifactInput();
    $request->artifactInput->annotations = [
        'eos' => 'atque',
        'sit' => 'fugiat',
        'ab' => 'soluta',
    ];
    $request->artifactInput->contents = 'dolorum';
    $request->artifactInput->labels = [
        'voluptate' => 'dolorum',
        'deleniti' => 'omnis',
    ];
    $request->artifactInput->mimeType = 'necessitatibus';
    $request->artifactInput->name = 'Emmett Kovacek';
    $request->accessToken = 'id';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'eius';
    $request->fields = 'aspernatur';
    $request->key = 'perferendis';
    $request->name = 'Marianne Thompson';
    $request->oauthToken = 'suscipit';
    $request->prettyPrint = false;
    $request->quotaUser = 'deserunt';
    $request->uploadType = 'provident';
    $request->uploadProtocol = 'minima';

    $requestSecurity = new ApigeeregistryProjectsLocationsArtifactsReplaceArtifactSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->apigeeregistryProjectsLocationsArtifactsReplaceArtifact($request, $requestSecurity);

    if ($response->artifact !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## apigeeregistryProjectsLocationsInstancesCreate

Provisions instance resources for the Registry.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ApigeeregistryProjectsLocationsInstancesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceInput;
use \OpenAPI\OpenAPI\Models\Shared\ConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ApigeeregistryProjectsLocationsInstancesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApigeeregistryProjectsLocationsInstancesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->instanceInput = new InstanceInput();
    $request->instanceInput->config = new ConfigInput();
    $request->instanceInput->config->cmekKeyName = 'totam';
    $request->instanceInput->name = 'James Swaniawski';
    $request->accessToken = 'vel';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'officiis';
    $request->fields = 'qui';
    $request->instanceId = 'dolorum';
    $request->key = 'a';
    $request->oauthToken = 'esse';
    $request->parent = 'harum';
    $request->prettyPrint = false;
    $request->quotaUser = 'iusto';
    $request->uploadType = 'ipsum';
    $request->uploadProtocol = 'quisquam';

    $requestSecurity = new ApigeeregistryProjectsLocationsInstancesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->apigeeregistryProjectsLocationsInstancesCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## apigeeregistryProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ApigeeregistryProjectsLocationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ApigeeregistryProjectsLocationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApigeeregistryProjectsLocationsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'amet';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'accusamus';
    $request->fields = 'numquam';
    $request->filter = 'enim';
    $request->key = 'dolorem';
    $request->name = 'Miss Jimmie Kozey';
    $request->oauthToken = 'sed';
    $request->pageSize = 424685;
    $request->pageToken = 'libero';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptas';
    $request->uploadType = 'deserunt';
    $request->uploadProtocol = 'quam';

    $requestSecurity = new ApigeeregistryProjectsLocationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->apigeeregistryProjectsLocationsList($request, $requestSecurity);

    if ($response->listLocationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## apigeeregistryProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ApigeeregistryProjectsLocationsOperationsCancelRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ApigeeregistryProjectsLocationsOperationsCancelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApigeeregistryProjectsLocationsOperationsCancelRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'qui' => 'cupiditate',
        'maxime' => 'pariatur',
    ];
    $request->accessToken = 'soluta';
    $request->alt = AltEnum::JSON;
    $request->callback = 'laborum';
    $request->fields = 'totam';
    $request->key = 'incidunt';
    $request->name = 'Bonnie Raynor';
    $request->oauthToken = 'quam';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestias';
    $request->uploadType = 'temporibus';
    $request->uploadProtocol = 'qui';

    $requestSecurity = new ApigeeregistryProjectsLocationsOperationsCancelSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->apigeeregistryProjectsLocationsOperationsCancel($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## apigeeregistryProjectsLocationsOperationsDelete

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ApigeeregistryProjectsLocationsOperationsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ApigeeregistryProjectsLocationsOperationsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApigeeregistryProjectsLocationsOperationsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'fugit';
    $request->alt = AltEnum::JSON;
    $request->callback = 'odio';
    $request->fields = 'sunt';
    $request->force = false;
    $request->key = 'ullam';
    $request->name = 'Terrell Bartell';
    $request->oauthToken = 'nobis';
    $request->prettyPrint = false;
    $request->quotaUser = 'et';
    $request->uploadType = 'saepe';
    $request->uploadProtocol = 'ipsum';

    $requestSecurity = new ApigeeregistryProjectsLocationsOperationsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->apigeeregistryProjectsLocationsOperationsDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## apigeeregistryProjectsLocationsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ApigeeregistryProjectsLocationsOperationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ApigeeregistryProjectsLocationsOperationsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApigeeregistryProjectsLocationsOperationsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'nobis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'tempore';
    $request->fields = 'cupiditate';
    $request->key = 'aperiam';
    $request->name = 'Mike Greenholt';
    $request->oauthToken = 'dolorum';
    $request->prettyPrint = false;
    $request->quotaUser = 'architecto';
    $request->uploadType = 'quae';
    $request->uploadProtocol = 'aut';

    $requestSecurity = new ApigeeregistryProjectsLocationsOperationsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->apigeeregistryProjectsLocationsOperationsGet($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## apigeeregistryProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ApigeeregistryProjectsLocationsOperationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ApigeeregistryProjectsLocationsOperationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApigeeregistryProjectsLocationsOperationsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'itaque';
    $request->alt = AltEnum::JSON;
    $request->callback = 'est';
    $request->fields = 'repellendus';
    $request->filter = 'porro';
    $request->key = 'doloribus';
    $request->name = 'Olivia McGlynn IV';
    $request->oauthToken = 'odio';
    $request->pageSize = 580447;
    $request->pageToken = 'voluptatibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'quisquam';
    $request->uploadType = 'vero';
    $request->uploadProtocol = 'omnis';

    $requestSecurity = new ApigeeregistryProjectsLocationsOperationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->apigeeregistryProjectsLocationsOperationsList($request, $requestSecurity);

    if ($response->listOperationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## apigeeregistryProjectsLocationsRuntimeGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ApigeeregistryProjectsLocationsRuntimeGetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ApigeeregistryProjectsLocationsRuntimeGetIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApigeeregistryProjectsLocationsRuntimeGetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ipsum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'voluptate';
    $request->fields = 'consectetur';
    $request->key = 'vero';
    $request->oauthToken = 'tenetur';
    $request->optionsRequestedPolicyVersion = 492268;
    $request->prettyPrint = false;
    $request->quotaUser = 'hic';
    $request->resource = 'distinctio';
    $request->uploadType = 'quod';
    $request->uploadProtocol = 'odio';

    $requestSecurity = new ApigeeregistryProjectsLocationsRuntimeGetIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->apigeeregistryProjectsLocationsRuntimeGetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## apigeeregistryProjectsLocationsRuntimeSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ApigeeregistryProjectsLocationsRuntimeSetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\Policy;
use \OpenAPI\OpenAPI\Models\Shared\Binding;
use \OpenAPI\OpenAPI\Models\Shared\Expr;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ApigeeregistryProjectsLocationsRuntimeSetIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApigeeregistryProjectsLocationsRuntimeSetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->setIamPolicyRequest = new SetIamPolicyRequest();
    $request->setIamPolicyRequest->policy = new Policy();
    $request->setIamPolicyRequest->policy->bindings = [
        new Binding(),
        new Binding(),
        new Binding(),
    ];
    $request->setIamPolicyRequest->policy->etag = 'vero';
    $request->setIamPolicyRequest->policy->version = 498140;
    $request->accessToken = 'dolore';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'illum';
    $request->fields = 'sequi';
    $request->key = 'natus';
    $request->oauthToken = 'impedit';
    $request->prettyPrint = false;
    $request->quotaUser = 'aut';
    $request->resource = 'voluptatibus';
    $request->uploadType = 'exercitationem';
    $request->uploadProtocol = 'nulla';

    $requestSecurity = new ApigeeregistryProjectsLocationsRuntimeSetIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->apigeeregistryProjectsLocationsRuntimeSetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## apigeeregistryProjectsLocationsRuntimeTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ApigeeregistryProjectsLocationsRuntimeTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ApigeeregistryProjectsLocationsRuntimeTestIamPermissionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApigeeregistryProjectsLocationsRuntimeTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->testIamPermissionsRequest = new TestIamPermissionsRequest();
    $request->testIamPermissionsRequest->permissions = [
        'maiores',
        'doloribus',
        'iusto',
        'eligendi',
    ];
    $request->accessToken = 'ducimus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'officia';
    $request->fields = 'tempora';
    $request->key = 'ipsam';
    $request->oauthToken = 'ea';
    $request->prettyPrint = false;
    $request->quotaUser = 'aspernatur';
    $request->resource = 'vel';
    $request->uploadType = 'possimus';
    $request->uploadProtocol = 'magnam';

    $requestSecurity = new ApigeeregistryProjectsLocationsRuntimeTestIamPermissionsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->apigeeregistryProjectsLocationsRuntimeTestIamPermissions($request, $requestSecurity);

    if ($response->testIamPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
