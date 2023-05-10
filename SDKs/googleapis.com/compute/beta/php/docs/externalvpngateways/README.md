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
    $request->accessToken = 'praesentium';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'cum';
    $request->externalVpnGateway = 'amet';
    $request->fields = 'quasi';
    $request->key = 'dicta';
    $request->oauthToken = 'laudantium';
    $request->prettyPrint = false;
    $request->project = 'doloremque';
    $request->quotaUser = 'earum';
    $request->requestId = 'iusto';
    $request->uploadType = 'amet';
    $request->uploadProtocol = 'provident';
    $request->userIp = 'dolorum';

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
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'consequatur';
    $request->externalVpnGateway = 'nemo';
    $request->fields = 'molestiae';
    $request->key = 'itaque';
    $request->oauthToken = 'facilis';
    $request->prettyPrint = false;
    $request->project = 'corrupti';
    $request->quotaUser = 'aperiam';
    $request->uploadType = 'sint';
    $request->uploadProtocol = 'accusamus';
    $request->userIp = 'eos';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->externalVpnGateway = new ExternalVpnGateway();
    $request->externalVpnGateway->creationTimestamp = 'dicta';
    $request->externalVpnGateway->description = 'voluptatem';
    $request->externalVpnGateway->id = 'velit';
    $request->externalVpnGateway->interfaces = [
        new ExternalVpnGatewayInterface(),
    ];
    $request->externalVpnGateway->kind = 'sunt';
    $request->externalVpnGateway->labelFingerprint = 'a';
    $request->externalVpnGateway->labels = [
        'occaecati' => 'atque',
    ];
    $request->externalVpnGateway->name = 'Lynette Green';
    $request->externalVpnGateway->redundancyType = ExternalVpnGatewayRedundancyTypeEnum::FOUR_IPS_REDUNDANCY;
    $request->externalVpnGateway->selfLink = 'perferendis';
    $request->accessToken = 'rerum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aperiam';
    $request->fields = 'dignissimos';
    $request->key = 'repellat';
    $request->oauthToken = 'velit';
    $request->prettyPrint = false;
    $request->project = 'porro';
    $request->quotaUser = 'provident';
    $request->requestId = 'consectetur';
    $request->uploadType = 'eligendi';
    $request->uploadProtocol = 'dignissimos';
    $request->userIp = 'consectetur';

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
    $request->accessToken = 'natus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'officia';
    $request->fields = 'amet';
    $request->filter = 'tenetur';
    $request->key = 'aspernatur';
    $request->maxResults = 778276;
    $request->oauthToken = 'itaque';
    $request->orderBy = 'illum';
    $request->pageToken = 'laborum';
    $request->prettyPrint = false;
    $request->project = 'dignissimos';
    $request->quotaUser = 'vero';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'qui';
    $request->uploadProtocol = 'consectetur';
    $request->userIp = 'repellat';

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
    $request->globalSetLabelsRequest->labelFingerprint = 'explicabo';
    $request->globalSetLabelsRequest->labels = [
        'nihil' => 'non',
        'ab' => 'illo',
    ];
    $request->accessToken = 'hic';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'delectus';
    $request->fields = 'non';
    $request->key = 'distinctio';
    $request->oauthToken = 'in';
    $request->prettyPrint = false;
    $request->project = 'exercitationem';
    $request->quotaUser = 'labore';
    $request->resource = 'numquam';
    $request->uploadType = 'repudiandae';
    $request->uploadProtocol = 'modi';
    $request->userIp = 'in';

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
        'rem',
        'aperiam',
        'odit',
        'deleniti',
    ];
    $request->accessToken = 'enim';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'similique';
    $request->fields = 'minima';
    $request->key = 'libero';
    $request->oauthToken = 'magnam';
    $request->prettyPrint = false;
    $request->project = 'sit';
    $request->quotaUser = 'modi';
    $request->resource = 'eum';
    $request->uploadType = 'nesciunt';
    $request->uploadProtocol = 'mollitia';
    $request->userIp = 'dignissimos';

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
