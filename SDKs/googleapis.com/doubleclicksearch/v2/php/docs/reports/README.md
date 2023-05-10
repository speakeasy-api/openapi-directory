# reports

### Available Operations

* [doubleclicksearchReportsGenerate](#doubleclicksearchreportsgenerate) - Generates and returns a report immediately.
* [doubleclicksearchReportsGet](#doubleclicksearchreportsget) - Polls for the status of a report request.
* [doubleclicksearchReportsGetFile](#doubleclicksearchreportsgetfile) - Downloads a report file encoded in UTF-8.
* [doubleclicksearchReportsGetIdMappingFile](#doubleclicksearchreportsgetidmappingfile) - Downloads a csv file(encoded in UTF-8) that contains ID mappings between legacy SA360 and new SA360. The file includes all children entities of the given advertiser(e.g. engine accounts, campaigns, ad groups, etc.) that exist in both legacy SA360 and new SA360.
* [doubleclicksearchReportsRequest](#doubleclicksearchreportsrequest) - Inserts a report request into the reporting system.

## doubleclicksearchReportsGenerate

Generates and returns a report immediately.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DoubleclicksearchReportsGenerateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReportRequest;
use \OpenAPI\OpenAPI\Models\Shared\ReportApiColumnSpec;
use \OpenAPI\OpenAPI\Models\Shared\ReportRequestFilters;
use \OpenAPI\OpenAPI\Models\Shared\ReportRequestOrderBy;
use \OpenAPI\OpenAPI\Models\Shared\ReportRequestReportScope;
use \OpenAPI\OpenAPI\Models\Shared\ReportRequestTimeRange;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DoubleclicksearchReportsGenerateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DoubleclicksearchReportsGenerateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->reportRequest = new ReportRequest();
    $request->reportRequest->columns = [
        new ReportApiColumnSpec(),
        new ReportApiColumnSpec(),
    ];
    $request->reportRequest->downloadFormat = 'culpa';
    $request->reportRequest->filters = [
        new ReportRequestFilters(),
        new ReportRequestFilters(),
        new ReportRequestFilters(),
        new ReportRequestFilters(),
    ];
    $request->reportRequest->includeDeletedEntities = false;
    $request->reportRequest->includeRemovedEntities = false;
    $request->reportRequest->maxRowsPerFile = 958950;
    $request->reportRequest->orderBy = [
        new ReportRequestOrderBy(),
    ];
    $request->reportRequest->reportScope = new ReportRequestReportScope();
    $request->reportRequest->reportScope->adGroupId = 'mollitia';
    $request->reportRequest->reportScope->adId = 'dolorem';
    $request->reportRequest->reportScope->advertiserId = 'culpa';
    $request->reportRequest->reportScope->agencyId = 'consequuntur';
    $request->reportRequest->reportScope->campaignId = 'repellat';
    $request->reportRequest->reportScope->engineAccountId = 'mollitia';
    $request->reportRequest->reportScope->keywordId = 'occaecati';
    $request->reportRequest->reportType = 'numquam';
    $request->reportRequest->rowCount = 414369;
    $request->reportRequest->startRow = 466311;
    $request->reportRequest->statisticsCurrency = 'molestiae';
    $request->reportRequest->timeRange = new ReportRequestTimeRange();
    $request->reportRequest->timeRange->changedAttributesSinceTimestamp = 'velit';
    $request->reportRequest->timeRange->changedMetricsSinceTimestamp = 'error';
    $request->reportRequest->timeRange->endDate = 'quia';
    $request->reportRequest->timeRange->startDate = 'quis';
    $request->reportRequest->verifySingleTimeZone = false;
    $request->accessToken = 'vitae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'animi';
    $request->fields = 'enim';
    $request->key = 'odit';
    $request->oauthToken = 'quo';
    $request->prettyPrint = false;
    $request->quotaUser = 'sequi';
    $request->uploadType = 'tenetur';
    $request->uploadProtocol = 'ipsam';

    $requestSecurity = new DoubleclicksearchReportsGenerateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->reports->doubleclicksearchReportsGenerate($request, $requestSecurity);

    if ($response->report !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## doubleclicksearchReportsGet

Polls for the status of a report request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DoubleclicksearchReportsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DoubleclicksearchReportsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DoubleclicksearchReportsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'possimus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quasi';
    $request->fields = 'error';
    $request->key = 'temporibus';
    $request->oauthToken = 'laborum';
    $request->prettyPrint = false;
    $request->quotaUser = 'quasi';
    $request->reportId = 'reiciendis';
    $request->uploadType = 'voluptatibus';
    $request->uploadProtocol = 'vero';

    $requestSecurity = new DoubleclicksearchReportsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->reports->doubleclicksearchReportsGet($request, $requestSecurity);

    if ($response->report !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## doubleclicksearchReportsGetFile

Downloads a report file encoded in UTF-8.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DoubleclicksearchReportsGetFileRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DoubleclicksearchReportsGetFileSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DoubleclicksearchReportsGetFileRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'praesentium';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ipsa';
    $request->fields = 'omnis';
    $request->key = 'voluptate';
    $request->oauthToken = 'cum';
    $request->prettyPrint = false;
    $request->quotaUser = 'perferendis';
    $request->reportFragment = 39187;
    $request->reportId = 'reprehenderit';
    $request->uploadType = 'ut';
    $request->uploadProtocol = 'maiores';

    $requestSecurity = new DoubleclicksearchReportsGetFileSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->reports->doubleclicksearchReportsGetFile($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## doubleclicksearchReportsGetIdMappingFile

Downloads a csv file(encoded in UTF-8) that contains ID mappings between legacy SA360 and new SA360. The file includes all children entities of the given advertiser(e.g. engine accounts, campaigns, ad groups, etc.) that exist in both legacy SA360 and new SA360.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DoubleclicksearchReportsGetIdMappingFileRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DoubleclicksearchReportsGetIdMappingFileSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DoubleclicksearchReportsGetIdMappingFileRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'corporis';
    $request->advertiserId = 'dolore';
    $request->agencyId = 'iusto';
    $request->alt = AltEnum::JSON;
    $request->callback = 'harum';
    $request->fields = 'enim';
    $request->key = 'accusamus';
    $request->oauthToken = 'commodi';
    $request->prettyPrint = false;
    $request->quotaUser = 'repudiandae';
    $request->uploadType = 'quae';
    $request->uploadProtocol = 'ipsum';

    $requestSecurity = new DoubleclicksearchReportsGetIdMappingFileSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->reports->doubleclicksearchReportsGetIdMappingFile($request, $requestSecurity);

    if ($response->idMappingFile !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## doubleclicksearchReportsRequest

Inserts a report request into the reporting system.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DoubleclicksearchReportsRequestRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReportRequest;
use \OpenAPI\OpenAPI\Models\Shared\ReportApiColumnSpec;
use \OpenAPI\OpenAPI\Models\Shared\ReportRequestFilters;
use \OpenAPI\OpenAPI\Models\Shared\ReportRequestOrderBy;
use \OpenAPI\OpenAPI\Models\Shared\ReportRequestReportScope;
use \OpenAPI\OpenAPI\Models\Shared\ReportRequestTimeRange;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DoubleclicksearchReportsRequestSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DoubleclicksearchReportsRequestRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->reportRequest = new ReportRequest();
    $request->reportRequest->columns = [
        new ReportApiColumnSpec(),
        new ReportApiColumnSpec(),
        new ReportApiColumnSpec(),
    ];
    $request->reportRequest->downloadFormat = 'excepturi';
    $request->reportRequest->filters = [
        new ReportRequestFilters(),
        new ReportRequestFilters(),
        new ReportRequestFilters(),
        new ReportRequestFilters(),
    ];
    $request->reportRequest->includeDeletedEntities = false;
    $request->reportRequest->includeRemovedEntities = false;
    $request->reportRequest->maxRowsPerFile = 265389;
    $request->reportRequest->orderBy = [
        new ReportRequestOrderBy(),
        new ReportRequestOrderBy(),
        new ReportRequestOrderBy(),
    ];
    $request->reportRequest->reportScope = new ReportRequestReportScope();
    $request->reportRequest->reportScope->adGroupId = 'rem';
    $request->reportRequest->reportScope->adId = 'voluptates';
    $request->reportRequest->reportScope->advertiserId = 'quasi';
    $request->reportRequest->reportScope->agencyId = 'repudiandae';
    $request->reportRequest->reportScope->campaignId = 'sint';
    $request->reportRequest->reportScope->engineAccountId = 'veritatis';
    $request->reportRequest->reportScope->keywordId = 'itaque';
    $request->reportRequest->reportType = 'incidunt';
    $request->reportRequest->rowCount = 318569;
    $request->reportRequest->startRow = 9356;
    $request->reportRequest->statisticsCurrency = 'est';
    $request->reportRequest->timeRange = new ReportRequestTimeRange();
    $request->reportRequest->timeRange->changedAttributesSinceTimestamp = 'quibusdam';
    $request->reportRequest->timeRange->changedMetricsSinceTimestamp = 'explicabo';
    $request->reportRequest->timeRange->endDate = 'deserunt';
    $request->reportRequest->timeRange->startDate = 'distinctio';
    $request->reportRequest->verifySingleTimeZone = false;
    $request->accessToken = 'quibusdam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'modi';
    $request->fields = 'qui';
    $request->key = 'aliquid';
    $request->oauthToken = 'cupiditate';
    $request->prettyPrint = false;
    $request->quotaUser = 'quos';
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'magni';

    $requestSecurity = new DoubleclicksearchReportsRequestSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->reports->doubleclicksearchReportsRequest($request, $requestSecurity);

    if ($response->report !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
