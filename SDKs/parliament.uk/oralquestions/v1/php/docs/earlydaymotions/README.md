# earlyDayMotions

### Available Operations

* [publishedEarlyDayMotionGet](#publishedearlydaymotionget) - Returns a single Early Day Motion by ID
* [getEarlyDayMotionsList](#getearlydaymotionslist) - Returns a list of Early Day Motions

## publishedEarlyDayMotionGet

Get a single Early Day Motion which has the ID specified.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PublishedEarlyDayMotionGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PublishedEarlyDayMotionGetRequest();
    $request->id = 592845;

    $response = $sdk->earlyDayMotions->publishedEarlyDayMotionGet($request);

    if ($response->apiResponseListPublishedWrittenQuestion !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEarlyDayMotionsList

Get a list of Early Day Motions which meet the specified criteria. Only supports Published and Withdrawn status.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEarlyDayMotionsListRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetEarlyDayMotionsListParametersOrderByEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetEarlyDayMotionsListParametersStatusesEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEarlyDayMotionsListRequest();
    $request->parametersCurrentStatusDateEnd = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-04-24T16:27:50.833Z');
    $request->parametersCurrentStatusDateStart = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-04-14T16:47:33.722Z');
    $request->parametersEdmIds = [
        847252,
        423655,
        623564,
    ];
    $request->parametersIncludeSponsoredByMember = false;
    $request->parametersIsPrayer = false;
    $request->parametersMemberId = 645894;
    $request->parametersOrderBy = GetEarlyDayMotionsListParametersOrderByEnum::TITLE_ASC;
    $request->parametersSearchTerm = 'iure';
    $request->parametersSkip = 297534;
    $request->parametersStatuses = [
        GetEarlyDayMotionsListParametersStatusesEnum::PUBLISHED,
        GetEarlyDayMotionsListParametersStatusesEnum::WITHDRAWN,
        GetEarlyDayMotionsListParametersStatusesEnum::PUBLISHED,
        GetEarlyDayMotionsListParametersStatusesEnum::PUBLISHED,
    ];
    $request->parametersTabledEndDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-18T00:29:19.137Z');
    $request->parametersTabledStartDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-05-31T20:38:28.793Z');
    $request->parametersTake = 479977;
    $request->parametersUINWithAmendmentSuffix = 'excepturi';

    $response = $sdk->earlyDayMotions->getEarlyDayMotionsList($request);

    if ($response->apiResponseListPublishedWrittenQuestion !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
