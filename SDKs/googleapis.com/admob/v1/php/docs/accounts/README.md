# accounts

### Available Operations

* [admobAccountsAdUnitsList](#admobaccountsadunitslist) - List the ad units under the specified AdMob account.
* [admobAccountsAppsList](#admobaccountsappslist) - List the apps under the specified AdMob account.
* [admobAccountsGet](#admobaccountsget) - Gets information about the specified AdMob publisher account.
* [admobAccountsList](#admobaccountslist) - Lists the AdMob publisher account that was most recently signed in to from the AdMob UI. For more information, see https://support.google.com/admob/answer/10243672.
* [admobAccountsMediationReportGenerate](#admobaccountsmediationreportgenerate) - Generates an AdMob mediation report based on the provided report specification. Returns result of a server-side streaming RPC. The result is returned in a sequence of responses.
* [admobAccountsNetworkReportGenerate](#admobaccountsnetworkreportgenerate) - Generates an AdMob Network report based on the provided report specification. Returns result of a server-side streaming RPC. The result is returned in a sequence of responses.

## admobAccountsAdUnitsList

List the ad units under the specified AdMob account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdmobAccountsAdUnitsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdmobAccountsAdUnitsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdmobAccountsAdUnitsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'debitis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'delectus';
    $request->fields = 'tempora';
    $request->key = 'suscipit';
    $request->oauthToken = 'molestiae';
    $request->pageSize = 791725;
    $request->pageToken = 'placeat';
    $request->parent = 'voluptatum';
    $request->prettyPrint = false;
    $request->quotaUser = 'iusto';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'nisi';

    $requestSecurity = new AdmobAccountsAdUnitsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->admobAccountsAdUnitsList($request, $requestSecurity);

    if ($response->listAdUnitsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## admobAccountsAppsList

List the apps under the specified AdMob account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdmobAccountsAppsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdmobAccountsAppsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdmobAccountsAppsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'temporibus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quis';
    $request->fields = 'veritatis';
    $request->key = 'deserunt';
    $request->oauthToken = 'perferendis';
    $request->pageSize = 368241;
    $request->pageToken = 'repellendus';
    $request->parent = 'sapiente';
    $request->prettyPrint = false;
    $request->quotaUser = 'quo';
    $request->uploadType = 'odit';
    $request->uploadProtocol = 'at';

    $requestSecurity = new AdmobAccountsAppsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->admobAccountsAppsList($request, $requestSecurity);

    if ($response->listAppsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## admobAccountsGet

Gets information about the specified AdMob publisher account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdmobAccountsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdmobAccountsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AdmobAccountsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AdmobAccountsGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdmobAccountsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'maiores';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quod';
    $request->fields = 'quod';
    $request->key = 'esse';
    $request->name = 'Miss Lowell Parisian';
    $request->oauthToken = 'occaecati';
    $request->prettyPrint = false;
    $request->quotaUser = 'fugit';
    $request->uploadType = 'deleniti';
    $request->uploadProtocol = 'hic';

    $requestSecurity = new AdmobAccountsGetSecurity();
    $requestSecurity->option1 = new AdmobAccountsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->admobAccountsGet($request, $requestSecurity);

    if ($response->publisherAccount !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## admobAccountsList

Lists the AdMob publisher account that was most recently signed in to from the AdMob UI. For more information, see https://support.google.com/admob/answer/10243672.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdmobAccountsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdmobAccountsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AdmobAccountsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AdmobAccountsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdmobAccountsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'totam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'commodi';
    $request->fields = 'molestiae';
    $request->key = 'modi';
    $request->oauthToken = 'qui';
    $request->pageSize = 774234;
    $request->pageToken = 'cum';
    $request->prettyPrint = false;
    $request->quotaUser = 'esse';
    $request->uploadType = 'ipsum';
    $request->uploadProtocol = 'excepturi';

    $requestSecurity = new AdmobAccountsListSecurity();
    $requestSecurity->option1 = new AdmobAccountsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->admobAccountsList($request, $requestSecurity);

    if ($response->listPublisherAccountsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## admobAccountsMediationReportGenerate

Generates an AdMob mediation report based on the provided report specification. Returns result of a server-side streaming RPC. The result is returned in a sequence of responses.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdmobAccountsMediationReportGenerateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GenerateMediationReportRequest;
use \OpenAPI\OpenAPI\Models\Shared\MediationReportSpec;
use \OpenAPI\OpenAPI\Models\Shared\DateRange;
use \OpenAPI\OpenAPI\Models\Shared\Date;
use \OpenAPI\OpenAPI\Models\Shared\MediationReportSpecDimensionFilter;
use \OpenAPI\OpenAPI\Models\Shared\MediationReportSpecDimensionFilterDimensionEnum;
use \OpenAPI\OpenAPI\Models\Shared\StringList;
use \OpenAPI\OpenAPI\Models\Shared\MediationReportSpecDimensionsEnum;
use \OpenAPI\OpenAPI\Models\Shared\LocalizationSettings;
use \OpenAPI\OpenAPI\Models\Shared\MediationReportSpecMetricsEnum;
use \OpenAPI\OpenAPI\Models\Shared\MediationReportSpecSortCondition;
use \OpenAPI\OpenAPI\Models\Shared\MediationReportSpecSortConditionDimensionEnum;
use \OpenAPI\OpenAPI\Models\Shared\MediationReportSpecSortConditionMetricEnum;
use \OpenAPI\OpenAPI\Models\Shared\MediationReportSpecSortConditionOrderEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdmobAccountsMediationReportGenerateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AdmobAccountsMediationReportGenerateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AdmobAccountsMediationReportGenerateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdmobAccountsMediationReportGenerateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->generateMediationReportRequest = new GenerateMediationReportRequest();
    $request->generateMediationReportRequest->reportSpec = new MediationReportSpec();
    $request->generateMediationReportRequest->reportSpec->dateRange = new DateRange();
    $request->generateMediationReportRequest->reportSpec->dateRange->endDate = new Date();
    $request->generateMediationReportRequest->reportSpec->dateRange->endDate->day = 18789;
    $request->generateMediationReportRequest->reportSpec->dateRange->endDate->month = 324141;
    $request->generateMediationReportRequest->reportSpec->dateRange->endDate->year = 617636;
    $request->generateMediationReportRequest->reportSpec->dateRange->startDate = new Date();
    $request->generateMediationReportRequest->reportSpec->dateRange->startDate->day = 149675;
    $request->generateMediationReportRequest->reportSpec->dateRange->startDate->month = 612096;
    $request->generateMediationReportRequest->reportSpec->dateRange->startDate->year = 222321;
    $request->generateMediationReportRequest->reportSpec->dimensionFilters = [
        new MediationReportSpecDimensionFilter(),
        new MediationReportSpecDimensionFilter(),
        new MediationReportSpecDimensionFilter(),
    ];
    $request->generateMediationReportRequest->reportSpec->dimensions = [
        MediationReportSpecDimensionsEnum::SERVING_RESTRICTION,
        MediationReportSpecDimensionsEnum::APP_VERSION_NAME,
    ];
    $request->generateMediationReportRequest->reportSpec->localizationSettings = new LocalizationSettings();
    $request->generateMediationReportRequest->reportSpec->localizationSettings->currencyCode = 'fuga';
    $request->generateMediationReportRequest->reportSpec->localizationSettings->languageCode = 'in';
    $request->generateMediationReportRequest->reportSpec->maxReportRows = 359508;
    $request->generateMediationReportRequest->reportSpec->metrics = [
        MediationReportSpecMetricsEnum::ESTIMATED_EARNINGS,
        MediationReportSpecMetricsEnum::OBSERVED_ECPM,
        MediationReportSpecMetricsEnum::MATCHED_REQUESTS,
    ];
    $request->generateMediationReportRequest->reportSpec->sortConditions = [
        new MediationReportSpecSortCondition(),
    ];
    $request->generateMediationReportRequest->reportSpec->timeZone = 'ipsa';
    $request->accessToken = 'reiciendis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'mollitia';
    $request->fields = 'laborum';
    $request->key = 'dolores';
    $request->oauthToken = 'dolorem';
    $request->parent = 'corporis';
    $request->prettyPrint = false;
    $request->quotaUser = 'explicabo';
    $request->uploadType = 'nobis';
    $request->uploadProtocol = 'enim';

    $requestSecurity = new AdmobAccountsMediationReportGenerateSecurity();
    $requestSecurity->option1 = new AdmobAccountsMediationReportGenerateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->admobAccountsMediationReportGenerate($request, $requestSecurity);

    if ($response->generateMediationReportResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## admobAccountsNetworkReportGenerate

Generates an AdMob Network report based on the provided report specification. Returns result of a server-side streaming RPC. The result is returned in a sequence of responses.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdmobAccountsNetworkReportGenerateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GenerateNetworkReportRequest;
use \OpenAPI\OpenAPI\Models\Shared\NetworkReportSpec;
use \OpenAPI\OpenAPI\Models\Shared\DateRange;
use \OpenAPI\OpenAPI\Models\Shared\Date;
use \OpenAPI\OpenAPI\Models\Shared\NetworkReportSpecDimensionFilter;
use \OpenAPI\OpenAPI\Models\Shared\NetworkReportSpecDimensionFilterDimensionEnum;
use \OpenAPI\OpenAPI\Models\Shared\StringList;
use \OpenAPI\OpenAPI\Models\Shared\NetworkReportSpecDimensionsEnum;
use \OpenAPI\OpenAPI\Models\Shared\LocalizationSettings;
use \OpenAPI\OpenAPI\Models\Shared\NetworkReportSpecMetricsEnum;
use \OpenAPI\OpenAPI\Models\Shared\NetworkReportSpecSortCondition;
use \OpenAPI\OpenAPI\Models\Shared\NetworkReportSpecSortConditionDimensionEnum;
use \OpenAPI\OpenAPI\Models\Shared\NetworkReportSpecSortConditionMetricEnum;
use \OpenAPI\OpenAPI\Models\Shared\NetworkReportSpecSortConditionOrderEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdmobAccountsNetworkReportGenerateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AdmobAccountsNetworkReportGenerateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AdmobAccountsNetworkReportGenerateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdmobAccountsNetworkReportGenerateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->generateNetworkReportRequest = new GenerateNetworkReportRequest();
    $request->generateNetworkReportRequest->reportSpec = new NetworkReportSpec();
    $request->generateNetworkReportRequest->reportSpec->dateRange = new DateRange();
    $request->generateNetworkReportRequest->reportSpec->dateRange->endDate = new Date();
    $request->generateNetworkReportRequest->reportSpec->dateRange->endDate->day = 363711;
    $request->generateNetworkReportRequest->reportSpec->dateRange->endDate->month = 325047;
    $request->generateNetworkReportRequest->reportSpec->dateRange->endDate->year = 570197;
    $request->generateNetworkReportRequest->reportSpec->dateRange->startDate = new Date();
    $request->generateNetworkReportRequest->reportSpec->dateRange->startDate->day = 38425;
    $request->generateNetworkReportRequest->reportSpec->dateRange->startDate->month = 438601;
    $request->generateNetworkReportRequest->reportSpec->dateRange->startDate->year = 634274;
    $request->generateNetworkReportRequest->reportSpec->dimensionFilters = [
        new NetworkReportSpecDimensionFilter(),
        new NetworkReportSpecDimensionFilter(),
        new NetworkReportSpecDimensionFilter(),
        new NetworkReportSpecDimensionFilter(),
    ];
    $request->generateNetworkReportRequest->reportSpec->dimensions = [
        NetworkReportSpecDimensionsEnum::DATE,
        NetworkReportSpecDimensionsEnum::PLATFORM,
        NetworkReportSpecDimensionsEnum::MONTH,
        NetworkReportSpecDimensionsEnum::FORMAT,
    ];
    $request->generateNetworkReportRequest->reportSpec->localizationSettings = new LocalizationSettings();
    $request->generateNetworkReportRequest->reportSpec->localizationSettings->currencyCode = 'consequuntur';
    $request->generateNetworkReportRequest->reportSpec->localizationSettings->languageCode = 'repellat';
    $request->generateNetworkReportRequest->reportSpec->maxReportRows = 653108;
    $request->generateNetworkReportRequest->reportSpec->metrics = [
        NetworkReportSpecMetricsEnum::CLICKS,
        NetworkReportSpecMetricsEnum::IMPRESSIONS,
        NetworkReportSpecMetricsEnum::IMPRESSIONS,
    ];
    $request->generateNetworkReportRequest->reportSpec->sortConditions = [
        new NetworkReportSpecSortCondition(),
        new NetworkReportSpecSortCondition(),
    ];
    $request->generateNetworkReportRequest->reportSpec->timeZone = 'velit';
    $request->accessToken = 'error';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quis';
    $request->fields = 'vitae';
    $request->key = 'laborum';
    $request->oauthToken = 'animi';
    $request->parent = 'enim';
    $request->prettyPrint = false;
    $request->quotaUser = 'odit';
    $request->uploadType = 'quo';
    $request->uploadProtocol = 'sequi';

    $requestSecurity = new AdmobAccountsNetworkReportGenerateSecurity();
    $requestSecurity->option1 = new AdmobAccountsNetworkReportGenerateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->admobAccountsNetworkReportGenerate($request, $requestSecurity);

    if ($response->generateNetworkReportResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
