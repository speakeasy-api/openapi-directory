# interconnects

### Available Operations

* [computeInterconnectsDelete](#computeinterconnectsdelete) - Deletes the specified Interconnect.
* [computeInterconnectsGet](#computeinterconnectsget) - Returns the specified Interconnect. Get a list of available Interconnects by making a list() request.
* [computeInterconnectsGetDiagnostics](#computeinterconnectsgetdiagnostics) - Returns the interconnectDiagnostics for the specified Interconnect.
* [computeInterconnectsInsert](#computeinterconnectsinsert) - Creates an Interconnect in the specified project using the data included in the request.
* [computeInterconnectsList](#computeinterconnectslist) - Retrieves the list of Interconnects available to the specified project.
* [computeInterconnectsPatch](#computeinterconnectspatch) - Updates the specified Interconnect with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
* [computeInterconnectsSetLabels](#computeinterconnectssetlabels) - Sets the labels on an Interconnect. To learn more about labels, read the Labeling Resources documentation.
* [computeInterconnectsTestIamPermissions](#computeinterconnectstestiampermissions) - Returns permissions that a caller has on the specified resource.

## computeInterconnectsDelete

Deletes the specified Interconnect.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectsDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectsDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInterconnectsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'incidunt';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'minima';
    $request->fields = 'quo';
    $request->interconnect = 'quis';
    $request->key = 'facere';
    $request->oauthToken = 'quidem';
    $request->prettyPrint = false;
    $request->project = 'harum';
    $request->quotaUser = 'adipisci';
    $request->requestId = 'optio';
    $request->uploadType = 'minima';
    $request->uploadProtocol = 'reprehenderit';
    $request->userIp = 'quo';

    $requestSecurity = new ComputeInterconnectsDeleteSecurity();
    $requestSecurity->option1 = new ComputeInterconnectsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->interconnects->computeInterconnectsDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInterconnectsGet

Returns the specified Interconnect. Get a list of available Interconnects by making a list() request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectsGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInterconnectsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'voluptates';
    $request->alt = AltEnum::JSON;
    $request->callback = 'iste';
    $request->fields = 'molestias';
    $request->interconnect = 'beatae';
    $request->key = 'itaque';
    $request->oauthToken = 'atque';
    $request->prettyPrint = false;
    $request->project = 'dolorum';
    $request->quotaUser = 'similique';
    $request->uploadType = 'qui';
    $request->uploadProtocol = 'enim';
    $request->userIp = 'quam';

    $requestSecurity = new ComputeInterconnectsGetSecurity();
    $requestSecurity->option1 = new ComputeInterconnectsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->interconnects->computeInterconnectsGet($request, $requestSecurity);

    if ($response->interconnect !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInterconnectsGetDiagnostics

Returns the interconnectDiagnostics for the specified Interconnect.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectsGetDiagnosticsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectsGetDiagnosticsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectsGetDiagnosticsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectsGetDiagnosticsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectsGetDiagnosticsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInterconnectsGetDiagnosticsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'temporibus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quasi';
    $request->fields = 'sint';
    $request->interconnect = 'inventore';
    $request->key = 'fugit';
    $request->oauthToken = 'earum';
    $request->prettyPrint = false;
    $request->project = 'quidem';
    $request->quotaUser = 'at';
    $request->uploadType = 'debitis';
    $request->uploadProtocol = 'eum';
    $request->userIp = 'non';

    $requestSecurity = new ComputeInterconnectsGetDiagnosticsSecurity();
    $requestSecurity->option1 = new ComputeInterconnectsGetDiagnosticsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->interconnects->computeInterconnectsGetDiagnostics($request, $requestSecurity);

    if ($response->interconnectsGetDiagnosticsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInterconnectsInsert

Creates an Interconnect in the specified project using the data included in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Interconnect;
use \OpenAPI\OpenAPI\Models\Shared\InterconnectCircuitInfo;
use \OpenAPI\OpenAPI\Models\Shared\InterconnectOutageNotification;
use \OpenAPI\OpenAPI\Models\Shared\InterconnectOutageNotificationIssueTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InterconnectOutageNotificationSourceEnum;
use \OpenAPI\OpenAPI\Models\Shared\InterconnectOutageNotificationStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\InterconnectInterconnectTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InterconnectLinkTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InterconnectOperationalStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\InterconnectStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectsInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectsInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectsInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInterconnectsInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->interconnect = new Interconnect();
    $request->interconnect->adminEnabled = false;
    $request->interconnect->circuitInfos = [
        new InterconnectCircuitInfo(),
        new InterconnectCircuitInfo(),
        new InterconnectCircuitInfo(),
        new InterconnectCircuitInfo(),
    ];
    $request->interconnect->creationTimestamp = 'porro';
    $request->interconnect->customerName = 'impedit';
    $request->interconnect->description = 'veniam';
    $request->interconnect->expectedOutages = [
        new InterconnectOutageNotification(),
        new InterconnectOutageNotification(),
    ];
    $request->interconnect->googleIpAddress = 'iure';
    $request->interconnect->googleReferenceId = 'natus';
    $request->interconnect->id = 'nulla';
    $request->interconnect->interconnectAttachments = [
        'aut',
        'architecto',
    ];
    $request->interconnect->interconnectType = InterconnectInterconnectTypeEnum::IT_PRIVATE;
    $request->interconnect->kind = 'possimus';
    $request->interconnect->labelFingerprint = 'reiciendis';
    $request->interconnect->labels = [
        'esse' => 'iste',
        'ex' => 'odit',
        'voluptatem' => 'voluptas',
    ];
    $request->interconnect->linkType = InterconnectLinkTypeEnum::LINK_TYPE_ETHERNET10_G_LR;
    $request->interconnect->location = 'vero';
    $request->interconnect->name = 'Miss Russell Price';
    $request->interconnect->nocContactEmail = 'itaque';
    $request->interconnect->operationalStatus = InterconnectOperationalStatusEnum::OS_ACTIVE;
    $request->interconnect->peerIpAddress = 'quia';
    $request->interconnect->provisionedLinkCount = 783643;
    $request->interconnect->requestedLinkCount = 104042;
    $request->interconnect->satisfiesPzs = false;
    $request->interconnect->selfLink = 'deserunt';
    $request->interconnect->state = InterconnectStateEnum::UNPROVISIONED;
    $request->accessToken = 'perferendis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'perferendis';
    $request->fields = 'eveniet';
    $request->key = 'excepturi';
    $request->oauthToken = 'fuga';
    $request->prettyPrint = false;
    $request->project = 'culpa';
    $request->quotaUser = 'quo';
    $request->requestId = 'sunt';
    $request->uploadType = 'necessitatibus';
    $request->uploadProtocol = 'iste';
    $request->userIp = 'veritatis';

    $requestSecurity = new ComputeInterconnectsInsertSecurity();
    $requestSecurity->option1 = new ComputeInterconnectsInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->interconnects->computeInterconnectsInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInterconnectsList

Retrieves the list of Interconnects available to the specified project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectsListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInterconnectsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quos';
    $request->fields = 'ea';
    $request->filter = 'fugiat';
    $request->key = 'dicta';
    $request->maxResults = 555988;
    $request->oauthToken = 'delectus';
    $request->orderBy = 'sint';
    $request->pageToken = 'voluptatibus';
    $request->prettyPrint = false;
    $request->project = 'sint';
    $request->quotaUser = 'reprehenderit';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'est';
    $request->uploadProtocol = 'numquam';
    $request->userIp = 'nam';

    $requestSecurity = new ComputeInterconnectsListSecurity();
    $requestSecurity->option1 = new ComputeInterconnectsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->interconnects->computeInterconnectsList($request, $requestSecurity);

    if ($response->interconnectList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInterconnectsPatch

Updates the specified Interconnect with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Interconnect;
use \OpenAPI\OpenAPI\Models\Shared\InterconnectCircuitInfo;
use \OpenAPI\OpenAPI\Models\Shared\InterconnectOutageNotification;
use \OpenAPI\OpenAPI\Models\Shared\InterconnectOutageNotificationIssueTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InterconnectOutageNotificationSourceEnum;
use \OpenAPI\OpenAPI\Models\Shared\InterconnectOutageNotificationStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\InterconnectInterconnectTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InterconnectLinkTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InterconnectOperationalStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\InterconnectStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectsPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectsPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectsPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInterconnectsPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->interconnect1 = new Interconnect();
    $request->interconnect1->adminEnabled = false;
    $request->interconnect1->circuitInfos = [
        new InterconnectCircuitInfo(),
        new InterconnectCircuitInfo(),
        new InterconnectCircuitInfo(),
    ];
    $request->interconnect1->creationTimestamp = 'facere';
    $request->interconnect1->customerName = 'odit';
    $request->interconnect1->description = 'nam';
    $request->interconnect1->expectedOutages = [
        new InterconnectOutageNotification(),
        new InterconnectOutageNotification(),
        new InterconnectOutageNotification(),
        new InterconnectOutageNotification(),
    ];
    $request->interconnect1->googleIpAddress = 'quam';
    $request->interconnect1->googleReferenceId = 'fugiat';
    $request->interconnect1->id = 'ea';
    $request->interconnect1->interconnectAttachments = [
        'quo',
        'deserunt',
    ];
    $request->interconnect1->interconnectType = InterconnectInterconnectTypeEnum::IT_PRIVATE;
    $request->interconnect1->kind = 'modi';
    $request->interconnect1->labelFingerprint = 'id';
    $request->interconnect1->labels = [
        'excepturi' => 'unde',
        'expedita' => 'eius',
        'quasi' => 'quibusdam',
        'voluptas' => 'quasi',
    ];
    $request->interconnect1->linkType = InterconnectLinkTypeEnum::LINK_TYPE_ETHERNET100_G_LR;
    $request->interconnect1->location = 'numquam';
    $request->interconnect1->name = 'Ms. Erica Dooley';
    $request->interconnect1->nocContactEmail = 'perferendis';
    $request->interconnect1->operationalStatus = InterconnectOperationalStatusEnum::OS_UNPROVISIONED;
    $request->interconnect1->peerIpAddress = 'delectus';
    $request->interconnect1->provisionedLinkCount = 407182;
    $request->interconnect1->requestedLinkCount = 518964;
    $request->interconnect1->satisfiesPzs = false;
    $request->interconnect1->selfLink = 'quidem';
    $request->interconnect1->state = InterconnectStateEnum::ACTIVE;
    $request->accessToken = 'sequi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'assumenda';
    $request->fields = 'modi';
    $request->interconnectPathParameter = 'dolores';
    $request->key = 'beatae';
    $request->oauthToken = 'rerum';
    $request->prettyPrint = false;
    $request->project = 'repellendus';
    $request->quotaUser = 'ut';
    $request->requestId = 'nesciunt';
    $request->uploadType = 'facere';
    $request->uploadProtocol = 'beatae';
    $request->userIp = 'delectus';

    $requestSecurity = new ComputeInterconnectsPatchSecurity();
    $requestSecurity->option1 = new ComputeInterconnectsPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->interconnects->computeInterconnectsPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInterconnectsSetLabels

Sets the labels on an Interconnect. To learn more about labels, read the Labeling Resources documentation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectsSetLabelsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GlobalSetLabelsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectsSetLabelsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectsSetLabelsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectsSetLabelsSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInterconnectsSetLabelsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->globalSetLabelsRequest = new GlobalSetLabelsRequest();
    $request->globalSetLabelsRequest->labelFingerprint = 'quo';
    $request->globalSetLabelsRequest->labels = [
        'eaque' => 'animi',
        'doloremque' => 'consequatur',
        'perferendis' => 'dolor',
    ];
    $request->accessToken = 'earum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'eos';
    $request->fields = 'sed';
    $request->key = 'fugiat';
    $request->oauthToken = 'sint';
    $request->prettyPrint = false;
    $request->project = 'tempore';
    $request->quotaUser = 'dolorem';
    $request->resource = 'dolorum';
    $request->uploadType = 'in';
    $request->uploadProtocol = 'aperiam';
    $request->userIp = 'pariatur';

    $requestSecurity = new ComputeInterconnectsSetLabelsSecurity();
    $requestSecurity->option1 = new ComputeInterconnectsSetLabelsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->interconnects->computeInterconnectsSetLabels($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInterconnectsTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectsTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectsTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectsTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectsTestIamPermissionsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectsTestIamPermissionsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInterconnectsTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'voluptatibus',
        'fuga',
    ];
    $request->accessToken = 'deserunt';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'labore';
    $request->fields = 'quasi';
    $request->key = 'cumque';
    $request->oauthToken = 'corporis';
    $request->prettyPrint = false;
    $request->project = 'odio';
    $request->quotaUser = 'quibusdam';
    $request->resource = 'dicta';
    $request->uploadType = 'voluptatibus';
    $request->uploadProtocol = 'vero';
    $request->userIp = 'quibusdam';

    $requestSecurity = new ComputeInterconnectsTestIamPermissionsSecurity();
    $requestSecurity->option1 = new ComputeInterconnectsTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->interconnects->computeInterconnectsTestIamPermissions($request, $requestSecurity);

    if ($response->testPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
