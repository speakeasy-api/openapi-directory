# externalVpnGateways

### Available Operations

* [computeExternalVpnGatewaysDelete](#computeexternalvpngatewaysdelete) - Deletes the specified externalVpnGateway.
* [computeExternalVpnGatewaysGet](#computeexternalvpngatewaysget) - Returns the specified externalVpnGateway. Get a list of available externalVpnGateways by making a list() request.
* [computeExternalVpnGatewaysInsert](#computeexternalvpngatewaysinsert) - Creates a ExternalVpnGateway in the specified project using the data included in the request.
* [computeExternalVpnGatewaysList](#computeexternalvpngatewayslist) - Retrieves the list of ExternalVpnGateway available to the specified project.
* [computeExternalVpnGatewaysSetLabels](#computeexternalvpngatewayssetlabels) - Sets the labels on an ExternalVpnGateway. To learn more about labels, read the Labeling Resources documentation.
* [computeExternalVpnGatewaysTestIamPermissions](#computeexternalvpngatewaystestiampermissions) - Returns permissions that a caller has on the specified resource.

## computeExternalVpnGatewaysDelete

Deletes the specified externalVpnGateway.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeExternalVpnGatewaysDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeExternalVpnGatewaysDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeExternalVpnGatewaysDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeExternalVpnGatewaysDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeExternalVpnGatewaysDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'in';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'eum';
    $request->externalVpnGateway = 'modi';
    $request->fields = 'corporis';
    $request->key = 'magnam';
    $request->oauthToken = 'voluptates';
    $request->prettyPrint = false;
    $request->project = 'maiores';
    $request->quotaUser = 'tempore';
    $request->requestId = 'aperiam';
    $request->uploadType = 'libero';
    $request->uploadProtocol = 'ratione';
    $request->userIp = 'labore';

    $requestSecurity = new ComputeExternalVpnGatewaysDeleteSecurity();
    $requestSecurity->option1 = new ComputeExternalVpnGatewaysDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->externalVpnGateways->computeExternalVpnGatewaysDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeExternalVpnGatewaysGet

Returns the specified externalVpnGateway. Get a list of available externalVpnGateways by making a list() request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeExternalVpnGatewaysGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeExternalVpnGatewaysGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeExternalVpnGatewaysGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeExternalVpnGatewaysGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeExternalVpnGatewaysGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeExternalVpnGatewaysGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'occaecati';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quo';
    $request->externalVpnGateway = 'velit';
    $request->fields = 'minus';
    $request->key = 'fuga';
    $request->oauthToken = 'nostrum';
    $request->prettyPrint = false;
    $request->project = 'est';
    $request->quotaUser = 'impedit';
    $request->uploadType = 'delectus';
    $request->uploadProtocol = 'tempore';
    $request->userIp = 'vero';

    $requestSecurity = new ComputeExternalVpnGatewaysGetSecurity();
    $requestSecurity->option1 = new ComputeExternalVpnGatewaysGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->externalVpnGateways->computeExternalVpnGatewaysGet($request, $requestSecurity);

    if ($response->externalVpnGateway !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeExternalVpnGatewaysInsert

Creates a ExternalVpnGateway in the specified project using the data included in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeExternalVpnGatewaysInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ExternalVpnGateway;
use \OpenAPI\OpenAPI\Models\Shared\ExternalVpnGatewayInterface;
use \OpenAPI\OpenAPI\Models\Shared\ExternalVpnGatewayRedundancyTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeExternalVpnGatewaysInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeExternalVpnGatewaysInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeExternalVpnGatewaysInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeExternalVpnGatewaysInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->externalVpnGateway = new ExternalVpnGateway();
    $request->externalVpnGateway->creationTimestamp = 'repellat';
    $request->externalVpnGateway->description = 'pariatur';
    $request->externalVpnGateway->id = 'nemo';
    $request->externalVpnGateway->interfaces = [
        new ExternalVpnGatewayInterface(),
        new ExternalVpnGatewayInterface(),
    ];
    $request->externalVpnGateway->kind = 'aperiam';
    $request->externalVpnGateway->labelFingerprint = 'odio';
    $request->externalVpnGateway->labels = [
        'in' => 'ducimus',
        'excepturi' => 'dolores',
    ];
    $request->externalVpnGateway->name = 'Peter Kuphal';
    $request->externalVpnGateway->redundancyType = ExternalVpnGatewayRedundancyTypeEnum::TWO_IPS_REDUNDANCY;
    $request->externalVpnGateway->selfLink = 'similique';
    $request->accessToken = 'optio';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quaerat';
    $request->fields = 'commodi';
    $request->key = 'officiis';
    $request->oauthToken = 'placeat';
    $request->prettyPrint = false;
    $request->project = 'quidem';
    $request->quotaUser = 'exercitationem';
    $request->requestId = 'quam';
    $request->uploadType = 'dolorem';
    $request->uploadProtocol = 'modi';
    $request->userIp = 'ipsa';

    $requestSecurity = new ComputeExternalVpnGatewaysInsertSecurity();
    $requestSecurity->option1 = new ComputeExternalVpnGatewaysInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->externalVpnGateways->computeExternalVpnGatewaysInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeExternalVpnGatewaysList

Retrieves the list of ExternalVpnGateway available to the specified project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeExternalVpnGatewaysListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeExternalVpnGatewaysListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeExternalVpnGatewaysListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeExternalVpnGatewaysListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeExternalVpnGatewaysListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeExternalVpnGatewaysListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'vero';
    $request->alt = AltEnum::JSON;
    $request->callback = 'repudiandae';
    $request->fields = 'cum';
    $request->filter = 'dicta';
    $request->key = 'earum';
    $request->maxResults = 334474;
    $request->oauthToken = 'animi';
    $request->orderBy = 'dolores';
    $request->pageToken = 'nam';
    $request->prettyPrint = false;
    $request->project = 'dicta';
    $request->quotaUser = 'consequuntur';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'necessitatibus';
    $request->uploadProtocol = 'nobis';
    $request->userIp = 'ipsa';

    $requestSecurity = new ComputeExternalVpnGatewaysListSecurity();
    $requestSecurity->option1 = new ComputeExternalVpnGatewaysListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->externalVpnGateways->computeExternalVpnGatewaysList($request, $requestSecurity);

    if ($response->externalVpnGatewayList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeExternalVpnGatewaysSetLabels

Sets the labels on an ExternalVpnGateway. To learn more about labels, read the Labeling Resources documentation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeExternalVpnGatewaysSetLabelsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GlobalSetLabelsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeExternalVpnGatewaysSetLabelsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeExternalVpnGatewaysSetLabelsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeExternalVpnGatewaysSetLabelsSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeExternalVpnGatewaysSetLabelsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->globalSetLabelsRequest = new GlobalSetLabelsRequest();
    $request->globalSetLabelsRequest->labelFingerprint = 'maiores';
    $request->globalSetLabelsRequest->labels = [
        'quasi' => 'laboriosam',
    ];
    $request->accessToken = 'pariatur';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'excepturi';
    $request->fields = 'occaecati';
    $request->key = 'nemo';
    $request->oauthToken = 'aliquam';
    $request->prettyPrint = false;
    $request->project = 'nostrum';
    $request->quotaUser = 'doloribus';
    $request->resource = 'eligendi';
    $request->uploadType = 'sint';
    $request->uploadProtocol = 'enim';
    $request->userIp = 'hic';

    $requestSecurity = new ComputeExternalVpnGatewaysSetLabelsSecurity();
    $requestSecurity->option1 = new ComputeExternalVpnGatewaysSetLabelsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->externalVpnGateways->computeExternalVpnGatewaysSetLabels($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeExternalVpnGatewaysTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeExternalVpnGatewaysTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeExternalVpnGatewaysTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeExternalVpnGatewaysTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeExternalVpnGatewaysTestIamPermissionsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeExternalVpnGatewaysTestIamPermissionsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeExternalVpnGatewaysTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'totam',
        'molestias',
        'odio',
    ];
    $request->accessToken = 'eaque';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'architecto';
    $request->fields = 'quos';
    $request->key = 'iste';
    $request->oauthToken = 'assumenda';
    $request->prettyPrint = false;
    $request->project = 'tempore';
    $request->quotaUser = 'libero';
    $request->resource = 'velit';
    $request->uploadType = 'doloremque';
    $request->uploadProtocol = 'delectus';
    $request->userIp = 'impedit';

    $requestSecurity = new ComputeExternalVpnGatewaysTestIamPermissionsSecurity();
    $requestSecurity->option1 = new ComputeExternalVpnGatewaysTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->externalVpnGateways->computeExternalVpnGatewaysTestIamPermissions($request, $requestSecurity);

    if ($response->testPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
