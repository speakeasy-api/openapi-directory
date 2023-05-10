# accounts

### Available Operations

* [admobAccountsAdSourcesList](#admobaccountsadsourceslist) - List the ad sources.
* [admobAccountsAdUnitsList](#admobaccountsadunitslist) - List the ad units under the specified AdMob account.
* [admobAccountsAppsList](#admobaccountsappslist) - List the apps under the specified AdMob account.
* [admobAccountsGet](#admobaccountsget) - Gets information about the specified AdMob publisher account.
* [admobAccountsList](#admobaccountslist) - Lists the AdMob publisher account that was most recently signed in to from the AdMob UI. For more information, see https://support.google.com/admob/answer/10243672.
* [admobAccountsMediationReportGenerate](#admobaccountsmediationreportgenerate) - Generates an AdMob mediation report based on the provided report specification. Returns result of a server-side streaming RPC. The result is returned in a sequence of responses.
* [admobAccountsNetworkReportGenerate](#admobaccountsnetworkreportgenerate) - Generates an AdMob Network report based on the provided report specification. Returns result of a server-side streaming RPC. The result is returned in a sequence of responses.

## admobAccountsAdSourcesList

List the ad sources.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdmobAccountsAdSourcesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdmobAccountsAdSourcesListRequest();
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

    $response = $sdk->accounts->admobAccountsAdSourcesList($request);

    if ($response->listAdSourcesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

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
    $request->accessToken = 'maiores';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quod';
    $request->fields = 'quod';
    $request->key = 'esse';
    $request->oauthToken = 'totam';
    $request->pageSize = 780529;
    $request->pageToken = 'dolorum';
    $request->parent = 'dicta';
    $request->prettyPrint = false;
    $request->quotaUser = 'nam';
    $request->uploadType = 'officia';
    $request->uploadProtocol = 'occaecati';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'deleniti';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'optio';
    $request->fields = 'totam';
    $request->key = 'beatae';
    $request->name = 'Tanya Gleason';
    $request->oauthToken = 'cum';
    $request->prettyPrint = false;
    $request->quotaUser = 'esse';
    $request->uploadType = 'ipsum';
    $request->uploadProtocol = 'excepturi';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'perferendis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'natus';
    $request->fields = 'sed';
    $request->key = 'iste';
    $request->oauthToken = 'dolor';
    $request->pageSize = 616934;
    $request->pageToken = 'laboriosam';
    $request->prettyPrint = false;
    $request->quotaUser = 'hic';
    $request->uploadType = 'saepe';
    $request->uploadProtocol = 'fuga';

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
    $request->generateMediationReportRequest->reportSpec->dateRange->endDate->day = 359508;
    $request->generateMediationReportRequest->reportSpec->dateRange->endDate->month = 613064;
    $request->generateMediationReportRequest->reportSpec->dateRange->endDate->year = 437032;
    $request->generateMediationReportRequest->reportSpec->dateRange->startDate = new Date();
    $request->generateMediationReportRequest->reportSpec->dateRange->startDate->day = 902349;
    $request->generateMediationReportRequest->reportSpec->dateRange->startDate->month = 697631;
    $request->generateMediationReportRequest->reportSpec->dateRange->startDate->year = 99280;
    $request->generateMediationReportRequest->reportSpec->dimensionFilters = [
        new MediationReportSpecDimensionFilter(),
    ];
    $request->generateMediationReportRequest->reportSpec->dimensions = [
        MediationReportSpecDimensionsEnum::FORMAT,
        MediationReportSpecDimensionsEnum::FORMAT,
        MediationReportSpecDimensionsEnum::FORMAT,
        MediationReportSpecDimensionsEnum::MONTH,
    ];
    $request->generateMediationReportRequest->reportSpec->localizationSettings = new LocalizationSettings();
    $request->generateMediationReportRequest->reportSpec->localizationSettings->currencyCode = 'dolorem';
    $request->generateMediationReportRequest->reportSpec->localizationSettings->languageCode = 'corporis';
    $request->generateMediationReportRequest->reportSpec->maxReportRows = 128926;
    $request->generateMediationReportRequest->reportSpec->metrics = [
        MediationReportSpecMetricsEnum::CLICKS,
        MediationReportSpecMetricsEnum::IMPRESSION_CTR,
        MediationReportSpecMetricsEnum::ESTIMATED_EARNINGS,
        MediationReportSpecMetricsEnum::CLICKS,
    ];
    $request->generateMediationReportRequest->reportSpec->sortConditions = [
        new MediationReportSpecSortCondition(),
        new MediationReportSpecSortCondition(),
        new MediationReportSpecSortCondition(),
    ];
    $request->generateMediationReportRequest->reportSpec->timeZone = 'accusantium';
    $request->accessToken = 'iure';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'doloribus';
    $request->fields = 'sapiente';
    $request->key = 'architecto';
    $request->oauthToken = 'mollitia';
    $request->parent = 'dolorem';
    $request->prettyPrint = false;
    $request->quotaUser = 'culpa';
    $request->uploadType = 'consequuntur';
    $request->uploadProtocol = 'repellat';

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
    $request->generateNetworkReportRequest->reportSpec->dateRange->endDate->day = 581850;
    $request->generateNetworkReportRequest->reportSpec->dateRange->endDate->month = 253291;
    $request->generateNetworkReportRequest->reportSpec->dateRange->endDate->year = 414369;
    $request->generateNetworkReportRequest->reportSpec->dateRange->startDate = new Date();
    $request->generateNetworkReportRequest->reportSpec->dateRange->startDate->day = 466311;
    $request->generateNetworkReportRequest->reportSpec->dateRange->startDate->month = 474697;
    $request->generateNetworkReportRequest->reportSpec->dateRange->startDate->year = 244425;
    $request->generateNetworkReportRequest->reportSpec->dimensionFilters = [
        new NetworkReportSpecDimensionFilter(),
        new NetworkReportSpecDimensionFilter(),
        new NetworkReportSpecDimensionFilter(),
    ];
    $request->generateNetworkReportRequest->reportSpec->dimensions = [
        NetworkReportSpecDimensionsEnum::AD_UNIT,
    ];
    $request->generateNetworkReportRequest->reportSpec->localizationSettings = new LocalizationSettings();
    $request->generateNetworkReportRequest->reportSpec->localizationSettings->currencyCode = 'vitae';
    $request->generateNetworkReportRequest->reportSpec->localizationSettings->languageCode = 'laborum';
    $request->generateNetworkReportRequest->reportSpec->maxReportRows = 656330;
    $request->generateNetworkReportRequest->reportSpec->metrics = [
        NetworkReportSpecMetricsEnum::AD_REQUESTS,
        NetworkReportSpecMetricsEnum::MATCHED_REQUESTS,
    ];
    $request->generateNetworkReportRequest->reportSpec->sortConditions = [
        new NetworkReportSpecSortCondition(),
    ];
    $request->generateNetworkReportRequest->reportSpec->timeZone = 'tenetur';
    $request->accessToken = 'ipsam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'possimus';
    $request->fields = 'aut';
    $request->key = 'quasi';
    $request->oauthToken = 'error';
    $request->parent = 'temporibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'laborum';
    $request->uploadType = 'quasi';
    $request->uploadProtocol = 'reiciendis';

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
