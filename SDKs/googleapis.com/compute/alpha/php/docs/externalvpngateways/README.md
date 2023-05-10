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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'neque';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'aliquam';
    $request->externalVpnGateway = 'quos';
    $request->fields = 'doloribus';
    $request->key = 'fugiat';
    $request->oauthToken = 'est';
    $request->prettyPrint = false;
    $request->project = 'delectus';
    $request->quotaUser = 'velit';
    $request->requestId = 'vitae';
    $request->uploadType = 'nesciunt';
    $request->uploadProtocol = 'similique';
    $request->userIp = 'illo';

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
    $request->accessToken = 'nemo';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'possimus';
    $request->externalVpnGateway = 'unde';
    $request->fields = 'incidunt';
    $request->key = 'explicabo';
    $request->oauthToken = 'ipsam';
    $request->prettyPrint = false;
    $request->project = 'cupiditate';
    $request->quotaUser = 'optio';
    $request->uploadType = 'alias';
    $request->uploadProtocol = 'quidem';
    $request->userIp = 'nesciunt';

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
    $request->externalVpnGateway->creationTimestamp = 'sapiente';
    $request->externalVpnGateway->description = 'consequuntur';
    $request->externalVpnGateway->id = 'veniam';
    $request->externalVpnGateway->interfaces = [
        new ExternalVpnGatewayInterface(),
        new ExternalVpnGatewayInterface(),
        new ExternalVpnGatewayInterface(),
        new ExternalVpnGatewayInterface(),
    ];
    $request->externalVpnGateway->kind = 'officia';
    $request->externalVpnGateway->labelFingerprint = 'sint';
    $request->externalVpnGateway->labels = [
        'numquam' => 'tenetur',
        'adipisci' => 'libero',
    ];
    $request->externalVpnGateway->name = 'Lorraine Jacobson Sr.';
    $request->externalVpnGateway->redundancyType = ExternalVpnGatewayRedundancyTypeEnum::TWO_IPS_REDUNDANCY;
    $request->externalVpnGateway->selfLink = 'nisi';
    $request->accessToken = 'quisquam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ducimus';
    $request->fields = 'fuga';
    $request->key = 'minima';
    $request->oauthToken = 'architecto';
    $request->prettyPrint = false;
    $request->project = 'qui';
    $request->quotaUser = 'aliquid';
    $request->requestId = 'magni';
    $request->uploadType = 'incidunt';
    $request->uploadProtocol = 'adipisci';
    $request->userIp = 'praesentium';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'exercitationem';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'facilis';
    $request->fields = 'impedit';
    $request->filter = 'sit';
    $request->key = 'nemo';
    $request->maxResults = 633987;
    $request->oauthToken = 'consequuntur';
    $request->orderBy = 'amet';
    $request->pageToken = 'deserunt';
    $request->prettyPrint = false;
    $request->project = 'modi';
    $request->quotaUser = 'veniam';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'quod';
    $request->uploadProtocol = 'itaque';
    $request->userIp = 'a';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->globalSetLabelsRequest = new GlobalSetLabelsRequest();
    $request->globalSetLabelsRequest->labelFingerprint = 'enim';
    $request->globalSetLabelsRequest->labels = [
        'assumenda' => 'officiis',
        'architecto' => 'alias',
        'culpa' => 'ipsa',
        'nobis' => 'necessitatibus',
    ];
    $request->accessToken = 'quia';
    $request->alt = AltEnum::JSON;
    $request->callback = 'vel';
    $request->fields = 'perspiciatis';
    $request->key = 'debitis';
    $request->oauthToken = 'ullam';
    $request->prettyPrint = false;
    $request->project = 'architecto';
    $request->quotaUser = 'accusantium';
    $request->resource = 'perferendis';
    $request->uploadType = 'veritatis';
    $request->uploadProtocol = 'provident';
    $request->userIp = 'cumque';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'quod',
        'nemo',
        'recusandae',
        'velit',
    ];
    $request->accessToken = 'magnam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'laboriosam';
    $request->fields = 'sed';
    $request->key = 'odio';
    $request->oauthToken = 'natus';
    $request->prettyPrint = false;
    $request->project = 'provident';
    $request->quotaUser = 'cum';
    $request->resource = 'doloribus';
    $request->uploadType = 'facilis';
    $request->uploadProtocol = 'quidem';
    $request->userIp = 'itaque';

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
