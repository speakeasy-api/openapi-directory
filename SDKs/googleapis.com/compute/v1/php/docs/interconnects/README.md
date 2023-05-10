# interconnects

### Available Operations

* [computeInterconnectsDelete](#computeinterconnectsdelete) - Deletes the specified Interconnect.
* [computeInterconnectsGet](#computeinterconnectsget) - Returns the specified Interconnect. Get a list of available Interconnects by making a list() request.
* [computeInterconnectsGetDiagnostics](#computeinterconnectsgetdiagnostics) - Returns the interconnectDiagnostics for the specified Interconnect.
* [computeInterconnectsInsert](#computeinterconnectsinsert) - Creates an Interconnect in the specified project using the data included in the request.
* [computeInterconnectsList](#computeinterconnectslist) - Retrieves the list of Interconnects available to the specified project.
* [computeInterconnectsPatch](#computeinterconnectspatch) - Updates the specified Interconnect with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
* [computeInterconnectsSetLabels](#computeinterconnectssetlabels) - Sets the labels on an Interconnect. To learn more about labels, read the Labeling Resources documentation.

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
    $request->accessToken = 'aspernatur';
    $request->alt = AltEnum::JSON;
    $request->callback = 'incidunt';
    $request->fields = 'alias';
    $request->interconnect = 'adipisci';
    $request->key = 'atque';
    $request->oauthToken = 'tempore';
    $request->prettyPrint = false;
    $request->project = 'asperiores';
    $request->quotaUser = 'distinctio';
    $request->requestId = 'minima';
    $request->uploadType = 'cupiditate';
    $request->uploadProtocol = 'molestiae';
    $request->userIp = 'et';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'inventore';
    $request->fields = 'perspiciatis';
    $request->interconnect = 'perferendis';
    $request->key = 'corporis';
    $request->oauthToken = 'ullam';
    $request->prettyPrint = false;
    $request->project = 'molestiae';
    $request->quotaUser = 'adipisci';
    $request->uploadType = 'totam';
    $request->uploadProtocol = 'perspiciatis';
    $request->userIp = 'optio';

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
    $request->accessToken = 'at';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'id';
    $request->fields = 'cumque';
    $request->interconnect = 'in';
    $request->key = 'a';
    $request->oauthToken = 'quibusdam';
    $request->prettyPrint = false;
    $request->project = 'culpa';
    $request->quotaUser = 'dolor';
    $request->uploadType = 'occaecati';
    $request->uploadProtocol = 'exercitationem';
    $request->userIp = 'unde';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->interconnect = new Interconnect();
    $request->interconnect->adminEnabled = false;
    $request->interconnect->circuitInfos = [
        new InterconnectCircuitInfo(),
        new InterconnectCircuitInfo(),
        new InterconnectCircuitInfo(),
        new InterconnectCircuitInfo(),
    ];
    $request->interconnect->creationTimestamp = 'vel';
    $request->interconnect->customerName = 'laboriosam';
    $request->interconnect->description = 'soluta';
    $request->interconnect->expectedOutages = [
        new InterconnectOutageNotification(),
        new InterconnectOutageNotification(),
        new InterconnectOutageNotification(),
        new InterconnectOutageNotification(),
    ];
    $request->interconnect->googleIpAddress = 'magni';
    $request->interconnect->googleReferenceId = 'mollitia';
    $request->interconnect->id = 'officiis';
    $request->interconnect->interconnectAttachments = [
        'quas',
        'aut',
    ];
    $request->interconnect->interconnectType = InterconnectInterconnectTypeEnum::IT_PRIVATE;
    $request->interconnect->kind = 'dolorem';
    $request->interconnect->labelFingerprint = 'explicabo';
    $request->interconnect->labels = [
        'iste' => 'occaecati',
        'enim' => 'tempora',
        'libero' => 'iure',
    ];
    $request->interconnect->linkType = InterconnectLinkTypeEnum::LINK_TYPE_ETHERNET10_G_LR;
    $request->interconnect->location = 'id';
    $request->interconnect->name = 'Judith Bashirian';
    $request->interconnect->nocContactEmail = 'commodi';
    $request->interconnect->operationalStatus = InterconnectOperationalStatusEnum::OS_UNPROVISIONED;
    $request->interconnect->peerIpAddress = 'atque';
    $request->interconnect->provisionedLinkCount = 131021;
    $request->interconnect->requestedLinkCount = 521914;
    $request->interconnect->satisfiesPzs = false;
    $request->interconnect->selfLink = 'ipsam';
    $request->interconnect->state = InterconnectStateEnum::ACTIVE;
    $request->accessToken = 'sequi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'libero';
    $request->fields = 'ab';
    $request->key = 'alias';
    $request->oauthToken = 'accusantium';
    $request->prettyPrint = false;
    $request->project = 'doloremque';
    $request->quotaUser = 'autem';
    $request->requestId = 'tempore';
    $request->uploadType = 'necessitatibus';
    $request->uploadProtocol = 'reiciendis';
    $request->userIp = 'incidunt';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'dolores';
    $request->alt = AltEnum::JSON;
    $request->callback = 'recusandae';
    $request->fields = 'quod';
    $request->filter = 'magni';
    $request->key = 'sit';
    $request->maxResults = 374840;
    $request->oauthToken = 'nesciunt';
    $request->orderBy = 'libero';
    $request->pageToken = 'molestiae';
    $request->prettyPrint = false;
    $request->project = 'eius';
    $request->quotaUser = 'perspiciatis';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'amet';
    $request->uploadProtocol = 'ex';
    $request->userIp = 'aliquid';

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
        new InterconnectCircuitInfo(),
    ];
    $request->interconnect1->creationTimestamp = 'rem';
    $request->interconnect1->customerName = 'eveniet';
    $request->interconnect1->description = 'eveniet';
    $request->interconnect1->expectedOutages = [
        new InterconnectOutageNotification(),
    ];
    $request->interconnect1->googleIpAddress = 'repellat';
    $request->interconnect1->googleReferenceId = 'magni';
    $request->interconnect1->id = 'libero';
    $request->interconnect1->interconnectAttachments = [
        'veritatis',
        'provident',
        'veniam',
        'quos',
    ];
    $request->interconnect1->interconnectType = InterconnectInterconnectTypeEnum::IT_PRIVATE;
    $request->interconnect1->kind = 'facere';
    $request->interconnect1->labelFingerprint = 'eius';
    $request->interconnect1->labels = [
        'vero' => 'aut',
    ];
    $request->interconnect1->linkType = InterconnectLinkTypeEnum::LINK_TYPE_ETHERNET100_G_LR;
    $request->interconnect1->location = 'reiciendis';
    $request->interconnect1->name = 'Nadine Ullrich';
    $request->interconnect1->nocContactEmail = 'quia';
    $request->interconnect1->operationalStatus = InterconnectOperationalStatusEnum::OS_UNPROVISIONED;
    $request->interconnect1->peerIpAddress = 'molestiae';
    $request->interconnect1->provisionedLinkCount = 706753;
    $request->interconnect1->requestedLinkCount = 937294;
    $request->interconnect1->satisfiesPzs = false;
    $request->interconnect1->selfLink = 'ipsum';
    $request->interconnect1->state = InterconnectStateEnum::UNPROVISIONED;
    $request->accessToken = 'cupiditate';
    $request->alt = AltEnum::JSON;
    $request->callback = 'harum';
    $request->fields = 'nobis';
    $request->interconnectPathParameter = 'numquam';
    $request->key = 'consequatur';
    $request->oauthToken = 'temporibus';
    $request->prettyPrint = false;
    $request->project = 'doloribus';
    $request->quotaUser = 'quos';
    $request->requestId = 'commodi';
    $request->uploadType = 'blanditiis';
    $request->uploadProtocol = 'voluptatibus';
    $request->userIp = 'nulla';

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
    $request->globalSetLabelsRequest->labelFingerprint = 'ratione';
    $request->globalSetLabelsRequest->labels = [
        'perferendis' => 'enim',
        'impedit' => 'libero',
    ];
    $request->accessToken = 'dolor';
    $request->alt = AltEnum::JSON;
    $request->callback = 'vitae';
    $request->fields = 'pariatur';
    $request->key = 'numquam';
    $request->oauthToken = 'provident';
    $request->prettyPrint = false;
    $request->project = 'quia';
    $request->quotaUser = 'reiciendis';
    $request->resource = 'modi';
    $request->uploadType = 'doloribus';
    $request->uploadProtocol = 'et';
    $request->userIp = 'qui';

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
