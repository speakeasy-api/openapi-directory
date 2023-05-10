# datafeeds

### Available Operations

* [contentDatafeedsCustombatch](#contentdatafeedscustombatch) - Deletes, fetches, gets, inserts and updates multiple datafeeds in a single request.
* [contentDatafeedsDelete](#contentdatafeedsdelete) - Deletes a datafeed configuration from your Merchant Center account.
* [contentDatafeedsFetchnow](#contentdatafeedsfetchnow) - Invokes a fetch for the datafeed in your Merchant Center account. If you need to call this method more than once per day, we recommend you use the Products service to update your product data.
* [contentDatafeedsGet](#contentdatafeedsget) - Retrieves a datafeed configuration from your Merchant Center account.
* [contentDatafeedsInsert](#contentdatafeedsinsert) - Registers a datafeed configuration with your Merchant Center account.
* [contentDatafeedsList](#contentdatafeedslist) - Lists the configurations for datafeeds in your Merchant Center account.
* [contentDatafeedsUpdate](#contentdatafeedsupdate) - Updates a datafeed configuration of your Merchant Center account. Any fields that are not provided are deleted from the resource.

## contentDatafeedsCustombatch

Deletes, fetches, gets, inserts and updates multiple datafeeds in a single request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentDatafeedsCustombatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\DatafeedsCustomBatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\DatafeedsCustomBatchRequestEntry;
use \OpenAPI\OpenAPI\Models\Shared\Datafeed;
use \OpenAPI\OpenAPI\Models\Shared\DatafeedFetchSchedule;
use \OpenAPI\OpenAPI\Models\Shared\DatafeedFormat;
use \OpenAPI\OpenAPI\Models\Shared\DatafeedTarget;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentDatafeedsCustombatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentDatafeedsCustombatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->datafeedsCustomBatchRequest = new DatafeedsCustomBatchRequest();
    $request->datafeedsCustomBatchRequest->entries = [
        new DatafeedsCustomBatchRequestEntry(),
        new DatafeedsCustomBatchRequestEntry(),
        new DatafeedsCustomBatchRequestEntry(),
        new DatafeedsCustomBatchRequestEntry(),
    ];
    $request->accessToken = 'debitis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'maxime';
    $request->dryRun = false;
    $request->fields = 'deleniti';
    $request->key = 'facilis';
    $request->oauthToken = 'in';
    $request->prettyPrint = false;
    $request->quotaUser = 'architecto';
    $request->uploadType = 'architecto';
    $request->uploadProtocol = 'repudiandae';

    $requestSecurity = new ContentDatafeedsCustombatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->datafeeds->contentDatafeedsCustombatch($request, $requestSecurity);

    if ($response->datafeedsCustomBatchResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentDatafeedsDelete

Deletes a datafeed configuration from your Merchant Center account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentDatafeedsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentDatafeedsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentDatafeedsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'expedita';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'repellat';
    $request->datafeedId = 'quibusdam';
    $request->dryRun = false;
    $request->fields = 'sed';
    $request->key = 'saepe';
    $request->merchantId = 'pariatur';
    $request->oauthToken = 'accusantium';
    $request->prettyPrint = false;
    $request->quotaUser = 'consequuntur';
    $request->uploadType = 'praesentium';
    $request->uploadProtocol = 'natus';

    $requestSecurity = new ContentDatafeedsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->datafeeds->contentDatafeedsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentDatafeedsFetchnow

Invokes a fetch for the datafeed in your Merchant Center account. If you need to call this method more than once per day, we recommend you use the Products service to update your product data.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentDatafeedsFetchnowRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentDatafeedsFetchnowSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentDatafeedsFetchnowRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'sunt';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'illum';
    $request->datafeedId = 'pariatur';
    $request->dryRun = false;
    $request->fields = 'maxime';
    $request->key = 'ea';
    $request->merchantId = 'excepturi';
    $request->oauthToken = 'odit';
    $request->prettyPrint = false;
    $request->quotaUser = 'ea';
    $request->uploadType = 'accusantium';
    $request->uploadProtocol = 'ab';

    $requestSecurity = new ContentDatafeedsFetchnowSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->datafeeds->contentDatafeedsFetchnow($request, $requestSecurity);

    if ($response->datafeedsFetchNowResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentDatafeedsGet

Retrieves a datafeed configuration from your Merchant Center account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentDatafeedsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentDatafeedsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentDatafeedsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quidem';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptate';
    $request->datafeedId = 'autem';
    $request->fields = 'nam';
    $request->key = 'eaque';
    $request->merchantId = 'pariatur';
    $request->oauthToken = 'nemo';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptatibus';
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'fugiat';

    $requestSecurity = new ContentDatafeedsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->datafeeds->contentDatafeedsGet($request, $requestSecurity);

    if ($response->datafeed !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentDatafeedsInsert

Registers a datafeed configuration with your Merchant Center account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentDatafeedsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Datafeed;
use \OpenAPI\OpenAPI\Models\Shared\DatafeedFetchSchedule;
use \OpenAPI\OpenAPI\Models\Shared\DatafeedFormat;
use \OpenAPI\OpenAPI\Models\Shared\DatafeedTarget;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentDatafeedsInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentDatafeedsInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->datafeed = new Datafeed();
    $request->datafeed->attributeLanguage = 'aut';
    $request->datafeed->contentLanguage = 'cumque';
    $request->datafeed->contentType = 'corporis';
    $request->datafeed->fetchSchedule = new DatafeedFetchSchedule();
    $request->datafeed->fetchSchedule->dayOfMonth = 944124;
    $request->datafeed->fetchSchedule->fetchUrl = 'libero';
    $request->datafeed->fetchSchedule->hour = 749999;
    $request->datafeed->fetchSchedule->minuteOfHour = 171629;
    $request->datafeed->fetchSchedule->password = 'quis';
    $request->datafeed->fetchSchedule->paused = false;
    $request->datafeed->fetchSchedule->timeZone = 'totam';
    $request->datafeed->fetchSchedule->username = 'Jenifer.Becker';
    $request->datafeed->fetchSchedule->weekday = 'eos';
    $request->datafeed->fileName = 'perferendis';
    $request->datafeed->format = new DatafeedFormat();
    $request->datafeed->format->columnDelimiter = 'dolores';
    $request->datafeed->format->fileEncoding = 'minus';
    $request->datafeed->format->quotingMode = 'quam';
    $request->datafeed->id = 'dolor';
    $request->datafeed->intendedDestinations = [
        'nostrum',
        'hic',
        'recusandae',
        'omnis',
    ];
    $request->datafeed->kind = 'facilis';
    $request->datafeed->name = 'George Sawayn';
    $request->datafeed->targetCountry = 'error';
    $request->datafeed->targets = [
        new DatafeedTarget(),
    ];
    $request->accessToken = 'occaecati';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'adipisci';
    $request->dryRun = false;
    $request->fields = 'asperiores';
    $request->key = 'earum';
    $request->merchantId = 'modi';
    $request->oauthToken = 'iste';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorum';
    $request->uploadType = 'deleniti';
    $request->uploadProtocol = 'pariatur';

    $requestSecurity = new ContentDatafeedsInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->datafeeds->contentDatafeedsInsert($request, $requestSecurity);

    if ($response->datafeed !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentDatafeedsList

Lists the configurations for datafeeds in your Merchant Center account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentDatafeedsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentDatafeedsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentDatafeedsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'nobis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'delectus';
    $request->fields = 'quaerat';
    $request->key = 'quos';
    $request->maxResults = 398221;
    $request->merchantId = 'dolorem';
    $request->oauthToken = 'dolorem';
    $request->pageToken = 'dolor';
    $request->prettyPrint = false;
    $request->quotaUser = 'qui';
    $request->uploadType = 'ipsum';
    $request->uploadProtocol = 'hic';

    $requestSecurity = new ContentDatafeedsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->datafeeds->contentDatafeedsList($request, $requestSecurity);

    if ($response->datafeedsListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentDatafeedsUpdate

Updates a datafeed configuration of your Merchant Center account. Any fields that are not provided are deleted from the resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentDatafeedsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Datafeed;
use \OpenAPI\OpenAPI\Models\Shared\DatafeedFetchSchedule;
use \OpenAPI\OpenAPI\Models\Shared\DatafeedFormat;
use \OpenAPI\OpenAPI\Models\Shared\DatafeedTarget;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentDatafeedsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentDatafeedsUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->datafeed = new Datafeed();
    $request->datafeed->attributeLanguage = 'cum';
    $request->datafeed->contentLanguage = 'voluptate';
    $request->datafeed->contentType = 'dignissimos';
    $request->datafeed->fetchSchedule = new DatafeedFetchSchedule();
    $request->datafeed->fetchSchedule->dayOfMonth = 970237;
    $request->datafeed->fetchSchedule->fetchUrl = 'amet';
    $request->datafeed->fetchSchedule->hour = 680545;
    $request->datafeed->fetchSchedule->minuteOfHour = 254356;
    $request->datafeed->fetchSchedule->password = 'veritatis';
    $request->datafeed->fetchSchedule->paused = false;
    $request->datafeed->fetchSchedule->timeZone = 'ipsa';
    $request->datafeed->fetchSchedule->username = 'Anabelle.Kerluke';
    $request->datafeed->fetchSchedule->weekday = 'accusamus';
    $request->datafeed->fileName = 'quidem';
    $request->datafeed->format = new DatafeedFormat();
    $request->datafeed->format->columnDelimiter = 'voluptatibus';
    $request->datafeed->format->fileEncoding = 'voluptas';
    $request->datafeed->format->quotingMode = 'natus';
    $request->datafeed->id = 'eos';
    $request->datafeed->intendedDestinations = [
        'sit',
        'fugiat',
        'ab',
    ];
    $request->datafeed->kind = 'soluta';
    $request->datafeed->name = 'Ted Kling';
    $request->datafeed->targetCountry = 'omnis';
    $request->datafeed->targets = [
        new DatafeedTarget(),
        new DatafeedTarget(),
        new DatafeedTarget(),
        new DatafeedTarget(),
    ];
    $request->accessToken = 'distinctio';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nihil';
    $request->datafeedId = 'ipsum';
    $request->dryRun = false;
    $request->fields = 'voluptate';
    $request->key = 'id';
    $request->merchantId = 'saepe';
    $request->oauthToken = 'eius';
    $request->prettyPrint = false;
    $request->quotaUser = 'aspernatur';
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'amet';

    $requestSecurity = new ContentDatafeedsUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->datafeeds->contentDatafeedsUpdate($request, $requestSecurity);

    if ($response->datafeed !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
