# bidders

### Available Operations

* [adexchangebuyer2BiddersFilterSetsBidMetricsList](#adexchangebuyer2biddersfiltersetsbidmetricslist) - Lists all metrics that are measured in terms of number of bids.
* [adexchangebuyer2BiddersFilterSetsBidResponseErrorsList](#adexchangebuyer2biddersfiltersetsbidresponseerrorslist) - List all errors that occurred in bid responses, with the number of bid responses affected for each reason.
* [adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsList](#adexchangebuyer2biddersfiltersetsbidresponseswithoutbidslist) - List all reasons for which bid responses were considered to have no applicable bids, with the number of bid responses affected for each reason.
* [adexchangebuyer2BiddersFilterSetsCreate](#adexchangebuyer2biddersfiltersetscreate) - Creates the specified filter set for the account with the given account ID.
* [adexchangebuyer2BiddersFilterSetsDelete](#adexchangebuyer2biddersfiltersetsdelete) - Deletes the requested filter set from the account with the given account ID.
* [adexchangebuyer2BiddersFilterSetsFilteredBidRequestsList](#adexchangebuyer2biddersfiltersetsfilteredbidrequestslist) - List all reasons that caused a bid request not to be sent for an impression, with the number of bid requests not sent for each reason.
* [adexchangebuyer2BiddersFilterSetsFilteredBidsCreativesList](#adexchangebuyer2biddersfiltersetsfilteredbidscreativeslist) - List all creatives associated with a specific reason for which bids were filtered, with the number of bids filtered for each creative.
* [adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsList](#adexchangebuyer2biddersfiltersetsfilteredbidsdetailslist) - List all details associated with a specific reason for which bids were filtered, with the number of bids filtered for each detail.
* [adexchangebuyer2BiddersFilterSetsFilteredBidsList](#adexchangebuyer2biddersfiltersetsfilteredbidslist) - List all reasons for which bids were filtered, with the number of bids filtered for each reason.
* [adexchangebuyer2BiddersFilterSetsGet](#adexchangebuyer2biddersfiltersetsget) - Retrieves the requested filter set for the account with the given account ID.
* [adexchangebuyer2BiddersFilterSetsImpressionMetricsList](#adexchangebuyer2biddersfiltersetsimpressionmetricslist) - Lists all metrics that are measured in terms of number of impressions.
* [adexchangebuyer2BiddersFilterSetsList](#adexchangebuyer2biddersfiltersetslist) - Lists all filter sets for the account with the given account ID.
* [adexchangebuyer2BiddersFilterSetsLosingBidsList](#adexchangebuyer2biddersfiltersetslosingbidslist) - List all reasons for which bids lost in the auction, with the number of bids that lost for each reason.
* [adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsList](#adexchangebuyer2biddersfiltersetsnonbillablewinningbidslist) - List all reasons for which winning bids were not billable, with the number of bids not billed for each reason.

## adexchangebuyer2BiddersFilterSetsBidMetricsList

Lists all metrics that are measured in terms of number of bids.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2BiddersFilterSetsBidMetricsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2BiddersFilterSetsBidMetricsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Adexchangebuyer2BiddersFilterSetsBidMetricsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ratione';
    $request->alt = AltEnum::JSON;
    $request->callback = 'saepe';
    $request->fields = 'occaecati';
    $request->filterSetName = 'atque';
    $request->key = 'et';
    $request->oauthToken = 'esse';
    $request->pageSize = 910545;
    $request->pageToken = 'accusamus';
    $request->prettyPrint = false;
    $request->quotaUser = 'veritatis';
    $request->uploadType = 'esse';
    $request->uploadProtocol = 'quod';

    $requestSecurity = new Adexchangebuyer2BiddersFilterSetsBidMetricsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->bidders->adexchangebuyer2BiddersFilterSetsBidMetricsList($request, $requestSecurity);

    if ($response->listBidMetricsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adexchangebuyer2BiddersFilterSetsBidResponseErrorsList

List all errors that occurred in bid responses, with the number of bid responses affected for each reason.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'vero';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quasi';
    $request->fields = 'saepe';
    $request->filterSetName = 'vel';
    $request->key = 'harum';
    $request->oauthToken = 'molestiae';
    $request->pageSize = 699622;
    $request->pageToken = 'occaecati';
    $request->prettyPrint = false;
    $request->quotaUser = 'minima';
    $request->uploadType = 'distinctio';
    $request->uploadProtocol = 'eligendi';

    $requestSecurity = new Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->bidders->adexchangebuyer2BiddersFilterSetsBidResponseErrorsList($request, $requestSecurity);

    if ($response->listBidResponseErrorsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsList

List all reasons for which bid responses were considered to have no applicable bids, with the number of bid responses affected for each reason.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'culpa';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'adipisci';
    $request->fields = 'cumque';
    $request->filterSetName = 'consequuntur';
    $request->key = 'consequatur';
    $request->oauthToken = 'minus';
    $request->pageSize = 308286;
    $request->pageToken = 'sapiente';
    $request->prettyPrint = false;
    $request->quotaUser = 'consectetur';
    $request->uploadType = 'esse';
    $request->uploadProtocol = 'blanditiis';

    $requestSecurity = new Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->bidders->adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsList($request, $requestSecurity);

    if ($response->listBidResponsesWithoutBidsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adexchangebuyer2BiddersFilterSetsCreate

Creates the specified filter set for the account with the given account ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2BiddersFilterSetsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\FilterSet;
use \OpenAPI\OpenAPI\Models\Shared\AbsoluteDateRange;
use \OpenAPI\OpenAPI\Models\Shared\Date;
use \OpenAPI\OpenAPI\Models\Shared\FilterSetBreakdownDimensionsEnum;
use \OpenAPI\OpenAPI\Models\Shared\FilterSetEnvironmentEnum;
use \OpenAPI\OpenAPI\Models\Shared\FilterSetFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\FilterSetFormatsEnum;
use \OpenAPI\OpenAPI\Models\Shared\FilterSetPlatformsEnum;
use \OpenAPI\OpenAPI\Models\Shared\RealtimeTimeRange;
use \OpenAPI\OpenAPI\Models\Shared\RelativeDateRange;
use \OpenAPI\OpenAPI\Models\Shared\FilterSetTimeSeriesGranularityEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2BiddersFilterSetsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Adexchangebuyer2BiddersFilterSetsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->filterSet = new FilterSet();
    $request->filterSet->absoluteDateRange = new AbsoluteDateRange();
    $request->filterSet->absoluteDateRange->endDate = new Date();
    $request->filterSet->absoluteDateRange->endDate->day = 953722;
    $request->filterSet->absoluteDateRange->endDate->month = 857723;
    $request->filterSet->absoluteDateRange->endDate->year = 557811;
    $request->filterSet->absoluteDateRange->startDate = new Date();
    $request->filterSet->absoluteDateRange->startDate->day = 457223;
    $request->filterSet->absoluteDateRange->startDate->month = 97468;
    $request->filterSet->absoluteDateRange->startDate->year = 951875;
    $request->filterSet->breakdownDimensions = [
        FilterSetBreakdownDimensionsEnum::PUBLISHER_IDENTIFIER,
        FilterSetBreakdownDimensionsEnum::PUBLISHER_IDENTIFIER,
        FilterSetBreakdownDimensionsEnum::PUBLISHER_IDENTIFIER,
    ];
    $request->filterSet->creativeId = 'quia';
    $request->filterSet->dealId = 'eveniet';
    $request->filterSet->environment = FilterSetEnvironmentEnum::APP;
    $request->filterSet->format = FilterSetFormatEnum::NON_NATIVE_VIDEO;
    $request->filterSet->formats = [
        FilterSetFormatsEnum::FORMAT_UNSPECIFIED,
    ];
    $request->filterSet->name = 'Hattie Nader';
    $request->filterSet->platforms = [
        FilterSetPlatformsEnum::MOBILE,
    ];
    $request->filterSet->publisherIdentifiers = [
        'in',
        'eius',
    ];
    $request->filterSet->realtimeTimeRange = new RealtimeTimeRange();
    $request->filterSet->realtimeTimeRange->startTimestamp = 'libero';
    $request->filterSet->relativeDateRange = new RelativeDateRange();
    $request->filterSet->relativeDateRange->durationDays = 849039;
    $request->filterSet->relativeDateRange->offsetDays = 742238;
    $request->filterSet->sellerNetworkIds = [
        306986,
    ];
    $request->filterSet->timeSeriesGranularity = FilterSetTimeSeriesGranularityEnum::DAILY;
    $request->accessToken = 'dicta';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'reprehenderit';
    $request->fields = 'ullam';
    $request->isTransient = false;
    $request->key = 'nisi';
    $request->oauthToken = 'aut';
    $request->ownerName = 'voluptatum';
    $request->prettyPrint = false;
    $request->quotaUser = 'qui';
    $request->uploadType = 'quibusdam';
    $request->uploadProtocol = 'ex';

    $requestSecurity = new Adexchangebuyer2BiddersFilterSetsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->bidders->adexchangebuyer2BiddersFilterSetsCreate($request, $requestSecurity);

    if ($response->filterSet !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adexchangebuyer2BiddersFilterSetsDelete

Deletes the requested filter set from the account with the given account ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2BiddersFilterSetsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2BiddersFilterSetsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Adexchangebuyer2BiddersFilterSetsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'itaque';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'architecto';
    $request->fields = 'omnis';
    $request->key = 'tenetur';
    $request->name = 'Lynette Bosco II';
    $request->oauthToken = 'veritatis';
    $request->prettyPrint = false;
    $request->quotaUser = 'consectetur';
    $request->uploadType = 'adipisci';
    $request->uploadProtocol = 'iste';

    $requestSecurity = new Adexchangebuyer2BiddersFilterSetsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->bidders->adexchangebuyer2BiddersFilterSetsDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adexchangebuyer2BiddersFilterSetsFilteredBidRequestsList

List all reasons that caused a bid request not to be sent for an impression, with the number of bid requests not sent for each reason.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2BiddersFilterSetsFilteredBidRequestsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2BiddersFilterSetsFilteredBidRequestsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Adexchangebuyer2BiddersFilterSetsFilteredBidRequestsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'accusantium';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aut';
    $request->fields = 'laudantium';
    $request->filterSetName = 'eum';
    $request->key = 'mollitia';
    $request->oauthToken = 'ab';
    $request->pageSize = 544591;
    $request->pageToken = 'non';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptatem';
    $request->uploadType = 'dolor';
    $request->uploadProtocol = 'occaecati';

    $requestSecurity = new Adexchangebuyer2BiddersFilterSetsFilteredBidRequestsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->bidders->adexchangebuyer2BiddersFilterSetsFilteredBidRequestsList($request, $requestSecurity);

    if ($response->listFilteredBidRequestsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adexchangebuyer2BiddersFilterSetsFilteredBidsCreativesList

List all creatives associated with a specific reason for which bids were filtered, with the number of bids filtered for each creative.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2BiddersFilterSetsFilteredBidsCreativesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2BiddersFilterSetsFilteredBidsCreativesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Adexchangebuyer2BiddersFilterSetsFilteredBidsCreativesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'impedit';
    $request->alt = AltEnum::JSON;
    $request->callback = 'voluptas';
    $request->creativeStatusId = 12036;
    $request->fields = 'dignissimos';
    $request->filterSetName = 'dicta';
    $request->key = 'maiores';
    $request->oauthToken = 'natus';
    $request->pageSize = 244651;
    $request->pageToken = 'voluptatibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptas';
    $request->uploadType = 'asperiores';
    $request->uploadProtocol = 'aperiam';

    $requestSecurity = new Adexchangebuyer2BiddersFilterSetsFilteredBidsCreativesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->bidders->adexchangebuyer2BiddersFilterSetsFilteredBidsCreativesList($request, $requestSecurity);

    if ($response->listCreativeStatusBreakdownByCreativeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsList

List all details associated with a specific reason for which bids were filtered, with the number of bids filtered for each detail.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quaerat';
    $request->alt = AltEnum::JSON;
    $request->callback = 'repellendus';
    $request->creativeStatusId = 638762;
    $request->fields = 'maxime';
    $request->filterSetName = 'dignissimos';
    $request->key = 'officia';
    $request->oauthToken = 'asperiores';
    $request->pageSize = 368102;
    $request->pageToken = 'quae';
    $request->prettyPrint = false;
    $request->quotaUser = 'quaerat';
    $request->uploadType = 'porro';
    $request->uploadProtocol = 'quod';

    $requestSecurity = new Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->bidders->adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsList($request, $requestSecurity);

    if ($response->listCreativeStatusBreakdownByDetailResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adexchangebuyer2BiddersFilterSetsFilteredBidsList

List all reasons for which bids were filtered, with the number of bids filtered for each reason.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2BiddersFilterSetsFilteredBidsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2BiddersFilterSetsFilteredBidsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Adexchangebuyer2BiddersFilterSetsFilteredBidsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ab';
    $request->alt = AltEnum::JSON;
    $request->callback = 'fuga';
    $request->fields = 'id';
    $request->filterSetName = 'suscipit';
    $request->key = 'velit';
    $request->oauthToken = 'culpa';
    $request->pageSize = 665859;
    $request->pageToken = 'recusandae';
    $request->prettyPrint = false;
    $request->quotaUser = 'totam';
    $request->uploadType = 'fugiat';
    $request->uploadProtocol = 'vel';

    $requestSecurity = new Adexchangebuyer2BiddersFilterSetsFilteredBidsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->bidders->adexchangebuyer2BiddersFilterSetsFilteredBidsList($request, $requestSecurity);

    if ($response->listFilteredBidsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adexchangebuyer2BiddersFilterSetsGet

Retrieves the requested filter set for the account with the given account ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2BiddersFilterSetsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2BiddersFilterSetsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Adexchangebuyer2BiddersFilterSetsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quos';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'labore';
    $request->fields = 'possimus';
    $request->key = 'facilis';
    $request->name = 'Leslie King';
    $request->oauthToken = 'assumenda';
    $request->prettyPrint = false;
    $request->quotaUser = 'nemo';
    $request->uploadType = 'recusandae';
    $request->uploadProtocol = 'aliquid';

    $requestSecurity = new Adexchangebuyer2BiddersFilterSetsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->bidders->adexchangebuyer2BiddersFilterSetsGet($request, $requestSecurity);

    if ($response->filterSet !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adexchangebuyer2BiddersFilterSetsImpressionMetricsList

Lists all metrics that are measured in terms of number of impressions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2BiddersFilterSetsImpressionMetricsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2BiddersFilterSetsImpressionMetricsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Adexchangebuyer2BiddersFilterSetsImpressionMetricsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'cum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'in';
    $request->fields = 'exercitationem';
    $request->filterSetName = 'earum';
    $request->key = 'facere';
    $request->oauthToken = 'numquam';
    $request->pageSize = 985492;
    $request->pageToken = 'suscipit';
    $request->prettyPrint = false;
    $request->quotaUser = 'reiciendis';
    $request->uploadType = 'quidem';
    $request->uploadProtocol = 'saepe';

    $requestSecurity = new Adexchangebuyer2BiddersFilterSetsImpressionMetricsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->bidders->adexchangebuyer2BiddersFilterSetsImpressionMetricsList($request, $requestSecurity);

    if ($response->listImpressionMetricsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adexchangebuyer2BiddersFilterSetsList

Lists all filter sets for the account with the given account ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2BiddersFilterSetsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2BiddersFilterSetsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Adexchangebuyer2BiddersFilterSetsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'dolore';
    $request->alt = AltEnum::JSON;
    $request->callback = 'asperiores';
    $request->fields = 'adipisci';
    $request->key = 'non';
    $request->oauthToken = 'amet';
    $request->ownerName = 'beatae';
    $request->pageSize = 489509;
    $request->pageToken = 'a';
    $request->prettyPrint = false;
    $request->quotaUser = 'debitis';
    $request->uploadType = 'consectetur';
    $request->uploadProtocol = 'corporis';

    $requestSecurity = new Adexchangebuyer2BiddersFilterSetsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->bidders->adexchangebuyer2BiddersFilterSetsList($request, $requestSecurity);

    if ($response->listFilterSetsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adexchangebuyer2BiddersFilterSetsLosingBidsList

List all reasons for which bids lost in the auction, with the number of bids that lost for each reason.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2BiddersFilterSetsLosingBidsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2BiddersFilterSetsLosingBidsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Adexchangebuyer2BiddersFilterSetsLosingBidsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'laboriosam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'voluptates';
    $request->fields = 'libero';
    $request->filterSetName = 'vitae';
    $request->key = 'accusamus';
    $request->oauthToken = 'similique';
    $request->pageSize = 272437;
    $request->pageToken = 'aspernatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptas';
    $request->uploadType = 'voluptas';
    $request->uploadProtocol = 'voluptas';

    $requestSecurity = new Adexchangebuyer2BiddersFilterSetsLosingBidsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->bidders->adexchangebuyer2BiddersFilterSetsLosingBidsList($request, $requestSecurity);

    if ($response->listLosingBidsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsList

List all reasons for which winning bids were not billable, with the number of bids not billed for each reason.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'nobis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'adipisci';
    $request->fields = 'minus';
    $request->filterSetName = 'dolores';
    $request->key = 'blanditiis';
    $request->oauthToken = 'in';
    $request->pageSize = 296242;
    $request->pageToken = 'aliquam';
    $request->prettyPrint = false;
    $request->quotaUser = 'officiis';
    $request->uploadType = 'temporibus';
    $request->uploadProtocol = 'ullam';

    $requestSecurity = new Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->bidders->adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsList($request, $requestSecurity);

    if ($response->listNonBillableWinningBidsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
