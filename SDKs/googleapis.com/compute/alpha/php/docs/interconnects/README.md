# interconnects

### Available Operations

* [computeInterconnectsDelete](#computeinterconnectsdelete) - Deletes the specified Interconnect.
* [computeInterconnectsGet](#computeinterconnectsget) - Returns the specified Interconnect. Get a list of available Interconnects by making a list() request.
* [computeInterconnectsGetDiagnostics](#computeinterconnectsgetdiagnostics) - Returns the interconnectDiagnostics for the specified Interconnect.
* [computeInterconnectsGetIamPolicy](#computeinterconnectsgetiampolicy) - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* [computeInterconnectsGetMacsecConfig](#computeinterconnectsgetmacsecconfig) - Returns the interconnectMacsecConfig for the specified Interconnect.
* [computeInterconnectsInsert](#computeinterconnectsinsert) - Creates an Interconnect in the specified project using the data included in the request.
* [computeInterconnectsList](#computeinterconnectslist) - Retrieves the list of Interconnects available to the specified project.
* [computeInterconnectsPatch](#computeinterconnectspatch) - Updates the specified Interconnect with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
* [computeInterconnectsSetIamPolicy](#computeinterconnectssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.
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
    $request->accessToken = 'minima';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sit';
    $request->fields = 'incidunt';
    $request->interconnect = 'magnam';
    $request->key = 'molestias';
    $request->oauthToken = 'hic';
    $request->prettyPrint = false;
    $request->project = 'error';
    $request->quotaUser = 'repellendus';
    $request->requestId = 'delectus';
    $request->uploadType = 'dicta';
    $request->uploadProtocol = 'ratione';
    $request->userIp = 'delectus';

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
    $request->accessToken = 'officiis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nulla';
    $request->fields = 'distinctio';
    $request->interconnect = 'recusandae';
    $request->key = 'in';
    $request->oauthToken = 'deleniti';
    $request->prettyPrint = false;
    $request->project = 'tempore';
    $request->quotaUser = 'reiciendis';
    $request->uploadType = 'commodi';
    $request->uploadProtocol = 'sit';
    $request->userIp = 'ea';

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
    $request->accessToken = 'quia';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'rem';
    $request->fields = 'molestias';
    $request->interconnect = 'eius';
    $request->key = 'necessitatibus';
    $request->oauthToken = 'culpa';
    $request->prettyPrint = false;
    $request->project = 'in';
    $request->quotaUser = 'aliquid';
    $request->uploadType = 'amet';
    $request->uploadProtocol = 'fugiat';
    $request->userIp = 'corporis';

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

## computeInterconnectsGetIamPolicy

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectsGetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectsGetIamPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectsGetIamPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectsGetIamPolicySecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectsGetIamPolicySecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInterconnectsGetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'in';
    $request->alt = AltEnum::JSON;
    $request->callback = 'voluptate';
    $request->fields = 'provident';
    $request->key = 'quis';
    $request->oauthToken = 'expedita';
    $request->optionsRequestedPolicyVersion = 462646;
    $request->prettyPrint = false;
    $request->project = 'laudantium';
    $request->quotaUser = 'exercitationem';
    $request->resource = 'vitae';
    $request->uploadType = 'magnam';
    $request->uploadProtocol = 'blanditiis';
    $request->userIp = 'nulla';

    $requestSecurity = new ComputeInterconnectsGetIamPolicySecurity();
    $requestSecurity->option1 = new ComputeInterconnectsGetIamPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->interconnects->computeInterconnectsGetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInterconnectsGetMacsecConfig

Returns the interconnectMacsecConfig for the specified Interconnect.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectsGetMacsecConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectsGetMacsecConfigSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectsGetMacsecConfigSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectsGetMacsecConfigSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectsGetMacsecConfigSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInterconnectsGetMacsecConfigRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quibusdam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ut';
    $request->fields = 'cupiditate';
    $request->interconnect = 'debitis';
    $request->key = 'minima';
    $request->oauthToken = 'vel';
    $request->prettyPrint = false;
    $request->project = 'consectetur';
    $request->quotaUser = 'nostrum';
    $request->uploadType = 'tempore';
    $request->uploadProtocol = 'ipsum';
    $request->userIp = 'dolorem';

    $requestSecurity = new ComputeInterconnectsGetMacsecConfigSecurity();
    $requestSecurity->option1 = new ComputeInterconnectsGetMacsecConfigSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->interconnects->computeInterconnectsGetMacsecConfig($request, $requestSecurity);

    if ($response->interconnectsGetMacsecConfigResponse !== null) {
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
use \OpenAPI\OpenAPI\Models\Shared\InterconnectAvailableFeaturesEnum;
use \OpenAPI\OpenAPI\Models\Shared\InterconnectCircuitInfo;
use \OpenAPI\OpenAPI\Models\Shared\InterconnectOutageNotification;
use \OpenAPI\OpenAPI\Models\Shared\InterconnectOutageNotificationIssueTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InterconnectOutageNotificationSourceEnum;
use \OpenAPI\OpenAPI\Models\Shared\InterconnectOutageNotificationStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\InterconnectInterconnectTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InterconnectLinkTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InterconnectMacsec;
use \OpenAPI\OpenAPI\Models\Shared\InterconnectMacsecPreSharedKey;
use \OpenAPI\OpenAPI\Models\Shared\InterconnectOperationalStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\InterconnectRequestedFeaturesEnum;
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
    $request->interconnect->availableFeatures = [
        InterconnectAvailableFeaturesEnum::IF_MACSEC,
        InterconnectAvailableFeaturesEnum::IF_MACSEC,
        InterconnectAvailableFeaturesEnum::IF_MACSEC,
        InterconnectAvailableFeaturesEnum::IF_MACSEC,
    ];
    $request->interconnect->circuitInfos = [
        new InterconnectCircuitInfo(),
    ];
    $request->interconnect->creationTimestamp = 'maiores';
    $request->interconnect->customerName = 'unde';
    $request->interconnect->description = 'reprehenderit';
    $request->interconnect->expectedOutages = [
        new InterconnectOutageNotification(),
    ];
    $request->interconnect->googleIpAddress = 'placeat';
    $request->interconnect->googleReferenceId = 'dolore';
    $request->interconnect->id = 'magni';
    $request->interconnect->interconnectAttachments = [
        'quod',
        'provident',
        'delectus',
        'dolore',
    ];
    $request->interconnect->interconnectType = InterconnectInterconnectTypeEnum::IT_PRIVATE;
    $request->interconnect->kind = 'labore';
    $request->interconnect->labelFingerprint = 'numquam';
    $request->interconnect->labels = [
        'consequuntur' => 'veniam',
    ];
    $request->interconnect->linkType = InterconnectLinkTypeEnum::LINK_TYPE_ETHERNET10_G_LR;
    $request->interconnect->location = 'in';
    $request->interconnect->macsec = new InterconnectMacsec();
    $request->interconnect->macsec->failOpen = false;
    $request->interconnect->macsec->preSharedKeys = [
        new InterconnectMacsecPreSharedKey(),
        new InterconnectMacsecPreSharedKey(),
    ];
    $request->interconnect->macsecEnabled = false;
    $request->interconnect->name = 'Kurt Mante III';
    $request->interconnect->nocContactEmail = 'nostrum';
    $request->interconnect->operationalStatus = InterconnectOperationalStatusEnum::OS_UNPROVISIONED;
    $request->interconnect->peerIpAddress = 'eaque';
    $request->interconnect->provisionedLinkCount = 935159;
    $request->interconnect->remoteLocation = 'earum';
    $request->interconnect->requestedFeatures = [
        InterconnectRequestedFeaturesEnum::IF_MACSEC,
        InterconnectRequestedFeaturesEnum::IF_MACSEC,
        InterconnectRequestedFeaturesEnum::IF_MACSEC,
    ];
    $request->interconnect->requestedLinkCount = 425484;
    $request->interconnect->satisfiesPzs = false;
    $request->interconnect->selfLink = 'sapiente';
    $request->interconnect->selfLinkWithId = 'perspiciatis';
    $request->interconnect->state = InterconnectStateEnum::ACTIVE;
    $request->accessToken = 'libero';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'alias';
    $request->fields = 'fuga';
    $request->key = 'beatae';
    $request->oauthToken = 'distinctio';
    $request->prettyPrint = false;
    $request->project = 'deleniti';
    $request->quotaUser = 'eligendi';
    $request->requestId = 'unde';
    $request->uploadType = 'veniam';
    $request->uploadProtocol = 'nam';
    $request->userIp = 'accusamus';

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
    $request->accessToken = 'explicabo';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'incidunt';
    $request->fields = 'soluta';
    $request->filter = 'nihil';
    $request->key = 'adipisci';
    $request->maxResults = 591998;
    $request->oauthToken = 'reiciendis';
    $request->orderBy = 'dolore';
    $request->pageToken = 'voluptatibus';
    $request->prettyPrint = false;
    $request->project = 'eveniet';
    $request->quotaUser = 'odio';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'voluptate';
    $request->uploadProtocol = 'explicabo';
    $request->userIp = 'architecto';

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
use \OpenAPI\OpenAPI\Models\Shared\InterconnectAvailableFeaturesEnum;
use \OpenAPI\OpenAPI\Models\Shared\InterconnectCircuitInfo;
use \OpenAPI\OpenAPI\Models\Shared\InterconnectOutageNotification;
use \OpenAPI\OpenAPI\Models\Shared\InterconnectOutageNotificationIssueTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InterconnectOutageNotificationSourceEnum;
use \OpenAPI\OpenAPI\Models\Shared\InterconnectOutageNotificationStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\InterconnectInterconnectTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InterconnectLinkTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InterconnectMacsec;
use \OpenAPI\OpenAPI\Models\Shared\InterconnectMacsecPreSharedKey;
use \OpenAPI\OpenAPI\Models\Shared\InterconnectOperationalStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\InterconnectRequestedFeaturesEnum;
use \OpenAPI\OpenAPI\Models\Shared\InterconnectStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectsPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectsPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectsPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInterconnectsPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->interconnect1 = new Interconnect();
    $request->interconnect1->adminEnabled = false;
    $request->interconnect1->availableFeatures = [
        InterconnectAvailableFeaturesEnum::IF_MACSEC,
        InterconnectAvailableFeaturesEnum::IF_MACSEC,
        InterconnectAvailableFeaturesEnum::IF_MACSEC,
        InterconnectAvailableFeaturesEnum::IF_MACSEC,
    ];
    $request->interconnect1->circuitInfos = [
        new InterconnectCircuitInfo(),
    ];
    $request->interconnect1->creationTimestamp = 'delectus';
    $request->interconnect1->customerName = 'voluptas';
    $request->interconnect1->description = 'exercitationem';
    $request->interconnect1->expectedOutages = [
        new InterconnectOutageNotification(),
        new InterconnectOutageNotification(),
    ];
    $request->interconnect1->googleIpAddress = 'quos';
    $request->interconnect1->googleReferenceId = 'impedit';
    $request->interconnect1->id = 'cupiditate';
    $request->interconnect1->interconnectAttachments = [
        'quod',
        'iure',
        'sed',
    ];
    $request->interconnect1->interconnectType = InterconnectInterconnectTypeEnum::DEDICATED;
    $request->interconnect1->kind = 'quibusdam';
    $request->interconnect1->labelFingerprint = 'fugit';
    $request->interconnect1->labels = [
        'optio' => 'accusantium',
        'earum' => 'excepturi',
        'numquam' => 'voluptatem',
    ];
    $request->interconnect1->linkType = InterconnectLinkTypeEnum::LINK_TYPE_ETHERNET10_G_LR;
    $request->interconnect1->location = 'ducimus';
    $request->interconnect1->macsec = new InterconnectMacsec();
    $request->interconnect1->macsec->failOpen = false;
    $request->interconnect1->macsec->preSharedKeys = [
        new InterconnectMacsecPreSharedKey(),
        new InterconnectMacsecPreSharedKey(),
        new InterconnectMacsecPreSharedKey(),
        new InterconnectMacsecPreSharedKey(),
    ];
    $request->interconnect1->macsecEnabled = false;
    $request->interconnect1->name = 'Simon Nicolas';
    $request->interconnect1->nocContactEmail = 'doloremque';
    $request->interconnect1->operationalStatus = InterconnectOperationalStatusEnum::OS_ACTIVE;
    $request->interconnect1->peerIpAddress = 'quia';
    $request->interconnect1->provisionedLinkCount = 844566;
    $request->interconnect1->remoteLocation = 'temporibus';
    $request->interconnect1->requestedFeatures = [
        InterconnectRequestedFeaturesEnum::IF_MACSEC,
        InterconnectRequestedFeaturesEnum::IF_MACSEC,
    ];
    $request->interconnect1->requestedLinkCount = 811981;
    $request->interconnect1->satisfiesPzs = false;
    $request->interconnect1->selfLink = 'est';
    $request->interconnect1->selfLinkWithId = 'est';
    $request->interconnect1->state = InterconnectStateEnum::UNPROVISIONED;
    $request->accessToken = 'occaecati';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'modi';
    $request->fields = 'minus';
    $request->interconnectPathParameter = 'id';
    $request->key = 'culpa';
    $request->oauthToken = 'beatae';
    $request->prettyPrint = false;
    $request->project = 'quod';
    $request->quotaUser = 'a';
    $request->requestId = 'eveniet';
    $request->uploadType = 'sint';
    $request->uploadProtocol = 'saepe';
    $request->userIp = 'illo';

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

## computeInterconnectsSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectsSetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GlobalSetPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\Binding;
use \OpenAPI\OpenAPI\Models\Shared\Expr;
use \OpenAPI\OpenAPI\Models\Shared\Policy;
use \OpenAPI\OpenAPI\Models\Shared\AuditConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuditLogConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuditLogConfigLogTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Rule;
use \OpenAPI\OpenAPI\Models\Shared\RuleActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\Condition;
use \OpenAPI\OpenAPI\Models\Shared\ConditionIamEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConditionOpEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConditionSysEnum;
use \OpenAPI\OpenAPI\Models\Shared\LogConfig;
use \OpenAPI\OpenAPI\Models\Shared\LogConfigCloudAuditOptions;
use \OpenAPI\OpenAPI\Models\Shared\AuthorizationLoggingOptions;
use \OpenAPI\OpenAPI\Models\Shared\AuthorizationLoggingOptionsPermissionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LogConfigCloudAuditOptionsLogNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\LogConfigCounterOptions;
use \OpenAPI\OpenAPI\Models\Shared\LogConfigCounterOptionsCustomField;
use \OpenAPI\OpenAPI\Models\Shared\LogConfigDataAccessOptions;
use \OpenAPI\OpenAPI\Models\Shared\LogConfigDataAccessOptionsLogModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectsSetIamPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectsSetIamPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectsSetIamPolicySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInterconnectsSetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->globalSetPolicyRequest = new GlobalSetPolicyRequest();
    $request->globalSetPolicyRequest->bindings = [
        new Binding(),
        new Binding(),
        new Binding(),
        new Binding(),
    ];
    $request->globalSetPolicyRequest->etag = 'reiciendis';
    $request->globalSetPolicyRequest->policy = new Policy();
    $request->globalSetPolicyRequest->policy->auditConfigs = [
        new AuditConfig(),
        new AuditConfig(),
        new AuditConfig(),
    ];
    $request->globalSetPolicyRequest->policy->bindings = [
        new Binding(),
    ];
    $request->globalSetPolicyRequest->policy->etag = 'amet';
    $request->globalSetPolicyRequest->policy->rules = [
        new Rule(),
        new Rule(),
        new Rule(),
    ];
    $request->globalSetPolicyRequest->policy->version = 45546;
    $request->accessToken = 'ducimus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'amet';
    $request->fields = 'ducimus';
    $request->key = 'deleniti';
    $request->oauthToken = 'dolor';
    $request->prettyPrint = false;
    $request->project = 'ab';
    $request->quotaUser = 'sint';
    $request->resource = 'quos';
    $request->uploadType = 'sequi';
    $request->uploadProtocol = 'fugiat';
    $request->userIp = 'eius';

    $requestSecurity = new ComputeInterconnectsSetIamPolicySecurity();
    $requestSecurity->option1 = new ComputeInterconnectsSetIamPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->interconnects->computeInterconnectsSetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
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
    $request->globalSetLabelsRequest->labelFingerprint = 'recusandae';
    $request->globalSetLabelsRequest->labels = [
        'aliquam' => 'similique',
        'voluptatum' => 'corporis',
    ];
    $request->accessToken = 'dolore';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'commodi';
    $request->fields = 'quis';
    $request->key = 'provident';
    $request->oauthToken = 'iusto';
    $request->prettyPrint = false;
    $request->project = 'optio';
    $request->quotaUser = 'ipsam';
    $request->resource = 'consequatur';
    $request->uploadType = 'fugit';
    $request->uploadProtocol = 'dolorem';
    $request->userIp = 'nesciunt';

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
        'modi',
    ];
    $request->accessToken = 'nihil';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quibusdam';
    $request->fields = 'veniam';
    $request->key = 'et';
    $request->oauthToken = 'dolorum';
    $request->prettyPrint = false;
    $request->project = 'animi';
    $request->quotaUser = 'mollitia';
    $request->resource = 'autem';
    $request->uploadType = 'illum';
    $request->uploadProtocol = 'at';
    $request->userIp = 'hic';

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
