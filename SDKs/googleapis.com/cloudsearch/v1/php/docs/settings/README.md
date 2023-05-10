# settings

### Available Operations

* [cloudsearchSettingsDatasourcesCreate](#cloudsearchsettingsdatasourcescreate) - Creates a datasource. **Note:** This API requires an admin account to execute.
* [cloudsearchSettingsDatasourcesList](#cloudsearchsettingsdatasourceslist) - Lists datasources. **Note:** This API requires an admin account to execute.
* [cloudsearchSettingsGetCustomer](#cloudsearchsettingsgetcustomer) - Get customer settings. **Note:** This API requires an admin account to execute.
* [cloudsearchSettingsSearchapplicationsCreate](#cloudsearchsettingssearchapplicationscreate) - Creates a search application. **Note:** This API requires an admin account to execute.
* [cloudsearchSettingsSearchapplicationsDelete](#cloudsearchsettingssearchapplicationsdelete) - Deletes a search application. **Note:** This API requires an admin account to execute.
* [cloudsearchSettingsSearchapplicationsGet](#cloudsearchsettingssearchapplicationsget) - Gets the specified search application. **Note:** This API requires an admin account to execute.
* [cloudsearchSettingsSearchapplicationsList](#cloudsearchsettingssearchapplicationslist) - Lists all search applications. **Note:** This API requires an admin account to execute.
* [cloudsearchSettingsSearchapplicationsPatch](#cloudsearchsettingssearchapplicationspatch) - Updates a search application. **Note:** This API requires an admin account to execute.
* [cloudsearchSettingsSearchapplicationsReset](#cloudsearchsettingssearchapplicationsreset) - Resets a search application to default settings. This will return an empty response. **Note:** This API requires an admin account to execute.
* [cloudsearchSettingsSearchapplicationsUpdate](#cloudsearchsettingssearchapplicationsupdate) - Updates a search application. **Note:** This API requires an admin account to execute.
* [cloudsearchSettingsUpdateCustomer](#cloudsearchsettingsupdatecustomer) - Update customer settings. **Note:** This API requires an admin account to execute.

## cloudsearchSettingsDatasourcesCreate

Creates a datasource. **Note:** This API requires an admin account to execute.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchSettingsDatasourcesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\DataSource;
use \OpenAPI\OpenAPI\Models\Shared\GSuitePrincipal;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchSettingsDatasourcesCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchSettingsDatasourcesCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchSettingsDatasourcesCreateSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchSettingsDatasourcesCreateSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudsearchSettingsDatasourcesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->dataSource = new DataSource();
    $request->dataSource->disableModifications = false;
    $request->dataSource->disableServing = false;
    $request->dataSource->displayName = 'alias';
    $request->dataSource->indexingServiceAccounts = [
        'quaerat',
        'tempora',
        'vel',
        'quod',
    ];
    $request->dataSource->itemsVisibility = [
        new GSuitePrincipal(),
        new GSuitePrincipal(),
        new GSuitePrincipal(),
        new GSuitePrincipal(),
    ];
    $request->dataSource->name = 'Jan Wilderman';
    $request->dataSource->operationIds = [
        'ipsum',
        'quisquam',
    ];
    $request->dataSource->returnThumbnailUrls = false;
    $request->dataSource->shortName = 'tenetur';
    $request->accessToken = 'amet';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'accusamus';
    $request->fields = 'numquam';
    $request->key = 'enim';
    $request->oauthToken = 'dolorem';
    $request->prettyPrint = false;
    $request->quotaUser = 'sapiente';
    $request->uploadType = 'totam';
    $request->uploadProtocol = 'nihil';

    $requestSecurity = new CloudsearchSettingsDatasourcesCreateSecurity();
    $requestSecurity->option1 = new CloudsearchSettingsDatasourcesCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->settings->cloudsearchSettingsDatasourcesCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudsearchSettingsDatasourcesList

Lists datasources. **Note:** This API requires an admin account to execute.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchSettingsDatasourcesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchSettingsDatasourcesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchSettingsDatasourcesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchSettingsDatasourcesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchSettingsDatasourcesListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudsearchSettingsDatasourcesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'expedita';
    $request->alt = AltEnum::JSON;
    $request->callback = 'sed';
    $request->debugOptionsEnableDebugging = false;
    $request->fields = 'vel';
    $request->key = 'libero';
    $request->oauthToken = 'voluptas';
    $request->pageSize = 646265;
    $request->pageToken = 'quam';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsum';
    $request->uploadType = 'incidunt';
    $request->uploadProtocol = 'qui';

    $requestSecurity = new CloudsearchSettingsDatasourcesListSecurity();
    $requestSecurity->option1 = new CloudsearchSettingsDatasourcesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->settings->cloudsearchSettingsDatasourcesList($request, $requestSecurity);

    if ($response->listDataSourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudsearchSettingsGetCustomer

Get customer settings. **Note:** This API requires an admin account to execute.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchSettingsGetCustomerRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchSettingsGetCustomerSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchSettingsGetCustomerSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchSettingsGetCustomerSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchSettingsGetCustomerSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudsearchSettingsGetCustomerRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'maxime';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'soluta';
    $request->fields = 'dicta';
    $request->key = 'laborum';
    $request->oauthToken = 'totam';
    $request->prettyPrint = false;
    $request->quotaUser = 'incidunt';
    $request->uploadType = 'aspernatur';
    $request->uploadProtocol = 'dolores';

    $requestSecurity = new CloudsearchSettingsGetCustomerSecurity();
    $requestSecurity->option1 = new CloudsearchSettingsGetCustomerSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->settings->cloudsearchSettingsGetCustomer($request, $requestSecurity);

    if ($response->customerSettings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudsearchSettingsSearchapplicationsCreate

Creates a search application. **Note:** This API requires an admin account to execute.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchSettingsSearchapplicationsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SearchApplicationInput;
use \OpenAPI\OpenAPI\Models\Shared\DataSourceRestriction;
use \OpenAPI\OpenAPI\Models\Shared\FilterOptions;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Shared\CompositeFilter;
use \OpenAPI\OpenAPI\Models\Shared\CompositeFilterLogicOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\ValueFilter;
use \OpenAPI\OpenAPI\Models\Shared\Value;
use \OpenAPI\OpenAPI\Models\Shared\Date;
use \OpenAPI\OpenAPI\Models\Shared\Source;
use \OpenAPI\OpenAPI\Models\Shared\SourcePredefinedSourceEnum;
use \OpenAPI\OpenAPI\Models\Shared\FacetOptions;
use \OpenAPI\OpenAPI\Models\Shared\IntegerFacetingOptions;
use \OpenAPI\OpenAPI\Models\Shared\SortOptions;
use \OpenAPI\OpenAPI\Models\Shared\SortOptionsSortOrderEnum;
use \OpenAPI\OpenAPI\Models\Shared\QueryInterpretationConfig;
use \OpenAPI\OpenAPI\Models\Shared\ScoringConfig;
use \OpenAPI\OpenAPI\Models\Shared\SourceConfig;
use \OpenAPI\OpenAPI\Models\Shared\SourceCrowdingConfig;
use \OpenAPI\OpenAPI\Models\Shared\SourceScoringConfig;
use \OpenAPI\OpenAPI\Models\Shared\SourceScoringConfigSourceImportanceEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchSettingsSearchapplicationsCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchSettingsSearchapplicationsCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchSettingsSearchapplicationsCreateSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchSettingsSearchapplicationsCreateSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudsearchSettingsSearchapplicationsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->searchApplicationInput = new SearchApplicationInput();
    $request->searchApplicationInput->dataSourceRestrictions = [
        new DataSourceRestriction(),
        new DataSourceRestriction(),
        new DataSourceRestriction(),
    ];
    $request->searchApplicationInput->defaultFacetOptions = [
        new FacetOptions(),
        new FacetOptions(),
    ];
    $request->searchApplicationInput->defaultSortOptions = new SortOptions();
    $request->searchApplicationInput->defaultSortOptions->operatorName = 'quam';
    $request->searchApplicationInput->defaultSortOptions->sortOrder = SortOptionsSortOrderEnum::DESCENDING;
    $request->searchApplicationInput->displayName = 'temporibus';
    $request->searchApplicationInput->enableAuditLog = false;
    $request->searchApplicationInput->name = 'Gladys Considine';
    $request->searchApplicationInput->queryInterpretationConfig = new QueryInterpretationConfig();
    $request->searchApplicationInput->queryInterpretationConfig->forceDisableSupplementalResults = false;
    $request->searchApplicationInput->queryInterpretationConfig->forceVerbatimMode = false;
    $request->searchApplicationInput->returnResultThumbnailUrls = false;
    $request->searchApplicationInput->scoringConfig = new ScoringConfig();
    $request->searchApplicationInput->scoringConfig->disableFreshness = false;
    $request->searchApplicationInput->scoringConfig->disablePersonalization = false;
    $request->searchApplicationInput->sourceConfig = [
        new SourceConfig(),
    ];
    $request->accessToken = 'ullam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'hic';
    $request->fields = 'voluptatem';
    $request->key = 'cumque';
    $request->oauthToken = 'soluta';
    $request->prettyPrint = false;
    $request->quotaUser = 'nobis';
    $request->uploadType = 'et';
    $request->uploadProtocol = 'saepe';

    $requestSecurity = new CloudsearchSettingsSearchapplicationsCreateSecurity();
    $requestSecurity->option1 = new CloudsearchSettingsSearchapplicationsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->settings->cloudsearchSettingsSearchapplicationsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudsearchSettingsSearchapplicationsDelete

Deletes a search application. **Note:** This API requires an admin account to execute.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchSettingsSearchapplicationsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchSettingsSearchapplicationsDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchSettingsSearchapplicationsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchSettingsSearchapplicationsDeleteSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchSettingsSearchapplicationsDeleteSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudsearchSettingsSearchapplicationsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'veritatis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quos';
    $request->debugOptionsEnableDebugging = false;
    $request->fields = 'tempore';
    $request->key = 'cupiditate';
    $request->name = 'Dixie Durgan';
    $request->oauthToken = 'adipisci';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorum';
    $request->uploadType = 'architecto';
    $request->uploadProtocol = 'quae';

    $requestSecurity = new CloudsearchSettingsSearchapplicationsDeleteSecurity();
    $requestSecurity->option1 = new CloudsearchSettingsSearchapplicationsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->settings->cloudsearchSettingsSearchapplicationsDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudsearchSettingsSearchapplicationsGet

Gets the specified search application. **Note:** This API requires an admin account to execute.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchSettingsSearchapplicationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchSettingsSearchapplicationsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchSettingsSearchapplicationsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchSettingsSearchapplicationsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchSettingsSearchapplicationsGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudsearchSettingsSearchapplicationsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quas';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'consequatur';
    $request->debugOptionsEnableDebugging = false;
    $request->fields = 'est';
    $request->key = 'repellendus';
    $request->name = 'Domingo Grady';
    $request->oauthToken = 'qui';
    $request->prettyPrint = false;
    $request->quotaUser = 'quae';
    $request->uploadType = 'laudantium';
    $request->uploadProtocol = 'odio';

    $requestSecurity = new CloudsearchSettingsSearchapplicationsGetSecurity();
    $requestSecurity->option1 = new CloudsearchSettingsSearchapplicationsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->settings->cloudsearchSettingsSearchapplicationsGet($request, $requestSecurity);

    if ($response->searchApplication !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudsearchSettingsSearchapplicationsList

Lists all search applications. **Note:** This API requires an admin account to execute.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchSettingsSearchapplicationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchSettingsSearchapplicationsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchSettingsSearchapplicationsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchSettingsSearchapplicationsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchSettingsSearchapplicationsListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudsearchSettingsSearchapplicationsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'voluptatibus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'vero';
    $request->debugOptionsEnableDebugging = false;
    $request->fields = 'omnis';
    $request->key = 'quis';
    $request->oauthToken = 'ipsum';
    $request->pageSize = 961571;
    $request->pageToken = 'voluptate';
    $request->prettyPrint = false;
    $request->quotaUser = 'consectetur';
    $request->uploadType = 'vero';
    $request->uploadProtocol = 'tenetur';

    $requestSecurity = new CloudsearchSettingsSearchapplicationsListSecurity();
    $requestSecurity->option1 = new CloudsearchSettingsSearchapplicationsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->settings->cloudsearchSettingsSearchapplicationsList($request, $requestSecurity);

    if ($response->listSearchApplicationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudsearchSettingsSearchapplicationsPatch

Updates a search application. **Note:** This API requires an admin account to execute.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchSettingsSearchapplicationsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SearchApplicationInput;
use \OpenAPI\OpenAPI\Models\Shared\DataSourceRestriction;
use \OpenAPI\OpenAPI\Models\Shared\FilterOptions;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Shared\CompositeFilter;
use \OpenAPI\OpenAPI\Models\Shared\CompositeFilterLogicOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\ValueFilter;
use \OpenAPI\OpenAPI\Models\Shared\Value;
use \OpenAPI\OpenAPI\Models\Shared\Date;
use \OpenAPI\OpenAPI\Models\Shared\Source;
use \OpenAPI\OpenAPI\Models\Shared\SourcePredefinedSourceEnum;
use \OpenAPI\OpenAPI\Models\Shared\FacetOptions;
use \OpenAPI\OpenAPI\Models\Shared\IntegerFacetingOptions;
use \OpenAPI\OpenAPI\Models\Shared\SortOptions;
use \OpenAPI\OpenAPI\Models\Shared\SortOptionsSortOrderEnum;
use \OpenAPI\OpenAPI\Models\Shared\QueryInterpretationConfig;
use \OpenAPI\OpenAPI\Models\Shared\ScoringConfig;
use \OpenAPI\OpenAPI\Models\Shared\SourceConfig;
use \OpenAPI\OpenAPI\Models\Shared\SourceCrowdingConfig;
use \OpenAPI\OpenAPI\Models\Shared\SourceScoringConfig;
use \OpenAPI\OpenAPI\Models\Shared\SourceScoringConfigSourceImportanceEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchSettingsSearchapplicationsPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchSettingsSearchapplicationsPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchSettingsSearchapplicationsPatchSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchSettingsSearchapplicationsPatchSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudsearchSettingsSearchapplicationsPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->searchApplicationInput = new SearchApplicationInput();
    $request->searchApplicationInput->dataSourceRestrictions = [
        new DataSourceRestriction(),
        new DataSourceRestriction(),
        new DataSourceRestriction(),
        new DataSourceRestriction(),
    ];
    $request->searchApplicationInput->defaultFacetOptions = [
        new FacetOptions(),
        new FacetOptions(),
        new FacetOptions(),
    ];
    $request->searchApplicationInput->defaultSortOptions = new SortOptions();
    $request->searchApplicationInput->defaultSortOptions->operatorName = 'quod';
    $request->searchApplicationInput->defaultSortOptions->sortOrder = SortOptionsSortOrderEnum::ASCENDING;
    $request->searchApplicationInput->displayName = 'similique';
    $request->searchApplicationInput->enableAuditLog = false;
    $request->searchApplicationInput->name = 'Hugo Kuphal';
    $request->searchApplicationInput->queryInterpretationConfig = new QueryInterpretationConfig();
    $request->searchApplicationInput->queryInterpretationConfig->forceDisableSupplementalResults = false;
    $request->searchApplicationInput->queryInterpretationConfig->forceVerbatimMode = false;
    $request->searchApplicationInput->returnResultThumbnailUrls = false;
    $request->searchApplicationInput->scoringConfig = new ScoringConfig();
    $request->searchApplicationInput->scoringConfig->disableFreshness = false;
    $request->searchApplicationInput->scoringConfig->disablePersonalization = false;
    $request->searchApplicationInput->sourceConfig = [
        new SourceConfig(),
        new SourceConfig(),
        new SourceConfig(),
        new SourceConfig(),
    ];
    $request->accessToken = 'sequi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'impedit';
    $request->fields = 'aut';
    $request->key = 'voluptatibus';
    $request->name = 'Freda Cormier';
    $request->oauthToken = 'doloribus';
    $request->prettyPrint = false;
    $request->quotaUser = 'iusto';
    $request->updateMask = 'eligendi';
    $request->uploadType = 'ducimus';
    $request->uploadProtocol = 'alias';

    $requestSecurity = new CloudsearchSettingsSearchapplicationsPatchSecurity();
    $requestSecurity->option1 = new CloudsearchSettingsSearchapplicationsPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->settings->cloudsearchSettingsSearchapplicationsPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudsearchSettingsSearchapplicationsReset

Resets a search application to default settings. This will return an empty response. **Note:** This API requires an admin account to execute.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchSettingsSearchapplicationsResetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResetSearchApplicationRequest;
use \OpenAPI\OpenAPI\Models\Shared\DebugOptions;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchSettingsSearchapplicationsResetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchSettingsSearchapplicationsResetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchSettingsSearchapplicationsResetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchSettingsSearchapplicationsResetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudsearchSettingsSearchapplicationsResetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->resetSearchApplicationRequest = new ResetSearchApplicationRequest();
    $request->resetSearchApplicationRequest->debugOptions = new DebugOptions();
    $request->resetSearchApplicationRequest->debugOptions->enableDebugging = false;
    $request->accessToken = 'tempora';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ea';
    $request->fields = 'aspernatur';
    $request->key = 'vel';
    $request->name = 'Clifford Dickens';
    $request->oauthToken = 'dicta';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolor';
    $request->uploadType = 'maiores';
    $request->uploadProtocol = 'quasi';

    $requestSecurity = new CloudsearchSettingsSearchapplicationsResetSecurity();
    $requestSecurity->option1 = new CloudsearchSettingsSearchapplicationsResetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->settings->cloudsearchSettingsSearchapplicationsReset($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudsearchSettingsSearchapplicationsUpdate

Updates a search application. **Note:** This API requires an admin account to execute.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchSettingsSearchapplicationsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SearchApplicationInput;
use \OpenAPI\OpenAPI\Models\Shared\DataSourceRestriction;
use \OpenAPI\OpenAPI\Models\Shared\FilterOptions;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Shared\CompositeFilter;
use \OpenAPI\OpenAPI\Models\Shared\CompositeFilterLogicOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\ValueFilter;
use \OpenAPI\OpenAPI\Models\Shared\Value;
use \OpenAPI\OpenAPI\Models\Shared\Date;
use \OpenAPI\OpenAPI\Models\Shared\Source;
use \OpenAPI\OpenAPI\Models\Shared\SourcePredefinedSourceEnum;
use \OpenAPI\OpenAPI\Models\Shared\FacetOptions;
use \OpenAPI\OpenAPI\Models\Shared\IntegerFacetingOptions;
use \OpenAPI\OpenAPI\Models\Shared\SortOptions;
use \OpenAPI\OpenAPI\Models\Shared\SortOptionsSortOrderEnum;
use \OpenAPI\OpenAPI\Models\Shared\QueryInterpretationConfig;
use \OpenAPI\OpenAPI\Models\Shared\ScoringConfig;
use \OpenAPI\OpenAPI\Models\Shared\SourceConfig;
use \OpenAPI\OpenAPI\Models\Shared\SourceCrowdingConfig;
use \OpenAPI\OpenAPI\Models\Shared\SourceScoringConfig;
use \OpenAPI\OpenAPI\Models\Shared\SourceScoringConfigSourceImportanceEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchSettingsSearchapplicationsUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchSettingsSearchapplicationsUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchSettingsSearchapplicationsUpdateSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchSettingsSearchapplicationsUpdateSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudsearchSettingsSearchapplicationsUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->searchApplicationInput = new SearchApplicationInput();
    $request->searchApplicationInput->dataSourceRestrictions = [
        new DataSourceRestriction(),
        new DataSourceRestriction(),
        new DataSourceRestriction(),
        new DataSourceRestriction(),
    ];
    $request->searchApplicationInput->defaultFacetOptions = [
        new FacetOptions(),
        new FacetOptions(),
        new FacetOptions(),
    ];
    $request->searchApplicationInput->defaultSortOptions = new SortOptions();
    $request->searchApplicationInput->defaultSortOptions->operatorName = 'voluptatibus';
    $request->searchApplicationInput->defaultSortOptions->sortOrder = SortOptionsSortOrderEnum::ASCENDING;
    $request->searchApplicationInput->displayName = 'sapiente';
    $request->searchApplicationInput->enableAuditLog = false;
    $request->searchApplicationInput->name = 'Elbert Jenkins';
    $request->searchApplicationInput->queryInterpretationConfig = new QueryInterpretationConfig();
    $request->searchApplicationInput->queryInterpretationConfig->forceDisableSupplementalResults = false;
    $request->searchApplicationInput->queryInterpretationConfig->forceVerbatimMode = false;
    $request->searchApplicationInput->returnResultThumbnailUrls = false;
    $request->searchApplicationInput->scoringConfig = new ScoringConfig();
    $request->searchApplicationInput->scoringConfig->disableFreshness = false;
    $request->searchApplicationInput->scoringConfig->disablePersonalization = false;
    $request->searchApplicationInput->sourceConfig = [
        new SourceConfig(),
        new SourceConfig(),
    ];
    $request->accessToken = 'aliquid';
    $request->alt = AltEnum::JSON;
    $request->callback = 'magnam';
    $request->fields = 'ea';
    $request->key = 'quo';
    $request->name = 'Kate Cole DVM';
    $request->oauthToken = 'libero';
    $request->prettyPrint = false;
    $request->quotaUser = 'aut';
    $request->updateMask = 'aut';
    $request->uploadType = 'deleniti';
    $request->uploadProtocol = 'impedit';

    $requestSecurity = new CloudsearchSettingsSearchapplicationsUpdateSecurity();
    $requestSecurity->option1 = new CloudsearchSettingsSearchapplicationsUpdateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->settings->cloudsearchSettingsSearchapplicationsUpdate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudsearchSettingsUpdateCustomer

Update customer settings. **Note:** This API requires an admin account to execute.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchSettingsUpdateCustomerRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CustomerSettings;
use \OpenAPI\OpenAPI\Models\Shared\AuditLoggingSettings;
use \OpenAPI\OpenAPI\Models\Shared\VPCSettings;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchSettingsUpdateCustomerSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchSettingsUpdateCustomerSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchSettingsUpdateCustomerSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchSettingsUpdateCustomerSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudsearchSettingsUpdateCustomerRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->customerSettings = new CustomerSettings();
    $request->customerSettings->auditLoggingSettings = new AuditLoggingSettings();
    $request->customerSettings->auditLoggingSettings->logAdminReadActions = false;
    $request->customerSettings->auditLoggingSettings->logDataReadActions = false;
    $request->customerSettings->auditLoggingSettings->logDataWriteActions = false;
    $request->customerSettings->auditLoggingSettings->project = 'fugit';
    $request->customerSettings->vpcSettings = new VPCSettings();
    $request->customerSettings->vpcSettings->project = 'accusamus';
    $request->accessToken = 'inventore';
    $request->alt = AltEnum::JSON;
    $request->callback = 'et';
    $request->fields = 'dolorum';
    $request->key = 'laborum';
    $request->oauthToken = 'placeat';
    $request->prettyPrint = false;
    $request->quotaUser = 'velit';
    $request->updateMask = 'eum';
    $request->uploadType = 'autem';
    $request->uploadProtocol = 'nobis';

    $requestSecurity = new CloudsearchSettingsUpdateCustomerSecurity();
    $requestSecurity->option1 = new CloudsearchSettingsUpdateCustomerSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->settings->cloudsearchSettingsUpdateCustomer($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
