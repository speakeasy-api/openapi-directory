# projects

### Available Operations

* [policysimulatorProjectsLocationsReplaysCreate](#policysimulatorprojectslocationsreplayscreate) - Creates and starts a Replay using the given ReplayConfig.
* [policysimulatorProjectsLocationsReplaysOperationsList](#policysimulatorprojectslocationsreplaysoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [policysimulatorProjectsLocationsReplaysResultsList](#policysimulatorprojectslocationsreplaysresultslist) - Lists the results of running a Replay.

## policysimulatorProjectsLocationsReplaysCreate

Creates and starts a Replay using the given ReplayConfig.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PolicysimulatorProjectsLocationsReplaysCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudPolicysimulatorV1ReplayInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudPolicysimulatorV1ReplayConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudPolicysimulatorV1ReplayConfigLogSourceEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleIamV1Policy;
use \OpenAPI\OpenAPI\Models\Shared\GoogleIamV1AuditConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleIamV1AuditLogConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleIamV1AuditLogConfigLogTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleIamV1Binding;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypeExpr;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudPolicysimulatorV1ReplayResultsSummary;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypeDate;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PolicysimulatorProjectsLocationsReplaysCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PolicysimulatorProjectsLocationsReplaysCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudPolicysimulatorV1ReplayInput = new GoogleCloudPolicysimulatorV1ReplayInput();
    $request->googleCloudPolicysimulatorV1ReplayInput->config = new GoogleCloudPolicysimulatorV1ReplayConfig();
    $request->googleCloudPolicysimulatorV1ReplayInput->config->logSource = GoogleCloudPolicysimulatorV1ReplayConfigLogSourceEnum::RECENT_ACCESSES;
    $request->googleCloudPolicysimulatorV1ReplayInput->config->policyOverlay = [
        'quis' => new GoogleIamV1Policy(),
    ];
    $request->googleCloudPolicysimulatorV1ReplayInput->resultsSummary = new GoogleCloudPolicysimulatorV1ReplayResultsSummary();
    $request->googleCloudPolicysimulatorV1ReplayInput->resultsSummary->differenceCount = 87129;
    $request->googleCloudPolicysimulatorV1ReplayInput->resultsSummary->errorCount = 648172;
    $request->googleCloudPolicysimulatorV1ReplayInput->resultsSummary->logCount = 20218;
    $request->googleCloudPolicysimulatorV1ReplayInput->resultsSummary->newestDate = new GoogleTypeDate();
    $request->googleCloudPolicysimulatorV1ReplayInput->resultsSummary->newestDate->day = 368241;
    $request->googleCloudPolicysimulatorV1ReplayInput->resultsSummary->newestDate->month = 832620;
    $request->googleCloudPolicysimulatorV1ReplayInput->resultsSummary->newestDate->year = 957156;
    $request->googleCloudPolicysimulatorV1ReplayInput->resultsSummary->oldestDate = new GoogleTypeDate();
    $request->googleCloudPolicysimulatorV1ReplayInput->resultsSummary->oldestDate->day = 778157;
    $request->googleCloudPolicysimulatorV1ReplayInput->resultsSummary->oldestDate->month = 140350;
    $request->googleCloudPolicysimulatorV1ReplayInput->resultsSummary->oldestDate->year = 870013;
    $request->googleCloudPolicysimulatorV1ReplayInput->resultsSummary->unchangedCount = 870088;
    $request->accessToken = 'maiores';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quod';
    $request->fields = 'quod';
    $request->key = 'esse';
    $request->oauthToken = 'totam';
    $request->parent = 'porro';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorum';
    $request->uploadType = 'dicta';
    $request->uploadProtocol = 'nam';

    $requestSecurity = new PolicysimulatorProjectsLocationsReplaysCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->policysimulatorProjectsLocationsReplaysCreate($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## policysimulatorProjectsLocationsReplaysOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PolicysimulatorProjectsLocationsReplaysOperationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PolicysimulatorProjectsLocationsReplaysOperationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PolicysimulatorProjectsLocationsReplaysOperationsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'occaecati';
    $request->alt = AltEnum::JSON;
    $request->callback = 'deleniti';
    $request->fields = 'hic';
    $request->filter = 'optio';
    $request->key = 'totam';
    $request->name = 'Lucy Krajcik';
    $request->oauthToken = 'impedit';
    $request->pageSize = 736918;
    $request->pageToken = 'esse';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsum';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'aspernatur';

    $requestSecurity = new PolicysimulatorProjectsLocationsReplaysOperationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->policysimulatorProjectsLocationsReplaysOperationsList($request, $requestSecurity);

    if ($response->googleLongrunningListOperationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## policysimulatorProjectsLocationsReplaysResultsList

Lists the results of running a Replay.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PolicysimulatorProjectsLocationsReplaysResultsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PolicysimulatorProjectsLocationsReplaysResultsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PolicysimulatorProjectsLocationsReplaysResultsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ad';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'sed';
    $request->fields = 'iste';
    $request->key = 'dolor';
    $request->oauthToken = 'natus';
    $request->pageSize = 386489;
    $request->pageToken = 'hic';
    $request->parent = 'saepe';
    $request->prettyPrint = false;
    $request->quotaUser = 'fuga';
    $request->uploadType = 'in';
    $request->uploadProtocol = 'corporis';

    $requestSecurity = new PolicysimulatorProjectsLocationsReplaysResultsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->policysimulatorProjectsLocationsReplaysResultsList($request, $requestSecurity);

    if ($response->googleCloudPolicysimulatorV1ListReplayResultsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
