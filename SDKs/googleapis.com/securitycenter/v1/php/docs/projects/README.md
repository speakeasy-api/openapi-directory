# projects

### Available Operations

* [securitycenterProjectsAssetsGroup](#securitycenterprojectsassetsgroup) - Filters an organization's assets and groups them by their specified properties.
* [securitycenterProjectsAssetsList](#securitycenterprojectsassetslist) - Lists an organization's assets.
* [securitycenterProjectsBigQueryExportsCreate](#securitycenterprojectsbigqueryexportscreate) - Creates a BigQuery export.
* [securitycenterProjectsBigQueryExportsList](#securitycenterprojectsbigqueryexportslist) - Lists BigQuery exports. Note that when requesting BigQuery exports at a given level all exports under that level are also returned e.g. if requesting BigQuery exports under a folder, then all BigQuery exports immediately under the folder plus the ones created under the projects within the folder are returned.
* [securitycenterProjectsFindingsBulkMute](#securitycenterprojectsfindingsbulkmute) - Kicks off an LRO to bulk mute findings for a parent based on a filter. The parent can be either an organization, folder or project. The findings matched by the filter will be muted after the LRO is done.
* [securitycenterProjectsMuteConfigsCreate](#securitycenterprojectsmuteconfigscreate) - Creates a mute config.
* [securitycenterProjectsMuteConfigsList](#securitycenterprojectsmuteconfigslist) - Lists mute configs.
* [securitycenterProjectsNotificationConfigsCreate](#securitycenterprojectsnotificationconfigscreate) - Creates a notification config.
* [securitycenterProjectsNotificationConfigsList](#securitycenterprojectsnotificationconfigslist) - Lists notification configs.
* [securitycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesCreate](#securitycenterprojectssecurityhealthanalyticssettingscustommodulescreate) - Creates a resident SecurityHealthAnalyticsCustomModule at the scope of the given CRM parent, and also creates inherited SecurityHealthAnalyticsCustomModules for all CRM descendants of the given parent. These modules are enabled by default.
* [securitycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesDelete](#securitycenterprojectssecurityhealthanalyticssettingscustommodulesdelete) - Deletes the specified SecurityHealthAnalyticsCustomModule and all of its descendants in the CRM hierarchy. This method is only supported for resident custom modules.
* [securitycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesList](#securitycenterprojectssecurityhealthanalyticssettingscustommoduleslist) - Returns a list of all SecurityHealthAnalyticsCustomModules for the given parent. This includes resident modules defined at the scope of the parent, and inherited modules, inherited from CRM ancestors.
* [securitycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesListDescendant](#securitycenterprojectssecurityhealthanalyticssettingscustommoduleslistdescendant) - Returns a list of all resident SecurityHealthAnalyticsCustomModules under the given CRM parent and all of the parent’s CRM descendants.
* [securitycenterProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesGet](#securitycenterprojectssecurityhealthanalyticssettingseffectivecustommodulesget) - Retrieves an EffectiveSecurityHealthAnalyticsCustomModule.
* [securitycenterProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesList](#securitycenterprojectssecurityhealthanalyticssettingseffectivecustommoduleslist) - Returns a list of all EffectiveSecurityHealthAnalyticsCustomModules for the given parent. This includes resident modules defined at the scope of the parent, and inherited modules, inherited from CRM ancestors.
* [securitycenterProjectsSourcesFindingsExternalSystemsPatch](#securitycenterprojectssourcesfindingsexternalsystemspatch) - Updates external system. This is for a given finding.
* [securitycenterProjectsSourcesFindingsGroup](#securitycenterprojectssourcesfindingsgroup) - Filters an organization or source's findings and groups them by their specified properties. To group across all sources provide a `-` as the source id. Example: /v1/organizations/{organization_id}/sources/-/findings, /v1/folders/{folder_id}/sources/-/findings, /v1/projects/{project_id}/sources/-/findings
* [securitycenterProjectsSourcesFindingsList](#securitycenterprojectssourcesfindingslist) - Lists an organization or source's findings. To list across all sources provide a `-` as the source id. Example: /v1/organizations/{organization_id}/sources/-/findings
* [securitycenterProjectsSourcesFindingsSetMute](#securitycenterprojectssourcesfindingssetmute) - Updates the mute state of a finding.
* [securitycenterProjectsSourcesFindingsSetState](#securitycenterprojectssourcesfindingssetstate) - Updates the state of a finding.
* [securitycenterProjectsSourcesList](#securitycenterprojectssourceslist) - Lists all sources belonging to an organization.

## securitycenterProjectsAssetsGroup

Filters an organization's assets and groups them by their specified properties.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterProjectsAssetsGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GroupAssetsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterProjectsAssetsGroupSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SecuritycenterProjectsAssetsGroupRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->groupAssetsRequest = new GroupAssetsRequest();
    $request->groupAssetsRequest->compareDuration = 'ad';
    $request->groupAssetsRequest->filter = 'eum';
    $request->groupAssetsRequest->groupBy = 'dolor';
    $request->groupAssetsRequest->pageSize = 896547;
    $request->groupAssetsRequest->pageToken = 'odit';
    $request->groupAssetsRequest->readTime = 'nemo';
    $request->accessToken = 'quasi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'doloribus';
    $request->fields = 'debitis';
    $request->key = 'eius';
    $request->oauthToken = 'maxime';
    $request->parent = 'deleniti';
    $request->prettyPrint = false;
    $request->quotaUser = 'facilis';
    $request->uploadType = 'in';
    $request->uploadProtocol = 'architecto';

    $requestSecurity = new SecuritycenterProjectsAssetsGroupSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->securitycenterProjectsAssetsGroup($request, $requestSecurity);

    if ($response->groupAssetsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## securitycenterProjectsAssetsList

Lists an organization's assets.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterProjectsAssetsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterProjectsAssetsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SecuritycenterProjectsAssetsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'repudiandae';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'expedita';
    $request->compareDuration = 'nihil';
    $request->fieldMask = 'repellat';
    $request->fields = 'quibusdam';
    $request->filter = 'sed';
    $request->key = 'saepe';
    $request->oauthToken = 'pariatur';
    $request->orderBy = 'accusantium';
    $request->pageSize = 162493;
    $request->pageToken = 'praesentium';
    $request->parent = 'natus';
    $request->prettyPrint = false;
    $request->quotaUser = 'magni';
    $request->readTime = 'sunt';
    $request->uploadType = 'quo';
    $request->uploadProtocol = 'illum';

    $requestSecurity = new SecuritycenterProjectsAssetsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->securitycenterProjectsAssetsList($request, $requestSecurity);

    if ($response->listAssetsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## securitycenterProjectsBigQueryExportsCreate

Creates a BigQuery export.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterProjectsBigQueryExportsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudSecuritycenterV1BigQueryExportInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterProjectsBigQueryExportsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SecuritycenterProjectsBigQueryExportsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudSecuritycenterV1BigQueryExportInput = new GoogleCloudSecuritycenterV1BigQueryExportInput();
    $request->googleCloudSecuritycenterV1BigQueryExportInput->dataset = 'maxime';
    $request->googleCloudSecuritycenterV1BigQueryExportInput->description = 'ea';
    $request->googleCloudSecuritycenterV1BigQueryExportInput->filter = 'excepturi';
    $request->googleCloudSecuritycenterV1BigQueryExportInput->name = 'Dr. Rosemary Bartoletti';
    $request->accessToken = 'ipsam';
    $request->alt = AltEnum::MEDIA;
    $request->bigQueryExportId = 'autem';
    $request->callback = 'nam';
    $request->fields = 'eaque';
    $request->key = 'pariatur';
    $request->oauthToken = 'nemo';
    $request->parent = 'voluptatibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'perferendis';
    $request->uploadType = 'fugiat';
    $request->uploadProtocol = 'amet';

    $requestSecurity = new SecuritycenterProjectsBigQueryExportsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->securitycenterProjectsBigQueryExportsCreate($request, $requestSecurity);

    if ($response->googleCloudSecuritycenterV1BigQueryExport !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## securitycenterProjectsBigQueryExportsList

Lists BigQuery exports. Note that when requesting BigQuery exports at a given level all exports under that level are also returned e.g. if requesting BigQuery exports under a folder, then all BigQuery exports immediately under the folder plus the ones created under the projects within the folder are returned.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterProjectsBigQueryExportsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterProjectsBigQueryExportsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SecuritycenterProjectsBigQueryExportsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'cumque';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'hic';
    $request->fields = 'libero';
    $request->key = 'nobis';
    $request->oauthToken = 'dolores';
    $request->pageSize = 339404;
    $request->pageToken = 'totam';
    $request->parent = 'dignissimos';
    $request->prettyPrint = false;
    $request->quotaUser = 'eaque';
    $request->uploadType = 'quis';
    $request->uploadProtocol = 'nesciunt';

    $requestSecurity = new SecuritycenterProjectsBigQueryExportsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->securitycenterProjectsBigQueryExportsList($request, $requestSecurity);

    if ($response->listBigQueryExportsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## securitycenterProjectsFindingsBulkMute

Kicks off an LRO to bulk mute findings for a parent based on a filter. The parent can be either an organization, folder or project. The findings matched by the filter will be muted after the LRO is done.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterProjectsFindingsBulkMuteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BulkMuteFindingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterProjectsFindingsBulkMuteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SecuritycenterProjectsFindingsBulkMuteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->bulkMuteFindingsRequest = new BulkMuteFindingsRequest();
    $request->bulkMuteFindingsRequest->filter = 'perferendis';
    $request->bulkMuteFindingsRequest->muteAnnotation = 'dolores';
    $request->accessToken = 'minus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolor';
    $request->fields = 'vero';
    $request->key = 'nostrum';
    $request->oauthToken = 'hic';
    $request->parent = 'recusandae';
    $request->prettyPrint = false;
    $request->quotaUser = 'omnis';
    $request->uploadType = 'facilis';
    $request->uploadProtocol = 'perspiciatis';

    $requestSecurity = new SecuritycenterProjectsFindingsBulkMuteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->securitycenterProjectsFindingsBulkMute($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## securitycenterProjectsMuteConfigsCreate

Creates a mute config.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterProjectsMuteConfigsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudSecuritycenterV1MuteConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterProjectsMuteConfigsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SecuritycenterProjectsMuteConfigsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudSecuritycenterV1MuteConfigInput = new GoogleCloudSecuritycenterV1MuteConfigInput();
    $request->googleCloudSecuritycenterV1MuteConfigInput->description = 'porro';
    $request->googleCloudSecuritycenterV1MuteConfigInput->displayName = 'consequuntur';
    $request->googleCloudSecuritycenterV1MuteConfigInput->filter = 'blanditiis';
    $request->googleCloudSecuritycenterV1MuteConfigInput->name = 'Gary Mayert';
    $request->accessToken = 'asperiores';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'modi';
    $request->fields = 'iste';
    $request->key = 'dolorum';
    $request->muteConfigId = 'deleniti';
    $request->oauthToken = 'pariatur';
    $request->parent = 'provident';
    $request->prettyPrint = false;
    $request->quotaUser = 'nobis';
    $request->uploadType = 'libero';
    $request->uploadProtocol = 'delectus';

    $requestSecurity = new SecuritycenterProjectsMuteConfigsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->securitycenterProjectsMuteConfigsCreate($request, $requestSecurity);

    if ($response->googleCloudSecuritycenterV1MuteConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## securitycenterProjectsMuteConfigsList

Lists mute configs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterProjectsMuteConfigsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterProjectsMuteConfigsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SecuritycenterProjectsMuteConfigsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quos';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolorem';
    $request->fields = 'dolorem';
    $request->key = 'dolor';
    $request->oauthToken = 'qui';
    $request->pageSize = 218749;
    $request->pageToken = 'hic';
    $request->parent = 'excepturi';
    $request->prettyPrint = false;
    $request->quotaUser = 'cum';
    $request->uploadType = 'voluptate';
    $request->uploadProtocol = 'dignissimos';

    $requestSecurity = new SecuritycenterProjectsMuteConfigsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->securitycenterProjectsMuteConfigsList($request, $requestSecurity);

    if ($response->listMuteConfigsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## securitycenterProjectsNotificationConfigsCreate

Creates a notification config.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterProjectsNotificationConfigsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\NotificationConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\StreamingConfig;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterProjectsNotificationConfigsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SecuritycenterProjectsNotificationConfigsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->notificationConfigInput = new NotificationConfigInput();
    $request->notificationConfigInput->description = 'amet';
    $request->notificationConfigInput->name = 'Mr. Bradley Bogan';
    $request->notificationConfigInput->pubsubTopic = 'odio';
    $request->notificationConfigInput->streamingConfig = new StreamingConfig();
    $request->notificationConfigInput->streamingConfig->filter = 'quaerat';
    $request->accessToken = 'accusamus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'voluptatibus';
    $request->configId = 'voluptas';
    $request->fields = 'natus';
    $request->key = 'eos';
    $request->oauthToken = 'atque';
    $request->parent = 'sit';
    $request->prettyPrint = false;
    $request->quotaUser = 'fugiat';
    $request->uploadType = 'ab';
    $request->uploadProtocol = 'soluta';

    $requestSecurity = new SecuritycenterProjectsNotificationConfigsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->securitycenterProjectsNotificationConfigsCreate($request, $requestSecurity);

    if ($response->notificationConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## securitycenterProjectsNotificationConfigsList

Lists notification configs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterProjectsNotificationConfigsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterProjectsNotificationConfigsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SecuritycenterProjectsNotificationConfigsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'iusto';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolorum';
    $request->fields = 'deleniti';
    $request->key = 'omnis';
    $request->oauthToken = 'necessitatibus';
    $request->pageSize = 714697;
    $request->pageToken = 'asperiores';
    $request->parent = 'nihil';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsum';
    $request->uploadType = 'voluptate';
    $request->uploadProtocol = 'id';

    $requestSecurity = new SecuritycenterProjectsNotificationConfigsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->securitycenterProjectsNotificationConfigsList($request, $requestSecurity);

    if ($response->listNotificationConfigsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## securitycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesCreate

Creates a resident SecurityHealthAnalyticsCustomModule at the scope of the given CRM parent, and also creates inherited SecurityHealthAnalyticsCustomModules for all CRM descendants of the given parent. These modules are enabled by default.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModuleInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudSecuritycenterV1CustomConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudSecuritycenterV1CustomOutputSpec;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudSecuritycenterV1Property;
use \OpenAPI\OpenAPI\Models\Shared\Expr;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudSecuritycenterV1ResourceSelector;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudSecuritycenterV1CustomConfigSeverityEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModuleEnablementStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SecuritycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModuleInput = new GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModuleInput();
    $request->googleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModuleInput->customConfig = new GoogleCloudSecuritycenterV1CustomConfig();
    $request->googleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModuleInput->customConfig->customOutput = new GoogleCloudSecuritycenterV1CustomOutputSpec();
    $request->googleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModuleInput->customConfig->customOutput->properties = [
        new GoogleCloudSecuritycenterV1Property(),
        new GoogleCloudSecuritycenterV1Property(),
    ];
    $request->googleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModuleInput->customConfig->description = 'aspernatur';
    $request->googleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModuleInput->customConfig->predicate = new Expr();
    $request->googleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModuleInput->customConfig->predicate->description = 'perferendis';
    $request->googleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModuleInput->customConfig->predicate->expression = 'amet';
    $request->googleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModuleInput->customConfig->predicate->location = 'optio';
    $request->googleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModuleInput->customConfig->predicate->title = 'Dr.';
    $request->googleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModuleInput->customConfig->recommendation = 'ad';
    $request->googleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModuleInput->customConfig->resourceSelector = new GoogleCloudSecuritycenterV1ResourceSelector();
    $request->googleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModuleInput->customConfig->resourceSelector->resourceTypes = [
        'suscipit',
        'deserunt',
        'provident',
        'minima',
    ];
    $request->googleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModuleInput->customConfig->severity = GoogleCloudSecuritycenterV1CustomConfigSeverityEnum::LOW;
    $request->googleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModuleInput->displayName = 'totam';
    $request->googleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModuleInput->enablementState = GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModuleEnablementStateEnum::DISABLED;
    $request->googleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModuleInput->name = 'Cristina Hahn';
    $request->accessToken = 'quod';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'qui';
    $request->fields = 'dolorum';
    $request->key = 'a';
    $request->oauthToken = 'esse';
    $request->parent = 'harum';
    $request->prettyPrint = false;
    $request->quotaUser = 'iusto';
    $request->uploadType = 'ipsum';
    $request->uploadProtocol = 'quisquam';

    $requestSecurity = new SecuritycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->securitycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesCreate($request, $requestSecurity);

    if ($response->googleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## securitycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesDelete

Deletes the specified SecurityHealthAnalyticsCustomModule and all of its descendants in the CRM hierarchy. This method is only supported for resident custom modules.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SecuritycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'amet';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'accusamus';
    $request->fields = 'numquam';
    $request->key = 'enim';
    $request->name = 'Jeannie Leannon MD';
    $request->oauthToken = 'neque';
    $request->prettyPrint = false;
    $request->quotaUser = 'sed';
    $request->uploadType = 'vel';
    $request->uploadProtocol = 'libero';

    $requestSecurity = new SecuritycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->securitycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## securitycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesList

Returns a list of all SecurityHealthAnalyticsCustomModules for the given parent. This includes resident modules defined at the scope of the parent, and inherited modules, inherited from CRM ancestors.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SecuritycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'deserunt';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ipsum';
    $request->fields = 'incidunt';
    $request->key = 'qui';
    $request->oauthToken = 'cupiditate';
    $request->pageSize = 807581;
    $request->pageToken = 'pariatur';
    $request->parent = 'soluta';
    $request->prettyPrint = false;
    $request->quotaUser = 'dicta';
    $request->uploadType = 'laborum';
    $request->uploadProtocol = 'totam';

    $requestSecurity = new SecuritycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->securitycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesList($request, $requestSecurity);

    if ($response->listSecurityHealthAnalyticsCustomModulesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## securitycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesListDescendant

Returns a list of all resident SecurityHealthAnalyticsCustomModules under the given CRM parent and all of the parent’s CRM descendants.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesListDescendantRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesListDescendantSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SecuritycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesListDescendantRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'aspernatur';
    $request->alt = AltEnum::JSON;
    $request->callback = 'distinctio';
    $request->fields = 'facilis';
    $request->key = 'aliquid';
    $request->oauthToken = 'quam';
    $request->pageSize = 565421;
    $request->pageToken = 'temporibus';
    $request->parent = 'qui';
    $request->prettyPrint = false;
    $request->quotaUser = 'neque';
    $request->uploadType = 'fugit';
    $request->uploadProtocol = 'magni';

    $requestSecurity = new SecuritycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesListDescendantSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->securitycenterProjectsSecurityHealthAnalyticsSettingsCustomModulesListDescendant($request, $requestSecurity);

    if ($response->listDescendantSecurityHealthAnalyticsCustomModulesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## securitycenterProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesGet

Retrieves an EffectiveSecurityHealthAnalyticsCustomModule.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SecuritycenterProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'sunt';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nam';
    $request->fields = 'hic';
    $request->filter = 'voluptatem';
    $request->key = 'cumque';
    $request->name = 'Robin Bosco';
    $request->oauthToken = 'veritatis';
    $request->pageSize = 749255;
    $request->pageToken = 'quos';
    $request->prettyPrint = false;
    $request->quotaUser = 'tempore';
    $request->uploadType = 'cupiditate';
    $request->uploadProtocol = 'aperiam';

    $requestSecurity = new SecuritycenterProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->securitycenterProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesGet($request, $requestSecurity);

    if ($response->googleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## securitycenterProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesList

Returns a list of all EffectiveSecurityHealthAnalyticsCustomModules for the given parent. This includes resident modules defined at the scope of the parent, and inherited modules, inherited from CRM ancestors.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SecuritycenterProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'dolorem';
    $request->alt = AltEnum::JSON;
    $request->callback = 'labore';
    $request->fields = 'adipisci';
    $request->key = 'dolorum';
    $request->oauthToken = 'architecto';
    $request->pageSize = 63038;
    $request->pageToken = 'aut';
    $request->parent = 'quas';
    $request->prettyPrint = false;
    $request->quotaUser = 'itaque';
    $request->uploadType = 'consequatur';
    $request->uploadProtocol = 'est';

    $requestSecurity = new SecuritycenterProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->securitycenterProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesList($request, $requestSecurity);

    if ($response->listEffectiveSecurityHealthAnalyticsCustomModulesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## securitycenterProjectsSourcesFindingsExternalSystemsPatch

Updates external system. This is for a given finding.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterProjectsSourcesFindingsExternalSystemsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudSecuritycenterV1ExternalSystem;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterProjectsSourcesFindingsExternalSystemsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SecuritycenterProjectsSourcesFindingsExternalSystemsPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudSecuritycenterV1ExternalSystem = new GoogleCloudSecuritycenterV1ExternalSystem();
    $request->googleCloudSecuritycenterV1ExternalSystem->assignees = [
        'doloribus',
        'ut',
        'facilis',
        'cupiditate',
    ];
    $request->googleCloudSecuritycenterV1ExternalSystem->externalSystemUpdateTime = 'qui';
    $request->googleCloudSecuritycenterV1ExternalSystem->externalUid = 'quae';
    $request->googleCloudSecuritycenterV1ExternalSystem->name = 'Darren McClure';
    $request->googleCloudSecuritycenterV1ExternalSystem->status = 'vero';
    $request->accessToken = 'omnis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ipsum';
    $request->fields = 'delectus';
    $request->key = 'voluptate';
    $request->name = 'Meghan Wiegand';
    $request->oauthToken = 'distinctio';
    $request->prettyPrint = false;
    $request->quotaUser = 'quod';
    $request->updateMask = 'odio';
    $request->uploadType = 'similique';
    $request->uploadProtocol = 'facilis';

    $requestSecurity = new SecuritycenterProjectsSourcesFindingsExternalSystemsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->securitycenterProjectsSourcesFindingsExternalSystemsPatch($request, $requestSecurity);

    if ($response->googleCloudSecuritycenterV1ExternalSystem !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## securitycenterProjectsSourcesFindingsGroup

Filters an organization or source's findings and groups them by their specified properties. To group across all sources provide a `-` as the source id. Example: /v1/organizations/{organization_id}/sources/-/findings, /v1/folders/{folder_id}/sources/-/findings, /v1/projects/{project_id}/sources/-/findings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterProjectsSourcesFindingsGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GroupFindingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterProjectsSourcesFindingsGroupSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SecuritycenterProjectsSourcesFindingsGroupRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->groupFindingsRequest = new GroupFindingsRequest();
    $request->groupFindingsRequest->compareDuration = 'ducimus';
    $request->groupFindingsRequest->filter = 'dolore';
    $request->groupFindingsRequest->groupBy = 'quibusdam';
    $request->groupFindingsRequest->pageSize = 848944;
    $request->groupFindingsRequest->pageToken = 'sequi';
    $request->groupFindingsRequest->readTime = 'natus';
    $request->accessToken = 'impedit';
    $request->alt = AltEnum::JSON;
    $request->callback = 'voluptatibus';
    $request->fields = 'exercitationem';
    $request->key = 'nulla';
    $request->oauthToken = 'fugit';
    $request->parent = 'porro';
    $request->prettyPrint = false;
    $request->quotaUser = 'maiores';
    $request->uploadType = 'doloribus';
    $request->uploadProtocol = 'iusto';

    $requestSecurity = new SecuritycenterProjectsSourcesFindingsGroupSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->securitycenterProjectsSourcesFindingsGroup($request, $requestSecurity);

    if ($response->groupFindingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## securitycenterProjectsSourcesFindingsList

Lists an organization or source's findings. To list across all sources provide a `-` as the source id. Example: /v1/organizations/{organization_id}/sources/-/findings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterProjectsSourcesFindingsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterProjectsSourcesFindingsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SecuritycenterProjectsSourcesFindingsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ducimus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'officia';
    $request->compareDuration = 'tempora';
    $request->fieldMask = 'ipsam';
    $request->fields = 'ea';
    $request->filter = 'aspernatur';
    $request->key = 'vel';
    $request->oauthToken = 'possimus';
    $request->orderBy = 'magnam';
    $request->pageSize = 189848;
    $request->pageToken = 'ex';
    $request->parent = 'laudantium';
    $request->prettyPrint = false;
    $request->quotaUser = 'dicta';
    $request->readTime = 'dolor';
    $request->uploadType = 'maiores';
    $request->uploadProtocol = 'quasi';

    $requestSecurity = new SecuritycenterProjectsSourcesFindingsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->securitycenterProjectsSourcesFindingsList($request, $requestSecurity);

    if ($response->listFindingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## securitycenterProjectsSourcesFindingsSetMute

Updates the mute state of a finding.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterProjectsSourcesFindingsSetMuteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetMuteRequest;
use \OpenAPI\OpenAPI\Models\Shared\SetMuteRequestMuteEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterProjectsSourcesFindingsSetMuteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SecuritycenterProjectsSourcesFindingsSetMuteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->setMuteRequest = new SetMuteRequest();
    $request->setMuteRequest->mute = SetMuteRequestMuteEnum::UNDEFINED;
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nostrum';
    $request->fields = 'sapiente';
    $request->key = 'quisquam';
    $request->name = 'Nathaniel Ryan';
    $request->oauthToken = 'aliquid';
    $request->prettyPrint = false;
    $request->quotaUser = 'inventore';
    $request->uploadType = 'magnam';
    $request->uploadProtocol = 'ea';

    $requestSecurity = new SecuritycenterProjectsSourcesFindingsSetMuteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->securitycenterProjectsSourcesFindingsSetMute($request, $requestSecurity);

    if ($response->finding !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## securitycenterProjectsSourcesFindingsSetState

Updates the state of a finding.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterProjectsSourcesFindingsSetStateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetFindingStateRequest;
use \OpenAPI\OpenAPI\Models\Shared\SetFindingStateRequestStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterProjectsSourcesFindingsSetStateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SecuritycenterProjectsSourcesFindingsSetStateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->setFindingStateRequest = new SetFindingStateRequest();
    $request->setFindingStateRequest->startTime = 'consectetur';
    $request->setFindingStateRequest->state = SetFindingStateRequestStateEnum::INACTIVE;
    $request->accessToken = 'aspernatur';
    $request->alt = AltEnum::JSON;
    $request->callback = 'eaque';
    $request->fields = 'a';
    $request->key = 'libero';
    $request->name = 'Jennifer Lesch';
    $request->oauthToken = 'fugit';
    $request->prettyPrint = false;
    $request->quotaUser = 'accusamus';
    $request->uploadType = 'inventore';
    $request->uploadProtocol = 'non';

    $requestSecurity = new SecuritycenterProjectsSourcesFindingsSetStateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->securitycenterProjectsSourcesFindingsSetState($request, $requestSecurity);

    if ($response->finding !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## securitycenterProjectsSourcesList

Lists all sources belonging to an organization.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterProjectsSourcesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterProjectsSourcesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SecuritycenterProjectsSourcesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'dolorum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'placeat';
    $request->fields = 'velit';
    $request->key = 'eum';
    $request->oauthToken = 'autem';
    $request->pageSize = 752135;
    $request->pageToken = 'quas';
    $request->parent = 'assumenda';
    $request->prettyPrint = false;
    $request->quotaUser = 'nulla';
    $request->uploadType = 'voluptas';
    $request->uploadProtocol = 'libero';

    $requestSecurity = new SecuritycenterProjectsSourcesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->securitycenterProjectsSourcesList($request, $requestSecurity);

    if ($response->listSourcesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
